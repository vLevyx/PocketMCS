// ========================================
// ARMY TACTICAL GENERATOR PMCS DATA
// TM 9-6115-749-10 (5KW / MEP-802A)
// TM 9-6115-750-10 (10KW / MEP-803A)
// TM 9-6115-751-10 (15KW / MEP-804A)
// TM 9-6115-752-10 (30KW / MEP-805A)
// TM 9-6115-753-10 (60KW / MEP-806A)
// Tactical Quiet Generators (TQG)
// ========================================

const pmcsData = [

    // -------------------------------------------------------
    // BEFORE OPERATION
    // -------------------------------------------------------
    {
        itemNumber: "1",
        interval: "Before",
        location: "Overall Inspection / Walk-Around",
        system: "Body/Frame",
        applicableGenerators: ["All"],
        keywords: [
            "overall inspection", "walk around", "damage", "body damage", "frame damage",
            "generator damage", "dents", "cracks", "gen set damage", "skid damage",
            "housing damage", "access panel damage", "panel missing", "door missing",
            "gen damage", "impact damage", "gen frame", "bent frame"
        ],
        commonFaults: [
            "Generator frame bent or cracked", "Access panel missing or damaged",
            "Housing dented or cracked", "Skid damaged", "Panel latches broken",
            "Generator cover missing", "Structural damage present"
        ],
        procedure: "OPERATOR\na. Walk around the generator set and visually inspect overall condition.\nb. Check frame/skid for bends, cracks, or breaks.\nc. Inspect all access panels and doors for damage and proper closure.\nd. Check panel latches and hinges for proper operation.\ne. Inspect housing/enclosure for dents, cracks, or holes that would allow water intrusion.\nf. Report any structural damage to unit maintenance.",
        notFullyMissionCapable: "Frame/skid cracked or broken affecting structural integrity. Access panels missing that expose critical components to weather."
    },
    {
        itemNumber: "2",
        interval: "Before",
        location: "Engine Oil Level",
        system: "Engine",
        applicableGenerators: ["All"],
        keywords: [
            "engine oil", "oil level", "oil low", "dipstick", "check oil",
            "engine oil level", "add oil", "oil not visible", "oil dipstick",
            "milky oil", "oil contaminated", "oil dirty", "oil color",
            "low oil", "no oil", "oil below add mark"
        ],
        commonFaults: [
            "Engine oil below ADD mark", "Oil level not showing on dipstick",
            "Milky oil (coolant contamination)", "Oil extremely dirty",
            "Oil overfull", "Incorrect oil type used"
        ],
        procedure: "OPERATOR NOTE Allow generator to cool 5 minutes before checking oil after operation.\n\na. Remove oil dipstick, wipe clean, reinsert fully, and withdraw to check level.\nb. Oil level must be between ADD and FULL marks on dipstick.\nc. Inspect oil for milky or foamy appearance — indicates coolant contamination.\nd. Add oil of correct type if necessary (refer to LO for correct grade).\ne. Do not overfill — damage to engine can result.",
        notFullyMissionCapable: "Engine oil below ADD mark on dipstick. Milky or contaminated oil present."
    },
    {
        itemNumber: "3",
        interval: "Before",
        location: "Coolant Level",
        system: "Cooling System",
        applicableGenerators: ["10KW", "15KW", "30KW", "60KW"],
        keywords: [
            "coolant level", "coolant low", "radiator coolant", "coolant reservoir",
            "antifreeze", "coolant check", "coolant overflow", "degas bottle",
            "coolant empty", "no coolant", "coolant below minimum", "radiator level"
        ],
        commonFaults: [
            "Coolant level below minimum", "Coolant reservoir empty",
            "Coolant leak visible", "Antifreeze insufficient",
            "Coolant contaminated with oil", "Radiator cap not sealing"
        ],
        procedure: "OPERATOR CAUTION Do not open radiator cap when engine is hot — scalding coolant under pressure can cause severe burns.\n\na. Check coolant level in overflow/degas bottle — level should be between MIN and MAX marks.\nb. If low, allow engine to cool fully, then carefully add coolant mixture (50/50 antifreeze/water).\nc. Inspect visible coolant hoses for leaks or damage.\nd. Check radiator cap for secure seating and gasket condition.\ne. Note: 5KW units are air-cooled — no coolant check required.",
        notFullyMissionCapable: "Coolant level below minimum mark. Active coolant leak. Coolant contaminated with oil."
    },
    {
        itemNumber: "4",
        interval: "Before",
        location: "Fuel Level / Fuel System",
        system: "Fuel System",
        applicableGenerators: ["All"],
        keywords: [
            "fuel level", "fuel low", "no fuel", "fuel tank", "fuel empty",
            "fuel gauge", "refuel", "add fuel", "fuel leak", "fuel line leak",
            "fuel hose", "fuel valve", "fuel shut off", "fuel cap", "fuel contaminated",
            "water in fuel", "diesel fuel", "fuel strainer", "fuel sight glass"
        ],
        commonFaults: [
            "Fuel level low or empty", "Fuel tank empty", "Fuel leak at fitting",
            "Fuel hose cracked or chafed", "Fuel shutoff valve closed",
            "Fuel cap missing or not sealed", "Water in fuel", "Fuel contaminated"
        ],
        procedure: "OPERATOR\na. Check fuel level — verify adequate fuel for mission duration.\nb. Inspect fuel tank and fuel lines for leaks or damage.\nc. Check fuel shutoff valve — ensure it is in the OPEN position.\nd. Inspect fuel cap for presence and proper sealing.\ne. Inspect fuel filter/strainer for blockage.\nf. Drain water from fuel filter/water separator if equipped.\ng. Ensure fuel supply is clean diesel — do not use contaminated fuel.",
        notFullyMissionCapable: "Fuel level insufficient for mission. Active fuel leak. Fuel shutoff valve cannot be opened."
    },
    {
        itemNumber: "5",
        interval: "Before",
        location: "Air Cleaner / Air Intake",
        system: "Engine",
        applicableGenerators: ["All"],
        keywords: [
            "air cleaner", "air filter", "air restriction", "restriction indicator",
            "filter clogged", "air filter dirty", "air intake", "pre-cleaner",
            "air cleaner housing", "air filter restriction", "red indicator",
            "dust unloader", "air cleaner service needed"
        ],
        commonFaults: [
            "Air restriction indicator showing red", "Air filter clogged", "Pre-cleaner damaged",
            "Air intake hose collapsed", "Air cleaner housing cracked", "Dust unloader missing"
        ],
        procedure: "OPERATOR\na. Check air cleaner restriction indicator — if RED, service air cleaner before starting.\nb. Inspect air cleaner housing for damage and secure mounting.\nc. Check air intake hose for collapse, cracks, or loose connections.\nd. Check dust unloader (if equipped) for presence and condition.\ne. Service/replace air filter element as required — reset indicator after service.",
        notFullyMissionCapable: "Air restriction so severe engine cannot be started. Air intake hose collapsed preventing engine operation."
    },
    {
        itemNumber: "6",
        interval: "Before",
        location: "Battery / Electrical Starting System",
        system: "Electrical",
        applicableGenerators: ["All"],
        keywords: [
            "battery", "battery dead", "battery low", "battery charge", "battery terminals",
            "battery corrosion", "battery cables", "battery electrolyte", "battery fluid",
            "won't start", "starter", "starting system", "cranking", "battery voltage",
            "battery hold down", "jump start", "battery acid"
        ],
        commonFaults: [
            "Battery dead or low charge", "Battery terminals corroded", "Battery cables loose",
            "Battery electrolyte low", "Battery will not hold charge", "Starting system failure",
            "Loose battery cables causing no-start"
        ],
        procedure: "OPERATOR WARNING Remove all jewelry before working on batteries. Do not smoke near batteries — explosion hazard.\n\na. Inspect battery terminals for corrosion and tighten connections.\nb. Check battery electrolyte level — add distilled water if below split ring.\nc. Inspect battery case for cracks or leaks.\nd. Check battery hold-down strap/bracket for security.\ne. Inspect battery cables for fraying, cracking, or loose connections.\nf. If battery is suspect, have it load tested by unit maintenance.",
        notFullyMissionCapable: "Battery dead and generator cannot be started. Battery leaking. Battery cables loose/corroded causing no-start."
    },
    {
        itemNumber: "7",
        interval: "Before",
        location: "Ground Cable / Grounding",
        system: "Electrical",
        applicableGenerators: ["All"],
        keywords: [
            "grounding", "ground cable", "ground rod", "electrical ground", "ground wire",
            "grounding strap", "ground connection", "electrical shock hazard", "ungrounded",
            "ground lug", "grounding terminal", "earth ground", "ground fault"
        ],
        commonFaults: [
            "Ground cable missing", "Ground cable not connected to ground rod",
            "Ground rod not driven fully", "Ground connection corroded", "Ground cable damaged",
            "Generator not grounded before operation"
        ],
        procedure: "OPERATOR WARNING Failure to ground the generator before operation can result in electrical shock causing injury or death to personnel.\n\na. Verify ground cable is connected from generator ground lug to ground rod.\nb. Ground rod must be driven into earth a minimum of 8 feet (or per local SOP).\nc. Inspect ground cable for damage, fraying, or broken connections.\nd. Check ground lug connection for tightness and corrosion.\ne. Do not operate generator without proper grounding.",
        notFullyMissionCapable: "Generator cannot be grounded. Ground cable missing or damaged beyond use."
    },
    {
        itemNumber: "8",
        interval: "Before",
        location: "Control Panel / Indicators",
        system: "Controls/Gauges",
        applicableGenerators: ["All"],
        keywords: [
            "control panel", "panel indicators", "gauges", "meters", "voltmeter panel",
            "frequency meter", "ammeter", "panel lights", "fault indicators",
            "control switches", "circuit breakers", "output breaker", "panel damage",
            "cracked gauges", "panel not working", "dead panel", "display"
        ],
        commonFaults: [
            "Control panel not functioning", "Gauges cracked or broken", "Fault indicator on",
            "Circuit breaker tripped", "Output breaker will not reset", "Panel lights out",
            "Voltmeter reading incorrect", "Frequency meter reading wrong"
        ],
        procedure: "OPERATOR\na. Visually inspect control panel for damage — cracked gauges, broken switches, damaged housing.\nb. Check that all switches are in correct position for startup per TM startup procedure.\nc. Inspect circuit breakers for tripped condition — investigate cause before resetting.\nd. Check that output breaker (load breaker) is in OPEN/OFF position before starting.\ne. Verify all gauges have no visible damage that would prevent reading.",
        notFullyMissionCapable: "Control panel inoperative preventing safe operation or monitoring. Output breaker cannot be operated."
    },
    {
        itemNumber: "9",
        interval: "Before",
        location: "Exhaust System",
        system: "Exhaust",
        applicableGenerators: ["All"],
        keywords: [
            "exhaust", "exhaust pipe", "exhaust blocked", "muffler", "exhaust leak",
            "exhaust fumes", "exhaust hot", "exhaust system", "exhaust noise",
            "exhaust cracked", "exhaust mounts", "exhaust clamps", "carbon buildup",
            "exhaust outlet blocked", "bird nest exhaust", "debris in exhaust"
        ],
        commonFaults: [
            "Exhaust outlet blocked by debris", "Bird/animal nest in exhaust",
            "Exhaust pipe cracked or damaged", "Exhaust mounts broken",
            "Exhaust fumes re-entering enclosure", "Exhaust clamps loose"
        ],
        procedure: "OPERATOR WARNING Exhaust contains carbon monoxide — a colorless, odorless gas that can cause death. Ensure exhaust outlet is clear and directed away from personnel and enclosed areas.\n\na. Check exhaust outlet for blockage — remove all debris, nests, or foreign objects.\nb. Inspect exhaust pipe and muffler for cracks, holes, or damage.\nc. Check exhaust mounting clamps and brackets for security.\nd. Ensure exhaust outlet is directed away from people, fuel, and buildings.\ne. Do not operate in enclosed spaces without adequate ventilation.",
        notFullyMissionCapable: "Exhaust blocked preventing operation. Exhaust pipe cracked allowing fumes inside equipment enclosure."
    },
    {
        itemNumber: "10",
        interval: "Before",
        location: "Load Cables / Output Connections",
        system: "Electrical",
        applicableGenerators: ["All"],
        keywords: [
            "load cables", "output cables", "power cables", "cable connections",
            "cable damaged", "cable frayed", "cable cracked insulation", "connector damaged",
            "loose connection", "output terminal", "receptacle damaged", "load connection",
            "power connection", "cable overheating", "burned connector", "melted insulation"
        ],
        commonFaults: [
            "Load cable insulation cracked or frayed", "Connector pins corroded or damaged",
            "Loose connection at output terminal", "Cable overheated/burned",
            "Connector housing cracked", "Cable not rated for load", "Missing cable clamps"
        ],
        procedure: "OPERATOR\na. Inspect all load cables for damaged, cracked, or frayed insulation.\nb. Check all output cable connectors for damaged pins, cracked housing, or corrosion.\nc. Verify output breaker is OPEN/OFF before connecting load cables.\nd. Check that cables are properly routed — not crossing hot surfaces or pinched.\ne. Verify cable connections are tight at generator output terminals.\nf. Ensure cables are rated for the intended load.",
        notFullyMissionCapable: "Load cables with exposed wire. Connectors damaged to point of unsafe connection. Output terminals damaged."
    },
    {
        itemNumber: "11",
        interval: "Before",
        location: "Drive Belts (Liquid-Cooled Models)",
        system: "Engine",
        applicableGenerators: ["10KW", "15KW", "30KW", "60KW"],
        keywords: [
            "drive belt", "alternator belt", "fan belt", "belt cracked", "belt frayed",
            "belt loose", "belt worn", "belt broken", "serpentine belt", "v-belt",
            "belt tension", "belt condition", "belt glazed", "belt squeal"
        ],
        commonFaults: [
            "Belt cracked or fraying", "Belt loose on pulleys", "Belt glazed or slipping",
            "Belt broken", "Belt misaligned", "Belt squealing on startup"
        ],
        procedure: "OPERATOR (Liquid-cooled generators: 10KW, 15KW, 30KW, 60KW)\na. Inspect drive belt(s) for cracks, frays, glazing, or excessive wear.\nb. Check belt tension — deflection should meet TM specification.\nc. Check belt alignment on pulleys.\nd. Replace any belt that is cracked, frayed, or has more than 50% wear.\ne. Listen for belt squeal on startup.",
        notFullyMissionCapable: "Belt broken. Belt frayed to point of imminent failure. Belt slipping preventing proper fan/charging operation."
    },
    {
        itemNumber: "12",
        interval: "Before",
        location: "Fuel / Water Separator — Drain",
        system: "Fuel System",
        applicableGenerators: ["All"],
        keywords: [
            "water separator", "fuel separator", "separator drain", "water in fuel",
            "fuel filter", "drain separator", "water accumulation", "fuel water separator",
            "bowl drain", "sediment bowl", "fuel filter bowl", "water drain valve"
        ],
        commonFaults: [
            "Water accumulated in fuel separator", "Water-in-fuel light on",
            "Separator bowl full of water", "Separator drain valve stuck",
            "Fuel contaminated with water causing misfiring"
        ],
        procedure: "OPERATOR\na. Locate fuel/water separator drain valve.\nb. Place container under drain and slowly open valve.\nc. Drain until clean fuel (not water/sediment) flows from drain.\nd. Close drain valve securely.\ne. If large amount of water is present, report to unit maintenance for fuel system investigation.",
        notFullyMissionCapable: "N/A"
    },

    // -------------------------------------------------------
    // DURING OPERATION
    // -------------------------------------------------------
    {
        itemNumber: "13",
        interval: "During",
        location: "Voltage Output",
        system: "Controls/Gauges",
        applicableGenerators: ["All"],
        keywords: [
            "voltage output", "output voltage", "voltage wrong", "wrong voltage",
            "voltage too high", "voltage too low", "low voltage", "high voltage",
            "voltmeter during", "AC voltage", "120 volt", "208 volt", "240 volt",
            "voltage regulation", "voltage fluctuating", "voltage unstable"
        ],
        commonFaults: [
            "Output voltage too high", "Output voltage too low", "Voltage fluctuating",
            "Voltage unstable under load", "Zero voltage output", "Voltage out of spec"
        ],
        procedure: "OPERATOR NOTE Normal output voltage: 120/240V (single phase) or 120/208V (three phase) — refer to TM for exact specification.\n\na. Check voltmeter reading after startup and allow generator to stabilize (approximately 2-3 minutes).\nb. Verify voltage is within ±5% of rated output voltage.\nc. Adjust voltage regulator if equipped and if voltage is out of spec — refer to TM for adjustment procedure.\nd. If voltage cannot be adjusted to within spec, shut down and notify unit maintenance.\ne. Monitor voltage throughout operation — significant fluctuation indicates regulator problem.",
        notFullyMissionCapable: "Output voltage more than 10% above rated (can damage connected equipment). Cannot maintain any output voltage."
    },
    {
        itemNumber: "14",
        interval: "During",
        location: "Frequency Output",
        system: "Controls/Gauges",
        applicableGenerators: ["All"],
        keywords: [
            "frequency", "frequency output", "Hz", "60 Hz", "frequency meter",
            "frequency wrong", "frequency high", "frequency low", "frequency unstable",
            "hertz", "frequency fluctuating", "frequency off", "frequency drifting",
            "governor", "speed governor"
        ],
        commonFaults: [
            "Frequency not 60 Hz", "Frequency fluctuating under load", "Frequency low",
            "Frequency high", "Frequency unstable", "Governor not regulating speed"
        ],
        procedure: "OPERATOR NOTE Normal output frequency is 60 Hz ±3 Hz at rated load per MIL-SPEC. At no load, frequency should read 60 Hz exactly.\n\na. Check frequency meter reading — should be 60 Hz at no load.\nb. Apply load and verify frequency remains within 57-63 Hz (±3 Hz of 60 Hz).\nc. If frequency drifts outside ±3 Hz under load, governor adjustment may be needed — notify unit maintenance.\nd. Monitor frequency throughout operation.\ne. Frequency that varies widely indicates governor or fuel system issue.",
        notFullyMissionCapable: "Frequency cannot be maintained within ±3 Hz of rated frequency (57-63 Hz). Frequency so unstable connected equipment is damaged."
    },
    {
        itemNumber: "15",
        interval: "During",
        location: "Engine Temperature / Coolant",
        system: "Cooling System",
        applicableGenerators: ["10KW", "15KW", "30KW", "60KW"],
        keywords: [
            "engine temperature during", "overheating", "temp gauge high", "hot engine",
            "high temp warning", "overheat shutdown", "temperature warning",
            "coolant temp during", "engine running hot", "temp alarm", "overtemp"
        ],
        commonFaults: [
            "Engine overheating during operation", "High temperature warning activated",
            "Generator shut down on overtemp", "Temperature gauge in red zone",
            "Coolant temperature excessive"
        ],
        procedure: "OPERATOR\na. Monitor engine temperature gauge continuously during operation — should remain in normal range.\nb. If engine temperature rises into red zone, shut down generator per proper shutdown procedure.\nc. Do not remove radiator cap while hot — danger of severe burns.\nd. After cool-down, check coolant level and inspect for leaks.\ne. Check for blocked air flow to radiator, failed thermostat, or low coolant.",
        notFullyMissionCapable: "Engine temperature in red zone and will not return to normal. Coolant actively leaking during operation."
    },
    {
        itemNumber: "16",
        interval: "During",
        location: "Oil Pressure Warning",
        system: "Engine",
        applicableGenerators: ["All"],
        keywords: [
            "oil pressure warning during", "low oil pressure during", "oil pressure light on",
            "oil pressure alarm", "engine oil pressure warning", "low oil shutdown",
            "oil pressure dropped", "no oil pressure", "oil pressure warning light"
        ],
        commonFaults: [
            "Oil pressure warning light illuminated during operation", "Low oil pressure shutdown activated",
            "Oil pressure dropped during operation", "Oil pressure alarm sounding"
        ],
        procedure: "OPERATOR WARNING If oil pressure warning activates during operation, shut down generator immediately. Operating with low oil pressure will destroy the engine.\n\na. Monitor oil pressure gauge/warning light during operation.\nb. If oil pressure warning activates: perform emergency shutdown immediately.\nc. Allow engine to cool and check oil level.\nd. Do not restart until cause is determined and corrected.\ne. Report oil pressure fault to unit maintenance.",
        notFullyMissionCapable: "Oil pressure warning activated during operation."
    },
    {
        itemNumber: "17",
        interval: "During",
        location: "Load / Ammeter",
        system: "Electrical",
        applicableGenerators: ["All"],
        keywords: [
            "overload", "ammeter", "load too high", "generator overloaded", "current too high",
            "load warning", "circuit breaker tripped during", "breaker tripped",
            "overload protection", "amperage high", "amps too high", "load meter"
        ],
        commonFaults: [
            "Generator overloaded — ammeter in red", "Circuit breaker tripped during operation",
            "Ammeter reading above rated amps", "Overload protection activated"
        ],
        procedure: "OPERATOR\na. Monitor ammeter to ensure generator is not overloaded — ammeter should not exceed rated amperage.\nb. If ammeter reads in red zone (overload), shed (remove) non-essential loads.\nc. If output breaker trips, investigate cause before resetting — do not continue to overload generator.\nd. Ensure total connected load does not exceed generator's rated capacity.",
        notFullyMissionCapable: "Generator cannot operate within rated load limits. Breaker repeatedly trips without cause."
    },
    {
        itemNumber: "18",
        interval: "During",
        location: "Unusual Noises / Exhaust",
        system: "Engine",
        applicableGenerators: ["All"],
        keywords: [
            "unusual noise during", "engine knocking", "knocking engine", "engine misfire",
            "rough running during", "engine vibration", "exhaust smoke during",
            "black smoke", "white smoke", "blue smoke", "smoke from engine",
            "engine noise", "rattling during", "grinding during", "backfire"
        ],
        commonFaults: [
            "Engine knocking during operation", "Unusual vibration", "Black/white/blue exhaust smoke",
            "Engine misfiring", "Rough engine operation", "Backfire", "Loud exhaust noise"
        ],
        procedure: "OPERATOR\na. Monitor for unusual engine noises — knocking, rattling, or grinding indicate mechanical problem.\nb. Check exhaust for unusual smoke: black smoke = overloading/injector issue; white smoke = coolant leak; blue smoke = oil burning.\nc. If engine knocking severely, perform emergency shutdown immediately.\nd. Report all unusual noises and smoke conditions to unit maintenance.",
        notFullyMissionCapable: "Severe engine knocking. Engine will not run smoothly enough for reliable power output."
    },

    // -------------------------------------------------------
    // AFTER OPERATION
    // -------------------------------------------------------
    {
        itemNumber: "19",
        interval: "After",
        location: "Shutdown Procedure",
        system: "Controls/Gauges",
        applicableGenerators: ["All"],
        keywords: [
            "shutdown", "shut down", "turn off generator", "stop generator", "cool down",
            "proper shutdown", "shutdown procedure", "cooling period", "idle before shutdown",
            "load removal before shutdown", "disconnect load before shutdown"
        ],
        commonFaults: [
            "Improper shutdown sequence used", "Load not removed before shutdown",
            "Insufficient cool-down period", "Emergency stop used for routine shutdown"
        ],
        procedure: "OPERATOR NOTE Proper shutdown prevents engine damage and extends generator life.\n\na. Remove all loads — open/turn off the output breaker.\nb. Allow engine to idle for 3-5 minutes (cool-down period) without load.\nc. Move engine control switch to STOP or OFF position.\nd. Verify engine has come to a complete stop.\ne. Do not use the emergency stop for routine shutdown — it does not allow proper cool-down.\nf. After shutdown, complete after-operation PMCS checks.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "20",
        interval: "After",
        location: "Engine Oil Level — After Check",
        system: "Engine",
        applicableGenerators: ["All"],
        keywords: [
            "oil after", "oil level after", "oil check after operation", "oil consume",
            "oil consumption high", "oil used", "add oil after", "post operation oil"
        ],
        commonFaults: [
            "Oil level dropped during operation", "High oil consumption",
            "Oil level below ADD mark after operation", "New oil leak discovered"
        ],
        procedure: "OPERATOR NOTE Allow 5 minutes after shutdown before checking oil to allow oil to drain to sump.\n\na. After cool-down period, check engine oil level.\nb. Add oil if level is below ADD mark.\nc. Note amount of oil consumed — excessive consumption indicates engine wear or leak.\nd. Report high oil consumption to unit maintenance.",
        notFullyMissionCapable: "Oil level critically low. Active oil leak."
    },
    {
        itemNumber: "21",
        interval: "After",
        location: "Fuel Level / Leaks After Operation",
        system: "Fuel System",
        applicableGenerators: ["All"],
        keywords: [
            "fuel after", "fuel level after", "refuel after", "top off after",
            "fuel leak after", "new fuel leak", "fuel smell after", "post op fuel"
        ],
        commonFaults: [
            "Fuel level lower than expected", "New fuel leak discovered after operation",
            "Fuel smell near generator", "Fuel leak at connection"
        ],
        procedure: "OPERATOR\na. Check fuel level after operation and refuel as required.\nb. Inspect fuel system for new leaks that may have developed during operation.\nc. Top off fuel tank to prevent water condensation.\nd. Report any new fuel leaks to unit maintenance.",
        notFullyMissionCapable: "Active fuel leak. N/A otherwise."
    },
    {
        itemNumber: "22",
        interval: "After",
        location: "Load Cables / Connections After",
        system: "Electrical",
        applicableGenerators: ["All"],
        keywords: [
            "cables after", "disconnect cables", "stow cables", "cable condition after",
            "burned cable after", "overheated connection", "connector after operation",
            "cable damage after", "hot connection after"
        ],
        commonFaults: [
            "Load cables overheated during operation", "Connector damaged during operation",
            "Burned connection point", "Cable insulation damaged from heat"
        ],
        procedure: "OPERATOR\na. After opening output breaker and ensuring generator is off, disconnect load cables.\nb. Inspect cables and connectors for overheating (discoloration, burned insulation, deformed connectors).\nc. Stow cables properly — coil without kinks and protect from damage.\nd. Report any burned or damaged cables to unit maintenance.",
        notFullyMissionCapable: "Cables so damaged they cannot be safely used for next operation."
    },
    {
        itemNumber: "23",
        interval: "After",
        location: "Access Panels / Security",
        system: "Body/Frame",
        applicableGenerators: ["All"],
        keywords: [
            "close panels", "secure panels", "access panels after", "panel latches after",
            "secure generator after", "panel security", "close covers", "secure doors"
        ],
        commonFaults: [
            "Access panels left open", "Panel latches not engaged", "Doors not secured",
            "Panel damaged during operation"
        ],
        procedure: "OPERATOR\na. Close and latch all access panels and service doors.\nb. Check all panel latches for positive engagement.\nc. Inspect panels for damage acquired during operation.\nd. Ensure all covers and guards are in place.",
        notFullyMissionCapable: "N/A"
    },

    // -------------------------------------------------------
    // WEEKLY
    // -------------------------------------------------------
    {
        itemNumber: "24",
        interval: "Weekly",
        location: "Battery Service",
        system: "Electrical",
        applicableGenerators: ["All"],
        keywords: [
            "battery weekly", "battery electrolyte weekly", "battery terminals weekly",
            "battery service", "battery corrosion weekly", "battery water weekly",
            "battery maintenance", "distilled water battery", "battery check weekly"
        ],
        commonFaults: [
            "Battery electrolyte low", "Battery terminals corroded",
            "Battery not holding charge", "Battery case cracked", "Battery acid on tray"
        ],
        procedure: "OPERATOR WARNING Wear eye protection. Do not smoke near batteries.\n\na. Check battery electrolyte level — add distilled water to split ring if low.\nb. Clean battery terminals of corrosion using wire brush and terminal cleaner.\nc. Apply anti-corrosion compound to terminals.\nd. Check battery hold-down for security.\ne. Inspect battery for cracks or leaks.",
        notFullyMissionCapable: "Battery leaking. Battery will not hold charge sufficient to start engine."
    },
    {
        itemNumber: "25",
        interval: "Weekly",
        location: "Fuel Filter / Strainer",
        system: "Fuel System",
        applicableGenerators: ["All"],
        keywords: [
            "fuel filter weekly", "fuel strainer weekly", "fuel filter inspection",
            "filter element weekly", "fuel filter service", "strainer clean weekly",
            "fuel filter restriction weekly"
        ],
        commonFaults: [
            "Fuel filter restricted", "Fuel strainer clogged", "Filter element needs replacement",
            "Sediment in fuel filter bowl", "Filter housing leaking"
        ],
        procedure: "OPERATOR\na. Inspect fuel filter/strainer for restriction or clogging.\nb. Drain water/sediment from filter bowl.\nc. Inspect filter housing for cracks or leaks.\nd. Replace filter element per TM schedule or if restriction is evident.\ne. Check filter bowl gasket/O-ring for condition.",
        notFullyMissionCapable: "Fuel filter so restricted engine cannot maintain speed under load."
    },
    {
        itemNumber: "26",
        interval: "Weekly",
        location: "Air Cleaner Inspection",
        system: "Engine",
        applicableGenerators: ["All"],
        keywords: [
            "air cleaner weekly", "air filter weekly", "air filter inspection",
            "restriction indicator weekly", "air cleaner service weekly", "filter element weekly",
            "air cleaner housing weekly", "dust unloader weekly"
        ],
        commonFaults: [
            "Air restriction indicator tripped", "Filter element clogged",
            "Housing damaged allowing unfiltered air", "Dust unloader not functioning"
        ],
        procedure: "OPERATOR\na. Check air restriction indicator — service if showing red.\nb. Tap primary filter element to remove loose dust (do not wash unless instructed by TM).\nc. Inspect secondary/safety element — replace if damaged or excessively dirty.\nd. Check housing seals for proper seating.\ne. Clean pre-cleaner/cyclonic separator if equipped.",
        notFullyMissionCapable: "Air restriction prevents engine from running properly."
    },
    {
        itemNumber: "27",
        interval: "Weekly",
        location: "Cooling System — Hoses and Connections",
        system: "Cooling System",
        applicableGenerators: ["10KW", "15KW", "30KW", "60KW"],
        keywords: [
            "cooling hoses weekly", "radiator hoses weekly", "coolant hoses weekly",
            "hose clamps weekly", "radiator weekly", "cooling system weekly",
            "hose inspection weekly", "clamp loose weekly"
        ],
        commonFaults: [
            "Cooling hose cracked or soft", "Hose clamp loose", "Hose leaking at connection",
            "Radiator fins bent blocking airflow", "Coolant hose deteriorating"
        ],
        procedure: "OPERATOR NOTE Check when engine is cool.\n\na. Inspect all coolant hoses for cracks, soft spots, or swelling.\nb. Check all hose clamps for tightness.\nc. Inspect radiator for coolant leaks and bent/blocked fins.\nd. Check radiator cap for proper sealing and pressure rating.\ne. Report deteriorating hoses to unit maintenance.",
        notFullyMissionCapable: "Hose cracked or leaking. Radiator severely damaged."
    },
    {
        itemNumber: "28",
        interval: "Weekly",
        location: "Drive Belts — Weekly Check",
        system: "Engine",
        applicableGenerators: ["10KW", "15KW", "30KW", "60KW"],
        keywords: [
            "belts weekly", "drive belt weekly", "belt condition weekly", "belt tension weekly",
            "belt inspection weekly", "fan belt weekly", "alternator belt weekly"
        ],
        commonFaults: [
            "Belt cracks developing", "Belt glazed from slipping", "Belt tension incorrect",
            "Belt showing fraying", "Belt misaligned on pulleys"
        ],
        procedure: "OPERATOR\na. Inspect all drive belts for cracks, fraying, or glazing.\nb. Check belt tension — adjust if outside specification.\nc. Check belt alignment on all pulleys.\nd. Replace any belt with 3+ cracks per inch, frays, or significant glazing.",
        notFullyMissionCapable: "Belt broken or severely damaged. Belt so loose it cannot drive cooling fan or alternator."
    },
    {
        itemNumber: "29",
        interval: "Weekly",
        location: "General Cleaning",
        system: "Body/Frame",
        applicableGenerators: ["All"],
        keywords: [
            "clean generator weekly", "cleaning weekly", "dirt removal", "debris removal",
            "bird nest", "animal nest", "clean air vents", "clean cooling fins",
            "generator cleaning", "remove debris weekly", "clean control panel"
        ],
        commonFaults: [
            "Debris blocking cooling vents", "Bird/animal nesting in generator",
            "Dirt buildup on cooling fins reducing airflow", "Dirty control panel obscuring readings",
            "Dust accumulation in electrical components"
        ],
        procedure: "OPERATOR\na. Remove all debris, leaves, and foreign objects from generator interior and exterior.\nb. Check for and remove any bird/animal nests from engine compartment and enclosure.\nc. Clean cooling fins and vents of dirt and debris that would restrict airflow.\nd. Clean control panel and gauges — wipe with clean cloth.\ne. Clean battery area of corrosion residue.\nf. Use compressed air (low pressure) to blow out electrical compartment.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "30",
        interval: "Weekly",
        location: "Ground Cable and Rod",
        system: "Electrical",
        applicableGenerators: ["All"],
        keywords: [
            "ground cable weekly", "ground rod weekly", "grounding weekly",
            "ground connection weekly", "ground strap weekly", "earth ground weekly",
            "ground lug weekly", "ground cable condition"
        ],
        commonFaults: [
            "Ground cable insulation damaged", "Ground lug corroded", "Ground rod bent",
            "Ground cable end broken", "Ground cable missing", "Ground connection loose"
        ],
        procedure: "OPERATOR\na. Inspect ground cable for damaged insulation, broken lugs, or corroded connections.\nb. Inspect ground rod for bends or damage.\nc. Clean ground lug connection on generator frame if corroded.\nd. Replace damaged ground cables — ensure replacement is of correct gauge.\ne. Store ground cable and rod properly when not in use.",
        notFullyMissionCapable: "Ground cable missing or so damaged it cannot provide adequate grounding."
    },

    // -------------------------------------------------------
    // MONTHLY
    // -------------------------------------------------------
    {
        itemNumber: "31",
        interval: "Monthly",
        location: "Engine Oil and Filter Change",
        system: "Engine",
        applicableGenerators: ["All"],
        keywords: [
            "oil change monthly", "oil filter monthly", "change oil", "oil change",
            "oil filter change", "drain oil", "replace oil", "oil change schedule",
            "oil service", "OE oil", "oil type", "correct oil"
        ],
        commonFaults: [
            "Oil change overdue", "Oil filter not changed with oil", "Wrong oil type used",
            "Oil drain plug stripped", "Oil filter leaking after change", "Oil not fully drained"
        ],
        procedure: "OPERATOR/MAINTAINER NOTE Oil change interval varies by operating hours — refer to TM Maintenance Allocation Chart (MAC).\n\na. Warm engine to operating temperature then shut down.\nb. Drain engine oil completely — use correct container.\nc. Replace oil drain plug — check for washer/gasket condition.\nd. Replace oil filter — apply thin coat of oil to gasket before installation.\ne. Fill with correct type and quantity of oil per LO.\nf. Start engine, check for leaks, shut down, and verify level.\ng. Document oil change on DA Form 2404.",
        notFullyMissionCapable: "Engine oil change grossly overdue per TM schedule. N/A for routine monthly check."
    },
    {
        itemNumber: "32",
        interval: "Monthly",
        location: "Fuel Filter Element Replacement",
        system: "Fuel System",
        applicableGenerators: ["All"],
        keywords: [
            "fuel filter monthly", "fuel filter replacement", "change fuel filter",
            "fuel filter element", "replace fuel filter", "fuel filter service monthly"
        ],
        commonFaults: [
            "Fuel filter element overdue for replacement", "Filter causing fuel restriction",
            "Filter housing cracked", "Wrong filter installed"
        ],
        procedure: "OPERATOR/MAINTAINER NOTE Replace fuel filter element per TM schedule (typically every 250 hours or monthly, whichever comes first).\n\na. Place container under fuel filter to catch fuel.\nb. Remove filter element — dispose of properly.\nc. Clean filter housing.\nd. Install new filter element — do not over-tighten.\ne. Prime fuel system and check for leaks.\nf. Document filter change on DA Form 2404.",
        notFullyMissionCapable: "N/A for routine monthly replacement."
    },
    {
        itemNumber: "33",
        interval: "Monthly",
        location: "Control Panel — Full Functional Test",
        system: "Controls/Gauges",
        applicableGenerators: ["All"],
        keywords: [
            "control panel monthly", "functional test monthly", "panel test",
            "gauge accuracy monthly", "switch function monthly", "breaker test monthly",
            "panel full test", "instrument test"
        ],
        commonFaults: [
            "Gauge reading inaccurate", "Switch not functioning correctly",
            "Circuit breaker not tripping at correct amperage", "Warning lights not functioning",
            "Panel lighting inoperative"
        ],
        procedure: "OPERATOR/MAINTAINER\na. Test all switches through their complete range of positions.\nb. Verify gauge accuracy where testable (voltmeter, frequency meter with known loads).\nc. Test all warning lights and indicators — verify they illuminate per TM.\nd. Test circuit breaker operation per TM procedure.\ne. Inspect panel face for cracks, corrosion, or damaged labels.\nf. Check panel interior for water intrusion, corrosion, or loose wiring.",
        notFullyMissionCapable: "Control panel so damaged that safe operation cannot be monitored. Circuit breakers inoperative."
    },
    {
        itemNumber: "34",
        interval: "Monthly",
        location: "Battery Load Test",
        system: "Electrical",
        applicableGenerators: ["All"],
        keywords: [
            "battery load test monthly", "battery test monthly", "battery capacity monthly",
            "battery voltage under load", "battery health monthly", "battery failure monthly",
            "battery replacement", "weak battery monthly"
        ],
        commonFaults: [
            "Battery fails load test", "Battery voltage drops severely under starting load",
            "Battery capacity degraded", "Battery will not hold charge"
        ],
        procedure: "OPERATOR/MAINTAINER\na. Measure battery open-circuit voltage — should be ≥12.6V (12V system) or ≥25.2V (24V system).\nb. Perform load test using battery load tester per TM procedure.\nc. Battery should maintain ≥9.6V (12V) or ≥19.2V (24V) under specified load for 15 seconds.\nd. Replace battery if it fails load test.\ne. Document battery condition on DA Form 2404.",
        notFullyMissionCapable: "Battery fails load test and cannot reliably start engine."
    },
    {
        itemNumber: "35",
        interval: "Monthly",
        location: "Exhaust System — Full Inspection",
        system: "Exhaust",
        applicableGenerators: ["All"],
        keywords: [
            "exhaust monthly", "muffler monthly", "exhaust pipe monthly", "exhaust inspection monthly",
            "exhaust rust monthly", "exhaust mounts monthly", "exhaust full check"
        ],
        commonFaults: [
            "Exhaust pipe rusted through", "Muffler deteriorated", "Exhaust mount broken",
            "Exhaust clamp loose", "Carbon buildup restricting exhaust"
        ],
        procedure: "OPERATOR/MAINTAINER\na. Inspect complete exhaust system for rust, cracks, and holes.\nb. Check all exhaust mounting brackets and clamps for security.\nc. Inspect muffler for deterioration.\nd. Check for excessive carbon buildup at exhaust tip.\ne. Repair or replace damaged exhaust components.",
        notFullyMissionCapable: "Exhaust leak into enclosed generator space. Exhaust mounts broken allowing pipe contact with fuel system."
    },
    {
        itemNumber: "36",
        interval: "Monthly",
        location: "Cooling System — Full Inspection (Liquid-Cooled)",
        system: "Cooling System",
        applicableGenerators: ["10KW", "15KW", "30KW", "60KW"],
        keywords: [
            "cooling system monthly", "radiator monthly", "coolant monthly", "antifreeze monthly",
            "coolant flush", "coolant condition", "radiator inspection monthly",
            "thermostat monthly", "water pump monthly"
        ],
        commonFaults: [
            "Coolant condition degraded (acidic)", "Coolant concentration incorrect",
            "Radiator fins severely blocked", "Thermostat not functioning",
            "Water pump leaking", "Coolant flush overdue"
        ],
        procedure: "OPERATOR/MAINTAINER\na. Check coolant condition with test strips or refractometer — replace if pH is low or concentration is off.\nb. Inspect radiator core for blocked fins — clean with low-pressure water.\nc. Check thermostat operation — engine should reach operating temp and stabilize.\nd. Inspect water pump for leaks at seal.\ne. Flush and replace coolant per TM schedule (typically annually or as specified).\nf. Document coolant condition and service.",
        notFullyMissionCapable: "Coolant severely degraded. Thermostat stuck open (won't reach operating temp) or stuck closed (overheats)."
    },
    {
        itemNumber: "37",
        interval: "Monthly",
        location: "Wiring / Electrical Connections",
        system: "Electrical",
        applicableGenerators: ["All"],
        keywords: [
            "wiring monthly", "electrical connections monthly", "wire inspection monthly",
            "wiring harness monthly", "electrical monthly", "wire chafing monthly",
            "connector monthly", "wire insulation monthly", "exposed wire monthly"
        ],
        commonFaults: [
            "Wire insulation chafed or cracked", "Connectors corroded", "Wiring not secured",
            "Exposed wire creating short hazard", "Connector housing cracked",
            "Water intrusion at connectors"
        ],
        procedure: "OPERATOR/MAINTAINER\na. Inspect all accessible wiring harnesses for chafing, cracks, or bare wires.\nb. Check all electrical connectors for corrosion, bent pins, or cracked housing.\nc. Verify wiring is properly secured away from moving parts and heat sources.\nd. Inspect junction boxes and electrical compartments for water intrusion.\ne. Apply dielectric grease to connectors prone to corrosion.",
        notFullyMissionCapable: "Exposed wiring creating shock or fire hazard. Critical wiring damaged causing loss of control panel function."
    },
    {
        itemNumber: "38",
        interval: "Monthly",
        location: "Frame / Skid — Corrosion Check",
        system: "Body/Frame",
        applicableGenerators: ["All"],
        keywords: [
            "frame corrosion monthly", "skid rust monthly", "frame rust monthly",
            "corrosion monthly", "rust check monthly", "structural corrosion monthly",
            "frame inspection monthly", "skid inspection monthly"
        ],
        commonFaults: [
            "Frame rust developing", "Skid corroded through", "Lifting point corroded",
            "Tie-down rings rusted", "Frame weld cracking from rust"
        ],
        procedure: "OPERATOR/MAINTAINER\na. Inspect generator frame and skid for rust, corrosion, and cracks.\nb. Pay particular attention to weld joints and high-stress areas.\nc. Inspect forklift pockets and lifting points for corrosion or cracking.\nd. Treat rust spots with rust converter and touch up paint.\ne. Report significant structural corrosion to unit maintenance.",
        notFullyMissionCapable: "Frame cracked or corroded through at structural member. Lifting points damaged making generator unsafe to lift."
    },
    {
        itemNumber: "39",
        interval: "Monthly",
        location: "Lubrication — Per Lubrication Order",
        system: "Engine",
        applicableGenerators: ["All"],
        keywords: [
            "lubrication monthly", "grease monthly", "lube order", "lubrication order",
            "grease fittings monthly", "zerk fittings monthly", "lube points monthly",
            "grease gun monthly", "GAA monthly"
        ],
        commonFaults: [
            "Lubrication points missed", "Grease fitting blocked or missing",
            "Under-lubricated pivots causing wear", "Wrong lubricant used"
        ],
        procedure: "OPERATOR/MAINTAINER\na. Lubricate all fittings and points per the generator Lubrication Order.\nb. Use correct lubricant type (GAA, OE, etc.) per LO.\nc. Clean fittings before lubricating and wipe off excess.\nd. Replace missing grease fittings.\ne. Document lubrication on DA Form 2404.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "40",
        interval: "Monthly",
        location: "Generator Output / Load Test",
        system: "Controls/Gauges",
        applicableGenerators: ["All"],
        keywords: [
            "load test monthly", "output test monthly", "generator load test",
            "full load test", "power output test", "load bank test",
            "output voltage under load", "frequency under load", "generator performance"
        ],
        commonFaults: [
            "Generator cannot maintain rated voltage under full load",
            "Frequency drops excessively under load", "Generator shuts down under load",
            "Output voltage unstable at full load", "Cannot achieve rated kW output"
        ],
        procedure: "OPERATOR/MAINTAINER\na. Connect appropriate test load (load bank or actual load) to generator.\nb. Apply load in increments to rated capacity.\nc. Verify voltage remains within ±5% at rated load.\nd. Verify frequency remains within ±1 Hz at rated load.\ne. Monitor for overheating, excessive vibration, or fuel system issues under load.\nf. Record results and any abnormalities on DA Form 2404.",
        notFullyMissionCapable: "Generator cannot maintain voltage or frequency within specification at rated load."
    }
];

