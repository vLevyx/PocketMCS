// Tactical Quiet Generator PMCS data — TM 9-6115-749/750/751/752/753-10
(function () {
    const pmcsData = [
        {
            "itemNumber": "1",
            "interval": "Before",
            "location": "Generator Set Exterior",
            "system": "Body/Frame",
            "keywords": [
                "exterior damage",
                "body damage",
                "frame damage",
                "dents",
                "cracks",
                "bent panels",
                "housing damage",
                "enclosure damage",
                "generator damage",
                "physical damage",
                "structural damage",
                "skid base",
                "lifting eyes",
                "tie-down points"
            ],
            "commonFaults": [
                "Dents or cracks in housing panels",
                "Bent or missing panels",
                "Damaged skid base",
                "Missing or damaged lifting eyes",
                "Cracked enclosure",
                "Loose panel fasteners",
                "Damaged tie-down provisions",
                "Frame cracks"
            ],
            "procedure": "OPERATOR: Visually inspect the complete exterior of the generator set for damage.\na. Check all panels for dents, cracks, or missing fasteners.\nb. Inspect skid base/frame for cracks or bends.\nc. Check lifting eyes and tie-down provisions for damage.\nd. Ensure all access doors and panels close and latch properly.\ne. Check that all required placards and warning labels are present and legible.",
            "notFullyMissionCapable": "Frame or skid base cracked or bent to the extent that structural integrity is compromised. Any damage that prevents safe operation.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "2",
            "interval": "Before",
            "location": "Engine Oil",
            "system": "Engine",
            "keywords": [
                "engine oil",
                "oil level",
                "low oil",
                "check oil",
                "oil dipstick",
                "oil quantity",
                "engine lubrication",
                "oil topped off",
                "engine oil low",
                "add oil",
                "oil check",
                "crankcase oil",
                "oil level low",
                "engine oil level"
            ],
            "commonFaults": [
                "Engine oil level low",
                "Oil below ADD mark on dipstick",
                "Oil not changed at interval",
                "Oil dirty or contaminated",
                "Oil milky appearance (coolant contamination)",
                "Oil overfull",
                "Oil has fuel smell (fuel dilution)",
                "Missing dipstick"
            ],
            "procedure": "OPERATOR: Check engine oil level.\na. Ensure generator is on a level surface and has been shut down for at least 5 minutes.\nb. Remove oil dipstick, wipe clean, reinsert fully, then remove and read level.\nc. Oil level must be between the ADD and FULL marks on the dipstick.\nd. If low, add the correct viscosity oil (MIL-PRF-2104 or approved equivalent) to bring to FULL mark.\ne. Do not overfill. Replace dipstick securely.\nf. Check for signs of contamination (milky color = coolant; fuel odor = fuel dilution).",
            "notFullyMissionCapable": "Engine oil level is at or below ADD mark and oil cannot be added. Engine oil contaminated (milky or with fuel odor). Do not operate.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "3",
            "interval": "Before",
            "location": "Engine Coolant",
            "system": "Cooling System",
            "keywords": [
                "coolant level",
                "coolant low",
                "antifreeze",
                "coolant reservoir",
                "radiator coolant",
                "engine coolant",
                "cooling system",
                "coolant check",
                "overheat prevention",
                "coolant tank",
                "expansion tank",
                "coolant overflow",
                "coolant top off"
            ],
            "commonFaults": [
                "Coolant level below MIN mark",
                "Coolant reservoir empty",
                "Coolant leaking",
                "Coolant discolored or contaminated",
                "Wrong coolant mixture",
                "Coolant reservoir cap missing",
                "Coolant hose leaking",
                "Low coolant causing overheat"
            ],
            "procedure": "OPERATOR: Check engine coolant level.\na. WARNING: Never remove radiator cap or coolant reservoir cap when engine is hot. Allow engine to cool before opening.\nb. Check coolant level at the sight glass or overflow/expansion tank. Level must be between MIN and MAX marks.\nc. If low, add the correct 50/50 premix antifreeze/water solution (MIL-A-46153 or approved equivalent).\nd. Inspect visible coolant hoses for cracks, leaks, or loose connections.\ne. Check for evidence of coolant leaks around fittings and connections.",
            "notFullyMissionCapable": "Coolant level cannot be maintained. Coolant leak is present that cannot be corrected at operator level. Do not operate with coolant level below MIN mark.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "4",
            "interval": "Before",
            "location": "Fuel System",
            "system": "Fuel System",
            "keywords": [
                "fuel level",
                "fuel quantity",
                "fuel tank",
                "diesel fuel",
                "JP-8",
                "fuel check",
                "fuel low",
                "add fuel",
                "fuel filter",
                "fuel lines",
                "fuel leak",
                "fuel spillage",
                "fuel contamination",
                "water in fuel",
                "fuel separator",
                "fuel supply"
            ],
            "commonFaults": [
                "Fuel tank empty or low",
                "Fuel leak at tank or connections",
                "Water in fuel",
                "Fuel filter clogged",
                "Contaminated fuel",
                "Fuel line cracked or kinked",
                "Fuel cap missing or damaged",
                "Fuel spillage around tank"
            ],
            "procedure": "OPERATOR: Check fuel supply and fuel system.\na. Check fuel level gauge or sight gauge. Ensure sufficient fuel for planned operational period.\nb. Check fuel tank cap is present, serviceable, and tight.\nc. Inspect fuel lines and connections for cracks, chafing, or leaks.\nd. Check for evidence of fuel spillage or leaks around tank and fuel filter.\ne. Drain fuel/water separator if equipped (push drain valve for 5 seconds and release).\nf. Do not allow fuel tank to run dry — air in lines requires bleeding by maintenance.",
            "notFullyMissionCapable": "Fuel tank empty and refueling not possible. Fuel leak present that cannot be corrected at operator level. Fuel severely contaminated with water.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "5",
            "interval": "Before",
            "location": "Air Cleaner / Air Filter",
            "system": "Engine",
            "keywords": [
                "air filter",
                "air cleaner",
                "air restriction",
                "dirty air filter",
                "clogged air filter",
                "air cleaner indicator",
                "restriction indicator",
                "filter service indicator",
                "engine air intake",
                "intake air",
                "air filter housing",
                "filter element"
            ],
            "commonFaults": [
                "Air restriction indicator in red (service required)",
                "Air filter element clogged with dirt",
                "Air cleaner housing cracked or damaged",
                "Missing air filter element",
                "Air filter housing cover loose or missing",
                "Filter element damaged or torn"
            ],
            "procedure": "OPERATOR: Check air cleaner service indicator and housing.\na. Check air cleaner service/restriction indicator. If indicator shows RED, the air filter element requires servicing — notify unit maintenance.\nb. Inspect air cleaner housing for cracks, damage, or loose connections.\nc. Ensure air cleaner cover is properly secured.\nd. Check air intake screen/pre-cleaner for debris and remove any obstructions.\ne. Do not attempt to clean or replace filter element — this is a unit maintenance task.",
            "notFullyMissionCapable": "Air restriction indicator shows RED and replacement filter is not available. Air cleaner housing severely damaged causing unfiltered air to enter engine.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "6",
            "interval": "Before",
            "location": "Battery / Electrical Starting System",
            "system": "Electrical",
            "keywords": [
                "battery",
                "battery charge",
                "dead battery",
                "battery cables",
                "battery terminals",
                "battery corrosion",
                "corroded terminals",
                "battery low",
                "starting battery",
                "battery connections",
                "battery electrolyte",
                "battery acid",
                "weak battery",
                "won't start",
                "no crank",
                "starter",
                "battery voltage"
            ],
            "commonFaults": [
                "Battery cables loose or corroded",
                "Battery will not hold charge",
                "Battery terminals corroded",
                "Battery electrolyte low",
                "Cracked battery case",
                "Battery discharged",
                "Missing battery hold-down hardware",
                "Reversed battery connections"
            ],
            "procedure": "OPERATOR: Inspect battery and electrical starting system.\na. WARNING: Battery produces explosive hydrogen gas. No open flames or sparks near battery.\nb. Check battery cables and connections for tightness, corrosion, and damage.\nc. Inspect battery case for cracks or damage.\nd. Check battery hold-down hardware for presence and tightness.\ne. Inspect visible wiring for chafing, cracked insulation, or loose connectors.\nf. If equipped with battery electrolyte sight indicators, check electrolyte level.\ng. Clean corroded terminals with baking soda solution — notify unit maintenance if severe corrosion exists.",
            "notFullyMissionCapable": "Battery cables missing or so corroded that good contact cannot be made. Battery case cracked or leaking. Battery will not hold sufficient charge to start generator.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "7",
            "interval": "Before",
            "location": "Control Panel",
            "system": "Electrical",
            "keywords": [
                "control panel",
                "panel gauges",
                "meters",
                "voltmeter",
                "ammeter",
                "frequency meter",
                "hour meter",
                "control switches",
                "circuit breakers",
                "panel lights",
                "fault indicators",
                "generator controls",
                "panel damage",
                "indicator lights",
                "control box"
            ],
            "commonFaults": [
                "Gauge glass cracked or missing",
                "Meter needle stuck or damaged",
                "Circuit breaker tripped",
                "Control switch damaged",
                "Indicator light burned out",
                "Panel housing cracked",
                "Hour meter not working",
                "Loose or corroded panel wiring",
                "Missing panel covers"
            ],
            "procedure": "OPERATOR: Inspect control panel before starting.\na. Check all panel-mounted gauges and meters for damaged glass or bent needles.\nb. Inspect circuit breakers — reset any tripped breakers and note if they trip again (notify maintenance).\nc. Ensure all switches are in correct pre-start positions per TM.\nd. Check that all panel covers and access panels are in place and secured.\ne. Inspect wiring visible at panel for chafing or loose connections.\nf. Verify hour meter is operational.",
            "notFullyMissionCapable": "Any control switch required for starting or operating is missing or inoperative. Main circuit breaker cannot be reset. Panel damage prevents safe operation.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "8",
            "interval": "Before",
            "location": "Output Receptacles / Load Connections",
            "system": "Electrical",
            "keywords": [
                "output receptacle",
                "power receptacle",
                "electrical connections",
                "load cable",
                "output terminals",
                "power outlet",
                "receptacle cover",
                "receptacle damage",
                "power connections",
                "receptacle corrosion",
                "receptacle panel",
                "load connections",
                "terminal block",
                "power output",
                "cable connections"
            ],
            "commonFaults": [
                "Receptacle covers missing",
                "Receptacle damaged or cracked",
                "Corroded receptacle contacts",
                "Receptacle panel cover missing",
                "Loose output terminal connections",
                "Water or debris in receptacles",
                "Damaged receptacle housing"
            ],
            "procedure": "OPERATOR: Inspect output receptacles and load connection points.\na. Check all output receptacles for damage, corrosion, or debris.\nb. Ensure all unused receptacle covers are in place.\nc. Inspect receptacle panel covers for damage.\nd. Check that load cables, if connected, are properly secured and undamaged.\ne. Ensure no moisture or debris is present inside receptacles.\nf. Inspect terminal block area (if applicable) for loose connections, corrosion, or damage.",
            "notFullyMissionCapable": "Output receptacles so damaged that load cannot be connected safely. Receptacle panel missing covers that allow exposure to energized terminals.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "9",
            "interval": "Before",
            "location": "Exhaust System",
            "system": "Exhaust",
            "keywords": [
                "exhaust",
                "muffler",
                "exhaust pipe",
                "exhaust tube",
                "muffler damage",
                "exhaust leak",
                "carbon monoxide",
                "exhaust fumes",
                "exhaust routing",
                "exhaust obstruction",
                "exhaust blocked",
                "exhaust cracked",
                "spark arrestor",
                "exhaust manifold"
            ],
            "commonFaults": [
                "Exhaust pipe cracked or perforated",
                "Muffler damaged or missing",
                "Exhaust loose from manifold",
                "Exhaust routed improperly",
                "Exhaust pipe blocked by debris",
                "Spark arrestor clogged",
                "Exhaust fumes entering operator area",
                "Missing exhaust clamps"
            ],
            "procedure": "OPERATOR: Inspect exhaust system.\na. WARNING: Exhaust gases contain carbon monoxide — an odorless, colorless, deadly gas. Ensure generator exhausts are directed away from personnel, structures, and intake vents.\nb. Visually inspect exhaust pipe and muffler for cracks, holes, or loose connections.\nc. Check exhaust pipe routing to ensure it directs gases safely away.\nd. Ensure exhaust pipe outlet is free of obstructions (mud, debris, standing water).\ne. Inspect exhaust clamps and supports for presence and tightness.\nf. Check spark arrestor for damage or blockage if equipped.",
            "notFullyMissionCapable": "Exhaust pipe cracked or missing in a manner that directs exhaust gases toward personnel or fuel/ammo. Exhaust blocked preventing generator operation. Muffler missing.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "10",
            "interval": "Before",
            "location": "Cooling System / Radiator",
            "system": "Cooling System",
            "keywords": [
                "radiator",
                "radiator fins",
                "radiator blocked",
                "radiator damage",
                "cooling fins",
                "radiator screen",
                "radiator guard",
                "radiator leaking",
                "cooling airflow",
                "radiator obstruction",
                "radiator cleaning",
                "fan belt",
                "cooling fan",
                "fan shroud"
            ],
            "commonFaults": [
                "Radiator fins bent or blocked with debris",
                "Radiator core leaking",
                "Radiator guard missing",
                "Fan belt worn, cracked, or missing",
                "Cooling fan damaged or missing blades",
                "Fan shroud cracked or missing",
                "Radiator inlet/outlet hoses leaking"
            ],
            "procedure": "OPERATOR: Inspect radiator and cooling system.\na. WARNING: Keep hands away from cooling fan — fan can start automatically.\nb. Check radiator fins for blockage by mud, leaves, or debris. Remove obstructions.\nc. Inspect radiator core for obvious damage or leakage.\nd. Check radiator guard/screen for damage and ensure it is secured.\ne. Visually inspect fan belt for cracks, fraying, or excessive wear without touching.\nf. Check all radiator hoses for cracks, soft spots, or leaks.\ng. Ensure cooling air intake and exhaust paths are unobstructed.",
            "notFullyMissionCapable": "Radiator core leaking. Fan belt missing or broken. Cooling fan missing or with broken blades. Coolant hose leaking and cannot be corrected at operator level.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "11",
            "interval": "Before",
            "location": "Ground Fault / Grounding Equipment",
            "system": "Electrical",
            "keywords": [
                "grounding",
                "ground rod",
                "ground cable",
                "equipment ground",
                "grounding strap",
                "ground connection",
                "ground fault",
                "electrical ground",
                "grounding provisions",
                "earth ground",
                "grounding lug",
                "grounding clamp",
                "static grounding"
            ],
            "commonFaults": [
                "Ground rod missing",
                "Grounding cable missing or damaged",
                "Grounding connection corroded",
                "Grounding lug loose",
                "Ground rod not fully driven",
                "Grounding cable too short",
                "Grounding strap frayed or broken"
            ],
            "procedure": "OPERATOR: Ensure proper grounding before operation.\na. WARNING: Failure to properly ground the generator set can cause electrocution of personnel.\nb. Verify ground rod is driven to full depth in the ground.\nc. Check grounding cable for damage and ensure it is securely connected to both ground rod and generator grounding lug.\nd. Inspect grounding lug on generator frame for corrosion or damage.\ne. Ensure grounding cable is of appropriate length and has no cuts or exposed conductors.\nf. Check all bonding connections are tight.",
            "notFullyMissionCapable": "Ground rod and grounding cable missing or not installed. Grounding cable broken or connection to ground rod/generator cannot be made. Do not operate without proper grounding.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "12",
            "interval": "Before",
            "location": "Engine Belts and Hoses",
            "system": "Engine",
            "keywords": [
                "drive belt",
                "v-belt",
                "serpentine belt",
                "fan belt",
                "belt condition",
                "belt cracked",
                "belt worn",
                "belt fraying",
                "belt glazed",
                "belt tension",
                "hose condition",
                "hose cracked",
                "hose soft",
                "hose leaking",
                "radiator hose",
                "heater hose"
            ],
            "commonFaults": [
                "Drive belt cracked or fraying",
                "Belt glazed or slipping",
                "Belt tension loose",
                "Belt missing",
                "Hose cracked or bulging",
                "Hose clamps loose",
                "Hose collapsed",
                "Hose leaking at connection"
            ],
            "procedure": "OPERATOR: Visually inspect engine belts and hoses.\na. WARNING: Do not touch engine belts while engine is running.\nb. Inspect drive belts visually for cracks, fraying, glazing, or missing sections.\nc. Check belt tension by observing deflection — excessive slack is visible as sag.\nd. Inspect all accessible coolant hoses for cracks, softness, bulging, or leaks.\ne. Check hose clamps for tightness — note but do not tighten (unit maintenance task).\nf. Report any belt or hose defects to unit maintenance.",
            "notFullyMissionCapable": "Drive belt missing or broken. Any hose leaking to the extent that fluid loss cannot be controlled.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "13",
            "interval": "Before",
            "location": "Engine Compartment General",
            "system": "Engine",
            "keywords": [
                "engine compartment",
                "engine bay",
                "engine leaks",
                "oil leak engine",
                "fuel leak engine",
                "coolant leak engine",
                "engine damage",
                "engine visual inspection",
                "engine underside",
                "dripping oil",
                "engine compartment debris",
                "engine fire hazard"
            ],
            "commonFaults": [
                "Oil leaking from engine",
                "Fuel leak in engine compartment",
                "Coolant leak in engine bay",
                "Debris buildup near exhaust or hot surfaces (fire hazard)",
                "Loose wiring harness",
                "Damaged fuel injection lines",
                "Broken motor mount visible",
                "Oil soaking on engine"
            ],
            "procedure": "OPERATOR: Inspect engine compartment for leaks and general condition.\na. Open access panels/doors to engine compartment.\nb. Check underneath and around engine for evidence of oil, fuel, or coolant leakage.\nc. Inspect fuel injection lines and return lines for cracks or leaks.\nd. Check for any debris (rags, vegetation, foreign material) near hot surfaces — remove immediately (fire hazard).\ne. Inspect visible wiring harness for chafing, cuts, or loose connections.\nf. Visually check engine mounts for cracks or separation if accessible.",
            "notFullyMissionCapable": "Class III fuel or oil leak in engine compartment. Coolant leak that cannot be corrected at operator level. Combustible debris present near exhaust that cannot be removed.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "14",
            "interval": "During",
            "location": "Control Panel Gauges",
            "system": "Electrical",
            "keywords": [
                "voltage gauge",
                "voltmeter",
                "frequency meter",
                "hertz",
                "ammeter",
                "current",
                "output voltage",
                "output frequency",
                "load meter",
                "panel meters during operation",
                "voltage fluctuation",
                "frequency off",
                "abnormal readings",
                "gauge monitoring"
            ],
            "commonFaults": [
                "Output voltage out of tolerance (should be 120/240V AC)",
                "Frequency not at 60 Hz",
                "Voltage fluctuating",
                "Ammeter showing overload condition",
                "Gauge needles pegged or erratic",
                "Frequency drifting",
                "Low voltage output",
                "High voltage output"
            ],
            "procedure": "OPERATOR: Monitor control panel gauges continuously during operation.\na. Monitor output voltage — should be within ±5% of rated voltage (e.g., 120/208V or 240V depending on configuration).\nb. Monitor output frequency — must be 60 Hz ±1 Hz.\nc. Monitor load meter or ammeter — ensure load does not exceed generator rated capacity.\nd. Check engine oil pressure gauge or warning indicator for any alarm.\ne. Monitor engine temperature gauge or warning light for overheating.\nf. If any gauge shows abnormal reading, attempt to correct at operator level; if unable, shut down per TM procedures and notify unit maintenance.",
            "notFullyMissionCapable": "Output voltage cannot be maintained within tolerance. Output frequency cannot be maintained at 60 Hz. Engine oil pressure warning active. Engine overtemperature warning active.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "15",
            "interval": "During",
            "location": "Engine / Generator Operation",
            "system": "Engine",
            "keywords": [
                "engine noise",
                "unusual noise",
                "knocking",
                "rattling",
                "vibration",
                "rough running",
                "engine smoke",
                "black smoke",
                "white smoke",
                "blue smoke",
                "exhaust smoke",
                "engine hesitation",
                "engine stumble",
                "engine surging",
                "hunting",
                "governor hunting"
            ],
            "commonFaults": [
                "Engine knocking or rattling",
                "Excessive vibration",
                "Black exhaust smoke (rich mixture/overload)",
                "White exhaust smoke (coolant burning)",
                "Blue exhaust smoke (oil burning)",
                "Engine speed hunting/surging",
                "Loss of power",
                "Engine running rough"
            ],
            "procedure": "OPERATOR: Monitor engine and generator operation during use.\na. Listen for unusual engine noises — knocking, rattling, or squealing that was not present before.\nb. Monitor exhaust output: black smoke indicates overloading or fuel issue; white smoke may indicate coolant ingestion; blue smoke indicates oil burning. Report any abnormal smoke.\nc. Feel for and observe excessive vibration — all generators vibrate, but vibration that increases significantly or changes character may indicate a problem.\nd. Monitor for engine hunting or surging (speed fluctuating up and down) — may indicate governor or fuel system issue.\ne. Do not allow the generator to operate at zero load for more than 30 minutes (wet stacking).",
            "notFullyMissionCapable": "Engine knocking to the extent that seizure is imminent. Engine overheating and shutting down. Persistent heavy white smoke indicating coolant ingestion. Loss of governor control.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "16",
            "interval": "During",
            "location": "Fuel System",
            "system": "Fuel System",
            "keywords": [
                "fuel leak during operation",
                "fuel smell",
                "fuel spillage",
                "fuel running out",
                "fuel consumption",
                "fuel line leak",
                "fuel level dropping",
                "fuel supply running low",
                "fuel warning",
                "fuel gauge during operation"
            ],
            "commonFaults": [
                "Fuel smell during operation (possible leak)",
                "Fuel level dropping faster than expected",
                "Fuel line vibrating loose",
                "Fuel leaking near hot exhaust surfaces (fire hazard)"
            ],
            "procedure": "OPERATOR: Monitor fuel system during operation.\na. Periodically check fuel level gauge to ensure adequate fuel supply remains.\nb. Be alert for smell of fuel — indicates a possible leak. If fuel odor is detected, shut down per TM procedures and investigate.\nc. Check for any visible fuel leaks around fuel connections (during brief generator pause if needed).\nd. Plan fuel resupply before fuel level reaches 1/4 tank to prevent running dry.",
            "notFullyMissionCapable": "Fuel leak detected near hot surfaces or near any ignition source. Fuel tank imminently empty and resupply not available.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "17",
            "interval": "During",
            "location": "Cooling System",
            "system": "Cooling System",
            "keywords": [
                "overheating",
                "engine temperature",
                "high temp",
                "engine temp gauge",
                "coolant temp",
                "temperature warning",
                "overheat alarm",
                "high temperature shutdown",
                "temp light on",
                "engine running hot",
                "cooling system during operation"
            ],
            "commonFaults": [
                "Engine temperature gauge in red zone",
                "Overtemperature warning light illuminated",
                "Engine shutdown on high temperature",
                "Steam from cooling system",
                "Coolant boiling over",
                "Loss of cooling due to fan failure"
            ],
            "procedure": "OPERATOR: Monitor engine temperature during operation.\na. Continuously monitor engine temperature gauge — should remain in normal operating range (typically green zone).\nb. If temperature gauge enters red zone or overtemperature warning light illuminates, immediately reduce load and monitor.\nc. If temperature does not decrease, shut down per TM emergency shutdown procedures.\nd. WARNING: Do not remove radiator cap or coolant reservoir cap when engine is hot — risk of severe burns.\ne. After shutdown, wait at least 15 minutes before checking coolant level.",
            "notFullyMissionCapable": "Engine temperature in red zone that cannot be resolved by load reduction. Overtemperature protection causing shutdown.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "18",
            "interval": "During",
            "location": "Exhaust System",
            "system": "Exhaust",
            "keywords": [
                "carbon monoxide",
                "CO",
                "exhaust fumes inside",
                "exhaust smell",
                "exhaust routing",
                "exhaust during operation",
                "fumes in tent",
                "fumes in building",
                "exhaust CO hazard"
            ],
            "commonFaults": [
                "Exhaust fumes detected in occupied area (CO hazard)",
                "Exhaust pipe loose and redirecting fumes",
                "Wind shift directing exhaust toward personnel",
                "Exhaust near air intake of building"
            ],
            "procedure": "OPERATOR: Monitor exhaust routing and carbon monoxide hazard during operation.\na. WARNING: Carbon monoxide is odorless and colorless — it kills without warning. Never operate generator in enclosed spaces.\nb. During operation, periodically verify exhaust is being directed away from personnel, tents, vehicles, and air intakes.\nc. If personnel report headache, dizziness, or nausea near operating generator, immediately move personnel to fresh air and shut down if safe to do so.\nd. In windy conditions, re-evaluate exhaust direction relative to personnel positions.",
            "notFullyMissionCapable": "Exhaust is being directed toward occupied areas and the situation cannot be corrected by repositioning or rerouting.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "19",
            "interval": "After",
            "location": "Engine Oil",
            "system": "Engine",
            "keywords": [
                "engine oil after",
                "check oil after operation",
                "oil level after",
                "oil consumption",
                "post operation oil check",
                "add oil after",
                "oil leak after operation",
                "oil level check",
                "oil after running",
                "hot engine oil check"
            ],
            "commonFaults": [
                "Oil level dropped significantly during operation (high consumption)",
                "Oil level overfull",
                "Oil showing signs of contamination after operation",
                "Oil leak discovered post-operation",
                "Oil dark and overdue for change"
            ],
            "procedure": "OPERATOR: Check engine oil level after operation.\na. Allow engine to cool for at least 5 minutes after shutdown.\nb. Check oil level with dipstick — wipe, reinsert fully, remove and read.\nc. Add oil if below ADD mark using approved grade.\nd. Note if oil level has dropped significantly from pre-operation check — indicates high oil consumption; notify unit maintenance.\ne. Check ground under generator for evidence of new oil drips.\nf. Ensure dipstick is seated fully after check.",
            "notFullyMissionCapable": "Oil consumption so high that level cannot be maintained. New oil leak discovered requiring unit maintenance action.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "20",
            "interval": "After",
            "location": "Generator Set Exterior / Leaks",
            "system": "Body/Frame",
            "keywords": [
                "post operation inspection",
                "after operation check",
                "leaks after operation",
                "new damage",
                "damage discovered",
                "fluid on ground after",
                "puddle after operation",
                "post-op inspection",
                "shutdown inspection",
                "leaks found after"
            ],
            "commonFaults": [
                "New fluid leak discovered after operation",
                "New physical damage noted",
                "Access panel left open",
                "Loose panel fasteners from vibration",
                "Exhaust damage discovered after operation",
                "New fuel leak at connection"
            ],
            "procedure": "OPERATOR: Perform post-operation inspection of generator set.\na. After shutdown, visually inspect complete exterior of generator for new damage or changes from pre-operation condition.\nb. Check underneath generator for evidence of fluid leaks (oil, coolant, fuel).\nc. Check that all access panels and doors are closed and latched.\nd. Inspect exhaust system for new damage or loosened connections.\ne. Record any new faults, damage, or changes in the equipment logbook (DA Form 5988-E).\nf. Ensure fuel cap is tight and fuel system is secure.",
            "notFullyMissionCapable": "Any new Class III fuel or oil leak discovered. Damage to generator that would prevent safe next operation.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "21",
            "interval": "After",
            "location": "Cooling System",
            "system": "Cooling System",
            "keywords": [
                "coolant after operation",
                "check coolant after",
                "coolant level after",
                "coolant leak discovered",
                "radiator after operation",
                "cooling system post op"
            ],
            "commonFaults": [
                "Coolant level lower after operation (indicating leak)",
                "Coolant leak discovered after shutdown",
                "Coolant reservoir cap not reseated properly",
                "Radiator leak discovered"
            ],
            "procedure": "OPERATOR: Check cooling system after operation.\na. WARNING: Do not open radiator cap or coolant reservoir cap when hot — wait at least 15 minutes after shutdown.\nb. After cooldown, check coolant level at reservoir sight glass or overflow tank.\nc. If coolant level has dropped significantly from pre-operation check, investigate for leaks.\nd. Inspect hose connections and radiator for new coolant leaks.\ne. Ensure coolant reservoir/radiator cap is properly seated and locked.",
            "notFullyMissionCapable": "Significant coolant loss discovered after operation indicating major leak requiring unit maintenance action.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "22",
            "interval": "After",
            "location": "Air Cleaner",
            "system": "Engine",
            "keywords": [
                "air cleaner after",
                "filter restriction after",
                "air filter service needed",
                "dust environment",
                "air filter after dusty operation",
                "air restriction indicator after"
            ],
            "commonFaults": [
                "Air restriction indicator showing RED after operation in dusty conditions",
                "Pre-cleaner bowl full of dust/debris",
                "Air cleaner housing cover loose after operation"
            ],
            "procedure": "OPERATOR: Check air cleaner after operation, especially in dusty environments.\na. Check air restriction/service indicator — if showing RED, filter requires servicing; notify unit maintenance.\nb. In dusty environments, check and empty pre-cleaner bowl or dust cup if equipped.\nc. Ensure air cleaner housing cover and connections are secure after vibration from operation.\nd. Remove any large debris from air intake pre-filter screen.",
            "notFullyMissionCapable": "Air restriction indicator RED and filter replacement not available for next operation.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "23",
            "interval": "After",
            "location": "Control Panel",
            "system": "Electrical",
            "keywords": [
                "control panel after",
                "switches after operation",
                "circuit breaker after",
                "panel post operation",
                "reset switches",
                "control panel shutdown",
                "post op panel check"
            ],
            "commonFaults": [
                "Circuit breaker tripped during operation (now discovered)",
                "Switch left in wrong position",
                "Panel indicator showing fault condition",
                "Hour meter value not recorded"
            ],
            "procedure": "OPERATOR: Check control panel after shutdown.\na. Ensure all switches are placed in the correct off/standby positions per TM.\nb. Check for any fault indicators or warning lights that are illuminated — record and report to unit maintenance.\nc. Note and record hour meter reading in equipment logbook.\nd. Check circuit breakers — if any are tripped, note and report; do not reset without investigating cause.\ne. Ensure panel is secure with all covers in place.",
            "notFullyMissionCapable": "Fault indicator illuminated that cannot be reset at operator level. Critical control switch inoperative.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "24",
            "interval": "After",
            "location": "Output Receptacles",
            "system": "Electrical",
            "keywords": [
                "receptacle after operation",
                "load cables disconnected",
                "output after",
                "cable stowage",
                "power cord disconnect",
                "receptacle covers after",
                "output connections after operation"
            ],
            "commonFaults": [
                "Load cables not properly disconnected and stowed",
                "Receptacle covers not replaced",
                "Damaged receptacle discovered after hot-pull",
                "Receptacle contacts burned or arced"
            ],
            "procedure": "OPERATOR: Secure output receptacles after operation.\na. Ensure all load cables are properly disconnected from output receptacles.\nb. Replace all receptacle covers and ensure they are latched closed.\nc. Inspect receptacle contacts for evidence of burning, arcing, or corrosion.\nd. Inspect load cables for damage from operation.\ne. Stow load cables properly to prevent damage.",
            "notFullyMissionCapable": "Output receptacles burned or damaged to the extent that safe electrical connection cannot be made.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "25",
            "interval": "Weekly",
            "location": "Battery",
            "system": "Electrical",
            "keywords": [
                "battery weekly",
                "battery electrolyte weekly",
                "battery water",
                "battery specific gravity",
                "battery terminals weekly",
                "battery maintenance",
                "battery condition weekly",
                "battery fluid level",
                "battery acid level",
                "battery cells"
            ],
            "commonFaults": [
                "Battery electrolyte low in cells",
                "Specific gravity low indicating discharged battery",
                "Severe terminal corrosion",
                "Battery case bulging or cracked",
                "Battery hold-down loose",
                "Battery vent caps missing"
            ],
            "procedure": "OPERATOR: Perform weekly battery inspection and maintenance.\na. WARNING: Battery acid is corrosive — wear eye protection and gloves.\nb. Check battery electrolyte level in each cell — should be 3/8 to 1/2 inch above plates.\nc. Add distilled water only if low — do not overfill.\nd. Inspect all battery terminals and cable ends for corrosion — clean with baking soda solution and wire brush.\ne. Ensure terminal bolts are tight.\nf. Check battery hold-down hardware for tightness.\ng. Inspect battery case for cracks, bulging, or damage.\nh. Check battery vent caps — must be in place and unobstructed.",
            "notFullyMissionCapable": "Battery case cracked or bulging. Battery will not maintain charge. Electrolyte level cannot be maintained.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "26",
            "interval": "Weekly",
            "location": "Engine Oil Level and Condition",
            "system": "Engine",
            "keywords": [
                "oil weekly",
                "check oil weekly",
                "oil condition weekly",
                "oil change interval",
                "oil color",
                "oil contamination weekly",
                "oil level weekly maintenance"
            ],
            "commonFaults": [
                "Oil overdue for change",
                "Oil heavily contaminated (dark/thick)",
                "Oil level dropping weekly",
                "Milky oil indicating coolant contamination",
                "Oil level consistently low (consumption issue)"
            ],
            "procedure": "OPERATOR: Perform weekly engine oil check.\na. Check oil level and condition with dipstick on a level surface.\nb. Inspect oil color and consistency — oil should not be milky (coolant contamination), very thin (fuel dilution), or excessively dark/thick (overdue change).\nc. Compare oil level to previous week — track consumption rate.\nd. Check engine oil change interval per TM — notify unit maintenance if oil change is due.\ne. Inspect area under generator for oil leaks that may have developed over the week.",
            "notFullyMissionCapable": "Engine oil milky or with strong fuel odor indicating internal contamination. Oil cannot be maintained at proper level due to leak or consumption.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "27",
            "interval": "Weekly",
            "location": "Fuel System and Fuel/Water Separator",
            "system": "Fuel System",
            "keywords": [
                "fuel water separator",
                "water in fuel weekly",
                "drain fuel separator",
                "fuel filter weekly",
                "fuel system weekly",
                "fuel contamination weekly",
                "sediment bowl",
                "fuel bowl drain"
            ],
            "commonFaults": [
                "Fuel/water separator bowl full of water and sediment",
                "Fuel filter housing leaking",
                "Water accumulation in fuel tank",
                "Algae or biological growth in fuel tank",
                "Fuel system connections loosened by vibration"
            ],
            "procedure": "OPERATOR: Perform weekly fuel system inspection and fuel/water separator service.\na. Drain fuel/water separator bowl: place a container under drain, open drain valve until clear fuel flows, close drain. Dispose of water and sediment properly.\nb. Inspect separator housing for cracks or leaks.\nc. Inspect all fuel line connections for looseness from vibration.\nd. Check fuel tank for water contamination — if severe, notify unit maintenance for tank drain.\ne. Inspect fuel cap and gasket for damage.\nf. Check sight glass or fuel level for accuracy.",
            "notFullyMissionCapable": "Fuel/water separator so full of water that fuel cannot flow. Fuel system leak discovered that cannot be corrected at operator level.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "28",
            "interval": "Weekly",
            "location": "Drive Belts",
            "system": "Engine",
            "keywords": [
                "belt weekly",
                "drive belt weekly",
                "belt condition weekly",
                "belt tension weekly",
                "v-belt weekly",
                "alternator belt",
                "fan belt weekly",
                "belt wear",
                "belt check weekly"
            ],
            "commonFaults": [
                "Belt showing increased cracking since last check",
                "Belt tension loose",
                "Belt glazed from slippage",
                "Belt fraying at edges",
                "Belt squealing during start (slipping)",
                "Belt chunks missing"
            ],
            "procedure": "OPERATOR/UNIT MAINTENANCE: Inspect drive belts weekly.\na. WARNING: Inspect only with engine stopped and cooled.\nb. Check all drive belts for cracks, fraying, glazing, missing chunks, or excessive wear.\nc. Check belt tension — belts should deflect approximately 1/2 inch with firm thumb pressure (exact spec per TM).\nd. Check that belts are tracking properly in pulleys without misalignment.\ne. If belt condition has degraded since previous check, notify unit maintenance for replacement.",
            "notFullyMissionCapable": "Drive belt missing, broken, or in condition that makes imminent failure likely. Belt tension so loose that slippage is occurring.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "29",
            "interval": "Weekly",
            "location": "Air Cleaner Pre-Cleaner / Filter",
            "system": "Engine",
            "keywords": [
                "air filter weekly",
                "pre-cleaner weekly",
                "air cleaner service weekly",
                "filter element weekly",
                "air restriction weekly",
                "air cleaner condition",
                "dusty environment filter",
                "filter check weekly"
            ],
            "commonFaults": [
                "Pre-cleaner bowl full requiring emptying",
                "Air restriction indicator showing RED",
                "Air filter housing connections loose",
                "Filter element damaged"
            ],
            "procedure": "OPERATOR: Check air cleaner system weekly.\na. Inspect air restriction indicator — if RED, filter requires service; schedule with unit maintenance.\nb. Empty and clean pre-cleaner bowl or cyclonic pre-filter if equipped.\nc. Inspect air cleaner housing for cracks or loose connections.\nd. In very dusty environments, check air cleaner service interval and accelerate if needed.\ne. Do not open air cleaner housing to inspect filter element without unit maintenance authorization.",
            "notFullyMissionCapable": "Air restriction indicator RED with no replacement filter available. Air cleaner housing damaged allowing unfiltered air into engine.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "30",
            "interval": "Weekly",
            "location": "Cooling System Hoses and Connections",
            "system": "Cooling System",
            "keywords": [
                "hoses weekly",
                "coolant hoses weekly",
                "radiator hoses weekly",
                "hose connections",
                "cooling system weekly",
                "coolant connections weekly",
                "hose clamps weekly",
                "radiator weekly",
                "cooling weekly inspection"
            ],
            "commonFaults": [
                "Hose softening or showing early deterioration",
                "Hose clamps showing rust or looseness",
                "Minor coolant seepage at clamps",
                "Hose rubbing on engine components"
            ],
            "procedure": "OPERATOR: Inspect cooling system hoses and connections weekly.\na. WARNING: Allow engine to cool before inspecting.\nb. Inspect all coolant hoses for softness, swelling, cracking, or deterioration.\nc. Check hose clamps for rust, corrosion, or looseness.\nd. Look for evidence of coolant seepage at all connections (white mineral deposits indicate previous seepage).\ne. Check that hoses are not in contact with hot surfaces or sharp edges.\nf. Report any deteriorating hoses to unit maintenance for replacement.",
            "notFullyMissionCapable": "Coolant hose leaking to the extent that coolant level cannot be maintained. Hose in imminent danger of failure.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "31",
            "interval": "Weekly",
            "location": "Exhaust System",
            "system": "Exhaust",
            "keywords": [
                "exhaust weekly",
                "muffler weekly",
                "exhaust pipe weekly",
                "exhaust clamps",
                "exhaust condition weekly",
                "spark arrestor weekly",
                "exhaust weekly check"
            ],
            "commonFaults": [
                "Exhaust clamps loosened by vibration",
                "New cracks in muffler or exhaust pipe",
                "Exhaust pipe bracket broken",
                "Spark arrestor screen clogged",
                "Rust perforations in muffler",
                "Exhaust insulation wrap deteriorating"
            ],
            "procedure": "OPERATOR: Inspect exhaust system weekly.\na. WARNING: Inspect only when exhaust system is cool.\nb. Check all exhaust pipe clamps and support brackets for tightness — vibration causes loosening over time.\nc. Inspect muffler and exhaust pipes for new cracks, holes, or rust-through perforations.\nd. Check spark arrestor screen for clogging or damage.\ne. Inspect exhaust pipe insulation/wrap for deterioration.\nf. Ensure exhaust outlet remains positioned to direct gases away from personnel and equipment.",
            "notFullyMissionCapable": "Exhaust pipe cracked through in a manner that directs hot gases toward fuel, personnel, or combustibles. Muffler missing or perforated beyond serviceability.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "32",
            "interval": "Weekly",
            "location": "Output Receptacles and Electrical Connections",
            "system": "Electrical",
            "keywords": [
                "receptacles weekly",
                "electrical connections weekly",
                "terminal inspection",
                "output panel weekly",
                "wiring weekly",
                "connector weekly",
                "terminal block weekly",
                "power connections weekly"
            ],
            "commonFaults": [
                "Receptacle contacts pitted or corroded",
                "Terminal block connections loose",
                "Wiring insulation cracked or deteriorating",
                "Connector housing cracked",
                "Evidence of arcing at connections"
            ],
            "procedure": "OPERATOR: Inspect output receptacles and electrical connections weekly.\na. WARNING: Ensure generator is completely shut down and output circuits are de-energized before inspection.\nb. Inspect all output receptacle contacts for corrosion, pitting, or burn marks.\nc. Check terminal blocks (if accessible) for loose connections and corrosion.\nd. Inspect wiring harnesses for cracked or deteriorating insulation.\ne. Check that all connector housings are intact and latching properly.\nf. Ensure all receptacle covers are serviceable and latching.",
            "notFullyMissionCapable": "Output receptacles with severely burned or pitted contacts. Terminal block connections so loose or corroded that reliable power delivery is compromised.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "33",
            "interval": "Monthly",
            "location": "Engine Oil and Filter",
            "system": "Engine",
            "keywords": [
                "oil change monthly",
                "oil filter monthly",
                "engine oil service",
                "oil change interval",
                "oil and filter replacement",
                "engine lubrication monthly",
                "oil service",
                "oil filter clogged",
                "oil sample",
                "engine oil monthly"
            ],
            "commonFaults": [
                "Engine oil overdue for change",
                "Oil filter clogged or bypassing",
                "Oil sample showing metal particles",
                "Oil darkened and thickened",
                "Oil filter housing leaking",
                "Drain plug leaking after change"
            ],
            "procedure": "UNIT MAINTENANCE / OPERATOR ASSIST: Perform monthly engine oil and filter service.\na. Change engine oil and filter per TM interval (typically every 250 hours of operation OR monthly for standby generators, whichever comes first).\nb. Drain oil when warm for most complete drainage.\nc. Replace oil filter using proper tools — do not overtighten.\nd. Fill with correct grade and quantity of approved oil per TM.\ne. Run engine briefly, check for leaks at drain plug and filter, then recheck oil level.\nf. Record service in equipment logbook.\ng. If oil analysis program is in effect, collect oil sample per program requirements before changing oil.",
            "notFullyMissionCapable": "Engine oil change overdue beyond TM limits. Oil filter bypassing due to clogging (will cause engine damage if continued).",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "34",
            "interval": "Monthly",
            "location": "Fuel Filter Element",
            "system": "Fuel System",
            "keywords": [
                "fuel filter monthly",
                "fuel filter replacement",
                "fuel filter service",
                "filter element monthly",
                "fuel filter clogged",
                "fuel filter change",
                "primary fuel filter",
                "secondary fuel filter",
                "fuel filtration monthly"
            ],
            "commonFaults": [
                "Fuel filter element clogged causing fuel starvation",
                "Fuel filter housing leaking",
                "Filter element incorrect type installed",
                "Filter bypass due to clogging",
                "Fuel filter housing cracked"
            ],
            "procedure": "UNIT MAINTENANCE: Perform monthly fuel filter inspection and service per TM interval.\na. Inspect fuel filter housing for leaks and damage.\nb. Service or replace fuel filter element per TM-specified interval (typically every 250 hours or monthly).\nc. When replacing, prime fuel system per TM procedure to prevent air lock.\nd. Check filter housing sealing ring — replace if cut or compressed.\ne. Run generator and verify no fuel leaks at filter connections.\nf. Record service in equipment logbook.",
            "notFullyMissionCapable": "Fuel filter so clogged that fuel flow is insufficient to sustain operation. Fuel filter housing leaking fuel.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "35",
            "interval": "Monthly",
            "location": "Coolant System / Antifreeze",
            "system": "Cooling System",
            "keywords": [
                "coolant monthly",
                "antifreeze monthly",
                "coolant test",
                "coolant concentration",
                "antifreeze concentration",
                "coolant additive",
                "cooling system monthly",
                "coolant condition",
                "coolant pH",
                "coolant freeze protection"
            ],
            "commonFaults": [
                "Antifreeze concentration below required freeze protection level",
                "Coolant pH out of range",
                "Coolant contaminated with oil",
                "Coolant inhibitors depleted",
                "Scale buildup in cooling system",
                "Coolant overdue for change"
            ],
            "procedure": "UNIT MAINTENANCE: Perform monthly coolant system inspection and test.\na. Test coolant concentration with refractometer or test strips — verify freeze protection to required temperature (typically -34°F / -37°C minimum).\nb. Check coolant pH — should be between 8.5 and 10.5. Out-of-range pH accelerates corrosion.\nc. Inspect coolant for oil contamination (milky or oily film = coolant/oil cross-contamination).\nd. Check coolant additive (SCA/DCA) concentration if using supplemental coolant additives.\ne. Flush and replace coolant per TM interval if concentration, pH, or contamination is out of spec.\nf. After any coolant work, bleed air from system per TM procedure.",
            "notFullyMissionCapable": "Coolant freeze protection below required level for expected temperatures. Coolant contaminated with oil (indicates internal engine problem).",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "36",
            "interval": "Monthly",
            "location": "Air Cleaner Element",
            "system": "Engine",
            "keywords": [
                "air filter monthly",
                "air filter replacement",
                "filter element monthly service",
                "air cleaner monthly",
                "filter change",
                "air filter change interval",
                "air restriction monthly",
                "filter service monthly"
            ],
            "commonFaults": [
                "Air filter element overdue for service",
                "Filter element torn or punctured",
                "Filter element improperly seated allowing bypass",
                "Incorrect filter element installed",
                "Secondary (safety) filter element damaged"
            ],
            "procedure": "UNIT MAINTENANCE: Perform monthly air cleaner element inspection and service.\na. Remove air cleaner element and inspect for clogging, tears, or damage.\nb. Service element per TM — dry elements may be cleaned by gently tapping (not compressed air unless approved); replace if torn or damaged.\nc. Inspect secondary/safety filter element — replace if contaminated.\nd. Inspect air cleaner housing interior for dirt and clean if contaminated.\ne. Reinstall element and ensure housing cover seals properly.\nf. Reset air restriction indicator after servicing.\ng. Replace element per TM service interval regardless of condition.",
            "notFullyMissionCapable": "Air filter element torn, allowing unfiltered air into engine. Safety element contaminated (indicates primary element failure). Element unable to be serviced or replaced.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "37",
            "interval": "Monthly",
            "location": "Battery",
            "system": "Electrical",
            "keywords": [
                "battery monthly",
                "battery load test",
                "battery specific gravity monthly",
                "battery voltage monthly",
                "battery capacity",
                "battery charging monthly",
                "battery condition monthly",
                "battery replacement interval",
                "battery monthly service"
            ],
            "commonFaults": [
                "Battery specific gravity low indicating sulfation",
                "Battery failing load test",
                "Battery not charging to full voltage",
                "Battery swollen or bulging",
                "Electrolyte level chronically low (evaporating)",
                "Battery reaching end of service life"
            ],
            "procedure": "UNIT MAINTENANCE: Perform monthly battery load test and service.\na. Perform battery load test using appropriate battery tester — compare results to TM specifications.\nb. Check specific gravity of each cell with hydrometer — should be 1.260-1.280 fully charged.\nc. Check battery charging voltage with engine running — should be 13.8-14.5V for 12V systems (27.6-29V for 24V systems).\nd. Inspect battery case for swelling, cracks, or electrolyte leakage.\ne. Inspect and clean all terminal connections.\nf. Ensure battery is fully charged — charge with external charger if needed.\ng. Replace battery if failing load test or showing sulfation.",
            "notFullyMissionCapable": "Battery failing load test with no replacement available. Battery will not accept charge.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "38",
            "interval": "Monthly",
            "location": "Exhaust System Complete",
            "system": "Exhaust",
            "keywords": [
                "exhaust monthly",
                "muffler monthly",
                "exhaust monthly inspection",
                "exhaust manifold",
                "exhaust monthly service",
                "turbocharger exhaust",
                "exhaust complete inspection"
            ],
            "commonFaults": [
                "Rust-through holes developing in muffler",
                "Exhaust manifold cracked",
                "Exhaust manifold gasket leaking",
                "Turbocharger outlet leaking (30KW/60KW)",
                "Exhaust insulation deteriorated exposing hot surfaces",
                "Exhaust support broken"
            ],
            "procedure": "UNIT MAINTENANCE: Perform monthly complete exhaust system inspection.\na. WARNING: Perform only when exhaust system is completely cool.\nb. Inspect entire exhaust system from manifold outlet to exhaust pipe end.\nc. Check exhaust manifold for cracks and gasket leaks (evidenced by soot deposits at joints).\nd. Inspect muffler for rust, corrosion, and perforations.\ne. Check all exhaust clamps and support brackets.\nf. Inspect exhaust system insulation for deterioration.\ng. On turbocharged models (30KW, 60KW), inspect turbocharger exhaust outlet connections.\nh. Check spark arrestor — clean or replace as needed.",
            "notFullyMissionCapable": "Exhaust manifold cracked to the extent that gases are escaping. Muffler perforated. Exhaust system so deteriorated that hazardous emissions cannot be safely directed away.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "39",
            "interval": "Monthly",
            "location": "Electrical System Wiring and Connectors",
            "system": "Electrical",
            "keywords": [
                "wiring monthly",
                "electrical monthly",
                "wiring harness monthly",
                "connector monthly",
                "electrical inspection monthly",
                "wiring condition monthly",
                "insulation monthly",
                "electrical system monthly check"
            ],
            "commonFaults": [
                "Wiring insulation cracking due to heat or age",
                "Connector pins corroded",
                "Wiring chafing against frame or engine",
                "Grounds corroded or loose",
                "Evidence of rodent damage to wiring",
                "Wiring harness clamps missing"
            ],
            "procedure": "UNIT MAINTENANCE: Perform monthly electrical system inspection.\na. Inspect complete accessible wiring harness for cracked insulation, chafing, cuts, or heat damage.\nb. Check all electrical connectors for corrosion, bent pins, or incomplete engagement.\nc. Inspect all ground connections for corrosion and tightness.\nd. Check wiring harness routing clamps and ties — replace missing ones.\ne. Inspect for evidence of rodent damage (chewed wiring).\nf. Check all panel lamp sockets and indicator lights for corrosion.\ng. Verify all bonding straps are present and secure.",
            "notFullyMissionCapable": "Wiring harness damage that has or could cause short circuit. Ground connection so corroded that chassis ground is compromised.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "40",
            "interval": "Monthly",
            "location": "Generator Set Load Test / Exercise",
            "system": "Electrical",
            "keywords": [
                "load test",
                "exercise generator",
                "monthly exercise",
                "operational test",
                "load bank test",
                "generator exercise monthly",
                "monthly run",
                "standby generator exercise",
                "output test",
                "generator operational check monthly"
            ],
            "commonFaults": [
                "Generator fails to start during monthly exercise",
                "Output voltage out of tolerance under load",
                "Frequency cannot be maintained under load",
                "Generator overheats under load",
                "Circuit breaker trips under load",
                "Generator not exercised on schedule (wet stacking)"
            ],
            "procedure": "OPERATOR / UNIT MAINTENANCE: Perform monthly generator exercise under load.\na. If generator is on standby, exercise under load for a minimum of 2 hours per month to prevent wet stacking and maintain readiness.\nb. Apply at least 30% rated load during exercise (load bank or actual connected load).\nc. Monitor all control panel gauges throughout exercise: voltage, frequency, current, temperature.\nd. Record voltage, frequency, and current readings in equipment logbook.\ne. Verify automatic transfer switch operation if equipped.\nf. After exercise, check for any new leaks or faults.\ng. Record exercise in maintenance logbook including hours run, load applied, and readings.",
            "notFullyMissionCapable": "Generator fails to produce rated voltage or frequency under load. Generator overheats during load test. Circuit breaker cannot be reset after load test trip.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "41",
            "interval": "Before",
            "location": "Voltage/Frequency Selector Switches",
            "system": "Electrical",
            "keywords": [
                "voltage selector",
                "frequency selector",
                "voltage switch",
                "output configuration",
                "voltage setting",
                "phase selector",
                "single phase",
                "three phase",
                "120V 240V selection",
                "output voltage setting before operation"
            ],
            "commonFaults": [
                "Voltage selector in wrong position for load requirements",
                "Selector switch damaged or stuck",
                "Phase selector improperly configured",
                "Output configured for wrong voltage"
            ],
            "procedure": "OPERATOR: Verify voltage and frequency selector switch settings before operation.\na. Check voltage selector switch setting matches the load requirement (120V, 240V, 120/240V, 120/208V as applicable).\nb. Check frequency selector if equipped — must be set to 60 Hz for US Army equipment.\nc. Check phase configuration (single-phase vs. three-phase) if selectable.\nd. Ensure selector switches are fully engaged in their detent positions — not between positions.\ne. Verify configuration against load requirements before connecting any loads.",
            "notFullyMissionCapable": "Voltage/frequency selector switch broken, missing, or stuck between positions preventing proper output configuration.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "42",
            "interval": "Before",
            "location": "Engine Speed / Governor",
            "system": "Engine",
            "keywords": [
                "engine speed",
                "governor",
                "RPM",
                "idle speed",
                "no load speed",
                "throttle",
                "governor setting",
                "speed control",
                "engine RPM before",
                "governor linkage"
            ],
            "commonFaults": [
                "Engine will not maintain proper no-load speed (1800 RPM for 60 Hz)",
                "Governor hunting",
                "Governor linkage loose or disconnected",
                "Engine running too fast or too slow at no load"
            ],
            "procedure": "OPERATOR: Check engine speed/governor operation at startup.\na. After starting, allow engine to warm up at no-load.\nb. Verify engine speed is at no-load governed speed (typically 1800 RPM for 60 Hz output, producing 60 Hz frequency).\nc. Check frequency meter after warmup — should read 60 Hz at no load.\nd. Listen for hunting or surging — engine speed should be steady.\ne. If engine speed is not correct, notify unit maintenance — do not attempt to adjust governor.",
            "notFullyMissionCapable": "Engine cannot maintain proper governed speed. Frequency at no load is more than ±1 Hz from 60 Hz after warmup.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "43",
            "interval": "Before",
            "location": "NATO Slave Receptacle (if equipped)",
            "system": "Electrical",
            "keywords": [
                "NATO slave",
                "slave receptacle",
                "slave start",
                "NATO connector",
                "external start",
                "24V slave",
                "slave power",
                "NATO 24V",
                "slave receptacle damage",
                "slave cable"
            ],
            "commonFaults": [
                "NATO slave receptacle damaged or corroded",
                "Slave receptacle cover missing",
                "Slave receptacle connector contacts burned",
                "Slave cable damaged"
            ],
            "procedure": "OPERATOR: Inspect NATO slave receptacle if equipped.\na. Check NATO slave receptacle cover — must be in place when not in use.\nb. Inspect receptacle contacts for corrosion or damage.\nc. Ensure slave receptacle is properly secured.\nd. If slave starting is required, ensure slave cable is serviceable and of correct type.",
            "notFullyMissionCapable": "NATO slave receptacle so damaged that slave start capability is lost and this capability is required for the mission.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "44",
            "interval": "Before",
            "location": "Turbocharger (30KW and 60KW only)",
            "system": "Engine",
            "keywords": [
                "turbocharger",
                "turbo",
                "boost pressure",
                "turbo noise",
                "turbo oil",
                "turbo intake",
                "turbo outlet",
                "turbo leaking",
                "turbo inspection before",
                "intercooler",
                "boost"
            ],
            "commonFaults": [
                "Turbocharger inlet or outlet hose loose or cracked",
                "Oil leaking from turbocharger seals",
                "Turbocharger housing cracked",
                "Turbocharger making unusual noise (bearing failure)",
                "Intercooler hose loose"
            ],
            "procedure": "OPERATOR: Inspect turbocharger area before operation (30KW and 60KW generators).\na. WARNING: Turbocharger surfaces reach extreme temperatures — do not touch when hot.\nb. Visually inspect turbocharger inlet and outlet connections for security.\nc. Check for evidence of oil leaking from turbocharger seal (oil deposits around turbo housing).\nd. Inspect intercooler connections if equipped.\ne. During initial startup, listen for unusual turbocharger noise (whining, scraping) — report to unit maintenance.",
            "notFullyMissionCapable": "Turbocharger inlet or outlet disconnected. Significant oil leak from turbocharger seals. Turbocharger making grinding or scraping noises indicating bearing failure.",
            "applicableGenerators": [
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "45",
            "interval": "During",
            "location": "Turbocharger Operation (30KW and 60KW only)",
            "system": "Engine",
            "keywords": [
                "turbo during operation",
                "boost during operation",
                "turbo noise during",
                "turbo failure during",
                "turbo overspeed",
                "black smoke turbo",
                "turbocharger during operation check"
            ],
            "commonFaults": [
                "Excessive black smoke at full load (turbo not boosting properly)",
                "Unusual turbo whine or scraping",
                "Loss of power at high load (turbo failing)",
                "Boost pressure low (intercooler leak)"
            ],
            "procedure": "OPERATOR: Monitor turbocharger during operation (30KW and 60KW).\na. Listen for unusual turbocharger sounds — bearing failure produces grinding or scraping.\nb. Monitor exhaust smoke — heavy black smoke under load may indicate turbo not boosting properly.\nc. Monitor generator output under high load — loss of power may indicate turbocharger issue.\nd. If unusual turbo noise develops during operation, reduce load and monitor; if noise continues, shut down and notify unit maintenance.",
            "notFullyMissionCapable": "Turbocharger producing grinding/scraping noises indicating imminent bearing failure. Significant power loss due to turbocharger failure.",
            "applicableGenerators": [
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "46",
            "interval": "Weekly",
            "location": "Turbocharger and Intercooler (30KW and 60KW only)",
            "system": "Engine",
            "keywords": [
                "turbocharger weekly",
                "intercooler weekly",
                "turbo inspection weekly",
                "boost system weekly",
                "turbo hoses weekly",
                "turbo clamps weekly"
            ],
            "commonFaults": [
                "Intercooler hose clamps loosened by vibration",
                "Turbocharger oil drain line kinked",
                "Intercooler fins clogged with dirt",
                "Turbocharger housing cracking"
            ],
            "procedure": "UNIT MAINTENANCE: Inspect turbocharger and intercooler weekly (30KW and 60KW).\na. WARNING: Inspect only when engine is completely cool.\nb. Check all turbocharger inlet and outlet hose clamps for tightness.\nc. Inspect intercooler hoses and clamps.\nd. Clean intercooler fins if blocked with dirt or debris.\ne. Check turbocharger oil supply and drain lines for kinks, damage, or leaks.\nf. Inspect turbocharger housing for cracks.\ng. Check wastegate actuator (if visible) for damage.",
            "notFullyMissionCapable": "Turbocharger oil line kinked or leaking. Intercooler hose disconnected. Turbocharger housing cracked.",
            "applicableGenerators": [
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "47",
            "interval": "Before",
            "location": "Load Frequency Selector / Paralleling Panel (60KW)",
            "system": "Electrical",
            "keywords": [
                "paralleling",
                "parallel operation",
                "load sharing",
                "paralleling panel",
                "60KW paralleling",
                "synchronizing",
                "bus tie",
                "parallel breaker",
                "load share",
                "droop setting"
            ],
            "commonFaults": [
                "Paralleling switches in wrong position",
                "Synchronizing lights damaged",
                "Bus tie breaker damaged",
                "Load sharing not balanced between paralleled sets"
            ],
            "procedure": "OPERATOR: Check paralleling equipment before operation (60KW where paralleling is configured).\na. Verify paralleling panel switches are in correct position for intended operation mode (solo or parallel).\nb. If paralleling with another generator, check synchronizing/synchroscope equipment for serviceability.\nc. Inspect bus tie breakers and parallel output cabling for damage.\nd. Ensure paralleling control cable connections are secure.",
            "notFullyMissionCapable": "Paralleling equipment required for mission is damaged or inoperative. Bus tie breaker cannot be closed.",
            "applicableGenerators": [
                "60KW"
            ]
        },
        {
            "itemNumber": "48",
            "interval": "Monthly",
            "location": "Generator Windings and Brushes / Exciter",
            "system": "Electrical",
            "keywords": [
                "generator windings",
                "exciter",
                "brushless exciter",
                "slip rings",
                "brushes",
                "rotor",
                "stator",
                "insulation resistance",
                "megohm test",
                "generator internals",
                "exciter diodes",
                "rotating rectifier"
            ],
            "commonFaults": [
                "Exciter diodes failed (causing no voltage output)",
                "Insulation resistance low",
                "Rotor or stator winding damaged",
                "Rotating rectifier assembly failed",
                "Generator producing low or no voltage (field failure)"
            ],
            "procedure": "UNIT MAINTENANCE: Perform monthly generator electrical inspection.\na. Check generator output voltage and frequency against TM specifications under rated load.\nb. If voltage output is abnormal, suspect exciter or rotating rectifier — test per TM diagnostics.\nc. Inspect generator air intake/exhaust openings for blockage.\nd. Check generator housing for cracks or damage.\ne. If insulation resistance testing equipment is available, perform megohm test per TM — resistance must be above TM minimum.\nf. Inspect visible wiring at generator terminals for heat damage or corrosion.",
            "notFullyMissionCapable": "Generator cannot produce rated voltage or frequency. Insulation resistance below TM minimum specification.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "49",
            "interval": "Monthly",
            "location": "Voltage Regulator",
            "system": "Electrical",
            "keywords": [
                "voltage regulator",
                "AVR",
                "automatic voltage regulator",
                "voltage regulation",
                "voltage stability",
                "voltage droop",
                "voltage adjustment",
                "VAR control",
                "reactive load",
                "voltage regulator monthly"
            ],
            "commonFaults": [
                "Voltage regulation out of tolerance (±5%)",
                "Voltage regulator overheating",
                "Voltage regulator connections corroded",
                "Voltage droop excessive under load",
                "Voltage regulator failed (no or low output)"
            ],
            "procedure": "UNIT MAINTENANCE: Inspect voltage regulator monthly.\na. Check output voltage regulation at various load levels — must be within ±5% of rated voltage from no load to full load.\nb. Inspect voltage regulator housing for heat damage or cracks.\nc. Check voltage regulator wiring connections for corrosion or looseness.\nd. Verify voltage adjustment potentiometer is accessible and functional.\ne. Check voltage regulator cooling provisions if equipped.\nf. Test voltage stability under load steps — voltage should recover to rated within 2 seconds.",
            "notFullyMissionCapable": "Voltage regulation outside ±5% tolerance. Voltage does not recover within 2 seconds after load step. Voltage regulator completely failed.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        },
        {
            "itemNumber": "50",
            "interval": "Monthly",
            "location": "Governor and Engine Speed Control",
            "system": "Engine",
            "keywords": [
                "governor monthly",
                "governor adjustment",
                "engine speed monthly",
                "RPM monthly",
                "frequency accuracy monthly",
                "governor hunting monthly",
                "speed droop",
                "governor linkage monthly",
                "isochronous governor",
                "engine speed regulation"
            ],
            "commonFaults": [
                "No-load frequency incorrect (should be 60 Hz ±1 Hz)",
                "Frequency drops more than 3 Hz under full load",
                "Governor hunting under load",
                "Governor linkage worn or loose",
                "Governor actuator failing",
                "Engine speed cannot be adjusted to specification"
            ],
            "procedure": "UNIT MAINTENANCE: Inspect and test governor and engine speed control monthly.\na. Check no-load frequency — must be 60 Hz ± 1 Hz. Adjust if needed per TM.\nb. Apply rated load and check frequency — must not drop below 57 Hz under rated load (isochronous governors maintain 60 Hz).\nc. Check governor actuator linkage for wear, looseness, or binding.\nd. Check governor hunting — engine speed should be stable under steady load.\ne. Verify speed adjustment capability is functional.\nf. On mechanical governors, check linkage pivot points for wear and lubricate per TM.",
            "notFullyMissionCapable": "No-load frequency cannot be set to 60 Hz ± 1 Hz. Frequency drops below 57 Hz under rated load. Governor hunting so severe that stable operation is impossible.",
            "applicableGenerators": [
                "5KW",
                "10KW",
                "15KW",
                "30KW",
                "60KW"
            ]
        }
    ];

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

    PMCS.register('gen', {
        name: 'Generators',
        fullName: 'Tactical Quiet Generators (TQG)',
        tm: 'TM 9-6115-749/750/751/752/753-10',
        page: 'gen.html',
        image: 'images/gen.png',
        examples: ["won't start", 'low voltage', 'overheating', 'fuel leak'],
        variantNoun: 'Generator',
        allVariantsLabel: 'All Generator Sets',
        variantGroups: [
            { label: 'Generator Sets', options: [['5kw', 'MEP-802A — 5KW'], ['10kw', 'MEP-803A — 10KW'], ['15kw', 'MEP-804A — 15KW'], ['30kw', 'MEP-805A — 30KW'], ['60kw', 'MEP-806A — 60KW']] }
        ],
        variantInfo: generatorInfo,
        variantModels: generatorMapping,
        items: pmcsData,
        matchesVariant(item, variant) {
            if (variant === 'all') return true;
            const applicable = item.applicableGenerators || ['All'];
            if (applicable.includes('All')) return true;
            return (generatorMapping[variant] || []).some(model => applicable.includes(model));
        },
        specificTo(item) {
            const list = item.applicableGenerators;
            return list && !list.includes('All') && list.length < 5 ? list.join(', ') : null;
        }
    });
})();
