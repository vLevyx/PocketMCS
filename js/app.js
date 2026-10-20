// ========================================
// POCKETMCS EQUIPMENT PAGE
// One engine for every platform page. The page's data file registers the platform;
// <body data-platform="..."> selects it.
// ========================================

(function () {
    'use strict';

    const PMCS = window.PMCS;
    const shell = PMCS.shell;
    const esc = PMCS.escapeHtml;
    const platform = PMCS.platforms[document.body.dataset.platform];
    if (!platform) {
        console.error('PocketMCS: no platform registered for', document.body.dataset.platform);
        return;
    }
    const index = PMCS.getIndex(platform);

    const INTERVALS = [
        ['before', 'Before', 'Before Operation'],
        ['during', 'During', 'During Operation'],
        ['after', 'After', 'After Operation'],
        ['weekly', 'Weekly', 'Weekly'],
        ['monthly', 'Monthly', 'Monthly']
    ].filter(([key]) => platform.items.some(item => item.interval.toLowerCase() === key));

    const SYSTEMS = Array.from(new Set(platform.items.map(item => item.system).filter(Boolean)))
        .sort((a, b) => a.localeCompare(b));

    const VARIANTS = new Map();
    platform.variantGroups.forEach(group => group.options.forEach(([value, label]) => VARIANTS.set(value, label)));

    const RECENT_KEY = `pocketmcs-recent-${platform.id}`;
    const RAIL_MIN_ROWS = 20;

    const displayNumber = item => (platform.displayNumber ? platform.displayNumber(item) : item.itemNumber);
    const tableOf = item => (platform.tableOf ? platform.tableOf(item) : null);
    const intervalOf = item => item.interval.toLowerCase();

    // ----------------------------------------
    // State (mirrored to the URL so refresh/share keep context)
    // ----------------------------------------

    const state = { q: '', interval: 'all', system: 'all', variant: 'all' };

    function readUrlState() {
        const params = new URLSearchParams(location.search);
        state.q = params.get('q') || '';
        const interval = (params.get('interval') || 'all').toLowerCase();
        state.interval = INTERVALS.some(([key]) => key === interval) ? interval : 'all';
        const system = (params.get('system') || 'all').toLowerCase();
        state.system = SYSTEMS.some(s => s.toLowerCase() === system) ? system : 'all';
        const variant = (params.get('variant') || 'all').toLowerCase();
        state.variant = VARIANTS.has(variant) ? variant : 'all';
    }

    let urlTimer = null;
    function writeUrlState() {
        clearTimeout(urlTimer);
        urlTimer = setTimeout(() => {
            const params = new URLSearchParams();
            if (state.q.trim()) params.set('q', state.q.trim());
            ['interval', 'system', 'variant'].forEach(key => { if (state[key] !== 'all') params.set(key, state[key]); });
            const query = params.toString();
            history.replaceState(null, '', location.pathname + (query ? `?${query}` : '') + location.hash);
        }, 250);
    }

    function passesFilters(item, overrides) {
        const s = Object.assign({}, state, overrides);
        return (s.interval === 'all' || intervalOf(item) === s.interval) &&
            (s.system === 'all' || (item.system || '').toLowerCase() === s.system) &&
            platform.matchesVariant(item, s.variant);
    }

    function activeFilterCount() {
        return ['interval', 'system', 'variant'].filter(key => state[key] !== 'all').length;
    }

    // ----------------------------------------
    // DOM references
    // ----------------------------------------

    const els = {
        appbar: document.getElementById('appbar'),
        sentinel: document.querySelector('.header-sentinel'),
        input: document.getElementById('searchInput'),
        clear: document.getElementById('searchClear'),
        filterBtn: document.getElementById('filterBtn'),
        filterBadge: document.getElementById('filterBadge'),
        chipRow: document.getElementById('chipRow'),
        panel: document.getElementById('searchPanel'),
        progress: document.getElementById('scrollProgress'),
        banner: document.getElementById('variantBanner'),
        meta: document.getElementById('resultsMeta'),
        results: document.getElementById('results'),
        noResults: document.getElementById('noResults'),
        rail: document.getElementById('indexRail'),
        fab: document.getElementById('backToTop'),
        copyModal: document.getElementById('copyModal'),
        intervalModal: document.getElementById('intervalInfoModal'),
        vehicleModal: document.getElementById('vehicleInfoModal')
    };

    // ----------------------------------------
    // Item list: built once, then filtered/reordered in place
    // ----------------------------------------

    const rows = new Map();
    const sections = {};

    const nfmcStatus = PMCS.nfmcStatus;

    function nfmcBadge(nfmc) {
        const status = nfmcStatus(nfmc);
        if (status === 'deadline') return '<span class="nfmc-badge nfmc-deadline">🔴 Deadline Item</span>';
        if (status === 'conditional') return '<span class="nfmc-badge nfmc-conditional">🟡 Conditional</span>';
        return '<span class="nfmc-badge nfmc-ok">🟢 Non-Deadline</span>';
    }

    const STATUS_LABEL = { deadline: 'Deadline item', conditional: 'Conditional', na: 'Non-deadline' };

    function procedureClass(procedure) {
        const lower = procedure.toLowerCase();
        if (lower.includes('warning')) return 'warning';
        if (lower.includes('caution')) return 'caution';
        if (lower.includes('note')) return 'note';
        return '';
    }

    function formatProcedure(text) {
        return esc(text)
            .replace(/WARNING/g, '<strong class="proc-warning">WARNING</strong>')
            .replace(/CAUTION/g, '<strong class="proc-caution">CAUTION</strong>')
            .replace(/\bNOTE\b/g, '<strong class="proc-note">NOTE</strong>')
            .replace(/DRIVER/g, '<strong>DRIVER</strong>')
            .split('\n')
            .map(line => line.trim())
            .filter(Boolean)
            .map(line => `<p>${line}</p>`)
            .join('');
    }

    function makeSection(key, title) {
        const section = document.createElement('section');
        section.className = 'item-section';
        section.dataset.section = key;
        const dot = INTERVALS.some(([k]) => k === key) ? `<span class="section-dot interval-${key}" aria-hidden="true"></span>` : '';
        section.innerHTML = `
            <h2 class="section-header">${dot}<span class="section-title">${esc(title)}</span><span class="section-count"></span></h2>
            <div class="item-list"></div>`;
        sections[key] = { el: section, list: section.querySelector('.item-list'), count: section.querySelector('.section-count') };
        return section;
    }

    function makeRow(item, order) {
        const key = item.itemNumber;
        const interval = intervalOf(item);
        const status = nfmcStatus(item.notFullyMissionCapable);
        const table = tableOf(item);
        const specific = platform.specificTo ? platform.specificTo(item) : null;
        const el = document.createElement('article');
        el.className = 'item-row' + (specific ? ' is-specific' : '');
        el.id = `item-${key}`;
        el.dataset.key = key;
        el.innerHTML = `
            <button class="row-head" type="button" aria-expanded="false" aria-controls="body-${esc(key)}">
                <span class="row-num">${esc(displayNumber(item))}${table && table !== '2-1' ? `<small>T${esc(table)}</small>` : ''}</span>
                <span class="row-text">
                    <span class="row-title">${esc(item.location)}</span>
                    <span class="row-meta"><span class="row-interval interval-${interval}">${esc(item.interval)}</span><span class="row-meta-rest">${item.system ? ` · ${esc(item.system)}` : ''}${specific ? ` · <span class="row-specific">${esc(specific)} only</span>` : ''}</span></span>
                    <span class="row-match" hidden></span>
                </span>
                <span class="row-status status-${status}" role="img" aria-label="${STATUS_LABEL[status]}" title="${STATUS_LABEL[status]}"></span>
                <span class="row-chevron" aria-hidden="true"></span>
            </button>
            <div class="row-body" id="body-${esc(key)}" role="region" aria-label="Item ${esc(displayNumber(item))} details">
                <div class="row-body-inner"></div>
            </div>`;
        const row = {
            item, order, el, home: sections[interval].list,
            head: el.querySelector('.row-head'),
            title: el.querySelector('.row-title'),
            match: el.querySelector('.row-match'),
            inner: el.querySelector('.row-body-inner'),
            rendered: false
        };
        rows.set(key, row);
        return row;
    }

    function renderDetails(row) {
        const item = row.item;
        const table = tableOf(item);
        const specific = platform.specificTo ? platform.specificTo(item) : null;
        const isNA = item.notFullyMissionCapable.trim() === 'N/A';
        const faults = item.commonFaults && item.commonFaults.length ? `
            <div class="procedure-section">
                <div class="procedure-title">🔧 Common Faults</div>
                <div class="procedure-content common-faults">${item.commonFaults.map(f => `<span class="fault-tag">${esc(f)}</span>`).join('')}</div>
            </div>` : '';
        row.inner.innerHTML = `
            <div class="row-detail">
                <div class="row-badges">
                    <span class="tm-ref-badge">${esc(platform.tm)}${table ? ` · Table ${esc(table)}` : ''}</span>
                    ${item.system ? `<span class="system-badge">${esc(item.system)}</span>` : ''}
                    <span class="interval-badge interval-${intervalOf(item)}">${esc(item.interval)}</span>
                    ${nfmcBadge(item.notFullyMissionCapable)}
                    ${specific ? `<span class="vehicle-badge">${esc(specific)}</span>` : ''}
                </div>
                ${faults}
                <div class="procedure-section">
                    <div class="procedure-title">📋 Crew Member Procedure</div>
                    <div class="procedure-content ${procedureClass(item.procedure)}">${formatProcedure(item.procedure)}</div>
                </div>
                <div class="procedure-section">
                    <div class="procedure-title">⚠️ Not Fully Mission Capable If</div>
                    <div class="procedure-content ${isNA ? 'mission-capable na' : 'mission-capable'}"><p>${esc(item.notFullyMissionCapable)}</p></div>
                </div>
                <div class="row-actions">
                    <button class="copy-btn" type="button" data-action="copy">📋 Copy for 5988 Form</button>
                    <button class="btn-tonal" type="button" data-action="share">Share link</button>
                </div>
            </div>`;
        row.rendered = true;
    }

    function buildList() {
        const frag = document.createDocumentFragment();
        frag.appendChild(makeSection('search', 'Best matches'));
        frag.appendChild(makeSection('related', 'Related items'));
        INTERVALS.forEach(([key, , label]) => frag.appendChild(makeSection(key, label)));
        platform.items.forEach((item, order) => {
            const row = makeRow(item, order);
            row.home.appendChild(row.el);
        });
        els.results.innerHTML = '';
        els.results.appendChild(frag);
    }

    function setExpanded(row, open, opts) {
        if (open && !row.rendered) renderDetails(row);
        row.el.classList.toggle('is-open', open);
        row.head.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open && opts && opts.reveal) revealRow(row);
    }

    // Keep an opened row's header just below the sticky bar.
    function revealRow(row, instant) {
        const top = row.el.getBoundingClientRect().top + window.scrollY - rowLandingOffset();
        const needsScroll = row.el.getBoundingClientRect().top < rowLandingOffset() ||
            row.el.getBoundingClientRect().top > window.innerHeight * 0.55;
        if (needsScroll) window.scrollTo({ top, behavior: instant || shell.prefersReducedMotion() ? 'auto' : 'smooth' });
    }

    // Height covered by the sticky bar (search row + chip row).
    function stickyOffset() {
        return els.appbar ? els.appbar.offsetHeight : 0;
    }

    // Where a row's top should land: below the sticky bar and the sticky section header.
    function rowLandingOffset() {
        const header = els.results.querySelector('.item-section:not([hidden]) .section-header');
        return stickyOffset() + (header ? header.offsetHeight : 0) + 6;
    }

    // ----------------------------------------
    // Applying state to the list
    // ----------------------------------------

    let lastMode = 'browse';
    let lastSearch = null;

    function apply(opts) {
        const options = opts || {};
        const query = state.q.trim();
        let visibleCount = 0;

        if (!query) {
            if (lastMode !== 'browse') {
                platform.items.forEach(item => { const row = rows.get(item.itemNumber); row.home.appendChild(row.el); });
            }
            rows.forEach(row => {
                const show = passesFilters(row.item);
                row.el.hidden = !show;
                if (show) visibleCount++;
                setHighlight(row, null);
            });
            INTERVALS.forEach(([key]) => {
                const count = sections[key].list.querySelectorAll('.item-row:not([hidden])').length;
                sections[key].count.textContent = count;
                sections[key].el.hidden = count === 0;
            });
            sections.search.el.hidden = true;
            sections.related.el.hidden = true;
            lastMode = 'browse';
            lastSearch = null;
        } else {
            const result = index.search(query);
            const results = result.results.filter(r => passesFilters(r.item));
            const related = (result.related || []).filter(r => passesFilters(r.item));
            [sections.search.list, sections.related.list].forEach(list => {
                Array.from(list.children).forEach(el => rows.get(el.dataset.key).home.appendChild(el));
            });
            rows.forEach(row => { row.el.hidden = true; });
            results.forEach(r => placeResult(r, sections.search.list, result.terms));
            related.forEach(r => placeResult(r, sections.related.list, result.terms));
            INTERVALS.forEach(([key]) => { sections[key].el.hidden = true; });
            sections.search.el.hidden = results.length === 0;
            sections.search.el.querySelector('.section-title').textContent =
                result.mode === 'partial' ? 'Closest matches' : 'Best matches';
            sections.search.count.textContent = results.length;
            sections.related.el.hidden = related.length === 0;
            sections.related.count.textContent = related.length;
            visibleCount = results.length + related.length;
            lastMode = 'search';
            lastSearch = Object.assign({}, result, { results, related });
            if (results.length === 1 && options.fromTyping) setExpanded(rows.get(results[0].item.itemNumber), true);
        }

        updateMeta(visibleCount, query);
        updateNoResults(visibleCount, query);
        updateChips();
        updateBanner();
        updateRail();
        writeUrlState();
        if (options.scrollToTop) scrollListToTop();
    }

    function placeResult(result, list, terms) {
        const row = rows.get(result.item.itemNumber);
        row.el.hidden = false;
        list.appendChild(row.el);
        setHighlight(row, terms);
    }

    function setHighlight(row, terms) {
        if (!terms) {
            if (row.highlighted) {
                row.title.textContent = row.item.location;
                row.match.hidden = true;
                row.highlighted = false;
            }
            return;
        }
        row.title.innerHTML = PMCS.highlight(row.item.location, terms);
        // Show the fault phrase that explains why this item matched.
        const phrase = (row.item.commonFaults || []).concat(row.item.keywords || [])
            .find(text => /<mark>/.test(PMCS.highlight(text, terms)));
        if (phrase && !/<mark>/.test(row.title.innerHTML)) {
            row.match.innerHTML = `“${PMCS.highlight(phrase, terms)}”`;
            row.match.hidden = false;
        } else {
            row.match.hidden = true;
        }
        row.highlighted = true;
    }

    function scrollListToTop() {
        const top = els.meta.getBoundingClientRect().top + window.scrollY - stickyOffset() - 8;
        if (window.scrollY > top) window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
    }

    function updateMeta(count, query) {
        const parts = [];
        if (query) {
            const label = lastSearch && lastSearch.mode === 'partial' ? 'closest matches for' : count === 1 ? 'match for' : 'matches for';
            parts.push(`<strong>${count}</strong> ${label} “${esc(query)}”`);
        } else {
            parts.push(`<strong>${count}</strong> ${count === 1 ? 'item' : 'items'}`);
            if (state.interval !== 'all') parts.push(esc(INTERVALS.find(([k]) => k === state.interval)[1]));
        }
        if (state.system !== 'all') parts.push(esc(SYSTEMS.find(s => s.toLowerCase() === state.system)));
        if (state.variant !== 'all') parts.push(esc(VARIANTS.get(state.variant).split(/[ /]/)[0]));
        els.meta.innerHTML = `<span>${parts.join(' · ')}</span>` +
            (query && count > 1 ? '<span class="results-meta-hint">Sorted by relevance</span>' : '');
    }

    function updateNoResults(count, query) {
        els.noResults.hidden = count > 0;
        if (count > 0) return;
        const withoutFilters = query ? index.search(query).results.length : platform.items.length;
        const filtersHide = activeFilterCount() > 0 && withoutFilters > 0;
        els.noResults.innerHTML = `
            <div class="no-results-icon">⚠️</div>
            <p>${query ? `No items match “${esc(query)}”` : 'No items match these filters.'}</p>
            ${filtersHide ? `<p class="no-results-sub">${withoutFilters} ${withoutFilters === 1 ? 'item matches' : 'items match'} with filters off.</p>` : ''}
            <div class="no-results-actions">
                ${filtersHide ? '<button class="btn-tonal is-primary" type="button" data-action="reset-filters">Clear filters</button>' : ''}
                ${query ? '<button class="btn-tonal" type="button" data-action="clear-search">Clear search</button>' : ''}
                ${query ? `<a class="btn-tonal" href="index.html?q=${encodeURIComponent(query)}">Search all equipment</a>` : ''}
            </div>`;
    }

    // ----------------------------------------
    // Chip row, filter badge, variant banner
    // ----------------------------------------

    function updateChips() {
        const chips = [];
        if (state.variant !== 'all') {
            chips.push(`<button class="chip is-selected is-removable" type="button" data-remove="variant" aria-label="Remove ${esc(VARIANTS.get(state.variant))} filter">${esc(VARIANTS.get(state.variant).split(/[ /]/)[0])}<span aria-hidden="true">✕</span></button>`);
        }
        if (state.system !== 'all') {
            const label = SYSTEMS.find(s => s.toLowerCase() === state.system);
            chips.push(`<button class="chip is-selected is-removable" type="button" data-remove="system" aria-label="Remove ${esc(label)} filter">${esc(label)}<span aria-hidden="true">✕</span></button>`);
        }
        chips.push('<span class="chip-group" role="radiogroup" aria-label="Interval">' +
            [['all', 'All']].concat(INTERVALS).map(([key, label]) =>
                `<button class="chip${state.interval === key ? ' is-selected' : ''}" type="button" role="radio" aria-checked="${state.interval === key}" data-interval="${key}">${key !== 'all' ? `<span class="chip-dot interval-${key}" aria-hidden="true"></span>` : ''}${label}</button>`).join('') +
            '</span>');
        chips.push('<span class="chip-divider" aria-hidden="true"></span>');
        chips.push('<button class="chip chip-tool" type="button" data-tool="jump"><span class="chip-hash" aria-hidden="true">#</span>Go to item</button>');
        chips.push('<button class="chip chip-tool chip-inspect" type="button" data-tool="inspect">📋 Inspect</button>');
        chips.push('<button class="chip chip-tool" type="button" data-tool="intervals"><img src="images/interval.png" alt="" class="chip-img">Intervals</button>');

        const scroller = els.chipRow;
        const scrollLeft = scroller.scrollLeft;
        scroller.innerHTML = chips.join('');
        scroller.scrollLeft = scrollLeft;

        const count = activeFilterCount() - (state.interval !== 'all' ? 1 : 0);
        els.filterBadge.textContent = count;
        els.filterBadge.hidden = count === 0;
        els.filterBtn.classList.toggle('is-active', count > 0);
        els.filterBtn.setAttribute('aria-label', count ? `Filters (${count} active)` : 'Filters');
    }

    function updateBanner() {
        if (!els.banner) return;
        const info = state.variant !== 'all' && platform.variantInfo[state.variant];
        els.banner.hidden = !info;
        if (!info) return;
        const count = platform.items.filter(item => platform.matchesVariant(item, state.variant)).length;
        const note = platform.variantNote ? platform.variantNote(state.variant) : null;
        els.banner.innerHTML = `
            <span class="variant-banner-icon"><img src="${esc(platform.image)}" alt=""></span>
            <span class="variant-banner-text"><strong>${esc(info.name)}</strong><span>${esc(note || info.description)}</span></span>
            <span class="stat-badge">${count} Items</span>
            <button class="variant-banner-info" type="button" data-action="variant-info" aria-label="Vehicle details">ⓘ</button>`;
    }

    // ----------------------------------------
    // Search field + suggestion panel
    // ----------------------------------------

    function recentSearches() {
        return shell.storage.getJSON(RECENT_KEY, []);
    }

    function saveRecent(query) {
        const q = query.trim();
        if (q.length < 2) return;
        const list = recentSearches().filter(x => x.toLowerCase() !== q.toLowerCase());
        list.unshift(q);
        shell.storage.set(RECENT_KEY, JSON.stringify(list.slice(0, 8)));
    }

    let typingFrame = null;
    function onInput() {
        state.q = els.input.value;
        els.clear.hidden = !state.q;
        cancelAnimationFrame(typingFrame);
        typingFrame = requestAnimationFrame(() => {
            apply({ fromTyping: true, scrollToTop: true });
            renderPanel();
        });
    }

    function setQuery(query, commit) {
        els.input.value = query;
        state.q = query;
        els.clear.hidden = !query;
        apply({ fromTyping: true, scrollToTop: true });
        if (commit) commitSearch();
        else renderPanel();
    }

    function commitSearch() {
        const query = state.q.trim();
        if (query) saveRecent(query);
        els.input.blur();
        closePanel();
        if (lastSearch && lastSearch.exact.length === 1 && lastSearch.results[0] &&
            lastSearch.results[0].item === lastSearch.exact[0]) {
            jumpTo(lastSearch.exact[0].itemNumber, { keepQuery: true });
        }
    }

    function renderPanel() {
        if (document.activeElement !== els.input) return;
        const query = state.q.trim();
        let html = '';
        if (!query) {
            const recent = recentSearches();
            if (recent.length) {
                html += `<div class="panel-section"><div class="panel-heading"><span>Recent</span><button type="button" class="panel-link" data-action="clear-recent">Clear</button></div>
                    <div class="panel-list">${recent.map(q => `<button type="button" class="panel-item" data-query="${esc(q)}"><img src="images/clock.png" alt="" class="panel-item-img">${esc(q)}</button>`).join('')}</div></div>`;
            }
            html += `<div class="panel-section"><div class="panel-heading"><span>Try</span></div><div class="panel-chips">
                ${platform.examples.map(q => `<button type="button" class="chip" data-query="${esc(q)}">${esc(q)}</button>`).join('')}</div></div>`;
            html += `<div class="panel-section"><div class="panel-heading"><span>Common faults</span></div><div class="panel-chips">
                ${index.suggest('', 8).map(q => `<button type="button" class="chip" data-query="${esc(q)}">${esc(q)}</button>`).join('')}</div></div>`;
            html += '<p class="panel-tip">Tip: type an item number like <kbd>12</kbd> to jump straight to it.</p>';
            els.panel.classList.remove('is-compact');
        } else {
            const suggestions = index.suggest(query, 8);
            const exact = lastSearch ? lastSearch.exact.filter(item => passesFilters(item)) : [];
            const jumpChips = exact.map(item =>
                `<button type="button" class="chip is-selected" data-jump="${esc(item.itemNumber)}"><span class="chip-hash" aria-hidden="true">#</span>Go to item ${esc(displayNumber(item))}${tableOf(item) && tableOf(item) !== '2-1' ? ` (T${esc(tableOf(item))})` : ''}</button>`);
            const chips = jumpChips.concat(suggestions.map(q => `<button type="button" class="chip" data-query="${esc(q)}">${PMCS.highlight(q, PMCS.tokenize(query, true))}</button>`));
            html = chips.length ? `<div class="panel-chips is-scroller">${chips.join('')}</div>` : '';
            els.panel.classList.add('is-compact');
        }
        els.panel.innerHTML = html;
        openPanel(!!html);
    }

    function openPanel(show) {
        els.panel.hidden = !show;
        els.appbar.classList.toggle('is-searching', document.activeElement === els.input);
        els.appbar.classList.toggle('has-scrim', show && !els.panel.classList.contains('is-compact'));
        els.input.setAttribute('aria-expanded', show ? 'true' : 'false');
    }

    function closePanel() {
        els.panel.hidden = true;
        els.appbar.classList.remove('is-searching');
        els.appbar.classList.remove('has-scrim');
        els.input.setAttribute('aria-expanded', 'false');
    }

    function bindSearch() {
        els.input.value = state.q;
        els.clear.hidden = !state.q;
        els.input.addEventListener('input', onInput);
        els.input.addEventListener('focus', () => { showChips(true); renderPanel(); });
        els.input.addEventListener('blur', () => setTimeout(() => { if (document.activeElement !== els.input) closePanel(); }, 120));
        els.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); commitSearch(); }
            if (e.key === 'Escape') {
                e.stopPropagation();
                if (els.input.value) setQuery('', false); else els.input.blur();
            }
        });
        els.clear.addEventListener('click', () => { setQuery('', false); els.input.focus(); });
        // Keep focus in the field while tapping suggestions.
        els.panel.addEventListener('pointerdown', (e) => { if (e.target.closest('button')) e.preventDefault(); });
        els.panel.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;
            if (btn.dataset.query) setQuery(btn.dataset.query, true);
            else if (btn.dataset.jump) { saveRecent(state.q); els.input.blur(); closePanel(); jumpTo(btn.dataset.jump, { keepQuery: true }); }
            else if (btn.dataset.action === 'clear-recent') { shell.storage.set(RECENT_KEY, '[]'); renderPanel(); }
        });
        document.addEventListener('click', (e) => {
            if (els.appbar.classList.contains('has-scrim') && !e.target.closest('.appbar-top, .search-panel')) els.input.blur();
        });
        document.addEventListener('keydown', (e) => {
            const tag = document.activeElement && document.activeElement.tagName;
            if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(tag) && !shell.topModal() && !openSheet) {
                e.preventDefault();
                els.input.focus();
            }
        });
    }

    // ----------------------------------------
    // Bottom sheets (filters, go-to-item)
    // ----------------------------------------

    let openSheet = null;
    let releaseSheetFocus = null;
    let sheetTrigger = null;

    function createSheet(id, title) {
        const sheet = document.createElement('div');
        sheet.className = 'sheet';
        sheet.id = id;
        sheet.setAttribute('role', 'dialog');
        sheet.setAttribute('aria-modal', 'true');
        sheet.setAttribute('aria-labelledby', `${id}Title`);
        sheet.hidden = true;
        sheet.innerHTML = `
            <div class="sheet-scrim" data-close></div>
            <div class="sheet-panel">
                <div class="sheet-handle" aria-hidden="true"><span></span></div>
                <div class="sheet-header">
                    <h2 class="sheet-title" id="${id}Title">${esc(title)}</h2>
                    <div class="sheet-header-actions"></div>
                    <button class="sheet-close" type="button" data-close aria-label="Close">✕</button>
                </div>
                <div class="sheet-body"></div>
                <div class="sheet-footer"></div>
            </div>`;
        document.body.appendChild(sheet);
        sheet.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeSheet(); });
        enableSheetDrag(sheet);
        return sheet;
    }

    function showSheet(sheet) {
        if (openSheet) closeSheet(true);
        sheetTrigger = document.activeElement;
        openSheet = sheet;
        sheet.hidden = false;
        shell.scrollLock.lock();
        releaseSheetFocus = shell.trapFocus(sheet);
        requestAnimationFrame(() => requestAnimationFrame(() => sheet.classList.add('is-open')));
        setTimeout(() => sheet.querySelector('.sheet-body ' + shell.FOCUSABLE)?.focus({ preventScroll: true }), 80);
    }

    function closeSheet(immediate) {
        const sheet = openSheet;
        if (!sheet) return;
        openSheet = null;
        sheet.classList.remove('is-open');
        sheet.querySelector('.sheet-panel').style.transform = '';
        releaseSheetFocus && releaseSheetFocus();
        shell.scrollLock.unlock();
        const hide = () => { if (!sheet.classList.contains('is-open')) sheet.hidden = true; };
        if (immediate || shell.prefersReducedMotion()) hide(); else setTimeout(hide, 320);
        if (!immediate) sheetTrigger?.focus?.({ preventScroll: true });
    }

    // Swipe the sheet down from its handle/header to dismiss.
    function enableSheetDrag(sheet) {
        const panel = sheet.querySelector('.sheet-panel');
        let startY = null;
        let delta = 0;
        const start = (e) => {
            if (window.innerWidth >= 768) return;
            if (!e.target.closest('.sheet-handle, .sheet-header')) return;
            startY = e.clientY;
            delta = 0;
            panel.classList.add('is-dragging');
            panel.setPointerCapture(e.pointerId);
        };
        const move = (e) => {
            if (startY === null) return;
            delta = Math.max(0, e.clientY - startY);
            panel.style.transform = `translateY(${delta}px)`;
        };
        const end = () => {
            if (startY === null) return;
            startY = null;
            panel.classList.remove('is-dragging');
            if (delta > Math.min(140, panel.offsetHeight * 0.25)) closeSheet();
            else panel.style.transform = '';
        };
        panel.addEventListener('pointerdown', start);
        panel.addEventListener('pointermove', move);
        panel.addEventListener('pointerup', end);
        panel.addEventListener('pointercancel', end);
    }

    let filterSheet = null;

    function renderFilterSheet() {
        const body = filterSheet.querySelector('.sheet-body');
        const scrollTop = body.scrollTop;
        const count = overrides => platform.items.filter(item => passesFilters(item, overrides)).length;

        let html = `
            <div class="sheet-section">
                <h3 class="sheet-label">Interval</h3>
                <div class="segmented" role="radiogroup" aria-label="Interval">
                    ${[['all', 'All']].concat(INTERVALS).map(([key, label]) =>
                        `<button type="button" role="radio" aria-checked="${state.interval === key}" class="segment${state.interval === key ? ' is-selected' : ''}" data-set="interval" data-value="${key}">${label}</button>`).join('')}
                </div>
            </div>
            <div class="sheet-section">
                <h3 class="sheet-label">System</h3>
                <div class="chip-wrap" role="radiogroup" aria-label="System">
                    ${[['all', 'All Systems']].concat(SYSTEMS.map(s => [s.toLowerCase(), s])).map(([key, label]) => {
                        const n = count({ system: key });
                        return `<button type="button" role="radio" aria-checked="${state.system === key}" class="chip${state.system === key ? ' is-selected' : ''}" data-set="system" data-value="${esc(key)}"${n === 0 && state.system !== key ? ' disabled' : ''}>${esc(label)}<span class="chip-count">${n}</span></button>`;
                    }).join('')}
                </div>
            </div>`;

        if (platform.variantGroups.length) {
            html += `
            <div class="sheet-section">
                <h3 class="sheet-label">${esc(platform.variantNoun)}</h3>
                <div class="radio-list" role="radiogroup" aria-label="${esc(platform.variantNoun)}">
                    ${radioOption('all', platform.allVariantsLabel, count({ variant: 'all' }))}
                    ${platform.variantGroups.map(group => `
                        <div class="radio-group-label">${esc(group.label)}</div>
                        ${group.options.map(([value, label]) => radioOption(value, label, count({ variant: value }))).join('')}`).join('')}
                </div>
            </div>`;
        }
        body.innerHTML = html;
        body.scrollTop = scrollTop;

        const total = count({});
        filterSheet.querySelector('.sheet-footer').innerHTML =
            `<button type="button" class="btn-filled" data-close>Show ${total} ${total === 1 ? 'item' : 'items'}</button>`;
        filterSheet.querySelector('.sheet-header-actions').innerHTML = activeFilterCount()
            ? '<button type="button" class="panel-link" data-action="reset-filters">Reset</button>' : '';
    }

    function radioOption(value, label, n) {
        const selected = state.variant === value;
        return `<button type="button" role="radio" aria-checked="${selected}" class="radio-option${selected ? ' is-selected' : ''}" data-set="variant" data-value="${esc(value)}">
            <span class="radio-mark" aria-hidden="true"></span><span class="radio-text">${esc(label)}</span><span class="radio-count">${n}</span></button>`;
    }

    function openFilterSheet() {
        if (!filterSheet) {
            filterSheet = createSheet('filterSheet', 'Filters');
            filterSheet.addEventListener('click', (e) => {
                const btn = e.target.closest('[data-set]');
                if (btn) {
                    state[btn.dataset.set] = btn.dataset.value;
                    shell.haptic(4);
                    apply({ scrollToTop: true });
                    renderFilterSheet();
                }
                if (e.target.closest('[data-action="reset-filters"]')) {
                    resetFilters();
                    renderFilterSheet();
                }
            });
        }
        renderFilterSheet();
        showSheet(filterSheet);
    }

    let jumpSheet = null;

    function openJumpSheet() {
        if (!jumpSheet) {
            jumpSheet = createSheet('jumpSheet', 'Go to item');
            jumpSheet.addEventListener('click', (e) => {
                const btn = e.target.closest('[data-jump]');
                if (btn) { closeSheet(true); jumpTo(btn.dataset.jump); }
                if (e.target.closest('[data-action="show-all"]')) { resetFilters(); renderJumpSheet(); }
            });
        }
        renderJumpSheet();
        showSheet(jumpSheet);
    }

    function renderJumpSheet() {
        const items = platform.items.filter(item => passesFilters(item));
        const groups = INTERVALS.map(([key, , label]) => [key, label, items.filter(item => intervalOf(item) === key)])
            .filter(([, , list]) => list.length);
        jumpSheet.querySelector('.sheet-body').innerHTML = groups.map(([key, label, list]) => `
            <div class="sheet-section">
                <h3 class="sheet-label"><span class="section-dot interval-${key}" aria-hidden="true"></span>${esc(label)} <span class="sheet-label-count">${list.length}</span></h3>
                <div class="jump-grid">
                    ${list.map(item => `<button type="button" class="jump-cell interval-edge-${key}" data-jump="${esc(item.itemNumber)}" title="${esc(item.location)}">${esc(displayNumber(item))}${tableOf(item) && tableOf(item) !== '2-1' ? `<small>T${esc(tableOf(item))}</small>` : ''}</button>`).join('')}
                </div>
            </div>`).join('');
        const hidden = platform.items.length - items.length;
        jumpSheet.querySelector('.sheet-footer').innerHTML = hidden
            ? `<button type="button" class="btn-tonal" data-action="show-all">Show all ${platform.items.length} items (${hidden} hidden by filters)</button>` : '';
    }

    // ----------------------------------------
    // Jumping to an item
    // ----------------------------------------

    function jumpTo(key, opts) {
        const options = opts || {};
        const row = rows.get(key) || Array.from(rows.values()).find(r => displayNumber(r.item) === key);
        if (!row) return;
        if (!options.keepQuery && state.q) { els.input.value = ''; state.q = ''; els.clear.hidden = true; }
        if (!passesFilters(row.item)) {
            state.interval = 'all';
            state.system = 'all';
            if (!platform.matchesVariant(row.item, state.variant)) state.variant = 'all';
        }
        apply();
        setExpanded(row, true);
        requestAnimationFrame(() => {
            const top = row.el.getBoundingClientRect().top + window.scrollY - rowLandingOffset();
            window.scrollTo({ top, behavior: shell.prefersReducedMotion() ? 'auto' : 'smooth' });
            row.el.classList.remove('is-pulsing');
            void row.el.offsetWidth;
            row.el.classList.add('is-pulsing');
            setTimeout(() => row.head.focus({ preventScroll: true, focusVisible: false }), 450);
        });
    }

    function resetFilters() {
        state.interval = 'all';
        state.system = 'all';
        state.variant = 'all';
        apply({ scrollToTop: true });
    }

    // ----------------------------------------
    // Fast-scroll index rail
    // ----------------------------------------

    let railRows = [];
    let railTimer = null;

    function updateRail() {
        if (!els.rail) return;
        railRows = lastMode === 'browse'
            ? Array.from(els.results.querySelectorAll('.item-row:not([hidden])')).map(el => rows.get(el.dataset.key))
            : [];
        const enabled = railRows.length >= RAIL_MIN_ROWS;
        els.rail.hidden = !enabled;
        if (!enabled) return;
        const slots = Math.max(4, Math.min(14, Math.floor((window.innerHeight - stickyOffset() - 120) / 34)));
        const labels = [];
        for (let i = 0; i < slots; i++) {
            const row = railRows[Math.round(i * (railRows.length - 1) / (slots - 1))];
            labels.push(`<span>${esc(displayNumber(row.item))}</span>`);
        }
        els.rail.innerHTML = `<div class="rail-track">${labels.join('')}</div><div class="rail-bubble" aria-hidden="true"></div>`;
    }

    function railActivate() {
        if (!els.rail || els.rail.hidden) return;
        els.rail.classList.add('is-active');
        clearTimeout(railTimer);
        railTimer = setTimeout(() => { if (!els.rail.classList.contains('is-dragging')) els.rail.classList.remove('is-active'); }, 1400);
    }

    function bindRail() {
        if (!els.rail) return;
        let lastIndex = -1;
        const scrub = (e) => {
            const track = els.rail.querySelector('.rail-track');
            const rect = track.getBoundingClientRect();
            const fraction = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
            const idx = Math.round(fraction * (railRows.length - 1));
            const row = railRows[idx];
            if (!row) return;
            const bubble = els.rail.querySelector('.rail-bubble');
            bubble.textContent = displayNumber(row.item);
            bubble.style.top = `${e.clientY - els.rail.getBoundingClientRect().top}px`;
            if (idx !== lastIndex) {
                lastIndex = idx;
                shell.haptic(3);
                const top = row.el.getBoundingClientRect().top + window.scrollY - rowLandingOffset();
                window.scrollTo({ top, behavior: 'auto' });
            }
        };
        els.rail.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            lastIndex = -1;
            els.rail.setPointerCapture(e.pointerId);
            els.rail.classList.add('is-active', 'is-dragging');
            scrub(e);
        });
        els.rail.addEventListener('pointermove', (e) => { if (els.rail.classList.contains('is-dragging')) scrub(e); });
        const end = () => { els.rail.classList.remove('is-dragging'); railActivate(); };
        els.rail.addEventListener('pointerup', end);
        els.rail.addEventListener('pointercancel', end);
    }

    // ----------------------------------------
    // Scroll behavior: condensed title, chip row hide/show, progress, FAB
    // ----------------------------------------

    let chipsVisible = true;
    function showChips(show) {
        if (chipsVisible === show) return;
        chipsVisible = show;
        els.appbar.classList.toggle('chips-hidden', !show);
    }

    function bindScroll() {
        if (els.sentinel && 'IntersectionObserver' in window) {
            new IntersectionObserver(([entry]) => {
                els.appbar.classList.toggle('is-condensed', !entry.isIntersecting);
            }).observe(els.sentinel);
        }

        let lastY = window.scrollY;
        let travel = 0;
        let ticking = false;

        const update = () => {
            ticking = false;
            const y = window.scrollY;
            const dy = y - lastY;
            lastY = y;
            const listTop = els.results.getBoundingClientRect().top + y - stickyOffset();
            if (y < listTop + 40 || document.activeElement === els.input || openSheet) {
                travel = 0;
                showChips(true);
            } else {
                travel = (dy > 0) === (travel > 0) ? travel + dy : dy;
                if (travel > 24) showChips(false);
                else if (travel < -12) showChips(true);
            }
            const max = document.documentElement.scrollHeight - window.innerHeight;
            els.progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
            els.fab.classList.toggle('is-visible', y > window.innerHeight * 2);
            if (Math.abs(dy) > 2) railActivate();
        };

        window.addEventListener('scroll', () => {
            if (!ticking) { ticking = true; requestAnimationFrame(update); }
        }, { passive: true });

        els.fab.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: shell.prefersReducedMotion() ? 'auto' : 'smooth' });
        });

        // Expose the real bar heights to CSS (sticky section headers, content padding).
        const top = els.appbar.querySelector('.appbar-top');
        const chips = els.appbar.querySelector('.appbar-chips');
        const setOffset = () => {
            const rootStyle = document.documentElement.style;
            rootStyle.setProperty('--appbar-h', `${Math.round(top.getBoundingClientRect().height)}px`);
            rootStyle.setProperty('--chips-h', `${Math.round(chips.offsetHeight)}px`);
        };
        if ('ResizeObserver' in window) {
            const observer = new ResizeObserver(setOffset);
            observer.observe(top);
            observer.observe(chips);
        }
        setOffset();
        let resizeTimer = null;
        window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(updateRail, 150); });
    }

    // ----------------------------------------
    // Copy for DA Form 5988-E + share
    // ----------------------------------------

    let copyItem = null;

    function variantName() {
        return state.variant !== 'all' && platform.variantInfo[state.variant]
            ? platform.variantInfo[state.variant].name : platform.allVariantsLabel;
    }

    function copyTextFor(item) {
        const table = tableOf(item);
        return [
            `${platform.tm} PMCS`,
            table ? `Table: ${table}` : null,
            `Item Number: ${displayNumber(item)}`,
            `Location/Item: ${item.location}`,
            `Interval: ${item.interval}`,
            `${platform.variantNoun}: ${variantName()}`,
            `Not Fully Mission Capable If: ${item.notFullyMissionCapable}`
        ].filter(Boolean).join('\n');
    }

    function showCopyModal(item) {
        copyItem = item;
        const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
        set('modalItemNumber', displayNumber(item) + (tableOf(item) ? `  (Table ${tableOf(item)})` : ''));
        set('modalLocation', item.location);
        set('modalInterval', item.interval);
        set('modalStatus', item.notFullyMissionCapable);
        set('modalVehicle', variantName());
        shell.openModal(els.copyModal, document.getElementById('copyToClipboard'));
    }

    function bindModals() {
        shell.bindModal(els.copyModal, ['#closeModal', '#closeModalBtn']);
        shell.bindModal(els.intervalModal, ['#closeIntervalModal', '#closeIntervalModalBtn']);
        shell.bindModal(els.vehicleModal, ['#closeVehicleInfoModal', '#closeVehicleInfoModalBtn']);
        const copyBtn = document.getElementById('copyToClipboard');
        copyBtn?.addEventListener('click', () => {
            if (!copyItem) return;
            shell.copyText(copyTextFor(copyItem)).then(ok => {
                if (!ok) { shell.snackbar('Copy failed — select the text manually'); return; }
                const label = copyBtn.textContent;
                copyBtn.textContent = 'Copied ✓';
                copyBtn.disabled = true;
                shell.haptic(8);
                shell.snackbar(`Item ${displayNumber(copyItem)} copied — ready for DA Form 5988-E`);
                setTimeout(() => { copyBtn.textContent = label; copyBtn.disabled = false; }, 1600);
            });
        });
    }

    function showVariantInfo() {
        const info = platform.variantInfo[state.variant];
        const details = document.getElementById('vehicleInfoDetails');
        if (!info || !details) return;
        const models = platform.variantModels && platform.variantModels[state.variant];
        details.innerHTML = `
            <h4>${esc(info.name)}</h4><p>${esc(info.description)}</p>
            <h4>Key Features:</h4><ul>${info.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul>
            ${models ? `<h4>Models:</h4><ul>${models.map(m => `<li>${esc(m)}</li>`).join('')}</ul>` : ''}`;
        shell.openModal(els.vehicleModal, document.getElementById('closeVehicleInfoModalBtn'));
    }

    function shareItem(item) {
        const url = `${location.origin}${location.pathname}#item-${encodeURIComponent(item.itemNumber)}`;
        const title = `${platform.name} PMCS item ${displayNumber(item)} — ${item.location}`;
        if (navigator.share && window.matchMedia('(pointer: coarse)').matches) {
            navigator.share({ title, url }).catch(() => {});
            return;
        }
        shell.copyText(url).then(ok => shell.snackbar(ok ? 'Link copied' : 'Could not copy link'));
    }

    // ----------------------------------------
    // Guided inspection mode (ported from the original per-page apps)
    // ----------------------------------------

    const insp = { items: [], index: 0, results: [] };
    const inspEl = id => document.getElementById(id);

    function initInspection() {
        const setup = inspEl('inspectionSetupModal');
        shell.bindModal(setup, ['#closeInspSetup']);
        inspEl('startInspectionBtn')?.addEventListener('click', openInspectionSetup);
        document.querySelectorAll('.insp-setup-btn').forEach(btn =>
            btn.addEventListener('click', () => startInspection(btn.dataset.intervals)));
        inspEl('exitInspectionBtn')?.addEventListener('click', exitInspection);
        inspEl('inspPass')?.addEventListener('click', () => markInspection('pass'));
        inspEl('inspDeficiency')?.addEventListener('click', () => markInspection('deficiency'));
        inspEl('inspSkip')?.addEventListener('click', () => markInspection('skip'));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && inspEl('inspectionMode')?.classList.contains('is-open') && !shell.topModal()) exitInspection();
        });
    }

    function openInspectionSetup() {
        shell.openModal(inspEl('inspectionSetupModal'));
    }

    function startInspection(intervalList) {
        const intervals = intervalList.split(',').map(i => i.trim().toLowerCase());
        insp.items = platform.items.filter(item =>
            intervals.includes(intervalOf(item)) &&
            (state.system === 'all' || (item.system || '').toLowerCase() === state.system) &&
            platform.matchesVariant(item, state.variant) &&
            (!platform.inspectionFilter || platform.inspectionFilter(item)));
        insp.index = 0;
        insp.results = [];
        shell.closeModal(inspEl('inspectionSetupModal'));
        if (!insp.items.length) {
            shell.snackbar('No items match your current filters for that interval');
            return;
        }
        const overlay = inspEl('inspectionMode');
        overlay.style.display = 'flex';
        shell.scrollLock.lock();
        requestAnimationFrame(() => overlay.classList.add('is-open'));
        inspEl('inspectionActions').style.display = '';
        showInspectionItem(0);
    }

    function showInspectionItem(direction) {
        if (insp.index >= insp.items.length) { showInspectionSummary(); return; }
        const item = insp.items[insp.index];
        const total = insp.items.length;
        inspEl('inspectionCounter').textContent = `Item ${insp.index + 1} of ${total}`;
        inspEl('inspectionProgressFill').style.width = `${Math.round((insp.index / total) * 100)}%`;
        inspEl('inspectionIntervalLabel').textContent = item.interval.toUpperCase();
        const content = inspEl('inspectionContent');
        content.innerHTML = inspectionCard(item);
        content.scrollTop = 0;
        if (direction) {
            const card = content.firstElementChild;
            card.classList.add('insp-enter');
        }
    }

    function inspectionCard(item) {
        const isNA = item.notFullyMissionCapable.trim() === 'N/A';
        const faults = item.commonFaults && item.commonFaults.length ? `
            <div class="insp-faults">
                <div class="procedure-title">🔧 Common Faults</div>
                <div class="procedure-content common-faults">${item.commonFaults.map(f => `<span class="fault-tag">${esc(f)}</span>`).join('')}</div>
            </div>` : '';
        return `<div class="insp-card">
            <div class="insp-card-header">
                <div class="insp-item-meta">
                    <span class="item-number">${esc(displayNumber(item))}</span>
                    <span class="tm-ref-badge">${esc(platform.tm)}</span>
                    ${item.system ? `<span class="system-badge">${esc(item.system)}</span>` : ''}
                    <span class="interval-badge interval-${intervalOf(item)}">${esc(item.interval)}</span>
                </div>
                ${nfmcBadge(item.notFullyMissionCapable)}
            </div>
            <h2 class="insp-location">${esc(item.location)}</h2>
            ${faults}
            <div class="insp-procedure">
                <div class="procedure-title">📋 Procedure</div>
                <div class="procedure-content ${procedureClass(item.procedure)}">${formatProcedure(item.procedure)}</div>
            </div>
            <div class="insp-nfmc">
                <div class="procedure-title">⚠️ Not Fully Mission Capable If</div>
                <div class="procedure-content ${isNA ? 'mission-capable na' : 'mission-capable'}"><p>${esc(item.notFullyMissionCapable)}</p></div>
            </div>
        </div>`;
    }

    function markInspection(status) {
        insp.results.push({ item: insp.items[insp.index], status });
        insp.index++;
        shell.haptic(status === 'deficiency' ? 12 : 5);
        showInspectionItem(1);
    }

    function showInspectionSummary() {
        const deficiencies = insp.results.filter(r => r.status === 'deficiency');
        const passes = insp.results.filter(r => r.status === 'pass');
        const skips = insp.results.filter(r => r.status === 'skip');
        inspEl('inspectionActions').style.display = 'none';
        inspEl('inspectionCounter').textContent = 'Inspection Complete';
        inspEl('inspectionProgressFill').style.width = '100%';
        inspEl('inspectionIntervalLabel').textContent = 'COMPLETE';
        const defHtml = deficiencies.length
            ? deficiencies.map(r => `<div class="summary-fault-item">
                <div class="summary-fault-header">
                    <strong>${esc(displayNumber(r.item))}</strong>
                    <span>— ${esc(r.item.location)}</span>
                    ${nfmcBadge(r.item.notFullyMissionCapable)}
                </div>
                <p class="summary-nfmc">NFMC If: ${esc(r.item.notFullyMissionCapable)}</p>
            </div>`).join('')
            : '<p class="summary-allpass">✅ No deficiencies — equipment is fully mission capable!</p>';
        const content = inspEl('inspectionContent');
        content.innerHTML = `<div class="insp-summary insp-enter">
            <h2 class="summary-title">Inspection Complete</h2>
            <div class="summary-stats">
                <div class="stat-box stat-pass"><span class="insp-btn-icon">✅</span>${passes.length}<span>Passed</span></div>
                <div class="stat-box stat-def"><span class="insp-btn-icon">⚠️</span>${deficiencies.length}<span>Deficiencies</span></div>
                <div class="stat-box stat-skip"><span class="insp-btn-icon">⏭</span>${skips.length}<span>Skipped</span></div>
            </div>
            <div class="summary-deficiencies"><h3>Deficiencies Found</h3>${defHtml}</div>
            ${deficiencies.length ? '<button class="copy-btn insp-summary-btn" id="copyDefBtn" type="button">📋 Copy Deficiencies for 5988-E</button>' : ''}
            <button class="btn btn-secondary insp-summary-btn" id="exitInspSummaryBtn" type="button">Exit Inspection</button>
        </div>`;
        content.scrollTop = 0;
        inspEl('copyDefBtn')?.addEventListener('click', () => copyDeficiencies(deficiencies));
        inspEl('exitInspSummaryBtn')?.addEventListener('click', exitInspection);
    }

    function copyDeficiencies(deficiencies) {
        const lines = [`${platform.tm} — PMCS DEFICIENCY REPORT`, `Date: ${new Date().toLocaleDateString('en-US')}`, ''];
        deficiencies.forEach((r, i) => {
            lines.push(`Fault ${i + 1}:`);
            if (tableOf(r.item)) lines.push(`  Table: ${tableOf(r.item)}`);
            lines.push(`  Item Number: ${displayNumber(r.item)}`);
            lines.push(`  Location: ${r.item.location}`);
            lines.push(`  Interval: ${r.item.interval}`);
            lines.push(`  NFMC If: ${r.item.notFullyMissionCapable}`);
            lines.push('');
        });
        shell.copyText(lines.join('\n')).then(ok => shell.snackbar(ok ? 'Deficiencies copied' : 'Copy failed'));
    }

    function exitInspection() {
        const overlay = inspEl('inspectionMode');
        if (!overlay.classList.contains('is-open')) return;
        overlay.classList.remove('is-open');
        shell.scrollLock.unlock();
        setTimeout(() => { if (!overlay.classList.contains('is-open')) overlay.style.display = 'none'; }, 250);
        inspEl('inspectionActions').style.display = '';
        insp.items = [];
        insp.index = 0;
        insp.results = [];
    }

    // ----------------------------------------
    // Event delegation for list, chips, banner, empty state
    // ----------------------------------------

    function bindInteractions() {
        els.results.addEventListener('click', (e) => {
            const head = e.target.closest('.row-head');
            const action = e.target.closest('[data-action]');
            const rowEl = e.target.closest('.item-row');
            if (!rowEl) return;
            const row = rows.get(rowEl.dataset.key);
            if (head) {
                const open = !row.el.classList.contains('is-open');
                setExpanded(row, open, { reveal: open });
                if (open && state.q.trim()) saveRecent(state.q);
            } else if (action && action.dataset.action === 'copy') {
                showCopyModal(row.item);
            } else if (action && action.dataset.action === 'share') {
                shareItem(row.item);
            }
        });

        els.chipRow.addEventListener('click', (e) => {
            const chip = e.target.closest('button');
            if (!chip) return;
            if (chip.dataset.interval) {
                state.interval = chip.dataset.interval === state.interval && chip.dataset.interval !== 'all' ? 'all' : chip.dataset.interval;
                shell.haptic(4);
                apply({ scrollToTop: true });
                els.chipRow.querySelector('.chip.is-selected[data-interval]')?.scrollIntoView({ inline: 'nearest', block: 'nearest' });
            } else if (chip.dataset.remove) {
                state[chip.dataset.remove] = 'all';
                apply({ scrollToTop: true });
            } else if (chip.dataset.tool === 'jump') openJumpSheet();
            else if (chip.dataset.tool === 'inspect') openInspectionSetup();
            else if (chip.dataset.tool === 'intervals') shell.openModal(els.intervalModal, document.getElementById('closeIntervalModalBtn'));
        });

        els.filterBtn.addEventListener('click', openFilterSheet);
        document.getElementById('intervalInfoBtn')?.addEventListener('click', () =>
            shell.openModal(els.intervalModal, document.getElementById('closeIntervalModalBtn')));

        els.banner?.addEventListener('click', (e) => {
            if (e.target.closest('[data-action="variant-info"]')) showVariantInfo();
        });

        els.noResults.addEventListener('click', (e) => {
            const action = e.target.closest('[data-action]');
            if (!action) return;
            if (action.dataset.action === 'reset-filters') resetFilters();
            if (action.dataset.action === 'clear-search') { setQuery('', false); els.input.focus(); }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && openSheet) closeSheet();
        });

        window.addEventListener('hashchange', jumpToHash);
    }

    function jumpToHash() {
        const match = location.hash.match(/^#item-(.+)$/);
        if (!match) return;
        const key = decodeURIComponent(match[1]);
        if (rows.has(key)) jumpTo(key, { keepQuery: true });
    }

    // ----------------------------------------
    // Init
    // ----------------------------------------

    readUrlState();
    buildList();
    bindSearch();
    bindInteractions();
    bindModals();
    bindScroll();
    bindRail();
    initInspection();
    apply();
    if (location.hash) requestAnimationFrame(jumpToHash);

    window.pmcsApp = {
        platform, state, apply, jumpTo,
        search: q => setQuery(q, false),
        resetFilters
    };
})();
