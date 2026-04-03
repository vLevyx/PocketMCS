// ========================================
// DATA SECTION
// ========================================

const pmcsData = [
    {
        itemNumber: "1",
        interval: "Before",
        location: "Lunette Ring",
        system: "Safety Systems",
        vehicle: "m1095",
        keywords: ["lunette ring", "lunette", "coupling", "drawbar", "front ring"],
        commonFaults: ["Lunette ring loose", "Lunette ring damaged", "Lunette mounting loose", "Cracked lunette"],
        procedure: "WARNING\nKeep hands away from lunette ring during coupling/uncoupling operations. Failure to comply may result in personnel injury. Seek medical attention in the event of injury.\n\nCheck lunette for secure mounting or obvious damage.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "2",
        interval: "Before",
        location: "Brake Actuator Assembly",
        system: "Brakes",
        vehicle: "m1095",
        keywords: ["brake actuator", "breakaway lever", "breakaway cable", "front roller pin", "master pin"],
        commonFaults: ["Brake actuator damaged", "Front roller pin wear", "Breakaway lever not released", "Master pin worn", "Mounting nuts or bolts missing", "Breakaway cable damaged", "Spring clip missing"],
        procedure: "1. Inspect area where front roller pin goes through brake actuator housing for damage and abnormal wear.\n2. Check that breakaway lever is in down position. If lever is not fully released, brakes will drag, heat up, and overheat.\n3. Inspect master pin that goes through middle rear area of brake actuator for signs of wear or damage.\n4. Ensure that mounting nuts and bolts securely fasten brake actuator assembly to drawbar.\n5. Visually check brake breakaway cable, lever, and spring clip for damage and missing parts.",
        notFullyMissionCapable: "Damage is evident. Nuts and bolts missing or damaged. Cable, lever, or spring clip is missing or damaged."
    },
    {
        itemNumber: "3",
        interval: "Before",
        location: "Front Support Leg",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: ["front support leg", "support leg", "caster", "leg handle", "trailer jack"],
        commonFaults: ["Support leg damaged", "Support leg missing parts", "Caster seized", "Handle will not crank", "Leg will not raise", "Leg will not lower"],
        procedure: "Check front support leg for damage, missing parts, and proper operation. Check that caster moves freely and handle can be cranked to raise and lower trailer.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "4",
        interval: "Before",
        location: "Handbrake Lever (Roadside)",
        system: "Brakes",
        vehicle: "m1095",
        keywords: ["roadside handbrake", "handbrake lever roadside", "parking brake roadside"],
        commonFaults: ["Roadside handbrake damaged", "Handbrake parts missing", "Handbrake will not engage", "Handbrake will not release", "Handbrake out of adjustment"],
        procedure: "Check handbrake lever for damage or missing parts. Check that the handle can be engaged and released. Adjust as necessary (WP 0005).",
        notFullyMissionCapable: "Damage is evident or handbrake fails to operate correctly."
    },
    {
        itemNumber: "5",
        interval: "Before",
        location: "Tires (Roadside)",
        system: "Tires/Wheels",
        vehicle: "m1095",
        keywords: ["roadside tires", "trailer tire", "underinflated tire", "tire bulge", "tire leak"],
        commonFaults: ["Roadside tire underinflated", "Roadside tire leak", "Cuts in tire", "Gouged tire", "Cracked tire", "Tire bulge", "Tire unserviceable", "Tire missing"],
        procedure: "Visually check for underinflated and unserviceable tires. Check tires for leaks, cuts, gouges, cracks, and bulges. Remove all penetrating objects.",
        notFullyMissionCapable: "Any tire is missing or unserviceable. Tires have leaks, cuts, gouges, cracks, or bulges that would result in tire failure during operation."
    },
    {
        itemNumber: "6",
        interval: "Before",
        location: "Tires (Curbside)",
        system: "Tires/Wheels",
        vehicle: "m1095",
        keywords: ["curbside tires", "trailer tire", "underinflated tire", "tire bulge", "tire leak"],
        commonFaults: ["Curbside tire underinflated", "Curbside tire leak", "Cuts in tire", "Gouged tire", "Cracked tire", "Tire bulge", "Tire unserviceable", "Tire missing"],
        procedure: "Visually check for underinflated and unserviceable tires. Check tires for leaks, cuts, gouges, cracks, and bulges. Remove all penetrating objects.",
        notFullyMissionCapable: "Any tire is missing or unserviceable. Tires have leaks, cuts, gouges, cracks, or bulges that would result in tire failure during operation."
    },
    {
        itemNumber: "7",
        interval: "Before",
        location: "Handbrake Lever (Curbside)",
        system: "Brakes",
        vehicle: "m1095",
        keywords: ["curbside handbrake", "handbrake lever curbside", "parking brake curbside"],
        commonFaults: ["Curbside handbrake damaged", "Handbrake parts missing", "Handbrake will not engage", "Handbrake will not release", "Handbrake out of adjustment"],
        procedure: "Check handbrake lever for damage or missing parts. Check that the handle can be engaged and released. Adjust as necessary (WP 0005).",
        notFullyMissionCapable: "Damage is evident or handbrake fails to operate correctly."
    },
    {
        itemNumber: "8",
        interval: "Before",
        location: "Intervehicular Cable",
        system: "Electrical",
        vehicle: "m1095",
        keywords: ["intervehicular cable", "trailer lights", "light cable", "connector cable"],
        commonFaults: ["Intervehicular cable damaged", "Cable disconnected", "Trailer lights inoperative", "Connector damaged", "Lighting fault"],
        procedure: "Connect intervehicular cable to towing vehicle (WP 0005). Operate towing vehicle light switch through all settings, and check trailer lights.",
        notFullyMissionCapable: "Trailer lights do not operate properly."
    },
    {
        itemNumber: "9",
        interval: "After",
        location: "Brake System",
        system: "Brakes",
        vehicle: "m1095",
        keywords: ["brake system after", "hot hub", "cold hub", "wheel temperature", "hub temperature"],
        commonFaults: ["Brake hub abnormally hot", "Brake hub abnormally cold", "Uneven wheel temperature", "Dragging brake", "Brake not applying evenly"],
        procedure: "Inspect each hub/wheel assembly. Check for a hub/wheel assembly that is significantly cooler or hotter than the other. Immediately report any significant temperature variation to Field Maintenance.",
        notFullyMissionCapable: "Brake hub/wheel assembly is abnormally cold or hot."
    },
    {
        itemNumber: "10",
        interval: "After",
        location: "Rear Stabilizers",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: ["rear stabilizers", "stabilizer", "flex plate", "stabilizer pin"],
        commonFaults: ["Rear stabilizer damaged", "Stabilizer parts missing", "Flex plate hinge seized", "Sections will not slide", "Pin missing"],
        procedure: "Inspect rear stabilizers for damage. Ensure that hinge on flex plate can be rotated and sections slide up and down when pin is removed.",
        notFullyMissionCapable: "Damage is evident or parts are missing."
    },
    {
        itemNumber: "11",
        interval: "After",
        location: "Shock Absorber",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: ["shock absorber", "shock leak", "shock hardware", "damper"],
        commonFaults: ["Shock absorber leaking", "Shock absorber damaged", "Mounting hardware missing", "Shock mount loose"],
        procedure: "Inspect shock absorbers for leaks, missing hardware, and damage.",
        notFullyMissionCapable: "Any leaks are evident, mounting hardware is missing, damage is evident."
    },
    {
        itemNumber: "12",
        interval: "After",
        location: "Safety Chains",
        system: "Safety Systems",
        vehicle: "m1095",
        keywords: ["safety chains", "chain damage", "chain missing parts", "tow chains"],
        commonFaults: ["Safety chain damaged", "Safety chain parts missing", "Hook damaged", "Chain link damaged"],
        procedure: "Inspect safety chains for damage or missing parts.",
        notFullyMissionCapable: "Damage is evident or parts are missing."
    },
    {
        itemNumber: "13",
        interval: "Weekly",
        location: "Wheel Assemblies",
        system: "Tires/Wheels",
        vehicle: "m1095",
        keywords: ["wheel assemblies", "lugnuts", "stud nuts", "loose lugnuts", "missing lugnuts"],
        commonFaults: ["Lugnuts loose", "Lugnuts missing", "Stud nuts loose", "Stud nuts missing"],
        procedure: "Check lugnuts and stud nuts to ensure that they are not loose or missing. If any are loose, tighten.",
        notFullyMissionCapable: "Three or more lugnuts or stud nuts are missing."
    },
    {
        itemNumber: "14",
        interval: "Weekly",
        location: "Brake Actuator Assembly",
        system: "Brakes",
        vehicle: "m1095",
        keywords: ["brake lines", "brake hoses", "brake clamps", "brake leaks", "brake connections"],
        commonFaults: ["Brake line leak", "Brake hose cracked", "Brake hose leaking", "Clamp missing", "Loose brake connection", "Broken brake line"],
        procedure: "Inspect brake lines and hoses for missing clamps, cracks, leaks, loose connections, or broken lines. Tighten loose connections.",
        notFullyMissionCapable: "Any leaks are found."
    },
    {
        itemNumber: "15",
        interval: "Weekly",
        location: "Lights, Reflectors, and Wiring",
        system: "Electrical",
        vehicle: "m1095",
        keywords: ["lights", "reflectors", "wiring", "intervehicular cable", "loose connector", "frayed wire"],
        commonFaults: ["Light broken", "Reflector missing", "Reflector broken", "Loose connector", "Exposed wiring", "Frayed wiring", "Wiring damaged", "Mounting hardware missing"],
        procedure: "NOTE\nVehicle operation with damaged or inoperable trailer lights may violate AR 385-10.\n\nVisually inspect lights and reflectors for missing or broken parts and loose connectors. If any connectors are loose, tighten.\n\nInspect wiring harness and intervehicular cable for exposed, frayed, or damaged wiring or missing mounting hardware.",
        notFullyMissionCapable: "Damage is evident."
    },
    {
        itemNumber: "16",
        interval: "Weekly",
        location: "Trailer Body",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: ["trailer body", "bow supports", "body damage", "insert damage"],
        commonFaults: ["Trailer body damaged", "Bow support insert damaged", "Body bent", "Body cracked", "Extensive body damage"],
        procedure: "Visually inspect trailer body including inserts that hold bow supports.",
        notFullyMissionCapable: "Extensive damage is evident."
    }
];
const vehicleMapping = {
    'm1095': ['M1095']
};

