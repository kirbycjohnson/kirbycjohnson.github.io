/* ==========================================================================
   PORTFOLIO CONTENT
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to update the website's text,
   projects, skills, and images. See README.md for step-by-step help.

   Rules of thumb:
   - Keep the quotes around text. To use a quote mark inside text, use a
     curly one (’ or “ ”) or put a backslash before it: \"
   - Every item in a list ends with a comma.
   - Image paths are relative to the site root, e.g.
     "images/projects/gaitway/cover-wearable-prototype-on-body.jpg"
   ========================================================================== */

window.PORTFOLIO = {

  /* ------------------------------------------------------------------------
     1. YOUR DETAILS
     ------------------------------------------------------------------------ */
  site: {
    name: "Kirby Johnson",
    title: "Biomedical Engineer | Product Design & Development",
    email: "kirbycaroline14@gmail.com",
    linkedin: "https://www.linkedin.com/in/kirby-johnson14",
    location: "Baltimore, MD",

    // Resume PDF. Replace the file in assets/resume/ with a new PDF of the
    // SAME NAME and the site picks it up automatically.
    resume: "assets/resume/Kirby_Johnson_Resume.pdf",

    // Shown in search results and link previews.
    metaDescription:
      "Kirby Johnson is a biomedical engineer focused on medical device design, mechanical design, and hands-on prototyping. M.S.E. candidate at Johns Hopkins CBID.",
  },

  /* ------------------------------------------------------------------------
     2. SIDEBAR (left column): short statement, education, optional photo
     ------------------------------------------------------------------------ */
  about: {
    // One or two sentences under your name.
    statement:
      "Biomedical engineer at Johns Hopkins CBID, turning clinical needs into medical devices through mechanical design and hands-on prototyping.",

    education: [
      { degree: "M.S.E. Biomedical Engineering", school: "Johns Hopkins University (CBID)", date: "Expected May 2027" },
      { degree: "B.S. Bioengineering", school: "University of California, Los Angeles", date: "June 2026" },
    ],

    // Optional round photo above your name. Leave as "" to hide it.
    // Example: "images/profile/kirby-johnson-headshot.jpg"
    photo: "images/profile/kirby-johnson-headshot.jpg",
    photoAlt: "Portrait of Kirby Johnson",
  },

  /* ------------------------------------------------------------------------
     3. PROJECTS
     ------------------------------------------------------------------------
     - Order on the page = order in this list. Move a block up or down to reorder.
     - Set  hidden: true  to take a project off the site without deleting it.
     - Set  status: "in-progress"  to show a small "In progress" label.
     - "id" becomes the project's web address: project.html?id=YOUR-ID
       Use lowercase letters, numbers, and dashes only, and keep it unique.
     - In "contributions", list what YOU did. In "teamOutcomes", list what the
       team achieved together. The project page shows these side by side.
     ------------------------------------------------------------------------ */
  projects: [
    /* ---------------- PROJECT: Applied Medical ---------------- */
    {
      id: "applied-medical-surgical-simulation",
      hidden: false,
      title: "Surgical Simulation Engineering – Applied Medical",
      category: "Medical Device Engineering / Product Development",
      summary:
        "Three production engineering projects for surgical simulation: a CNC-machined camera alignment fixture for an AI-assisted training system, a molding process that doubled output, and an ultrasonic welding DoE.",
      role:
        "Medical device engineering intern responsible for fixture design, manufacturing and process improvements, and engineering testing.",
      org: "Applied Medical · Rancho Santa Margarita, CA",
      dates: "Jun – Sep 2025",
      team: "Surgical Simulation engineering group",
      skills: [
        "SolidWorks", "CNC machining", "Fixture design", "Injection molding",
        "Design of experiments", "Ultrasonic welding", "Process improvement",
        "Verification testing", "IQ/OQ validation", "Toleranced drawings",
      ],
      cover: {
        src: "images/projects/applied-medical-surgical-simulation/simsei-internship-poster.jpg",
        alt: "Internship poster covering the gallbladder simulator process improvement, camera fixture design, and ultrasonic welding DoE",
        fit: "contain", // show the whole poster without cropping
      },
      highlights: [
        { value: "1 day", label: "from fabrication to production use" },
        { value: "2×", label: "gallbladder simulator output per cycle" },
        { value: "IQ/OQ", label: "validation executed" },
      ],
      overview: [
        "During production of an AI-assisted surgical training system, the overhead camera was getting knocked out of alignment. The AI model was training on inconsistent angles and failing as a result.",
        "Alongside the fixture, I took on two process projects: increasing throughput on a simulated laparoscopic cholecystectomy (gallbladder) model, and tuning the parameters of an ultrasonic welding machine.",
      ],
      process: [
        { title: "Camera alignment fixture", text: "Designed a stabilization system and L-bracket in SolidWorks, produced fully dimensioned drawings with tolerances, hole layouts, and machining requirements, and machined both parts on CNC equipment." },
        { title: "Gallbladder simulator molding", text: "Reworked the molding process so each manufacturing cycle produced twice as many parts, reducing lead time." },
        { title: "Ultrasonic welding DoE", text: "Designed and ran a Design of Experiments to find optimal welding equipment parameters." },
        { title: "Validation and documentation", text: "Executed IQ/OQ validation and authored engineering documentation and SolidWorks manufacturing drawings for fixtures and molds." },
      ],
      contributions: [
        "Owned the camera fixture end to end: CAD, drawings, CNC machining, and installation.",
        "Redesigned the gallbladder simulator molding process to double part output per cycle.",
        "Designed and executed the ultrasonic welding DoE.",
        "Executed IQ/OQ validation and wrote the supporting documentation.",
        "Formally presented all three projects at the end of the internship.",
      ],
      teamOutcomes: [
        "The fixture went into production the day after it was made and resolved the alignment issue, removing the need for manual readjustment.",
        "The updated molding process shortened manufacturing lead time for the simulator line.",
      ],
      outcome: [
        "The fixture was implemented in production the following day and immediately fixed the camera alignment problem. The molding change doubled output per cycle.",
      ],
      gallery: [
        { src: "images/projects/applied-medical-surgical-simulation/camera-mount-misalignment-points.jpg", alt: "Surgical training system with the points where the camera mount shifted out of alignment marked in red", caption: "Where the camera mount was shifting out of alignment", position: "center 40%" },
        { src: "images/projects/applied-medical-surgical-simulation/cnc-machining-fixture-part.jpg", alt: "Desktop CNC mill machining a fixture component from plastic stock", caption: "CNC machining a fixture component" },
        { src: "images/projects/applied-medical-surgical-simulation/kirby-with-finished-fixture.jpg", alt: "Kirby standing next to the training system mounted on the finished fixture", caption: "The finished fixture in place", position: "center 30%" },
      ],
    },

    /* ---------------- PROJECT: LVB device ---------------- */
    {
      id: "lvb-device",
      hidden: false,
      status: "in-progress",
      title: "Lymphovenous Bypass (LVB) Device Development",
      category: "Biomedical Engineering / Medical Device Design",
      summary:
        "An industry-sponsored device for lymphovenous bypass, the supermicrosurgery that reroutes lymphatic fluid into nearby veins to treat lymphedema. Built from 180+ hours in the OR and 50+ stakeholder interviews.",
      role:
        "Biomedical design team member focused on device concept development, engineering design, clinical needs assessment, and translating surgeon feedback into design requirements.",
      org: "Johns Hopkins CBID · Industry-sponsored",
      dates: "Jun 2026 – Present",
      team: "CBID master’s biodesign team",
      skills: [
        "Medical device design", "CAD", "Design thinking", "Clinical needs assessment",
        "Surgeon interviews", "Anatomical research", "Design for manufacturability",
      ],
      cover: {
        src: "images/projects/lvb-device/universal-vessel-anastomosis-poster.jpg",
        alt: "Kirby standing beside the team’s Universal Vessel Anastomosis need poster at Johns Hopkins CBID",
      },
      highlights: [
        { value: "180+", label: "hours of OR observation" },
        { value: "349", label: "clinical needs validated" },
        { value: "50+", label: "stakeholder interviews" },
      ],
      overview: [
        "Lymphovenous bypass connects lymphatic vessels to nearby venules, often less than a millimeter across, so trapped lymphatic fluid can drain. It is one of the most technically demanding procedures in reconstructive microsurgery.",
        "Our team was embedded in reconstructive microsurgery and peripheral nerve operating rooms to find where a new device could make a meaningful difference, then committed to the highest-impact need for development.",
      ],
      process: [
        { title: "Clinical immersion", text: "Observed 180+ hours of reconstructive microsurgery and peripheral nerve cases, documenting workflow, instruments, and failure points." },
        { title: "Need validation", text: "Tested 349 candidate needs through 50+ interviews with surgeons, value analysis committees, patients, and other stakeholders." },
        { title: "Need selection", text: "Scored needs on clinical, technical, and commercial feasibility to choose the single highest-impact opportunity." },
        { title: "Concept to prototype", text: "Generating concepts, modeling in CAD, and building rapid prototypes, with surgeon feedback turned into design requirements at each round." },
        { title: "Protecting the IP", text: "Working toward a patent filing on the selected concept." },
      ],
      contributions: [
        "Conducted OR observations and documented procedural pain points that fed the team’s needs list.",
        "Interviewed surgeons and stakeholders, then translated their feedback into measurable design requirements.",
        "Researched lymphatic and venous anatomy to set dimensional and access constraints for the device.",
        "Generated device concepts and developed CAD models and prototypes, with design for manufacturability in mind.",
      ],
      teamOutcomes: [
        "Validated 349 clinical needs and narrowed them to one through a feasibility analysis.",
        "Advancing the selected concept through rapid prototyping toward a patent filing.",
      ],
      outcome: [
        "Ongoing. The team has selected its need and is iterating on prototypes with surgeon input.",
      ],
      note: "This is an industry-sponsored project with IP in progress, so some design details and images are intentionally withheld.",
      gallery: [
        { src: "images/projects/lvb-device/team-in-scrubs-or-observation.jpg", alt: "The microsurgery biodesign team in scrubs during clinical observations", caption: "Clinical immersion in the OR" },
      ],
    },

    /* ---------------- PROJECT: MSK joint pain, India ---------------- */
    {
      id: "msk-joint-pain-india",
      hidden: false,
      status: "in-progress",
      title: "Improving Joint Pain Care in Rural India",
      category: "Global Health / Needs Finding & Device Design",
      summary:
        "Field research across 15 rural and urban healthcare sites in India to understand why people with musculoskeletal pain go without care, now driving a solution to expand access to rehabilitation.",
      role:
        "Biodesign engineer conducting field research, stakeholder validation, need prioritization, and solution development.",
      org: "Johns Hopkins CBID · Industry-sponsored",
      dates: "Jun 2026 – Present",
      team: "CBID global health biodesign team with an open-source health NGO partner",
      skills: [
        "Contextual inquiry", "Stakeholder interviews", "Needs prioritization",
        "Global health design", "Clinical needs assessment", "Field study planning",
      ],
      cover: {
        src: "images/projects/msk-joint-pain-india/field-team-with-care-providers.jpg",
        alt: "CBID team with local care providers during field research in rural India",
      },
      highlights: [
        { value: "15", label: "rural and urban sites" },
        { value: "367", label: "findings validated" },
      ],
      overview: [
        "Many musculoskeletal (MSK) pain conditions respond well to guided exercise, but in much of rural India, rehabilitation is hard to reach. The team set out to understand the barriers firsthand before proposing anything.",
      ],
      process: [
        { title: "Field research", text: "Observed care and interviewed patients and providers across 15 rural and urban healthcare sites." },
        { title: "Validation", text: "Validated 367 findings with patients, care providers, and an open-source NGO partner." },
        { title: "Prioritization", text: "Ranked needs by clinical impact, technical feasibility, and market potential." },
        { title: "Solution and field test", text: "Developing a solution for exercise-responsive MSK pain, validating it with physiotherapists, and planning a follow-up field study in India." },
      ],
      contributions: [
        "Conducted on-site research and interviews with patients and care providers.",
        "Synthesized observations into validated findings with the NGO partner.",
        "Scored and prioritized needs against clinical, technical, and market criteria.",
        "Developing and testing solution concepts with physiotherapists.",
      ],
      teamOutcomes: [
        "Mapped barriers to MSK care across 15 sites and validated 367 findings.",
        "Selected a focus on expanding rehabilitation access for exercise-responsive MSK pain.",
      ],
      outcome: [
        "Ongoing. A follow-up field study in India will test the solution with patients and physiotherapists.",
      ],
      gallery: [
        { src: "images/projects/msk-joint-pain-india/stakeholder-interview-at-clinic.jpg", alt: "Team taking notes during an interview with care providers at a clinic in India", caption: "Interviewing care providers on site" },
      ],
    },

    /* ---------------- PROJECT: GaitWay ---------------- */
    {
      id: "gaitway",
      hidden: false,
      title: "GaitWay – Parkinson’s Gait Monitoring System",
      category: "Biomedical Engineering / Wearable Technology",
      summary:
        "A modular wearable with wireless IMU sensors on the wrist and ankles, worn as a bracelet and a sensor-integrated sock, that tracks Parkinson’s gait throughout the day for under $100. Finalist in the Rice 360° Global Health Technologies Design Competition.",
      role:
        "Mechanical and sensor integration lead responsible for integrating wearable sensors and developing the physical device architecture.",
      org: "UCLA Bioengineering · Senior capstone",
      dates: "Sep 2025 – Jun 2026",
      team: "Team of five, advised by Dr. Sotiris Masmanidis",
      // Buttons shown under the summary. Paths can point to files in assets/ or to any web link.
      links: [
        { label: "Final report (PDF)", href: "assets/docs/GaitWay_Final_Report.pdf" },
        { label: "Poster (PDF)", href: "assets/docs/GaitWay_Poster.pdf" },
      ],
      skills: [
        "SolidWorks", "Sensor integration", "ESP32", "MPU-9250 IMUs", "PCB design",
        "Arduino / C++", "Python", "Wireless communication", "Rapid prototyping",
        "Soft goods design",
      ],
      cover: {
        src: "images/projects/gaitway/snap-fit-sensor-casing-with-electronics.jpg",
        alt: "3D-printed snap-fit sensor casing holding an ESP32 board, IMU, and Li-Po battery",
      },
      highlights: [
        { value: "3", label: "wireless IMU sensors (wrist and both ankles)" },
        { value: "<$100", label: "prototype cost vs. $520–$4,800 on the market" },
        { value: "Finalist", label: "Rice 360° Global Health Design Competition" },
      ],
      overview: [
        "Parkinson’s gait symptoms fluctuate through the day with medication, fatigue, and stress, so a short clinic visit misses most of them. Existing gait systems are tied to a lab, capture too little data, or cost too much for daily use.",
      ],
      process: [
        { title: "Form factor", text: "Compared watches, bracelets, gloves, socks, and anklets for comfort, stability, and repeatable placement. Chose a wrist strap and a grip sock, with an anklet option." },
        { title: "Housings", text: "Designed 3D-printed PLA casings, choosing a snap-fit box over a hinged one for a more secure fit and steadier sensors." },
        { title: "Electronics", text: "Moved from a wired breadboard prototype to wireless ESP32 + MPU-9250 modules, then a custom PCB that shrank each module to 42 × 22 × 6 mm." },
        { title: "Analysis", text: "Streams data over Bluetooth Low Energy to derive stride length, stride duration, walking speed, asymmetry, and double support time." },
      ],
      contributions: [
        "Led mechanical integration for the full system.",
        "Optimized sensor placement on the wrist and ankle for signal quality and comfort.",
        "Designed and prototyped the 3D-printed snap-fit sensor casings in SolidWorks.",
        "Developed soft-good attachment concepts for anchoring the sensor to the sock.",
        "Integrated the IMUs, ESP32 boards, and batteries into the physical device architecture.",
      ],
      teamOutcomes: [
        "Built a three-sensor wireless system that reliably streams gait data in walking trials.",
        "Designed a custom PCB that reduced each module to 42 × 22 × 6 mm.",
        "Named a finalist in the Rice 360° Undergraduate Global Health Technologies Design Competition.",
      ],
      outcome: [
        "Worn comfortably on the wrist and ankle with no reports of irritation, small enough to hide under sleeves and pants, and able to detect simulated tremor episodes. Finalist at Rice 360°.",
      ],
      gallery: [
        { src: "images/projects/gaitway/gaitway-poster.jpg", alt: "GaitWay research poster", caption: "GaitWay poster", fit: "contain" },
        { src: "images/projects/gaitway/sock-anchor-attachment-sketches.jpg", alt: "Sketches of three ways to attach the sensor anchor to a sock using stitched fabric", caption: "Sock attachment concepts", fit: "contain" },
      ],
    },

    /* ---------------- PROJECT: Bionic hand ---------------- */
    {
      id: "bionic-hand",
      hidden: false,
      title: "Tendon-Driven Bionic Hand",
      category: "Bionics / Mechanical Design & Prototyping",
      summary:
        "A servo-actuated, tendon-driven hand designed, built, and programmed in a team of four. It won both the block-stacking and the grape-picking challenges.",
      role:
        "Mechanical designer responsible for the hand’s CAD structure, tendon routing, and finger tensioning.",
      org: "UCLA · Bionics course",
      dates: "", // e.g. "Winter 2025"
      team: "Team of four",
      skills: [
        "Fusion 360", "Mechanism design", "Tendon actuation", "Servo integration",
        "3D printing", "Troubleshooting",
      ],
      cover: {
        src: "images/projects/bionic-hand/bionic-hand-team-with-prototype.jpg",
        alt: "Team of four holding the finished bionic hand in the lab",
        position: "center 35%",
      },
      highlights: [
        { value: "2 / 2", label: "competition challenges won" },
      ],
      overview: [
        "The assignment was to design, build, and program a functional bionic hand that could perform real manipulation tasks, judged in a block-stacking competition and a grape-picking and transfer challenge.",
      ],
      process: [
        { title: "Structure", text: "Modeled fingers, palm, and wrist in Fusion 360, with slots and housings for the servo motors and channels for the tendon lines." },
        { title: "Tendon routing", text: "Threaded fishing line from each finger joint to its servo, keeping alignment for repeatable actuation." },
        { title: "Tensioning", text: "Designed and refined a tensioning feature for each finger." },
        { title: "Competition", text: "Diagnosed a wiring fault that disabled three fingers right before the competition, and repaired it in time." },
      ],
      contributions: [
        "Modeled the full mechanical structure in Fusion 360, including servo housings and tendon channels.",
        "Built the tendon routing system from each finger joint to its servo.",
        "Helped design and refine the per-finger tensioning mechanism.",
      ],
      teamOutcomes: [
        "Programmed and assembled a working hand.",
        "Found and fixed a wiring fault in three fingers just before competing.",
        "Won both the block-stacking competition and the grape-picking and transfer challenge.",
      ],
      outcome: [
        "First place in both competition challenges.",
      ],
      gallery: [
        // A video entry: "video" is the .mp4 file, "src" is the still image shown before it plays.
        { video: "images/projects/bionic-hand/grape-picking-challenge.mp4", src: "images/projects/bionic-hand/grape-picking-challenge-poster.jpg", alt: "Video of the bionic hand picking up grapes during the transfer challenge", caption: "Grape-picking and transfer challenge" },
        { src: "images/projects/bionic-hand/servo-rack-and-tendon-driven-fingers.jpg", alt: "Servo rack with five servos routing tendons to the 3D-printed palm and fingers", caption: "Servo rack and tendon-driven fingers", position: "center 62%" },
      ],
    },

    /* ---------------- PROJECT: Breath-controlled COPD rehab game ---------------- */
    {
      id: "breath-controlled-copd-game",
      hidden: false,
      title: "Breath-Controlled Rehab Game for COPD",
      category: "Embedded Systems / Rehabilitation Technology",
      summary:
        "A handheld game you play with your breath. Blowing through a tube steers the player on a small OLED screen, turning breathing exercises for people with COPD into something closer to play.",
      role:
        "Sole designer and builder: circuit, firmware, and game.",
      org: "UCLA · Microcontrollers course final project",
      dates: "Jan – Mar 2026",
      team: "Individual project",
      skills: [
        "Raspberry Pi", "C++", "Embedded programming", "Circuit design",
        "I2C", "OLED display", "Pressure sensing", "Rehabilitation design",
      ],
      cover: {
        src: "images/projects/breath-controlled-copd-game/oled-game-over-screen.jpg",
        alt: "Small OLED screen held between two fingers showing the game's score and GAME OVER screen",
      },
      highlights: [],
      overview: [
        "Breathing exercises are a core part of pulmonary rehab for COPD, but they are repetitive and easy to skip. The goal was to make them engaging by turning each breath into a game input.",
      ],
      process: [],
      contributions: [
        "Designed and wired the full circuit on a breadboard: a breath sensor connected to a tube, a Raspberry Pi, and an OLED display over I2C.",
        "Wrote the C++ code that reads the breath signal and converts it into real-time control of the game.",
        "Built the game itself, including the scrolling obstacles, live score, and game-over screen.",
        "Framed the design around pulmonary rehabilitation, so that controlled breathing is what keeps the player alive.",
      ],
      teamOutcomes: [],
      outcome: [
        "A working, playable prototype controlled entirely by the user's breath.",
      ],
      gallery: [
        { video: "images/projects/breath-controlled-copd-game/breath-game-demo.mp4", src: "images/projects/breath-controlled-copd-game/breath-game-demo-poster.jpg", alt: "Video of the game being played by blowing into a tube while holding the OLED screen", caption: "Playing the game with breath control" },
      ],
    },

    /* ---------------- PROJECT: Pulse oximeter ---------------- */
    {
      id: "pulse-oximeter",
      hidden: false,
      title: "Pediatric Pulse Oximeter",
      category: "Medical Device Design / Electronics",
      summary:
        "A functional pulse oximeter with a narwhal-inspired housing designed to make the device friendlier for children. Selected for the annual BMES Symposium.",
      role:
        "Housing designer and concept originator; collaborated on the sensing circuit.",
      org: "Biomedical Engineering Society at UCLA · Build Team",
      dates: "2024 – 2025",
      team: "Team of four",
      skills: [
        "Fusion 360", "3D printing", "Analog circuits", "PCB design (EAGLE)",
        "Arduino", "Pediatric design",
      ],
      cover: {
        src: "images/projects/pulse-oximeter/bmes-symposium-poster.jpg",
        alt: "BMES Symposium poster for the pulse oximeter project",
      },
      highlights: [
        { value: "Selected", label: "for the BMES Symposium" },
      ],
      overview: [
        "The goal was to design and build a working pulse oximeter. We chose to design for pediatric patients, where a device that looks approachable can make measurement easier.",
      ],
      process: [
        { title: "Sensing circuit", text: "Red and infrared LEDs with a photodiode, MCP6041 op-amp transimpedance and non-inverting stages, and a low-pass filter, prototyped on a breadboard with an Arduino." },
        { title: "PCB", text: "Condensed the breadboard circuit into an EAGLE schematic and PCB to shrink the electronics." },
        { title: "Housing", text: "Designed the narwhal-shaped measurement component in Fusion 360, with mounts for the photodiode, LEDs, and battery, printed as one piece with an integrated hinge." },
        { title: "Signal processing", text: "Visualized the pulse signal and calculated heart rate and oxygenation from the captured data." },
      ],
      contributions: [
        "Originated the narwhal-themed enclosure concept.",
        "Designed the device housing in Fusion 360, including internal mounts for the photodiode, LEDs, and battery compartment.",
        "Collaborated on the breadboard sensing circuit.",
      ],
      teamOutcomes: [
        "Built a complete device that measures heart rate and blood oxygenation.",
        "Designed a separate shell-inspired case for the PCB and Arduino Nano to keep the finger piece compact.",
        "Selected from all Build Team projects for the annual BMES Symposium.",
      ],
      outcome: [
        "Showcased at the annual BMES Symposium.",
      ],
      gallery: [],
    },
  ],

  /* ------------------------------------------------------------------------
     4. SKILLS (shown with icons)
     Each skill is { name: "...", icon: "..." }. The icon is a file name
     (without .svg) from images/icons/. Use icon: "generic" if there is no
     matching icon, or add your own SVG/PNG to images/icons/ (see README).
     ------------------------------------------------------------------------ */
  skills: [
    {
      category: "CAD & Design",
      items: [
        { name: "SolidWorks", icon: "solidworks" },
        { name: "Creo Parametric", icon: "creo" },
        { name: "Fusion 360", icon: "fusion-360" },
        { name: "AutoCAD", icon: "autocad" },
        { name: "Technical drawings", icon: "technical-drawing" },
        { name: "Design for manufacturing", icon: "dfm" },
      ],
    },
    {
      category: "Prototyping & Manufacturing",
      items: [
        { name: "CNC machining", icon: "cnc" },
        { name: "3D printing", icon: "3d-printing" },
        { name: "Molding", icon: "molding" },
        { name: "Rapid prototyping", icon: "rapid-prototyping" },
        { name: "Fixture design", icon: "fixture-design" },
        { name: "Mechanical assembly", icon: "mechanical-assembly" },
      ],
    },
    {
      category: "Hardware & Programming",
      items: [
        { name: "MATLAB", icon: "matlab" },
        { name: "Python", icon: "python" },
        { name: "Arduino", icon: "arduino" },
        { name: "C++", icon: "cplusplus" },
        { name: "ESP32", icon: "esp32" },
        { name: "Raspberry Pi", icon: "raspberry-pi" },
        { name: "PCB design", icon: "pcb-design" },
        { name: "IMU integration", icon: "imu" },
      ],
    },
    {
      category: "Testing & Validation",
      items: [
        { name: "Design of experiments", icon: "design-of-experiments" },
        { name: "IQ/OQ protocols", icon: "iq-oq" },
        { name: "Engineering evaluations", icon: "engineering-evaluation" },
        { name: "Test protocols", icon: "test-protocols" },
        { name: "Work instructions", icon: "work-instructions" },
        { name: "IRB & FDA submissions", icon: "irb-fda" },
      ],
    },
    {
      category: "Biomedical Engineering",
      items: [
        { name: "Medical device development", icon: "medical-device" },
        { name: "Clinical needs assessment", icon: "clinical-needs" },
        { name: "Surgical device design", icon: "surgical-device" },
        { name: "Anatomical research", icon: "anatomical-research" },
        { name: "Sensor integration", icon: "sensor-integration" },
        { name: "Wearable technology", icon: "wearable-technology" },
      ],
    },
  ],
};
