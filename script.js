// ========================================
// DATA SECTION
// ========================================

const pmcsData = [
    {
        itemNumber: "1",
        interval: "Before",
        location: "Left Front, Side Exterior",
        system: "Fluid Systems",
        keywords: [
            "oil leak", "fluid leak", "coolant leak", "fuel leak", "leaking fluid",
            "transfer case", "transfer case oil cooler", "oil dripping", "puddle under vehicle",
            "leaking undercarriage", "underbody leak", "engine oil leak", "leaking coolant",
            "leaking fuel", "fluid on ground", "dripping fluid", "wet spot", "class III leak",
            "external damage", "body damage", "front damage", "left side damage", "driver side damage",
            "impact damage", "visible leak", "dripping from front", "fluid stain"],
        commonFaults: [
            "Oil dripping under vehicle", "Coolant leak", "Fuel leak",
            "Transfer case oil leak", "Brake fluid leak", "Class III leak",
            "Visible fluid puddle", "Transfer case oil cooler failure",
            "Body damage", "Impact damage", "Dripping fluid from front left",
            "Cracked casing", "Loose fitting", "External damage", "Hose rupture"],
        procedure: "DRIVER CAUTION If leaks are detected in the area of the transfer case oil cooler, do not attempt to tighten retaining nuts; internal damage to the transfer case oil cooler may result. Notify unit maintenance.\n\nNOTE If leakage is detected, further investigation is needed to determine the location and cause of the leak.\n\na. Visually check underneath vehicle for any evidence of fluid leakage.\nb. Visually check front and left side of vehicle for obvious damage that would impair operation.",
        notFullyMissionCapable: "a. Any brake fluid leak, class III leak of oil, fuel, or coolant.\nb. Any damage that will prevent operation."
    },
    {
        itemNumber: "2",
        interval: "Before",
        location: "Left Side Tires",
        system: "Tires/Wheels",
        keywords: [
            "tire flat", "flat tire", "low tire", "low tire pressure", "deflated tire",
            "underinflated", "underinflated tire", "tire pressure", "low psi", "missing tire",
            "tire gone", "damaged tire", "tire damage", "cracked tire", "bald tire", "worn tire",
            "tread wear", "uneven tire wear", "tire sidewall", "sidewall bulge", "bulging tire",
            "tire blowout", "leaking tire", "puncture", "tire puncture", "nail in tire",
            "screw in tire", "dry rot", "tire cracking", "tire off rim", "driver side tire",
            "left front tire", "left rear tire", "left tire flat", "left tire low",
            "tire leak", "bad tire", "leaky tire", "air leak", "soft tire", "tire pressure low"],
        commonFaults: [
            "Flat tire", "Low tire pressure", "Tire missing", "Damaged tire",
            "Underinflated tire", "Bald tire", "Tire blowout", "Tire puncture",
            "Sidewall crack", "Bulging sidewall", "Tire leaking air",
            "Nail or screw in tire", "Dry rot", "Worn tread", "Tire off rim",
            "Cracked sidewall", "Uneven tire wear", "Soft tire", "Air loss",
            "Tire not holding pressure", "Left front tire flat", "Left rear tire low",
            "Driver side tire damaged", "Driver side tire flat", "Left side tire leaking"
        ],
        procedure: "DRIVER WARNING Operating a vehicle with a tire in an underinflated condition or with a questionable defect may lead to premature tire failure and may cause equipment damage and injury or death to personnel. Visually check tires for presence and under inflation.",
        notFullyMissionCapable: "Tire missing, deflated, or unserviceable.",
    },
    {
        itemNumber: "3",
        interval: "Before",
        location: "Rear Exterior",
        system: "Fluid Systems",
        keywords: [
            "rear leak", "fluid leak", "oil leak", "coolant leak", "brake fluid leak",
            "fuel leak", "rear damage", "rear body damage", "bumper crack", "bumper damage",
            "towing damage", "trailer hitch crack", "leaking under rear", "puddle under rear",
            "rear fluid stain", "rear undercarriage leak", "rear oil drip", "tow hitch issue",
            "damaged tow bar", "damaged tow mount", "tow connector damaged", "rear underbody damage"],
        commonFaults: [
            "Fluid leak at rear", "Rear body damage", "Bumper crack",
            "Towing equipment damage", "Cracked trailer hitch", "Brake fluid leak",
            "Coolant leak", "Oil leak", "Fuel leak", "Loose tow hitch",
            "Class III leak under rear", "Undercarriage leak (rear)", "Bent bumper support"],
        procedure: "DRIVER NOTE If leakage is detected, further investigation is needed to determine the location and cause of the leak.\n\na. Visually check underneath vehicle for evidence of fluid leakage.\nb. Visually check rear of vehicle for obvious damage that would impair operation.\nc. Inspect bumper supports for cracks before towing trailer.",
        notFullyMissionCapable: "a. Any brake fluid leak; class III leak of oil, fuel, or coolant.\nb. Any damage that would prevent operation.\nc. Any damage that would prevent operation.",
    },
    {
        itemNumber: "4",
        interval: "Before",
        location: "Exhaust Louvers",
        system: "Engine",
        keywords: [
            "exhaust blocked", "louvers clogged", "debris", "air flow restricted",
            "ventilation blocked", "cooling blocked", "air vent clogged", "engine overheating",
            "blocked vent", "blocked louver", "engine airflow issue", "hot engine",
            "restricted exhaust", "engine airflow blocked", "dirty louvers", "clogged exhaust fins"],
        commonFaults: [
            "Exhaust louvers blocked", "Debris in louvers", "Restricted air flow",
            "Overheating due to blocked vents", "Clogged ventilation system", "Poor engine cooling"],
        procedure: "DRIVER (M996 and M996A1 only) Check air exhaust louvers to ensure they are clear and free of debris that would restrict air flow. Clean any dirt or debris from louvers.",
        notFullyMissionCapable: "N/A",
    },
    {
        itemNumber: "5",
        interval: "Before",
        location: "Right Front, Side Exterior",
        system: "Fluid Systems",
        keywords: [
            "oil leak", "fluid leak", "coolant leak", "fuel leak", "brake fluid leak",
            "right side damage", "external damage", "front damage", "body damage",
            "fluid on ground", "dripping oil", "puddle under vehicle", "wet spot",
            "transfer case leak", "engine bay leak", "underbody leak", "right fender damage",
            "hood damage", "damaged side panel", "vehicle leaking", "visible fluid trail"],
        commonFaults: [
            "Oil dripping under vehicle", "Coolant leak", "Fuel leak", "Brake fluid leak",
            "Right side body damage", "Front body damage", "Underbody fluid leak",
            "Class III fluid leak", "Leaking under right front", "Damaged panel",
            "Cracked fender", "Visible fluid on ground"],
        procedure: "DRIVER NOTE If leakage is detected, further investigation is needed to determine the location and cause of the leak.\n\na. Visually check underneath vehicle for evidence of fluid leakage.\nb. Visually check front and right side of vehicle for obvious damage that would impair operation.",
        notFullyMissionCapable: "a. Any brake fluid leak; class III leak of oil, fuel, or coolant.\nb. Any damage that would prevent operation.",
    },
    {
        itemNumber: "6",
        interval: "Before",
        location: "Right Side Tires",
        system: "Tires/Wheels",
        keywords: [
            "tire flat", "flat tire", "low tire", "low tire pressure", "deflated tire",
            "underinflated", "underinflated tire", "tire pressure", "low psi", "missing tire",
            "tire gone", "damaged tire", "tire damage", "cracked tire", "bald tire", "worn tire",
            "tread wear", "uneven tire wear", "tire sidewall", "sidewall bulge", "bulging tire",
            "tire blowout", "leaking tire", "puncture", "tire puncture", "nail in tire",
            "screw in tire", "dry rot", "tire cracking", "tire off rim",
            "right tire", "right front tire", "right rear tire", "passenger side tire",
            "passenger front tire", "passenger rear tire", "right side flat", "right tire leaking",
            "tire leak", "bad tire", "leaky tire", "air leak", "soft tire", "tire pressure low"],
        commonFaults: [
            "Flat tire", "Low tire pressure", "Tire missing", "Damaged tire",
            "Underinflated tire", "Bald tire", "Tire blowout", "Tire puncture",
            "Sidewall crack", "Bulging sidewall", "Tire leaking air",
            "Nail or screw in tire", "Dry rot", "Worn tread", "Tire off rim",
            "Cracked sidewall", "Uneven tire wear", "Soft tire", "Air loss",
            "Tire not holding pressure", "Right front tire flat", "Right rear tire low",
            "Passenger side tire damaged", "Passenger tire leaking"],
        procedure: "DRIVER WARNING Operating a vehicle with a tire in an underinflated condition or with a questionable defect may lead to premature tire failure and may cause equipment damage and injury or death to personnel. Visually check tires for presence and under inflation.",
        notFullyMissionCapable: "Tire missing, deflated, or unserviceable.",
    },
    {
        itemNumber: "7",
        interval: "Before",
        location: "Front",
        system: "Fluid Systems",
        keywords: [
            "front damage", "front end damage", "grille damage", "oil leak", "fluid leak",
            "coolant leak", "fuel leak", "brake fluid leak", "leaking fluid front", "puddle under front",
            "leak at front", "leaking from front", "dripping fluid front", "wet spot under front",
            "front undercarriage leak", "radiator leak", "front fluid issue", "engine bay leak front",
            "bumper leak", "fluid behind grille", "grille cracked", "hood damage", "fluid in front area"],
        commonFaults: [
            "Front end damage", "Fluid leak at front", "Brake fluid leak",
            "Coolant leak", "Oil leak", "Fuel leak", "Body damage affecting operation",
            "Grille damage", "Front underbody leak", "Dripping fluid at front",
            "Cracked front bumper", "Class III fluid leak (front)", "Radiator fluid leak",
            "Leaking from engine bay", "Hood damage affecting function"],
        procedure: "DRIVER NOTE If leakage is detected, investigation is needed to determine the location and cause of the leak.\n\na. Visually check front of vehicle for obvious damage that would impair operation.\nb. Visually check underneath vehicle for evidence of fluid leakage.",
        notFullyMissionCapable: "a. Any damage that will prevent operation.\nb. Any brake fluid leak; class III leak of oil, fuel, or coolant.",
    },
    {
        itemNumber: "7.1",
        interval: "Before",
        location: "Power Steering Reservoir",
        system: "Steering",
        keywords: [
            "power steering fluid", "low power steering fluid", "steering fluid low", "steering fluid leak",
            "power steering leak", "leaking steering reservoir", "steering hard", "hard to steer",
            "stiff steering", "fluid level", "fluid low", "steering fluid", "steering not responsive",
            "whining noise when steering", "low fluid in reservoir", "power steering issue",
            "steering reservoir", "add power steering fluid", "check steering fluid",
            "power steering level low", "steering difficult", "no power assist", "ps fluid"],
        commonFaults: [
            "Power steering fluid low", "Steering fluid leak", "Hard steering",
            "Stiff steering wheel", "No power assist", "Whining noise while turning",
            "Leaking power steering reservoir", "Fluid below 'COLD' mark",
            "Contaminated steering fluid", "Reservoir level too low", "Steering system underfilled"],
        procedure: "DRIVER CAUTION • Do not permit dirt, dust, or grit to enter power steering reservoir. Damage to power steering system will result if power steering fluid becomes contaminated.\n\n• Do not overfill power steering reservoir. Damage to power steering system will result.\n\nCheck fluid in power steering reservoir. Fluid should be between \"HOT\" and \"COLD\" mark. Add fluid if level is below \"COLD\" mark.",
        notFullyMissionCapable: "N/A",
    },
    {
        itemNumber: "8",
        interval: "Before",
        location: "Cooling System",
        system: "Engine",
        keywords: [
            "coolant low", "low coolant", "coolant leak", "radiator", "radiator leak",
            "cooling system", "cooling system leak", "overheating", "engine hot", "hot engine",
            "engine overheating", "coolant level", "antifreeze", "engine temp high",
            "temperature gauge red", "steam from engine", "radiator cap", "boiling coolant",
            "coolant below full", "coolant below cold line", "leaking coolant", "engine coolant low",
            "coolant reservoir empty", "needs coolant", "engine temp warning"],
        commonFaults: [
            "Engine overheating", "Coolant low", "Radiator leak", "Cooling system leak",
            "Boiling coolant", "Coolant level below FULL line", "Coolant reservoir empty",
            "Coolant below FULL COLD mark", "Steam from engine bay", "Temperature gauge in red",
            "Coolant leak under vehicle", "Antifreeze low", "No coolant in tank"],
        procedure: "DRIVER WARNING If engine has been recently operated, do not remove radiator cap to check coolant level. Cooling system is under pressure, and escaping steam or coolant can cause burns.\n\nCAUTION Overheating, caused by lack of coolant, will cause engine damage.\n\nCheck coolant level in coolant tank. Level should be at or above the \"FULL COLD\" line. Add coolant if below the \"FULL\" line.",
        notFullyMissionCapable: "N/A",
    },
    {
        itemNumber: "9",
        interval: "Before",
        location: "Seat and Seatbelts",
        system: "Safety Systems",
        keywords: [
            "seatbelt broken", "seatbelt damaged", "seatbelt cut", "frayed seatbelt",
            "seat belt", "safety belt", "seatbelt won’t latch", "buckle broken", "buckle jammed",
            "seatbelt loose", "seatbelt won't retract", "seatbelt won’t click", "belt won't buckle",
            "seat won't adjust", "seat stuck", "seat won’t slide", "driver seat won’t move",
            "seat lever broken", "seat adjuster damaged", "seat adjustment issue", "safety strap",
            "troop strap broken", "troop safety strap missing", "inoperative seatbelt",
            "seat mechanism broken", "seat misaligned", "seat won’t lock"],
        commonFaults: [
            "Seatbelt damaged", "Seatbelt won’t latch", "Seatbelt won’t retract",
            "Frayed or cut seatbelt", "Buckle broken", "Seat won’t adjust", "Seat stuck",
            "Driver seat won’t move", "Seat adjustment lock broken", "Troop safety strap damaged",
            "Safety strap missing", "Seat misaligned", "Seat adjustment lever broken"],
        procedure: "DRIVER NOTE Vehicle operation with inoperative seatbelts may violate AR 385-55.\n\na. Check all seatbelts, including troop seat safety strap for security, damage, and operation of buckle and clasp ends.\nb. Check operation of seat adjusting mechanism (driver's seat only).",
        notFullyMissionCapable: "a. Seat adjustment lock broken or missing.",
    },
    {
        itemNumber: "10",
        interval: "Before",
        location: "Fire Extinguisher",
        system: "Safety Systems",
        keywords: [
            "fire extinguisher missing", "extinguisher broken", "extinguisher damaged",
            "fire extinguisher low pressure", "low extinguisher psi", "broken extinguisher",
            "extinguisher seal broken", "missing safety seal", "extinguisher pressure",
            "extinguisher needle low", "fire suppression", "fire safety", "safety equipment",
            "extinguisher not charged", "fire extinguisher issue", "no extinguisher",
            "extinguisher gauge red", "pressure gauge in red", "extinguisher empty",
            "fire safety device missing", "gauge not reading", "fire system check"],
        commonFaults: [
            "Fire extinguisher missing", "Extinguisher damaged", "Low pressure",
            "Broken seal", "Gauge in recharge zone", "Extinguisher not serviceable",
            "Missing safety seal", "Extinguisher not charged", "Extinguisher gauge in red",
            "Empty fire extinguisher"],
        procedure: "DRIVER\n\na. Check for missing or damaged fire extinguisher.\nb. Check gauge for proper pressure of about 150 psi (1034 kPa).\nc. Check for damaged or missing seal.",
        notFullyMissionCapable: "a. Fire extinguisher missing or damaged.\nb. Pressure gauge needle in recharge area.\nc. Seal broken or missing.",
    },
    {
        itemNumber: "11",
        interval: "Before",
        location: "Engine Oil",
        system: "Engine",
        keywords: [
            "oil level", "engine oil", "low oil", "oil low", "check oil", "dipstick",
            "oil dipstick", "engine oil level", "add oil", "oil not full", "oil below add",
            "oil needs adding", "oil dirty", "milky oil", "oil contaminated", "oil creamy",
            "oil foamy", "coolant in oil", "oil mixed with coolant", "engine oil low",
            "no oil on dipstick", "oil dipstick empty", "oil full mark", "oil add mark"
        ],
        commonFaults: [
            "Engine oil low", "Oil level below ADD mark", "Oil appears milky or foamy",
            "Oil contaminated with coolant", "Oil dipstick shows empty", "Oil not between ADD and FULL",
            "Engine oil needs to be added", "Milky oil indicating coolant leak into engine"
        ],
        procedure: "DRIVER CAUTION\n• Do not permit dirt, dust, or grit to enter engine oil dipstick tube. Internal engine damage will result if engine oil becomes contaminated.\n• Do not overfill engine crankcase. Damage to engine will result.\n\nNOTE Check oil with engine OFF and on level ground. Wipe dipstick clean before reinserting.\n\na. Remove engine oil dipstick, wipe clean, reinsert fully, and withdraw.\nb. Oil level should be between the \"ADD\" and \"FULL\" marks. If below \"ADD,\" add oil.\nc. Inspect oil on dipstick for milky or foamy appearance — indicates coolant contamination.\nd. Add OE/HDO 15W-40 (MIL-PRF-2104) as required to bring level to FULL mark.",
        notFullyMissionCapable: "Oil appears milky (coolant contamination in oil).",
    },
    {
        itemNumber: "12",
        interval: "Before",
        location: "Instrument Panel",
        system: "Electrical",
        keywords: [
            "engine won't start", "engine will not start", "no crank", "starter issue",
            "warning lights not working", "brake warning light", "wait to start light",
            "instrument panel", "dashboard", "gauges not working", "gauges inoperative",
            "oil pressure low", "no oil pressure", "voltmeter not working", "voltage gauge red",
            "voltage gauge yellow", "battery gauge", "fuel gauge stuck", "fuel gauge inoperative",
            "temperature gauge high", "coolant temp gauge", "gauge cluster", "no lights on dash",
            "instrument lights out", "no response from gauges", "electrical panel issue",
            "indicator lights not on", "dashboard not responding", "brake light stuck on",
            "air restriction gauge red", "engine temperature gauge high"],
        commonFaults: [
            "Engine won't start", "Starter does not engage", "Wait-to-start light not working",
            "Warning lights not working", "Brake warning light stays on", "Gauges inoperative",
            "Fuel gauge not working", "Oil pressure low", "Voltmeter in red/yellow zone",
            "Air restriction indicator in red", "Coolant temperature gauge above 230°F",
            "Dashboard lights out", "Gauge cluster failure", "No power to instrument panel"],
        procedure: "DRIVER WARNING If gauges, instruments, or instrument lights are inoperable or not within ranges described in these checks, immediately shut off engine and notify supervisor or unit maintenance personnel. Continued operation of vehicle may result in injury or damage to equipment.\n\nNOTE If engine is warm, wait-to-start light may not come on. During cranking or after starting, light may go on and off a few times.\n\na. Check wait-to-start light and brake warning light. Turn rotary switch to \"RUN\". Wait-to-start and brake warning light should come on.\nb. Start engine and check the following:\nc. Engine oil pressure gauge.\nd. Voltmeter.\ne. Air restriction gauge.\nf. Brake warning light should go off when hand brake is released.\ng. Check fuel gauge.\nh. Check coolant temperature gauge.",
        notFullyMissionCapable: "a. Wait-to-start light does not come on when engine is cold or wait light stays on continually. Brake warning light does not come on.\nb. Engine will not start.\nc. Oil pressure is less than 6 psi (41 kPa) at idle.\nd. Voltmeter needle stays in yellow or red range.\ne. Air restriction indicator reaches red zone.\nf. Brake warning light stays on after hand brake is released or comes on while driving.\nh. Coolant temperature gauge inoperative or reads greater than 230°F (110°C).",
    },
    {
        itemNumber: "14",
        interval: "Before",
        location: "Brakes",
        system: "Brakes",
        keywords: [
            "brakes not working", "brake failure", "brake pedal soft", "brake pedal spongy",
            "brake pedal travel", "brakes won't stop", "vehicle won't stop", "brakes grabbing",
            "brakes grab", "brakes lock up", "brake pedal to floor", "brake response delayed",
            "brake system issue", "parking brake not working", "hand brake not holding",
            "parking brake weak", "brake lever issue", "brake safety mechanism broken",
            "brake safety not latching", "pedal has no resistance", "long pedal travel",
            "parking brake won’t latch", "parking brake doesn’t engage", "brake test failed",
            "spongy brake pedal", "brakes ineffective", "slow brake response"],
        commonFaults: [
            "Brakes won't stop vehicle", "Parking brake not working",
            "Brake pedal travel excessive", "Spongy brake pedal",
            "Brake safety mechanism broken", "Parking brake lever won’t latch",
            "Brake system weak", "Brake pedal goes to floor", "Brakes lock up",
            "Parking brake does not engage", "Pedal has no resistance", "Delayed brake response"],
        procedure: "DRIVER NOTE Engine must be warmed up and idling, transmission in \"D\" (drive), transfer in \"H\" (high), and parking brake released to perform the following check.\n\na. Check brake pedal travel. With vehicle at idle, transfer in H, and transmission in D, allow vehicle to move forward. As vehicle moves, slowly depress brake pedal. Pedal should travel 1 to 1-1/2 inches before brakes take hold. After brakes take hold, pedal may exceed the 1 to 1-1/2 inch travel. This is normal.\n\nb. Check parking brake. With parking brake fully applied, transmission in D or R, and transfer in H, vehicle should not move.\n\nc. Check parking brake lever safety mechanism (if equipped) to ensure that it latches when parking brake is applied.",
        notFullyMissionCapable: "a. Brakes will not stop the vehicle.\nb. Parking brake inoperable or unable to hold vehicle.\nc. Parking brake lever safety mechanism (if equipped) is not functioning properly.",
    },
    {
        itemNumber: "15",
        interval: "Before",
        location: "NBC System",
        system: "Safety Systems",
        keywords: [
            "nbc system", "nbc system not working", "nbc system failure", "nbc system inoperative",
            "nbc heater not working", "nbc power switch", "nbc heater light off",
            "no air at hose outlet", "nbc system issue", "no airflow from nbc system",
            "nbc fuse missing", "nbc system fuse", "nbc switch broken", "nbc heater failure",
            "nuclear biological chemical system", "nbc light not turning on", "nbc airflow issue"],
        commonFaults: [
            "NBC system inoperative", "NBC heater not working", "No airflow at hose outlets",
            "NBC light does not turn on", "NBC power switch broken", "Missing or blown NBC fuse",
            "No power to NBC system", "NBC system not activating", "NBC system not providing air"],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only)\n\na. Check NBC system power switch for proper operation and security of mounting. All system fuses, including spares, should be present.\nb. Check NBC heater for proper operation. When knob is turned clockwise, the light should come on, indicating heater is working.\nc. Check for steady flow of air at hose outlets. If light does not come on, notify supervisor, and record on DA Form 2404.",
        notFullyMissionCapable: "N/A",
    },
    {
        itemNumber: "16",
        interval: "Before",
        location: "Weapon Station",
        system: "Weapon Systems",
        keywords: [
            "weapon station", "weapon mount", "turret binding", "turret won't rotate",
            "mount stuck", "turret rotation issue", "weapon platform stuck", "mount binding",
            "mounting plate", "bearing sleeve", "turret stuck", "weapon system mount",
            "turret stuck with weapon", "turret won’t turn", "binding when rotating",
            "weapon station rotation", "weapon station check", "inclinometer broken",
            "level vial broken", "level bubble missing", "TOW weapon check", "armament turret issue",
            "mount rotation failure", "mount won’t turn"],
        commonFaults: [
            "Weapon station binding", "Turret binds during rotation", "Mounting plate loose",
            "Bearing sleeve damaged", "Turret rotation restricted", "Inclinometer not working",
            "Level vial broken", "No bubble in level vial", "Weapon mount stuck",
            "Turret won’t rotate with weapon weight", "Weapon mount binding under load"],
        procedure: "DRIVER (TOW and armament carriers, M966, M966A1, M1036, M1045, M1045A1, M1045A2, M1046, M1046A1, M1025, M1025A1, M1025A2, M1026, M1026A1, M1043, M1043A1, M1043A2, M1044, M1044A1, and M1121 only)\n\nNOTE Weapon station binding should be checked with weapon system or equivalent weight applied to turret. Refer to appropriate system TM to determine weight of weapon system.\n\na. Check weapon station for binding by rotating 360 degrees in both directions at least five times.\nb. (Armament carriers only). Check armament mounting plate and bearing sleeve for security of mounting and obvious damage that would impair operation.\nc. (TOW vehicles only). Check inclinometer for proper operation. Check level vial for breaks and/or bubbles.",
        notFullyMissionCapable: "a. Weapon station binds.\nb. Armament weapons required for mission: Mounting plate or bearing sleeve missing or any damage that will prevent or impair mounting of armament weapons.\nc. Level vial is broken or no bubble is present.",
    },
    {
        itemNumber: "17",
        interval: "During",
        location: "Controls and Indicators",
        system: "Electrical",
        keywords: [
            "gauges not working", "dashboard gauges", "instrument panel failure",
            "oil pressure low", "no oil pressure", "coolant temperature high",
            "voltmeter low", "battery not charging", "voltage drop", "air restriction gauge red",
            "tachometer not working", "speedometer not working", "hour meter broken",
            "gauges not responsive", "gauge cluster issue", "no gauge movement",
            "gauge reading abnormal", "dashboard electrical issue", "warning gauge failure",
            "speed reading inaccurate", "rpm gauge inoperative", "rpm meter not moving"],
        commonFaults: [
            "Oil pressure low", "Coolant temperature gauge high", "Voltmeter low",
            "No voltage", "Air restriction gauge red", "Speedometer not working",
            "Tachometer not responding", "Gauges unresponsive", "Dash panel failure",
            "Hour meter inoperative", "Electrical system malfunction"],
        procedure: "DRIVER\n\na. Monitor all gauges.\nb. Check speedometer operation.\nc. (Marine Corps only.) Check hour/tachometer operation.",
        notFullyMissionCapable: "a. Engine oil pressure gauge reads less than approximately 40 psi (276 kPa) under normal driving conditions or less than 6 psi (41 kPa) at idle. Coolant temperature gauge reads greater than 230°F (110°C). Air restriction gauge indicates restriction in the air cleaner. Voltmeter indicates a loss of voltage.",
    },
    {
        itemNumber: "18",
        interval: "During",
        location: "Brakes",
        system: "Brakes",
        keywords: [
            "brakes pulling", "vehicle pulls when braking", "brakes pull to side",
            "pulling to left", "pulling to right", "brakes uneven", "brakes grab",
            "grabbing brakes", "brakes catch", "brake imbalance", "steering pulls under braking",
            "brakes jerky", "brakes lock on one side", "brake pull", "brakes engage unevenly",
            "brake side drag", "dragging brake", "vehicle veers when braking"],
        commonFaults: [
            "Brakes pull to one side", "Vehicle pulls under braking", "Uneven brake engagement",
            "Brakes grab", "Brakes catch", "Brake system imbalance", "Dragging brake",
            "Brake force uneven", "Brakes lock on one side"],
        procedure: "DRIVER\n\nCheck brakes for pulling or grabbing.",
        notFullyMissionCapable: "Brakes pull or grab.",
    },
    {
        itemNumber: "19",
        interval: "During",
        location: "Steering",
        system: "Steering",
        keywords: [
            "steering problems", "steering loose", "loose steering wheel", "excessive play",
            "steering play", "free play in steering", "binding steering", "steering tight",
            "steering hard to turn", "steering jerky", "shimmy in wheel", "vehicle sways",
            "swaying side to side", "leaning to one side", "unstable handling",
            "steering response delayed", "steering feels unstable", "difficulty turning",
            "wandering steering", "unusual steering movement", "steering pull"],
        commonFaults: [
            "Steering loose", "Excessive steering play", "Free play in steering",
            "Binding steering", "Hard to turn steering", "Unstable handling",
            "Vehicle leans to one side", "Vehicle sways side to side",
            "Steering shimmy", "Jerky steering response", "Steering pulls",
            "Unstable turning", "Poor steering response"],
        procedure: "DRIVER\n\nBe alert for excessive sway, leaning to one side, or unstable handling. Check steering response for unusual free play, binding, or shimmy.",
        notFullyMissionCapable: "Handling is unstable, turning is difficult, or free play, binding, or shimming detected.",
    },
    {
        itemNumber: "19.1",
        interval: "During",
        location: "Accelerator Pedal",
        system: "Engine",
        keywords: [
            "accelerator sticking", "gas pedal sticking", "accelerator pedal binding",
            "sticky accelerator", "throttle pedal stuck", "throttle not responsive",
            "accelerator hard to press", "pedal doesn’t return", "gas pedal stuck down",
            "binding throttle", "hesitation when pressing pedal", "accelerator unresponsive",
            "engine revs without pressing", "gas pedal slow to return", "pedal not smooth",
            "engine surging", "throttle lags", "engine won’t idle down"
        ],
        commonFaults: [
            "Accelerator pedal sticking", "Accelerator pedal binding",
            "Throttle does not return", "Gas pedal stuck", "Unresponsive throttle",
            "Pedal slow to return", "Sticky accelerator", "Pedal binds during use",
            "Engine surging due to pedal", "Hesitation during acceleration"
        ],
        procedure: "DRIVER\n\nCheck response to accelerator feed. Check for sticking or binding pedal.",
        notFullyMissionCapable: "Pedal sticking or binding.",
    },
    {
        itemNumber: "20",
        interval: "During",
        location: "Power-train",
        system: "Engine",
        keywords: [
            "engine noise", "engine making noise", "strange engine sound", "vibration in engine",
            "engine vibration", "transmission noise", "transfer case noise", "differential noise",
            "propshaft noise", "propeller shaft vibration", "axle noise", "whining engine",
            "clunking sound", "knocking noise", "grinding under load", "metallic noise",
            "rattling from engine", "unusual engine behavior", "noise under load",
            "loud engine", "engine whining", "shaking while driving", "rumble from drivetrain",
            "powertrain vibration", "driveline noise", "wheel bearing noise", "gearbox noise"],
        commonFaults: [
            "Engine making noise", "Unusual engine vibration", "Transmission noise",
            "Transfer case noise", "Differential noise", "Propeller shaft vibration",
            "Axle shaft noise", "Driveline vibration", "Grinding under load",
            "Knocking or clunking sound", "Rattling in engine bay", "Powertrain noise"],
        procedure: "DRIVER\n\nBe alert for unusual noises or vibrations from engine, transmission, transfer, differentials, propeller shafts (especially under load), axle shafts, or wheels.",
        notFullyMissionCapable: "Unusual noise or vibration detected.",
    },
    {
        itemNumber: "21",
        interval: "During",
        location: "Transmission",
        system: "Transmission",
        keywords: [
            "transmission slipping", "slipping gears", "won't shift", "hard to shift",
            "gear won’t engage", "gear slips", "shift delay", "transmission won't shift",
            "delayed shifting", "jerky shifting", "rough gear change", "transmission issue",
            "gearbox problem", "won’t go into gear", "gear disengages", "auto shifting issue",
            "stuck in gear", "transmission noise", "hesitation when shifting"],
        commonFaults: [
            "Transmission slipping", "Gear won’t engage", "Transmission won’t shift",
            "Delayed shifting", "Jerky gear changes", "Slipping out of gear",
            "Transmission stuck in gear", "Rough shifting", "Transmission not responding"],
        procedure: "DRIVER\n\nCheck transmission for proper operation.",
        notFullyMissionCapable: "Transmission slips or will not shift.",
    },
    {
        itemNumber: "22",
        interval: "During",
        location: "Ambulance Air-conditioner",
        system: "Climate Control",
        keywords: [
            "air conditioning", "ac not working", "a/c not cooling", "ac failure",
            "no cold air", "air conditioner broken", "air conditioning issue",
            "blower blowing warm air", "no air from vents", "climate control not working",
            "cab not cooling", "cool air not coming out", "a/c warm", "ambulance ac not working",
            "rear ac not cooling", "ac blowing hot air", "air conditioner failure",
            "aircon not functioning", "ambient temperature not dropping"],
        commonFaults: [
            "Air conditioning not working", "No cool air from vents", "AC blows warm air",
            "Air conditioner failure", "Outlet ducts blowing hot air",
            "Blower working but no cold air", "Climate control system inoperable",
            "Temperature not dropping after AC on", "Cabin not cooling"],
        procedure: "DRIVER NOTE\n\nPerform the following inspection only if the air conditioner is required for climatic conditions.\n\nTurn air conditioner on and set blower to maximum cooling speed settings. Wait 5 minutes to allow temperature to stabilize. Check outlet ducts for cool air.",
        notFullyMissionCapable: "Climatic conditions require air-conditioning and A/C is inoperable, and if outlet duct air is not cooler than ambient temperature.",
    },
    {
        itemNumber: "22.1",
        interval: "After",
        location: "Gear Shifter Lever",
        system: "Transmission",
        keywords: [
            "gear shifter", "gear shifter binding", "shifter stuck", "shift lever stuck",
            "gear selector issue", "gear lever won’t move", "shifter won’t shift",
            "hard to shift", "transmission selector stiff", "transfer case lever stuck",
            "gear shifter won’t engage", "gear shift hard", "binding gear lever",
            "gear selector binds", "won’t shift ranges", "shift lever jammed",
            "gear shifter issue", "gear detent not working", "shifter not engaging",
            "range selector not working", "transmission lever hard to move"],
        commonFaults: [
            "Gear shifter binding", "Shift lever stuck", "Shift lever hard to move",
            "Lever does not engage in all ranges", "Lever binds between detents",
            "Transfer case lever inoperable", "Shifter does not move freely",
            "Selector won't engage", "Gear range not selectable", "Shifter stuck in gear"],
        procedure: "DRIVER\n\na. Check transmission shift lever operation. Shift transmission through all operating ranges. Lever should move freely through all range positions.\n\nb. Check transfer shift lever operation. With transmission in \"N,\" shift transfer lever through all range positions. Lever should move freely through all range positions.",
        notFullyMissionCapable: "a. Lever inoperable or binds between range detents.\nb. Lever inoperable or does not engage in all ranges with engine not running.",
    },
    {
        itemNumber: "23",
        interval: "After",
        location: "Transmission fluid",
        system: "Transmission",
        keywords: [
            "transmission fluid", "trans fluid low", "low transmission oil",
            "check transmission level", "transmission dipstick", "fluid below crosshatch",
            "overfilled transmission", "transmission overfull", "transmission fluid leak",
            "fluid above crosshatch", "check trans dipstick", "trans fluid check",
            "fluid level transmission", "trans fluid level", "gearbox fluid low",
            "transmission oil level", "fluid contaminated", "transmission fluid dirty"],
        commonFaults: [
            "Transmission fluid low", "Transmission overfilled", "Fluid above crosshatch",
            "Fluid below crosshatch", "Contaminated transmission fluid",
            "Dipstick shows incorrect level", "Possible transfer case leak into transmission"],
        procedure: "DRIVER CAUTION\n• Do not permit dirt, dust, fluid or grit to enter transmission oil dipstick tube. Internal transmission damage will result if transmission oil becomes contaminated.\n• Do not overfill transmission. Damage to transmission will result. An over-full transmission can also indicate a transfer case fluid leak. Notify unit maintenance if transmission fluid is above crosshatch mark.\n\nNOTE\n• Apply brake and move shift lever through each gear range. Pause for about three seconds in each range, ending in \"P\".\n• Transmission fluid level should be checked with engine running, parking brake set, transmission shift lever in \"N\", and vehicle on level ground. Fluid level should be at crosshatch marks on dipstick.\n• Let the vehicle idle with all accessories off for three minutes.\n• Engine operating temperature of 190-230°F (88-110°C) must be reached before performing AFTER checks.\n\nCheck transmission fluid level. If level is below the crosshatch marks, add sufficient fluid to bring the level to the crosshatch marks.",
        notFullyMissionCapable: "N/A",
    },
    {
        itemNumber: "24",
        interval: "After",
        location: "Fuel Filter",
        system: "Engine",
        keywords: [
            "fuel contaminated", "contaminated fuel", "dirty fuel", "fuel not clear",
            "cloudy fuel", "fuel has debris", "fuel looks milky", "fuel filter drain",
            "fuel filter check", "fuel draining", "fuel in container", "fuel not clean",
            "fuel leak", "fuel filter leaking", "diesel contamination", "fuel water",
            "fuel filter hose", "bad fuel", "fuel sediment", "fuel inspection"],
        commonFaults: [
            "Contaminated fuel", "Cloudy fuel", "Fuel not clear", "Fuel contains debris",
            "Water in fuel", "Class III fuel leak", "Fuel filter leaking",
            "Drain valve dripping excessively", "Dirty fuel from filter", "Fuel appears milky"],
        procedure: "DRIVER WARNING\nDo not perform fuel system checks, inspections, or maintenance while smoking or near fire, flames, or sparks. Fuel may ignite, causing damage to vehicle and injury or death to personnel.\n\nNOTE\nA rubber hose can be attached to drain valve to catch fuel in container before opening drain valve. If fuel is clear, put fuel back in fuel tank.\n\na. Check fuel for contamination. With engine running, open drain valve. Allow fuel to drain in suitable container until it runs clear. Close valve.\n\nNOTE\nFuel retained in the drain-valve may drip when vehicle vibrations occur. This is normal and does not constitute a leak. Wipe drain valve with rag until excess fuel is removed.\n\nb. Check for leaks.\nc. Stop engine and remove rubber hose from drain valve, if installed.",
        notFullyMissionCapable: "a. Fuel is not clear after draining 1 pint (0.47 L)\nb. Class III leakage evident.",
    },
    {
        itemNumber: "25",
        interval: "After",
        location: "Left Side Tires",
        system: "Tires/Wheels",
        keywords: [
            "tire damage", "left tire damage", "tire puncture", "tire cut", "tire gouge",
            "tire crack", "tire bulge", "tire underinflated", "tire deflated", "flat tire",
            "left front tire issue", "left rear tire issue", "driver side tire",
            "sidewall crack", "sidewall bulge", "tire low", "nail in tire",
            "screw in tire", "tire pierced", "sharp object in tire", "tire compromised",
            "damaged tire left", "left tire flat", "tire tread damage", "remove object from tire"],
        commonFaults: [
            "Tire puncture", "Left tire damaged", "Tire cut", "Tire gouged",
            "Cracked tire sidewall", "Bulging tire", "Underinflated tire",
            "Deflated tire", "Sharp object embedded in tire", "Driver side tire unserviceable"],
        procedure: "DRIVER WARNING\n\nOperating a vehicle with a tire in an underinflated condition or with questionable defect may lead to premature tire failure and may cause equipment damage and injury or death to personnel.\n\nVisually check tires for under-inflation, cuts, gouges, cracks, or bulges. Remove all penetrating objects.",
        notFullyMissionCapable: "Tire deflated or otherwise unserviceable.",
    },
    {
        itemNumber: "26",
        interval: "After",
        location: "Mirror (Left Side)",
        system: "Safety Systems",
        keywords: [
            "mirror broken", "left mirror cracked", "driver side mirror broken",
            "mirror missing", "mirror loose", "mirror damaged", "mirror hanging",
            "Driver mirror broken", "mirror visibility issue", "side mirror cracked",
            "mirror not adjustable", "mirror shattered", "mirror glass broken",
            "left side mirror", "driver mirror missing", "mirror inspection left"],
        commonFaults: [
            "Mirror cracked", "Mirror missing", "Left mirror damaged",
            "Mirror loose", "Mirror not serviceable", "Driver side mirror broken",
            "Mirror glass shattered", "Driver mirror missing"],
        procedure: "DRIVER NOTE\n\nVehicle operation with damaged or missing outside rearview mirrors may violate AR 385-55. Check mirror for presence, cracks, and serviceability.",
        notFullyMissionCapable: "N/A",
    },
    {
        itemNumber: "27",
        interval: "After",
        location: "Left Front, Side Exterior",
        system: "Fluid Systems",
        keywords: [
            "cv boots torn", "cv boot rip", "cv boot tear", "cv joint leaking",
            "grease leak", "halfshaft boot cracked", "ball joint boot tear", "boot damaged",
            "cv boot leaking", "left front cv boot", "driver side cv boot", "cv axle boot torn",
            "boot ripped open", "fluid leak left front", "underbody leak", "crossmember crack",
            "frame bent", "rust on frame", "frame hardware missing", "ball joint damaged",
            "body damage left front", "support frame cracked", "suspension boot torn",
            "fluid on lower control arm"],
        commonFaults: [
            "CV boots torn", "Ball joint boot torn", "Grease leaking from CV joint",
            "Cracked or split boot", "Leaking axle boot", "Underbody fluid leak",
            "Frame crossmember cracked", "Underbody support bent or broken",
            "Missing frame hardware", "Rusted frame support", "Structural damage left front",
            "Body damage impairing vehicle operation"],
        procedure: "DRIVER NOTE\n\nIf leakage is detected, further investigation is needed to determine the location and cause of the leak.\n\na. Visually check underneath vehicle for evidence of fluid leakage.\nb. Visually check halfshaft CV boots and ball joint boots for presence, rips, tears, or cuts.\nc. Inspect frame crossmembers and underbody support for missing hardware, cracks, bends, and breaks. Notify unit maintenance if rust is present, but the base metal is sound.\nd. Visually check for body damage that would impair operation of vehicle.",
        notFullyMissionCapable: "a. Any brake fluid leak; Class III leak of oil, fuel, or coolant.\nc. Crossmembers or underbody support are missing any hardware, broken, cracked, or if a bent or rusted-through condition is present that would affect vehicle operation.\nd. Any damage that will prevent operation.",
    },
    {
        itemNumber: "28",
        interval: "After",
        location: "Rear Exterior",
        system: "Fluid Systems",
        keywords: [
            "rear cv boots", "rear cv boot torn", "rear cv boot leaking", "cv boot rip rear",
            "rear halfshaft boot tear", "rear axle boot", "grease leaking rear", "ball joint boot rear",
            "cv joint rear leaking", "rear suspension boot", "rear underbody leak",
            "rear fluid on ground", "cv boot split rear", "frame crack rear", "rear frame bent",
            "rear crossmember damaged", "towing pintle damage", "rear frame rusted",
            "rear undercarriage issue", "rear crossmember crack", "bumper crack rear",
            "towing pintle area damaged", "braces around pintle broken"],
        commonFaults: [
            "Rear CV boots torn", "Rear axle boot leaking", "Grease leaking from rear CV",
            "Rear ball joint boot damaged", "Rear underbody fluid leak", "Rear frame cracked",
            "Rear crossmember bent or broken", "Rust on rear support structure",
            "Rear bumper cracked", "Cracked or broken rear brace near pintle",
            "Missing rear frame hardware"],
        procedure: "DRIVER NOTE\n\nIf leakage is detected, further investigation is needed to determine the location and cause of the leak.\n\na. Visually check underneath vehicle for evidence of fluid leakage.\nb. Visually check halfshaft CV boots and ball joint boots for presence, rips, tears, or cuts.\nc. Inspect frame cross-members and underbody support for missing hardware, cracks, bends, and breaks. Notify unit maintenance if rust is present, but the base metal is sound.\nd. Inspect bumper or cross-member and inner braces in area around towing pintle for cracks or breaks.",
        notFullyMissionCapable: "a. Any brake fluid leak; class III leak of oil, fuel, or coolant.\nc. Crossmembers or underbody support are missing any hardware, broken, cracked, or if a bent or rusted-through condition is present that would affect vehicle operation.\nd. Bumper, cross-member or an inner brace is cracked or broken.",
    },
    {
        itemNumber: "29",
        interval: "After",
        location: "Patient Compartment",
        system: "Safety Systems",
        keywords: [
            "ambulance lights", "ceiling lights not working", "blackout light issue", "spotlight out",
            "interior lights inoperative", "ambulance lighting failure", "blackout switch not working",
            "rear step switch inoperative", "bulkhead switch broken", "rear door switch not responding",
            "litter rack loose", "litter rack latch broken", "missing litter strap", "damaged IV hanger",
            "oxygen bottle mount loose", "oxygen storage insecure", "door latch broken", "rear door jammed",
            "rear seal leaking light", "bulkhead seal cracked", "step seal worn", "light emission rear door",
            "emergency compartment lighting issue", "interior blackout failure", "patient area door won’t close",
            "blackout light leak", "door won't latch", "missing footman loop", "IV strap damaged"],
        commonFaults: [
            "Ambulance lights not working", "Ceiling lights inoperative", "Blackout lights failed",
            "Spotlights not functioning", "Blackout switch inoperative", "Rear door switch broken",
            "Litter rack latch missing", "Litter rack hinge damaged", "Loose or missing straps",
            "Footman loops damaged", "Oxygen bottles not secured", "IV hanger loose or missing",
            "Rear door latch not functioning", "Rear door won’t close", "Light leak under blackout conditions",
            "Door seals compromised", "Rear compartment components unserviceable"],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only)\n\nWARNING Be sure cables are securely connected to the steps before using. Failure to do so may cause injury to personnel.\n\na. Check presence and operation of ceiling white lights, blackout lights, and spotlights.\nb. Check operation of blackout switches at rear step, rear doors, and bulkhead door.\nc. Inspect condition and security of litter racks and components.\nd. Inspect upper litter rack hinges and latches for proper operation, damage, or missing components.\ne. Inspect tension straps, support straps, litter straps, and footman loops for security of mounting, damage, and missing components.\nf. Inspect oxygen bottles and mounting components for security of stowage when oxygen bottles are in stowed position.\ng. Inspect IV straps and hangers for security of mounting, damage, and missing components.\nh. Check operation of rear doors, handles, and latching mechanisms. Check for loose or missing components. Door should not bind and should close securely when latched shut.\ni. Inspect rear door seals, step seals, bulkhead door and rear door vent seals (M996 and M996A1 only) for proper installation and condition. Door seals must not allow emission of light signature under blackout conditions.",
        notFullyMissionCapable: "a. One or more lights inoperative or unserviceable.\nb. Any blackout switch inoperable.\nd. Hinges or latches inoperative, damaged, or missing.\nh. Rear door handles and latching mechanisms do not operate properly. Missing or damaged components. Rear doors do not operate properly.\ni. Door seals allow emission of light signature under blackout conditions (detectable from 50 ft [15 m] of vehicle).",
    },
    {
        itemNumber: "30",
        interval: "After",
        location: "Right Side Tires",
        system: "Tires/Wheels",
        keywords: [
            "tire damage", "tire flat", "tire low", "deflated tire", "underinflated",
            "tire pressure", "missing tire", "damaged tire", "right tire", "passenger side tire",
            "tire puncture", "nail in tire", "tire cut", "tire gouge", "tire crack",
            "tire bulge", "tire worn", "tire leak", "air leak", "tire pressure low",
            "flat passenger tire", "right front tire", "right rear tire", "tire sidewall damage",
            "tire tread damage", "passenger side flat", "right side tire problem", "tire going flat",
            "tire losing air", "tire soft", "tire squishy", "passenger tire issue"],
        commonFaults: [
            "Tire puncture", "Flat tire", "Low tire pressure", "Tire cuts or gouges",
            "Tire cracks", "Tire bulges", "Underinflated tire", "Tire sidewall damage",
            "Nail or screw in tire", "Tire leak", "Passenger side tire flat",
            "Right side tire damage", "Tire tread worn", "Air slowly leaking from tire",
            "Tire won't hold air", "Passenger side tire low", "Right tire going flat",
            "Tire feels soft when kicked", "Visible tire damage on passenger side"],
        procedure: "DRIVER WARNING Operating a vehicle with a tire in an underinflated condition or with questionable defect may lead to premature tire failure and may cause equipment damage and injury or death to personnel. Visually check tires for under-inflation, cuts, gouges, cracks, or bulges. Remove all penetrating objects.",
        notFullyMissionCapable: "Tire deflated or otherwise unserviceable."
    },
    {
        itemNumber: "31",
        interval: "After",
        location: "Mirror (Right Side)",
        system: "Safety Systems",
        keywords: [
            "mirror broken", "mirror cracked", "mirror missing", "mirror damaged",
            "right mirror", "passenger side mirror", "side mirror broken", "mirror glass cracked",
            "mirror loose", "mirror hanging", "mirror fell off", "can't see in mirror",
            "mirror fogged", "mirror scratched", "mirror adjustment broken", "mirror mount broken",
            "passenger mirror cracked", "right side mirror damage", "outside mirror broken",
            "rearview mirror right", "mirror not working", "mirror visibility poor"],
        commonFaults: [
            "Mirror cracked", "Mirror glass broken", "Mirror missing completely",
            "Passenger side mirror damaged", "Right mirror loose or hanging",
            "Mirror mount broken or bent", "Mirror adjustment mechanism broken",
            "Mirror glass scratched badly", "Mirror fogged or cloudy",
            "Right side mirror fell off", "Passenger mirror not adjustable",
            "Outside rearview mirror cracked", "Mirror visibility impaired"],
        procedure: "DRIVER NOTE Vehicle operation with damaged or missing outside rearview mirrors may violate AR 385-55. Check mirror for presence, cracks, and serviceability.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "32",
        interval: "After",
        location: "Right Front, Side Exterior",
        system: "Fluid Systems",
        keywords: [
            "cv boots torn", "cv boot rip", "cv boot leak", "cv boot damage",
            "right cv boot", "passenger side cv boot", "grease leaking", "halfshaft boot",
            "ball joint boot", "cv joint leak", "front right cv boot", "axle boot torn",
            "grease on ground", "cv boot split", "underbody leak", "frame crack",
            "frame damage", "crossmember crack", "right side damage", "passenger side leak",
            "front end damage", "right front leak", "underbody fluid", "frame rust",
            "support broken", "hardware missing", "front right damage"],
        commonFaults: [
            "CV boots torn", "Right side CV boot leaking", "Grease leaking from passenger CV",
            "Ball joint boot damaged", "Right front underbody fluid leak", "Frame cracked",
            "Crossmember bent or broken", "Missing frame hardware", "Rust on support structure",
            "Right side body damage", "Passenger side CV boot split", "Front right axle boot torn",
            "Grease visible under right front", "Frame support damaged"],
        procedure: "DRIVER NOTE If leakage is detected, further investigation is needed to determine the location and cause of the leak.\na. Visually check underneath vehicle for evidence of fluid leakage.\nb. Visually check halfshaft cv boots and ball joint boots for presence of rips, tears, cuts.\nc. Inspect frame crossmembers and underbody support for missing hardware, cracks, bends, and breaks. Notify unit maintenance if rust is present but the base metal is sound.\nd. Visually check front and right side of vehicle for obvious damage that would impair operation.",
        notFullyMissionCapable: "a. Any brake fluid leak; class III leak of oil, fuel, or coolant.\nc. Crossmembers or underbody support are missing any hardware, broken, cracked, or if a bent or rusted-through condition is present that would affect vehicle operation.\nd. Any damage that will prevent operation."
    },
    {
        itemNumber: "33",
        interval: "After",
        location: "Engine Oil",
        system: "Engine",
        keywords: [
            "oil level low", "engine oil", "milky oil", "oil dipstick", "oil check",
            "oil low", "no oil", "oil dirty", "oil contaminated", "oil white",
            "oil foamy", "oil mixed with water", "coolant in oil", "oil creamy",
            "oil light colored", "oil level below add", "engine oil low",
            "dipstick shows low", "oil needs adding", "oil appears bad"],
        commonFaults: [
            "Engine oil low", "Oil appears milky", "Oil level below ADD mark",
            "Oil contaminated with coolant", "Oil looks foamy or white",
            "Oil mixed with water", "Oil level too low", "Milky colored oil",
            "Oil appears creamy", "Coolant leak into oil", "Oil dipstick shows low",
            "Oil needs to be added", "Oil contaminated"],
        procedure: "DRIVER CAUTION\n• Do not permit dirt, dust, or grit to enter engine oil dipstick tube. Internal engine damage will result if engine oil becomes contaminated.\n• Do not overfill engine crankcase. Damage to engine will result.\nCheck engine oil level. Level should be between \"ADD\" and \"FULL.\" If level is below \"ADD,\" add oil to bring level between the \"ADD\" and \"FULL\" marks.",
        notFullyMissionCapable: "Oil appears milky."
    },
    {
        itemNumber: "34",
        interval: "After",
        location: "Power Steering Lines and Fittings",
        system: "Steering",
        keywords: [
            "power steering leak", "steering fluid leak", "power steering lines",
            "steering hose leak", "power steering fluid", "steering system leak",
            "hydraulic leak", "steering fluid low", "power steering hose",
            "steering pump leak", "power steering fittings", "steering hard",
            "steering fluid on ground", "power steering drip"],
        commonFaults: [
            "Power steering leak", "Power steering fluid leaking", "Steering hose leak",
            "Power steering line leak", "Hydraulic fluid leak", "Steering system leak",
            "Power steering pump leak", "Fluid dripping from steering system",
            "Power steering fittings leaking", "Steering fluid on ground"],
        procedure: "DRIVER WARNING Notify unit maintenance if power steering system has class III leak. Loss of power assist could occur if this condition exists.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "35",
        interval: "After",
        location: "Engine Air Cleaner",
        system: "Engine",
        keywords: [
            "air cleaner", "air filter", "air restriction indicator", "restriction indicator",
            "air cleaner restriction", "red indicator", "air filter clogged", "air filter dirty",
            "air cleaner service", "air filter service needed", "restriction gauge",
            "air cleaner housing", "air intake restriction", "clogged air filter",
            "air cleaner check", "pre-cleaner", "dust unloader", "air cleaner after"
        ],
        commonFaults: [
            "Air restriction indicator showing red after operation", "Air filter clogged",
            "Air cleaner housing damaged", "Pre-cleaner damaged or missing",
            "Dust unloader missing or damaged", "Air restriction indicator missing"
        ],
        procedure: "DRIVER\na. Check air restriction indicator. If the indicator shows red, service air cleaner before next operation.\nb. Check air cleaner housing for damage and proper mounting.\nc. Check pre-cleaner and dust unloader for presence and condition.\nd. Reset restriction indicator after servicing air cleaner.",
        notFullyMissionCapable: "N/A",
    },
    {
        itemNumber: "36",
        interval: "After",
        location: "Cooling System",
        system: "Engine",
        keywords: [
            "radiator hose leak", "coolant leak", "radiator leak", "hose leak",
            "cooling system leak", "coolant hose", "upper radiator hose", "lower radiator hose",
            "coolant drip", "antifreeze leak", "cooling hose", "radiator hose split",
            "hose cracked", "coolant on ground", "green fluid leak", "cooling system"],
        commonFaults: [
            "Radiator hose leak", "Coolant leaking from hose", "Upper radiator hose leak",
            "Lower radiator hose leak", "Cooling system hose leak", "Radiator hose cracked",
            "Coolant dripping", "Antifreeze leak", "Hose split or damaged",
            "Green fluid leaking", "Cooling hose damaged"],
        procedure: "DRIVER Inspect radiator hoses for leakage.",
        notFullyMissionCapable: "Class III leakage evident."
    },
    {
        itemNumber: "37",
        interval: "After",
        location: "Master Cylinder",
        system: "Brakes",
        keywords: [
            "brake fluid leak", "master cylinder leak", "brake line leak", "brake fluid",
            "brake system leak", "master cylinder", "brake lines", "brake fluid low",
            "brake reservoir", "brake fluid drip", "hydraulic brake leak",
            "brake master cylinder", "brake fluid on ground", "brake system"],
        commonFaults: [
            "Master cylinder leak", "Brake line leak", "Brake fluid leaking",
            "Master cylinder lines leaking", "Brake fluid dripping", "Brake system leak",
            "Hydraulic brake fluid leak", "Brake reservoir leak", "Brake lines damaged",
            "Master cylinder cover missing", "Brake fluid on ground"],
        procedure: "DRIVER Visually check master cylinder lines for leaks and security of cover.",
        notFullyMissionCapable: "Any leak or cover missing."
    },
    {
        itemNumber: "37.1",
        interval: "After",
        location: "Windshield Washer Jar",
        system: "Safety Systems",
        keywords: [
            "windshield washer", "washer fluid", "washer jar", "windshield washer fluid",
            "washer reservoir", "wiper fluid", "windshield fluid", "washer bottle",
            "washer tank", "washer fluid low", "washer jar damaged", "washer system",
            "windshield cleaning fluid", "washer fluid empty"
        ],
        commonFaults: [
            "Washer jar damaged", "Windshield washer fluid low", "Washer reservoir cracked",
            "Washer jar empty", "Windshield washer bottle damaged", "Washer fluid leak",
            "Washer reservoir broken", "Washer jar missing cap", "Washer system damaged"
        ],
        procedure: "DRIVER\na. Visually check windshield washer jar for damage.\nb. Check windshield washer fluid level.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "38",
        interval: "After",
        location: "Lights",
        system: "Electrical",
        keywords: [
            "lights not working", "headlights out", "tail lights out", "brake lights",
            "turn signals", "marker lights", "service lights", "blackout lights",
            "headlights", "taillights", "stop lights", "signal lights", "driving lights",
            "front lights", "rear lights", "side lights", "lights burned out",
            "bulbs out", "lights dead", "no lights", "lights dim"
        ],
        commonFaults: [
            "Headlights not working", "Tail lights out", "Brake lights not working",
            "Turn signals not working", "Service lights out", "Marker lights out",
            "Stop lights not working", "Blackout lights not working", "Front lights out",
            "Rear lights not working", "Side marker lights out", "Light bulbs burned out",
            "Driving lights not working", "Signal lights out"
        ],
        procedure: "DRIVER CAUTION Never set the rotary switch to \"RUN\" to check the lights. This drains the batteries and can burn out the glow plugs and control box.\nNOTE Vehicle operation with damaged or inoperable headlights may violate AR 385-55.\na. Check for presence and operation of service drive, turn signal, blackout marker, marker, blackout drive, and side marker lights.\nb. Check operation of tail/stop-lights. Push down brake pedal approximately 1/4 in. Tail/stop-lights should come on.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "39",
        interval: "After",
        location: "Horn",
        system: "Electrical",
        keywords: [
            "horn not working", "horn broken", "horn dead", "horn doesn't work",
            "horn won't sound", "no horn", "horn button", "horn inoperative",
            "horn doesn't beep", "horn silent", "horn button not working",
            "can't honk", "horn system", "horn electrical"
        ],
        commonFaults: [
            "Horn not working", "Horn doesn't sound when pressed", "Horn button not working",
            "Horn completely dead", "Horn won't beep", "Horn inoperative",
            "No sound from horn", "Horn electrical problem", "Horn system failure"
        ],
        procedure: "DRIVER NOTE Vehicle operation with inoperative horn may violate AR 385-55. Check operation of horn if tactical situation permits.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "40",
        interval: "After",
        location: "Windshield and Wipers",
        system: "Safety Systems",
        keywords: [
            "windshield cracked", "wipers not working", "windshield broken", "windshield damaged",
            "windshield chip", "windshield spider crack", "wiper blades", "windshield wipers",
            "wipers won't work", "wiper motor", "windshield washer", "wipers stuck",
            "windshield cloudy", "windshield scratched", "wipers streaking", "wiper arms",
            "windshield visibility", "wipers slow", "wiper switch"
        ],
        commonFaults: [
            "Windshield cracked", "Wipers not working", "Windshield broken or chipped",
            "Windshield spider crack", "Wiper blades damaged", "Wipers won't move",
            "Wiper motor not working", "Windshield cloudy or discolored", "Wipers streaking",
            "Wiper arms bent or broken", "Windshield visibility impaired", "Wiper switch broken",
            "Wipers moving slowly", "Windshield washer not working"
        ],
        procedure: "DRIVER NOTE Vehicle operation with damaged windshield may violate AR 385-55.\na. Check windshield for damage that would impair operator's vision.\nNOTE Vehicle operation with inoperative wipers may violate AR 385-55.\nb. Check windshield wiper and blade for presence and damage.\nc. Check windshield wipers and washer for proper operation.",
        notFullyMissionCapable: "a. Windshield is cracked, broken, or discolored (cloudy) sufficiently to impair operator's vision."
    },
    {
        itemNumber: "41",
        interval: "After",
        location: "Light Switches",
        system: "Electrical",
        keywords: [
            "light switches", "switches left on", "lights still on", "battery drain",
            "switches not off", "light switch position", "electrical switches",
            "switch panel", "light controls", "switches on", "battery dead",
            "lights draining battery", "switches wrong position"
        ],
        commonFaults: [
            "Switches not in OFF position", "Lights left on", "Light switches still on",
            "Switches draining battery", "Light controls not turned off",
            "Electrical switches left on", "Battery being drained by lights",
            "Switch panel lights on", "Light switches in wrong position"
        ],
        procedure: "DRIVER NOTE Ensure all switches are in the \"OFF\" position. Failure to turn switches to the \"OFF\" position when not in use will drain the batteries. Check and ensure all switches are in the \"OFF\" position.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "41.1",
        interval: "Weekly",
        location: "Hand Throttle",
        system: "Engine",
        keywords: [
            "hand throttle", "throttle cable", "hand throttle cable", "throttle lever",
            "throttle control", "throttle mechanism", "hand throttle broken", "throttle cable broken",
            "throttle release", "throttle button", "throttle mounting", "throttle bracket",
            "throttle cable damaged", "throttle stuck", "throttle loose"
        ],
        commonFaults: [
            "Hand throttle cable damaged", "Hand throttle not working", "Throttle cable broken",
            "Hand throttle stuck", "Throttle release button broken", "Throttle mounting loose",
            "Hand throttle bracket damaged", "Throttle cable frayed", "Hand throttle binding",
            "Throttle mechanism broken", "Throttle cable corroded"
        ],
        procedure: "DRIVER\na. Check hand throttle and mounting bracket for security. Check throttle release button to ensure hand throttle cable operates properly.\nb. Check hand throttle cable for corrosion, nicks, breaks, or burns.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "42",
        interval: "Weekly",
        location: "Tires",
        system: "Tires/Wheels",
        keywords: [
            "tire pressure", "tire wear", "tire tread", "tire inflation", "tire air pressure",
            "tires low", "tire gauge", "tire psi", "tire wear bars", "tire worn",
            "lug nuts", "wheel nuts", "tire treads", "tire sidewall", "tire condition",
            "tire check", "air in tires", "tire maintenance", "wheel studs",
            "tire pressure check", "tire tread depth", "tire safety"
        ],
        commonFaults: [
            "Tire pressure low", "Tire tread worn", "Tire worn to wear bars",
            "Tire pressure too low", "Tire tread depth insufficient", "Lug nuts loose",
            "Wheel stud nuts missing", "Tire air pressure low", "Tire tread low",
            "Tire tread below 1/16 inch", "Loose wheel nuts", "Missing lug nuts",
            "Tire pressure needs adjustment", "Tire wear excessive", "Tire condition poor"
        ],
        procedure: "DRIVER WARNING\n• Do not exceed 30 psi (207 kPa) cold bias tire inflation pressure. Overinflation of tire may result in premature tire failure, damage to equipment, and injury or death to personnel.\n• Do not exceed 50 psi (345 kPa) cold radial tire inflation pressure. Overinflation of tire may result in damage to equipment and injury or death to personnel.\nNOTE\n• Check tire size designator on sidewall for tire construction identification: 36x12.50-16.5 LT-Bias ply, 37x12.50R 16.5 LT-Radial.\n• Both radial and bias tires are non-directional. They provide equal traction and performance when installed in either direction.\nNOTE Refer to TM 9-2610-200-14 for additional tire information.\na. Check tire tread depth. Tread should not be worn beyond level of wear bar (1/16 in. (1.59 mm) or less). Wear bars are molded across the tread pattern in the valley between the center rib and lugs. The tread wear indicator letters (TWI) are molded on the sidewall to aid in locating the wear bar.\nNOTE The wear bars are not evident on new or very low mileage tires. The wear bars will appear after usual use.\nb. Deleted.\nc. Check for missing or loose wheel stud nuts and lug nuts. Tighten loose lug nuts and have unit maintenance tighten stud nuts and lug nuts to proper torque.\n(BIAS TIRES ONLY) WARNING Do not exceed 30 psi (207 kPa) cold bias tire inflation pressure. Over-inflation of tire may result in premature tire failure, damage to equipment, and injury or death to personnel. Check tire size designator on sidewall for tire construction identification: 36x12.50-16.5 LT-Bias ply.\nd. Gauge tires for correct air pressure using tire inflation gauge. Adjust as necessary.\n(RADIAL TIRES ONLY) WARNING Do not exceed 50 psi (345 kPa) cold radial tire inflation pressure. Over-inflation of tire may result in premature tire failure, damage to equipment, and injury or death to personnel. Check tire size designator on sidewall for tire construction identification: 37x12.50R-16.5 LT-Radial.\ne. Gauge tires for correct air pressure using tire inflation gauge. Adjust as necessary.",
        notFullyMissionCapable: "a. Any tread is worn to height of tread wear indicator (1/16 in. (1.59 mm) or less). Any cut, gouge, or crack that extends to the cord body or any bulges. Tires exhibit excessive inner and outer wear or balance.\nb. Deleted.\nc. Any wheel stud nut or lug nut is broken or missing."
    },
    {
        itemNumber: "43",
        interval: "Weekly",
        location: "Exhaust System",
        system: "Engine",
        keywords: [
            "exhaust leak", "exhaust pipe", "exhaust broken", "exhaust noise",
            "exhaust loud", "exhaust system", "muffler", "exhaust pipe broken",
            "exhaust rusted", "exhaust hole", "exhaust clamps", "exhaust mounts",
            "exhaust fumes", "exhaust pipe rusted through", "exhaust rattling"],
        commonFaults: [
            "Exhaust leak", "Exhaust pipe broken", "Exhaust system rusted through",
            "Exhaust mounts broken", "Exhaust clamps loose", "Exhaust pipe hole",
            "Muffler damaged", "Exhaust system loud", "Exhaust pipe cracked",
            "Exhaust rattling", "Exhaust fumes leaking", "Exhaust system damaged"],
        procedure: "DRIVER Check exhaust system for security of all mounts, tightness of clamps and bolts, rusted conditions, damaged pipes, and any indication of an exhaust leak.",
        notFullyMissionCapable: "Any mounts are broken, pipes are rusted through or broken, and any indication of an exhaust leak."
    },
    {
        itemNumber: "44",
        interval: "Weekly",
        location: "Shock Absorbers",
        system: "Steering",
        keywords: [
            "shock absorbers", "shocks", "shock leak", "shock absorber leak",
            "shocks leaking", "shock damaged", "shock mounts", "shock mounting",
            "suspension", "shock fluid", "spring coil", "shock oil leak",
            "shocks loose", "shock absorber damaged", "shock system"],
        commonFaults: [
            "Shock absorber leak", "Shock leaking fluid", "Shock mounts loose",
            "Shock absorber damaged", "Spring coil off center", "Shock mounting broken",
            "Shock fluid leaking", "Shock oil leak", "Shock absorber loose",
            "Suspension shock leak", "Shock system damaged", "Shock mount damaged"],
        procedure: "DRIVER\na. Visually inspect shock absorbers for leaks, damage, and security of mounting. If leaks are found, notify your supervisor.\nb. Check that spring coil is centered on shock absorber.",
        notFullyMissionCapable: "a. Class III leakage or damage is evident; mounting damaged or loose.\nb. Spring coil has shifted off center."
    },
    {
        itemNumber: "45",
        interval: "Weekly",
        location: "Doors and Windows",
        system: "Safety Systems",
        keywords: [
            "doors", "windows", "door won't open", "door stuck", "door broken",
            "window stuck", "window won't open", "window won't close", "door handle",
            "door latch", "window crank", "window handle", "door binding",
            "window binding", "door hard to open", "window hard to move",
            "door won't close", "window jammed", "door mechanism", "window mechanism"],
        commonFaults: [
            "Door won't open", "Window stuck", "Door stuck closed", "Door won't close",
            "Window won't open", "Window won't close", "Door handle broken",
            "Door latch not working", "Window crank broken", "Door binding",
            "Window binding", "Door hard to operate", "Window hard to operate",
            "Door mechanism jammed", "Window mechanism jammed"],
        procedure: "DRIVER Check operation of doors and windows.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "46",
        interval: "Weekly",
        location: "Tailgate",
        system: "Safety Systems",
        keywords: [
            "tailgate", "tailgate won't latch", "tailgate broken", "tailgate stuck",
            "tailgate won't open", "tailgate won't close", "tailgate latch",
            "tailgate handle", "tailgate binding", "tailgate loose", "rear gate",
            "back gate", "tailgate operation", "tailgate mechanism"],
        commonFaults: [
            "Tailgate won't latch", "Tailgate won't open", "Tailgate won't close",
            "Tailgate latch broken", "Tailgate handle broken", "Tailgate binding",
            "Tailgate loose", "Tailgate won't stay closed", "Tailgate mechanism broken",
            "Tailgate operation poor", "Rear gate not working"],
        procedure: "DRIVER Check operation of tailgate. Check that tailgate latches securely and operates properly.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "47",
        interval: "Weekly",
        location: "Armament Carriers",
        system: "Weapon Systems",
        keywords: [
            "armament carriers", "cargo shell door", "cargo door", "shell door",
            "door binding", "cargo door binding", "lift cylinders", "door latches",
            "wire rope", "retaining wire", "door straps", "cargo compartment door",
            "weapon carrier door", "armament door", "cargo shell", "door alignment",
            "door seal", "door warped", "door bent"],
        commonFaults: [
            "Cargo shell door binding", "Cargo door won't open", "Door latches broken",
            "Lift cylinders bent", "Wire rope damaged", "Door straps frayed",
            "Cargo door warped", "Door won't close properly", "Door alignment off",
            "Door seal not sealing", "Lift cylinders not working", "Door binding up",
            "Armament door stuck", "Cargo compartment door problems"],
        procedure: "DRIVER (TOW and armament carriers M966, M966A1, M1036, M1045, M1045A1, M1045A2, M1046, M1046A1, M1025, M1025A1, M1025A2, M1026, M1026A1, M1043, M1043A1, M1043A2, M1044, M1044A1, and M1121 only)\na. Inspect cargo shell door for bends, warping, binding, warped, and ease of operation. Inspect latching mechanisms for proper operation. Inspect lift cylinders for bends and security of mounting.\na.1. Inspect retaining wire rope for damage and security of mounting.\nb. Inspect strap assembly for frays and security of mounting.\nc. Check cargo shell door for alignment as follows:\n(1) Insert a piece of paper between the door seal and door opening.\n(2) With door closed, seal should offer resistance to pulling out paper. If door seal does not offer resistance, adjustment is required.",
        notFullyMissionCapable: "a. Lift cylinders or latches bent, warped, binding, or inoperative.\na.1. Retaining wire rope is damaged, missing, or not secured."
    },
    {
        itemNumber: "48",
        interval: "Weekly",
        location: "Patient Compartment",
        system: "Safety Systems",
        keywords: [
            "patient compartment", "ambulance compartment", "medical compartment", "attendant seat",
            "step assembly", "step latch", "patient seat", "ambulatory seat",
            "handhold straps", "footman loops", "attendant rail", "seat rail",
            "seatbelt", "step striker", "medical area", "patient area",
            "ambulance interior", "step mechanism", "seat mechanism"],
        commonFaults: [
            "Attendant seat broken", "Step assembly damaged", "Step latch not working",
            "Patient seat broken", "Handhold straps damaged", "Footman loops missing",
            "Attendant rail broken", "Seatbelt broken", "Step won't latch",
            "Seat won't adjust", "Step mechanism broken", "Seat rail damaged",
            "Patient compartment seat problems", "Ambulance seat issues"],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only) WARNING Be sure cables are securely connected to the steps before using. Failure to do so may cause injury to personnel.\na. Inspect step assembly.\nb. Check operation of step latch. Latch should securely engage step striker to secure step assembly in the stowed position.\nc. Check operation of attendant seat and rail. Inspect seat and rail for damage, missing components, and binding during operation. Ensure proper adjustment and operation of seatbelt.\nd. Check operation of ambulatory patient seat (M996 and M996A1 only). Check for damage or missing components.\ne. Inspect handhold straps and footman loops for security, damage, and missing components (M996 and M996A1 only)",
        notFullyMissionCapable: "c. Seatbelt, attendant seat, or rail is broken or missing."
    },
    {
        itemNumber: "49",
        interval: "Weekly",
        location: "Front Arctic Heater and/or Rear Troop/Cargo Heater",
        system: "Climate Control",
        keywords: [
            "heater", "arctic heater", "troop heater", "cargo heater", "winterization heater",
            "heater not working", "heater broken", "heater controls", "heater fuel lines",
            "heater wires", "heater exhaust", "fuel filter", "heater system",
            "heating system", "heater leak", "heater electrical", "cold air",
            "no heat", "heater won't start", "heater fuel", "auxiliary heater"],
        commonFaults: [
            "Heater not working", "Heater won't start", "No heat coming out",
            "Heater controls broken", "Heater fuel leak", "Heater wires broken",
            "Heater exhaust damaged", "Fuel filter leaking", "Heater electrical problem",
            "Arctic heater broken", "Troop heater not working", "Cargo heater broken",
            "Heater system failure", "Auxiliary heater problems", "Winterization heater issues"],
        procedure: "DRIVER (Vehicle w/Arctic Winterization Kit and/or Troop/Cargo Winterization Kit)\na. Check heater and heater controls for proper operation.\nb. Check fuel lines and fittings for leaks, cracks, or breaks.\nc. Check electrical cables and connections for security, or frayed or broken wires.\nd. Check heater exhaust pipe for damage, security of mounting, and missing components.\ne. Check fuel filter for leaks or damage.",
        notFullyMissionCapable: "a. Heater inoperable and mission requires heater.\nb. Class III fuel leakage is evident and mission requires heater.\nc. Frayed or broken wires.\nd. Heater exhaust damaged or components missing.\ne. Class III leak evident."
    },
    {
        itemNumber: "50",
        interval: "Weekly",
        location: "Crew Door",
        system: "Safety Systems",
        keywords: [
            "crew door", "driver door", "front door", "crew compartment door",
            "door cracked", "door broken", "door latch", "door hinges",
            "door handle", "crew door assembly", "door frame", "door seal",
            "door won't close", "door won't open", "door loose", "door damaged"],
        commonFaults: [
            "Door cracked", "Crew door broken", "Door latch broken", "Door hinges loose",
            "Door handle broken", "Door won't close properly", "Door frame cracked",
            "Door assembly damaged", "Crew door won't open", "Door parts missing",
            "Driver door cracked", "Front door damaged", "Door mechanism broken"],
        procedure: "DRIVER (M966, M966A1, M996, M996A1, M997, M997A1, M997A2, M1025, M1025A1, M1025A2, M1026, M1026A1, M1036, and M1121 only)\na. Check crew door assembly for visible cracks that would make door unserviceable or unable to secure properly.\nb. Check crew door assembly latch, hinges, and door handle for damage, looseness, or missing parts.",
        notFullyMissionCapable: "a. Visible cracks, or door does not secure properly.\nb. Loose, missing, or unserviceable parts."
    },
    {
        itemNumber: "51",
        interval: "Weekly",
        location: "Air Cleaner",
        system: "Engine",
        keywords: [
            "air cleaner", "air filter", "air intake", "air cleaner assembly",
            "weather cap", "air horn", "air intake hose", "engine air filter",
            "air cleaner damaged", "air filter housing", "intake system",
            "air cleaner loose", "air filter cover", "dirty air filter",
            "clogged air filter", "air cleaner mounting", "intake hose"],
        commonFaults: [
            "Air cleaner damaged", "Air filter housing cracked", "Weather cap damaged",
            "Air intake hose loose", "Air horn damaged", "Air cleaner mounting loose",
            "Air filter cover broken", "Air intake system damaged", "Air cleaner assembly broken",
            "Engine air filter housing damaged", "Air cleaner weather cap missing"],
        procedure: "DRIVER WARNING If NBC exposure is suspected, all air filter media should be handled by personnel wearing protective equipment. Consult your unit NBC Officer or NBC NCO for appropriate handling or disposal instructions. Check air cleaner weather cap, air cleaner assembly, air intake hose, and air horn for security of mounting and damage.",
        notFullyMissionCapable: "Evidence of damage to air cleaner weather-cap, body, air intake hose, or mounting that will allow unfiltered air to enter the engine."
    },
    {
        itemNumber: "52",
        interval: "Weekly",
        location: "Alternator Brackets",
        system: "Electrical",
        keywords: [
            "alternator brackets", "alternator bracket", "alternator mount", "alternator mounting",
            "power steering bracket", "bracket cracked", "bracket broken", "bracket loose",
            "alternator support", "mounting bracket", "alternator bolts", "bracket damage",
            "alternator loose", "charging system bracket", "electrical bracket"],
        commonFaults: [
            "Bracket cracked", "Alternator bracket broken", "Power steering bracket cracked",
            "Mounting bracket damaged", "Alternator bracket loose", "Bracket bolts loose",
            "Alternator mount cracked", "Support bracket broken", "Bracket hardware loose",
            "Alternator mounting damaged", "Electrical bracket cracked"],
        procedure: "DRIVER Visually check power steering and alternator brackets for cracks, damage, or loose bolts.",
        notFullyMissionCapable: "Damaged or cracked bracket, or loose bolts."
    },
    {
        itemNumber: "53",
        interval: "Weekly",
        location: "Cooling System",
        system: "Engine",
        keywords: [
            "cooling system", "radiator leak", "fan problems", "belt problems", "radiator",
            "cooling fan", "fan blade", "drive belt", "serpentine belt", "fan shroud",
            "engine overheating", "coolant leak", "fan pulley", "belt broken",
            "belt loose", "fan damaged", "radiator hose", "cooling hose",
            "oil cooler", "belt frayed", "fan shroud broken", "cooling fins"],
        commonFaults: [
            "Radiator leak", "Fan blade damaged", "Drive belt broken", "Cooling fan broken",
            "Fan pulley damaged", "Belt loose or frayed", "Serpentine belt broken",
            "Fan shroud cracked", "Coolant leaking", "Engine oil cooler leak",
            "Radiator fins damaged", "Cooling hoses loose", "Belt missing",
            "Fan blade bent", "Radiator support broken", "Cooling system leak"],
        procedure: "a. Check fan and fan pulley for damage.\nb. Check radiator for leaks, clogged or damaged fins, and loose or damaged hoses to and from the engine.\nc. Check support mounts, side brackets, and side bracket weldments on radiator for missing hardware, damage, or broken welds.\nNOTE Belt flutter at idle is normal in the HMMWV belt drive system. It does not necessarily indicate that the belts are loose. Belt flutter should disappear as the engine is accelerated.\nd. Check for loose, missing, broken, cracked, or frayed drive-belts (all models except \"A2\" and M1123 vehicles). Notify supervisor if loose drivebelts are suspected.\ne. For A2 and M1123 models, check for looseness, misalignment, breaks, splits, or frayed serpentine belt.\nf. Check fan shroud for damage.\ng. Check engine oil cooler and hoses for damage and leaks.",
        notFullyMissionCapable: "a. Fan blade or pulley is bent, broken, cracked, or loose.\nb. Class III leakage evident.\nc. Support mounts broken, damaged, or missing hardware. Side brackets damaged or weldments broken.\nd. Any drivebelt is missing, broken. frayed or dry rotted. Belt fiber has more than one crack 1/8-in. (3.18 mm) in depth or 50% or frays more than 2 in. (5 cm) long.\ne. Serpentine drivebelt is loose, mis-aligned (off one or more grooves on any pulley) breaks or splits in outer surface, frays on either edge if cord is broken.\nf. Fan shroud broken, cracked, or loose.\ng. Class III leak evident."
    },
    {
        itemNumber: "54",
        interval: "Weekly",
        location: "Batteries",
        system: "Electrical",
        keywords: [
            "battery dead", "battery low", "battery corrosion", "batteries", "battery",
            "battery terminals", "battery cables", "battery box", "battery fluid",
            "battery water", "battery electrolyte", "battery acid", "battery charge",
            "battery mounting", "battery hold down", "battery leak", "dead battery",
            "battery posts", "battery connections", "battery tray"],
        commonFaults: [
            "Battery dead", "Battery corroded", "Battery leaking", "Battery terminals corroded",
            "Battery cables loose", "Battery fluid low", "Battery not charging",
            "Battery box corroded", "Battery mounting loose", "Battery hold down broken",
            "Battery electrolyte low", "Battery posts damaged", "Battery connections loose",
            "Battery tray corroded", "Battery acid leak", "Battery won't hold charge"],
        procedure: "DRIVER WARNING\n• Don't smoke, have open flames, or make sparks around batteries, especially if the caps are off. Batteries can explode and cause injury or death.\n• Remove all jewelry such as rings, dog tags, bracelets, etc. If jewelry contacts battery terminal, a direct short will result, causing instant heating of tools, severe injury to personnel, or damage to equipment.\na. Remove companion seat and check batteries for damaged casing, terminal posts, and security of mounting. Notify unit maintenance if any defects are found.\nb. Electrolyte should be filled to the level/split ring in the battery filler opening (vent). If fluid is low, fill with distilled water to split ring (refer to Appendix D, item 27). If fluid is gassing (boiling), notify unit maintenance.\nNOTE Water in battery box can be caused by debris plugging battery box drain holes. If water is present, clean debris from battery box drain holes.\nc. Check battery box for corrosion or water on bottom of battery tray.",
        notFullyMissionCapable: "a. One or more batteries missing, unserviceable, leaking, terminal or cables are loose, corroded, or hold-downs are not secure."
    },
    {
        itemNumber: "55",
        interval: "Weekly",
        location: "Weapon Station",
        system: "Weapon Systems",
        keywords: [
            "weapon station", "weapon hatch", "weapon mount", "gunner hatch",
            "turret hatch", "weapon platform", "hatch damaged", "hatch cracked",
            "weapon station hatch", "brake handle", "gunner's sling", "weapon turret",
            "hatch hinge", "weapon system", "gunner station", "turret station"],
        commonFaults: [
            "Weapon hatch damaged", "Weapon station hatch cracked", "Hatch hinge broken",
            "Brake handle not working", "Gunner's sling torn", "Weapon hatch bent",
            "Turret hatch damaged", "Weapon station broken", "Hatch won't open",
            "Gunner hatch cracked", "Weapon mount damaged", "Hatch warped"],
        procedure: "DRIVER (M966, M966A1, M1036, M1045, M1045A1, M1045A2, M1046, M1046A1, M1025, M1025A1, M1025A2, M1026, M1026A1, M1043, M1043A2, M1044, M1044A1, and M1121 only)\na. Inspect weapon station hatch and hinge for bends, cracks, warped, or damaged areas.\nb. Inspect brake handle for ease of operation.\nc. Inspect gunner's sling for tears or frays.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "56",
        interval: "Weekly",
        location: "TOW Missile Rack",
        system: "Weapon Systems",
        keywords: [
            "tow missile rack", "missile rack", "tow rack", "missile storage",
            "tow missile", "rack latch", "support braces", "missile mount",
            "tow system", "missile carrier", "rack assembly", "tow launcher",
            "missile rack straps", "tow equipment", "missile stowage"],
        commonFaults: [
            "TOW rack damaged", "Missile rack broken", "TOW rack latch broken",
            "Support braces damaged", "Rack straps torn", "Missile rack won't latch",
            "TOW rack won't hold missiles", "Rack assembly broken", "Missile storage damaged",
            "TOW system rack broken", "Rack support broken"],
        procedure: "DRIVER (M966, M966A1, M1036, M1045, M1045A1, M1045A2, M1046, M1046A1, and M1121 only)\na. Inspect TOW missile rack latch assembly and support braces for presence and ease of operation.\nb. Inspect straps for tears and frays.",
        notFullyMissionCapable: "a. Rack will not stop support or stow six TOW missiles."
    },
    {
        itemNumber: "56.1",
        interval: "Weekly",
        location: "Floorboard",
        system: "Safety Systems",
        keywords: [
            "tu adapter", "TU adapter", "thermal unit adapter", "floorboard adapter",
            "floor adapter", "thermal adapter", "tu equipment", "adapter missing",
            "floorboard equipment", "thermal unit", "floor mounted adapter"],
        commonFaults: [
            "TU adapter missing", "Thermal unit adapter missing", "TU adapter broken",
            "Floor adapter damaged", "Thermal adapter not present", "TU equipment missing",
            "Adapter broken or damaged", "Floorboard adapter missing"],
        procedure: "Check for presence of TU adapter.",
        notFullyMissionCapable: "TU adapter missing or damaged."
    },
    {
        itemNumber: "57",
        interval: "Weekly",
        location: "Gunner's Platform",
        system: "Weapon Systems",
        keywords: [
            "gunner platform", "gunner's platform", "platform risers", "gunner station",
            "platform adjustment", "lock pins", "gunner stand", "platform mechanism",
            "platform won't adjust", "platform stuck", "gunner position", "platform height",
            "platform lock", "gunner platform risers", "adjustable platform"],
        commonFaults: [
            "Platform won't adjust", "Gunner platform stuck", "Platform risers binding",
            "Lock pins missing", "Platform mechanism broken", "Platform won't move",
            "Gunner platform jammed", "Platform adjustment broken", "Platform lock broken",
            "Risers won't work", "Platform height won't change"],
        procedure: "DRIVER Inspect gunner's platform risers for binding, ease of operation, or missing lock-pins.",
        notFullyMissionCapable: "Gunner's platform cannot be adjusted."
    },
    {
        itemNumber: "58",
        interval: "Weekly",
        location: "Tiedowns",
        system: "Safety Systems",
        keywords: [
            "tiedowns", "tie downs", "tiedown straps", "cargo straps", "equipment straps",
            "footman loops", "stowage brackets", "tie down straps", "cargo tiedowns",
            "equipment tiedowns", "strap assemblies", "securing straps", "load straps",
            "equipment securing", "cargo securing", "tie down system"],
        commonFaults: [
            "Tiedown straps damaged", "Tie down straps torn", "Footman loops broken",
            "Stowage brackets loose", "Cargo straps frayed", "Tiedown straps missing",
            "Equipment straps damaged", "Strap assemblies broken", "Tie downs worn out",
            "Securing straps damaged", "Load straps broken", "Tiedown hardware missing"],
        procedure: "DRIVER\na. Inspect stored equipment footman loops for presence and security of mounting. Inspect straps for tears or frays.\nb. Inspect stowage brackets, footman loops, and tiedowns for security of mounting, damage, and missing components.\nc. Inspect all tiedown strap assemblies for proper operation, frays, damage, cleanliness, and security of mounting.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "59",
        interval: "Weekly",
        location: "Bulkhead Doors",
        system: "Safety Systems",
        keywords: [
            "bulkhead doors", "bulkhead door", "interior doors", "compartment doors",
            "door won't latch", "door latch", "ambulance doors", "patient compartment doors",
            "medical compartment doors", "interior compartment doors", "divider doors",
            "partition doors", "door mechanism", "door components"],
        commonFaults: [
            "Door won't latch", "Bulkhead door broken", "Door latch not working",
            "Door won't close", "Door components missing", "Door mechanism broken",
            "Interior door damaged", "Compartment door stuck", "Door won't open",
            "Ambulance door problems", "Door adjustment needed"],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only) Check operation of bulkhead doors. Doors should securely latch when closed or fully opened. Inspect all door components for damage, adjustment, or missing components.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "60",
        interval: "Weekly",
        location: "Environment Control System",
        system: "Climate Control",
        keywords: [
            "hvac system", "air conditioning", "heating system", "ventilation system",
            "climate control", "a/c system", "heater control", "hvac filter",
            "air conditioning not working", "hvac not working", "environmental control",
            "hvac ducts", "hvac hoses", "hvac wiring", "climate system",
            "heating and cooling", "hvac controls", "air handler"],
        commonFaults: [
            "HVAC not working", "Air conditioning not working", "Heater not working",
            "HVAC filter dirty", "HVAC ducts damaged", "Climate control broken",
            "A/C system not working", "Ventilation system broken", "HVAC wiring damaged",
            "Environmental control not working", "HVAC hoses leaking", "Climate system failure",
            "Heating system broken", "HVAC controls not working"],
        procedure: "DRIVER\na. Check security of A/C heater control box mounting.\nb. Check Heating, Ventilation and Air Conditioning (HVAC) filter [para. 3-27] for dirt or debris. Clean filters of dirt and debris that would restrict air flow.\nNOTE Insufficient cooling could be a result of loss of R12. This is a gas, therefore leaks cannot be detected. If lines or fittings are suspect, the vehicle is to be considered non-mission capable and sent to Direct Support for further inspection(s).\nc. Inspect exposed HVAC system ducts, hoses, fitting lines, vents, and mounting hardware for damage, leaks, missing components, and security of mounting.\nd. Inspect exposed wiring harnesses for breaks, frayed insulation, loose or damaged connectors, and loose, damaged, or missing mounting hardware.",
        notFullyMissionCapable: "d. Wiring harness broken, frayed, or damaged. Mounting hardware missing."
    },
    {
        itemNumber: "61",
        interval: "Weekly",
        location: "NBC System",
        system: "Safety Systems",
        keywords: [
            "nbc system", "nuclear biological chemical", "chemical protection", "nbc equipment",
            "protective mask", "gas mask", "m13 mask", "nbc stowage", "chemical system",
            "biological protection", "nbc compartment", "protective equipment", "chemical gear",
            "nbc mask", "protective system", "chemical protection system", "nbc components"
        ],
        commonFaults: [
            "NBC equipment damaged", "Protective mask damaged", "NBC system not working",
            "Gas mask broken", "M13 mask damaged", "NBC stowage door broken",
            "Chemical protection equipment damaged", "NBC compartment door problems",
            "Protective equipment missing", "NBC system components loose",
            "Chemical system damaged", "NBC equipment loose"
        ],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only)\na. Inspect exposed NBC equipment for security of mounting, damage, and missing components.\nb. Inspect NBC stowage compartment door seals, hinges, latches, and straps for proper operation, damage, and missing components.\nc. Inspect M13 patient protective mask, hoses, and end connectors for damage, leaks, or missing components. Inspect adapter for stripped threads or other damage.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "62",
        interval: "Weekly",
        location: "Canvas and Bows",
        system: "Safety Systems",
        keywords: [
            "canvas top", "soft top", "canvas cover", "cargo cover", "canvas enclosure",
            "canvas torn", "soft top torn", "canvas windows", "canvas bows",
            "mounting brackets", "footman loops", "canvas straps", "top cover",
            "canvas damaged", "soft enclosure", "canvas puncture", "canvas rip"
        ],
        commonFaults: [
            "Canvas torn", "Soft top damaged", "Canvas cover ripped", "Canvas windows cracked",
            "Canvas bows broken", "Canvas straps torn", "Mounting brackets loose",
            "Footman loops damaged", "Canvas punctured", "Soft top enclosure damaged",
            "Canvas seams ripped", "Top cover damaged", "Canvas badly torn"
        ],
        procedure: "DRIVER (M998, M998A1, M1038, and M1038A1 w/Soft Top Enclosure)\na. Inspect cargo cover for tears, punctures, and ripped seams.\nb. Inspect windows for cracks and scratches.\nc. Inspect bows and mounting brackets for damage and security of mounting.\nd. Inspect footman loops and straps for tears, frays, and security of mounting.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "63",
        interval: "Weekly",
        location: "Tow Pintle",
        system: "Safety Systems",
        keywords: [
            "tow pintle", "pintle hook", "towing hook", "trailer hitch", "pintle hitch",
            "tow hook", "pintle damaged", "pintle loose", "cotter pin", "locking mechanism",
            "towing pintle", "pintle assembly", "hitch pin", "trailer connection",
            "towing equipment", "pintle mechanism"
        ],
        commonFaults: [
            "Pintle hook damaged", "Pintle hook loose", "Cotter pin missing",
            "Locking mechanism broken", "Tow pintle broken", "Pintle hitch damaged",
            "Trailer hitch loose", "Pintle assembly damaged", "Towing hook broken",
            "Pintle mechanism not working", "Hitch pin missing"
        ],
        procedure: "DRIVER Check pintle hook for looseness, damaged locking mechanism, and presence of cotter pin.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "64",
        interval: "Weekly",
        location: "Tow Hooks",
        system: "Safety Systems",
        keywords: [
            "tow hooks", "towing hooks", "front tow hook", "rear tow hook",
            "recovery hooks", "tow hook missing", "tow hook broken", "tow hook damaged",
            "front hook", "rear hook", "towing points", "recovery points",
            "tow hardware", "hook assembly", "towing equipment"
        ],
        commonFaults: [
            "Tow hook missing", "Front tow hook missing", "Rear tow hook missing",
            "Tow hook broken", "Towing hook damaged", "Recovery hook missing",
            "Tow hook loose", "Hook assembly damaged", "Towing equipment missing",
            "Front hook broken", "Rear hook broken", "Tow hardware missing"
        ],
        procedure: "DRIVER Check presence and condition of tow hooks (front and rear).",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "65",
        interval: "Weekly",
        location: "Trailer Electrical Connector",
        system: "Electrical",
        keywords: [
            "trailer connector", "trailer electrical", "trailer plug", "electrical connector",
            "trailer wiring", "connector damaged", "trailer socket", "electrical plug",
            "trailer connection", "wiring connector", "trailer harness", "electrical connection",
            "connector broken", "trailer lights connector", "electrical socket"
        ],
        commonFaults: [
            "Trailer connector damaged", "Electrical connector broken", "Trailer plug damaged",
            "Connector pins bent", "Trailer wiring damaged", "Electrical socket broken",
            "Trailer connection loose", "Connector corroded", "Trailer electrical broken",
            "Wiring connector damaged", "Trailer harness damaged"
        ],
        procedure: "DRIVER Check trailer electrical connector for damage.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "66",
        interval: "Weekly",
        location: "Parking Brake",
        system: "Brakes",
        keywords: [
            "parking brake", "emergency brake", "hand brake", "parking brake spring",
            "brake spring", "actuating lever", "parking brake lever", "e-brake",
            "brake assembly", "service brake", "combination brake", "brake mechanism",
            "parking brake broken", "brake spring broken", "brake lever"
        ],
        commonFaults: [
            "Parking brake spring broken", "Actuating lever broken", "Parking brake not working",
            "Emergency brake broken", "Hand brake spring missing", "Brake lever broken",
            "Parking brake lever damaged", "Brake spring missing", "E-brake not working",
            "Service brake assembly damaged", "Brake mechanism broken"
        ],
        procedure: "DRIVER Check combination service/parking brake assemblies; inspect parking brake for obstruction of the actuating lever or broken or missing spring.",
        notFullyMissionCapable: "Actuating lever or spring is missing or broken."
    },
    {
        itemNumber: "68",
        interval: "Monthly",
        location: "Corrosion",
        system: "Safety Systems",
        keywords: [
            "corrosion", "rust", "rusted", "corroded", "vehicle rust", "body rust",
            "frame rust", "metal corrosion", "rust damage", "corroded through",
            "rust holes", "oxidation", "vehicle corrosion", "structural rust",
            "rust spots", "corrosion damage", "rusted parts", "metal deterioration"
        ],
        commonFaults: [
            "Vehicle corroded", "Rust damage", "Corrosion present", "Rusted through",
            "Body rust", "Frame corrosion", "Metal corroded", "Rust holes",
            "Structural corrosion", "Vehicle rust damage", "Corroded parts",
            "Oxidation damage", "Rust spots", "Metal deterioration"
        ],
        procedure: "DRIVER Visually inspect vehicle for indication of corrosion or cracks and/or breaks.",
        notFullyMissionCapable: "Any corroded-through condition or cracks or breaks that would affect vehicle operation."
    },
    {
        itemNumber: "69",
        interval: "Monthly",
        location: "Tailgate",
        system: "Safety Systems",
        keywords: [
            "tailgate corrosion", "tailgate rust", "tailgate corroded", "tailgate rusted",
            "tailgate damaged", "rear gate rust", "back gate corrosion", "tailgate holes",
            "tailgate latch", "tailgate operation", "tailgate won't latch", "rusted tailgate",
            "corroded tailgate", "tailgate rust through", "tailgate deterioration"
        ],
        commonFaults: [
            "Tailgate corroded", "Tailgate rusted through", "Tailgate rust damage",
            "Tailgate corrosion", "Tailgate won't latch", "Tailgate damaged",
            "Rear gate corroded", "Tailgate rust holes", "Tailgate deteriorated",
            "Back gate rusted", "Tailgate structural damage"
        ],
        procedure: "DRIVER Check tailgate for corroded-through condition and/or damage. If tailgate does not latch securely or is damaged, notify unit maintenance.",
        notFullyMissionCapable: "Any corroded-through condition or damage that would affect vehicle operation."
    },
    {
        itemNumber: "70",
        interval: "Monthly",
        location: "Red Cross Plate",
        system: "Safety Systems",
        keywords: [
            "red cross plate", "red cross marking", "medical marking", "cross marking",
            "ambulance marking", "medical symbol", "red cross", "cross plate",
            "medical plate", "ambulance symbol", "cross latches", "cross hinges",
            "stowage compartment", "medical identification", "cross marking system"
        ],
        commonFaults: [
            "Red cross plate damaged", "Cross marking broken", "Red cross latches broken",
            "Cross hinges damaged", "Medical marking damaged", "Cross plate loose",
            "Stowage compartment door broken", "Ambulance marking damaged",
            "Medical symbol damaged", "Cross marking system broken"
        ],
        procedure: "DRIVER (M996, M996A1, M997, M997A1, and M997A2 only)\na. Check cross marking latches and hinges for proper operation, security of mounting, damage, or missing components.\nb. Inspect stowage compartment door hinge, seal, and latch for proper operation, damage, or missing components.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "71",
        interval: "Monthly",
        location: "Shelter Mount Kit",
        system: "Safety Systems",
        keywords: [
            "shelter mount", "shelter mounting", "mounting bracket", "shelter bracket",
            "mounting bolts", "shelter kit", "shelter mount kit", "mounting hardware",
            "shelter mounting bracket", "mount bolts", "bracket bolts", "shelter system",
            "mounting assembly", "shelter attachment", "mounting points"
        ],
        commonFaults: [
            "Mounting bolt missing", "Shelter bracket loose", "Mounting hardware missing",
            "Shelter mount damaged", "Bracket bolts loose", "Mounting bracket broken",
            "Shelter mounting loose", "Mount bolts missing", "Shelter kit damaged",
            "Mounting assembly broken", "Shelter attachment loose"
        ],
        procedure: "DRIVER (M1037, M1042, M1097, M1097A1, M1097A2, and M1123 only) Inspect shelter mounting bracket for security of mounting and loose or missing bolts.",
        notFullyMissionCapable: "Any mounting bolt missing."
    },
    {
        itemNumber: "72",
        interval: "Monthly",
        location: "Winch",
        system: "Safety Systems",
        keywords: [
            "winch", "winch cable", "winch controls", "recovery winch", "winch system",
            "tree saver strap", "winch line", "winch rope", "winch mechanism",
            "winch motor", "winch drum", "recovery cable", "winch operation",
            "winch cable damaged", "cable kinked", "cable frayed", "winch broken"
        ],
        commonFaults: [
            "Winch cable damaged", "Winch cable kinked", "Cable frayed or broken",
            "Tree saver strap cut", "Winch controls not working", "Winch cable broken",
            "Recovery cable damaged", "Winch system broken", "Cable has kinks",
            "Winch line damaged", "Tree strap damaged", "Winch mechanism broken"
        ],
        procedure: "DRIVER (Vehicles with winch)\na. Check winch controls for proper operation.\nb. Check winch cable for kinks, frays, or breaks.\nc. Inspect tree saver strap for cuts and abrasions. If red safety thread is visible in main body of strap, the strap shall be discarded.\nd. If it is known the strap has been overloaded, it shall be discarded.\ne. Wrap winch cable [para. 2-26.1].",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "73",
        interval: "Monthly",
        location: "Troop Seats",
        system: "Safety Systems",
        keywords: [
            "troop seats", "passenger seats", "troop seating", "seat kit", "troop seat kit",
            "lockpins", "seat lockpins", "seat mounting", "backrest", "seat backrest",
            "troop seats damaged", "seats broken", "passenger seating", "seat assembly",
            "troop compartment seats", "rear seats", "bench seats"
        ],
        commonFaults: [
            "Troop seats damaged", "Seat lockpins missing", "Troop seats broken",
            "Seat mounting loose", "Backrest damaged", "Passenger seats broken",
            "Seat assembly damaged", "Lockpins broken", "Troop seating broken",
            "Seat kit damaged", "Bench seats broken", "Rear seats damaged"
        ],
        procedure: "DRIVER (M998, M998A1, M1038, and M1038A1 w/Troop Seats Kit)\na. Inspect troop seats for missing or damaged lockpins.\nb. Inspect troop seats and backrest for security of mounting.",
        notFullyMissionCapable: "b. Mission requires troop seats and troop seats are inoperative or damaged."
    },
    {
        itemNumber: "74",
        interval: "Monthly",
        location: "TOW Power Cable",
        system: "Electrical",
        keywords: [
            "tow power cable", "tow cable", "power cable", "tow electrical cable",
            "tow system cable", "missile power cable", "battery box cable", "tow wiring",
            "cable exposed", "wire exposed", "cable chafing", "nylon braid",
            "electrical cable", "tow power", "weapon system cable"
        ],
        commonFaults: [
            "TOW cable exposed", "Power cable exposed", "TOW cable chafed",
            "Wire inside cable exposed", "Cable braid damaged", "TOW power cable damaged",
            "Electrical cable exposed", "Power cable chafing", "TOW system cable damaged",
            "Battery box cable exposed", "Missile power cable damaged"
        ],
        procedure: "DRIVER (M966, M1036, M1045, M1046 - serial numbers 1 through 19,410) Inspect TOW power cable at the point where it exits the battery box. Chafing of the nylon braid that covers the cable is acceptable. If there is evidence that the wire inside is exposed, notify unit maintenance. the cable is acceptable. If there is evidence that the wire inside is exposed, notify unit maintenance.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "75",
        interval: "Monthly",
        location: "Zippers",
        system: "Safety Systems",
        keywords: [
            "zippers", "canvas zippers", "door zippers", "top zippers", "zipper grease",
            "zipper stuck", "zipper broken", "zipper corroded", "zipper damaged",
            "canvas top zippers", "soft top zippers", "zipper operation", "zipper maintenance",
            "interlock lubricant", "zipper lubrication", "zipper problems"
        ],
        commonFaults: [
            "Zippers corroded", "Zippers stuck", "Zipper broken", "Zipper won't work",
            "Canvas zippers damaged", "Door zippers stuck", "Top zippers broken",
            "Zipper needs grease", "Zipper hard to operate", "Zipper teeth damaged",
            "Soft top zippers broken", "Zipper pull broken"
        ],
        procedure: "a. Check canvas top and door zippers for corrosion and/or damage.\nb. Apply interlock lubricant (zipper grease) (refer to appendix D, item 29) to canvas top and door zippers.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "76",
        interval: "Monthly",
        location: "Skid Plates",
        system: "Safety Systems",
        keywords: [
            "skid plates", "skid plate", "underbody protection", "skid shield",
            "protection plate", "skid plate cracked", "skid plate broken", "underbody plate",
            "belly plate", "skid protection", "shield plate", "armor plate",
            "skid plate fasteners", "plate mounting", "protection shield"
        ],
        commonFaults: [
            "Skid plate cracked", "Skid plate broken", "Skid shield damaged",
            "Protection plate cracked", "Skid plate fasteners loose", "Underbody plate damaged",
            "Skid protection broken", "Shield plate cracked", "Plate mounting loose",
            "Skid plate bent", "Protection shield damaged", "Belly plate cracked"
        ],
        procedure: "(Vehicles equipped with skid plate)\na. Inspect skid plate and shield for bends, breaks, or cracks.\nb. Inspect shields for loose fasteners, or damaged or missing components. Tighten loose fasteners, or replace damaged or missing components.",
        notFullyMissionCapable: "N/A"
    }
];

