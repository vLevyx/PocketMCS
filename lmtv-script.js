// ========================================
// LMTV / FMTV PMCS DATA
// TM 9-2320-365-10 — Operator's Manual
// M1078 / M1079 / M1080 / M1081 / M1083 / M1084 / M1085 / M1086 / M1087 / M1088 / M1089
//
// TABLE 2-1  — All Models  (applicableVehicles: ["All"])
// TABLE 2-2  — M1078 & M1081 only
// TABLE 2-3  — M1081 only
// TABLE 2-4  — M1079 Van only
// ========================================

const pmcsData = [

    // -------------------------------------------------------
    // TABLE 2-1 — ALL MODELS — BEFORE OPERATION  (Items 1–36)
    // -------------------------------------------------------
    {
        itemNumber: "1",
        interval: "Before",
        location: "Windshield, Windshield Wipers, and Washer Reservoir",
        applicableVehicles: ["All"],
        system: "Body/Frame",
        keywords: [
            "windshield", "windshield cracked", "wiper", "wipers not working", "wiper blade",
            "wiper arm broken", "washer reservoir", "washer fluid", "defroster",
            "windshield dirty", "wiper motor", "wiper smearing", "no washer fluid"
        ],
        commonFaults: [
            "Windshield cracked", "Wiper blades worn", "Wipers not working",
            "Washer reservoir empty", "Wiper arm bent", "Wiper motor inoperative"
        ],
        procedure: "DRIVER\na. Check windshield for cracks, breaks, or damage that would obstruct driver's view.\nb. Check wiper blades for cuts, cracks, or deterioration.\nc. Check wiper arms for damage and proper tension.\nd. Check washer reservoir fluid level — fill if low.\ne. Test wiper operation on all speeds.\nf. Test washer spray.",
        notFullyMissionCapable: "Windshield cracked or broken in driver's field of view. Wipers inoperative during rain or reduced visibility conditions."
    },
    {
        itemNumber: "1.1",
        interval: "Before",
        location: "Front and Rear Shackles",
        applicableVehicles: ["All"],
        system: "Body/Frame",
        keywords: [
            "shackle", "shackle cracked", "front shackle", "rear shackle", "tow shackle",
            "D-ring", "recovery shackle", "shackle missing", "shackle bent", "shackle pin"
        ],
        commonFaults: [
            "Shackle cracked or broken", "Shackle pin missing", "Shackle bent",
            "Mounting bracket cracked", "Shackle loose"
        ],
        procedure: "DRIVER\na. Inspect front and rear shackles for cracks, breaks, or bends.\nb. Check shackle pins for presence and security — ensure pins are seated and secured.\nc. Check mounting brackets for cracks or loose hardware.",
        notFullyMissionCapable: "Shackle cracked, broken, or missing. Mounting bracket cracked."
    },
    {
        itemNumber: "1.2",
        interval: "Before",
        location: "Cab Air Springs",
        applicableVehicles: ["All"],
        system: "Suspension",
        keywords: [
            "cab air spring", "cab mount", "air spring leaking", "cab bouncing",
            "cab ride rough", "cab spring collapsed", "air bag cab", "cab isolator"
        ],
        commonFaults: [
            "Cab air spring collapsed", "Air spring leaking", "Cab mount damaged",
            "Cab riding too low", "Air spring cracked"
        ],
        procedure: "DRIVER\na. Visually inspect cab air springs for collapse, cracks, or leaks.\nb. Check that cab sits level at normal ride height.\nc. Listen for air leaks from cab mount area.",
        notFullyMissionCapable: "Cab air spring collapsed. Active air leak causing cab to sit on bump stops."
    },
    {
        itemNumber: "2",
        interval: "Before",
        location: "Exterior of Vehicle",
        applicableVehicles: ["All"],
        system: "Body/Frame",
        keywords: [
            "exterior damage", "body damage", "fluid leak", "oil leak", "coolant leak", "fuel leak",
            "underbody leak", "puddle under vehicle", "dripping oil", "class III leak",
            "left side damage", "right side damage", "impact damage", "visible leak", "frame bent"
        ],
        commonFaults: [
            "Oil dripping under vehicle", "Coolant leak", "Fuel leak", "Class III leak",
            "Body damage", "Frame bent or cracked", "Visible fluid puddle"
        ],
        procedure: "DRIVER NOTE If leakage is detected, further investigation is needed to determine the location and cause.\n\na. Perform complete walk-around inspection of vehicle exterior.\nb. Check under vehicle for fluid leaks — note type, color, and location.\nc. Inspect frame, body panels, and fenders for damage.\nd. Check all fluid drain plugs for security.\ne. Report any Class III leaks to unit maintenance immediately.",
        notFullyMissionCapable: "Any brake fluid leak. Class III leak of oil, fuel, or coolant that cannot be corrected at operator level. Any damage that will prevent safe operation."
    },
    {
        itemNumber: "3",
        interval: "Before",
        location: "Coolant",
        applicableVehicles: ["All"],
        system: "Cooling System",
        keywords: [
            "coolant level", "coolant low", "degas bottle", "coolant reservoir", "antifreeze",
            "radiator coolant", "coolant check", "coolant leak", "hose leaking", "overheating",
            "water temp", "radiator hose", "coolant dirty", "coolant milky"
        ],
        commonFaults: [
            "Coolant level low", "Degas bottle empty", "Coolant leak", "Hose cracked",
            "Clamp loose", "Coolant contaminated with oil"
        ],
        procedure: "DRIVER CAUTION Do not open degas bottle cap when engine is hot — hot coolant under pressure can cause severe burns.\n\na. Check coolant level in degas/overflow bottle — level should be between MIN and MAX marks.\nb. Inspect radiator hoses and clamps for cracks, leaks, or loose clamps.\nc. Check coolant for proper color — milky appearance indicates oil contamination.\nd. Add coolant if necessary using correct mix of antifreeze and distilled water.",
        notFullyMissionCapable: "Coolant below MIN mark. Active coolant leak. Hose severely cracked or collapsed."
    },
    {
        itemNumber: "4",
        interval: "Before",
        location: "Fuel Tank",
        applicableVehicles: ["All"],
        system: "Fuel System",
        keywords: [
            "fuel level", "fuel low", "fuel tank", "no fuel", "fuel cap", "fuel cap missing",
            "fuel leak tank", "fuel gauge", "tank vent", "fuel filler", "fuel spill"
        ],
        commonFaults: [
            "Fuel level low", "Fuel cap missing or loose", "Fuel leak at tank",
            "Tank vent tube blocked", "Fuel filler damaged"
        ],
        procedure: "DRIVER\na. Check fuel gauge — ensure adequate fuel for mission.\nb. Inspect fuel tank and fuel lines for leaks.\nc. Check fuel cap for presence and proper seating.\nd. Inspect fuel filler neck and vent tube for damage or blockage.",
        notFullyMissionCapable: "Fuel insufficient for mission. Active fuel (Class III) leak from tank."
    },
    {
        itemNumber: "5",
        interval: "Before",
        location: "Engine Oil",
        applicableVehicles: ["All"],
        system: "Engine",
        keywords: [
            "engine oil", "oil level", "oil low", "dipstick", "check oil", "oil dipstick",
            "oil check", "milky oil", "oil contaminated", "oil dirty", "burnt oil", "add oil"
        ],
        commonFaults: [
            "Engine oil low", "Oil below ADD mark", "Milky oil (coolant contamination)",
            "Oil extremely dirty or burnt", "Oil overfull"
        ],
        procedure: "DRIVER NOTE Do not check oil immediately after shutdown — allow 5 minutes for oil to drain back to pan.\n\na. Pull dipstick and check oil level — level should be between ADD and FULL marks.\nb. Check oil for milky or foamy appearance (coolant contamination — notify unit maintenance).\nc. Check oil for excessive black or burnt appearance.\nd. Add oil if necessary (refer to Appendix for correct oil type and grade).",
        notFullyMissionCapable: "Engine oil below ADD mark. Milky or contaminated oil."
    },
    {
        itemNumber: "6",
        interval: "Before",
        location: "Transmission Fluid",
        applicableVehicles: ["All"],
        system: "Transmission",
        keywords: [
            "transmission fluid", "trans fluid", "transmission dipstick", "trans oil",
            "ATF", "transmission fluid low", "trans leak", "gear oil", "WTEC fluid"
        ],
        commonFaults: [
            "Transmission fluid low", "Transmission fluid leak", "Fluid milky or burnt",
            "Dipstick not showing fluid"
        ],
        procedure: "DRIVER NOTE Check transmission fluid with engine at operating temperature and vehicle on level ground.\n\na. Locate transmission dipstick and check fluid level per TM procedure.\nb. Level should be within operating range on dipstick.\nc. Check fluid for milky appearance (water contamination) or burnt smell.\nd. Add transmission fluid if low — use only approved fluid type.",
        notFullyMissionCapable: "Transmission fluid below minimum. Active transmission fluid leak."
    },
    {
        itemNumber: "7",
        interval: "Before",
        location: "Power Steering Reservoir",
        applicableVehicles: ["All"],
        system: "Steering",
        keywords: [
            "power steering fluid", "steering fluid", "power steering low", "steering reservoir",
            "power steering leak", "steering fluid level", "steering fluid dirty"
        ],
        commonFaults: [
            "Power steering fluid low", "Steering fluid leak", "Reservoir cap missing",
            "Fluid dirty or contaminated"
        ],
        procedure: "DRIVER\na. Check power steering fluid level in reservoir — level should be between MIN and MAX marks.\nb. Inspect reservoir and hoses for leaks.\nc. Add power steering fluid if low — use only approved fluid type.\nd. Check reservoir cap for presence and condition.",
        notFullyMissionCapable: "Power steering fluid below minimum. Active steering fluid leak."
    },
    {
        itemNumber: "8",
        interval: "Before",
        location: "Brake Master Cylinder",
        applicableVehicles: ["All"],
        system: "Brakes",
        keywords: [
            "brake fluid", "master cylinder", "brake fluid low", "brake reservoir",
            "brake fluid leak", "brake fluid level", "master cylinder leaking"
        ],
        commonFaults: [
            "Brake fluid low", "Brake fluid leak at master cylinder", "Master cylinder cap missing",
            "Fluid contaminated"
        ],
        procedure: "DRIVER WARNING Brake fluid is flammable and can cause eye and skin irritation. Avoid contact. Do not allow brake fluid to contact painted surfaces.\n\na. Check brake master cylinder fluid level — level should be at MAX line.\nb. Inspect master cylinder and lines for leaks.\nc. Check cap for presence and secure fit.\nd. Add DOT-approved brake fluid if low.",
        notFullyMissionCapable: "Brake fluid below minimum mark. Active brake fluid leak."
    },
    {
        itemNumber: "9",
        interval: "Before",
        location: "Air Cleaner/Restriction Indicator",
        applicableVehicles: ["All"],
        system: "Engine",
        keywords: [
            "air cleaner", "air filter", "restriction indicator", "air filter restriction",
            "red indicator", "air cleaner clogged", "air intake", "precleaner", "dust unloader"
        ],
        commonFaults: [
            "Restriction indicator showing red", "Air cleaner clogged", "Precleaner damaged",
            "Dust unloader valve missing", "Air intake hose collapsed"
        ],
        procedure: "DRIVER\na. Check air cleaner restriction indicator — if indicator shows RED, service the air cleaner at operator level and reset indicator.\nb. Inspect air cleaner housing and precleaner for damage.\nc. Check dust unloader valve for presence and condition.\nd. Inspect air intake hose for cracks, collapse, or loose clamps.",
        notFullyMissionCapable: "Restriction indicator shows red and air cleaner cannot be serviced. Air intake hose collapsed or severely damaged."
    },
    {
        itemNumber: "10",
        interval: "Before",
        location: "Belts/Radiator/Hoses",
        applicableVehicles: ["All"],
        system: "Engine",
        keywords: [
            "belt", "drive belt", "serpentine belt", "belt cracked", "belt frayed", "belt slipping",
            "radiator", "radiator fins", "radiator damaged", "hose", "radiator hose", "hose cracked",
            "hose leaking", "belt worn", "fan belt", "alternator belt"
        ],
        commonFaults: [
            "Belt cracked or frayed", "Belt loose or slipping", "Radiator fins damaged",
            "Hose cracked or bulging", "Hose clamp loose", "Belt squealing"
        ],
        procedure: "DRIVER\na. Inspect all drive belts for cracks, fraying, glazing, or missing sections.\nb. Check belt tension — belts should have no more than 1/2 inch deflection.\nc. Inspect radiator for bent fins, cracks, or damage to core.\nd. Check all coolant hoses for cracks, soft spots, or bulges.\ne. Check all hose clamps for tightness.",
        notFullyMissionCapable: "Belt cracked through, missing, or excessively loose. Radiator core damaged causing coolant loss. Hose cracked or leaking."
    },
    {
        itemNumber: "11",
        interval: "Before",
        location: "Batteries",
        applicableVehicles: ["All"],
        system: "Electrical",
        keywords: [
            "battery", "batteries", "battery dead", "battery low", "battery corrosion",
            "battery terminals", "battery cables", "battery electrolyte", "battery hold-down",
            "battery leaking", "dead battery", "24 volt", "battery posts corroded"
        ],
        commonFaults: [
            "Battery dead or low", "Battery terminals corroded", "Battery cables loose",
            "Battery electrolyte low", "Battery hold-down loose", "Battery leaking",
            "Battery case cracked"
        ],
        procedure: "DRIVER WARNING Do not smoke, use open flames, or create sparks near batteries. Battery gases can explode. Remove metal jewelry before working on batteries.\n\na. Inspect battery terminals and cables for corrosion, damage, and security.\nb. Check battery hold-down and mounting for security.\nc. Inspect battery cases for cracks or leaks.\nd. Check battery box for corrosion.",
        notFullyMissionCapable: "Battery dead or will not hold charge. Battery cables loose or corroded. Battery hold-down missing. Battery leaking."
    },
    {
        itemNumber: "12",
        interval: "Before",
        location: "OIL PRESS Gage",
        applicableVehicles: ["All"],
        system: "Engine",
        keywords: [
            "oil pressure gauge", "oil press", "oil pressure warning", "low oil pressure",
            "oil pressure light", "oil pressure gage", "gauge not reading", "gage inoperative"
        ],
        commonFaults: [
            "Oil pressure gauge inoperative", "Gauge reads zero", "Gauge reads erratic",
            "Low oil pressure warning light on at idle"
        ],
        procedure: "DRIVER\na. Start engine and observe OIL PRESS gage.\nb. At idle, oil pressure should indicate in normal operating range per TM specification.\nc. If OIL PRESS gage reads zero or very low at idle above 700 RPM, stop engine immediately and notify unit maintenance.\nd. Check gage for proper operation across RPM range.",
        notFullyMissionCapable: "OIL PRESS gage inoperative. Oil pressure reads zero or below minimum at operating RPM."
    },
    {
        itemNumber: "13",
        interval: "Before",
        location: "Tachometer",
        applicableVehicles: ["All"],
        system: "Electrical",
        keywords: [
            "tachometer", "RPM gauge", "tach", "tachometer inoperative", "RPM not reading",
            "tach needle stuck", "engine RPM gauge"
        ],
        commonFaults: [
            "Tachometer inoperative", "Needle stuck", "Erratic reading", "Gauge not illuminated"
        ],
        procedure: "DRIVER\na. Start engine and verify tachometer responds to engine RPM changes.\nb. At idle, tachometer should read in normal idle range.\nc. Check tachometer illumination during night operations.",
        notFullyMissionCapable: "Tachometer inoperative (unable to monitor engine RPM)."
    },
    {
        itemNumber: "14",
        interval: "Before",
        location: "WATER TEMP Gage",
        applicableVehicles: ["All"],
        system: "Engine",
        keywords: [
            "water temp", "coolant temperature", "temperature gauge", "temp gage", "overheating",
            "engine temp", "coolant temp gauge", "temp gauge not working", "water temp warning"
        ],
        commonFaults: [
            "Water temp gauge inoperative", "Gauge reads cold always", "Gauge pegs to hot",
            "Engine overheating indicated", "Gauge not illuminated"
        ],
        procedure: "DRIVER\na. Start engine and monitor WATER TEMP gage during warm-up.\nb. Gage should rise to normal operating range as engine warms.\nc. If gage rises to red zone (overheat), stop engine immediately and notify unit maintenance.\nd. Verify gage illumination is operational.",
        notFullyMissionCapable: "WATER TEMP gage inoperative. Engine temperature exceeds safe operating range."
    },
    {
        itemNumber: "15",
        interval: "Before",
        location: "AIR FILTER RESTRICTION GAUGE",
        applicableVehicles: ["All"],
        system: "Engine",
        keywords: [
            "air filter restriction gauge", "restriction gauge", "air cleaner restriction gauge",
            "filter restriction indicator", "restriction gauge reading", "air restriction gage"
        ],
        commonFaults: [
            "Restriction gauge in red zone", "Gauge inoperative", "Gauge stuck",
            "Air filter needs service per gauge"
        ],
        procedure: "DRIVER\na. Check AIR FILTER RESTRICTION GAUGE reading.\nb. If gauge indicates restriction (red zone or above service line), service the air filter.\nc. After servicing air filter, press reset button to zero the gauge.\nd. If gauge immediately returns to restriction zone, inspect for collapsed air intake hose.",
        notFullyMissionCapable: "Restriction gauge in red zone and air filter cannot be serviced at operator level."
    },
    {
        itemNumber: "16",
        interval: "Before",
        location: "FRONT BRAKE AIR and REAR BRAKE AIR Gages",
        applicableVehicles: ["All"],
        system: "Brakes",
        keywords: [
            "brake air pressure", "air brakes", "air pressure gauge", "brake air gage",
            "front brake air", "rear brake air", "air pressure low", "parking brake air",
            "air dryer", "brake not building pressure", "air pressure warning",
            "low air warning", "air system pressure"
        ],
        commonFaults: [
            "Air pressure not building to 80 psi", "Front and rear gages unequal",
            "Air pressure drops at rest", "Low air pressure warning light on",
            "Air dryer not purging"
        ],
        procedure: "DRIVER WARNING Never operate vehicle when air pressure is below 80 psi. Brakes may not function properly, causing loss of vehicle control and injury or death.\n\na. Start engine and allow air system to build pressure.\nb. Front and rear brake air gages must reach minimum 80 psi before vehicle can be moved.\nc. Normal operating range is 90–120 psi on both gages.\nd. Front and rear gage readings should be approximately equal.\ne. If low air pressure warning buzzer sounds or light illuminates, stop vehicle safely and notify unit maintenance.\nf. With engine running, listen for air leaks.",
        notFullyMissionCapable: "Air pressure will not build to 80 psi minimum. Front and rear gages read unequal (more than 5 psi difference at rest). Air pressure drops continuously. Low air pressure warning active."
    },
    {
        itemNumber: "17",
        interval: "Before",
        location: "VOLTS Gage",
        applicableVehicles: ["All"],
        system: "Electrical",
        keywords: [
            "volts gauge", "voltmeter", "voltage gauge", "battery voltage", "charging",
            "alternator charging", "voltage low", "voltage gage", "electrical system voltage"
        ],
        commonFaults: [
            "VOLTS gage inoperative", "Voltage too low (battery not charging)",
            "Voltage too high (overcharging)", "Gauge reads erratic"
        ],
        procedure: "DRIVER\na. Start engine and observe VOLTS gage.\nb. With engine running, gage should read 24–28 volts (24V system), indicating alternator is charging.\nc. If gage reads below 24V, alternator may not be charging — notify unit maintenance.\nd. If gage reads above 30V, stop engine and notify unit maintenance (overcharge condition).",
        notFullyMissionCapable: "VOLTS gage inoperative. Charging voltage below 24V or above 30V with engine running."
    },
    {
        itemNumber: "18",
        interval: "Before",
        location: "FUEL Gage",
        applicableVehicles: ["All"],
        system: "Fuel System",
        keywords: [
            "fuel gauge", "fuel gage", "fuel level indicator", "fuel gauge not working",
            "fuel gage inoperative", "gauge stuck on full", "gauge stuck on empty"
        ],
        commonFaults: [
            "Fuel gage inoperative", "Gage stuck at full or empty", "Gauge reads incorrect level"
        ],
        procedure: "DRIVER\na. Turn ignition to RUN and observe FUEL gage.\nb. Verify gage reads actual fuel level in tank.\nc. Cross-check gage reading against known fuel quantity if suspected inoperative.\nd. Report inoperative fuel gage to unit maintenance.",
        notFullyMissionCapable: "FUEL gage inoperative (unable to monitor fuel level)."
    },
    {
        itemNumber: "19",
        interval: "Before",
        location: "SYSTEM PARK Control",
        applicableVehicles: ["All"],
        system: "Brakes",
        keywords: [
            "parking brake", "system park", "park control", "hand brake", "park brake",
            "parking brake not holding", "parking brake won't release", "park control valve"
        ],
        commonFaults: [
            "Parking brake will not hold on grade", "Parking brake will not release",
            "SYSTEM PARK control valve sticking", "Air leak at park control"
        ],
        procedure: "DRIVER\na. Apply SYSTEM PARK brake control — pull out to apply.\nb. Attempt to move vehicle in lowest gear with park applied — vehicle must not move.\nc. Release SYSTEM PARK control — push in to release.\nd. Ensure park releases fully and brakes do not drag.\ne. Report any sticking or failure to hold/release to unit maintenance.",
        notFullyMissionCapable: "Parking brake will not hold vehicle on required grade. Parking brake will not release. Air leak causing loss of parking brake."
    },
    {
        itemNumber: "20",
        interval: "Before",
        location: "WTEC II TEPSS or WTEC III TPSS",
        applicableVehicles: ["All"],
        system: "Transmission",
        keywords: [
            "WTEC", "TEPSS", "TPSS", "transmission control", "transmission display",
            "WTEC II", "WTEC III", "transmission fault code", "transmission panel",
            "WTEC warning", "transmission error code"
        ],
        commonFaults: [
            "WTEC fault code displayed", "TEPSS/TPSS inoperative", "Display shows error",
            "Transmission will not shift", "WTEC warning light on"
        ],
        procedure: "DRIVER\na. Turn ignition on and observe WTEC display for fault codes or warning messages.\nb. Note any fault codes and report to unit maintenance before operating vehicle.\nc. Verify transmission shifts through all ranges normally during warm-up.\nd. If system displays HOLD or major fault code, do not operate vehicle — notify unit maintenance.",
        notFullyMissionCapable: "WTEC/TPSS displays active fault code that affects vehicle operation. Transmission will not shift out of a single gear."
    },
    {
        itemNumber: "21",
        interval: "Before",
        location: "Lights and Reflectors",
        applicableVehicles: ["All"],
        system: "Electrical",
        keywords: [
            "headlights", "taillights", "brake lights", "turn signals", "marker lights",
            "clearance lights", "blackout lights", "reflectors", "light inoperative",
            "light bulb burned out", "convoy lights", "driving lights", "stop lights"
        ],
        commonFaults: [
            "Headlights inoperative", "Taillights out", "Brake lights not working",
            "Turn signals inoperative", "Blackout lights out", "Marker lights out",
            "Reflector missing or broken", "Light lens cracked"
        ],
        procedure: "DRIVER\na. Check headlights (high and low beam).\nb. Check taillights and brake lights — have assistant observe rear.\nc. Check front and rear turn signals.\nd. Check clearance and marker lights.\ne. Check blackout lights if mission requires.\nf. Check all reflectors for presence and condition.\ng. Replace any burned-out bulbs at operator level.",
        notFullyMissionCapable: "Blackout lights inoperative during tactical operations. Both taillights inoperative. Brake lights inoperative."
    },
    {
        itemNumber: "22",
        interval: "Before",
        location: "Horn",
        applicableVehicles: ["All"],
        system: "Electrical",
        keywords: [
            "horn", "horn not working", "horn inoperative", "horn button", "horn weak",
            "horn stuck on"
        ],
        commonFaults: [
            "Horn inoperative", "Horn button stuck", "Horn weak or intermittent"
        ],
        procedure: "DRIVER\na. Test horn operation — press horn button and verify audible sound.\nb. Check that horn does not stick in ON position.\nc. Report inoperative horn to unit maintenance.",
        notFullyMissionCapable: "Horn inoperative."
    },
    {
        itemNumber: "23",
        interval: "Before",
        location: "Mirrors",
        applicableVehicles: ["All"],
        system: "Body/Frame",
        keywords: [
            "mirror", "side mirror", "mirror cracked", "mirror missing", "mirror loose",
            "mirror adjustment", "mirror bracket", "rear view mirror", "mirror broken"
        ],
        commonFaults: [
            "Mirror cracked or broken", "Mirror missing", "Mirror bracket bent",
            "Mirror will not stay in position", "Mirror loose"
        ],
        procedure: "DRIVER\na. Check both side mirrors for presence and condition.\nb. Adjust mirrors for proper field of view from driver's seat.\nc. Check mirror mounting brackets for security.\nd. Inspect mirror glass for cracks or damage that restricts visibility.",
        notFullyMissionCapable: "Both side mirrors missing, broken, or cannot be adjusted to provide required field of view."
    },
    {
        itemNumber: "24",
        interval: "Before",
        location: "Fire Extinguisher",
        applicableVehicles: ["All"],
        system: "Safety Systems",
        keywords: [
            "fire extinguisher", "extinguisher", "fire extinguisher missing", "extinguisher empty",
            "extinguisher pin missing", "extinguisher expired", "ABC extinguisher",
            "fire suppression", "extinguisher damaged", "extinguisher pressure low"
        ],
        commonFaults: [
            "Fire extinguisher missing", "Extinguisher pressure low or empty",
            "Safety pin missing", "Extinguisher inspection tag expired",
            "Extinguisher mounting bracket broken"
        ],
        procedure: "DRIVER\na. Check that fire extinguisher is present and secured in mount.\nb. Check pressure indicator — needle should be in green zone.\nc. Check that safety pin is present and seal is intact.\nd. Inspect extinguisher body for dents, corrosion, or damage.\ne. Check inspection tag/date — report if overdue for inspection.",
        notFullyMissionCapable: "Fire extinguisher missing. Pressure indicator in red (discharged or low). Safety pin missing."
    },
    {
        itemNumber: "25",
        interval: "Before",
        location: "Seat Belts",
        applicableVehicles: ["All"],
        system: "Safety Systems",
        keywords: [
            "seat belt", "seatbelt", "seat belt not latching", "seat belt frayed",
            "seat belt broken", "buckle", "seat belt webbing", "restraint", "three-point belt"
        ],
        commonFaults: [
            "Seat belt will not latch", "Seat belt frayed or cut", "Buckle broken",
            "Seat belt will not retract", "Webbing worn or damaged"
        ],
        procedure: "DRIVER\na. Check seat belt webbing for fraying, cuts, or deterioration.\nb. Test buckle latch — insert and verify secure lock.\nc. Test buckle release — verify smooth release.\nd. Check belt retractor operation — belt should retract smoothly.\ne. Check mounting hardware for security.",
        notFullyMissionCapable: "Seat belt will not latch or release properly. Webbing frayed through or cut."
    },
    {
        itemNumber: "26",
        interval: "Before",
        location: "Driver's Seat",
        applicableVehicles: ["All"],
        system: "Body/Frame",
        keywords: [
            "driver seat", "seat adjustment", "seat broken", "seat loose", "seat mount",
            "seat cushion", "seat back broken", "seat locking", "seat track"
        ],
        commonFaults: [
            "Seat will not lock in position", "Seat mount loose", "Seat cushion deteriorated",
            "Seat adjustment mechanism broken", "Seat back will not stay upright"
        ],
        procedure: "DRIVER\na. Adjust seat to proper driving position — verify seat locks securely in position.\nb. Check seat mounting hardware for security.\nc. Check seat back adjustment and locking.\nd. Inspect seat cushion for serviceability.",
        notFullyMissionCapable: "Seat will not lock in a safe driving position. Seat mount loose."
    },
    {
        itemNumber: "27",
        interval: "Before",
        location: "STE/ICE-R Connector",
        applicableVehicles: ["All"],
        system: "Electrical",
        keywords: [
            "STE/ICE-R", "STE ICE", "diagnostic connector", "STEI connector",
            "vehicle diagnostics", "STE connector missing", "STE cap missing", "diagnostic port"
        ],
        commonFaults: [
            "STE/ICE-R connector cap missing", "Connector damaged", "Connector corroded",
            "Connector cover missing"
        ],
        procedure: "DRIVER\na. Locate STE/ICE-R connector and check for presence of protective cap.\nb. If cap is missing, check connector pins for corrosion or damage and report to unit maintenance.\nc. Ensure connector is secure in its mount.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "28",
        interval: "Before",
        location: "Propeller Shafts/U-joints",
        applicableVehicles: ["All"],
        system: "Drivetrain",
        keywords: [
            "propeller shaft", "drive shaft", "U-joint", "universal joint", "driveshaft",
            "prop shaft", "u-joint worn", "driveshaft loose", "vibration driveshaft",
            "shaft yoke", "spline shaft", "driveline"
        ],
        commonFaults: [
            "U-joint worn or loose", "Propeller shaft loose", "Driveshaft vibration",
            "U-joint missing grease fitting cap", "Yoke cracked or bent"
        ],
        procedure: "DRIVER\na. Visually inspect propeller shafts for dents, cracks, or bends.\nb. Check U-joints for looseness by attempting to twist shaft — no free play allowed.\nc. Check yoke flange bolts for security.\nd. Inspect slip yoke for evidence of leaking grease seal.",
        notFullyMissionCapable: "U-joint loose, binding, or missing. Propeller shaft bent. Flange bolts missing."
    },
    {
        itemNumber: "29",
        interval: "Before",
        location: "Springs/Suspension",
        applicableVehicles: ["All"],
        system: "Suspension",
        keywords: [
            "spring", "leaf spring", "suspension", "spring broken", "spring cracked",
            "shock absorber", "spring mount", "suspension loose", "spring sagging",
            "spring U-bolt", "spring clip", "suspension damaged"
        ],
        commonFaults: [
            "Leaf spring broken", "Spring sagging or cracked", "U-bolt loose or missing",
            "Spring mount cracked", "Shock absorber leaking", "Spring clip broken"
        ],
        procedure: "DRIVER\na. Visually inspect leaf springs on all axles for broken or cracked leaves.\nb. Check U-bolts for proper torque — report loose U-bolts to unit maintenance.\nc. Check spring mounts and hangers for cracks or loose bolts.\nd. Inspect shock absorbers for leaking fluid or damaged mounts.",
        notFullyMissionCapable: "Leaf spring broken. U-bolt missing. Spring mount cracked through. Shock absorber mount broken."
    },
    {
        itemNumber: "30",
        interval: "Before",
        location: "Steering Linkage",
        applicableVehicles: ["All"],
        system: "Steering",
        keywords: [
            "steering linkage", "drag link", "tie rod", "steering arm", "pitman arm",
            "steering play", "loose steering", "steering shimmy", "drag link loose",
            "tie rod end worn", "steering knuckle", "steering wander"
        ],
        commonFaults: [
            "Tie rod end worn or loose", "Drag link worn", "Steering wheel excessive play",
            "Pitman arm loose", "Steering linkage bent"
        ],
        procedure: "DRIVER\na. Check steering wheel free play — should not exceed 2 inches (5 cm).\nb. Visually inspect drag link and tie rod ends for damage, looseness, or missing cotter pins.\nc. Check pitman arm for looseness at steering box.\nd. Report excessive play or bent/damaged linkage to unit maintenance.",
        notFullyMissionCapable: "Steering wheel free play exceeds safe limit. Tie rod end or drag link missing or broken. Pitman arm loose."
    },
    {
        itemNumber: "31",
        interval: "Before",
        location: "Fuel/Water Separator",
        applicableVehicles: ["All"],
        system: "Fuel System",
        keywords: [
            "fuel water separator", "water separator", "fuel filter", "water in fuel",
            "separator bowl", "drain fuel separator", "water separator light", "WATER IN FUEL light"
        ],
        commonFaults: [
            "Water in fuel separator bowl", "WATER IN FUEL warning light on",
            "Separator bowl cracked", "Drain valve leaking"
        ],
        procedure: "DRIVER\na. Check WATER IN FUEL indicator — if illuminated, drain water from separator.\nb. Inspect separator bowl for visible water accumulation (water sinks below fuel).\nc. If water present, open drain valve at bottom of separator and drain until clear fuel flows.\nd. Inspect separator and lines for leaks.",
        notFullyMissionCapable: "WATER IN FUEL indicator on and cannot be cleared. Fuel/water separator leaking."
    },
    {
        itemNumber: "32",
        interval: "Before",
        location: "Transfer Case",
        applicableVehicles: ["All"],
        system: "Drivetrain",
        keywords: [
            "transfer case", "transfer case fluid", "transfer case leak", "transfer case oil",
            "4WD", "four wheel drive", "transfer case housing", "transfer case damaged"
        ],
        commonFaults: [
            "Transfer case fluid low", "Transfer case leaking", "Transfer case housing cracked",
            "Transfer case drain plug loose"
        ],
        procedure: "DRIVER\na. Visually inspect transfer case for leaks — check beneath and around housing.\nb. Check transfer case oil level at fill/level plug if accessible.\nc. Check mounting bolts for security.\nd. Report active leaks to unit maintenance.",
        notFullyMissionCapable: "Transfer case leaking Class III. Housing cracked. Transfer case oil critically low."
    },
    {
        itemNumber: "33",
        interval: "Before",
        location: "Axles/Differentials",
        applicableVehicles: ["All"],
        system: "Drivetrain",
        keywords: [
            "axle", "differential", "diff leak", "axle leak", "differential fluid",
            "diff housing cracked", "axle seal", "differential cover", "axle damaged"
        ],
        commonFaults: [
            "Differential fluid leaking", "Differential cover cracked", "Axle seal leaking",
            "Axle bent or cracked", "Differential vent clogged"
        ],
        procedure: "DRIVER\na. Visually inspect front and rear axle differentials for oil leaks.\nb. Check axle shafts and housing for cracks or damage.\nc. Check differential covers for cracks or loose bolts.\nd. Report Class III leaks to unit maintenance.",
        notFullyMissionCapable: "Active Class III differential leak. Axle housing cracked. Axle shaft broken."
    },
    {
        itemNumber: "34",
        interval: "Before",
        location: "Service Brakes",
        applicableVehicles: ["All"],
        system: "Brakes",
        keywords: [
            "service brakes", "brake chambers", "brake shoes", "brake drums", "slack adjuster",
            "brake hose", "brake line", "brake adjustment", "brake drag", "brake worn"
        ],
        commonFaults: [
            "Brake hose damaged or leaking", "Brake chamber cracked or leaking",
            "Slack adjuster out of adjustment", "Brake shoe worn", "Brake drag felt during driving"
        ],
        procedure: "DRIVER\na. Visually inspect brake hoses and lines for cracks, chafing, or leaks.\nb. Check brake chambers for cracks or leaking.\nc. Check slack adjusters — report out-of-adjustment slack adjusters to unit maintenance.\nd. Inspect brake drums for deep scoring visible from wheel area.\ne. Verify brakes do not drag when vehicle is rolled.",
        notFullyMissionCapable: "Brake hose cracked or leaking. Brake chamber leaking. Slack adjuster at maximum travel."
    },
    {
        itemNumber: "35",
        interval: "Before",
        location: "Parking Brake",
        applicableVehicles: ["All"],
        system: "Brakes",
        keywords: [
            "parking brake", "spring brake", "emergency brake", "park brake",
            "parking brake not holding", "parking brake won't release", "spring brake chamber"
        ],
        commonFaults: [
            "Parking brake will not hold vehicle", "Parking brake will not release",
            "Spring brake chamber damaged", "Parking brake cable broken"
        ],
        procedure: "DRIVER\na. Apply parking brake and verify vehicle will not roll on required grade.\nb. Release parking brake and verify complete release — no brake drag.\nc. Inspect spring brake chambers for damage or leaking.\nd. Report any failure to hold or release to unit maintenance.",
        notFullyMissionCapable: "Parking brake will not hold vehicle on required grade. Parking brake will not release. Spring brake chamber damaged."
    },
    {
        itemNumber: "36",
        interval: "Before",
        location: "Air System Leaks",
        applicableVehicles: ["All"],
        system: "Brakes",
        keywords: [
            "air leak", "air system leak", "air hose leak", "air fitting leak",
            "air line cracked", "brake air leak", "air pressure dropping", "hissing air",
            "air system losing pressure", "air compressor"
        ],
        commonFaults: [
            "Audible air leak at hose or fitting", "Air pressure drops continuously at rest",
            "Air line chafed or cracked", "Air fitting loose", "Air compressor not keeping up"
        ],
        procedure: "DRIVER\na. With engine running and air system fully pressurized, listen for air leaks throughout system.\nb. With engine off and system at full pressure, monitor gauges for pressure drop — should not drop more than 2 psi per minute with no brake application.\nc. Trace any audible hissing to source and report to unit maintenance.\nd. Inspect air lines and hoses for visible chafing or cracking.",
        notFullyMissionCapable: "Air system loses pressure faster than 2 psi per minute with no brake applied. Active audible air leak that cannot be corrected at operator level."
    },

    // -------------------------------------------------------
    // TABLE 2-1 — DURING OPERATION  (Items 37–40)
    // -------------------------------------------------------
    {
        itemNumber: "37",
        interval: "During",
        location: "Steering",
        applicableVehicles: ["All"],
        system: "Steering",
        keywords: [
            "steering during operation", "steering pulls", "steering wander", "steering shimmy",
            "steering play during driving", "hard steering", "steering binding", "erratic steering",
            "steering loose while moving"
        ],
        commonFaults: [
            "Vehicle pulls to one side", "Excessive steering play while driving",
            "Steering shimmy at speed", "Hard to steer", "Steering binding"
        ],
        procedure: "DRIVER\na. While operating vehicle, note any tendency to pull to one side.\nb. Check for excessive steering wheel play while moving.\nc. Note any shimmy or vibration felt through steering wheel.\nd. Note any difficulty or binding when turning.\ne. Report any abnormalities to unit maintenance at end of mission.",
        notFullyMissionCapable: "Vehicle cannot be steered safely. Steering binds. Steering wheel play so excessive vehicle cannot be controlled."
    },
    {
        itemNumber: "38",
        interval: "During",
        location: "Service Brakes",
        applicableVehicles: ["All"],
        system: "Brakes",
        keywords: [
            "brake during operation", "brakes pulling", "brakes spongy", "brake fade",
            "brakes not stopping vehicle", "brakes drag", "brake noise during driving",
            "uneven braking", "brakes grabbing"
        ],
        commonFaults: [
            "Vehicle pulls during braking", "Brakes spongy or soft", "Extended stopping distance",
            "Brakes drag after release", "Brake noise during application", "Brake fade"
        ],
        procedure: "DRIVER\na. During operation, perform controlled brake test — apply brakes moderately and check vehicle stops straight.\nb. Check for vehicle pull to either side during braking.\nc. Note any spongy, soft, or hard brake pedal feel.\nd. Check that brakes fully release after pedal is released — no drag.\ne. Report any abnormal brake behavior immediately.",
        notFullyMissionCapable: "Brakes will not stop vehicle within safe distance. Vehicle pulls severely during braking. Brakes drag continuously."
    },
    {
        itemNumber: "39",
        interval: "During",
        location: "Engine Performance",
        applicableVehicles: ["All"],
        system: "Engine",
        keywords: [
            "engine performance", "engine misfiring", "engine hesitation", "engine stalling",
            "engine surging", "no power", "engine smoking", "black smoke", "blue smoke",
            "white smoke", "engine knocking", "engine noise during operation"
        ],
        commonFaults: [
            "Engine misfires or hesitates", "Engine stalls while moving", "Loss of power",
            "Excessive black smoke", "Excessive blue smoke (oil burning)", "Engine knocking",
            "Engine surging at cruise"
        ],
        procedure: "DRIVER\na. Monitor engine performance during normal operation — note any hesitation, misfires, or surging.\nb. Observe exhaust for excessive smoke (black = rich/fuel problem; blue = oil burning; white = coolant).\nc. Listen for abnormal engine noises — knocking, rattling, or grinding.\nd. Monitor gauges throughout operation for any deviations from normal range.\ne. Report significant changes in engine performance to unit maintenance.",
        notFullyMissionCapable: "Engine will not maintain power for mission requirements. Engine stalls repeatedly. Excessive smoke indicating severe mechanical issue."
    },
    {
        itemNumber: "40",
        interval: "During",
        location: "Transmission",
        applicableVehicles: ["All"],
        system: "Transmission",
        keywords: [
            "transmission during operation", "transmission slipping", "transmission noise",
            "won't shift", "stuck in gear", "harsh shifting", "transmission jerking",
            "WTEC fault during operation", "transmission overheating"
        ],
        commonFaults: [
            "Transmission slips out of gear", "Harsh or erratic shifting", "Transmission noise",
            "Will not upshift or downshift", "WTEC fault code appears during operation",
            "Transmission overheating warning"
        ],
        procedure: "DRIVER\na. Monitor transmission shifting through all gears during normal operation.\nb. Note any harsh, delayed, or missed shifts.\nc. Check for WTEC fault codes or warning lights during operation.\nd. Note any unusual noises from transmission area.\ne. If transmission overheating warning activates, reduce load and allow vehicle to cool.\nf. Report any shift abnormalities to unit maintenance.",
        notFullyMissionCapable: "Transmission will not shift — vehicle stuck in one gear. Transmission slips out of gear repeatedly. Transmission overheating and cannot cool."
    },

    // -------------------------------------------------------
    // TABLE 2-1 — AFTER OPERATION  (Items 41, 41.1)
    // -------------------------------------------------------
    {
        itemNumber: "41",
        interval: "After",
        location: "Light Switches",
        applicableVehicles: ["All"],
        system: "Electrical",
        keywords: [
            "light switch", "headlight switch", "light switch broken", "switch inoperative",
            "blackout switch", "panel lights", "dash lights", "instrument lighting",
            "light switch stuck", "switch not working"
        ],
        commonFaults: [
            "Light switch inoperative", "Switch broken or stiff", "Panel lights not working",
            "Blackout switch inoperative", "Switch stuck in position"
        ],
        procedure: "DRIVER\na. After engine shutdown, test all light switches through their full range of positions.\nb. Check headlight switch — verify high/low/off positions.\nc. Test blackout light switch.\nd. Check instrument panel light switch.\ne. Report inoperative switches to unit maintenance.",
        notFullyMissionCapable: "Blackout light switch inoperative during tactical operations."
    },
    {
        itemNumber: "41.1",
        interval: "Weekly",
        location: "Front Gladhands",
        applicableVehicles: ["All"],
        system: "Brakes",
        keywords: [
            "gladhand", "glad hand", "trailer air connection", "brake glad hand",
            "service gladhand", "emergency gladhand", "gladhand coupling", "trailer brake air"
        ],
        commonFaults: [
            "Gladhand seal damaged or missing", "Gladhand cracked", "Gladhand coupling worn",
            "Gladhand leaking air", "Gladhand dummy cap missing"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect front gladhands for cracked or damaged couplings.\nb. Check rubber seals in gladhands for cuts, tears, or missing seals.\nc. Verify dummy caps are present when gladhands are not connected to trailer.\nd. Test gladhand coupling function if trailer is connected.",
        notFullyMissionCapable: "Gladhand seal missing causing air leak to trailer brakes. Gladhand cracked or will not couple."
    },

    // -------------------------------------------------------
    // TABLE 2-1 — WEEKLY  (Items 42–51)
    // -------------------------------------------------------
    {
        itemNumber: "42",
        interval: "Weekly",
        location: "Mounting/Coupling Hardware and Hoses/Tubes",
        applicableVehicles: ["All"],
        system: "Engine",
        keywords: [
            "hose clamps weekly", "hose loose", "tube fitting weekly", "mounting bolts engine",
            "coupling hardware", "hose connection loose", "fitting leaking", "clamp loose weekly"
        ],
        commonFaults: [
            "Hose clamp loose", "Fitting leaking", "Mounting hardware loose",
            "Hose chafing against frame", "Tube fitting loose"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect all hoses and tubes in engine compartment for chafing, rubbing, or damage.\nb. Check all hose clamps for tightness.\nc. Check all mounting brackets and hardware for security.\nd. Inspect all fluid line fittings for leaks.\ne. Secure any chafing hoses away from hot or sharp surfaces.",
        notFullyMissionCapable: "Hose or tube leaking Class III fluid. Fitting loose causing fluid loss."
    },
    {
        itemNumber: "43",
        interval: "Weekly",
        location: "Mounting/Coupling Hardware and Hoses/Tubes",
        applicableVehicles: ["All"],
        system: "Fluid Systems",
        keywords: [
            "underbody hose weekly", "frame hose weekly", "underbody coupling hardware",
            "brake line weekly", "fuel line weekly", "air line weekly", "frame hardware loose"
        ],
        commonFaults: [
            "Brake line chafed", "Fuel line chafed or loose", "Air line damaged",
            "Frame mounting bolt loose", "Hose bracket missing"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect underbody and frame-mounted hoses, tubes, and lines for chafing, damage, or loose clamps.\nb. Check brake lines, fuel lines, and air lines along frame for security.\nc. Check frame hardware (cross-member bolts, body mount bolts) for looseness.\nd. Secure any damaged or loose lines away from heat sources and sharp edges.",
        notFullyMissionCapable: "Brake line damaged or leaking. Fuel line leaking. Air line damaged causing air system pressure loss."
    },
    {
        itemNumber: "44",
        interval: "Weekly",
        location: "Battery Electrolyte Level",
        applicableVehicles: ["All"],
        system: "Electrical",
        keywords: [
            "battery electrolyte", "battery water", "battery fluid level", "add water battery",
            "electrolyte low", "distilled water battery", "battery cell"
        ],
        commonFaults: [
            "Battery electrolyte level low", "Cell plates exposed", "Electrolyte leaking"
        ],
        procedure: "DRIVER WARNING Wear eye protection when working with batteries. Battery acid can cause severe burns. Do not smoke or use open flames near batteries.\n\na. Remove battery caps and check electrolyte level in each cell.\nb. Level should be at the FULL line or just covering the plates.\nc. Add distilled water only — never add tap water or acid.\nd. Replace caps securely after checking.",
        notFullyMissionCapable: "Battery cell plates exposed due to low electrolyte. Battery electrolyte level cannot be maintained."
    },
    {
        itemNumber: "45",
        interval: "Weekly",
        location: "Tires/Wheels",
        applicableVehicles: ["All"],
        system: "Tires/Wheels",
        keywords: [
            "tire pressure weekly", "tires weekly", "tire inspection", "tire wear weekly",
            "lug nuts weekly", "tire damage weekly", "wheel inspection weekly",
            "CTI pressure check", "inner tire pressure", "outer tire pressure"
        ],
        commonFaults: [
            "Tire pressure low (front or rear)", "Tire tread worn below limit", "Sidewall cracked",
            "Lug nuts loose", "Inner dual tire flat", "Outer dual tire flat", "Spare tire low"
        ],
        procedure: "DRIVER\nNOTE Standard CTIS pressure settings per TM 9-2320-365-10, Table 2-2:\nHighway: 75 psi / Cross-country: 50 psi / Soft soil: 26 psi / Emergency: 15 psi\n\na. Check inflation pressure on all tires (both front steer and all duals — inner and outer) with calibrated gauge.\nb. Adjust pressure to correct setting for terrain using CTI or air source.\nc. Check spare tire pressure.\nd. Inspect all tires for cuts, bulges, embedded objects, or sidewall damage.\ne. Check tread depth — replace if worn to wear bars.\nf. Check all lug nuts for tightness.",
        notFullyMissionCapable: "Tire flat, missing, or unserviceable. Lug nuts missing or loose. Tread worn to wear bars."
    },
    {
        itemNumber: "46",
        interval: "Weekly",
        location: "Wheel Nuts/Bolts",
        applicableVehicles: ["All"],
        system: "Tires/Wheels",
        keywords: [
            "wheel nuts", "lug nuts weekly", "wheel bolts", "lug bolt", "wheel stud",
            "torque wheel nuts", "loose wheel nut", "missing lug nut", "wheel stud broken"
        ],
        commonFaults: [
            "Lug nuts loose", "Lug nuts missing", "Wheel stud broken or stripped",
            "Rust indicating looseness", "Inner dual wheel nuts loose"
        ],
        procedure: "DRIVER/MAINTAINER\na. Check all wheel lug nuts/bolts for tightness on all wheels — both front and dual rear (inner and outer).\nb. Use torque wrench to verify torque per TM specification.\nc. Check for broken or stripped wheel studs.\nd. Report missing or stripped studs to unit maintenance.",
        notFullyMissionCapable: "Three or more lug nuts loose or missing on any single wheel. Wheel stud broken."
    },
    {
        itemNumber: "47",
        interval: "Weekly",
        location: "Belts",
        applicableVehicles: ["All"],
        system: "Engine",
        keywords: [
            "belt weekly", "drive belt weekly", "belt tension weekly", "belt wear",
            "serpentine belt weekly", "alternator belt weekly", "belt cracked weekly"
        ],
        commonFaults: [
            "Belt showing wear or glazing", "Belt tension incorrect", "Belt cracked weekly",
            "Belt fraying on edges"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect all drive belts for cracks, fraying, glazing, oil contamination, or missing sections.\nb. Check belt tension — should have 3/8 to 1/2 inch deflection under moderate thumb pressure.\nc. Check pulley alignment.\nd. Replace any belt showing more than three cracks per inch or missing sections.",
        notFullyMissionCapable: "Belt cracked through or missing. Belt tension cannot be adjusted to within specification."
    },
    {
        itemNumber: "48",
        interval: "Weekly",
        location: "Body Mounting Bolts",
        applicableVehicles: ["All"],
        system: "Body/Frame",
        keywords: [
            "body mount", "body mounting bolts", "cab mount bolts", "body bolts loose",
            "mounting hardware weekly", "body to frame bolts", "cab bolts weekly"
        ],
        commonFaults: [
            "Body mounting bolts loose", "Cab mounting bolts loose", "Mounting hardware missing",
            "Body shifted on frame"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect body and cab mounting bolts for looseness.\nb. Check all accessible body-to-frame mounting points.\nc. Tighten any loose mounting hardware to specification.\nd. Report stripped or missing hardware to unit maintenance.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "49",
        interval: "Weekly",
        location: "Lubrication (General)",
        applicableVehicles: ["All"],
        system: "Drivetrain",
        keywords: [
            "lubrication", "grease fittings", "lubrication points", "grease weekly",
            "zerk fittings", "grease gun", "lubrication schedule", "chassis lube",
            "grease points weekly"
        ],
        commonFaults: [
            "Grease fittings dry or not accepting grease", "Missing grease fitting",
            "Fitting corroded", "Lube point showing rust from lack of grease"
        ],
        procedure: "DRIVER/MAINTAINER\na. Lubricate all required grease fittings per TM 9-2320-365-10 lubrication chart.\nb. Lubricate steering linkage, U-joints, spring pins, and other grease points.\nc. Use correct lubricant type as specified in lubrication order.\nd. Clean fittings before greasing — wipe old grease off after applying new grease.\ne. Replace any missing or damaged grease fittings.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "50",
        interval: "Weekly",
        location: "Air System Check",
        applicableVehicles: ["All"],
        system: "Brakes",
        keywords: [
            "air system weekly", "air dryer weekly", "air compressor weekly",
            "air tank weekly", "air reservoir drain", "air system purge",
            "air compressor oil weekly", "air system pressure test"
        ],
        commonFaults: [
            "Air dryer not cycling", "Water in air tanks", "Air compressor overheating",
            "Governor cut-in/cut-out out of range", "Air reservoir drain stuck"
        ],
        procedure: "DRIVER/MAINTAINER\na. Drain air reservoirs by opening drain valves — observe for water or oil contamination.\nb. Close drain valves after draining.\nc. Build system back to full pressure and verify governor cut-out at approximately 120–130 psi.\nd. Verify governor cut-in at approximately 100 psi.\ne. Check air dryer desiccant cartridge for serviceability.\nf. Check air compressor for overheating or excessive oil consumption.",
        notFullyMissionCapable: "Air system unable to build to 80 psi minimum. Governor cut-out pressure out of specification. Air dryer inoperative."
    },
    {
        itemNumber: "51",
        interval: "Weekly",
        location: "Hydraulic Hoses",
        applicableVehicles: ["All"],
        system: "Fluid Systems",
        keywords: [
            "hydraulic hose", "hydraulic line", "hydraulic leak", "power steering hose",
            "hydraulic fitting", "hose chafing hydraulic", "hydraulic fluid leak",
            "cab lift hydraulic hose", "crane hydraulic hose"
        ],
        commonFaults: [
            "Hydraulic hose chafed or cracked", "Hydraulic fitting leaking",
            "Hose rubbing against frame", "Hose bracket missing", "Active hydraulic fluid leak"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect all hydraulic hoses and lines for chafing, cracking, or damage.\nb. Check all hydraulic fittings for leaks.\nc. Ensure hoses are properly secured with brackets and not rubbing against sharp edges or heat sources.\nd. Check hydraulic fluid reservoir level.\ne. Report Class III hydraulic leaks to unit maintenance.",
        notFullyMissionCapable: "Hydraulic hose leaking Class III fluid. Hose severely chafed to near failure."
    },

    // -------------------------------------------------------
    // TABLE 2-1 — MONTHLY  (Items 52–77)
    // -------------------------------------------------------
    {
        itemNumber: "52",
        interval: "Monthly",
        location: "Fuel/Water Separator Element",
        applicableVehicles: ["All"],
        system: "Fuel System",
        keywords: [
            "fuel water separator element", "fuel filter element", "separator cartridge",
            "fuel filter monthly", "replace fuel filter", "fuel filter change monthly"
        ],
        commonFaults: [
            "Separator element clogged", "Element overdue for replacement", "Element housing cracked"
        ],
        procedure: "DRIVER/MAINTAINER\na. Drain and remove fuel/water separator bowl.\nb. Replace separator filter element per TM procedure.\nc. Install new element and bowl — do not overtighten.\nd. Prime fuel system per TM procedure.\ne. Start engine and check for leaks at separator.",
        notFullyMissionCapable: "Fuel/water separator element so clogged that engine will not run."
    },
    {
        itemNumber: "53",
        interval: "Monthly",
        location: "Transmission Breather",
        applicableVehicles: ["All"],
        system: "Transmission",
        keywords: [
            "transmission breather", "trans vent", "transmission vent plug",
            "breather clogged", "transmission overpressure"
        ],
        commonFaults: [
            "Transmission breather clogged", "Breather missing", "Breather cap damaged"
        ],
        procedure: "DRIVER/MAINTAINER\na. Locate transmission breather and inspect for clogging or damage.\nb. Clean or replace breather if clogged.\nc. Verify breather is present and not blocked by mud or debris.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "54",
        interval: "Monthly",
        location: "Differential Breathers",
        applicableVehicles: ["All"],
        system: "Drivetrain",
        keywords: [
            "differential breather", "diff breather", "axle breather", "axle vent",
            "differential vent", "breather clogged diff"
        ],
        commonFaults: [
            "Differential breather clogged", "Breather missing", "Breather packed with mud"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect front and rear differential breathers for clogging, damage, or missing.\nb. Clean any clogged breathers with solvent.\nc. Replace damaged or missing breathers.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "55",
        interval: "Monthly",
        location: "Transfer Case Breather",
        applicableVehicles: ["All"],
        system: "Drivetrain",
        keywords: [
            "transfer case breather", "transfer case vent", "t-case breather",
            "transfer case vent clogged", "transfer case overpressure"
        ],
        commonFaults: [
            "Transfer case breather clogged", "Breather missing", "Breather damaged"
        ],
        procedure: "DRIVER/MAINTAINER\na. Locate transfer case breather and inspect for clogging or damage.\nb. Clean or replace as needed.\nc. Ensure breather extends above highest likely water level for fording operations.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "56",
        interval: "Monthly",
        location: "CTIS Hub Valves",
        applicableVehicles: ["All"],
        system: "Tires/Wheels",
        keywords: [
            "CTIS hub valve", "CTI hub valve", "central tire inflation hub",
            "wheel hub valve", "CTI valve monthly", "hub valve leaking", "CTI seal"
        ],
        commonFaults: [
            "Hub valve leaking air", "Hub valve stuck open or closed", "Hub valve seal worn",
            "Hub valve damaged", "Hub valve will not allow pressure adjustment"
        ],
        procedure: "DRIVER/MAINTAINER\na. With CTIS in position, check each hub valve for audible air leaks.\nb. Attempt to inflate and deflate each tire through CTIS — verify each wheel responds.\nc. Inspect hub valve fittings for damage or loose connections.\nd. Report valves that leak or do not respond to CTIS commands to unit maintenance.",
        notFullyMissionCapable: "CTIS hub valve leaking uncontrollably causing tire deflation. Hub valve prevents CTIS from functioning."
    },
    {
        itemNumber: "57",
        interval: "Monthly",
        location: "Air Dryer",
        applicableVehicles: ["All"],
        system: "Brakes",
        keywords: [
            "air dryer", "air dryer desiccant", "air dryer purge", "air dryer cartridge",
            "air dryer not working", "air dryer bypass", "desiccant cartridge"
        ],
        commonFaults: [
            "Air dryer not purging (no puff of air)", "Desiccant cartridge saturated",
            "Air dryer safety valve leaking", "Air dryer heater not working in cold weather"
        ],
        procedure: "DRIVER/MAINTAINER\na. Build air system to full pressure and observe air dryer — it should purge (audible puff) when compressor unloads.\nb. Check desiccant cartridge — replace if oil-saturated or overdue per service schedule.\nc. Check air dryer safety valve for leaking.\nd. In cold weather, verify air dryer heater is operational.",
        notFullyMissionCapable: "Air dryer completely inoperative causing water contamination in brake system."
    },
    {
        itemNumber: "58",
        interval: "Monthly",
        location: "Brake System Lines",
        applicableVehicles: ["All"],
        system: "Brakes",
        keywords: [
            "brake lines monthly", "brake hose monthly", "brake tubing", "brake line corrosion",
            "brake line chafing monthly", "brake system inspection monthly"
        ],
        commonFaults: [
            "Brake line corroded or pitted", "Brake hose chafed through", "Brake line loose from bracket",
            "Brake fitting weeping", "Brake line routed against heat source"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect all brake lines and hoses throughout entire vehicle for corrosion, chafing, or damage.\nb. Check all brake line brackets and mounting clamps for security.\nc. Check brake hose flex sections for cracking.\nd. Inspect all brake fittings for leakage.\ne. Ensure brake lines are routed away from exhaust and sharp edges.",
        notFullyMissionCapable: "Brake line or hose leaking. Brake line severely corroded. Hose chafed to near failure."
    },
    {
        itemNumber: "59",
        interval: "Monthly",
        location: "Cab Lift Mechanism",
        applicableVehicles: ["All"],
        system: "Body/Frame",
        keywords: [
            "cab lift", "cab tilt", "cab lift mechanism", "cab lift cylinder",
            "cab not lifting", "cab latch", "cab prop rod", "cab tilt mechanism"
        ],
        commonFaults: [
            "Cab lift mechanism inoperative", "Cab prop rod missing", "Cab latch not securing",
            "Cab lift cylinder leaking", "Cab will not tilt"
        ],
        procedure: "DRIVER/MAINTAINER\na. Check cab lift latch for secure engagement in lowered position.\nb. Tilt cab using lift mechanism and check for smooth operation.\nc. Inspect cab lift cylinder for leaks.\nd. Verify prop rod is present and serviceable for holding cab in raised position.\ne. Lower cab and verify latch engages fully.",
        notFullyMissionCapable: "Cab latch will not secure cab in down position. Cab prop rod missing (safety hazard during maintenance)."
    },
    {
        itemNumber: "60",
        interval: "Monthly",
        location: "Safety Equipment",
        applicableVehicles: ["All"],
        system: "Safety Systems",
        keywords: [
            "safety equipment monthly", "first aid kit", "reflective triangles", "road flares",
            "fire extinguisher monthly", "safety equipment check monthly", "emergency equipment"
        ],
        commonFaults: [
            "First aid kit expired or incomplete", "Reflective triangles missing",
            "Fire extinguisher overdue for inspection", "Emergency equipment missing"
        ],
        procedure: "DRIVER/MAINTAINER\na. Verify presence and serviceability of all required safety equipment.\nb. Check fire extinguisher — pressure gauge in green, safety pin present, inspection current.\nc. Check first aid kit contents for completeness and expiration dates.\nd. Check reflective triangles or road flares for serviceability.\ne. Verify all required items per TM equipment list are present.",
        notFullyMissionCapable: "Fire extinguisher missing or discharged. Required safety equipment missing."
    },
    {
        itemNumber: "61",
        interval: "Monthly",
        location: "Vehicle Logbook",
        applicableVehicles: ["All"],
        system: "Administrative",
        keywords: [
            "logbook", "vehicle logbook", "PMCS records", "DA Form 2408", "equipment records",
            "vehicle forms", "maintenance records", "logbook current", "DA 2404", "5988"
        ],
        commonFaults: [
            "Logbook not current", "DA Form 2408-14 missing entries", "Fault entries not cleared",
            "Logbook missing from vehicle"
        ],
        procedure: "DRIVER/MAINTAINER\na. Verify vehicle logbook is present in vehicle.\nb. Check DA Form 2408-14 (Equipment Inspection and Maintenance Worksheet) for currency — all PMCS entries should be current.\nc. Verify all open faults are documented and NMC status is correct.\nd. Ensure all required forms are complete and up to date.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "62",
        interval: "Monthly",
        location: "Cargo Body/Hardware",
        applicableVehicles: ["M1078", "M1081", "M1083", "M1084", "M1085", "M1086"],
        system: "Body/Frame",
        keywords: [
            "cargo body", "cargo bed", "cargo body hardware", "cargo floor", "bed liner",
            "cargo floor damage", "cargo body bolts", "bed hardware", "cargo body monthly"
        ],
        commonFaults: [
            "Cargo floor damaged", "Cargo body hardware loose", "Cargo floor boards cracked",
            "Mounting bolts loose", "Cargo body damaged"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect cargo bed floor for cracks, breaks, or damage.\nb. Check cargo body mounting hardware for security.\nc. Inspect cargo floor boards for cracks or missing sections.\nd. Tighten any loose hardware and report damaged floor sections to unit maintenance.",
        notFullyMissionCapable: "Cargo floor so damaged that cargo cannot be safely transported."
    },
    {
        itemNumber: "63",
        interval: "Monthly",
        location: "Tailgate/Side Racks",
        applicableVehicles: ["M1078", "M1081", "M1083", "M1084", "M1085", "M1086"],
        system: "Body/Frame",
        keywords: [
            "tailgate", "side racks", "drop side", "tailgate latch", "side board",
            "tailgate chain", "tailgate broken", "side rack locking", "stake side"
        ],
        commonFaults: [
            "Tailgate latch broken", "Tailgate chain missing", "Side rack locking pin missing",
            "Tailgate hinge cracked", "Side board broken"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect tailgate for damage, proper operation, and secure latching.\nb. Check tailgate chains/cables for presence and condition.\nc. Inspect side rack locking pins and hinges.\nd. Check all side boards/stakes for damage.\ne. Verify all hardware operates correctly.",
        notFullyMissionCapable: "Tailgate will not latch securely. Tailgate chain missing (safety hazard). Side rack will not lock."
    },
    {
        itemNumber: "64",
        interval: "Monthly",
        location: "Canvas/Bows",
        applicableVehicles: ["M1078", "M1081", "M1083", "M1085"],
        system: "Body/Frame",
        keywords: [
            "canvas", "bows", "cargo cover", "top bows", "canvas cover", "bow bent",
            "canvas torn", "bow stowage", "cargo cover monthly"
        ],
        commonFaults: [
            "Canvas torn or ripped", "Bows bent or broken", "Canvas tie-down missing",
            "Canvas cover missing", "Bows will not seat properly"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect cargo cover canvas for tears, holes, or severe wear.\nb. Check bows for bends, cracks, or broken sections.\nc. Check canvas mounting hardware and tie-down straps.\nd. Verify bows seat properly in stake pockets.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "65",
        interval: "Monthly",
        location: "Winch Mounting Hardware (If Equipped)",
        applicableVehicles: ["M1081", "M1084", "M1086", "M1087", "M1088", "M1089"],
        system: "Body/Frame",
        keywords: [
            "winch mount", "winch mounting hardware", "winch bolts monthly", "winch frame",
            "winch support", "winch mounting bolts loose"
        ],
        commonFaults: [
            "Winch mounting bolts loose", "Winch frame cracked", "Mounting hardware missing",
            "Winch shifted on mount"
        ],
        procedure: "DRIVER/MAINTAINER (If Equipped)\na. Inspect winch mounting frame for cracks or damage.\nb. Check all winch mounting bolts for proper torque.\nc. Verify winch has not shifted on its mount.\nd. Report cracked frames or loose hardware to unit maintenance.",
        notFullyMissionCapable: "N/A (mission-dependent)"
    },
    {
        itemNumber: "66",
        interval: "Monthly",
        location: "Spare Tire",
        applicableVehicles: ["All"],
        system: "Tires/Wheels",
        keywords: [
            "spare tire monthly", "spare tire mount", "spare tire carrier", "spare tire pressure",
            "spare tire unserviceable", "spare tire rack"
        ],
        commonFaults: [
            "Spare tire flat or low pressure", "Spare tire carrier damaged",
            "Spare tire mounting hardware missing", "Spare tire unserviceable"
        ],
        procedure: "DRIVER/MAINTAINER\na. Check spare tire pressure — should match vehicle tire specification.\nb. Inspect spare tire for serviceability (tread depth, sidewall condition, no damage).\nc. Check spare tire carrier mount and hardware for security.\nd. Ensure spare can be removed quickly if needed.",
        notFullyMissionCapable: "Spare tire flat or unserviceable. Carrier mount broken — spare may fall off vehicle."
    },
    {
        itemNumber: "67",
        interval: "Monthly",
        location: "Ether Starting Aid",
        applicableVehicles: ["All"],
        system: "Engine",
        keywords: [
            "ether starting aid", "cold start aid", "starting fluid", "ether canister",
            "cold weather starting", "ether injector", "starting aid bottle"
        ],
        commonFaults: [
            "Ether canister empty", "Starting aid injection line leaking",
            "Injection nozzle clogged", "Starting aid bottle missing"
        ],
        procedure: "DRIVER/MAINTAINER\na. Check ether starting aid canister for presence and weight (shake — should not sound empty).\nb. Check injection line and nozzle for damage or leaks.\nc. Replace empty canisters per supply procedures.\nd. Do not spray ether manually into intake — use only the installed system.",
        notFullyMissionCapable: "N/A (mission-dependent for cold weather)"
    },
    {
        itemNumber: "68",
        interval: "Monthly",
        location: "Rifle Stowage Mount",
        applicableVehicles: ["All"],
        system: "Body/Frame",
        keywords: [
            "rifle mount", "weapon stowage", "rifle rack", "weapon rack", "rifle stowage mount",
            "M16 rack", "weapon mount broken"
        ],
        commonFaults: [
            "Rifle mount broken or missing", "Mount loose", "Locking mechanism inoperative"
        ],
        procedure: "DRIVER/MAINTAINER\na. Check rifle stowage mount for presence and serviceability.\nb. Verify mount locks and releases properly.\nc. Inspect mounting hardware for security.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "69",
        interval: "Monthly",
        location: "Amber Warning Light (If Equipped)",
        applicableVehicles: ["M1083", "M1084", "M1085", "M1086", "M1087", "M1088", "M1089"],
        system: "Electrical",
        keywords: [
            "amber warning light", "amber beacon", "rotating beacon", "warning light monthly",
            "amber strobe", "hazard beacon", "convoy warning light"
        ],
        commonFaults: [
            "Amber warning light inoperative", "Lamp burned out", "Beacon not rotating",
            "Mount damaged", "Wiring to light damaged"
        ],
        procedure: "DRIVER/MAINTAINER (If Equipped)\na. Test amber warning light operation through full rotation cycle.\nb. Check for proper illumination and rotation speed.\nc. Inspect mounting bracket for security.\nd. Check wiring for damage or loose connections.",
        notFullyMissionCapable: "Amber warning light inoperative when mission requires its use."
    },
    {
        itemNumber: "70",
        interval: "Monthly",
        location: "Hydraulic Manifold",
        applicableVehicles: ["M1084", "M1086", "M1087", "M1089"],
        system: "Fluid Systems",
        keywords: [
            "hydraulic manifold", "hydraulic control manifold", "manifold leaking",
            "hydraulic manifold monthly", "MHE manifold", "crane manifold"
        ],
        commonFaults: [
            "Hydraulic manifold leaking", "Manifold valve sticking", "Manifold fitting loose",
            "Manifold block cracked"
        ],
        procedure: "DRIVER/MAINTAINER (MHE/Crane equipped vehicles)\na. Inspect hydraulic manifold for external leaks at fittings and seams.\nb. Check manifold valve stems for leaking around seals.\nc. Operate hydraulic system and check for internal bypass or sluggish response.\nd. Report leaks or sticking valves to unit maintenance.",
        notFullyMissionCapable: "Hydraulic manifold leaking Class III. Manifold valve completely stuck — hydraulic function inoperative."
    },
    {
        itemNumber: "71",
        interval: "Monthly",
        location: "Back-up Hydraulic Pump",
        applicableVehicles: ["M1084", "M1086", "M1087", "M1089"],
        system: "Fluid Systems",
        keywords: [
            "backup hydraulic pump", "back-up pump", "emergency hydraulic pump",
            "hand pump hydraulic", "auxiliary pump", "backup pump monthly"
        ],
        commonFaults: [
            "Back-up hydraulic pump inoperative", "Pump leaking", "Pump handle missing",
            "Pump output insufficient"
        ],
        procedure: "DRIVER/MAINTAINER (MHE/Crane equipped vehicles)\na. Test back-up hydraulic pump operation.\nb. Verify pump produces adequate pressure to operate MHE.\nc. Check for pump leaks.\nd. Ensure pump handle is present and functional.",
        notFullyMissionCapable: "Back-up hydraulic pump inoperative (if primary pump fails, hydraulic functions cannot be operated)."
    },
    {
        itemNumber: "72",
        interval: "Monthly",
        location: "Tool Box",
        applicableVehicles: ["All"],
        system: "Body/Frame",
        keywords: [
            "tool box", "toolbox", "tool storage", "operator tools", "on-vehicle tools",
            "OVM tools", "tool box missing", "tool box lock", "tool box damaged"
        ],
        commonFaults: [
            "Tool box latch broken", "Tool box damaged", "Required tools missing",
            "Tool box mounting loose"
        ],
        procedure: "DRIVER/MAINTAINER\na. Check tool box for presence and secure mounting.\nb. Verify tool box latch operates correctly.\nc. Check that required on-vehicle tools (OVM) are present per -10 TM equipment list.\nd. Report missing tools through supply channels.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "73",
        interval: "Monthly",
        location: "11K SRW Cable (If Equipped)",
        applicableVehicles: ["M1081", "M1084", "M1086"],
        system: "Body/Frame",
        keywords: [
            "11K SRW cable", "winch cable monthly", "single rear winch cable",
            "cable kinks", "cable frays", "winch cable broken wires", "11000 pound winch"
        ],
        commonFaults: [
            "Cable kinked or frayed", "Broken wires in cable", "Cable improperly wound",
            "Cable drum worn", "Cable anchor bolt loose"
        ],
        procedure: "DRIVER/MAINTAINER (If Equipped)\na. Fully unwind cable and inspect for kinks, frays, or broken wires.\nb. Cable must be replaced if 6 or more wires are broken per foot of cable.\nc. Re-wind cable evenly onto drum with proper tension.\nd. Check cable anchor end for security.\ne. Lubricate cable with recommended lubricant.",
        notFullyMissionCapable: "N/A (mission-dependent)"
    },
    {
        itemNumber: "74",
        interval: "Monthly",
        location: "Cab Lift Cylinder",
        applicableVehicles: ["All"],
        system: "Body/Frame",
        keywords: [
            "cab lift cylinder", "cab hydraulic cylinder", "cab tilt cylinder",
            "cab cylinder leaking", "cab lift cylinder monthly"
        ],
        commonFaults: [
            "Cab lift cylinder leaking hydraulic fluid", "Cylinder rod scratched",
            "Cylinder seal damaged", "Cylinder will not hold cab up"
        ],
        procedure: "DRIVER/MAINTAINER\na. Tilt cab and inspect lift cylinder for hydraulic fluid leaks.\nb. Check cylinder rod for scratches, nicks, or corrosion that could damage seals.\nc. Check cylinder mounting at both ends for security.\nd. Verify cylinder holds cab in raised position without drifting down.",
        notFullyMissionCapable: "Cab lift cylinder leaks causing cab to lower unexpectedly during maintenance (safety hazard)."
    },
    {
        itemNumber: "75",
        interval: "Monthly",
        location: "Front Lifting Beam",
        applicableVehicles: ["M1087", "M1089"],
        system: "Body/Frame",
        keywords: [
            "front lifting beam", "recovery boom", "lifting beam", "wrecker front boom",
            "front boom monthly", "lifting beam cracked"
        ],
        commonFaults: [
            "Front lifting beam cracked or bent", "Boom mounting hardware loose",
            "Boom locking pin missing", "Boom pivot damaged"
        ],
        procedure: "DRIVER/MAINTAINER (M1087/M1089 Wrecker)\na. Inspect front lifting beam for cracks, bends, or damage.\nb. Check all boom mounting hardware and pivot points for security.\nc. Check locking pins for presence and serviceability.\nd. Report cracks or significant damage to unit maintenance.",
        notFullyMissionCapable: "Front lifting beam cracked or bent. Mounting hardware missing."
    },
    {
        itemNumber: "76",
        interval: "Monthly",
        location: "Spreader Bars",
        applicableVehicles: ["M1087", "M1089"],
        system: "Body/Frame",
        keywords: [
            "spreader bar", "spreader bars monthly", "wrecker spreader", "outrigger spreader",
            "spreader bar cracked", "spreader hardware"
        ],
        commonFaults: [
            "Spreader bar cracked or bent", "Mounting hardware missing", "Spreader pin missing"
        ],
        procedure: "DRIVER/MAINTAINER (M1087/M1089 Wrecker)\na. Inspect spreader bars for cracks, bends, or damage.\nb. Check mounting and connection hardware for security.\nc. Check locking pins for presence and serviceability.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "77",
        interval: "Monthly",
        location: "Oil Can Points",
        applicableVehicles: ["All"],
        system: "Drivetrain",
        keywords: [
            "oil can points", "oiler", "oil points monthly", "lubrication oil points",
            "door hinges oil", "linkage oil points", "cab hinges", "hood hinges",
            "door hinges lube"
        ],
        commonFaults: [
            "Door hinges squeaking", "Linkage dry and binding", "Hinges rusting from lack of oil"
        ],
        procedure: "DRIVER/MAINTAINER\na. Apply engine oil or light lubricant to all oil-can lubrication points per TM lubrication chart.\nb. Lubricate door hinges, hood hinges, cab hinges, and all other designated oil points.\nc. Wipe off excess oil to prevent dirt accumulation.",
        notFullyMissionCapable: "N/A"
    },

    // -------------------------------------------------------
    // TABLE 2-2 — M1078 & M1081 ONLY
    // -------------------------------------------------------
    {
        itemNumber: "T2-1",
        interval: "Before",
        location: "Troop Transport Alarm Switch (If Equipped)",
        applicableVehicles: ["M1078", "M1081"],
        system: "Safety Systems",
        keywords: [
            "troop alarm", "passenger alarm switch", "troop transport alarm", "alarm switch",
            "troop carrier alarm", "troop alarm inoperative", "alarm buzzer"
        ],
        commonFaults: [
            "Alarm switch inoperative", "Alarm not sounding", "Alarm switch broken",
            "Wiring to alarm damaged"
        ],
        procedure: "DRIVER (M1078/M1081 with troop transport seats if equipped)\na. Test troop transport alarm switch — press switch and verify alarm sounds.\nb. Check switch for damage.\nc. Check that alarm is audible to all passengers.\nd. Report inoperative alarm to unit maintenance.",
        notFullyMissionCapable: "Troop transport alarm switch inoperative when carrying personnel."
    },
    {
        itemNumber: "T2-2",
        interval: "During",
        location: "LMHC (If Equipped)",
        applicableVehicles: ["M1078", "M1081"],
        system: "Body/Frame",
        keywords: [
            "LMHC during", "load handling system during", "material handling during",
            "LMHC during operation", "container handling during"
        ],
        commonFaults: [
            "LMHC operates erratically during use", "LMHC makes abnormal noises",
            "LMHC hydraulic jerky operation"
        ],
        procedure: "DRIVER (If LMHC equipped)\na. During LMHC operation, monitor for abnormal noises, erratic movement, or hydraulic jerking.\nb. Check for any visual hydraulic leaks during operation.\nc. Verify all LMHC functions respond smoothly to controls.",
        notFullyMissionCapable: "LMHC will not function during operation."
    },
    {
        itemNumber: "T2-3",
        interval: "Weekly",
        location: "LMHC (If Equipped)",
        applicableVehicles: ["M1078", "M1081"],
        system: "Body/Frame",
        keywords: [
            "LMHC weekly", "load handling weekly", "container handling weekly",
            "LMHC hoses weekly", "LMHC cylinders weekly"
        ],
        commonFaults: [
            "LMHC hydraulic hose leaking", "LMHC cylinder leaking", "LMHC frame cracked",
            "LMHC locking pins worn"
        ],
        procedure: "DRIVER/MAINTAINER (If LMHC equipped)\na. Inspect all LMHC hydraulic hoses and cylinders for leaks.\nb. Check LMHC frame members for cracks or damage.\nc. Inspect locking pins and hooks for wear or damage.\nd. Check hydraulic fluid level for LMHC system.",
        notFullyMissionCapable: "LMHC inoperative. Active hydraulic leak from LMHC system."
    },
    {
        itemNumber: "T2-5",
        interval: "Weekly",
        location: "Cargo Bed",
        applicableVehicles: ["M1078", "M1081"],
        system: "Body/Frame",
        keywords: [
            "cargo bed weekly", "cargo floor weekly", "cargo bed damage weekly",
            "cargo bed hardware weekly", "bed inspection weekly"
        ],
        commonFaults: [
            "Cargo bed floor cracked", "Cargo bed hardware loose", "Floor boards damaged",
            "Drain plugs missing"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect cargo bed floor for cracks or damage.\nb. Check cargo bed mounting hardware for security.\nc. Check floor board drain plugs for presence.\nd. Inspect bed cross-members for damage.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "T2-6",
        interval: "Monthly",
        location: "Cargo Bed Sides and Tailgate",
        applicableVehicles: ["M1078", "M1081"],
        system: "Body/Frame",
        keywords: [
            "cargo bed sides monthly", "tailgate monthly", "side panels monthly",
            "bed sides inspection monthly"
        ],
        commonFaults: [
            "Cargo bed side panel cracked", "Tailgate latch worn", "Side hinge damaged",
            "Bed side hardware missing"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect cargo bed side panels for cracks or damage.\nb. Check tailgate hinges and latch for wear and function.\nc. Inspect all side hardware and mounting points.",
        notFullyMissionCapable: "Tailgate will not latch safely."
    },
    {
        itemNumber: "T2-7",
        interval: "Monthly",
        location: "Ladder",
        applicableVehicles: ["M1078", "M1081"],
        system: "Body/Frame",
        keywords: [
            "ladder monthly", "cargo ladder monthly", "rear ladder", "ladder cracked monthly",
            "ladder rung broken"
        ],
        commonFaults: [
            "Ladder rung cracked or broken", "Ladder mount loose", "Ladder bent"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect cargo access ladder for cracked or broken rungs.\nb. Check ladder mounting hardware for security.\nc. Check ladder for bends that would prevent safe use.",
        notFullyMissionCapable: "Ladder rung broken. Ladder mount loose to point ladder could fall."
    },
    {
        itemNumber: "T2-8",
        interval: "Monthly",
        location: "Troopseats (If Equipped)",
        applicableVehicles: ["M1078", "M1081"],
        system: "Safety Systems",
        keywords: [
            "troopseat", "troop seat", "passenger seat", "bench seat", "cargo seat",
            "seat mounting", "troop seat broken"
        ],
        commonFaults: [
            "Troop seat broken", "Seat mounting loose", "Seat cushion deteriorated",
            "Seat locking mechanism broken"
        ],
        procedure: "DRIVER/MAINTAINER (If Equipped)\na. Inspect all troop seats for damage.\nb. Check seat mounting hardware for security.\nc. Check seat folding mechanism for proper operation.\nd. Inspect seat cushions for serviceability.",
        notFullyMissionCapable: "Troop seat mounting loose to point of being unsafe for personnel."
    },
    {
        itemNumber: "T2-9",
        interval: "Monthly",
        location: "Cargo Cover",
        applicableVehicles: ["M1078", "M1081"],
        system: "Body/Frame",
        keywords: [
            "cargo cover monthly", "cargo tarp", "cargo cover tie-downs",
            "cargo cover frame", "tarp monthly"
        ],
        commonFaults: [
            "Cargo cover torn or ripped", "Tie-down straps missing", "Bow support broken",
            "Cover securing hardware missing"
        ],
        procedure: "DRIVER/MAINTAINER\na. Inspect cargo cover for tears, holes, or deterioration.\nb. Check all tie-down straps and securing hardware for condition.\nc. Check bow supports for bends or breaks.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "T2-10",
        interval: "Monthly",
        location: "LMHC (If Equipped)",
        applicableVehicles: ["M1078", "M1081"],
        system: "Body/Frame",
        keywords: [
            "LMHC monthly", "load handling monthly", "LMHC detailed monthly",
            "LMHC cylinder monthly", "LMHC pins monthly"
        ],
        commonFaults: [
            "LMHC pivot pins worn", "LMHC cylinder rod scored", "LMHC safety lock inoperative",
            "LMHC hydraulic reservoir low"
        ],
        procedure: "DRIVER/MAINTAINER (If LMHC equipped)\na. Perform detailed monthly inspection of all LMHC components.\nb. Check all pivot pins and bearings for wear.\nc. Inspect cylinder rods for scoring or corrosion.\nd. Verify all safety locks and interlocks function correctly.\ne. Check LMHC hydraulic fluid reservoir level.\nf. Lubricate all grease points on LMHC per lubrication chart.",
        notFullyMissionCapable: "LMHC safety lock inoperative. LMHC unable to hold loaded container."
    },

    // -------------------------------------------------------
    // TABLE 2-3 — M1081 ONLY (Rear Extraction Assembly)
    // -------------------------------------------------------
    {
        itemNumber: "T3-1",
        interval: "Weekly",
        location: "Hinges",
        applicableVehicles: ["M1081"],
        system: "Body/Frame",
        keywords: [
            "extraction hinge", "rear extraction hinge", "M1081 hinge", "extraction assembly hinge",
            "hinge worn", "hinge cracked", "rear door hinge"
        ],
        commonFaults: [
            "Hinge worn or loose", "Hinge cracked", "Hinge pin missing", "Hinge binding"
        ],
        procedure: "DRIVER/MAINTAINER (M1081)\na. Inspect all rear extraction assembly hinges for wear, cracks, or looseness.\nb. Check hinge pins for presence and security.\nc. Lubricate hinges per lubrication schedule.\nd. Report worn or cracked hinges to unit maintenance.",
        notFullyMissionCapable: "Hinge cracked through. Hinge pin missing causing assembly to be unsecured."
    },
    {
        itemNumber: "T3-2",
        interval: "Weekly",
        location: "Retainer Pins and Buffer Housings",
        applicableVehicles: ["M1081"],
        system: "Body/Frame",
        keywords: [
            "retainer pin", "buffer housing", "extraction retainer", "M1081 retainer pin",
            "buffer housing M1081", "extraction pin"
        ],
        commonFaults: [
            "Retainer pin missing", "Buffer housing cracked", "Pin not seating properly",
            "Buffer housing worn"
        ],
        procedure: "DRIVER/MAINTAINER (M1081)\na. Check all retainer pins for presence and proper seating.\nb. Inspect buffer housings for cracks or excessive wear.\nc. Check that pins lock securely in housing.",
        notFullyMissionCapable: "Retainer pin missing. Buffer housing cracked causing unsafe operation."
    },
    {
        itemNumber: "T3-3",
        interval: "Weekly",
        location: "Latches",
        applicableVehicles: ["M1081"],
        system: "Body/Frame",
        keywords: [
            "extraction latch", "rear latch M1081", "extraction assembly latch",
            "latch broken M1081", "latch not engaging"
        ],
        commonFaults: [
            "Latch broken or worn", "Latch not engaging fully", "Latch spring weak",
            "Latch pin worn"
        ],
        procedure: "DRIVER/MAINTAINER (M1081)\na. Test each latch through its full cycle — verify engages and releases properly.\nb. Check latch mechanisms for wear or damage.\nc. Verify latches hold securely under load.",
        notFullyMissionCapable: "Latch will not engage or hold in locked position."
    },
    {
        itemNumber: "T3-4",
        interval: "Weekly",
        location: "Davit",
        applicableVehicles: ["M1081"],
        system: "Body/Frame",
        keywords: [
            "davit", "davit M1081", "extraction davit", "davit arm", "davit mount",
            "davit cracked", "davit bent"
        ],
        commonFaults: [
            "Davit arm cracked or bent", "Davit mount loose", "Davit pin missing",
            "Davit won't rotate or extend"
        ],
        procedure: "DRIVER/MAINTAINER (M1081)\na. Inspect davit arm for cracks or bends.\nb. Check davit mounting hardware for security.\nc. Verify davit rotates and extends through full range of motion.\nd. Lubricate pivot points per lubrication schedule.",
        notFullyMissionCapable: "Davit cracked or bent. Mount loose — unsafe for lifting operations."
    },
    {
        itemNumber: "T3-5",
        interval: "Weekly",
        location: "Rear Extraction Assembly",
        applicableVehicles: ["M1081"],
        system: "Body/Frame",
        keywords: [
            "rear extraction assembly", "extraction assembly M1081", "extraction mechanism",
            "extraction rail", "extraction frame"
        ],
        commonFaults: [
            "Extraction assembly frame cracked", "Rail bent or damaged", "Assembly does not slide",
            "Mounting hardware loose"
        ],
        procedure: "DRIVER/MAINTAINER (M1081)\na. Inspect entire rear extraction assembly frame for cracks or bends.\nb. Check extraction rails for damage or binding.\nc. Verify assembly slides smoothly through full travel.\nd. Check all mounting hardware for security.",
        notFullyMissionCapable: "Extraction assembly will not function. Frame cracked."
    },
    {
        itemNumber: "T3-6",
        interval: "Weekly",
        location: "Side Assembly",
        applicableVehicles: ["M1081"],
        system: "Body/Frame",
        keywords: [
            "side assembly M1081", "extraction side assembly", "rear side assembly",
            "side panel extraction", "side frame extraction"
        ],
        commonFaults: [
            "Side assembly cracked", "Side panel hardware loose", "Side assembly hinge damaged"
        ],
        procedure: "DRIVER/MAINTAINER (M1081)\na. Inspect side assembly panels for cracks or damage.\nb. Check side assembly hardware and hinges for security.\nc. Verify side assemblies open and close fully.",
        notFullyMissionCapable: "Side assembly cracked through. Hardware missing causing unsafe condition."
    },
    {
        itemNumber: "T3-7",
        interval: "Weekly",
        location: "Load Spreader",
        applicableVehicles: ["M1081"],
        system: "Body/Frame",
        keywords: [
            "load spreader", "M1081 load spreader", "spreader plate", "extraction load spreader",
            "load spreader cracked"
        ],
        commonFaults: [
            "Load spreader cracked", "Load spreader bent", "Mounting hardware missing",
            "Load spreader missing"
        ],
        procedure: "DRIVER/MAINTAINER (M1081)\na. Inspect load spreader for cracks, bends, or damage.\nb. Check load spreader mounting hardware for security.\nc. Verify load spreader is present and properly stowed when not in use.",
        notFullyMissionCapable: "Load spreader cracked or bent — unsafe for lifting operations."
    },

    // -------------------------------------------------------
    // TABLE 2-4 — M1079 VAN ONLY
    // -------------------------------------------------------
    {
        itemNumber: "T4-1",
        interval: "Before",
        location: "Van Body",
        applicableVehicles: ["M1079"],
        system: "Body/Frame",
        keywords: [
            "van body", "van body damaged", "van body inspection", "M1079 body",
            "van body leak", "van body seals", "van body dents"
        ],
        commonFaults: [
            "Van body damaged or dented", "Body seals deteriorated", "Van body leaking",
            "Body mounting hardware loose"
        ],
        procedure: "DRIVER\na. Inspect van body exterior for damage, dents, or cracks that could compromise weatherproofing.\nb. Check body seals around doors and seams for deterioration.\nc. Check body mounting hardware for security.\nd. Report significant damage to unit maintenance.",
        notFullyMissionCapable: "Van body damaged to point that contents cannot be protected or vehicle cannot safely operate."
    },
    {
        itemNumber: "T4-2",
        interval: "Before",
        location: "Van Doors",
        applicableVehicles: ["M1079"],
        system: "Body/Frame",
        keywords: [
            "van doors", "van door latch", "van door hinge", "van door seal", "rear van door",
            "side van door", "van door won't latch", "van door damaged"
        ],
        commonFaults: [
            "Van door will not latch", "Door hinge broken", "Door seal deteriorated",
            "Door handle broken", "Door binding"
        ],
        procedure: "DRIVER\na. Open and close all van doors — check for smooth operation.\nb. Verify all door latches engage fully and hold door securely closed.\nc. Check door hinges for wear or damage.\nd. Inspect door seals for cuts or deterioration.",
        notFullyMissionCapable: "Van door will not latch closed securely. Hinge broken — door cannot be secured."
    },
    {
        itemNumber: "T4-3",
        interval: "Before",
        location: "Van Doors (Cont.)",
        applicableVehicles: ["M1079"],
        system: "Body/Frame",
        keywords: [
            "van door cont", "van door exterior check", "van door exterior",
            "exterior van door", "van door exterior damage"
        ],
        commonFaults: [
            "Exterior door hardware damaged", "Door step damaged", "Exterior seal missing"
        ],
        procedure: "DRIVER\na. Continue van door inspection — check exterior hardware for all doors.\nb. Check door steps for damage that could cause injury.\nc. Verify exterior door seals are intact and provide weatherproofing.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "T4-4",
        interval: "Before",
        location: "Ladder",
        applicableVehicles: ["M1079"],
        system: "Body/Frame",
        keywords: [
            "van ladder", "van body ladder", "M1079 ladder", "roof access ladder",
            "van ladder rung", "ladder broken van"
        ],
        commonFaults: [
            "Ladder rung broken", "Ladder mount loose", "Ladder missing", "Ladder bent"
        ],
        procedure: "DRIVER\na. Inspect van body access/roof ladder for broken or cracked rungs.\nb. Check ladder mounting hardware for security.\nc. Verify ladder can support personnel weight safely.",
        notFullyMissionCapable: "Ladder rung broken. Ladder mount loose to point ladder is unsafe."
    },
    {
        itemNumber: "T4-5",
        interval: "Before",
        location: "Ladder (Cont.)",
        applicableVehicles: ["M1079"],
        system: "Body/Frame",
        keywords: [
            "van ladder continued", "ladder anti-slip", "ladder safety", "ladder grips"
        ],
        commonFaults: [
            "Ladder anti-slip treads missing", "Ladder feet damaged"
        ],
        procedure: "DRIVER\na. Check ladder anti-slip tread surfaces for wear or damage.\nb. Verify ladder feet are present and provide stable contact.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "T4-6",
        interval: "Before",
        location: "Van Body Exterior",
        applicableVehicles: ["M1079"],
        system: "Body/Frame",
        keywords: [
            "van body exterior", "van exterior inspection", "van exterior damage",
            "van body exterior check", "roof van", "van roof"
        ],
        commonFaults: [
            "Exterior body damaged", "Roof dented or cracked", "Exterior seals failing",
            "Mounting hardware corroded"
        ],
        procedure: "DRIVER\na. Inspect van body exterior surfaces including roof for dents, cracks, or damage.\nb. Check all exterior seams and joints for weatherproofing.\nc. Inspect all exterior mounting hardware for corrosion or damage.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "T4-7",
        interval: "During",
        location: "Interior Lights",
        applicableVehicles: ["M1079"],
        system: "Electrical",
        keywords: [
            "van interior lights", "van lights", "interior lighting van", "van dome light",
            "interior light inoperative", "van cabin lights"
        ],
        commonFaults: [
            "Interior lights inoperative", "Light switch broken", "Bulb burned out",
            "Light dimmer inoperative"
        ],
        procedure: "DRIVER\na. During operation, check that interior van lights function on all settings.\nb. Test dimmer switch through full range.\nc. Check for burned-out bulbs.\nd. Report inoperative lights to unit maintenance.",
        notFullyMissionCapable: "Interior lights inoperative when mission requires work inside van body."
    },
    {
        itemNumber: "T4-8",
        interval: "During",
        location: "Fan",
        applicableVehicles: ["M1079"],
        system: "Electrical",
        keywords: [
            "van fan", "van ventilation fan", "interior fan", "van cooling fan",
            "fan inoperative van", "ventilation fan"
        ],
        commonFaults: [
            "Fan inoperative", "Fan speed control broken", "Fan making noise", "Fan blade damaged"
        ],
        procedure: "DRIVER\na. Test van body fan operation on all speed settings.\nb. Listen for abnormal noise from fan.\nc. Verify fan provides adequate airflow.\nd. Report inoperative fan to unit maintenance.",
        notFullyMissionCapable: "Fan inoperative (mission-dependent — if required for equipment cooling)."
    },
    {
        itemNumber: "T4-9",
        interval: "Weekly",
        location: "Power Panel Receptacles",
        applicableVehicles: ["M1079"],
        system: "Electrical",
        keywords: [
            "power panel", "receptacle", "van power panel", "electrical receptacle",
            "power panel weekly", "panel outlet", "power outlet van"
        ],
        commonFaults: [
            "Receptacle damaged", "Receptacle not providing power", "Cover missing",
            "Receptacle corroded"
        ],
        procedure: "DRIVER/MAINTAINER (M1079)\na. Check all power panel receptacles for damage, corrosion, or missing covers.\nb. Test receptacles for power output with appropriate test equipment.\nc. Replace missing receptacle covers.",
        notFullyMissionCapable: "Power panel inoperative (mission-dependent)."
    },
    {
        itemNumber: "T4-10",
        interval: "Weekly",
        location: "Pod",
        applicableVehicles: ["M1079"],
        system: "Body/Frame",
        keywords: [
            "pod", "van pod", "M1079 pod", "pod mounting", "pod hardware"
        ],
        commonFaults: [
            "Pod mounting hardware loose", "Pod damaged", "Pod hardware missing"
        ],
        procedure: "DRIVER/MAINTAINER (M1079)\na. Inspect pod mounting hardware for security.\nb. Check pod for damage.\nc. Verify pod is secure and will not shift during operation.",
        notFullyMissionCapable: "Pod mounting loose to point pod could shift during movement."
    },
    {
        itemNumber: "T4-11",
        interval: "Weekly",
        location: "Electrical Receptacles and Binding Posts",
        applicableVehicles: ["M1079"],
        system: "Electrical",
        keywords: [
            "binding posts", "electrical binding post", "van receptacles weekly",
            "binding post corroded", "terminal post", "binding post damaged"
        ],
        commonFaults: [
            "Binding post corroded", "Binding post loose", "Receptacle damaged",
            "Receptacle cover missing"
        ],
        procedure: "DRIVER/MAINTAINER (M1079)\na. Check all electrical receptacles and binding posts for corrosion, damage, or looseness.\nb. Clean corroded terminals.\nc. Verify all covers and protective caps are present.\nd. Tighten any loose binding posts.",
        notFullyMissionCapable: "N/A"
    },
    {
        itemNumber: "T4-12",
        interval: "Weekly",
        location: "110/208 VAC POWER DISTRIBUTION PANEL",
        applicableVehicles: ["M1079"],
        system: "Electrical",
        keywords: [
            "110 VAC panel", "208 VAC panel", "power distribution panel", "AC power panel",
            "circuit breaker", "power distribution van", "AC distribution panel"
        ],
        commonFaults: [
            "Circuit breaker tripped", "Panel cover missing", "Wiring to panel damaged",
            "Panel indicator light inoperative"
        ],
        procedure: "DRIVER/MAINTAINER (M1079)\na. Inspect 110/208 VAC power distribution panel for damage.\nb. Check circuit breakers — reset any tripped breakers.\nc. Check panel cover for presence and secure mounting.\nd. Inspect wiring at panel for damage or loose connections.\ne. Verify panel indicator lights function.",
        notFullyMissionCapable: "110/208 VAC power distribution panel inoperative (mission-dependent)."
    }
];

// ========================================
// VEHICLE MAPPING FOR LMTV/FMTV
// ========================================

const vehicleMapping = {
    'm1078': ['M1078'],
    'm1079': ['M1079'],
    'm1080': ['M1080'],
    'm1081': ['M1081'],
    'm1083': ['M1083'],
    'm1084': ['M1084'],
    'm1085': ['M1085'],
    'm1086': ['M1086'],
    'm1087': ['M1087'],
    'm1088': ['M1088'],
    'm1089': ['M1089']
};

const vehicleInfo = {
    'm1078': {
        name: 'M1078 — 2½-Ton Cargo LMTV',
        description: 'Standard 2½-ton cargo, Light Medium Tactical Vehicle',
        features: ['2½-ton payload', 'Open cargo bed', 'CTI tire system', 'Caterpillar diesel engine']
    },
    'm1079': {
        name: 'M1079 — 2½-Ton Van LMTV',
        description: '2½-ton van body variant',
        features: ['Van body configuration', 'Environmental protection', 'CTI tire system']
    },
    'm1080': {
        name: 'M1080 — 2½-Ton Chassis LMTV',
        description: '2½-ton chassis (without body) for special equipment',
        features: ['Chassis-only configuration', 'Front winch equipped', 'CTI tire system']
    },
    'm1081': {
        name: 'M1081 — 2½-Ton Cargo LMTV w/Winch',
        description: '2½-ton cargo with front winch',
        features: ['2½-ton payload', 'Front winch', 'Open cargo bed', 'CTI tire system']
    },
    'm1083': {
        name: 'M1083 — 5-Ton Cargo FMTV',
        description: 'Standard 5-ton cargo, Family of Medium Tactical Vehicles',
        features: ['5-ton payload', 'Open cargo bed', 'CTI tire system', 'Extended chassis']
    },
    'm1084': {
        name: 'M1084 — 5-Ton Cargo FMTV w/MHE',
        description: '5-ton cargo with material handling equipment (crane)',
        features: ['5-ton payload', 'Crane/MHE equipped', 'CTI tire system']
    },
    'm1085': {
        name: 'M1085 — 5-Ton Long Wheel Base Cargo FMTV',
        description: '5-ton long wheelbase cargo variant',
        features: ['5-ton payload', 'Extended wheelbase', 'Longer cargo bed', 'CTI tire system']
    },
    'm1086': {
        name: 'M1086 — 5-Ton Long Wheel Base Cargo FMTV w/MHE',
        description: '5-ton long wheelbase cargo with crane',
        features: ['5-ton payload', 'Extended wheelbase', 'Crane/MHE equipped']
    },
    'm1087': {
        name: 'M1087 — 5-Ton Wrecker FMTV',
        description: '5-ton wrecker/recovery vehicle',
        features: ['Recovery boom', 'Winch system', 'CTI tire system']
    },
    'm1088': {
        name: 'M1088 — 5-Ton Tractor FMTV',
        description: '5-ton tractor for semi-trailer operations',
        features: ['Semi-trailer coupling', 'Air brake connections', 'CTI tire system']
    },
    'm1089': {
        name: 'M1089 — 5-Ton Wrecker FMTV',
        description: '5-ton medium wrecker',
        features: ['Recovery equipment', 'Boom and winch', 'CTI tire system']
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

    init() {
        this.tmReference = 'TM 9-2320-365-10';
        this.inspectionItems = [];
        this.inspectionIndex = 0;
        this.inspectionResults = [];
        this.inspectionMode = false;
        this.initializeElements();
        this.setupEventListeners();
        this.initDarkMode();
        this.initInspection();
        this.filterItems();
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
        this.inspectionItems = pmcsData.filter(item => {
            const isTable21 = this.getItemTable(item) === '2-1';
            const matchesInterval = intervals.includes(item.interval.toLowerCase());
            return isTable21 && matchesInterval;
        });
        this.inspectionIndex = 0;
        this.inspectionResults = [];
        this.closeInspectionSetup();
        if (this.inspectionItems.length === 0) { alert('No Table 2-1 items match that inspection interval selection.'); return; }
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
        const displayItemNumber = this.getDisplayItemNumber(item);
        const faultsHtml = item.commonFaults && item.commonFaults.length > 0 ? `
            <div class="insp-faults">
                <div class="procedure-title">🔧 Common Faults</div>
                <div class="procedure-content common-faults">${item.commonFaults.map(f => `<span class="fault-tag">${this.escapeHtml(f)}</span>`).join('')}</div>
            </div>` : '';
        return `<div class="insp-card">
            <div class="insp-card-header">
                <div class="insp-item-meta">
                    <span class="item-number">${this.escapeHtml(displayItemNumber)}</span>
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
                    <strong>${this.escapeHtml(this.getDisplayItemNumber(r.item))}</strong>
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
            lines.push(`  Table: ${this.getItemTable(r.item)}`);
            lines.push(`  Item Number: ${this.getDisplayItemNumber(r.item)}`);
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
        const selectedVehicle = this.vehicleFilter?.value || 'all';
        const baseData = this.getDisplayDataset(selectedVehicle);
        const filteredData = baseData.filter(item => {
            const matchesSearch = !searchTerm || this.itemMatchesSearch(item, searchTerm);
            const matchesInterval = selectedInterval === 'all' || item.interval.toLowerCase() === selectedInterval;
            const matchesSystem = selectedSystem === 'all' || (item.system && item.system.toLowerCase() === selectedSystem);
            return matchesSearch && matchesInterval && matchesSystem;
        });

        const itemCount = filteredData.length;
        this.updateVehicleInfo(selectedVehicle, itemCount);
        this.displayItems(filteredData);
    }

    getItemTable(item) {
        const itemNumber = item?.itemNumber || '';
        if (itemNumber.startsWith('T2-')) return '2-2';
        if (itemNumber.startsWith('T3-')) return '2-3';
        if (itemNumber.startsWith('T4-')) return '2-4';
        return '2-1';
    }

    getDisplayItemNumber(item) {
        const itemNumber = item?.itemNumber || '';
        const prefixedMatch = itemNumber.match(/^T[234]-(.+)$/);
        return prefixedMatch ? prefixedMatch[1] : itemNumber;
    }

    getItemKey(item) {
        return `${this.getItemTable(item)}:${this.getDisplayItemNumber(item)}:${item.location}`;
    }

    getDisplayTablesForVehicle(selectedVehicle) {
        if (selectedVehicle === 'all') return ['2-1'];

        const tableMap = {
            m1078: ['2-2'],
            m1079: ['2-4'],
            m1081: ['2-2', '2-3']
        };

        return ['2-1', ...(tableMap[selectedVehicle] || [])];
    }

    getDisplayDataset(selectedVehicle) {
        const allowedTables = this.getDisplayTablesForVehicle(selectedVehicle);
        return pmcsData.filter(item => allowedTables.includes(this.getItemTable(item)));
    }

    itemMatchesVehicle(item, selectedVehicle) {
        if (selectedVehicle === 'all') return true;
        const applicableVehicles = item.applicableVehicles || ['All'];
        if (applicableVehicles.includes('All')) return true;
        const vehicleModels = vehicleMapping[selectedVehicle] || [];
        return vehicleModels.some(model => applicableVehicles.includes(model));
    }

    itemMatchesSearch(item, searchTerm) {
        const searchFields = [item.itemNumber, this.getDisplayItemNumber(item), item.location, item.procedure, item.notFullyMissionCapable, item.system || ''];
        if (item.keywords) searchFields.push(...item.keywords);
        if (item.commonFaults) searchFields.push(...item.commonFaults);
        const searchVariants = this.createSearchVariants(searchTerm);
        return searchFields.some(field => {
            const fieldVariants = this.createSearchVariants(field);
            return searchVariants.some(sv => fieldVariants.some(fv => fv.includes(sv)));
        });
    }

    createSearchVariants(text) {
        if (!text) return [''];
        const variants = new Set();
        const original = text.toLowerCase().trim();
        variants.add(original);
        variants.add(this.normalizeSearchText(original));
        const expanded = this.expandContractions(original);
        variants.add(expanded);
        variants.add(this.normalizeSearchText(expanded));
        variants.add(original.replace(/[''`]/g, ' ').replace(/\s+/g, ' ').trim());
        return Array.from(variants).filter(v => v.length > 0);
    }

    normalizeSearchText(text) {
        if (!text) return '';
        return text.toLowerCase().replace(/[''`]/g, '').replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
    }

    expandContractions(text) {
        if (!text) return '';
        const contractions = { "won't": "will not", "can't": "cannot", "don't": "do not", "doesn't": "does not", "didn't": "did not", "isn't": "is not", "aren't": "are not", "wasn't": "was not", "weren't": "were not", "haven't": "have not", "hasn't": "has not", "wouldn't": "would not", "couldn't": "could not", "shouldn't": "should not", "it's": "it is" };
        let expanded = text.toLowerCase();
        for (const [c, e] of Object.entries(contractions)) {
            expanded = expanded.replace(new RegExp(`\\b${c.replace(/'/g, "[''`]")}\\b`, 'gi'), e);
        }
        return expanded;
    }

    handleVehicleFilterChange() {
        const selectedVehicle = this.vehicleFilter?.value || 'all';
        const filteredCount = this.getDisplayDataset(selectedVehicle).length;
        this.updateVehicleInfo(selectedVehicle, filteredCount);
        this.filterItems();
    }

    updateVehicleInfo(selectedVehicle, itemCount) {
        if (!this.vehicleInfo) return;
        if (selectedVehicle === 'all') { this.vehicleInfo.style.display = 'none'; return; }
        const info = vehicleInfo[selectedVehicle];
        if (!info) return;
        const hasSpecificTable = this.getDisplayTablesForVehicle(selectedVehicle).some(table => table !== '2-1');
        this.vehicleInfo.style.display = 'block';
        const titleEl = document.getElementById('vehicleTitle');
        const descEl = document.getElementById('vehicleDescription');
        const itemsEl = document.getElementById('applicableItems');
        if (titleEl) titleEl.textContent = info.name;
        if (descEl) descEl.textContent = hasSpecificTable
            ? info.description
            : 'No vehicle-specific supplemental table is defined here. Use "All LMTV/FMTV Variants" for Table 2-1 PMCS.';
        if (itemsEl) itemsEl.textContent = `${itemCount} Items`;
    }

    showVehicleInfoModal(vehicleType) {
        if (!this.vehicleInfoModal || !vehicleType || vehicleType === 'all') return;
        const info = vehicleInfo[vehicleType];
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
        const displayItemNumber = this.getDisplayItemNumber(item);
        const commonFaultsSection = item.commonFaults && item.commonFaults.length > 0 ? `
            <div class="procedure-section">
                <div class="procedure-title">🔧 Common Faults</div>
                <div class="procedure-content common-faults">
                    ${item.commonFaults.map(f => `<span class="fault-tag">${this.escapeHtml(f)}</span>`).join('')}
                </div>
            </div>` : '';

        const vehicleSection = item.applicableVehicles && !item.applicableVehicles.includes('All') ? `
            <div class="vehicle-badge" style="display:inline-block;margin-bottom:10px;">
                ${item.applicableVehicles.join(', ')}
            </div>` : '';

        return `
            <div class="item-card" data-item="${this.escapeHtml(this.getItemKey(item))}">
                <div class="item-header">
                    <div class="item-info">
                        <div class="item-number">${this.escapeHtml(displayItemNumber)}</div>
                        <span class="tm-ref-badge">${this.escapeHtml(this.tmReference || 'TM 9-2320-365-10')}</span>
                        ${item.system ? `<div class="system-badge">${this.escapeHtml(item.system)}</div>` : ''}
                        ${this.getNFMCBadge(item.notFullyMissionCapable)}
                    </div>
                    <div class="interval-badge ${intervalClass}">${this.escapeHtml(item.interval)}</div>
                </div>
                <h3 class="location-title">${this.escapeHtml(item.location)}</h3>
                ${vehicleSection}
                ${commonFaultsSection}
                <div class="procedure-section">
                    <div class="procedure-title">📋 Crew Member Procedure</div>
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
                <button class="copy-btn" data-item="${this.escapeHtml(this.getItemKey(item))}">Copy for 5988 Form</button>
            </div>`;
    }

    getProcedureClass(procedure) {
        const lp = procedure.toLowerCase();
        if (lp.includes('warning')) return 'warning';
        if (lp.includes('caution')) return 'caution';
        if (lp.includes('note')) return 'note';
        return '';
    }

    formatProcedureText(text) {
        return this.escapeHtml(text)
            .replace(/WARNING/gi, '<strong style="color:#f57c00;">WARNING</strong>')
            .replace(/CAUTION/gi, '<strong style="color:#ff9800;">CAUTION</strong>')
            .replace(/NOTE/gi, '<strong style="color:#2196f3;">NOTE</strong>')
            .replace(/DRIVER/gi, '<strong>DRIVER</strong>')
            .split('\n').map(l => l.trim() ? `<p>${l.trim()}</p>` : '').filter(l => l).join('');
    }

    attachCopyButtonListeners() {
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showCopyModal(btn.getAttribute('data-item'));
            });
        });
    }

    showCopyModal(itemNumber) {
        const item = pmcsData.find(i => this.getItemKey(i) === itemNumber);
        if (!item || !this.copyModal) return;
        this.currentModalItem = item;
        if (this.modalElements.itemNumber) this.modalElements.itemNumber.textContent = this.getDisplayItemNumber(item);
        if (this.modalElements.location) this.modalElements.location.textContent = item.location;
        if (this.modalElements.interval) this.modalElements.interval.textContent = item.interval;
        if (this.modalElements.status) this.modalElements.status.textContent = item.notFullyMissionCapable;
        if (this.modalElements.vehicle) {
            const sv = this.vehicleFilter?.value || 'all';
            this.modalElements.vehicle.textContent = sv !== 'all' && vehicleInfo[sv] ? vehicleInfo[sv].name : 'All LMTV/FMTV Variants';
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
        const sv = this.vehicleFilter?.value || 'all';
        const vehicleName = sv !== 'all' && vehicleInfo[sv] ? vehicleInfo[sv].name : 'All LMTV/FMTV Variants';
        const text = `TM 9-2320-365-10 PMCS\nTable: ${this.getItemTable(item)}\nItem: ${this.getDisplayItemNumber(item)}\nInterval: ${item.interval}\nLocation: ${item.location}\nVehicle: ${vehicleName}\nNot Mission Capable If: ${item.notFullyMissionCapable}`;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => this.showCopySuccess()).catch(() => this.fallbackCopy(text));
        } else {
            this.fallbackCopy(text);
        }
    }

    fallbackCopy(text) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try { document.execCommand('copy'); this.showCopySuccess(); } catch (e) { console.error('Copy failed:', e); }
        document.body.removeChild(ta);
    }

    showCopySuccess() {
        const btn = this.modalElements.copyBtn;
        if (!btn) return;
        const orig = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = '#4caf50';
        setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 2000);
    }

    isInputFocused() {
        const el = document.activeElement;
        return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT');
    }

    debounce(fn, delay) {
        let timer;
        return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
    }

    escapeHtml(text) {
        if (!text) return '';
        return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }
}

// Initialize app
const app = new PMCSApp();
