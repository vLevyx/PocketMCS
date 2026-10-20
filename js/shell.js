// ========================================
// POCKETMCS SHELL
// Shared app chrome for every page: theme, snackbar, modals, scroll lock, offline support.
// ========================================

(function (global) {
    'use strict';

    const PMCS = global.PMCS || (global.PMCS = {});
    const DARK_KEY = 'pocketmcs-darkmode';

    const storage = {
        get(key) {
            try { return localStorage.getItem(key); } catch (e) { return null; }
        },
        set(key, value) {
            try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
        },
        getJSON(key, fallback) {
            try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (e) { return fallback; }
        }
    };

    // ----------------------------------------
    // Theme
    // ----------------------------------------

    function syncThemeButton() {
        const btn = document.getElementById('darkModeToggle');
        const isDark = document.body.classList.contains('dark-mode');
        if (btn) {
            btn.textContent = isDark ? '☀️' : '🌙';
            btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
            btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        }
        document.querySelectorAll('meta[name="theme-color"]').forEach(meta => {
            meta.setAttribute('content', isDark ? '#0e0f0d' : '#221F20');
        });
    }

    function initTheme() {
        syncThemeButton();
        document.getElementById('darkModeToggle')?.addEventListener('click', () => {
            document.body.classList.add('theme-transition');
            document.body.classList.toggle('dark-mode');
            storage.set(DARK_KEY, document.body.classList.contains('dark-mode'));
            syncThemeButton();
            setTimeout(() => document.body.classList.remove('theme-transition'), 400);
        });
    }

    // ----------------------------------------
    // Scroll lock (counts nested overlays)
    // ----------------------------------------

    let lockCount = 0;
    const scrollLock = {
        lock() {
            if (lockCount++ === 0) document.documentElement.classList.add('is-scroll-locked');
        },
        unlock() {
            lockCount = Math.max(0, lockCount - 1);
            if (lockCount === 0) document.documentElement.classList.remove('is-scroll-locked');
        }
    };

    // ----------------------------------------
    // Focus trap
    // ----------------------------------------

    const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

    function trapFocus(container) {
        const handler = (e) => {
            if (e.key !== 'Tab') return;
            const items = Array.from(container.querySelectorAll(FOCUSABLE)).filter(el => el.offsetParent !== null);
            if (!items.length) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        };
        container.addEventListener('keydown', handler);
        return () => container.removeEventListener('keydown', handler);
    }

    // ----------------------------------------
    // Modals (existing .modal markup, animated)
    // ----------------------------------------

    const openModals = [];

    function openModal(modal, focusTarget) {
        if (!modal || modal.classList.contains('is-open')) return;
        const entry = { modal, trigger: document.activeElement, release: trapFocus(modal) };
        openModals.push(entry);
        modal.style.display = 'flex';
        modal.setAttribute('role', modal.getAttribute('role') || 'dialog');
        modal.setAttribute('aria-modal', 'true');
        scrollLock.lock();
        requestAnimationFrame(() => modal.classList.add('is-open'));
        setTimeout(() => (focusTarget || modal.querySelector(FOCUSABLE))?.focus({ preventScroll: true }), 60);
    }

    function closeModal(modal) {
        const index = openModals.findIndex(entry => entry.modal === modal);
        if (index < 0) return;
        const [entry] = openModals.splice(index, 1);
        entry.release();
        modal.classList.remove('is-open');
        scrollLock.unlock();
        const done = () => { if (!modal.classList.contains('is-open')) modal.style.display = 'none'; };
        if (prefersReducedMotion()) done(); else setTimeout(done, 220);
        entry.trigger?.focus?.({ preventScroll: true });
    }

    function topModal() {
        return openModals.length ? openModals[openModals.length - 1].modal : null;
    }

    // Wire close buttons and backdrop clicks for a modal.
    function bindModal(modal, closeSelectors) {
        if (!modal) return;
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal); });
        (closeSelectors || []).forEach(sel => document.querySelectorAll(sel).forEach(btn =>
            btn.addEventListener('click', () => closeModal(modal))));
    }

    // ----------------------------------------
    // Snackbar
    // ----------------------------------------

    let snackbarTimer = null;

    function snackbar(message, action) {
        let bar = document.getElementById('snackbar');
        if (!bar) {
            bar = document.createElement('div');
            bar.id = 'snackbar';
            bar.className = 'snackbar';
            bar.setAttribute('role', 'status');
            bar.setAttribute('aria-live', 'polite');
            document.body.appendChild(bar);
        }
        bar.innerHTML = `<span class="snackbar-text"></span>`;
        bar.querySelector('.snackbar-text').textContent = message;
        if (action) {
            const btn = document.createElement('button');
            btn.className = 'snackbar-action';
            btn.textContent = action.label;
            btn.addEventListener('click', () => { action.onClick(); bar.classList.remove('is-visible'); });
            bar.appendChild(btn);
        }
        requestAnimationFrame(() => bar.classList.add('is-visible'));
        clearTimeout(snackbarTimer);
        snackbarTimer = setTimeout(() => bar.classList.remove('is-visible'), action ? 8000 : 2800);
    }

    // ----------------------------------------
    // Clipboard
    // ----------------------------------------

    function copyText(text) {
        if (navigator.clipboard && global.isSecureContext) {
            return navigator.clipboard.writeText(text).then(() => true, () => legacyCopy(text));
        }
        return Promise.resolve(legacyCopy(text));
    }

    function legacyCopy(text) {
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0;';
        document.body.appendChild(area);
        area.select();
        let ok = false;
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        document.body.removeChild(area);
        return ok;
    }

    // ----------------------------------------
    // Misc
    // ----------------------------------------

    function prefersReducedMotion() {
        return global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function haptic(ms) {
        if (navigator.vibrate) { try { navigator.vibrate(ms || 6); } catch (e) { /* unsupported */ } }
    }

    function registerServiceWorker() {
        if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) return;
        global.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').then(reg => {
                reg.addEventListener('updatefound', () => {
                    const worker = reg.installing;
                    worker?.addEventListener('statechange', () => {
                        if (worker.state === 'installed' && navigator.serviceWorker.controller) {
                            snackbar('PocketMCS was updated', { label: 'Refresh', onClick: () => location.reload() });
                        }
                    });
                });
            }).catch(() => { /* offline support unavailable */ });
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && topModal()) closeModal(topModal());
    });

    PMCS.shell = {
        storage, scrollLock, trapFocus, openModal, closeModal, bindModal, topModal,
        snackbar, copyText, haptic, prefersReducedMotion, FOCUSABLE
    };

    initTheme();
    registerServiceWorker();
})(window);