const vehicleInfo = {
    'm1095': {
        name: 'M1095 5-Ton Cargo Trailer',
        description: '5-ton cargo trailer used with LMTV/FMTV trucks (TM 9-2330-392-13&P)',
        features: ['5-ton cargo capacity', 'Dual-axle configuration', 'Surge brake system', 'Compatible with LMTV/FMTV', 'Drop-side cargo bed']
    }
};


// ========================================
// APPLICATION STATE
// ========================================

class PMCSApp {
    constructor() {
        this.searchInput = null;
        this.intervalFilter = null;
        this.systemFilter = null;
        this.resultsContainer = null;
        this.noResults = null;
        this.copyModal = null;
        this.modalElements = {};
        this.currentModalItem = null;

        // Initialize app when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    // ========================================
    // INITIALIZATION
    // ========================================

    init() {
        this.tmReference = 'TM 9-2330-392-13&P';
        this.inspectionItems = [];
        this.inspectionIndex = 0;
        this.inspectionResults = [];
        this.inspectionMode = false;
        this.initializeElements();
        this.setupEventListeners();
        this.initDarkMode();
        this.initInspection();
        this.displayItems(pmcsData);
        console.log('PocketMCS initialized successfully');
    }

    initializeElements() {
        // Search and filter controls
        this.searchInput = document.getElementById('searchInput');
        this.intervalFilter = document.getElementById('intervalFilter');
        this.systemFilter = document.getElementById('systemFilter');
        this.intervalInfoBtn = document.getElementById('intervalInfoBtn');
        this.vehicleFilter = document.getElementById('vehicleFilter');
        this.vehicleInfo = document.getElementById('vehicleInfo');
        this.vehicleInfoModal = document.getElementById('vehicleInfoModal');

        // Results display
        this.resultsContainer = document.getElementById('resultsContainer');
        this.noResults = document.getElementById('noResults');

        // Modal elements
        this.copyModal = document.getElementById('copyModal');
        this.intervalInfoModal = document.getElementById('intervalInfoModal');
        this.modalElements = {
            itemNumber: document.getElementById('modalItemNumber'),
            location: document.getElementById('modalLocation'),
            interval: document.getElementById('modalInterval'),
            status: document.getElementById('modalStatus'),
            copyBtn: document.getElementById('copyToClipboard'),
            closeBtn: document.getElementById('closeModalBtn'),
            closeX: document.getElementById('closeModal'),
            intervalCloseBtn: document.getElementById('closeIntervalModalBtn'),
            intervalCloseX: document.getElementById('closeIntervalModal'),
            vehicleCloseX: document.getElementById('closeVehicleInfoModal'),
            vehicleCloseBtn: document.getElementById('closeVehicleInfoModalBtn'),
            vehicle: document.getElementById('modalVehicle')
        };

        // Validate all elements exist
        const requiredElements = [
            this.searchInput, this.intervalFilter, this.systemFilter,
            this.resultsContainer, this.noResults, this.copyModal, this.intervalInfoModal
        ];

        const missingElements = requiredElements.filter(el => !el);
        if (missingElements.length > 0) {
            console.error('Missing required DOM elements:', missingElements);
        }
    }

    setupEventListeners() {
        // Search and filter event listeners
        this.searchInput?.addEventListener('input', this.debounce(() => this.filterItems(), 300));
        this.intervalFilter?.addEventListener('change', () => this.filterItems());
        this.systemFilter?.addEventListener('change', () => this.filterItems());
        this.intervalInfoBtn?.addEventListener('click', () => this.showIntervalInfoModal());
        this.vehicleFilter?.addEventListener('change', () => this.handleVehicleFilterChange());

        // Modal event listeners
        this.modalElements.closeX?.addEventListener('click', () => this.hideCopyModal());
        this.modalElements.closeBtn?.addEventListener('click', () => this.hideCopyModal());
        this.modalElements.copyBtn?.addEventListener('click', () => this.copyToClipboard());

        // Interval info modal listeners
        this.modalElements.intervalCloseX?.addEventListener('click', () => this.hideIntervalInfoModal());
        this.modalElements.intervalCloseBtn?.addEventListener('click', () => this.hideIntervalInfoModal());
        this.modalElements.vehicleCloseX?.addEventListener('click', () => this.hideVehicleInfoModal());
        this.modalElements.vehicleCloseBtn?.addEventListener('click', () => this.hideVehicleInfoModal());

        // Close modal when clicking outside
        this.copyModal?.addEventListener('click', (e) => {
            if (e.target === this.copyModal) {
                this.hideCopyModal();
            }
        });

        this.intervalInfoModal?.addEventListener('click', (e) => {
            if (e.target === this.intervalInfoModal) {
                this.hideIntervalInfoModal();
            }
        });

        this.vehicleInfoModal?.addEventListener('click', (e) => {
            if (e.target === this.vehicleInfoModal) {
                this.hideVehicleInfoModal();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.copyModal?.style.display === 'flex') {
                    this.hideCopyModal();
                } else if (this.intervalInfoModal?.style.display === 'flex') {
                    this.hideIntervalInfoModal();
                } else if (this.vehicleInfoModal?.style.display === 'flex') {
                    this.hideVehicleInfoModal();
                }
            }
            if (e.key === '/' && !this.isInputFocused()) {
                e.preventDefault();
                this.searchInput?.focus();
            }
        });
    }

