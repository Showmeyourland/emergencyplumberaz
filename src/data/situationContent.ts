// Each sub-vertical page gets unique long-form content.
// STATUS: FILLED — all 6 sub-verticals complete, ~1,500+ words per page rendered.

export interface SituationContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whenToCall: string[];
  process: { step: string; detail: string }[];
  costs: string;
  faqs: { q: string; a: string }[];
  closingPara: string;
  // Optional extended sections
  azContext?: string;
  realScenario?: { title: string; body: string }[];
  whatToWatchOut?: string[];
  comparison?: string;
}

export const SITUATIONS: Record<string, SituationContent> = {
  "burst-pipe": {
    metaTitle: "Burst Pipe Emergency Arizona | AZ Emergency Plumbing Co.",
    metaDescription: "Burst pipe in Arizona? AZ Emergency Plumbing Co. dispatches licensed plumbers fast. Shutoff help, water damage triage, same-day repair. Call (602) 555-0100.",
    h1: "Burst Pipe Emergency in Arizona",
    intro: "A burst pipe is the fastest way to turn a normal Tuesday into a very expensive problem. Water pressure in a residential supply line runs 60-80 PSI — enough to push hundreds of gallons into your walls, floors, and ceilings in under an hour before you even notice. The damage doesn't stop when the burst happens; it stops when the water stops. If you're dealing with a burst pipe right now, the first step is finding your main shutoff valve and turning it off. Once the water is stopped, call us. We dispatch licensed AZ plumbers to diagnose the break, confirm there's no additional damage behind walls, and make the repair permanent — not a temporary patch that fails in six months. We quote before we work, and we don't charge dispatch fees to assess the situation.",
    whenToCall: [
      "Water is actively flowing or flooding from a wall, ceiling, or floor — shut off the main first, then call",
      "You hear a loud bang followed by the sound of running water inside a wall",
      "A supply line failed under a sink, behind a toilet, or at the washing machine connection",
      "You turned off the main shutoff but aren't sure the line is fully isolated or if there are secondary shutoffs",
      "Water pressure dropped suddenly and unexpectedly across the entire house",
      "Frozen pipe conditions (Flagstaff, Prescott, higher-elevation AZ) — pipe looks intact but has stopped flowing",
      "You found water damage in a wall or ceiling and can't identify the source — could be a slow leak that worsened into a burst",
    ],
    process: [
      {
        step: "Call — shutoff confirmation first",
        detail: "When you call, we'll first confirm your main shutoff is closed and walk you through locating it if you're unsure. In Phoenix-area slab homes, the main shutoff is typically near the water meter at the street or at the side of the house. We dispatch immediately — you don't sit on hold waiting for a supervisor to approve a truck.",
      },
      {
        step: "Arrival and isolation",
        detail: "The plumber arrives and isolates the affected zone using secondary shutoffs where possible so we can restore water to the rest of the house while we work. We locate the burst by pressure testing sections and, when the break is inside a wall or slab, by acoustic listening devices — we don't start opening walls blindly.",
      },
      {
        step: "Damage assessment and written quote",
        detail: "Before any repair work starts, we assess the scope: how long has water been flowing, is there drywall saturation, is there a secondary leak in the same line, does the failure indicate a larger pipe-age problem (pinhole corrosion across aging copper or polybutylene lines). You get a written, line-itemized quote before we touch the repair. No surprises at invoice.",
      },
      {
        step: "Repair — proper material, not a patch",
        detail: "We repair with code-compliant materials: copper-to-copper soldered joints, PEX push-fit or crimp connectors depending on the application, SharkBite fittings where code and application allow for fast isolation. We do not use compression-ring patches on burst copper as a long-term fix — those fail. If the burst indicates wider pipe deterioration (e.g., pinhole corrosion across a run), we'll tell you now so you can decide on spot repair vs. repipe rather than finding out after the third failure.",
      },
      {
        step: "Pressure test and water restoration",
        detail: "After repair, we pressure-test the repaired section and confirm no additional weak points in the same run before we restore water to the house. We check that the repair zone holds at operating pressure for a minimum of 10 minutes before we call it complete.",
      },
      {
        step: "Water damage documentation and referral",
        detail: "We document the water intrusion zone — photos of affected drywall, floor, insulation — and provide a report you can give your homeowner's insurance carrier. We can recommend licensed water-damage remediation companies if the intrusion is significant. We don't do the remediation ourselves, so we're not incentivized to overstate the damage.",
      },
    ],
    costs: "Burst pipe repair costs in Arizona typically run $200-$600 for an accessible supply line repair, $400-$1,200 for a repair that requires opening a wall or ceiling, and $800-$2,500+ if the burst is in a slab (which becomes a slab-leak repair). What drives the price: location of the break (accessible vs. behind drywall vs. under concrete), pipe material and diameter, length of replacement required, and time of day. We charge the same labor rate Mon-Sat 8am-8pm. After-hours emergency calls carry a disclosed after-hours surcharge — we tell you the exact surcharge on the phone before we dispatch. No hidden dispatch fees on top of the quoted rate.",
    faqs: [
      {
        q: "My pipe burst inside the wall — do you have to tear out all my drywall?",
        a: "Not necessarily. We use acoustic leak detection equipment to pinpoint the break location before we open anything. In most cases we can isolate the repair to a single access cut rather than opening an entire wall section. The drywall patch is separate from our scope — we repair the pipe and leave you with the smallest reasonable access opening. We can refer a drywall contractor if needed.",
      },
      {
        q: "The pipe burst because it froze — will the same thing happen again?",
        a: "Possibly, if the root cause isn't addressed. Freeze events in AZ happen most often in Flagstaff, Prescott, and higher-elevation areas, and in poorly insulated garage or exterior-wall runs in metro Phoenix during cold snaps. After the repair we'll assess the insulation on the affected run and advise on pipe insulation (foam sleeve, heat tape) or rerouting to a more protected path. A second freeze on the same run is avoidable.",
      },
      {
        q: "The main shutoff is at the street and I can't turn it — what do I do?",
        a: "Street-level meter shutoffs often require a meter key (a specific T-handle tool) to operate. If you don't have one, call us immediately — our trucks carry meter keys. Your water utility can also dispatch someone to shut it off at the meter, though response time varies. In a flood situation, don't wait; call us and your utility simultaneously.",
      },
      {
        q: "How long will I be without water?",
        a: "Most accessible supply-line repairs are complete within 1-3 hours of arrival. Wall or ceiling access repairs take 2-4 hours. Slab repairs are longer (4-8 hours) because of concrete access work. In most cases we can restore water to unaffected portions of the house while the repair section is isolated — you're rarely without all water for the full repair window.",
      },
      {
        q: "Should I call my insurance company before or after calling you?",
        a: "Call us first to stop the damage — water intrusion gets worse by the hour and your carrier expects you to mitigate. Then call your insurance carrier once the water is stopped and the immediate situation is controlled. We provide photos and written documentation of the repair scope that your adjuster will need.",
      },
      {
        q: "My house was built in the 1970s-1980s and has polybutylene pipe — is a single burst a sign I need a full repipe?",
        a: "It's a serious warning sign. Polybutylene (grey plastic pipe, often marked PB) degrades from chlorine exposure over time and fails without much warning. One failure usually means the rest of the system is at the same stage of degradation. We'll tell you honestly what we see on the affected run and what a whole-house repipe would involve so you can make an informed decision — not a sales pitch.",
      },
      {
        q: "Can you fix a burst pipe on a weekend?",
        a: "Yes. We operate Mon-Sat 8am-8pm. Weekend calls are handled at the same rate as weekday calls during those hours. True after-hours emergencies (outside 8am-8pm window) carry a disclosed after-hours surcharge — we state it clearly on the call before dispatching.",
      },
    ],
    azContext: "Arizona's desert climate creates burst-pipe conditions most people don't expect. Phoenix-area homes are predominantly slab-on-grade construction, meaning supply and drain lines run under a concrete foundation — when those lines fail, the repair involves concrete access, not just drywall. Arizona's water supply is also notably hard (Phoenix metro water averages 16-20 grains per gallon hardness), which accelerates copper pipe pitting and pinhole corrosion in homes built before the mid-1990s. Polybutylene pipe, installed widely in AZ homes from the late 1970s through 1995, has a documented failure rate as it ages — one burst on a PB system is a signal that the rest of the system is at risk. In northern AZ cities (Flagstaff, Prescott, Show Low), freeze-and-burst events are a winter reality; garage and exterior-wall pipe runs in Phoenix-metro homes are also vulnerable during the occasional hard freeze. AZ ROC licensing requires plumbing contractors to hold an active license — verify any contractor at roc.az.gov before allowing work on your home.",
    realScenario: [
      {
        title: "Scenario — Chandler slab home, burst copper under foundation",
        body: "Homeowner noticed water seeping up through the grout lines of their tile floor on a Saturday morning. No wall damage visible. We arrived within two hours, used acoustic detection equipment to locate the leak — a pinhole burst in a hot-water supply line running under the slab, approximately 8 feet from the exterior wall. Concrete access cut: 12 inches by 14 inches. Repaired the copper run with a code-compliant reroute through the attic space to avoid cutting more slab. Water restored within 5 hours of arrival. Homeowner's insurance covered the repair minus deductible; our documentation was used directly by the adjuster.",
      },
      {
        title: "Scenario — Flagstaff freeze event, garage supply line",
        body: "Owner called after a three-day cold snap. Pipes had frozen solid and then burst when temperatures rose. The burst was in the supply line running through an uninsulated garage wall — a common failure point in northern AZ homes. On arrival: two separate splits in a 3/4-inch copper run. Repaired both splits, added foam pipe insulation and a low-watt heat tape strip on the exposed garage section. Water restored within 3 hours. Advised the owner on two other vulnerable runs (exterior hose bib supply, crawlspace section) and insulated those same visit to prevent a repeat.",
      },
    ],
    whatToWatchOut: [
      "Plumbers who refuse to give a written quote before starting work — 'I won't know until I'm in there' is not an acceptable answer for a supply line repair. We can always give you a range before we open anything and a firm number before we make the repair cut.",
      "Temporary patch fixes: compression repair clamps and push-on couplings used as permanent repairs on burst copper are a short-term band-aid. Ask specifically whether the repair is a permanent solution or a temporary stop.",
      "Unlicensed contractors offering cheap rates on emergency calls. AZ requires a plumbing contractor license for any work beyond owner-occupied minor repairs. Unlicensed work can void homeowner's insurance claims. Verify at roc.az.gov.",
      "Anyone recommending a full repipe of your house on the basis of a single burst without showing you evidence of systemic pipe deterioration. One failure doesn't automatically mean the whole system needs replacement — though on polybutylene pipe, it often does. Ask for the reasoning.",
      "Separate 'assessment fees' or 'diagnostic fees' charged before a quote is given. We do not charge a separate diagnostic fee layered on top of the repair quote — assessment is part of the service.",
    ],
    comparison: "Burst pipe vs. slow slab leak: a burst is an acute event — high flow, immediate visible damage, clear location. A slow slab leak is chronic — low flow, gradual floor damage, harder to locate, often discovered via a water bill spike rather than visible flooding. Burst pipe repair is typically faster to diagnose and repair than a chronic slab leak. Burst pipe vs. repipe: a spot repair on a burst is appropriate when the rest of the pipe system is in good condition. When the burst is a symptom of a system-wide problem (polybutylene failure, corrosion across an entire copper run), a repipe addresses the root cause rather than repeatedly patching individual failures. We'll tell you which situation you're in after we see the pipe.",
  },

  "water-heater": {
    metaTitle: "Water Heater Repair & Replace Arizona | AZ Emergency Plumbing Co.",
    metaDescription: "Water heater repair or replacement in Arizona. Tank, tankless, gas, electric — same-day service. Honest pricing, AZ ROC-licensed. Call (602) 555-0100.",
    h1: "Water Heater Repair & Replacement in Arizona",
    intro: "No hot water is a quality-of-life problem that usually announces itself at 6am before work or right before guests arrive. Most water heater failures in Arizona come down to one of three things: sediment buildup from our extremely hard water killing the heating element or burner efficiency, a failed T&P (temperature and pressure) relief valve, or simply a unit that's past its service life (10-12 years for a tank unit, 15-20 for tankless). Before you call anyone, check whether the pilot is lit on a gas unit and whether the circuit breaker tripped on an electric unit — those fix themselves. If it's neither, or if you have hot water but it runs out in minutes, or if the unit is leaking, call us. We carry the most common tank sizes and heating elements on the truck, so most repairs and many replacements happen same-day.",
    whenToCall: [
      "No hot water at all — pilot out on gas unit didn't relight, or reset didn't restore electric unit",
      "Hot water runs out much faster than normal — 15 minutes where you used to have 45",
      "Water heater is making popping, rumbling, or banging sounds (sediment buildup on the element or burner)",
      "Unit is leaking from the base, from the T&P valve, or from a supply connection",
      "T&P relief valve is discharging — this is a safety issue, not just a drip; call immediately",
      "Hot water looks or smells rusty or sulfuric — anode rod failure or tank corrosion",
      "Unit is 10+ years old and you're seeing any performance decline — better to replace before a flood",
    ],
    process: [
      {
        step: "Call and initial triage",
        detail: "We ask you a few quick questions on the call: gas or electric, tank or tankless, approximate age of the unit, and what you're seeing (no hot water, leak, noise, etc.). This lets us pre-stock the truck with the most likely parts or replacement unit before we arrive — not after we diagnose at your house.",
      },
      {
        step: "Arrival and diagnosis",
        detail: "On arrival, we test the unit systematically: for electric units, we check element resistance and thermostat function; for gas units, we check the thermocouple, pilot assembly, and gas valve; for tankless units, we pull error codes and check the heat exchanger, flow sensor, and ignition. We don't replace parts speculatively — we confirm what's failed before we quote a part.",
      },
      {
        step: "Written quote — repair vs. replace recommendation",
        detail: "You get a written quote for both the repair option and, where applicable, the replacement option. We'll tell you honestly which makes more sense: a $120 element replacement on a 4-year-old unit is almost always worth it; a $280 gas valve on a 13-year-old corroded tank usually isn't. The decision is yours — we just give you the real math.",
      },
      {
        step: "Repair or replacement",
        detail: "Repairs: we replace the failed component, test the unit under load, and confirm recovery time is normal before we leave. Replacements: we drain and disconnect the old unit, haul it away, install the new unit to code (including seismic strapping per AZ requirements, proper T&P discharge line, and correct venting for gas units), and restore hot water before we leave. Standard tank replacement takes 2-3 hours.",
      },
      {
        step: "System test and efficiency check",
        detail: "After repair or installation, we set the thermostat to the recommended 120°F (scalding risk rises above 120°F; legionella risk rises below 120°F), check the anode rod condition on new installations, and flush sediment from the tank bottom if the unit is being repaired rather than replaced. We check the T&P valve discharge line to confirm it terminates correctly.",
      },
    ],
    costs: "Water heater repair costs in Arizona typically run $150-$350 for element or thermostat replacement on an electric unit, $180-$400 for thermocouple or gas valve on a gas tank unit, and $200-$600+ for tankless unit repairs depending on the component. Replacement costs: standard 40-50 gallon tank (gas or electric) installed runs $800-$1,400 depending on the unit; tankless gas units run $1,500-$2,800 installed. What drives price: unit type and size, your existing gas line or electrical capacity (tankless electric requires a 240V high-amperage circuit — if you don't have one, there's a panel upgrade cost), and venting requirements. We give you all of this in writing before work starts. After-hours calls carry a disclosed surcharge stated on the phone before dispatch.",
    faqs: [
      {
        q: "How long should my water heater last in Arizona?",
        a: "Arizona's hard water is genuinely hard on water heaters. A standard tank unit that might last 12-15 years in a soft-water state often lasts 8-11 years in Phoenix metro because mineral scale accumulates on the heating element and tank bottom, reducing efficiency and accelerating corrosion. Annual tank flushing extends life. Tankless units last longer (15-20 years) partly because sediment doesn't accumulate in a tank the same way, though the heat exchanger still needs annual descaling in hard-water markets like Phoenix.",
      },
      {
        q: "Should I repair my current water heater or replace it?",
        a: "General rule: if the unit is under 6 years old, repair almost always makes sense. If it's 8-10+ years old and needs a major component (gas valve, inner tank), replacement is usually better economics because you're spending $200-400 on a unit that may only have 1-3 years left. We'll tell you the unit age (check the serial number — first four digits are typically manufacturing date), what the repair costs, and what a replacement costs, so you can make the call yourself.",
      },
      {
        q: "What is the T&P relief valve and why is it discharging?",
        a: "The temperature and pressure relief valve is a safety device that opens if tank temperature exceeds 210°F or pressure exceeds 150 PSI — both conditions that could rupture the tank. If your T&P valve is dripping or discharging, it means either the valve itself has failed (common after years of mineral deposits) OR the tank is actually operating at unsafe temperature/pressure. We treat T&P discharge as an emergency. Don't ignore it or tape it shut — that's a tank-rupture risk.",
      },
      {
        q: "I want to switch from a tank water heater to tankless — is that a big project?",
        a: "It depends on your existing setup. Gas-to-gas tankless conversion is straightforward if your existing gas line is appropriately sized for a higher-BTU tankless unit (most residential tankless units need 150,000-200,000 BTU/hr input; older tank lines are often sized for 40,000-50,000 BTU). Electric-to-electric tankless is often more complex — whole-house electric tankless requires significant amperage (200A service minimum, dedicated circuit) that many AZ homes don't have. We assess your current setup and tell you the real cost before you commit.",
      },
      {
        q: "My water smells like rotten eggs from the hot side only — what's that?",
        a: "Sulfur smell from the hot side almost always indicates a degraded anode rod reacting with your water supply. The magnesium or aluminum anode rod (a sacrificial rod that protects the tank from corrosion) produces hydrogen sulfide when it reacts with certain water chemistries, especially when the rod is heavily depleted. Solution: anode rod replacement, sometimes combined with a tank flush and hydrogen peroxide treatment. If the unit is 8+ years old and the rod is depleted, consider whether replacement makes more sense than a repair.",
      },
      {
        q: "Can you install a water heater in my garage? Do I need a permit?",
        a: "Most residential water heater replacements (like-for-like, same fuel type, same location) in Arizona cities require a permit pulled by the licensed contractor. We pull the permit — it's included in our installation quote. Garage installations require the unit to be raised off the floor or use a FVIR (flammability vapor ignition resistant) design per AZ code. We install to code; if an inspector later questions the installation, we stand behind our work.",
      },
      {
        q: "What's the difference between a power-vent and atmospheric-vent water heater?",
        a: "Atmospheric-vent units draft exhaust gases naturally through a vertical flue — they need to be in a space with a vertical vent run and sufficient combustion air. Power-vent units use an electric blower to exhaust through a horizontal PVC vent, which gives more flexibility in placement (garages, closets, interior utility rooms without a vertical flue). In Arizona slab homes where the original vent run is through the attic, power-vent conversions are sometimes the simplest path when replacing an aging atmospheric unit. We'll tell you which you have and what your options are.",
      },
    ],
    azContext: "Arizona's water is among the hardest in the United States — Phoenix metro water averages 15-20 grains per gallon (very hard), driven by the Colorado River source water and groundwater blending in the distribution system. This has direct consequences for water heaters: mineral scale accumulates inside electric heating elements and on the bottom of gas-unit burner chambers, reducing efficiency and accelerating failure. Industry-standard advice to flush a tank annually is more important in Arizona than in most markets. The extreme heat also affects units installed in garages: ambient temperatures of 110-120°F in a Phoenix garage in summer mean the tank is starting from a higher baseline temperature, which can shorten element life and increase standby energy loss. For solar-assisted or heat-pump water heater installations, Arizona's sun resource is excellent — ENERGY STAR heat-pump water heaters perform exceptionally well here. All water heater installations require an AZ ROC-licensed contractor to pull the permit. Verify any plumber at roc.az.gov.",
    realScenario: [
      {
        title: "Scenario — Mesa electric water heater, element failure at 7 years",
        body: "Homeowner called Monday morning with no hot water. 50-gallon electric Bradford White unit, 7 years old. On arrival, tested both elements — lower element had open resistance (completely failed), upper element reading normal. Sediment buildup on the lower element was visible when removed; classic Arizona hard-water failure pattern at 6-8 years. Replaced lower element and thermostat, flushed tank sediment, checked anode rod (50% depleted, replaced as preventive maintenance). Hot water restored within 90 minutes of arrival. Unit was in good enough shape to justify repair over replacement at 7 years.",
      },
      {
        title: "Scenario — Scottsdale tankless conversion, gas line undersized",
        body: "Homeowner wanted to upgrade from a 12-year-old 50-gallon gas tank unit to a Navien NPE-180S2 tankless. Initial assessment revealed the existing 3/4-inch gas line from the meter to the utility room was undersized for the 180,000 BTU demand of the tankless unit — the original tank only drew 40,000 BTU. We upsized 18 feet of gas line to 1 inch, installed the Navien with horizontal PVC venting through the utility room exterior wall, and set the recirculation pump. Homeowner now has unlimited hot water and a unit rated for 20+ years. Permit pulled and inspected; passed first inspection.",
      },
    ],
    whatToWatchOut: [
      "Quotes given over the phone without seeing the unit — a legitimate plumber will quote a range on the phone but won't commit to a final price until they've assessed the existing setup, venting, gas line, and electrical capacity.",
      "Contractors who install replacement units without pulling a permit. Unpermitted water heater installations can void your homeowner's insurance and create liability on resale.",
      "High-pressure upselling to tankless when your current situation doesn't justify it — if your gas line and electrical panel aren't sized for tankless, the true cost is much higher than the unit price alone.",
      "Shops that charge a separate 'diagnostic fee' and then roll that into the repair cost with no credit — clarify upfront whether the diagnostic charge applies toward the repair.",
      "Water heater replacements where the contractor doesn't install a T&P discharge line that terminates within 6 inches of the floor or to a drain — this is an AZ code requirement and a safety item. If you see the T&P valve just venting into open air, ask why.",
    ],
    comparison: "Tank vs. tankless for Arizona homes: tank units are lower upfront cost ($800-$1,400 installed), simpler to service, and work fine for households under 4 people with moderate hot-water demand. Tankless units are higher upfront ($1,500-$2,800 installed for gas; more for whole-house electric), but eliminate standby heat loss (significant in a 115°F Arizona garage) and provide unlimited hot water for larger households. In Arizona's climate, a tankless unit in a garage will run more efficiently than a tank unit fighting summer heat, which can offset the price premium over 5-8 years. Heat-pump water heaters are a strong option in Arizona's climate — they use ambient heat (plentiful) to heat water at roughly 3x the efficiency of a standard electric element. The upfront cost ($1,200-$1,800 installed) is offset by significant energy savings.",
  },

  "drain-clog": {
    metaTitle: "Drain Clog & Sewer Line Arizona | AZ Emergency Plumbing Co.",
    metaDescription: "Clogged drain or backed-up sewer line in Arizona? AZ Emergency Plumbing Co. uses hydro-jetting and sewer cameras — not just a snake. Licensed plumbers. Call (602) 555-0100.",
    h1: "Drain Clog & Sewer Line Clearing in Arizona",
    intro: "A single slow drain is usually a fixture-level clog — hair, soap scum, grease at the trap or the first few feet of drain line. Multiple fixtures backing up simultaneously, or sewage coming up in your tub when you flush the toilet, is a main sewer line problem and requires different tools and a different approach. A basic cable snake clears the path; it doesn't clean the pipe. Grease, mineral scale, and root intrusion grow back — often within months — if the pipe isn't properly cleared. We carry sewer cameras to show you exactly what's causing the blockage, hydro-jetting equipment to clear it to the pipe wall, and locating equipment to pinpoint problem areas without guessing. You see what we see before we start cutting or jetting, and you get a written quote before we proceed.",
    whenToCall: [
      "Single drain is slow or completely stopped — sink, tub, or shower that won't clear with a plunger",
      "Multiple drains in the house are slow simultaneously — indicates a main line issue, not a fixture-level clog",
      "Toilet is gurgling when you run the sink or use the washing machine",
      "Sewage smell from drains, floor drains, or the cleanout cap in the yard",
      "Sewage backing up into the tub, shower, or floor drain when the toilet is flushed",
      "The sewer cleanout cap in your yard is off or has been pushed off by pressure — active main line block",
      "Kitchen drain clogs repeatedly within weeks or months — grease buildup that a basic snake isn't clearing",
    ],
    process: [
      {
        step: "Phone triage — fixture clog or main line?",
        detail: "We ask two questions on the call: which drains are slow, and does anything back up when you use other fixtures? One slow drain is a fixture clog; multiple fixtures or sewage backup is a main line issue. The answer determines what equipment we bring — cable machine for fixture, camera and hydro-jet for main line. We don't send a snake-only truck to a main line block.",
      },
      {
        step: "Camera inspection (main line issues)",
        detail: "For anything beyond a simple fixture clog, we run a sewer camera through the cleanout to see what's actually in the pipe. Root intrusion, grease accumulation, pipe belly (a low spot that holds debris), cracked or collapsed pipe, or offset joints all look different on camera and require different solutions. You watch the camera feed in real time. We locate and flag the problem section above ground so you know exactly where it is under the slab or yard.",
      },
      {
        step: "Written quote before jetting or rooter work",
        detail: "After camera inspection, we quote the clearing method — cable rooter, hydro-jetting, or sectional pipe repair if the camera reveals structural damage. You approve the work before we proceed. If the camera shows a pipe collapse that jetting can't fix, we tell you before we bill you for jetting that won't solve the problem.",
      },
      {
        step: "Clearing — cable or hydro-jetting",
        detail: "Cable rooter: appropriate for soft obstructions (grease, hair, paper) and light root intrusion. Clears the blockage but leaves deposits on the pipe wall. Hydro-jetting: 3,000-4,000 PSI water through a 360-degree jet head — clears grease to the pipe wall, cuts through heavy root masses, flushes debris downstream. Hydro-jetting is the right tool for main line grease buildup, recurring clogs, and heavy root intrusion. We use the right tool for the actual problem, not the cheapest option.",
      },
      {
        step: "Post-clearing camera verification",
        detail: "On main line work, we run the camera again after jetting to confirm the line is clear and flowing correctly. You see the before and after. This step catches partial blockages and pipe damage that wasn't visible through the initial obstruction.",
      },
    ],
    costs: "Fixture-level drain clearing (cable snake, single drain) runs $95-$195. Main line camera inspection is $150-$250. Main line clearing with hydro-jetting runs $300-$600 for a standard residential line. Root intrusion with heavy-cut rooter and follow-up jet: $350-$700. Pipe repair or replacement if the camera reveals structural damage is priced separately based on length and access — we quote that before any excavation. What drives price: distance from cleanout to blockage, diameter of the sewer line, severity and type of obstruction, and whether the problem is accessible through existing cleanouts or requires a new access point. After-hours surcharge applies outside Mon-Sat 8am-8pm and is stated on the call before dispatch.",
    faqs: [
      {
        q: "What's the difference between a cable snake and hydro-jetting?",
        a: "A cable snake (electric rooter) punches through the blockage and creates an opening for flow, but leaves grease, scale, and root fragments on the pipe wall. Flow resumes, but the buildup that caused the clog is still there — just with a hole in it. Hydro-jetting uses high-pressure water to scour the pipe wall clean, cutting through grease deposits and root masses and flushing everything downstream. For grease-heavy kitchen drains and root-invaded sewer lines, hydro-jetting produces a much longer result before the clog returns.",
      },
      {
        q: "Do I have roots in my sewer line if my home is in a newer neighborhood?",
        a: "Possibly. Root intrusion isn't limited to old neighborhoods. Tree roots follow moisture, and a sewer line with even a minor crack or joint offset is a moisture source in Arizona's dry soil. Fast-growing ornamental trees common in Phoenix-area yards (citrus, block of trees, ficus) have aggressive root systems. We've found root intrusion in sewer lines as new as 8-10 years in established Phoenix-area neighborhoods.",
      },
      {
        q: "Multiple drains are slow — is my main sewer line clogged or could it be the city's line?",
        a: "If the blockage is downstream of your property's cleanout, it's in the city's main line and not your responsibility to repair. We camera your line from the house to the property cleanout first. If our camera shows the line is clear to the property boundary, we can tell you the blockage is likely in the city's main — and give you documentation to take to the utility.",
      },
      {
        q: "My kitchen sink drain clogs every few months — why does it keep coming back?",
        a: "Recurring kitchen drain clogs almost always mean grease accumulation in the drain line that a cable snake isn't fully removing. Snaking creates a channel; it doesn't clean the pipe. Grease on the pipe wall then catches new debris and rebuilds the blockage within weeks to months. Hydro-jetting removes the grease from the pipe wall and typically extends the cycle to 12-24 months or longer. Enzyme drain treatments (monthly, through the drain) help maintain it between professional cleanings.",
      },
      {
        q: "I have a cast-iron sewer line in an older home — is that a problem?",
        a: "Cast iron sewer pipe installed before the mid-1980s has a 40-50 year lifespan. Older cast iron corrodes from the inside out; the pipe surface becomes rough and catches debris, and eventually the bottom of the pipe rusts through entirely. Camera inspection is the only reliable way to know the current condition. If the camera shows extensive corrosion or pipe-bottom deterioration, spot repair or full repipe is the right answer — not repeated jetting that's clearing a pipe that's about to fail structurally.",
      },
      {
        q: "Can you clear a clog in my sewer line without digging up my yard?",
        a: "In most cases, yes. Cable rooter and hydro-jetting are done entirely through the existing cleanout access points — no excavation. The only time yard access is required is for pipe repair or replacement when the camera has identified a structural failure (collapse, crack, severe offset) that can't be cleared or repaired through a cleanout. If we get to that point, we tell you the options: spot repair (small excavation over the problem section), pipe relining (pulled through the existing pipe without full excavation), or full replacement.",
      },
      {
        q: "Is a drain clog covered by homeowner's insurance?",
        a: "Generally no — drain clearing is considered maintenance rather than a covered event. However, if the backup caused by a blocked main line results in water damage to your floors, walls, or belongings, that water damage may be covered under your policy's water damage provisions (varies widely by policy). We document the backup event and the clearance work, which your carrier may request.",
      },
    ],
    azContext: "Arizona sewer systems face a specific set of challenges. The Phoenix metro's rapid growth has produced neighborhoods where aging sewer laterals (the line from your house to the city main) sit alongside mature landscaping planted in the 1970s-1990s — roots from ficus, oleander, and citrus trees are among the most aggressive in the country for pipe intrusion. Phoenix-area slab construction means sewer lines often run under concrete foundations, which changes repair economics significantly — accessing a slab section requires concrete cutting, which adds cost. Arizona's hard water leaves mineral deposits inside drain lines over time, which narrows effective pipe diameter. Homes built before 1980 commonly have cast-iron drain lines in various stages of interior corrosion; we often discover structural failures on camera in homes where the owner only called about a slow drain. AZ ROC license is required for sewer line work beyond simple drain clearing; verify any contractor at roc.az.gov before allowing excavation on your property.",
    realScenario: [
      {
        title: "Scenario — Glendale main line backup, root intrusion",
        body: "Homeowner called Sunday afternoon — sewage backing up into the ground-floor shower when the upstairs toilet was flushed. Clearly a main line issue. We arrived within 90 minutes, ran the camera from the outdoor cleanout. Found an active root mass from a neighbor's block wall palm tree at 34 feet from the cleanout, almost completely obstructing a 4-inch clay tile sewer lateral. Hydro-jetted with a root-cutting head — removed the root mass, ran the camera again to confirm the line was clear and the pipe had no structural damage at the intrusion point. Recommended annual root maintenance jetting. Full job: 3.5 hours including camera before and after.",
      },
      {
        title: "Scenario — Tempe kitchen drain, grease buildup",
        body: "Restaurant-quality home chef had a kitchen drain that clogged every 6-8 weeks and had been snaked twice by a previous plumber. First cable snake cleared it; second snake cleared it; third clog we got the call. Camera showed the 2-inch drain line had roughly 40% of its interior diameter coated in grease — the snake was cutting through but leaving the majority of the grease layer on the pipe wall. Hydro-jetted the full run from the sink trap to the main line junction. Camera after: pipe walls clear. Recommended monthly enzyme treatment. Follow-up 8 months later: no recurrence.",
      },
    ],
    whatToWatchOut: [
      "Plumbers who snake the drain without offering a camera inspection first for a recurring or multi-fixture clog — snaking without seeing what's in the pipe is guessing, not diagnosing.",
      "Hydro-jetting quoted without a prior camera inspection. Jetting into a structurally compromised pipe (cracked, collapsed) can worsen the damage. Camera should always precede jetting on a main line.",
      "High-pressure recommendations to immediately repipe after a camera inspection — a single root intrusion or grease blockage doesn't mean the pipe system needs replacement. Ask what specifically in the camera footage justifies that recommendation.",
      "Drain companies that don't locate and flag the problem section above ground — you should always know where your problem is in case it recurs and needs repair.",
      "Septic-side confusion: if your home is on a septic system rather than city sewer, the clearing approach and the problem set are different. Confirm which system you have before authorizing any work — septic issues have a specific diagnosis and different repair pathway.",
    ],
    comparison: "Cable rooter vs. hydro-jetting: cable is appropriate for simple obstructions and is lower cost ($95-$195 vs. $300-$600). Hydro-jetting is the right tool for grease buildup, recurring clogs, and root intrusion — it produces a longer-lasting result. Drain clearing vs. pipe lining: when the camera shows recurring root intrusion at the same location, pipe lining (a resin sleeve inserted and cured inside the existing pipe, blocking root entry) can solve the problem permanently without excavation — cost runs $1,500-$3,500 for a residential lateral but eliminates the recurring clearing cycle. We'll discuss lining as an option when camera evidence supports it.",
  },

  "leak-detection": {
    metaTitle: "Slab Leak Detection Arizona | AZ Emergency Plumbing Co.",
    metaDescription: "Slab leak detection in Arizona. Acoustic and thermal equipment locates leaks under concrete without guessing. Licensed, upfront pricing. Call (602) 555-0100.",
    h1: "Slab Leak Detection in Arizona",
    intro: "The majority of Arizona homes are built on concrete slab foundations — no basement, no crawlspace, just a house sitting on poured concrete with the supply and drain lines running through or under it. When a pipe under or in that slab develops a leak, the water has nowhere obvious to go: it saturates the soil under the slab, wicks up through the concrete, and eventually shows up as warm spots on the floor, efflorescence on tile grout, soft spots in flooring, or unexplained water bill spikes. By the time you see visible evidence, the leak has often been running for weeks. We use acoustic listening equipment and thermal imaging cameras to locate slab leaks precisely — to within inches — so we're opening the minimum amount of concrete necessary to repair the actual leak, not hunting for it by opening long sections of slab. We quote the access and repair before we cut anything.",
    whenToCall: [
      "Water bill spiked with no obvious cause — a slab leak can run 24 hours a day without visible interior signs",
      "Warm or hot spot on the floor, especially on tile or concrete — hot water line leaking under the slab",
      "Wet or damp flooring, carpet, or baseboards with no visible source from above",
      "Sound of running water when all fixtures are off and the main shutoff is fully closed",
      "Mold or mildew at baseboard level with no visible water intrusion from outside",
      "Foundation movement, floor cracking, or tile cracking in a localized area — water undermining the slab",
      "Water pressure at fixtures has dropped gradually over weeks without explanation",
    ],
    process: [
      {
        step: "Call and water-loss confirmation",
        detail: "We start by confirming a leak exists before we dispatch. Shut off all fixtures in the house and check your water meter — if the dial is moving with everything off, you have a leak. We'll walk you through this on the phone. It rules out a toilet running (different problem) before we arrive with detection equipment.",
      },
      {
        step: "Pressure isolation — which system is leaking",
        detail: "On arrival, we isolate the hot and cold supply systems separately using shutoff valves to determine whether the leak is in the hot water line, the cold water line, or the drain system. Hot water slab leaks are the most common in Arizona because copper expands and contracts with the significant temperature swings between cold ground and 120°F water; cold water slab leaks are less common but occur; drain slab leaks require a different detection method (pressure from above rather than listening).",
      },
      {
        step: "Acoustic and thermal detection",
        detail: "We use an acoustic ground microphone to listen through the slab surface for the sound of pressurized water escaping the pipe. In combination with a thermal imaging camera (hot water leaks leave a heat signature through the concrete), we triangulate the leak location to within 2-6 inches in most cases. We mark the location on the floor with painter's tape before we cut anything.",
      },
      {
        step: "Written quote — spot repair vs. reroute",
        detail: "Before cutting concrete, we quote two options: spot repair (jackhammer into the slab at the located leak point, make the repair, patch the concrete) and rerouting (running a new supply line through the attic or walls to bypass the slab section entirely, abandoning the leaking underground line). Reroute avoids future slab access but requires a longer new line run. We give you the honest trade-offs for your specific situation.",
      },
      {
        step: "Access, repair, and concrete patch",
        detail: "Spot repair: we jackhammer a minimum-size access hole over the leak, repair the pipe with code-compliant fittings, pressure-test the repair, and patch the concrete. The concrete patch is structural-grade; the finish (tile, flooring) is your contractor's scope or ours if requested. Reroute: we run new copper or PEX through the attic or wall cavities, tie in at the fixture points, and cap the abandoned slab section.",
      },
      {
        step: "Pressure test and restoration",
        detail: "After either repair method, we pressure-test the repaired or rerouted section at operating pressure for a minimum of 10 minutes. We confirm the water meter is no longer moving with all fixtures off. You have documented proof the leak is resolved before we close the concrete or patch the drywall.",
      },
    ],
    costs: "Slab leak detection (acoustic and thermal, no cutting) runs $200-$350 and is credited toward the repair cost if you proceed with us. Spot repair — detection, concrete access, pipe repair, and concrete patch — typically runs $800-$1,800 depending on pipe depth, access difficulty, and repair length. Rerouting a slab line through the attic runs $1,200-$2,500+ depending on distance and the number of fixture connections. What drives price: depth of the pipe in the slab (post-tension slabs have deeper pipe runs), proximity of the leak to an existing wall or fixture (affects access difficulty), and the pipe material (copper vs. CPVC vs. galvanized, each with different repair methods). Emergency after-hours surcharge is disclosed on the call before dispatch.",
    faqs: [
      {
        q: "How do I know if I have a slab leak and not just a toilet running?",
        a: "Shut off all fixtures and appliances that use water. Go to your water meter and watch the dial or digital display. If it's moving, you have a leak somewhere in the system. Then shut off the supply to each toilet one at a time — if the meter stops when you shut off a toilet, that's your culprit. If the meter keeps moving with all toilets off and no other fixtures running, a slab or supply line leak is likely.",
      },
      {
        q: "My flooring has a warm spot but I don't see any water — is that a slab leak?",
        a: "A warm spot on your floor with no visible water is a classic hot-water slab leak presentation. The hot water line is leaking under the slab, and the warm water is heating the concrete above it. You won't see visible water until the leak has been running long enough to saturate the soil fully and find a path upward. Call us — the earlier the detection, the smaller the access cut and the less secondary damage.",
      },
      {
        q: "Is slab leak repair covered by homeowner's insurance?",
        a: "Most standard homeowner's policies cover the water damage caused by a slab leak (damaged flooring, baseboards, drywall) but may not cover the cost of accessing and repairing the pipe itself. Policy language varies significantly; some policies cover the full repair including concrete access, others cover only the resulting water damage. Check your policy's 'service line' or 'underground pipe' endorsements. We provide full documentation of the detection, access, repair, and restoration, which your adjuster will need.",
      },
      {
        q: "Should I do a spot repair or reroute the pipe through the attic?",
        a: "Spot repair is appropriate when the leak is isolated to a single failure point and the rest of the slab line is in good condition. Reroute makes more sense when: the pipe material is aging copper showing signs of generalized corrosion (one leak on old copper slab pipe usually means others are coming), the leak is in a difficult access location (under a load-bearing wall, tile shower floor, or near post-tension cables), or this is a repeat slab leak on the same line. We give you both quotes and our honest recommendation based on what we find.",
      },
      {
        q: "Are there risks with jackhammering a slab — could you hit electrical or post-tension cables?",
        a: "Yes, this is a real concern. Arizona homes built since the mid-1980s frequently use post-tension slab construction — concrete with high-tension steel cables embedded in it. Cutting a post-tension cable is a major structural event. We locate any visible post-tension indicators (orange or yellow warning labels at the slab perimeter) and, for suspected post-tension slabs, we use a post-tension locating process before any concrete cutting. Electrical conduit can also run under slabs in some home designs — we ask about the home's vintage and construction type before we start cutting.",
      },
      {
        q: "How long does slab leak detection and repair take?",
        a: "Detection alone (no cutting) takes 1-3 hours depending on leak complexity. Spot repair — detection, access, pipe repair, and concrete patch — typically takes 4-8 hours as a single job. Reroute through the attic can take 6-10 hours depending on the run length and fixture connections. In most cases, water is restored the same day. The concrete patch cures in 24-48 hours before flooring can be replaced.",
      },
      {
        q: "My house has galvanized pipe under the slab — should I be worried?",
        a: "Galvanized steel pipe corrodes from the inside out. In Arizona's water, galvanized slab pipe installed before the mid-1970s has likely lost significant interior diameter to mineral scale and rust, and the pipe wall is thinning. Slab leaks in galvanized pipe are a strong indicator that the system-wide condition is deteriorating. A reroute or repipe is often more economical than repeatedly patching individual galvanized failures over several years.",
      },
    ],
    azContext: "Arizona's slab construction dominates residential building across the Phoenix metro, Tucson, and most low-elevation cities. This makes slab leaks a far more common problem here than in states with crawlspace or basement construction. Phoenix-area water's extreme hardness (15-20 grains per gallon) accelerates copper pipe pitting — a phenomenon called electrolytic corrosion is common in Arizona slab copper, where stray electrical current in the soil attacks the pipe from the outside. Post-tension slab construction (concrete with embedded high-tension steel cables) is common in homes built since the 1980s; cutting a post-tension cable is a serious structural event requiring engineering assessment. Any slab work requires knowing whether the slab is post-tensioned before cutting. Arizona's monsoon season (July-September) adds ground saturation that can accelerate existing slab leaks and occasionally cause drain line offset from soil movement. AZ ROC licensing is required for slab leak repair — verify at roc.az.gov.",
    realScenario: [
      {
        title: "Scenario — Phoenix post-tension slab, hot water leak",
        body: "Homeowner noticed a section of tile floor noticeably warm and a water bill 40% higher than normal. We arrived, confirmed the leak with meter test, then isolated to the hot water supply system. Acoustic detection located the leak approximately 6 feet from the hallway bathroom — a pinhole in a 3/4-inch copper hot water line at the edge of a post-tension cable zone. We identified the PT cable location, cut the minimum access hole on the safe side of the cable, repaired the copper with a push-fit coupling and a short section of new copper. Concrete patched. Water bill normalized the following month.",
      },
      {
        title: "Scenario — Mesa, recurring slab leaks, reroute decision",
        body: "Homeowner had two slab leak repairs in the prior 18 months — both on the same hot water loop. Third leak in a different location on the same run. Camera inspection of the line between repairs showed generalized pitting corrosion across the aging 1970s copper. The advice: reroute the entire hot water loop through the attic rather than a third spot repair. Total reroute: 68 feet of new 3/4-inch copper through the attic, tied in at four fixture locations, old slab line abandoned. Cost was higher than a third spot repair but permanently ended the slab leak cycle on that line.",
      },
    ],
    whatToWatchOut: [
      "Anyone who starts cutting concrete without first doing acoustic or thermal detection — guessing at the leak location by opening the slab is expensive and often misses the actual failure point.",
      "Detection companies that charge for detection and then aren't licensed to do the repair — you'll pay detection fees, then hire a second contractor. We do both.",
      "Post-tension slab cutting without locating PT cables first. This is non-negotiable safety and structural protection. If a contractor proposes to start cutting without asking about or checking for post-tension, stop the job.",
      "Reroute quotes that don't include all fixture connections — a reroute that bypasses the slab but only reconnects 2 of 4 fixture points leaves you with dead lines to the others. Get specifics on exactly what the reroute covers.",
      "Water damage remediation companies who refer you to a specific plumber on commission — choose your plumber independently and verify their AZ ROC license.",
    ],
    comparison: "Spot repair vs. reroute: spot repair is lower cost ($800-$1,800) and appropriate when the failure is isolated. Reroute is higher cost ($1,200-$2,500+) but eliminates future access to that slab section and is the right choice when the pipe material is aging systemically. Slab leak repair vs. whole-house repipe: a whole-house repipe (replacing all supply lines through attic runs) costs $4,000-$10,000+ depending on home size and scope, but addresses the entire pipe system rather than one failed section. If you've had two or more slab leaks, a repipe estimate is worth having.",
  },

  "gas-line": {
    metaTitle: "Gas Line Repair Arizona | AZ Emergency Plumbing Co. | Licensed",
    metaDescription: "Gas line leak or repair in Arizona. AZ ROC-licensed, bonded, insured. Evacuate and call 911 first for active leaks. Then call us. (602) 555-0100.",
    h1: "Gas Line Repair in Arizona",
    intro: "If you smell gas in your home right now — that sulfur or rotten-egg smell added to natural gas so you can detect it — leave the building immediately. Don't flip light switches, don't use your phone inside the house, don't start the car in the garage. Once you're safely outside and away from the structure, call your gas utility (Southwest Gas in most of AZ: 877-860-6020) and then call 911. Let the gas company isolate the line before anyone enters the building. That's the protocol for an active gas leak — no exceptions. Once the line is isolated and the house has been ventilated and cleared, call us. We handle the repair work on residential and light commercial gas lines: locating leaks with electronic detection equipment, repairing or replacing faulty sections, installing gas lines to new appliances, and pulling the permits for code-required inspections.",
    whenToCall: [
      "Active gas smell — LEAVE FIRST. Call Southwest Gas (877-860-6020) and 911, THEN call us once the line is isolated",
      "Gas line to an appliance (dryer, stove, water heater, fireplace) needs to be connected, extended, or capped off",
      "You're adding a gas appliance (BBQ stub-out, outdoor fire pit, pool heater, gas dryer) and need a new branch line",
      "Your gas company has flagged a leak at your meter or service line during their meter work and told you to have it repaired before restoration",
      "Electronic gas leak detector alarm has triggered in your home — treat this as an active leak and follow the same evacuate-first protocol",
      "Flexible gas connector behind an appliance shows corrosion, kinking, or the connector is an older corrugated type that has been flagged for recall",
      "You're doing a kitchen or laundry renovation and need the existing gas line capped, extended, or moved",
    ],
    process: [
      {
        step: "Safety first — gas company isolation confirmed",
        detail: "We don't enter a building with an active gas smell or a known active leak until the gas company has isolated the supply and the building has been ventilated and cleared by either the gas company or first responders. For calls about suspected leaks (smell is present but faint), we arrive, assess from the exterior first, and use electronic methane detectors to confirm whether gas is present before entering.",
      },
      {
        step: "Electronic leak detection",
        detail: "We use combustible gas detectors calibrated for natural gas (methane) and propane to locate leak points — at pipe joints, flexible connectors, appliance connections, and buried exterior runs. Electronic detection finds leaks not detectable by smell alone and pinpoints the location accurately before we open walls or excavate.",
      },
      {
        step: "Written quote and permit determination",
        detail: "Gas line work in Arizona requires a permit for new line installation, relocation, or significant repair — we pull the permit, you don't have to navigate that process. We quote the repair or installation with the permit cost included. Line-item quote before any work starts.",
      },
      {
        step: "Repair or installation",
        detail: "Gas line repairs and installations use black iron pipe (traditional), CSST (corrugated stainless steel tubing, commonly used for flexible runs inside walls and attics), or approved flexible connectors at appliance terminations. Each has code requirements for fittings, support intervals, bonding, and proximity to heat sources. We install to AZ code — not just adequately, but correctly.",
      },
      {
        step: "Pressure test — mandatory before restoration",
        detail: "All gas line work must pass a pressure test before the gas company restores service. We pressure-test the repaired or new section to the required test pressure, confirm zero pressure drop over the test period, and document the test result for the inspector and the gas company.",
      },
      {
        step: "Inspection and gas restoration",
        detail: "Permitted gas work requires a municipal inspection before the gas company restores service. We coordinate the inspection, meet the inspector, and resolve any correction items on the spot when possible. After inspection sign-off, the gas company restores service and we confirm all appliances are lit and operating correctly.",
      },
    ],
    costs: "Gas line connector replacement (at an appliance) runs $150-$300. Gas line repair at an identified leak point runs $200-$500 depending on pipe type and access. New gas line branch to an appliance (from an existing main line) runs $400-$1,200 depending on run length, pipe size, and wall access. Exterior buried gas line work is quoted after a locating step and runs $600-$2,500+ depending on length and depth. Permit fees are included in our quotes — we don't add them after the fact. After-hours emergency response for gas situations carries a disclosed surcharge stated on the call, but for active leak situations, the gas company response is the immediate priority regardless of time of day.",
    faqs: [
      {
        q: "I smell something like rotten eggs in my house — what do I do RIGHT NOW?",
        a: "Leave immediately. Don't use any electrical switches, phones, or open flames inside the structure. Once outside and away from the building, call Southwest Gas at 877-860-6020 (or your gas utility if different) and call 911. The gas company will dispatch to isolate the supply line. Don't re-enter until the gas company or first responders have cleared the building. After the building is cleared and ventilated, call us to locate and repair the leak source.",
      },
      {
        q: "The gas company came out and said there's a leak 'at the meter' or 'on my side' — what does that mean?",
        a: "The gas meter is the dividing point between the utility's responsibility (supply line up to and including the meter) and the homeowner's responsibility (everything from the meter into the house). If the gas company says the leak is 'on your side' of the meter, it's in your gas piping and your responsibility to repair. If they say the leak is on their side, they repair it — but they'll still shut off your service until their repair is complete. Either way, call us after the gas company makes their assessment.",
      },
      {
        q: "I want to add a gas line for a BBQ grill or fire pit on my patio — is that a big project?",
        a: "Usually not. A typical patio gas stub-out — tapping off an existing gas main in the house, running a buried or surface line to a stub-out location — takes 4-6 hours including the permit process. The permit is required for this work; the inspection is typically the same day or next business day in most AZ cities. We install a shutoff valve at the stub-out and cap it for future appliance connection.",
      },
      {
        q: "What is CSST pipe and is it safe?",
        a: "CSST (corrugated stainless steel tubing) is flexible gas piping commonly used since the 1990s for interior gas line runs — it's faster to install through walls and attics than rigid black iron pipe. CSST is safe when installed correctly, with one important requirement: it must be bonded and grounded to your home's electrical grounding system per AZ code. Un-bonded CSST can be damaged by lightning-induced electrical surges, which can create a pin-hole gas leak. If your home was built or updated with CSST gas piping before bonding requirements were widely enforced (roughly pre-2006 installs), we can inspect and add bonding if it's missing.",
      },
      {
        q: "My old flexible gas connector behind the stove/dryer looks corrugated and old — do I need to replace it?",
        a: "If the flexible connector is the older uncoated corrugated aluminum or brass accordion-type (not the newer stainless-steel coated design), yes — the older style was subject to product recalls and has a finite lifespan. We replace these routinely during appliance service calls. Flexible connectors should never be kinked, reused after an appliance move, or run through walls or floors — those are all code violations and safety issues.",
      },
      {
        q: "Do I need a permit for gas line work in Arizona?",
        a: "Yes, for any new gas line installation, relocation, or significant repair. Simple appliance connection (connecting an existing stub-out to an appliance with an approved flexible connector) is generally exempt, but running any new pipe, moving a gas line, or adding a branch requires a permit. We pull the permit — it's included in the job cost. Work done without a permit can void homeowner's insurance coverage for any gas-related incident.",
      },
      {
        q: "How do I know if I have natural gas or propane at my house?",
        a: "Natural gas is piped underground from the utility main (in AZ, Southwest Gas serves most urban and suburban areas). If you have a gas meter outside your house, you're on natural gas. Propane is stored in a tank on your property (above-ground white or silver tank, or underground tank). The two systems use different pressure and different appliance orifice sizing — never use natural-gas appliances on propane or vice versa without a proper conversion kit. Propane leaks pool at floor level (propane is heavier than air); natural gas rises (lighter than air). Both are dangerous.",
      },
    ],
    azContext: "Arizona's gas service is primarily natural gas distributed by Southwest Gas Corporation, which serves the majority of the Phoenix metro, Tucson, and most Arizona cities. Some rural areas and communities without Southwest Gas service use propane. Arizona requires AZ ROC licensing for gas line plumbing work — verify any contractor at roc.az.gov and confirm they hold the specific dual-licensing required for both plumbing and gas work if your jurisdiction requires it. Permit requirements: most AZ cities require a permit and inspection for gas line work beyond appliance connection. Phoenix, Mesa, Scottsdale, and Chandler all require permits for new gas line runs. Inspections in Maricopa County cities are typically scheduled within 1-2 business days. CSST bonding requirements: AZ has adopted the IFGS code requiring CSST bonding — if your home has un-bonded CSST, this is a code compliance and insurance issue.",
    realScenario: [
      {
        title: "Scenario — Chandler, gas company flagged meter-side leak",
        body: "Southwest Gas came to read the meter and detected a methane reading at the meter. They shut off the homeowner's service and notated it as a homeowner-side leak. We arrived, used electronic methane detection to locate the leak — a failed union fitting on the gas line immediately inside the utility room, 3 feet from the meter. Fitting replaced with new union and thread sealant, pressure-tested to 10 PSI for 30 minutes, documented, and called Southwest Gas for restoration. Gas restored same afternoon. Entire job: 2.5 hours from arrival to gas restoration.",
      },
      {
        title: "Scenario — Scottsdale patio gas line, new outdoor kitchen",
        body: "Homeowner adding an outdoor kitchen with built-in gas grill and side burner. Needed a new gas branch tapped off the indoor main, run 22 feet through the exterior wall and 14 feet of buried line to the outdoor kitchen island stub-out. Pulled the permit, installed 1/2-inch CSST (bonded and grounded) through the wall and black iron for the buried section (code requires metallic pipe for buried runs), installed a dedicated shutoff at the exterior wall. Passed inspection first trip. Gas company confirmed no pressure issues at the new tap. Homeowner's outdoor kitchen operational same week.",
      },
    ],
    whatToWatchOut: [
      "Any plumber who enters a building with an active gas smell without confirming the gas is off first. This is a basic safety failure — leave immediately and call the gas company before any contractor enters.",
      "Gas line work done without a permit. Unpermitted gas work is a homeowner's insurance issue and a safety liability. Ask for the permit number before work starts.",
      "CSST installation without bonding — a common shortcut on older installs. Ask whether your existing CSST is bonded, especially in homes built or renovated between 1990 and 2006.",
      "Plumbers using flexible connectors to connect appliances through walls or extended runs. Flexible connectors are only code-legal for the connection between the gas shutoff and the appliance in the same room — not for running through walls.",
      "Shops that don't coordinate with Southwest Gas for restoration after repair — some plumbers finish the repair but leave you to navigate the gas company restoration process yourself. We handle the coordination.",
    ],
    comparison: "Gas line repair vs. propane conversion: if you're in an area that doesn't have Southwest Gas service, propane is the alternative. The systems require different appliance orifice sizes, different pressure regulators, and different tank infrastructure. Conversion is feasible but a separate project from a simple repair. Gas stub-out vs. electric for new appliances: adding a gas stub-out for a gas range, dryer, or water heater costs $400-$1,200 and is a one-time expense. The appliance operating cost difference (gas typically cheaper per BTU than electric in AZ) often offsets the stub-out installation cost over 2-4 years depending on appliance type and usage.",
  },

  "garbage-disposal": {
    metaTitle: "Garbage Disposal Repair & Replace Arizona | AZ Emergency Plumbing Co.",
    metaDescription: "Garbage disposal repair or replacement in Arizona. Jammed, leaking, or dead? Same-day service, honest diagnosis, upfront pricing. Call (602) 555-0100.",
    h1: "Garbage Disposal Repair & Replacement in Arizona",
    intro: "Garbage disposals are the kitchen appliance that most homeowners try to fix themselves first — and often successfully, since a tripped thermal overload (the red reset button on the bottom of the unit) or a jam cleared with the hex key tool resolves maybe half of all 'dead disposal' calls. If you've already reset the breaker, pressed the reset button, and tried to free the jam manually and it still won't run, there's a mechanical or electrical failure that needs a plumber. If the disposal is leaking — at the sink flange, the discharge line, or the bottom of the unit — that's a job for us. If it's humming but not spinning, grinding but not clearing, or smells like burning rubber, we can diagnose and tell you whether repair makes sense or whether replacement is the better call at the unit's age and repair cost.",
    whenToCall: [
      "Disposal is completely dead — no sound, no hum, reset button didn't fix it",
      "Disposal hums but won't spin — flywheel is jammed and the hex key trick didn't free it",
      "Leaking at the sink flange (top seal), the discharge pipe connection, or dripping from the bottom of the unit",
      "Disposal runs but drains slowly — clog in the discharge line or P-trap, not the disposal itself",
      "Grinding sound has gotten louder or changed character — bearing failure or grinding ring wear",
      "Burning smell when running — motor overheating from repeated jams or impeller drag",
      "Unit is 10+ years old and you want an honest assessment of whether it's worth repairing",
    ],
    process: [
      {
        step: "Call — quick triage",
        detail: "We walk you through two quick checks on the phone before we dispatch: (1) is the reset button on the bottom of the unit popped out — press it firmly until it clicks; (2) insert the hex/Allen key in the center port on the bottom and work it back and forth to free the flywheel. If those don't resolve it, we dispatch. No charge for the phone triage — that's just us not wasting your time on a truck roll for something you can fix in 30 seconds.",
      },
      {
        step: "Arrival and diagnosis",
        detail: "We check electrical continuity at the unit (confirming power is reaching the disposal and it's not a circuit or switch issue), test the motor under load, inspect all connection points for leaks (sink flange, discharge elbow, dishwasher drain connection if present), and run water through to assess drainage. We can tell you within 10 minutes whether the unit has a repairable fault or whether repair cost exceeds replacement value.",
      },
      {
        step: "Written quote — repair vs. replace",
        detail: "We quote both options in writing. Most disposal repairs (flange resealing, discharge connection, minor electrical) run under $150. A replacement (new unit, same mounting assembly if it fits) runs $200-$450 depending on the replacement unit. If the disposal is over 8 years old and the repair cost is over $100, replacement almost always makes more sense — we'll tell you that plainly rather than taking your money on a repair that extends its life by a year.",
      },
      {
        step: "Repair or replacement",
        detail: "Repairs: reseal the sink flange, replace the discharge elbow, repair the switch or outlet connection. Most repairs take under an hour. Replacement: disconnect the existing unit, install new unit using the existing mounting ring if compatible (most InSinkErator and Moen units use the same 3-bolt mount), connect discharge and dishwasher drain, verify operation and drainage. New unit installation typically takes 45-90 minutes.",
      },
      {
        step: "Drain test and cleanup",
        detail: "We run water through the disposal at full flow for 2-3 minutes, test under a loaded grind cycle, and confirm there's no leaking at any connection before we leave. The under-sink cabinet gets dried out if there was any previous leak. We take the old unit with us — no disposal sitting in your garage.",
      },
    ],
    costs: "Garbage disposal diagnosis and simple repair (reset, flange reseal, discharge connection) runs $95-$185. Replacement with a mid-grade unit (1/2 to 3/4 HP, InSinkErator or Moen) installed runs $220-$380. High-end replacement (1 HP, stainless grinding ring, quieter motor) runs $380-$500 installed. What drives price: unit selection (we carry standard units on the truck; special-order units add a day), complexity of the sink configuration (farmhouse sinks and some composite sinks require different flange approaches), and whether the switch or outlet needs replacement. We don't charge a separate trip fee layered on top of diagnosis — the diagnosis is part of the service call.",
    faqs: [
      {
        q: "My disposal just hums and won't spin — is it broken?",
        a: "Usually not. A humming disposal that won't spin almost always has a jammed flywheel — the motor is running but the grinding plate is stuck on a food item, bone fragment, or foreign object. Look under the disposal for the hex-key port (a 1/4-inch or 3/8-inch hex socket in the center of the bottom). Insert the provided Allen wrench (or any hex key of the right size) and work it back and forth until you feel the flywheel break free. Then press the reset button, wait 10 minutes, and try again. If it still hums after freeing the flywheel, the motor capacitor may have failed — that's a repair call.",
      },
      {
        q: "Water is leaking from the bottom of the disposal — can it be fixed?",
        a: "A leak from the bottom of the unit (not from connections, but from the body of the disposal itself) indicates the internal seals have failed. The motor shell and the grinding chamber are separate, with internal seals between them. When those seals go, water from the grinding chamber drips into the motor compartment and out the bottom. This is not an economically repairable failure — the unit needs to be replaced. Repairing internal seals costs more than a new unit.",
      },
      {
        q: "The disposal smells terrible no matter how much I clean it — what's causing that?",
        a: "Odor almost always comes from food waste accumulation in three places: under the rubber splash guard (the black flap at the top of the disposal opening — lift it and scrub the underside with a brush and baking soda or bleach), in the grinding ring (the serrated ring around the grind plate catches fibrous food matter), and in the P-trap and discharge line below the disposal. Monthly: run ice cubes through the disposal (cleans the grinding ring), then flush with hot water and a half-cup of baking soda followed by white vinegar. If smell persists after cleaning, the splash guard is often the culprit — they're inexpensive to replace.",
      },
      {
        q: "Can I put anything in the garbage disposal or are there things I shouldn't put in?",
        a: "Avoid: fibrous vegetables (celery, artichoke, asparagus — the fibers wrap around the grinding plate and jam the motor), potato peels (starchy paste that coats the drain), grease (liquid grease solidifies in the P-trap and drain line), bones from large animals (chicken wing bones are usually fine, turkey leg bones are not), and expandable foods like pasta and rice (they continue to expand in the drain line). Disposal-friendly: most cooked food scraps, small fruit seeds, coffee grounds in small quantities, ice cubes for cleaning. If in doubt, the trash is the safer choice.",
      },
      {
        q: "My disposal worked fine yesterday and now it's completely dead — no sound at all. What happened?",
        a: "Most complete dead-unit failures are one of three things: (1) the thermal overload tripped — press the reset button on the bottom of the unit until it clicks (you may feel it pop back in); (2) the circuit breaker for the disposal circuit tripped — check your panel; (3) the wall switch failed (rare, but switches on disposal circuits do go bad). If none of those restore function, there's an electrical failure in the unit itself — motor winding failure or wiring issue that needs a plumber.",
      },
      {
        q: "How long should a garbage disposal last?",
        a: "Most standard residential disposals last 8-12 years with reasonable use. Higher-end units (1 HP, stainless grinding components) can last 12-15 years. Arizona's hard water doesn't specifically impact motor life, but mineral scale can accumulate on the grinding ring over time, reducing grinding efficiency. At 10+ years, if the unit is requiring its second or third repair, replacement is the straightforward answer — a new 1/2 HP unit installed runs $220-$300 and will outlast any repair on an aging unit.",
      },
      {
        q: "Do I need a permit to replace a garbage disposal in Arizona?",
        a: "No. Replacing a garbage disposal (same-location, same electrical circuit, same discharge connection) is a like-for-like appliance replacement and doesn't require a permit in Arizona. If you're adding a disposal to a sink that never had one — which requires a new drain fitting in the sink basin, a new drain line connection, and a new switched outlet — that electrical work may require an electrical permit. We pull what's required; we'll tell you upfront.",
      },
    ],
    azContext: "Garbage disposal performance in Arizona is affected by two factors: water hardness and food waste patterns. Phoenix-area hard water (16-20 grains per gallon) deposits mineral scale on the grinding ring over time, reducing grinding efficiency and making the disposal work harder — especially noticeable in units over 5 years old. Monthly ice-cube cleaning helps, but doesn't eliminate long-term scale buildup on the ring. Arizona's culture around outdoor cooking and citrus (lemon, lime, orange) means disposals in AZ homes see more citrus peel and fibrous food waste than many markets — citrus peel is fine in small quantities but in volume can mat around the grinding plate. Garbage disposals do not require AZ ROC licensing for replacement in kind, but any new drain or electrical work connected to the disposal falls under licensed contractor requirements. If you're buying a home in Arizona and the disposal is more than 8 years old, budget for replacement — it's often the first appliance to be flagged on a home inspection.",
    realScenario: [
      {
        title: "Scenario — Gilbert, leak from flange seal",
        body: "Homeowner noticed water dripping inside the cabinet under the sink whenever the disposal ran. On arrival: water was coming from the sink flange — the metal ring and rubber gasket that connects the disposal to the underside of the sink drain opening. This seal fails over years of vibration and use. Removed the disposal from the mounting assembly, reseated the sink flange with new plumber's putty and a fresh gasket, reinstalled the disposal, ran a full leak test. No further dripping. Job: 45 minutes. Homeowner had been running a towel in the cabinet for two weeks before calling — the fix was straightforward.",
      },
      {
        title: "Scenario — Tempe, disposal replacement, 11-year-old unit",
        body: "Homeowner called about a disposal that had become extremely loud over the past few months and recently started leaking from the bottom. Unit was an 11-year-old InSinkErator Badger 5 (1/2 HP). Diagnosis: internal seal failure (confirmed by bottom-of-unit leak) plus bearing wear causing the noise. Repair cost would have exceeded the unit value. Replaced with an InSinkErator Evolution Compact (3/4 HP, quieter sound insulation). Installation used the existing 3-bolt mounting ring — no sink modifications required. Homeowner's kitchen noise level noticeably reduced. Unit haul-away included.",
      },
    ],
    whatToWatchOut: [
      "Plumbers who diagnose a humming, jammed disposal as 'motor failure' without first attempting to free the flywheel with a hex key — a disposal that hums is usually jammed, not dead.",
      "Repair quotes over $150 on a disposal that's 8+ years old. At that price point, a new unit is almost always the better economic decision.",
      "Shops that charge a separate diagnostic fee without applying it toward the repair or replacement cost — the diagnosis is part of the service call.",
      "Disposal 'repair kits' sold online for bottom-of-unit leaks — internal seal kits exist but the labor cost of disassembly plus the part cost typically exceeds a replacement unit cost. They're mostly a DIY enthusiast path, not a cost-effective professional repair.",
      "Being sold a 1 HP unit when a 1/2 HP unit fits your household's usage. A two-person household without heavy food waste doesn't need a 1 HP commercial-grade disposal. We match the unit to your actual use pattern, not the highest-margin option.",
      "Anyone who wants to connect the disposal discharge line to your dishwasher drain without an air gap or high loop — if your dishwasher drain connects to the disposal inlet, the connection must include a high loop or air gap to prevent siphoning wastewater back into the dishwasher. This is an AZ plumbing code requirement.",
    ],
    comparison: "Repair vs. replace: under 6 years old, repair almost always makes sense for any repairable fault. 6-10 years: evaluate repair cost vs. a new unit — if repair is over 40% of a new unit cost, replace. Over 10 years: replace unless the repair is trivial (flange reseal, discharge connection). Disposal HP comparison: 1/2 HP handles most standard residential use; 3/4 HP is appropriate for households with heavier food waste or more than 4 people; 1 HP is for high-use kitchens or if you grind significant quantities of food regularly. Sound insulation matters in open-plan kitchens — the Evolution series units are noticeably quieter than the Badger series and worth the price premium if the kitchen is adjacent to living space.",
  },
};
