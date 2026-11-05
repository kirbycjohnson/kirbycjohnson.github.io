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
     2. ABOUT / INTRODUCTION
     ------------------------------------------------------------------------ */
  about: {
    headline: "I turn what I see in the operating room into devices I can build, test, and hand back to clinicians.",
    intro: [
      "I’m a biomedical engineer completing my M.S.E. at the Johns Hopkins Center for Bioengineering Innovation & Design, where I work with surgeons to find unmet clinical needs and develop devices to address them.",
      "My work sits between the clinic and the machine shop: CAD and fixture design, CNC machining and rapid prototyping, wearable sensor systems, and three years coordinating structural heart device studies at UCLA Health.",
    ],
    // Replace with your own photo, e.g. "images/profile/kirby-johnson-headshot.jpg"
    photo: "images/profile/headshot-placeholder.svg",
    photoAlt: "Portrait of Kirby Johnson",

    // Short facts shown beside the introduction. Add, remove, or edit freely.
    facts: [
      { label: "Education", value: "M.S.E. Biomedical Engineering, Johns Hopkins CBID", detail: "Expected May 2027" },
      { label: "", value: "B.S. Bioengineering, UCLA", detail: "June 2026" },
      { label: "Focus", value: "Medical device R&D, mechanical design, prototyping" },
    ],

    // Experience timeline under the introduction.
    experience: [
      {
        role: "Biodesign Engineer",
        org: "Johns Hopkins Center for Bioengineering Innovation & Design",
        dates: "Jun 2026 – Present",
        note: "Two industry-sponsored projects: a microsurgery device and joint pain care in rural India.",
      },
      {
        role: "Engineering Intern, Surgical Simulation",
        org: "Applied Medical",
        dates: "Jun – Sep 2025",
        note: "Production fixture design, molding process improvement, ultrasonic welding DoE, IQ/OQ validation.",
      },
      {
        role: "Clinical Research Coordinator",
        org: "UCLA Health, Adult Congenital Heart Disease",
        dates: "Oct 2023 – Present",
        note: "7 concurrent structural heart device studies; IRB and FDA approvals for 20 compassionate use stent procedures.",
      },
    ],

    publication: {
      title: "Long-Term Durability of Melody Valves Implanted in Small (<30 kg) Patients",
      venue: "Journal of the American College of Cardiology, May 2025",
      url: "", // optional link to the paper
    },
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
        src: "images/projects/lvb-device/cover-device-concept-rendering.svg",
        alt: "CAD rendering of the LVB device concept",
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
        { src: "images/projects/lvb-device/cad-assembly-exploded-view.svg", alt: "Exploded CAD assembly of the device", caption: "CAD assembly" },
        { src: "images/projects/lvb-device/anatomy-lymphatic-venous-illustration.svg", alt: "Illustration of lymphatic vessel and venule anatomy", caption: "Anatomical constraints" },
        { src: "images/projects/lvb-device/prototype-iterations-bench.svg", alt: "Rapid prototype iterations on the bench", caption: "Prototype iterations" },
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
        src: "images/projects/msk-joint-pain-india/cover-field-research-site.svg",
        alt: "Field research at a healthcare site in India",
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
        { src: "images/projects/msk-joint-pain-india/needs-prioritization-matrix.svg", alt: "Needs prioritization matrix", caption: "Needs prioritization" },
        { src: "images/projects/msk-joint-pain-india/solution-concept-sketch.svg", alt: "Early solution concept sketch", caption: "Solution concept" },
      ],
    },

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
        src: "images/projects/applied-medical-surgical-simulation/camera-alignment-fixture-in-use.jpg",
        alt: "Surgical training system with the camera alignment fixture, next to a laptop showing the camera view",
        position: "center 40%",
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
        { src: "images/projects/applied-medical-surgical-simulation/fixture-cnc-machined-components.jpg", alt: "Kirby standing next to the CNC-machined camera fixture on a lab bench", caption: "The finished fixture, CNC machined in-house" },
        { src: "images/projects/applied-medical-surgical-simulation/internship-final-presentation.jpg", alt: "Kirby presenting a poster summarizing internship projects", caption: "End-of-internship presentation" },
        { src: "images/projects/applied-medical-surgical-simulation/fixture-cad-assembly.svg", alt: "SolidWorks assembly of the camera fixture", caption: "Fixture CAD assembly" },
      ],
    },

    /* ---------------- PROJECT: GaitWay ---------------- */
    {
      id: "gaitway",
      hidden: false,
      title: "GaitWay – Parkinson’s Gait Monitoring System",
      category: "Biomedical Engineering / Wearable Technology",
      summary:
        "A wearable that combines multiple IMUs with ML-enabled feedback to characterize Parkinson’s gait abnormalities. Finalist in the Rice 360° Global Health Technologies Design Competition.",
      role:
        "Mechanical and sensor integration lead responsible for integrating wearable sensors and developing the physical device architecture.",
      org: "UCLA Bioengineering · Senior capstone",
      dates: "Sep 2025 – Jun 2026",
      team: "UCLA senior capstone team",
      skills: [
        "SolidWorks", "Sensor integration", "ESP32", "MPU-9250 IMUs", "PCB design",
        "Arduino / C++", "Python", "Wireless communication", "Rapid prototyping",
      ],
      cover: {
        src: "images/projects/gaitway/cover-wearable-prototype-on-body.svg",
        alt: "GaitWay wearable prototype worn on the body",
      },
      highlights: [
        { value: "Finalist", label: "Rice 360° Global Health Design Competition" },
      ],
      overview: [
        "Gait changes such as shuffling, reduced stride length, and freezing are central to Parkinson’s disease, but they are usually assessed briefly and by eye during clinic visits. GaitWay measures gait with body-worn sensors to give a more objective picture.",
      ],
      process: [
        { title: "Sensor placement", text: "Evaluated where on the body IMUs capture the most useful gait signal, and optimized placement for both data quality and comfort." },
        { title: "Electronics", text: "Integrated MPU-9250 IMUs with ESP32 microcontrollers and custom PCBs for wireless data capture." },
        { title: "Housings", text: "Prototyped 3D-printed and soft-good housings that hold sensors in a repeatable position on the body." },
        { title: "Analysis and feedback", text: "Combined data from multiple IMUs with ML-enabled feedback to characterize gait abnormalities." },
      ],
      contributions: [
        "Led mechanical integration for the full system.",
        "Optimized sensor placement on the body.",
        "Designed and prototyped 3D-printed and soft-good sensor housings in SolidWorks.",
        "Integrated the IMUs into the physical device architecture.",
      ],
      teamOutcomes: [
        "Built a working multi-IMU wearable with wireless data capture and ML-enabled gait feedback.",
        "Named a finalist in the Rice 360° Undergraduate Global Health Technologies Design Competition.",
      ],
      outcome: [
        "A functional prototype and a finalist placement at Rice 360°.",
      ],
      gallery: [
        { src: "images/projects/gaitway/sensor-housing-cad.svg", alt: "SolidWorks model of an IMU sensor housing", caption: "Sensor housing CAD" },
        { src: "images/projects/gaitway/system-architecture-diagram.svg", alt: "System diagram showing IMUs, ESP32, wireless link, and analysis", caption: "System architecture" },
        { src: "images/projects/gaitway/pcb-and-electronics.svg", alt: "PCB and assembled electronics", caption: "PCB and electronics" },
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
        { src: "images/projects/bionic-hand/bionic-hand-block-stacking.jpg", alt: "The bionic hand gripping a wooden block during the stacking challenge", caption: "Block-stacking challenge" },
        { src: "images/projects/bionic-hand/finger-cad-tendon-channels.svg", alt: "Fusion 360 model of a finger with tendon channels", caption: "Finger CAD with tendon channels" },
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
        position: "center top",
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
      gallery: [
        { src: "images/projects/pulse-oximeter/narwhal-housing-cad.jpg", alt: "Fusion 360 model of the narwhal-shaped finger housing", caption: "Narwhal housing in Fusion 360" },
        { src: "images/projects/pulse-oximeter/printed-housings.jpg", alt: "3D-printed shell-shaped electronics case and blue narwhal measurement piece", caption: "Printed electronics case and measurement piece" },
      ],
    },
  ],

  /* ------------------------------------------------------------------------
     4. SKILLS
     Add a skill by adding a line in quotes. Add a category by copying a block.
     ------------------------------------------------------------------------ */
  skills: [
    {
      category: "CAD & Mechanical Design",
      items: ["Creo Parametric", "SolidWorks", "Fusion 360", "AutoCAD", "Technical drawings", "Design for manufacturability"],
    },
    {
      category: "Prototyping & Manufacturing",
      items: ["CNC machining", "Rapid prototyping", "3D printing", "Injection molding", "Fixture design", "Mechanical assembly", "Design of experiments"],
    },
    {
      category: "Biomedical Engineering",
      items: ["Medical device development", "Clinical needs assessment", "Anatomical research", "Surgical device design", "Sensor integration", "Wearable technology"],
    },
    {
      category: "Programming & Electronics",
      items: ["MATLAB", "Python", "Arduino / C++", "ESP32", "PCB design", "IMU sensors"],
    },
    {
      category: "Testing & Regulatory",
      items: ["IQ/OQ validation", "Test protocols", "Engineering evaluations", "Work instructions", "IRB and FDA submissions"],
    },
  ],
};