// ========================================
// GENERATOR MAPPING AND INFO
// ========================================

const generatorMapping = {
    '5kw':  ['5KW'],
    '10kw': ['10KW'],
    '15kw': ['15KW'],
    '30kw': ['30KW'],
    '60kw': ['60KW']
};

const generatorInfo = {
    '5kw': {
        name: 'MEP-802A — 5KW Generator (TM 9-6115-749-10)',
        description: '5 Kilowatt Tactical Quiet Generator for field power support',
        features: ['5 KW output', 'Air-cooled engine', 'Single/3-phase output', '120/240V', 'Skid-mounted']
    },
    '10kw': {
        name: 'MEP-803A — 10KW Generator (TM 9-6115-750-10)',
        description: '10 Kilowatt Tactical Quiet Generator for field power support',
        features: ['10 KW output', 'Liquid-cooled engine', '120/208V 3-phase', 'Skid-mounted']
    },
    '15kw': {
        name: 'MEP-804A — 15KW Generator (TM 9-6115-751-10)',
        description: '15 Kilowatt Tactical Quiet Generator for field power support',
        features: ['15 KW output', 'Liquid-cooled engine', '120/208V 3-phase', 'Skid-mounted']
    },
    '30kw': {
        name: 'MEP-805A — 30KW Generator (TM 9-6115-752-10)',
        description: '30 Kilowatt Tactical Quiet Generator for field power support',
        features: ['30 KW output', 'Liquid-cooled engine', '120/208V 3-phase', 'Skid/trailer mounted']
    },
    '60kw': {
        name: 'MEP-806A — 60KW Generator (TM 9-6115-753-10)',
        description: '60 Kilowatt Tactical Quiet Generator for field power support',
        features: ['60 KW output', 'Liquid-cooled engine', '120/208V 3-phase', 'Trailer-mounted']
    }
};