    initDarkMode() {
        if (localStorage.getItem('pocketmcs-darkmode') === 'true') {
            document.body.classList.add('dark-mode');
        }
        const toggle = document.getElementById('darkModeToggle');
        toggle?.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('pocketmcs-darkmode', document.body.classList.contains('dark-mode'));
            this.updateDarkModeBtn();
        });
        this.updateDarkModeBtn();
    }

    updateDarkModeBtn() {
        const btn = document.getElementById('darkModeToggle');
        if (!btn) return;
        const isDark = document.body.classList.contains('dark-mode');
        btn.textContent = isDark ? '☀️' : '🌙';
        btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    }

    trapFocus(element) {
        const focusable = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        this._trapHandler = (e) => {
            if (e.key !== 'Tab') return;
            if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
            else { if (document.activeElement === last) { e.preventDefault(); first.focus(); } }
        };
        element.addEventListener('keydown', this._trapHandler);
        first?.focus();
    }

    removeTrapFocus(element) {
        if (this._trapHandler) element.removeEventListener('keydown', this._trapHandler);
    }

    getNFMCStatus(nfmc) {
        if (!nfmc || !nfmc.trim() || nfmc.trim() === 'N/A') return 'na';
        const lower = nfmc.toLowerCase();
        if (lower.includes('if mission') || lower.includes('mission-dependent') ||
            lower.includes('if required') || lower.includes('if equipped') ||
            lower.includes('n/a otherwise') || lower.includes('when mission')) return 'conditional';
        return 'deadline';
    }

    normalizeNFMCText(nfmc) {
        return nfmc && nfmc.trim() ? nfmc : 'N/A';
    }

    getNFMCBadge(nfmc) {
        const status = this.getNFMCStatus(nfmc);
        if (status === 'deadline') return '<span class="nfmc-badge nfmc-deadline">🔴 Deadline Item</span>';
        if (status === 'conditional') return '<span class="nfmc-badge nfmc-conditional">🟡 Conditional</span>';
        return '<span class="nfmc-badge nfmc-ok">🟢 Non-Deadline</span>';
    }

    initInspection() {
        document.getElementById('startInspectionBtn')?.addEventListener('click', () => this.openInspectionSetup());
        document.getElementById('closeInspSetup')?.addEventListener('click', () => this.closeInspectionSetup());
        document.getElementById('inspectionSetupModal')?.addEventListener('click', (e) => {
            if (e.target === document.getElementById('inspectionSetupModal')) this.closeInspectionSetup();
        });
        document.querySelectorAll('.insp-setup-btn').forEach(btn => {
            btn.addEventListener('click', () => this.startInspection(btn.getAttribute('data-intervals')));
        });
        document.getElementById('exitInspectionBtn')?.addEventListener('click', () => this.exitInspection());
        document.getElementById('inspPass')?.addEventListener('click', () => this.markInspectionItem('pass'));
        document.getElementById('inspDeficiency')?.addEventListener('click', () => this.markInspectionItem('deficiency'));
        document.getElementById('inspSkip')?.addEventListener('click', () => this.markInspectionItem('skip'));
    }

    openInspectionSetup() {
        this._inspSetupTrigger = document.activeElement;
        const modal = document.getElementById('inspectionSetupModal');
        if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; this.trapFocus(modal); }
    }

    closeInspectionSetup() {
        const modal = document.getElementById('inspectionSetupModal');
        if (modal) { this.removeTrapFocus(modal); modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
        this._inspSetupTrigger?.focus();
    }

    startInspection(intervalStr) {
        const intervals = intervalStr.split(',').map(i => i.trim().toLowerCase());
        const sv = this.vehicleFilter?.value || 'all';
        const ss = this.systemFilter?.value || 'all';
        this.inspectionItems = pmcsData.filter(item => {
            const matchesInterval = intervals.includes(item.interval.toLowerCase());
            const matchesSystem = ss === 'all' || (item.system && item.system.toLowerCase() === ss);
            const matchesVehicle = this.itemMatchesVehicle(item, sv);
            return matchesInterval && matchesSystem && matchesVehicle;
        });
        this.inspectionIndex = 0;
        this.inspectionResults = [];
        this.closeInspectionSetup();
        if (this.inspectionItems.length === 0) { alert('No items match your current filters for that interval. Adjust filters and try again.'); return; }
        const overlay = document.getElementById('inspectionMode');
        if (overlay) { overlay.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
        const actions = document.getElementById('inspectionActions');
        if (actions) actions.style.display = '';
        this.showInspectionItem();
    }

    showInspectionItem() {
        if (this.inspectionIndex >= this.inspectionItems.length) { this.showInspectionSummary(); return; }
        const item = this.inspectionItems[this.inspectionIndex];
        const total = this.inspectionItems.length;
        const current = this.inspectionIndex + 1;
        const pct = Math.round(((current - 1) / total) * 100);
        const counter = document.getElementById('inspectionCounter');
        const fill = document.getElementById('inspectionProgressFill');
        const intervalLabel = document.getElementById('inspectionIntervalLabel');
        if (counter) counter.textContent = `Item ${current} of ${total}`;
        if (fill) fill.style.width = pct + '%';
        if (intervalLabel) intervalLabel.textContent = item.interval.toUpperCase();
        const content = document.getElementById('inspectionContent');
        if (content) { content.innerHTML = this.createInspectionCard(item); content.scrollTop = 0; }
    }

    createInspectionCard(item) {
        const nfmcText = this.normalizeNFMCText(item.notFullyMissionCapable);
        const nfmcBadge = this.getNFMCBadge(nfmcText);
        const isNA = nfmcText === 'N/A';
        const missionCapableClass = isNA ? 'mission-capable na' : 'mission-capable';
        const faultsHtml = item.commonFaults && item.commonFaults.length > 0 ? `
            <div class="insp-faults">
                <div class="procedure-title">🔧 Common Faults</div>
                <div class="procedure-content common-faults">${item.commonFaults.map(f => `<span class="fault-tag">${this.escapeHtml(f)}</span>`).join('')}</div>
            </div>` : '';
        return `<div class="insp-card">
            <div class="insp-card-header">
                <div class="insp-item-meta">
                    <span class="item-number">${this.escapeHtml(item.itemNumber)}</span>
                    <span class="tm-ref-badge">${this.escapeHtml(this.tmReference)}</span>
                    ${item.system ? `<span class="system-badge">${this.escapeHtml(item.system)}</span>` : ''}
                    <span class="interval-badge interval-${item.interval.toLowerCase()}">${this.escapeHtml(item.interval)}</span>
                </div>
                ${nfmcBadge}
            </div>
            <h2 class="insp-location">${this.escapeHtml(item.location)}</h2>
            ${faultsHtml}
            <div class="insp-procedure">
                <div class="procedure-title">📋 Procedure</div>
                <div class="procedure-content ${this.getProcedureClass(item.procedure)}">${this.formatProcedureText(item.procedure)}</div>
            </div>
            <div class="insp-nfmc">
                <div class="procedure-title">⚠️ Not Fully Mission Capable If</div>
                <div class="procedure-content ${missionCapableClass}"><p>${this.escapeHtml(nfmcText)}</p></div>
            </div>
        </div>`;
    }

    markInspectionItem(status) {
        const item = this.inspectionItems[this.inspectionIndex];
        this.inspectionResults.push({ item, status });
        this.inspectionIndex++;
        this.showInspectionItem();
    }

    showInspectionSummary() {
        const deficiencies = this.inspectionResults.filter(r => r.status === 'deficiency');
        const passes = this.inspectionResults.filter(r => r.status === 'pass');
        const skips = this.inspectionResults.filter(r => r.status === 'skip');
        const actions = document.getElementById('inspectionActions');
        if (actions) actions.style.display = 'none';
        const counter = document.getElementById('inspectionCounter');
        if (counter) counter.textContent = 'Inspection Complete';
        const fill = document.getElementById('inspectionProgressFill');
        if (fill) fill.style.width = '100%';
        const intervalLabel = document.getElementById('inspectionIntervalLabel');
        if (intervalLabel) intervalLabel.textContent = 'COMPLETE';
        const content = document.getElementById('inspectionContent');
        if (!content) return;
        let defHtml = deficiencies.length > 0
            ? deficiencies.map(r => `<div class="summary-fault-item">
                <div class="summary-fault-header">
                    <strong>${this.escapeHtml(r.item.itemNumber)}</strong>
                    <span>— ${this.escapeHtml(r.item.location)}</span>
                    ${this.getNFMCBadge(r.item.notFullyMissionCapable)}
                </div>
                <p class="summary-nfmc">NFMC If: ${this.escapeHtml(r.item.notFullyMissionCapable)}</p>
            </div>`).join('')
            : '<p class="summary-allpass">✅ No deficiencies — vehicle is fully mission capable!</p>';
        content.innerHTML = `<div class="insp-summary">
            <h2 class="summary-title">Inspection Complete</h2>
            <div class="summary-stats">
                <div class="stat-box stat-pass"><span class="insp-btn-icon">✅</span>${passes.length}<span>Passed</span></div>
                <div class="stat-box stat-def"><span class="insp-btn-icon">⚠️</span>${deficiencies.length}<span>Deficiencies</span></div>
                <div class="stat-box stat-skip"><span class="insp-btn-icon">⏭</span>${skips.length}<span>Skipped</span></div>
            </div>
            <div class="summary-deficiencies"><h3>Deficiencies Found</h3>${defHtml}</div>
            ${deficiencies.length > 0 ? `<button class="copy-btn" id="copyDefBtn" style="margin-top:14px;">📋 Copy Deficiencies for 5988-E</button>` : ''}
            <button class="btn btn-secondary" id="exitInspSummaryBtn" style="width:100%;margin-top:10px;padding:12px;">Exit Inspection</button>
        </div>`;
        content.scrollTop = 0;
        document.getElementById('copyDefBtn')?.addEventListener('click', () => this.copyDeficiencies(deficiencies));
        document.getElementById('exitInspSummaryBtn')?.addEventListener('click', () => this.exitInspection());
    }

    copyDeficiencies(deficiencies) {
        const lines = [`${this.tmReference} — PMCS DEFICIENCY REPORT`, `Date: ${new Date().toLocaleDateString('en-US')}`, ''];
        deficiencies.forEach((r, i) => {
            lines.push(`Fault ${i + 1}:`);
            lines.push(`  Item Number: ${r.item.itemNumber}`);
            lines.push(`  Location: ${r.item.location}`);
            lines.push(`  Interval: ${r.item.interval}`);
            lines.push(`  NFMC If: ${r.item.notFullyMissionCapable}`);
            lines.push('');
        });
        const text = lines.join('\n');
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => this.showCopySuccess()).catch(() => this.fallbackCopyToClipboard(text));
        } else {
            this.fallbackCopyToClipboard(text);
        }
    }

    exitInspection() {
        const overlay = document.getElementById('inspectionMode');
        if (overlay) overlay.style.display = 'none';
        const actions = document.getElementById('inspectionActions');
        if (actions) actions.style.display = '';
        document.body.style.overflow = 'auto';
        this.inspectionItems = [];
        this.inspectionIndex = 0;
        this.inspectionResults = [];
    }

    // ========================================
    // SEARCH AND FILTERING
    // ========================================

    filterItems() {
        const searchTerm = this.searchInput?.value || '';
        const selectedInterval = this.intervalFilter?.value || 'all';
        const selectedSystem = this.systemFilter?.value || 'all';

        const filteredData = pmcsData.filter(item => {
            // Enhanced search across multiple fields
            const matchesSearch = !searchTerm || this.itemMatchesSearch(item, searchTerm);
            const matchesInterval = selectedInterval === 'all' ||
                item.interval.toLowerCase() === selectedInterval;
            const matchesSystem = selectedSystem === 'all' ||
                (item.system && item.system.toLowerCase() === selectedSystem);

            return matchesSearch && matchesInterval && matchesSystem;
        });

        this.displayItems(filteredData);
    }

    itemMatchesSearch(item, searchTerm) {
        const searchFields = [
            item.itemNumber,
            item.location,
            item.procedure,
            item.notFullyMissionCapable,
            item.system || ''
        ];

        // Add keywords and common faults to search
        if (item.keywords) {
            searchFields.push(...item.keywords);
        }
        if (item.commonFaults) {
            searchFields.push(...item.commonFaults);
        }

        // Create multiple search variants for better matching
        const searchVariants = this.createSearchVariants(searchTerm);

        return searchFields.some(field => {
            const fieldVariants = this.createSearchVariants(field);

            // Check if any search variant matches any field variant
            return searchVariants.some(searchVar =>
                fieldVariants.some(fieldVar => fieldVar.includes(searchVar))
            );
        });
    }

    // Helper method to create multiple search variants for better matching
    createSearchVariants(text) {
        if (!text) return [''];

        const variants = new Set();
        const original = text.toLowerCase().trim();

        // Add original text
        variants.add(original);

        // Add normalized text (no punctuation, normalized whitespace)
        const normalized = this.normalizeSearchText(original);
        variants.add(normalized);

        // Add text with expanded contractions
        const expanded = this.expandContractions(original);
        variants.add(expanded);

        // Add normalized version of expanded text
        const normalizedExpanded = this.normalizeSearchText(expanded);
        variants.add(normalizedExpanded);

        // Add text with apostrophes replaced by spaces
        const apostropheSpaced = original.replace(/[''`]/g, ' ').replace(/\s+/g, ' ').trim();
        variants.add(apostropheSpaced);

        // Remove empty variants
        return Array.from(variants).filter(v => v.length > 0);
    }

    // Helper method to normalize text for searching
    normalizeSearchText(text) {
        if (!text) return '';

        return text
            .toLowerCase()
            .replace(/[''`]/g, '')  // Remove apostrophes, curly apostrophes, and backticks
            .replace(/[^\w\s]/g, ' ')  // Replace all other punctuation with spaces
            .replace(/\s+/g, ' ')  // Normalize whitespace
            .trim();
    }

    // Helper method to expand common contractions
    expandContractions(text) {
        if (!text) return '';

        const contractions = {
            "won't": "will not",
            "can't": "cannot",
            "don't": "do not",
            "doesn't": "does not",
            "didn't": "did not",
            "isn't": "is not",
            "aren't": "are not",
            "wasn't": "was not",
            "weren't": "were not",
            "haven't": "have not",
            "hasn't": "has not",
            "hadn't": "had not",
            "wouldn't": "would not",
            "couldn't": "could not",
            "shouldn't": "should not",
            "mustn't": "must not",
            "needn't": "need not",
            "it's": "it is",
        };

        let expanded = text.toLowerCase();

        // Replace contractions - handle both regular and curly apostrophes
        for (const [contraction, expansion] of Object.entries(contractions)) {
            const regex = new RegExp(`\\b${contraction.replace(/'/g, "[''`]")}\\b`, 'gi');
            expanded = expanded.replace(regex, expansion);
        }

        return expanded;
    }

    // ========================================
    // ADD NEW METHODS
    // ========================================

    handleVehicleFilterChange() {
        this.filterItems();
        const selectedVehicle = this.vehicleFilter?.value || 'all';
        const itemCount = pmcsData.filter(item => this.itemMatchesVehicle(item, selectedVehicle)).length;
        this.updateVehicleInfo(selectedVehicle, itemCount);
    }

    itemMatchesVehicle(item, selectedVehicle) {
        if (selectedVehicle === 'all') return true;
        return (item.vehicle || 'm1095') === selectedVehicle;
    }

    updateVehicleInfo(selectedVehicle, itemCount) {
        if (!this.vehicleInfo) return;

        if (selectedVehicle === 'all') {
            this.vehicleInfo.style.display = 'none';
            return;
        }

        const info = vehicleInfo[selectedVehicle];
        if (!info) return;

        this.vehicleInfo.style.display = 'block';

        const titleElement = document.getElementById('vehicleTitle');
        const descriptionElement = document.getElementById('vehicleDescription');
        const itemsElement = document.getElementById('applicableItems');

        if (titleElement) titleElement.textContent = info.name;
        if (descriptionElement) descriptionElement.textContent = info.description;
        if (itemsElement) itemsElement.textContent = `${itemCount} Items`;
    }

    showVehicleInfoModal(vehicleType) {
        if (!this.vehicleInfoModal || !vehicleType || vehicleType === 'all') return;

        const info = vehicleInfo[vehicleType];
        if (!info) return;

        const detailsElement = document.getElementById('vehicleInfoDetails');
        if (detailsElement) {
            detailsElement.innerHTML = `
            <h4>${info.name}</h4>
            <p>${info.description}</p>
            <h4>Key Features:</h4>
            <ul>
                ${info.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <h4>Vehicle Models:</h4>
            <ul>
                ${vehicleMapping[vehicleType].map(model => `<li>${model}</li>`).join('')}
            </ul>
        `;
        }

        this.vehicleInfoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            this.modalElements.vehicleCloseBtn?.focus();
        }, 100);
    }

    hideVehicleInfoModal() {
        if (!this.vehicleInfoModal) return;

        this.vehicleInfoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // ========================================
    // DISPLAY FUNCTIONS
    // ========================================

    displayItems(items) {
        if (!this.resultsContainer || !this.noResults) return;

        if (items.length === 0) {
            this.resultsContainer.style.display = 'none';
            this.noResults.style.display = 'block';
            return;
        }

        this.resultsContainer.style.display = 'block';
        this.noResults.style.display = 'none';

        this.resultsContainer.innerHTML = items.map(item =>
            this.createItemCard(item)
        ).join('');

        // Add event listeners to copy buttons
        this.attachCopyButtonListeners();
    }

    createItemCard(item) {
        const intervalClass = `interval-${item.interval.toLowerCase()}`;
        const nfmcText = this.normalizeNFMCText(item.notFullyMissionCapable);
        const isNA = nfmcText === 'N/A';
        const missionCapableClass = isNA ? 'mission-capable na' : 'mission-capable';

        // Create common faults section if available
        const commonFaultsSection = item.commonFaults && item.commonFaults.length > 0 ? `
            <div class="procedure-section">
                <div class="procedure-title">
                    🔧 Common Faults
                </div>
                <div class="procedure-content common-faults">
                    ${item.commonFaults.map(fault =>
            `<span class="fault-tag">${this.escapeHtml(fault)}</span>`
        ).join('')}
                </div>
            </div>
        ` : '';

        return `
            <div class="item-card" data-item="${item.itemNumber}">
                <div class="item-header">
                    <div class="item-info">
                        <div class="item-number">${this.escapeHtml(item.itemNumber)}</div>
                        <span class="tm-ref-badge">${this.escapeHtml(this.tmReference || 'TM 9-2330-392-13&P')}</span>
                        ${item.system ? `<div class="system-badge">${this.escapeHtml(item.system)}</div>` : ''}
                        ${this.getNFMCBadge(nfmcText)}
                    </div>
                    <div class="interval-badge ${intervalClass}">${this.escapeHtml(item.interval)}</div>
                </div>

                <h3 class="location-title">${this.escapeHtml(item.location)}</h3>
                
                ${commonFaultsSection}
                
                <div class="procedure-section">
                    <div class="procedure-title">
                        📋 Crew Member Procedure
                    </div>
                    <div class="procedure-content ${this.getProcedureClass(item.procedure)}">
                        ${this.formatProcedureText(item.procedure)}
                    </div>
                </div>
                
                <div class="procedure-section">
                    <div class="procedure-title">
                        ⚠️ Not Fully Mission Capable If
                    </div>
                    <div class="procedure-content ${missionCapableClass}">
                        <p>${this.escapeHtml(nfmcText)}</p>
                    </div>
                </div>
                
                <button class="copy-btn" data-item="${item.itemNumber}">
                    Copy for 5988 Form
                </button>
            </div>
        `;
    }

    getProcedureClass(procedure) {
        const lowerProc = procedure.toLowerCase();
        if (lowerProc.includes('warning')) return 'warning';
        if (lowerProc.includes('caution')) return 'caution';
        if (lowerProc.includes('note')) return 'note';
        return '';
    }

    formatProcedureText(text) {
        return this.escapeHtml(text)
            .replace(/WARNING/gi, '<strong style="color: #f57c00;">WARNING</strong>')
            .replace(/CAUTION/gi, '<strong style="color: #ff9800;">CAUTION</strong>')
            .replace(/NOTE/gi, '<strong style="color: #2196f3;">NOTE</strong>')
            .replace(/DRIVER/gi, '<strong>DRIVER</strong>')
            .split('\n')
            .map(line => line.trim() ? `<p>${line.trim()}</p>` : '')
            .filter(line => line)
            .join('');
    }

    attachCopyButtonListeners() {
        const copyButtons = document.querySelectorAll('.copy-btn');
        copyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const itemNumber = btn.getAttribute('data-item');
                this.showCopyModal(itemNumber);
            });
        });
    }

    // ========================================
    // MODAL FUNCTIONS
    // ========================================

    showCopyModal(itemNumber) {
        const item = pmcsData.find(i => i.itemNumber === itemNumber);
        if (!item || !this.copyModal) return;

        this.currentModalItem = item;

        // Populate modal content
        if (this.modalElements.itemNumber) {
            this.modalElements.itemNumber.textContent = item.itemNumber;
        }
        if (this.modalElements.location) {
            this.modalElements.location.textContent = item.location;
        }
        if (this.modalElements.interval) {
            this.modalElements.interval.textContent = item.interval;
        }
        if (this.modalElements.status) {
            this.modalElements.status.textContent = this.normalizeNFMCText(item.notFullyMissionCapable);
        }

        // Add vehicle information to modal
        if (this.modalElements.vehicle) {
            const selectedVehicle = this.vehicleFilter?.value || 'all';
            if (selectedVehicle !== 'all' && vehicleInfo[selectedVehicle]) {
                this.modalElements.vehicle.textContent = vehicleInfo[selectedVehicle].name;
            } else {
                this.modalElements.vehicle.textContent = 'All Vehicles';
            }
        }

        // Show modal
        this.copyModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        // Focus the copy button for accessibility
        setTimeout(() => {
            this.modalElements.copyBtn?.focus();
        }, 100);
    }

    hideCopyModal() {
        if (!this.copyModal) return;

        this.copyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.currentModalItem = null;
    }

    showIntervalInfoModal() {
        if (!this.intervalInfoModal) return;

        this.intervalInfoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        // Focus the close button for accessibility
        setTimeout(() => {
            this.modalElements.intervalCloseBtn?.focus();
        }, 100);
    }

    hideIntervalInfoModal() {
        if (!this.intervalInfoModal) return;

        this.intervalInfoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    async copyToClipboard() {
        if (!this.currentModalItem) return;

        const item = this.currentModalItem;
        const selectedVehicle = this.vehicleFilter?.value || 'all';
        const vehicleName = selectedVehicle !== 'all' && vehicleInfo[selectedVehicle]
            ? vehicleInfo[selectedVehicle].name
            : 'All Vehicles';

        const textToCopy = `Item Number: ${item.itemNumber}
Location/Item: ${item.location}
Interval: ${item.interval}
Trailer: ${vehicleName}
Not Fully Mission Capable If: ${this.normalizeNFMCText(item.notFullyMissionCapable)}`;

        try {
            await navigator.clipboard.writeText(textToCopy);
            this.showCopySuccess();
        } catch (err) {
            console.error('Failed to copy text:', err);
            this.fallbackCopyToClipboard(textToCopy);
        }
    }

    showCopySuccess() {
        const copyBtn = this.modalElements.copyBtn;
        if (!copyBtn) return;

        const originalText = copyBtn.textContent;
        const originalBg = copyBtn.style.background;

        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#4caf50';
        copyBtn.disabled = true;

        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = originalBg;
            copyBtn.disabled = false;
        }, 2000);
    }

    fallbackCopyToClipboard(text) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            this.showCopySuccess();
        } catch (err) {
            console.error('Fallback copy failed:', err);
            alert('Failed to copy to clipboard. Please try selecting the text manually.');
        }

        document.body.removeChild(textArea);
    }

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    isInputFocused() {
        const activeElement = document.activeElement;
        return activeElement && (
            activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'TEXTAREA' ||
            activeElement.tagName === 'SELECT' ||
            activeElement.contentEditable === 'true'
        );
    }

    // ========================================
    // PUBLIC API
    // ========================================

    // Method to programmatically search
    search(query) {
        if (this.searchInput) {
            this.searchInput.value = query;
            this.filterItems();
        }
    }

    // Method to filter by system
    filterBySystem(system) {
        if (this.systemFilter) {
            this.systemFilter.value = system;
            this.filterItems();
        }
    }

    // Method to filter by interval
    filterByInterval(interval) {
        if (this.intervalFilter) {
            this.intervalFilter.value = interval;
            this.filterItems();
        }
    }

    // Method to filter by vehicle
    filterByVehicle(vehicle) {
        if (this.vehicleFilter) {
            this.vehicleFilter.value = vehicle;
            this.filterItems();
        }
    }

    // Method to reset all filters
    resetFilters() {
        if (this.searchInput) this.searchInput.value = '';
        if (this.systemFilter) this.systemFilter.value = 'all';
        if (this.intervalFilter) this.intervalFilter.value = 'all';
        if (this.vehicleFilter) this.vehicleFilter.value = 'all';
        this.filterItems();
    }

    // Method to get current filter state
    getFilterState() {
        return {
            search: this.searchInput?.value || '',
            system: this.systemFilter?.value || 'all',
            interval: this.intervalFilter?.value || 'all',
            vehicle: this.vehicleFilter?.value || 'all'
        };
    }

    // Method to get filtered results count
    getResultsCount() {
        const items = this.resultsContainer?.querySelectorAll('.item-card');
        return items ? items.length : 0;
    }
}