// ========================================
// M1095 5-TON TRAILER PMCS DATA
// TM 9-2330-392-13&P
// ========================================
// Items are tagged with vehicle: "m1095" and will only appear
// when the M1095 vehicle filter is selected.

const pmcsDataM1095 = [
    // -------------------------------------------------------
    // BEFORE OPERATION
    // -------------------------------------------------------
    {
        itemNumber: "T-1",
        interval: "Before",
        location: "Trailer Exterior / Overall",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: [
            "trailer damage", "body damage", "frame damage", "exterior damage", "bent frame",
            "cracked frame", "structural damage", "overall condition", "trailer bent",
            "cargo bed damage", "side boards damaged", "stake sides", "tailgate damaged",
            "headboard damage", "cargo rails broken", "sideboards broken", "trailer body bent"
        ],
        commonFaults: [
            "Frame bent or cracked", "Cargo bed damaged", "Side stakes broken",
            "Tailgate damaged", "Headboard cracked", "Structural damage to body",
            "Side boards missing or broken", "Cargo rails bent"
        ],
        procedure: "DRIVER\na. Walk around trailer and visually inspect overall condition.\nb. Check frame for bends, cracks, or breaks.\nc. Inspect cargo bed floor, side boards, headboard, and tailgate for damage that would affect cargo carrying capability.\nd. Check all stake pockets and side stakes for damage.\ne. Report any damage to unit maintenance.",
        notFullyMissionCapable: "Frame cracked, broken, or bent in a manner that affects structural integrity or safe operation."
    },
    {
        itemNumber: "T-2",
        interval: "Before",
        location: "Tires and Wheels",
        system: "Tires/Wheels",
        vehicle: "m1095",
        keywords: [
            "flat tire", "low tire", "tire pressure", "underinflated", "tire damaged",
            "bald tire", "worn tread", "tire sidewall", "sidewall crack", "bulge",
            "tire missing", "wheel missing", "lug nuts", "lug nuts missing", "lug nuts loose",
            "wheel cracked", "rim bent", "rim cracked", "tire off rim", "trailer tire flat",
            "trailer wheel", "dual tires", "trailer tire pressure", "inner tire flat",
            "outer tire flat", "trailer tire low", "spare tire", "spare wheel"
        ],
        commonFaults: [
            "Flat tire", "Low tire pressure", "Tire missing", "Bald or worn tires",
            "Sidewall crack or bulge", "Lug nuts loose or missing", "Wheel cracked",
            "Rim bent or cracked", "Tire off rim", "Inner dual tire flat",
            "Outer dual tire flat", "Spare tire unserviceable"
        ],
        procedure: "DRIVER WARNING Operating trailer with an underinflated or damaged tire may cause premature tire failure, loss of vehicle control, and injury or death to personnel.\n\na. Inspect all tires (including dual inner and outer) for presence and inflation. Tires must be inflated to 65 psi.\nb. Inspect tires for cuts, bulges, cracks, or embedded objects.\nc. Inspect tread depth — replace if tread is worn below 2/32 inch.\nd. Inspect all wheel lug nuts for presence and tightness.\ne. Inspect rims and wheels for cracks or bends.\nf. Check spare tire for serviceability and proper inflation.",
        notFullyMissionCapable: "Any tire missing, flat, or unserviceable. Lug nuts missing or loose. Rim cracked or bent."
    },
    {
        itemNumber: "T-3",
        interval: "Before",
        location: "Lunette / Pintle Hook Coupling",
        system: "Safety Systems",
        vehicle: "m1095",
        keywords: [
            "lunette", "pintle", "coupling", "pintle hook", "hitch", "trailer coupling",
            "lunette eye", "lunette bent", "lunette cracked", "lunette worn",
            "coupling loose", "pintle latch", "pintle lock", "safety pin missing",
            "coupling pin", "pintle hook latch", "draw bar", "trailer hitch broken",
            "lunette eye cracked", "coupling not secure", "loose coupling", "hitch broken"
        ],
        commonFaults: [
            "Lunette eye cracked or bent", "Pintle hook latch worn or broken",
            "Safety pin missing", "Coupling pin missing", "Lunette not seated properly",
            "Pintle latch will not lock", "Draw bar bent", "Coupling loose or insecure",
            "Pintle hook damaged", "Retaining pin missing"
        ],
        procedure: "DRIVER WARNING An improperly connected or damaged lunette/pintle coupling can cause the trailer to become uncoupled from the towing vehicle, resulting in serious injury or death and equipment damage.\n\na. Inspect lunette eye for cracks, bends, or excessive wear.\nb. Verify lunette eye is fully seated in pintle hook and latch is locked.\nc. Check that pintle hook safety pin or locking device is in place and secured.\nd. Inspect pintle hook for wear, cracks, or damage.\ne. Verify safety chains are attached to towing vehicle with minimal slack.\nf. Inspect draw bar for bends or cracks.",
        notFullyMissionCapable: "Lunette cracked, bent, or broken. Pintle latch will not lock. Safety pin missing. Draw bar cracked or broken. Safety chains missing or unserviceable."
    },
    {
        itemNumber: "T-4",
        interval: "Before",
        location: "Safety Chains",
        system: "Safety Systems",
        vehicle: "m1095",
        keywords: [
            "safety chains", "safety chain", "chain broken", "chain missing", "chain link",
            "chain damaged", "chain hooks", "chain hook broken", "chain hook missing",
            "cross chains", "trailer safety chain", "chain attached", "chain unhooked",
            "chain too long", "chain dragging", "chain slack", "chain not crossed",
            "broken link", "chain rusted", "chain corroded"
        ],
        commonFaults: [
            "Safety chain missing", "Chain link broken", "Chain hook broken or missing",
            "Safety chains not attached", "Chains dragging on ground", "Chains not crossed",
            "Broken links in chain", "Chain corroded or weakened"
        ],
        procedure: "DRIVER WARNING Safety chains must be attached any time the trailer is towed. Failure to attach safety chains could result in serious injury or death if the trailer becomes uncoupled.\n\na. Inspect both safety chains for broken links, cracks, or corrosion.\nb. Check that chain hooks are serviceable and properly engaging.\nc. Attach safety chains to towing vehicle in a crossed pattern under the draw bar.\nd. Ensure chains have sufficient slack to allow turning but do not drag on ground.\ne. Verify both chains are secured.",
        notFullyMissionCapable: "Safety chains missing, broken, or unserviceable. Chains not attached prior to operation."
    },
    {
        itemNumber: "T-5",
        interval: "Before",
        location: "Electrical Connector / Slave Receptacle",
        system: "Electrical",
        vehicle: "m1095",
        keywords: [
            "electrical connector", "trailer connector", "electrical cable", "brake lights",
            "tail lights", "lights not working", "marker lights", "connector broken",
            "connector missing", "connector pins bent", "connector corroded", "wiring harness",
            "slave receptacle", "trailer plug", "7-pin connector", "blackout lights",
            "trailer lighting", "trailer wiring", "brake light out", "turn signal out",
            "marker light out", "electrical harness damaged", "trailer electrical"
        ],
        commonFaults: [
            "Electrical connector damaged or missing", "Connector pins bent or corroded",
            "Brake lights not working", "Tail lights out", "Marker lights out",
            "Turn signals not working", "Blackout lights inoperative", "Wiring harness damaged",
            "Connector housing cracked", "Electrical cable chafed or cut"
        ],
        procedure: "DRIVER\na. Inspect 24-volt electrical connector and cable for damage, corrosion, and bent or missing pins.\nb. Connect electrical cable to towing vehicle and check operation of: stoplight/taillights, turn signals, marker lights, and blackout lights.\nc. Inspect wiring harness along trailer frame for chafing, cuts, or damage.\nd. Verify cable is properly secured and will not drag on ground.\ne. Inspect slave receptacle for damage and proper cover.",
        notFullyMissionCapable: "Stoplights or blackout stoplights inoperative. Electrical connector missing or non-functional. Wiring harness damaged causing loss of lighting."
    },
    {
        itemNumber: "T-6",
        interval: "Before",
        location: "Trailer Brakes",
        system: "Brakes",
        vehicle: "m1095",
        keywords: [
            "trailer brakes", "service brakes", "brake not working", "brake weak",
            "brake drag", "brake system", "air brakes", "brake line", "brake hose",
            "brake chamber", "brake shoe", "brake drum", "brake adjustment", "slack adjuster",
            "brake fluid", "brake lever", "parking brake", "trailer brake controller",
            "brake fade", "brakes locked", "brakes dragging", "brake pedal", "brake pull"
        ],
        commonFaults: [
            "Brakes not functioning", "Brake drag on one side", "Brake line damaged or leaking",
            "Brake hose chafed or cracked", "Brake chamber leaking", "Brake adjustment out of spec",
            "Slack adjuster worn", "Brake drum worn", "Brakes locked",
            "Brake system inoperative", "Brake fade under load"
        ],
        procedure: "DRIVER NOTE M1095 uses a surge brake system actuated by deceleration of the towing vehicle.\n\na. Inspect brake hoses and lines for cracks, chafing, cuts, or leaks.\nb. Check brake chambers and connections for security and leaks.\nc. Inspect service brake drums and visible brake components for damage.\nd. Apply vehicle brakes and check for proper trailer brake response (moderate resistance felt).\ne. Inspect slack adjusters for proper engagement.\nf. Check that brake lines are properly routed and secured along trailer frame.",
        notFullyMissionCapable: "Brake system inoperative. Brake line or hose leaking or severed. Brake chambers damaged or missing."
    },
    {
        itemNumber: "T-7",
        interval: "Before",
        location: "Landing Leg / Support Leg",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: [
            "landing leg", "support leg", "kickstand", "trailer leg", "trailer support",
            "landing gear", "jack leg", "leg bent", "leg broken", "leg missing",
            "leg crank", "leg crank missing", "leg won't retract", "leg won't extend",
            "leg stowed", "support leg retracted", "landing leg stowed", "trailer jack"
        ],
        commonFaults: [
            "Landing leg bent or broken", "Landing leg missing", "Leg will not retract",
            "Leg will not extend", "Crank handle missing", "Landing leg not properly stowed",
            "Landing leg dragging on ground", "Support leg damaged"
        ],
        procedure: "DRIVER\na. Inspect landing/support leg for bends, cracks, or breaks.\nb. Verify landing leg is fully retracted and secured in travel position.\nc. Check crank handle for presence and serviceability.\nd. Ensure landing leg locking pin or retaining device is in place.",
        notFullyMissionCapable: "Landing leg dragging on ground or will not retract to travel position."
    },
    {
        itemNumber: "T-8",
        interval: "Before",
        location: "Fluid Leaks / Undercarriage",
        system: "Fluid Systems",
        vehicle: "m1095",
        keywords: [
            "fluid leak", "oil leak", "grease leak", "brake fluid leak", "axle leak",
            "hub leak", "wheel seal leak", "differential leak", "gear oil leak",
            "puddle under trailer", "wet spot", "dripping fluid", "trailer leaking",
            "axle oil leak", "hub seal leak", "lubricant leak", "class III leak"
        ],
        commonFaults: [
            "Axle hub seal leaking", "Differential oil leak", "Brake fluid leak",
            "Wheel bearing seal leaking", "Fluid puddle under trailer",
            "Gear oil dripping from axle", "Class III leak under trailer"
        ],
        procedure: "DRIVER NOTE If leakage is detected, further investigation is needed to determine the source and severity.\n\na. Visually inspect underneath trailer for evidence of fluid leakage.\nb. Check axle hubs and wheel bearing seals for oil seepage.\nc. Inspect brake lines and fittings for fluid leaks.\nd. Check differential (if applicable) for oil leaks.\ne. Document and report any leaks to unit maintenance.",
        notFullyMissionCapable: "Any brake fluid leak. Class III leak (oil) that cannot be corrected at operator level."
    },
    {
        itemNumber: "T-9",
        interval: "Before",
        location: "Lighting System",
        system: "Electrical",
        vehicle: "m1095",
        keywords: [
            "lights", "tail lights", "brake lights", "marker lights", "clearance lights",
            "reflectors", "light out", "bulb out", "lights not working", "stoplight",
            "turn signal", "blackout lights", "marker lamp", "running lights",
            "light lens cracked", "light lens missing", "light bracket bent",
            "reflectors missing", "reflector faded", "reflector damaged"
        ],
        commonFaults: [
            "Tail lights out", "Brake/stoplights inoperative", "Marker lights out",
            "Turn signal inoperative", "Blackout lights out", "Light lens cracked or missing",
            "Reflectors missing or faded", "Light bracket bent", "Bulb burned out",
            "Clearance lights inoperative"
        ],
        procedure: "DRIVER\na. Inspect all light lenses for cracks, breaks, or missing lenses.\nb. Check all reflectors for presence and condition (not faded or damaged).\nc. Test operation of tail lights, brake/stoplights, turn signals, and marker/clearance lights.\nd. Test blackout light operation.\ne. Inspect light mounting brackets for damage.\nf. Replace any burned-out bulbs at operator level.",
        notFullyMissionCapable: "Stoplights/brake lights inoperative. Blackout stoplights inoperative. Both tail lights inoperative."
    },
    {
        itemNumber: "T-10",
        interval: "Before",
        location: "Cargo Tie-Down Rings / D-Rings",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: [
            "tie-down rings", "d-rings", "tie down", "cargo rings", "lashing rings",
            "d-ring broken", "tie-down broken", "ring missing", "ring cracked",
            "cargo lashing", "tie-down anchor", "securing cargo", "load rings",
            "ring worn", "ring bent", "tie-down chain", "cargo securement"
        ],
        commonFaults: [
            "Tie-down ring broken or cracked", "D-ring missing", "Ring bent or deformed",
            "Ring mounting welded area cracked", "Tie-down anchor damaged",
            "Ring worn beyond use", "Cargo lashing point broken"
        ],
        procedure: "DRIVER\na. Inspect all cargo tie-down rings (D-rings) for cracks, bends, or breaks.\nb. Check ring mounting points/welds for cracks or separation.\nc. Verify all rings are present — count and compare against TM specifications.\nd. Report any damaged or missing tie-down rings to unit maintenance.",
        notFullyMissionCapable: "Tie-down rings missing or damaged to the extent that cargo cannot be properly secured."
    },
    {
        itemNumber: "T-11",
        interval: "Before",
        location: "Tailgate",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: [
            "tailgate", "tail gate", "tailgate broken", "tailgate won't open", "tailgate won't close",
            "tailgate latch", "tailgate pin", "tailgate hinge", "tailgate chain",
            "tailgate missing", "tailgate bent", "drop gate", "rear gate",
            "tailgate lock", "tailgate latch broken", "gate chain", "tailgate chain broken"
        ],
        commonFaults: [
            "Tailgate latch broken", "Tailgate pin missing", "Tailgate hinge damaged",
            "Tailgate chain broken or missing", "Tailgate will not open or close properly",
            "Tailgate bent preventing closure", "Tailgate missing"
        ],
        procedure: "DRIVER\na. Inspect tailgate for bends, cracks, or breaks.\nb. Check tailgate hinges for damage and proper operation.\nc. Inspect tailgate latch and locking pins for serviceability.\nd. Check tailgate chains for presence and condition.\ne. Verify tailgate opens, closes, and latches securely.",
        notFullyMissionCapable: "Tailgate missing or damaged to the extent that cargo cannot be retained."
    },
    // -------------------------------------------------------
    // DURING OPERATION
    // -------------------------------------------------------
    {
        itemNumber: "T-12",
        interval: "During",
        location: "Trailer Tracking / Steering",
        system: "Safety Systems",
        vehicle: "m1095",
        keywords: [
            "trailer sway", "trailer fishtail", "trailer wandering", "trailer pulling",
            "trailer tracking", "trailer steering", "trailer drifting", "trailer bouncing",
            "trailer oscillation", "trailer instability", "trailer not tracking",
            "trailer pushing tow vehicle", "trailer pushing", "trailer pushing vehicle",
            "load shift", "cargo shift", "trailer instability", "trailer rocking"
        ],
        commonFaults: [
            "Trailer swaying or fishtailing", "Trailer not tracking straight",
            "Trailer pushing towing vehicle during braking", "Trailer bouncing excessively",
            "Load shifting during movement", "Trailer drifting to one side",
            "Trailer oscillating at speed", "Cargo not secured"
        ],
        procedure: "DRIVER\na. Monitor trailer tracking — trailer should follow directly behind towing vehicle without excessive sway.\nb. Listen for unusual noises (banging, grinding, squealing) from trailer during operation.\nc. Watch for trailer sway or fishtailing; if occurs, reduce speed immediately.\nd. Monitor for evidence of load shift — do not allow unsecured cargo.\ne. Check that trailer is not pushing the tow vehicle during braking, which indicates brake malfunction.\nf. If trailer becomes unstable, slow down gradually and pull over safely. Do not brake suddenly.",
        notFullyMissionCapable: "Trailer severely swaying or fishtailing and cannot be controlled. Trailer brakes completely inoperative during operation."
    },
    {
        itemNumber: "T-13",
        interval: "During",
        location: "Lights and Electrical",
        system: "Electrical",
        vehicle: "m1095",
        keywords: [
            "lights out during operation", "lights stopped working", "trailer lights flickering",
            "electrical connection loose", "lights intermittent", "stoplight out while driving",
            "brake light failure", "marker lights went out", "wiring short",
            "trailer electrical problem", "lights lost power", "connector pulling out"
        ],
        commonFaults: [
            "Lights flickering or intermittent", "Electrical connector came loose",
            "Brake lights failed during operation", "Marker lights out while moving",
            "Wiring short circuit", "Lights lost power during movement"
        ],
        procedure: "DRIVER\na. Periodically check via towing vehicle mirrors that trailer lights are functioning.\nb. If lights fail during operation, pull over safely at the first opportunity.\nc. Check electrical connector for looseness or disconnection.\nd. Inspect cable for damage or disconnection.\ne. Do not continue operation with inoperative stoplights or blackout lights during tactical/night operations.",
        notFullyMissionCapable: "Stoplights inoperative during movement."
    },
    {
        itemNumber: "T-14",
        interval: "During",
        location: "Tires / Wheels",
        system: "Tires/Wheels",
        vehicle: "m1095",
        keywords: [
            "tire blowout", "tire failure", "tire flat while driving", "tire blew out",
            "loud bang from trailer", "trailer leaning", "trailer tire flat",
            "trailer pulling to side", "thumping noise", "trailer vibration",
            "tire noise", "rubbing noise from trailer", "wheel coming off",
            "lug nuts loosening", "wobble from trailer", "trailer wobble"
        ],
        commonFaults: [
            "Tire blowout while moving", "Tire goes flat during operation",
            "Trailer leaning or tilting to one side", "Thumping or vibration from tire",
            "Wheel wobble indicating loose lug nuts", "Rubbing noise from tire",
            "Trailer pulls to one side"
        ],
        procedure: "DRIVER WARNING If a tire blows out, do not brake suddenly. Maintain control, gradually reduce speed, and pull over safely.\n\na. Listen for unusual sounds from trailer tires — thumping, rubbing, or popping.\nb. Watch mirrors for signs of trailer leaning or tire smoke.\nc. If a tire failure is suspected, pull over at the first safe opportunity.\nd. Check trailer for any obvious tire damage before continuing.\ne. Do not exceed posted speed limits or recommended towing speeds.",
        notFullyMissionCapable: "Tire failure/blowout during operation. Trailer tilting due to failed tire. Wheel coming loose."
    },
    {
        itemNumber: "T-15",
        interval: "During",
        location: "Coupling / Hitch",
        system: "Safety Systems",
        vehicle: "m1095",
        keywords: [
            "coupling noise", "banging from hitch", "rattling at hitch", "coupling loose",
            "lunette loose", "pintle noise", "coupling banging", "hitch clunking",
            "coupling movement", "trailer bouncing at hitch", "excessive coupling play",
            "pintle worn", "coupling clunking sound", "loose connection at hitch"
        ],
        commonFaults: [
            "Banging or clunking noise at coupling", "Excessive play in coupling",
            "Pintle hook worn causing loose coupling", "Lunette bouncing in pintle",
            "Coupling rattling during movement"
        ],
        procedure: "DRIVER\na. Listen for banging, clunking, or rattling noises originating from the trailer coupling area during operation.\nb. Excessive noise from coupling area may indicate worn pintle hook or lunette — report to unit maintenance.\nc. If coupling appears to have separated or is about to separate, stop immediately.",
        notFullyMissionCapable: "Coupling separated or imminent separation risk during operation."
    },
    // -------------------------------------------------------
    // AFTER OPERATION
    // -------------------------------------------------------
    {
        itemNumber: "T-16",
        interval: "After",
        location: "Trailer Exterior / Overall",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: [
            "damage check after", "post operation check", "trailer damage after mission",
            "new damage", "fresh damage", "body damage after", "frame damage after",
            "dents after", "new scratches", "impact damage", "road damage",
            "post-mission inspection", "after operation inspection"
        ],
        commonFaults: [
            "New damage acquired during operation", "Frame bent from road hazard",
            "Body damage from impact", "Cargo bed damaged during loading/unloading",
            "Side stakes damaged", "Tailgate damaged during operation"
        ],
        procedure: "DRIVER\na. Walk around trailer and inspect for any new damage acquired during operation.\nb. Check frame, cargo bed, side boards, and tailgate for new damage.\nc. Compare to pre-operation condition.\nd. Document and report any new damage on DA Form 5988-E.",
        notFullyMissionCapable: "Any new damage that affects structural integrity or safe operation."
    },
    {
        itemNumber: "T-17",
        interval: "After",
        location: "Tires and Wheels",
        system: "Tires/Wheels",
        vehicle: "m1095",
        keywords: [
            "tire check after", "tire damage after", "flat tire after", "tire worn after",
            "lug nuts after", "wheel check after", "tire cuts", "tire puncture after",
            "embedded object tire", "tire heat", "hot tire", "hot wheel", "hot hub",
            "brake drag heat", "wheel bearing hot", "hub temperature after"
        ],
        commonFaults: [
            "Tire damage acquired during operation", "Lug nuts loosened during operation",
            "Embedded objects (nails, debris) in tires", "Hot wheel hub indicating brake drag",
            "Hot tire from dragging brakes", "Tire flats discovered after operation"
        ],
        procedure: "DRIVER CAUTION Do not touch wheel hubs immediately after operation — hubs may be extremely hot and cause burns.\n\na. Check all tires for new cuts, punctures, or embedded objects.\nb. Check all lug nuts for looseness.\nc. Carefully check (without touching) wheel hubs for signs of excessive heat — discoloration, smoke, or burning smell indicating brake drag or bearing failure.\nd. Inspect tires for any flats or pressure loss.\ne. Report any discrepancies to unit maintenance.",
        notFullyMissionCapable: "Tire flat or damaged. Lug nuts missing. Signs of wheel bearing failure (excessive heat, grinding)."
    },
    {
        itemNumber: "T-18",
        interval: "After",
        location: "Fluid Leaks / Undercarriage",
        system: "Fluid Systems",
        vehicle: "m1095",
        keywords: [
            "fluid leak after", "oil leak after", "brake fluid after", "puddle after",
            "new leak", "axle leak after", "hub leak after", "brake line leak after",
            "leaking after operation", "wet spot after", "dripping after mission",
            "post mission leak", "class III after"
        ],
        commonFaults: [
            "New fluid leak under trailer after operation", "Axle hub seal leaking",
            "Brake line leak discovered after mission", "Differential oil leak",
            "Wheel bearing seal failure leaking"
        ],
        procedure: "DRIVER NOTE Check for leaks immediately after operation while any leaks will still be active.\n\na. Inspect underneath trailer for any new fluid leaks.\nb. Check axle hubs and wheel seals for oil leakage.\nc. Inspect brake lines and connections for leaks.\nd. Document and report all new leaks on DA Form 5988-E.",
        notFullyMissionCapable: "Active brake fluid leak. Class III leak that cannot be corrected at operator level."
    },
    {
        itemNumber: "T-19",
        interval: "After",
        location: "Electrical Connector / Lighting",
        system: "Electrical",
        vehicle: "m1095",
        keywords: [
            "electrical after", "lights after", "connector after", "wiring damage after",
            "lights working after", "check lights after", "cable damage after",
            "connector damage after", "burned connector", "melted wiring", "short circuit"
        ],
        commonFaults: [
            "Electrical connector damaged during operation", "Wiring chafed or cut",
            "Lights failed after operation", "Connector burned or melted",
            "Cable pulled out during operation", "Short circuit in wiring harness"
        ],
        procedure: "DRIVER\na. Disconnect electrical cable from towing vehicle.\nb. Inspect connector and cable for damage sustained during operation.\nc. Inspect wiring harness along trailer frame for new chafing, cuts, or damage.\nd. Stow electrical cable properly to prevent damage.\ne. Report any wiring damage to unit maintenance.",
        notFullyMissionCapable: "Electrical cable or connector damaged and cannot provide lighting during next operation."
    },
    {
        itemNumber: "T-20",
        interval: "After",
        location: "Lunette / Safety Chains / Coupling",
        system: "Safety Systems",
        vehicle: "m1095",
        keywords: [
            "lunette after", "coupling after", "safety chains after", "pintle after",
            "unhook trailer", "disconnect trailer", "uncouple trailer",
            "lunette wear check", "pintle wear", "coupling wear", "chain condition after"
        ],
        commonFaults: [
            "Lunette showing new wear from operation", "Pintle hook worn",
            "Safety chain hooks damaged during operation", "Coupling hardware worn",
            "Lunette eye deformed from hard coupling"
        ],
        procedure: "DRIVER\na. After uncoupling from towing vehicle, inspect lunette eye for new wear, deformation, or cracks.\nb. Inspect safety chain hooks for damage.\nc. Store safety chains properly on trailer to prevent damage.\nd. Check draw bar for new bends or cracks.\ne. Inspect pintle latch condition (performed by towing vehicle crew).",
        notFullyMissionCapable: "Lunette cracked or broken. Safety chains damaged or missing. Draw bar cracked or broken."
    },
    {
        itemNumber: "T-21",
        interval: "After",
        location: "Brakes",
        system: "Brakes",
        vehicle: "m1095",
        keywords: [
            "brakes after", "brake check after", "brake drag after", "hot brakes",
            "brake smoke", "brake smell", "burning brake smell", "brakes adjusted",
            "brake adjustment after", "brake wear after", "brake fade after"
        ],
        commonFaults: [
            "Brakes dragging after operation (hot drums)", "Burning smell from brakes",
            "Brake fade experienced during operation", "Brake adjustment needed",
            "Brake drum discolored from heat", "Brake line leaking after operation"
        ],
        procedure: "DRIVER CAUTION Do not touch brake drums immediately after operation — may be extremely hot.\n\na. Check for burning smell from brake area indicating brake drag or overheating.\nb. Visually inspect visible brake components for smoke or heat damage.\nc. Check brake lines for leaks.\nd. If excessive heat was detected during operation (brake drag), report to unit maintenance for brake adjustment.",
        notFullyMissionCapable: "Brake system inoperative or brake line leaking."
    },
    // -------------------------------------------------------
    // WEEKLY
    // -------------------------------------------------------
    {
        itemNumber: "T-22",
        interval: "Weekly",
        location: "Wheel Bearing Lubrication / Hubs",
        system: "Fluid Systems",
        vehicle: "m1095",
        keywords: [
            "wheel bearing", "hub lubrication", "hub grease", "bearing grease",
            "bearing lube", "wheel hub", "hub seal", "bearing check weekly",
            "hub oil level", "bearing grease weekly", "axle hub weekly",
            "bearing worn", "bearing dry", "grinding noise bearing"
        ],
        commonFaults: [
            "Wheel bearing dry or inadequately lubricated", "Hub grease contaminated",
            "Hub seal leaking", "Bearing grease below level", "Bearing showing wear",
            "Hub oil level low", "Contaminated bearing grease"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect each wheel hub for evidence of lubricant leakage at seals.\nb. Check hub oil level (oil-lubricated hubs) — level should be at center of sight glass.\nc. Inspect hub caps for security and leaks.\nd. Check for unusual noise from wheel bearings during a short movement.\ne. Report any bearing noise or hub leaks to unit maintenance for service.",
        notFullyMissionCapable: "Hub seal leaking heavily. Bearing noise indicating imminent failure."
    },
    {
        itemNumber: "T-23",
        interval: "Weekly",
        location: "Spring Assemblies / Suspension",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: [
            "leaf springs", "springs broken", "spring broken", "spring cracked",
            "spring clip", "U-bolt", "U-bolt loose", "spring hanger", "spring shackle",
            "suspension", "trailer suspension", "spring worn", "spring sag",
            "spring leaves cracked", "spring center bolt", "overload spring",
            "suspension noise", "trailer bouncing", "rough ride", "spring eye worn"
        ],
        commonFaults: [
            "Leaf spring broken or cracked", "Spring U-bolt loose", "Spring hanger cracked",
            "Spring shackle worn", "Spring center bolt broken", "Spring eye worn",
            "Leaf spring sag", "Spring clip missing", "Spring leaves separated"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect all leaf spring assemblies for broken, cracked, or missing leaves.\nb. Check spring U-bolts for tightness and presence.\nc. Inspect spring hangers and shackles for cracks, wear, or damage.\nd. Check spring center bolts for presence and tightness.\ne. Inspect spring eye bushings for wear or deterioration.\nf. Check for equal spring height on both sides — sagging indicates broken or weak springs.\ng. Report all discrepancies to unit maintenance.",
        notFullyMissionCapable: "Leaf spring broken. Spring U-bolt missing. Spring hanger cracked through. Suspension component failure affecting safe operation."
    },
    {
        itemNumber: "T-24",
        interval: "Weekly",
        location: "Axle / Differential",
        system: "Fluid Systems",
        vehicle: "m1095",
        keywords: [
            "axle", "differential", "axle oil", "diff oil", "axle fluid",
            "differential fluid level", "axle housing", "axle shaft", "axle bent",
            "differential leak weekly", "axle leak weekly", "gear oil level",
            "axle check weekly", "differential check", "axle oil level", "fill plug"
        ],
        commonFaults: [
            "Differential oil level low", "Axle housing leaking", "Gear oil contaminated",
            "Axle shaft damaged", "Differential fill plug missing", "Differential fluid low",
            "Axle vent plugged causing pressure buildup"
        ],
        procedure: "DRIVER/MAINTAINER\na. Check differential oil level at fill/level plug — oil should be at bottom of plug opening.\nb. Inspect axle housing for leaks, cracks, or damage.\nc. Check differential vent to ensure it is not clogged.\nd. Inspect axle shafts for bends or damage.\ne. Check fill plug for presence and security.\nf. Report low oil level or leaks to unit maintenance.",
        notFullyMissionCapable: "Differential oil severely low or absent. Axle housing cracked or leaking severely."
    },
    {
        itemNumber: "T-25",
        interval: "Weekly",
        location: "Brake System Weekly Inspection",
        system: "Brakes",
        vehicle: "m1095",
        keywords: [
            "brake inspection weekly", "brake shoes weekly", "brake drum weekly",
            "brake adjustment weekly", "brake linings", "brake wear weekly",
            "brake hardware weekly", "slack adjuster weekly", "brake chamber weekly",
            "brake line inspection weekly", "brake hose weekly", "brake condition"
        ],
        commonFaults: [
            "Brake lining worn below minimum", "Brake drum scored or grooved",
            "Brake adjustment excessive", "Brake hardware missing or damaged",
            "Slack adjuster out of adjustment", "Brake chamber leaking",
            "Brake line cracked or chafed", "Brake shoe cracked"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect brake lines and hoses for cracks, chafing, or leaks along their full length.\nb. Check all brake line connections and fittings for tightness and leaks.\nc. Inspect brake chambers for mounting security and leaks.\nd. Check slack adjusters for proper adjustment — refer to TM for specifications.\ne. Inspect visible portions of brake drum and lining through inspection holes for wear.\nf. Report brake lining wear, adjustment needs, or brake hardware defects to unit maintenance.",
        notFullyMissionCapable: "Brake system inoperative. Brake lines leaking. Brake lining worn below minimum thickness."
    },
    {
        itemNumber: "T-26",
        interval: "Weekly",
        location: "Lunette Eye Lubrication",
        system: "Safety Systems",
        vehicle: "m1095",
        keywords: [
            "lunette lube", "lunette grease", "lunette lubrication", "pintle lube",
            "coupling grease", "lunette eye grease", "lubricate lunette",
            "lunette dry", "coupling dry", "grease lunette", "lubricate coupling"
        ],
        commonFaults: [
            "Lunette eye dry — no lubrication", "Lunette eye showing excessive wear from lack of lubrication",
            "Coupling point corroded from no grease", "Lunette dry and squeaking"
        ],
        procedure: "DRIVER/MAINTAINER\na. Clean lunette eye of old grease, dirt, and debris.\nb. Apply GAA (Grease, Automotive and Artillery) to lunette eye bearing surface.\nc. Inspect lunette eye for cracks or wear during lubrication.\nd. Check pintle hook contact surface — apply light film of grease.\ne. Document lubrication on DA Form 2404/5988-E.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "T-27",
        interval: "Weekly",
        location: "Landing Leg / Support Leg",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: [
            "landing leg weekly", "support leg weekly", "leg lubrication", "leg grease",
            "leg operation weekly", "leg stiff", "leg hard to operate", "crank stiff",
            "leg corroded", "landing gear weekly", "leg mechanism weekly"
        ],
        commonFaults: [
            "Landing leg stiff or difficult to operate", "Leg crank mechanism worn",
            "Landing leg corroded", "Leg mechanism binding", "Crank handle loose or damaged"
        ],
        procedure: "DRIVER/MAINTAINER\na. Operate landing leg through full range of motion to check for binding or stiffness.\nb. Lubricate landing leg screw mechanism with engine oil (OE/HDO).\nc. Check crank handle for security and proper operation.\nd. Inspect for corrosion and clean as needed.\ne. Verify leg locks properly in travel position.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "T-28",
        interval: "Weekly",
        location: "Electrical Wiring Harness",
        system: "Electrical",
        vehicle: "m1095",
        keywords: [
            "wiring harness weekly", "wiring inspection weekly", "wire chafing",
            "wiring damage weekly", "wiring corrosion", "connector weekly",
            "electrical weekly", "wiring clamps", "wiring secured", "harness secured",
            "wire routing", "exposed wire", "bare wire", "corroded connector weekly"
        ],
        commonFaults: [
            "Wiring harness chafed against frame", "Wire insulation damaged",
            "Connector corroded", "Wiring clamps missing or loose",
            "Exposed bare wire", "Wiring harness not properly secured",
            "Connector housing cracked"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect entire wiring harness along trailer frame for chafing, cuts, or damage.\nb. Check all wiring clamps and securing hardware for presence and tightness.\nc. Inspect electrical connector for corrosion, bent pins, or damaged housing.\nd. Verify wiring is properly routed away from heat sources and moving components.\ne. Check junction box (if equipped) for security and moisture intrusion.\nf. Clean corroded connector pins with electrical contact cleaner.",
        notFullyMissionCapable: "Wiring damage causing loss of stoplights or blackout lights."
    },
    // -------------------------------------------------------
    // MONTHLY
    // -------------------------------------------------------
    {
        itemNumber: "T-29",
        interval: "Monthly",
        location: "Tire Rotation / Wear Measurement",
        system: "Tires/Wheels",
        vehicle: "m1095",
        keywords: [
            "tire rotation", "tire wear measurement", "tread depth", "tread measurement",
            "tire depth gauge", "uneven tire wear", "tire rotation monthly",
            "wear pattern", "tire age", "tire cracking", "ozone cracking", "dry rot",
            "sidewall check monthly", "tire inspection monthly", "tread wear indicator"
        ],
        commonFaults: [
            "Uneven tire wear pattern", "Tread worn below 2/32 inch",
            "Sidewall cracking or dry rot", "Tires need rotation", "Age-cracked tires",
            "Uneven wear indicating alignment or mechanical issue",
            "Tread wear indicator showing"
        ],
        procedure: "DRIVER/MAINTAINER\na. Measure tread depth on all tires using tread depth gauge — minimum 2/32 inch.\nb. Inspect all tires for uneven wear patterns (indicates alignment, overloading, or inflation issues).\nc. Inspect sidewalls for cracking, ozone checking, or dry rot.\nd. Check tire date codes for age — tires over 5 years old require close inspection.\ne. Rotate tires per unit SOP and TM specifications if authorized at operator level.\nf. Report tire defects and uneven wear to unit maintenance.",
        notFullyMissionCapable: "Tires worn below 2/32 inch tread depth. Sidewall damage (bulge, cord showing). Tires with extensive dry rot or age cracking."
    },
    {
        itemNumber: "T-30",
        interval: "Monthly",
        location: "Wheel Lug Nuts / Torque",
        system: "Tires/Wheels",
        vehicle: "m1095",
        keywords: [
            "lug nut torque", "wheel torque", "lug nuts monthly", "torque lug nuts",
            "lug nuts loose", "lug nut check monthly", "wheel fasteners monthly",
            "stud condition", "wheel stud broken", "missing lug nuts monthly",
            "wheel mounting monthly", "lug nut torque spec", "re-torque"
        ],
        commonFaults: [
            "Lug nuts not torqued to specification", "Lug nuts loose",
            "Lug nuts missing", "Wheel stud broken or damaged",
            "Lug nut threads stripped", "Rust preventing proper torque"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect all lug nuts for presence.\nb. Check lug nuts for looseness — tighten hand-tight and then torque to specification (refer to TM — typically 300-450 ft-lbs for 5-ton trailer).\nc. Inspect wheel studs for damage, stripping, or breakage.\nd. Check for signs of wheel movement (shiny metal around lug nut contact surface indicates looseness).\ne. Report broken or stripped studs to unit maintenance.",
        notFullyMissionCapable: "Lug nuts missing. Wheel studs broken. Lug nuts cannot be torqued to specification."
    },
    {
        itemNumber: "T-31",
        interval: "Monthly",
        location: "Frame and Cross Members",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: [
            "frame inspection monthly", "frame cracks", "frame welds", "cross member",
            "cross member cracked", "frame rust", "frame corrosion", "frame integrity",
            "structural inspection", "weld cracked", "frame bent", "frame check monthly",
            "frame repair needed", "structural cracks", "trailer frame monthly"
        ],
        commonFaults: [
            "Frame crack at weld point", "Cross member cracked or broken",
            "Frame rust through", "Weld failure at stress point",
            "Frame bent from overloading", "Structural corrosion",
            "Frame twist or misalignment"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect main frame rails for cracks, especially at weld joints and stress points.\nb. Inspect all cross members for cracks, bends, or breaks.\nc. Check all frame weld joints for cracks or separation.\nd. Inspect for excessive corrosion that may have weakened frame.\ne. Check frame alignment — trailer should be level and not twisted.\nf. Report any cracks, broken welds, or significant corrosion to unit maintenance. Do not operate with cracked frame rails.",
        notFullyMissionCapable: "Frame rail cracked or broken. Cross member broken. Weld failure on primary structural members."
    },
    {
        itemNumber: "T-32",
        interval: "Monthly",
        location: "Brake System — Full Inspection",
        system: "Brakes",
        vehicle: "m1095",
        keywords: [
            "brake full inspection", "brake monthly", "brake drum monthly", "brake lining monthly",
            "brake shoe monthly", "brake hardware monthly", "brake adjustment monthly",
            "slack adjuster monthly", "brake performance monthly", "stopping distance",
            "brake functional test", "brake system monthly", "brake chamber monthly",
            "brake return spring", "brake anchor pin", "brake spider"
        ],
        commonFaults: [
            "Brake lining worn below minimum", "Brake drum scored or out of round",
            "Brake hardware corroded or missing", "Slack adjuster out of adjustment",
            "Brake anchor pins worn", "Brake return springs weak or broken",
            "Brake spider cracked", "Brake performance degraded"
        ],
        procedure: "DRIVER/MAINTAINER NOTE Monthly brake inspection may require removal of wheels for full access — coordinate with unit maintenance.\n\na. Perform full inspection of brake system with wheels removed if necessary.\nb. Measure brake lining thickness — replace if below minimum per TM specifications.\nc. Inspect brake drums for scoring, cracking, or out-of-round condition.\nd. Check all brake hardware (return springs, anchor pins, adjusters) for condition.\ne. Adjust brakes per TM specifications.\nf. Inspect brake chambers, diaphragms, and pushrods.\ng. Check brake lines and hoses throughout entire system.\nh. Perform functional test — brakes should engage smoothly and release fully.\ni. Document inspection and any findings on DA Form 2404.",
        notFullyMissionCapable: "Brakes inoperative. Brake lining below minimum thickness. Brake drum cracked. Brake line leaking."
    },
    {
        itemNumber: "T-33",
        interval: "Monthly",
        location: "Coupling Devices — Full Inspection",
        system: "Safety Systems",
        vehicle: "m1095",
        keywords: [
            "lunette monthly", "coupling monthly", "safety chain monthly", "pintle monthly",
            "coupling wear measurement", "lunette wear", "draw bar monthly",
            "coupling devices monthly", "safety chain inspection monthly",
            "lunette eye wear", "coupling hardware monthly", "towing hardware monthly"
        ],
        commonFaults: [
            "Lunette eye worn beyond wear limit", "Draw bar bent or cracked",
            "Safety chain links worn through", "Safety chain hooks worn",
            "Coupling hardware corroded", "Safety pin worn or damaged",
            "Lunette eye diameter out of spec from wear"
        ],
        procedure: "DRIVER/MAINTAINER\na. Measure lunette eye diameter for wear — refer to TM for wear limits.\nb. Inspect draw bar for bends, cracks, or corrosion.\nc. Inspect all safety chain links for wear, stretching, or cracking.\nd. Check safety chain hooks and latches for wear and proper function.\ne. Inspect all coupling hardware (pins, clips, safety devices) for condition.\nf. Lubricate all coupling points per lubrication order.\ng. Replace worn components that exceed TM wear limits.",
        notFullyMissionCapable: "Lunette eye worn beyond TM wear limit. Safety chains worn through or broken. Draw bar cracked. Coupling hardware missing."
    },
    {
        itemNumber: "T-34",
        interval: "Monthly",
        location: "Cargo Bed and Sideboards",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: [
            "cargo bed monthly", "floor boards monthly", "bed floor monthly", "cargo floor",
            "deck boards", "floor planks", "rotted floor", "rusted bed floor",
            "cargo bed inspection", "sideboards monthly", "stake sides monthly",
            "cargo rails monthly", "tie-down rings monthly", "D-rings monthly",
            "cargo retention monthly", "bed condition monthly"
        ],
        commonFaults: [
            "Floor boards rotted or cracked", "Cargo bed floor rusted through",
            "Sideboards broken or missing", "Stake pockets damaged",
            "Tie-down rings cracked or broken", "Cargo rails bent",
            "Floor boards loose or missing", "Metal bed floor corroded through"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect cargo bed floor planks (wood) for rot, cracks, or breaks.\nb. Inspect metal bed floor for rust, corrosion, or holes.\nc. Check all sideboards for damage, breaks, or missing boards.\nd. Inspect all stake pockets for damage or distortion.\ne. Check all cargo tie-down rings (D-rings) for cracks, wear, or missing rings.\nf. Inspect cargo rails and side stakes for damage.\ng. Verify all cargo retention hardware is serviceable.\nh. Replace damaged floor boards, sideboards, or tie-down rings per TM.",
        notFullyMissionCapable: "Cargo bed floor structurally unsound. Cargo tie-down rings missing or damaged to where cargo cannot be secured."
    },
    {
        itemNumber: "T-35",
        interval: "Monthly",
        location: "Suspension — Full Inspection",
        system: "Body/Frame",
        vehicle: "m1095",
        keywords: [
            "suspension monthly", "leaf spring monthly", "spring monthly", "U-bolt monthly",
            "spring hanger monthly", "shackle monthly", "spring bushing monthly",
            "equalizer beam monthly", "bogie monthly", "suspension full check",
            "spring torque monthly", "suspension alignment monthly"
        ],
        commonFaults: [
            "Spring U-bolts loose — torque required", "Spring eye bushings worn through",
            "Spring hanger cracks", "Equalizer beam (bogie) worn or cracked",
            "Spring shackle worn", "Suspension out of alignment",
            "Spring leaves cracked or missing"
        ],
        procedure: "DRIVER/MAINTAINER\na. Torque all spring U-bolts per TM specifications.\nb. Inspect spring eye bushings for wear — replace if worn through.\nc. Inspect spring hangers for cracks, distortion, or weld failures.\nd. Inspect equalizer beam/bogie for cracks and wear.\ne. Check spring shackles for wear and proper pin retention.\nf. Inspect all spring leaves for cracks, breaks, or missing leaves.\ng. Check suspension alignment — axles should be square to frame.\nh. Report all discrepancies to unit maintenance.",
        notFullyMissionCapable: "Spring broken. U-bolts missing. Equalizer beam cracked or broken. Spring hanger separated from frame."
    },
    {
        itemNumber: "T-36",
        interval: "Monthly",
        location: "Lighting System — Full Functional Test",
        system: "Electrical",
        vehicle: "m1095",
        keywords: [
            "lighting monthly", "lights monthly", "full light test", "light functional test",
            "all lights check monthly", "light bulbs monthly", "reflectors monthly",
            "lens condition monthly", "blackout lights monthly", "marker lights monthly",
            "light mounting monthly", "light bracket monthly", "electrical test monthly"
        ],
        commonFaults: [
            "Bulbs burned out", "Light lenses cracked or fogged", "Reflectors faded or missing",
            "Light mounting brackets corroded", "Wiring connector corroded causing intermittent lights",
            "Blackout lights inoperative", "Marker lights intermittent"
        ],
        procedure: "DRIVER/MAINTAINER\na. Connect trailer to towing vehicle and perform full lighting system functional test.\nb. Test all modes: normal tail/brake/turn, blackout (if equipped).\nc. Inspect all light lenses for cracks, yellowing, or fogging — replace if needed.\nd. Check all reflectors for condition and proper reflection.\ne. Inspect light mounting brackets for corrosion or damage.\nf. Check all bulbs and replace burned-out bulbs.\ng. Inspect wiring connector — clean and treat with electrical contact cleaner.\nh. Document all replaced bulbs and repairs.",
        notFullyMissionCapable: "Stoplights inoperative. Blackout lights inoperative during tactical operations. Both tail lights inoperative."
    }
];

// NOTE: M1095 trailer data is handled in trailer-script.js — not merged here.

const vehicleMapping = {
    // Cargo/Troop Carriers
    'm998': ['M998', 'M998A1'],
    'm1038': ['M1038', 'M1038A1'],

    // Heavy Variants
    'm1097': ['M1097', 'M1097A1', 'M1097A2'],
    'm1123': ['M1123'],

    // TOW Carriers
    'm966': ['M966', 'M966A1', 'M1121'],
    'm1036': ['M1036'],
    'm1045': ['M1045', 'M1045A1', 'M1045A2'],
    'm1046': ['M1046', 'M1046A1'],

    // Armament Carriers
    'm1025': ['M1025', 'M1025A1', 'M1025A2'],
    'm1026': ['M1026', 'M1026A1'],
    'm1043': ['M1043', 'M1043A1', 'M1043A2'],
    'm1044': ['M1044', 'M1044A1'],

    // Shelter Carriers
    'm1037': ['M1037'],
    'm1042': ['M1042'],

    // Ambulances
    'm996': ['M996', 'M996A1'],
    'm997': ['M997', 'M997A1', 'M997A2'],
    'm1035': ['M1035', 'M1035A1', 'M1035A2'],

    // Trailers
    'm1095': ['M1095']
};

const vehicleInfo = {
    'm998': {
        name: 'M998/M998A1 Cargo/Troop Carriers',
        description: 'Basic cargo and troop transport variants',
        features: ['Standard HMMWV platform', 'Cargo/troop transport', 'Soft top available']
    },
    'm1038': {
        name: 'M1038/M1038A1 Cargo/Troop Carriers W/W',
        description: 'Winch-equipped cargo and troop carriers',
        features: ['Cargo/troop transport', 'Winch equipped', 'Soft top available']
    },
    'm1097': {
        name: 'M1097/M1097A1/M1097A2 Heavy Variants',
        description: 'Heavy duty chassis for specialized equipment',
        features: ['Heavy duty chassis', 'Increased payload capacity', 'Specialized mounting points']
    },
    'm1123': {
        name: 'M1123 Heavy Variant',
        description: 'Latest heavy variant with improved systems',
        features: ['Enhanced heavy chassis', 'Improved electrical system', 'Advanced cooling']
    },
    'm966': {
        name: 'M966/M966A1/M1121 TOW Carriers',
        description: 'Armored TOW missile carriers',
        features: ['Armored protection', 'TOW missile system', 'Weapon station']
    },
    'm1036': {
        name: 'M1036 TOW Carrier W/W',
        description: 'Winch-equipped armored TOW carrier',
        features: ['Armored protection', 'TOW missile system', 'Winch equipped']
    },
    'm1045': {
        name: 'M1045/M1045A1/M1045A2 TOW Carriers',
        description: 'TOW carriers with supplemental armor',
        features: ['Supplemental armor kit', 'TOW missile system', 'Enhanced protection']
    },
    'm1046': {
        name: 'M1046/M1046A1 TOW Carriers W/W',
        description: 'Winch-equipped TOW carriers with supplemental armor',
        features: ['Supplemental armor kit', 'TOW missile system', 'Winch equipped']
    },
    'm1025': {
        name: 'M1025/M1025A1/M1025A2 Armament Carriers',
        description: 'Armored armament carriers',
        features: ['Armored protection', 'Weapon mount systems', 'Crew protection']
    },
    'm1026': {
        name: 'M1026/M1026A1 Armament Carriers W/W',
        description: 'Winch-equipped armored armament carriers',
        features: ['Armored protection', 'Weapon mount systems', 'Winch equipped']
    },
    'm1043': {
        name: 'M1043/M1043A1/M1043A2 Armament Carriers',
        description: 'Armament carriers with supplemental armor',
        features: ['Supplemental armor kit', 'Weapon mount systems', 'Enhanced protection']
    },
    'm1044': {
        name: 'M1044/M1044A1 Armament Carriers W/W',
        description: 'Winch-equipped armament carriers with supplemental armor',
        features: ['Supplemental armor kit', 'Weapon mount systems', 'Winch equipped']
    },
    'm1037': {
        name: 'M1037 S250 Shelter Carrier',
        description: 'Shelter carrier for S250 shelter systems',
        features: ['S250 shelter mount', 'Specialized electrical', 'Mobile command post']
    },
    'm1042': {
        name: 'M1042 S250 Shelter Carrier W/W',
        description: 'Winch-equipped shelter carrier',
        features: ['S250 shelter mount', 'Winch equipped', 'Mobile command post']
    },
    'm996': {
        name: 'M996/M996A1 2-Litter Ambulances',
        description: 'Armored 2-litter ambulances',
        features: ['Medical equipment', '2-litter capacity', 'NBC system', 'Patient compartment']
    },
    'm997': {
        name: 'M997/M997A1/M997A2 4-Litter Ambulances',
        description: 'Armored 4-litter ambulances',
        features: ['Medical equipment', '4-litter capacity', 'NBC system', 'Extended patient compartment']
    },
    'm1035': {
        name: 'M1035/M1035A1/M1035A2 2-Litter Ambulances',
        description: 'Soft top 2-litter ambulances',
        features: ['Medical equipment', '2-litter capacity', 'Soft top configuration']
    },
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
        this.tmReference = 'TM 9-2320-280-10';
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
    }

    itemMatchesVehicle(item, selectedVehicle) {
        if (selectedVehicle === 'all') return true;

        // Check if the item's procedure mentions any of the vehicle models for this selection
        const vehicleModels = vehicleMapping[selectedVehicle];
        if (!vehicleModels) return true;

        // Check procedure text for vehicle-specific mentions
        const procedureText = item.procedure.toLowerCase();

        // Some items are applicable to specific vehicles mentioned in their procedures
        const hasVehicleSpecificMention = vehicleModels.some(model =>
            procedureText.includes(model.toLowerCase())
        );

        // Items without specific vehicle mentions are generally applicable to all vehicles
        // Items WITH specific mentions are only for those vehicles
        if (procedureText.includes('m99') || procedureText.includes('m10') || procedureText.includes('m11')) {
            return hasVehicleSpecificMention;
        }

        // For ambulance-specific items
        if (item.location.toLowerCase().includes('ambulance') ||
            item.location.toLowerCase().includes('patient') ||
            item.system === 'Climate Control' && item.location.includes('Air-conditioner')) {
            return ['m996', 'm997', 'm1035'].includes(selectedVehicle);
        }

        // For weapon system items
        if (item.system === 'Weapon Systems') {
            const weaponVehicles = ['m966', 'm1036', 'm1045', 'm1046', 'm1025', 'm1026', 'm1043', 'm1044'];
            return weaponVehicles.includes(selectedVehicle);
        }

        // NBC system is only on ambulances
        if (item.location.includes('NBC System')) {
            return ['m996', 'm997'].includes(selectedVehicle);
        }

        // Winch items only for winch-equipped vehicles
        if (item.location.toLowerCase().includes('winch')) {
            const winchVehicles = ['m1038', 'm1036', 'm1042', 'm1046', 'm1026', 'm1044'];
            return winchVehicles.includes(selectedVehicle);
        }

        // Exhaust louvers are only on specific ambulance models
        if (item.location.includes('Exhaust Louvers')) {
            return ['m996'].includes(selectedVehicle);
        }

        // Default: item applies to all vehicles
        return true;
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
        const isNA = item.notFullyMissionCapable.trim() === 'N/A';
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
                        <span class="tm-ref-badge">${this.escapeHtml(this.tmReference || 'TM 9-2320-280-10')}</span>
                        ${item.system ? `<div class="system-badge">${this.escapeHtml(item.system)}</div>` : ''}
                        ${this.getNFMCBadge(item.notFullyMissionCapable)}
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
                        <p>${this.escapeHtml(item.notFullyMissionCapable)}</p>
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
            this.modalElements.status.textContent = item.notFullyMissionCapable;
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
Vehicle: ${vehicleName}
Not Fully Mission Capable If: ${item.notFullyMissionCapable}`;

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