// ========================================
// APPLICATION LOGIC
// ========================================

class PMCSApp {
    constructor() {
        this.searchInput = null;
        this.intervalFilter = null;
        this.systemFilter = null;
        this.vehicleFilter = null;
        this.resultsContainer = null;
        this.noResults = null;
        this.copyModal = null;
        this.modalElements = {};
        this.currentModalItem = null;

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    async init() {
        this.tmReference = 'TM 9-6115-749~753-10';
        this.inspectionItems = [];
        this.inspectionIndex = 0;
        this.inspectionResults = [];
        this.inspectionMode = false;
        this.pmcsData = [];
        this.initializeElements();
        this.setupEventListeners();
        this.initDarkMode();
        this.initInspection();
        this.pmcsData = await this.loadPmcsData();
        this.displayItems(this.getPmcsData());
    }

    async loadPmcsData() {
        try {
            const response = await fetch('pmcs-tqg-data.json', { cache: 'no-store' });
            if (!response.ok) {
                throw new Error(`Failed to load pmcs-tqg-data.json: ${response.status}`);
            }

            const data = await response.json();
            return Array.isArray(data) ? data : pmcsData;
        } catch (error) {
            console.warn('Falling back to embedded generator PMCS data:', error);
            return pmcsData;
        }
    }

    getPmcsData() {
        return this.pmcsData && this.pmcsData.length > 0 ? this.pmcsData : pmcsData;
    }

    initializeElements() {
        this.searchInput = document.getElementById('searchInput');
        this.intervalFilter = document.getElementById('intervalFilter');
        this.systemFilter = document.getElementById('systemFilter');
        this.vehicleFilter = document.getElementById('vehicleFilter');
        this.vehicleInfo = document.getElementById('vehicleInfo');
        this.intervalInfoBtn = document.getElementById('intervalInfoBtn');
        this.vehicleInfoModal = document.getElementById('vehicleInfoModal');
        this.resultsContainer = document.getElementById('resultsContainer');
        this.noResults = document.getElementById('noResults');
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
    }

    setupEventListeners() {
        this.searchInput?.addEventListener('input', this.debounce(() => this.filterItems(), 300));
        this.intervalFilter?.addEventListener('change', () => this.filterItems());
        this.systemFilter?.addEventListener('change', () => this.filterItems());
        this.vehicleFilter?.addEventListener('change', () => this.handleVehicleFilterChange());
        this.intervalInfoBtn?.addEventListener('click', () => this.showIntervalInfoModal());
        this.modalElements.closeX?.addEventListener('click', () => this.hideCopyModal());
        this.modalElements.closeBtn?.addEventListener('click', () => this.hideCopyModal());
        this.modalElements.copyBtn?.addEventListener('click', () => this.copyToClipboard());
        this.modalElements.intervalCloseX?.addEventListener('click', () => this.hideIntervalInfoModal());
        this.modalElements.intervalCloseBtn?.addEventListener('click', () => this.hideIntervalInfoModal());
        this.modalElements.vehicleCloseX?.addEventListener('click', () => this.hideVehicleInfoModal());
        this.modalElements.vehicleCloseBtn?.addEventListener('click', () => this.hideVehicleInfoModal());
        this.copyModal?.addEventListener('click', (e) => { if (e.target === this.copyModal) this.hideCopyModal(); });
        this.intervalInfoModal?.addEventListener('click', (e) => { if (e.target === this.intervalInfoModal) this.hideIntervalInfoModal(); });
        this.vehicleInfoModal?.addEventListener('click', (e) => { if (e.target === this.vehicleInfoModal) this.hideVehicleInfoModal(); });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.copyModal?.style.display === 'flex') this.hideCopyModal();
                else if (this.intervalInfoModal?.style.display === 'flex') this.hideIntervalInfoModal();
                else if (this.vehicleInfoModal?.style.display === 'flex') this.hideVehicleInfoModal();
            }
            if (e.key === '/' && !this.isInputFocused()) { e.preventDefault(); this.searchInput?.focus(); }
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
        if (!nfmc || nfmc.trim() === 'N/A') return 'na';
        const lower = nfmc.toLowerCase();
        if (lower.includes('if mission') || lower.includes('mission-dependent') ||
            lower.includes('if required') || lower.includes('if equipped') ||
            lower.includes('n/a otherwise') || lower.includes('when mission')) return 'conditional';
        return 'deadline';
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
        const sg = this.vehicleFilter?.value || 'all';
        const ss = this.systemFilter?.value || 'all';
        this.inspectionItems = this.getPmcsData().filter(item => {
            const matchesInterval = intervals.includes(item.interval.toLowerCase());
            const matchesSystem = ss === 'all' || (item.system && item.system.toLowerCase() === ss);
            const matchesGen = this.itemMatchesGenerator(item, sg);
            return matchesInterval && matchesSystem && matchesGen;
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
        const nfmcBadge = this.getNFMCBadge(item.notFullyMissionCapable);
        const isNA = item.notFullyMissionCapable.trim() === 'N/A';
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
                <div class="procedure-content ${missionCapableClass}"><p>${this.escapeHtml(item.notFullyMissionCapable)}</p></div>
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
            navigator.clipboard.writeText(text).then(() => this.showCopySuccess()).catch(() => this.fallbackCopy(text));
        } else {
            this.fallbackCopy(text);
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

    filterItems() {
        const searchTerm = this.searchInput?.value || '';
        const selectedInterval = this.intervalFilter?.value || 'all';
        const selectedSystem = this.systemFilter?.value || 'all';
        const selectedGenerator = this.vehicleFilter?.value || 'all';

        const filteredData = this.getPmcsData().filter(item => {
            const matchesSearch = !searchTerm || this.itemMatchesSearch(item, searchTerm);
            const matchesInterval = selectedInterval === 'all' || item.interval.toLowerCase() === selectedInterval;
            const matchesSystem = selectedSystem === 'all' || (item.system && item.system.toLowerCase() === selectedSystem);
            const matchesGenerator = this.itemMatchesGenerator(item, selectedGenerator);
            return matchesSearch && matchesInterval && matchesSystem && matchesGenerator;
        });

        this.updateVehicleInfo(selectedGenerator, filteredData.length);
        this.displayItems(filteredData);
    }

    itemMatchesGenerator(item, selectedGenerator) {
        if (selectedGenerator === 'all') return true;
        const applicable = item.applicableGenerators || ['All'];
        if (applicable.includes('All')) return true;
        const generatorModels = generatorMapping[selectedGenerator] || [];
        return generatorModels.some(m => applicable.includes(m));
    }

    itemMatchesSearch(item, searchTerm) {
        const fields = [item.itemNumber, item.location, item.procedure, item.notFullyMissionCapable, item.system || ''];
        if (item.keywords) fields.push(...item.keywords);
        if (item.commonFaults) fields.push(...item.commonFaults);
        const sv = this.createSearchVariants(searchTerm);
        return fields.some(f => { const fv = this.createSearchVariants(f); return sv.some(s => fv.some(v => v.includes(s))); });
    }

    createSearchVariants(text) {
        if (!text) return [''];
        const v = new Set();
        const o = text.toLowerCase().trim();
        v.add(o); v.add(this.normalizeSearchText(o));
        const e = this.expandContractions(o);
        v.add(e); v.add(this.normalizeSearchText(e));
        v.add(o.replace(/[''`]/g, ' ').replace(/\s+/g, ' ').trim());
        return Array.from(v).filter(x => x.length > 0);
    }

    normalizeSearchText(text) {
        if (!text) return '';
        return text.toLowerCase().replace(/[''`]/g, '').replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
    }

    expandContractions(text) {
        if (!text) return '';
        const c = { "won't": "will not", "can't": "cannot", "don't": "do not", "doesn't": "does not", "isn't": "is not", "it's": "it is" };
        let r = text.toLowerCase();
        for (const [k, v] of Object.entries(c)) r = r.replace(new RegExp(`\\b${k.replace(/'/g, "[''`]")}\\b`, 'gi'), v);
        return r;
    }

    handleVehicleFilterChange() {
        const sg = this.vehicleFilter?.value || 'all';
        const count = this.getPmcsData().filter(item => this.itemMatchesGenerator(item, sg)).length;
        this.updateVehicleInfo(sg, count);
        this.filterItems();
    }

    updateVehicleInfo(selectedGenerator, itemCount) {
        if (!this.vehicleInfo) return;
        if (selectedGenerator === 'all') { this.vehicleInfo.style.display = 'none'; return; }
        const info = generatorInfo[selectedGenerator];
        if (!info) return;
        this.vehicleInfo.style.display = 'block';
        const titleEl = document.getElementById('vehicleTitle');
        const descEl = document.getElementById('vehicleDescription');
        const itemsEl = document.getElementById('applicableItems');
        if (titleEl) titleEl.textContent = info.name;
        if (descEl) descEl.textContent = info.description;
        if (itemsEl) itemsEl.textContent = `${itemCount} Items`;
    }

    showVehicleInfoModal(generatorType) {
        if (!this.vehicleInfoModal || !generatorType || generatorType === 'all') return;
        const info = generatorInfo[generatorType];
        if (!info) return;
        const detailsEl = document.getElementById('vehicleInfoDetails');
        if (detailsEl) {
            detailsEl.innerHTML = `<h4>${info.name}</h4><p>${info.description}</p><h4>Key Features:</h4><ul>${info.features.map(f => `<li>${f}</li>`).join('')}</ul>`;
        }
        this.vehicleInfoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    hideVehicleInfoModal() {
        if (!this.vehicleInfoModal) return;
        this.vehicleInfoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    displayItems(items) {
        if (!this.resultsContainer || !this.noResults) return;
        if (items.length === 0) {
            this.resultsContainer.style.display = 'none';
            this.noResults.style.display = 'block';
            return;
        }
        this.resultsContainer.style.display = 'block';
        this.noResults.style.display = 'none';
        this.resultsContainer.innerHTML = items.map(item => this.createItemCard(item)).join('');
        this.attachCopyButtonListeners();
    }

    createItemCard(item) {
        const intervalClass = `interval-${item.interval.toLowerCase()}`;
        const isNA = item.notFullyMissionCapable.trim() === 'N/A';
        const missionCapableClass = isNA ? 'mission-capable na' : 'mission-capable';
        const faultsSection = item.commonFaults && item.commonFaults.length > 0 ? `
            <div class="procedure-section">
                <div class="procedure-title">🔧 Common Faults</div>
                <div class="procedure-content common-faults">
                    ${item.commonFaults.map(f => `<span class="fault-tag">${this.escapeHtml(f)}</span>`).join('')}
                </div>
            </div>` : '';

        const genSection = item.applicableGenerators && !item.applicableGenerators.includes('All') ? `
            <div class="vehicle-badge" style="display:inline-block;margin-bottom:10px;">
                ${item.applicableGenerators.join(' / ')} Only
            </div>` : '';

        return `
            <div class="item-card" data-item="${item.itemNumber}">
                <div class="item-header">
                    <div class="item-info">
                        <div class="item-number">${this.escapeHtml(item.itemNumber)}</div>
                        <span class="tm-ref-badge">${this.escapeHtml(this.tmReference || 'TM 9-6115-749~753-10')}</span>
                        ${item.system ? `<div class="system-badge">${this.escapeHtml(item.system)}</div>` : ''}
                        ${this.getNFMCBadge(item.notFullyMissionCapable)}
                    </div>
                    <div class="interval-badge ${intervalClass}">${this.escapeHtml(item.interval)}</div>
                </div>
                <h3 class="location-title">${this.escapeHtml(item.location)}</h3>
                ${genSection}
                ${faultsSection}
                <div class="procedure-section">
                    <div class="procedure-title">📋 Operator Procedure</div>
                    <div class="procedure-content ${this.getProcedureClass(item.procedure)}">
                        ${this.formatProcedureText(item.procedure)}
                    </div>
                </div>
                <div class="procedure-section">
                    <div class="procedure-title">⚠️ Not Fully Mission Capable If</div>
                    <div class="procedure-content ${missionCapableClass}">
                        <p>${this.escapeHtml(item.notFullyMissionCapable)}</p>
                    </div>
                </div>
                <button class="copy-btn" data-item="${item.itemNumber}">Copy for 5988 Form</button>
            </div>`;
    }

    getProcedureClass(p) {
        const l = p.toLowerCase();
        if (l.includes('warning')) return 'warning';
        if (l.includes('caution')) return 'caution';
        if (l.includes('note')) return 'note';
        return '';
    }

    formatProcedureText(text) {
        return this.escapeHtml(text)
            .replace(/WARNING/gi, '<strong style="color:#f57c00;">WARNING</strong>')
            .replace(/CAUTION/gi, '<strong style="color:#ff9800;">CAUTION</strong>')
            .replace(/NOTE/gi, '<strong style="color:#2196f3;">NOTE</strong>')
            .replace(/OPERATOR/gi, '<strong>OPERATOR</strong>')
            .split('\n').map(l => l.trim() ? `<p>${l.trim()}</p>` : '').filter(l => l).join('');
    }

    attachCopyButtonListeners() {
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => { e.preventDefault(); this.showCopyModal(btn.getAttribute('data-item')); });
        });
    }

    showCopyModal(itemNumber) {
        const item = this.getPmcsData().find(i => i.itemNumber === itemNumber);
        if (!item || !this.copyModal) return;
        this.currentModalItem = item;
        if (this.modalElements.itemNumber) this.modalElements.itemNumber.textContent = item.itemNumber;
        if (this.modalElements.location) this.modalElements.location.textContent = item.location;
        if (this.modalElements.interval) this.modalElements.interval.textContent = item.interval;
        if (this.modalElements.status) this.modalElements.status.textContent = item.notFullyMissionCapable;
        if (this.modalElements.vehicle) {
            const sg = this.vehicleFilter?.value || 'all';
            this.modalElements.vehicle.textContent = sg !== 'all' && generatorInfo[sg] ? generatorInfo[sg].name : 'All Generator Sets';
        }
        this.copyModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => this.modalElements.closeBtn?.focus(), 100);
    }

    hideCopyModal() {
        if (!this.copyModal) return;
        this.copyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    showIntervalInfoModal() {
        if (!this.intervalInfoModal) return;
        this.intervalInfoModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    hideIntervalInfoModal() {
        if (!this.intervalInfoModal) return;
        this.intervalInfoModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    copyToClipboard() {
        if (!this.currentModalItem) return;
        const item = this.currentModalItem;
        const sg = this.vehicleFilter?.value || 'all';
        const genName = sg !== 'all' && generatorInfo[sg] ? generatorInfo[sg].name : 'All Generator Sets';
        const text = `Army Generator PMCS\nItem: ${item.itemNumber}\nInterval: ${item.interval}\nLocation: ${item.location}\nGenerator: ${genName}\nNot Mission Capable If: ${item.notFullyMissionCapable}`;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => this.showCopySuccess()).catch(() => this.fallbackCopy(text));
        } else { this.fallbackCopy(text); }
    }

    fallbackCopy(text) {
        const ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.focus(); ta.select();
        try { document.execCommand('copy'); this.showCopySuccess(); } catch (e) {}
        document.body.removeChild(ta);
    }

    showCopySuccess() {
        const btn = this.modalElements.copyBtn;
        if (!btn) return;
        const orig = btn.textContent;
        btn.textContent = '✓ Copied!'; btn.style.background = '#4caf50';
        setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 2000);
    }

    isInputFocused() {
        const el = document.activeElement;
        return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT');
    }

    debounce(fn, delay) {
        let t;
        return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
    }

    escapeHtml(text) {
        if (!text) return '';
        return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }
}

const app = new PMCSApp();