// Mobile Scroll Behavior for Search Header
class MobileScrollBehavior {
    constructor() {
        this.searchSection = null;
        this.lastScrollY = 0;
        this.scrollDirection = 'up';
        this.scrollThreshold = 5; // More sensitive scroll detection
        this.hideTimeout = null;
        this.showTimeout = null;
        this.isMobile = false;
        this.isSticky = false; // Track if search section is at top

        this.init();
    }

    init() {
        // Check if we're on mobile
        this.checkMobile();

        // Get the search section element
        this.searchSection = document.querySelector('.search-section');

        if (!this.searchSection) {
            console.warn('Search section not found for mobile scroll behavior');
            return;
        }

        // Set up event listeners
        this.setupEventListeners();

        // Initial setup
        this.lastScrollY = window.scrollY;
    }

    checkMobile() {
        this.isMobile = window.innerWidth <= 767;
    }

    setupEventListeners() {
        // Throttled scroll listener for better performance
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking && this.isMobile) {
                requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        // Handle window resize
        window.addEventListener('resize', () => {
            this.checkMobile();

            // Reset classes if switching to desktop
            if (!this.isMobile && this.searchSection) {
                this.resetToNormal();
            }
        }, { passive: true });

        // Handle touch events for better mobile experience
        let touchStartY = 0;
        let touchStartTime = 0;

        document.addEventListener('touchstart', (e) => {
            if (this.isMobile) {
                touchStartY = e.touches[0].clientY;
                touchStartTime = Date.now();
            }
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            if (this.isMobile) {
                const touchY = e.touches[0].clientY;
                const deltaY = touchStartY - touchY;
                const deltaTime = Date.now() - touchStartTime;

                // If significant touch movement with reasonable speed
                if (Math.abs(deltaY) > 10 && deltaTime > 50) {
                    this.scrollDirection = deltaY > 0 ? 'down' : 'up';
                }
            }
        }, { passive: true });
    }

