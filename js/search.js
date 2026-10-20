// ========================================
// POCKETMCS SEARCH ENGINE
// Shared by every equipment page and the home page global search.
// Tokenized, ranked, typo-tolerant matching with synonyms and item-number intent.
// ========================================

(function (global) {
    'use strict';

    const PMCS = global.PMCS || (global.PMCS = {});
    PMCS.platforms = PMCS.platforms || {};
    PMCS.platformOrder = ['hmmwv', 'lmtv', 'gen', 'trailer'];

    PMCS.register = function (id, config) {
        config.id = id;
        PMCS.platforms[id] = config;
        return config;
    };

    // ----------------------------------------
    // Text normalization
    // ----------------------------------------

    const CONTRACTIONS = {
        "won't": 'will not', "can't": 'cannot', "don't": 'do not', "doesn't": 'does not',
        "didn't": 'did not', "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not',
        "weren't": 'were not', "haven't": 'have not', "hasn't": 'has not', "hadn't": 'had not',
        "wouldn't": 'would not', "couldn't": 'could not', "shouldn't": 'should not',
        "mustn't": 'must not', "needn't": 'need not', "it's": 'it is'
    };

    const STOPWORDS = new Set([
        'a', 'an', 'the', 'and', 'or', 'of', 'to', 'in', 'on', 'at', 'for', 'with', 'by', 'from',
        'is', 'are', 'was', 'were', 'be', 'been', 'it', 'its', 'my', 'me', 'i', 'this', 'that',
        'will', 'would', 'do', 'does', 'did', 'not', 'no', 'cannot', 'has', 'have', 'had',
        'when', 'while', 'very', 'too', 'some', 'any', 'there', 'up', 'out', 'keeps', 'keep',
        'getting', 'get', 'gets', 'seems', 'like', 'just', 'still', 'all',
        // Negations typed without apostrophes ("wont start")
        'wont', 'cant', 'dont', 'doesnt', 'didnt', 'isnt', 'arent', 'wasnt', 'werent',
        'wouldnt', 'couldnt', 'shouldnt', 'aint'
    ]);

    // Domain synonyms (keys and values are stems). Applied in both directions where listed both ways.
    const SYNONYM_GROUPS = [
        ['leak', 'drip', 'puddle', 'seep', 'weep'],
        ['tire', 'tyre', 'flat', 'deflat'],
        ['light', 'lamp', 'bulb', 'headlight'],
        ['coolant', 'antifreeze', 'radiator'],
        ['battery', 'batt', 'batteri'],
        ['brake', 'braking'],
        ['start', 'crank', 'starter'],
        ['hot', 'overheat', 'temperature', 'temp'],
        ['ac', 'conditioner', 'air-condition'],
        ['seatbelt', 'belt'],
        ['wiper', 'windshield'],
        ['horn', 'honk'],
        ['fuel', 'diesel', 'gas'],
        ['steer', 'steering', 'wheel'],
        ['noise', 'sound', 'squeal', 'grind', 'rattle', 'knock'],
        ['smoke', 'exhaust'],
        ['volt', 'voltage', 'electrical'],
        ['gauge', 'meter', 'indicator'],
        ['crack', 'broken', 'damage', 'damag'],
        ['loose', 'missing'],
        ['cti', 'ctis', 'inflation']
    ];

    const SYNONYMS = new Map();
    SYNONYM_GROUPS.forEach(group => {
        group.forEach(word => {
            const key = stem(word);
            const set = SYNONYMS.get(key) || new Set();
            group.forEach(other => { if (other !== word) set.add(stem(other)); });
            SYNONYMS.set(key, set);
        });
    });

    function expandContractions(text) {
        let out = text;
        for (const [contraction, expansion] of Object.entries(CONTRACTIONS)) {
            out = out.replace(new RegExp(`\\b${contraction}\\b`, 'g'), expansion);
        }
        return out;
    }

    function normalize(text) {
        if (!text) return '';
        let out = String(text).toLowerCase()
            .replace(/[‘’`]/g, "'")
            .replace(/\ba\/c\b/g, 'ac');
        out = expandContractions(out);
        return out.replace(/'/g, '').replace(/[^\w\s-]/g, ' ').replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
    }

    function stem(word) {
        let w = word;
        if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y';
        if (w.length > 5 && w.endsWith('ing')) w = w.slice(0, -3);
        else if (w.length > 4 && w.endsWith('ed')) w = w.slice(0, -2);
        else if (w.length > 4 && /(ss|x|ch|sh)es$/.test(w)) w = w.slice(0, -2);
        else if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) w = w.slice(0, -1);
        return w;
    }

    function tokenize(text, keepStopwords) {
        const words = normalize(text).split(' ').filter(Boolean);
        return words.filter(w => keepStopwords || !STOPWORDS.has(w)).map(stem);
    }

    // Bounded Levenshtein distance; returns max + 1 once the bound is exceeded.
    function editDistance(a, b, max) {
        if (Math.abs(a.length - b.length) > max) return max + 1;
        let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
        for (let i = 1; i <= a.length; i++) {
            const curr = [i];
            let rowMin = i;
            for (let j = 1; j <= b.length; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
                if (curr[j] < rowMin) rowMin = curr[j];
            }
            if (rowMin > max) return max + 1;
            prev = curr;
        }
        return prev[b.length];
    }

    // ----------------------------------------
    // Index
    // ----------------------------------------

    const FIELD_WEIGHTS = [
        ['location', 8],
        ['commonFaults', 6],
        ['keywords', 5],
        ['system', 4],
        ['procedure', 2],
        ['notFullyMissionCapable', 1]
    ];

    const ITEM_NUMBER_QUERY = /^(?:item\s*)?(?:no\.?\s*)?#?\s*(t?\d+(?:[.-]\d+)*)$/i;

    class SearchIndex {
        constructor(platform) {
            this.platform = platform;
            this.vocab = new Set();
            this.docs = platform.items.map((item, order) => {
                const weights = new Map();
                const phrases = [];
                FIELD_WEIGHTS.forEach(([field, weight]) => {
                    const value = item[field];
                    if (!value) return;
                    const text = Array.isArray(value) ? value.join(' | ') : value;
                    tokenize(text, false).forEach(token => {
                        this.vocab.add(token);
                        if ((weights.get(token) || 0) < weight) weights.set(token, weight);
                    });
                    if (weight >= 5) phrases.push([normalize(text), weight]);
                });
                const display = platform.displayNumber ? platform.displayNumber(item) : item.itemNumber;
                return {
                    item, order, weights, phrases,
                    number: item.itemNumber.toLowerCase(),
                    display: String(display).toLowerCase()
                };
            });
            this.vocabList = Array.from(this.vocab);
        }

        // Every way a single query token can match the vocabulary, with a quality score.
        expandToken(token) {
            const expansions = new Map([[token, 1]]);
            const add = (word, quality) => {
                if ((expansions.get(word) || 0) < quality) expansions.set(word, quality);
            };
            (SYNONYMS.get(token) || []).forEach(word => add(word, 0.75));
            const maxEdits = token.length >= 7 ? 2 : token.length >= 4 ? 1 : 0;
            for (const word of this.vocabList) {
                if (word === token) continue;
                if (token.length >= 2 && word.startsWith(token)) add(word, token.length >= 4 ? 0.85 : 0.6);
                else if (maxEdits && editDistance(token, word, maxEdits) <= maxEdits) add(word, 0.6);
            }
            return expansions;
        }

        exactNumberMatches(query) {
            const match = query.trim().match(ITEM_NUMBER_QUERY);
            if (!match) return [];
            const wanted = match[1].toLowerCase();
            return this.docs.filter(doc => doc.number === wanted || doc.display === wanted);
        }

        // Returns { mode: 'empty'|'all'|'partial'|'none', results: [{item, score}], exact: [item], terms: [string] }
        search(query) {
            const raw = (query || '').trim();
            if (!raw) return { mode: 'empty', results: [], related: [], exact: [], terms: [] };

            const exactDocs = this.exactNumberMatches(raw);
            const tokens = Array.from(new Set(tokenize(raw, false)));
            const phrase = normalize(raw);
            const expansions = tokens.map(token => this.expandToken(token));
            const terms = new Set();

            const scored = this.docs.map(doc => {
                let score = 0;
                let matched = 0;
                expansions.forEach(expansion => {
                    let best = 0;
                    let bestWord = null;
                    expansion.forEach((quality, word) => {
                        const weight = doc.weights.get(word);
                        if (weight && weight * quality > best) { best = weight * quality; bestWord = word; }
                    });
                    if (best > 0) { matched++; score += best; terms.add(bestWord); }
                });
                if (phrase.includes(' ')) {
                    doc.phrases.forEach(([text, weight]) => { if (text.includes(phrase)) score += weight * 2; });
                }
                if (exactDocs.includes(doc)) { score += 1000; matched = tokens.length; }
                return { doc, score, matched };
            }).filter(entry => entry.score > 0);

            const byScore = (a, b) => b.score - a.score || a.doc.order - b.doc.order;
            const toResult = entry => ({ item: entry.doc.item, score: entry.score });
            const full = scored.filter(entry => entry.matched === tokens.length).sort(byScore);
            const mode = full.length ? 'all' : scored.length ? 'partial' : 'none';
            const list = full.length ? full : scored.sort(byScore);
            // When strict matches are scarce, offer items matching part of the query as a second tier.
            const related = full.length && full.length < 5 && tokens.length > 1
                ? scored.filter(entry => entry.matched < tokens.length).sort(byScore).slice(0, 8)
                : [];

            return {
                mode,
                results: list.map(toResult),
                related: related.map(toResult),
                exact: exactDocs.map(doc => doc.item),
                terms: Array.from(terms).concat(tokens).filter(Boolean)
            };
        }

        // Autocomplete phrases drawn from the platform's common faults.
        suggest(query, limit) {
            const max = limit || 6;
            if (!this._phrases) {
                const counts = new Map();
                this.platform.items.forEach(item => (item.commonFaults || []).forEach(fault => {
                    const key = fault.trim();
                    counts.set(key, (counts.get(key) || 0) + 1);
                }));
                this._phrases = Array.from(counts.entries())
                    .sort((a, b) => b[1] - a[1] || a[0].length - b[0].length)
                    .map(([text]) => ({ text, norm: normalize(text) }));
            }
            const words = normalize(query).split(' ').filter(Boolean);
            if (!words.length) return this._phrases.slice(0, max).map(p => p.text);
            const seen = new Set();
            const out = [];
            for (const p of this._phrases) {
                const pw = p.norm.split(' ');
                const ok = words.every((w, i) => (i === words.length - 1
                    ? pw.some(x => x.startsWith(w))
                    : pw.some(x => x === w || stem(x) === stem(w))));
                if (ok && !seen.has(p.norm) && p.norm !== normalize(query)) {
                    seen.add(p.norm);
                    out.push(p.text);
                    if (out.length >= max) break;
                }
            }
            return out;
        }
    }

    // ----------------------------------------
    // Public helpers
    // ----------------------------------------

    PMCS.getIndex = function (platform) {
        if (!platform._index) platform._index = new SearchIndex(platform);
        return platform._index;
    };

    PMCS.escapeHtml = function (text) {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return String(text == null ? '' : text).replace(/[&<>"']/g, m => map[m]);
    };

    // Escapes text, then wraps words that start with any matched term in <mark>.
    PMCS.highlight = function (text, terms) {
        const safe = PMCS.escapeHtml(text);
        const usable = (terms || []).filter(t => t && t.length >= 2)
            .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .sort((a, b) => b.length - a.length);
        if (!usable.length) return safe;
        const pattern = new RegExp(`\\b(${usable.join('|')})[\\w]*`, 'gi');
        return safe.replace(/(<[^>]*>|&[^;]+;)|([^<&]+)/g, (m, tag, plain) =>
            tag ? tag : plain.replace(pattern, '<mark>$&</mark>'));
    };

    // Deadline classification for an item's "Not Fully Mission Capable If" text.
    PMCS.nfmcStatus = function (nfmc) {
        if (!nfmc || nfmc.trim() === 'N/A') return 'na';
        const lower = nfmc.toLowerCase();
        if (lower.includes('if mission') || lower.includes('mission-dependent') ||
            lower.includes('if required') || lower.includes('if equipped') ||
            lower.includes('n/a otherwise') || lower.includes('when mission')) return 'conditional';
        return 'deadline';
    };

    PMCS.normalize = normalize;
    PMCS.tokenize = tokenize;
    PMCS.SearchIndex = SearchIndex;

    if (typeof module !== 'undefined' && module.exports) module.exports = PMCS;
})(typeof window !== 'undefined' ? window : globalThis);
