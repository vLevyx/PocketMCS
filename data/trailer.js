// M1095 Trailer PMCS data — TM 9-2330-392-13&P
(function () {
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

    const vehicleInfo = {
        'm1095': {
            name: 'M1095 5-Ton Cargo Trailer',
            description: '5-ton cargo trailer used with LMTV/FMTV trucks (TM 9-2330-392-13&P)',
            features: ['5-ton cargo capacity', 'Dual-axle configuration', 'Surge brake system', 'Compatible with LMTV/FMTV', 'Drop-side cargo bed']
        }
    };

    PMCS.register('trailer', {
        name: 'Trailers',
        fullName: 'M1095 5-Ton, 2-Axle, Full Trailer',
        tm: 'TM 9-2330-392-13&P',
        page: 'trailer.html',
        image: 'images/trailer.png',
        examples: ['flat tire', 'lunette cracked', 'brake drag', 'lights out'],
        variantNoun: 'Trailer',
        allVariantsLabel: 'M1095 — 5-Ton, 2-Axle, Full Trailer',
        variantGroups: [],
        variantInfo: vehicleInfo,
        variantModels: { m1095: ['M1095'] },
        items: pmcsData,
        matchesVariant() {
            return true;
        }
    });
})();
