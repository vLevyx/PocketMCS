// ========================================
// POCKETMCS HOME — global search across every platform
// Platform data loads lazily the first time someone searches.
// ========================================

(function () {
    'use strict';

    const PMCS = window.PMCS;
    const shell = PMCS.shell;
    const esc = PMCS.escapeHtml;
    const PER_PLATFORM = 5;
    const STATUS_LABEL = { deadline: 'Deadline item', conditional: 'Conditional', na: 'Non-deadline' };

    const input = document.getElementById('globalSearch');
    const clear = document.getElementById('globalClear');
    const results = document.getElementById('globalResults');
    const grid = document.querySelector('.category-grid');
    if (!input || !results) return;

    let loading = null;

    function loadPlatforms() {
        if (loading) return loading;
        loading = Promise.all(PMCS.platformOrder.map(id => new Promise(resolve => {
            if (PMCS.platforms[id]) { resolve(); return; }
            const script = document.createElement('script');
            script.src = `data/${id}.js`;
            script.onload = resolve;
            script.onerror = resolve;
            document.head.appendChild(script);
        })));
        return loading;
    }

    function displayNumber(platform, item) {
        return platform.displayNumber ? platform.displayNumber(item) : item.itemNumber;
    }

    function resultRow(platform, item, query, terms) {
        const status = PMCS.nfmcStatus(item.notFullyMissionCapable);
        const table = platform.tableOf ? platform.tableOf(item) : null;
        const interval = item.interval.toLowerCase();
        const phrase = (item.commonFaults || []).concat(item.keywords || [])
            .find(text => /<mark>/.test(PMCS.highlight(text, terms)));
        const title = PMCS.highlight(item.location, terms);
        const href = `${platform.page}?q=${encodeURIComponent(query)}#item-${encodeURIComponent(item.itemNumber)}`;
        return `
            <a class="home-result" href="${esc(href)}">
                <span class="row-num">${esc(displayNumber(platform, item))}${table && table !== '2-1' ? `<small>T${esc(table)}</small>` : ''}</span>
                <span class="row-text">
                    <span class="row-title">${title}</span>
                    <span class="row-meta"><span class="row-interval interval-${interval}">${esc(item.interval)}</span><span class="row-meta-rest">${item.system ? ` · ${esc(item.system)}` : ''}</span></span>
                    ${phrase && !/<mark>/.test(title) ? `<span class="row-match">“${PMCS.highlight(phrase, terms)}”</span>` : ''}
                </span>
                <span class="row-status status-${status}" role="img" aria-label="${STATUS_LABEL[status]}"></span>
                <span class="row-chevron is-forward" aria-hidden="true"></span>
            </a>`;
    }

    function render() {
        const query = input.value.trim();
        clear.hidden = !input.value;
        if (!query) {
            results.hidden = true;
            results.innerHTML = '';
            grid.hidden = false;
            syncUrl('');
            return;
        }
        const groups = PMCS.platformOrder.map(id => PMCS.platforms[id]).filter(Boolean).map(platform => {
            const result = PMCS.getIndex(platform).search(query);
            return { platform, result, best: result.results.length ? result.results[0].score : 0 };
        }).filter(group => group.result.results.length).sort((a, b) => b.best - a.best);

        const strict = groups.filter(group => group.result.mode === 'all');
        const shown = strict.length ? strict : groups;
        const total = shown.reduce((sum, group) => sum + group.result.results.length, 0);

        let html = `<div class="results-meta"><span><strong>${total}</strong> ${total === 1 ? 'match' : strict.length ? 'matches' : 'closest matches'} across ${shown.length} ${shown.length === 1 ? 'platform' : 'platforms'}</span></div>`;
        if (!shown.length) {
            html = `<div class="no-results"><div class="no-results-icon">⚠️</div><p>No items match “${esc(query)}”.</p>
                <p class="no-results-sub">Try a part name (“brake”, “tire”) or an item number.</p></div>`;
        }
        shown.forEach(({ platform, result }) => {
            const count = result.results.length;
            html += `
                <section class="home-group">
                    <h2 class="home-group-head">
                        <span class="variant-banner-icon"><img src="${esc(platform.image)}" alt=""></span>
                        <span class="home-group-title"><strong>${esc(platform.name)}</strong><small>${esc(platform.tm)}</small></span>
                        <span class="section-count">${count}</span>
                    </h2>
                    <div class="item-list">
                        ${result.results.slice(0, PER_PLATFORM).map(r => resultRow(platform, r.item, query, result.terms)).join('')}
                    </div>
                    ${count > PER_PLATFORM ? `<a class="home-group-more" href="${esc(platform.page)}?q=${encodeURIComponent(query)}">See all ${count} in ${esc(platform.name)} <span aria-hidden="true">→</span></a>` : ''}
                </section>`;
        });
        results.innerHTML = html;
        results.hidden = false;
        grid.hidden = true;
        syncUrl(query);
    }

    let urlTimer = null;
    function syncUrl(query) {
        clearTimeout(urlTimer);
        urlTimer = setTimeout(() => {
            history.replaceState(null, '', location.pathname + (query ? `?q=${encodeURIComponent(query)}` : ''));
        }, 250);
    }

    let frame = null;
    function onInput() {
        clear.hidden = !input.value;
        loadPlatforms().then(() => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(render);
        });
    }

    input.addEventListener('focus', loadPlatforms, { once: true });
    input.addEventListener('input', onInput);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
        if (e.key === 'Escape') { input.value = ''; onInput(); }
    });
    clear.addEventListener('click', () => { input.value = ''; onInput(); input.focus(); });
    document.addEventListener('keydown', (e) => {
        const tag = document.activeElement && document.activeElement.tagName;
        if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) { e.preventDefault(); input.focus(); }
    });

    const initial = new URLSearchParams(location.search).get('q');
    if (initial) {
        input.value = initial;
        onInput();
    }

    window.pmcsHome = { shell, search: q => { input.value = q; onInput(); } };
})();