    handleScroll() {
        if (!this.isMobile || !this.searchSection) return;

        const currentScrollY = window.scrollY;
        const scrollDifference = currentScrollY - this.lastScrollY;

        // Check if search section has reached the top (sticky position)
        const searchRect = this.searchSection.getBoundingClientRect();
        const isAtTop = searchRect.top <= 0;

        // Update sticky state
        if (isAtTop && !this.isSticky) {
            this.isSticky = true;
            this.searchSection.classList.add('sticky-active');
        } else if (!isAtTop && this.isSticky) {
            this.isSticky = false;
            this.searchSection.classList.remove('sticky-active');
            this.resetToNormal();
        }

        // Determine scroll direction with threshold
        if (Math.abs(scrollDifference) > this.scrollThreshold) {
            this.scrollDirection = scrollDifference > 0 ? 'down' : 'up';
        }

        // Only apply hide/show behavior when sticky
        if (this.isSticky) {
            this.updateHeaderVisibility(currentScrollY, scrollDifference);
        }

        this.lastScrollY = currentScrollY;
    }

    updateHeaderVisibility(currentScrollY, scrollDifference) {
        // Only hide/show when we're in sticky mode and have scrolled a bit
        if (!this.isSticky || currentScrollY < 10) {
            return;
        }

        // Hide header when scrolling down with immediate response
        if (this.scrollDirection === 'down') {
            this.hideHeader();
        }
        // Show header when scrolling up, but with more leeway
        else if (this.scrollDirection === 'up') {
            // Require more significant upward scroll to show header
            const upwardScrollAmount = Math.abs(scrollDifference);

            // Show immediately if user scrolled up significantly (25px or more)
            if (upwardScrollAmount >= 50) {
                this.showHeader();
            }
            // Or show after accumulated smaller scrolls
            else if (upwardScrollAmount >= 25) {
                // Add a small delay for smaller scroll amounts
                this.showHeaderWithDelay();
            }
        }
    }

    showHeader() {
        if (!this.searchSection || !this.isSticky) return;

        // Clear any pending hide timeout
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }

        this.searchSection.classList.remove('scroll-hidden');
        this.searchSection.classList.add('scroll-visible');
    }

    hideHeader() {
        if (!this.searchSection || !this.isSticky) return;

        // Add a small delay before hiding to prevent flickering
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }

        this.hideTimeout = setTimeout(() => {
            this.searchSection.classList.remove('scroll-visible');
            this.searchSection.classList.add('scroll-hidden');
        }, 150); // Slightly longer delay for smoother feel
    }

    showHeaderWithDelay() {
    if (!this.searchSection || !this.isSticky) return;
    
    // Clear any existing timeout
    if (this.showTimeout) {
        clearTimeout(this.showTimeout);
    }
    
    // Show header after a short delay for accumulated small scrolls
    this.showTimeout = setTimeout(() => {
        if (this.scrollDirection === 'up') { // Double-check direction
            this.showHeader();
        }
    }, 300); // 300ms delay for more natural feel
}

    resetToNormal() {
    if (!this.searchSection) return;
    
    // Clear any pending timeouts
    if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
    }
    
    if (this.showTimeout) {
        clearTimeout(this.showTimeout);
        this.showTimeout = null;
    }

    // Remove all scroll-related classes
    this.searchSection.classList.remove('scroll-hidden', 'scroll-visible', 'sticky-active');
    this.isSticky = false;
}

    // Public method to force show header (useful for search focus, etc.)
    forceShowHeader() {
        if (this.isMobile && this.isSticky) {
            this.showHeader();
        }
    }

    // Public method to get current mobile state
    getIsMobile() {
        return this.isMobile;
    }
}

// Initialize mobile scroll behavior when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create global instance
    window.mobileScrollBehavior = new MobileScrollBehavior();

    // Optional: Show header when search input is focused
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            if (window.mobileScrollBehavior) {
                window.mobileScrollBehavior.forceShowHeader();
            }
        });
    }
});

// Integration with existing PMCS app
if (typeof PMCSApp !== 'undefined') {
    // Extend the existing PMCSApp class to include mobile scroll behavior
    const originalInit = PMCSApp.prototype.init;

    PMCSApp.prototype.init = function () {
        // Call original init
        originalInit.call(this);

        // Initialize mobile scroll behavior
        this.mobileScrollBehavior = new MobileScrollBehavior();

        // Show header when performing searches
        const originalFilterItems = this.filterItems;
        this.filterItems = function () {
            originalFilterItems.call(this);

            // Show header after filtering on mobile
            if (this.mobileScrollBehavior && this.mobileScrollBehavior.getIsMobile()) {
                this.mobileScrollBehavior.forceShowHeader();
            }
        };
    };
}

// Add scroll indicator for better UX (optional)
class ScrollIndicator {
    constructor() {
        this.indicator = null;
        this.isVisible = false;
        this.init();
    }

    init() {
        // Only create indicator on mobile
        if (window.innerWidth <= 767) {
            this.createIndicator();
            this.setupScrollListener();
        }

        // Handle resize
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 767 && !this.indicator) {
                this.createIndicator();
                this.setupScrollListener();
            } else if (window.innerWidth > 767 && this.indicator) {
                this.removeIndicator();
            }
        });
    }

    createIndicator() {
        // Create a subtle scroll progress indicator
        this.indicator = document.createElement('div');
        this.indicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #2d5a3d, #4caf50);
            z-index: 101;
            width: 0%;
            transition: width 0.1s ease;
            pointer-events: none;
        `;
        document.body.appendChild(this.indicator);
    }

    removeIndicator() {
        if (this.indicator) {
            document.body.removeChild(this.indicator);
            this.indicator = null;
        }
    }

    setupScrollListener() {
        if (!this.indicator) return;

        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            this.indicator.style.width = Math.min(scrollPercent, 100) + '%';
        }, { passive: true });
    }
}

// Initialize scroll indicator
document.addEventListener('DOMContentLoaded', () => {
    new ScrollIndicator();
});

// ========================================
// INITIALIZATION
// ========================================

// Initialize the application
const pmcsApp = new PMCSApp();

// Make app available globally for debugging
window.pmcsApp = pmcsApp;

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PMCSApp, pmcsData };
}

