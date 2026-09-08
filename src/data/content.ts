// Real content sourced from wit.lums.edu.pk (fetched 2026-08-19).
// Verify against the live site before major edits — some pages (research
// themes, research stories) only expose titles, not body copy, so summaries
// here are written from verified facts, not invented detail.

export type ResearchDomain = {
  id: string
  label: string
  /** One-line summary shown on the collapsed card. */
  summary: string
  /** 2-3 short paragraphs shown when expanded. */
  overview: string[]
  /** Concrete capabilities/activities under this theme. */
  whatWeDo: string[]
  /** Named collaborators — only real, publicly stated partners. */
  collaboration?: string[]
  /** Capacity-building activities (courses, dialogue platforms) if any. */
  capacityBuilding?: string[]
  /** Cross-referenced ids from `projects` below. */
  projectIds: string[]
  /** True only where we have real depth beyond the one-liner (currently just ICPA). */
  full: boolean
}

// Curated from the 15 real research themes on /research-themes — grouped so
// the front page shows a representative set, not all 15. Full list: Smart
// Water Metering; Data-driven Hydrological Modelling; Sustainable
// Agricultural Practices; Bayesian Inversion, Compressive Sensing & Data
// Assimilation in Hydrosystems; Demand-based Agricultural Water Management;
// Game-theoretic Frameworks for Water Allocation and Pricing; Water Quality
// and Wastewater Management; Advanced Econometrics for Sustainable
// Agriculture; ICT and Flood Forecasting and Management; Reservoir
// Operations; Integrated Assessment Tools for Water-Energy-Food Nexus;
// Telematics and IoT for Water Informatics; Sustainability in
// Socio-Ecological Systems; Remote Sensing and GIS for Hydrological
// Applications; Integrated Climate Policy Analysis.
//
// Only "Integrated Climate Policy Analysis" has `full: true` — its content
// is transcribed from wit.lums.edu.pk/icpa (the one theme page with real
// depth we have so far). The rest carry an honest one-line summary plus
// what-we-do bullets grounded in real project titles/funders, until their
// own detail pages get written the same way.
export const researchDomains: ResearchDomain[] = [
  {
    id: 'cryosphere',
    label: 'Cryosphere & Glacial Hydrology',
    summary:
      'Snow and glacier monitoring across the north, and glacial lake outburst flood (GLOF) early-warning systems for downstream communities.',
    overview: [
      'WIT instruments snow and glacier systems in the north as the physical basis for downstream flood and water-supply risk, treating the cryosphere as the upstream end of a basin-wide system, not an isolated field site.',
    ],
    whatWeDo: [
      'Off-grid, solar-powered early-warning networks for glacial lake outburst floods (GLOF)',
      'Snow depth and ablation monitoring on debris-covered glaciers',
      'Resilient mesh communication (AREDN/IoT) for sites with no conventional connectivity',
    ],
    collaboration: ['Amateur Radio Digital Communications (ARDC)', 'APNIC Foundation'],
    projectIds: ['p1', 'p15'],
    full: false,
  },
  {
    id: 'flood-ict',
    label: 'ICT & Flood Forecasting',
    summary:
      'Telemetry, remote sensing, and hydrological modelling built into forecasting and management tools for flood-prone basins.',
    overview: [
      'Flood risk in Pakistan is a systems problem spanning canal operations, remote sensing, and basin hydrology. WIT builds the telemetry and models that connect those layers into usable forecasting and management tools.',
    ],
    whatWeDo: [
      'Canal-level water monitoring for irrigation departments',
      'Remote-sensing-based decision support for irrigation management',
      'Autonomous mobile sensing for hyper-resolution hydrology in ungauged watersheds',
    ],
    collaboration: ['Punjab Irrigation Department', 'Asian Development Bank'],
    projectIds: ['p5', 'p16', 'p19', 'p14'],
    full: false,
  },
  {
    id: 'systems-modelling',
    label: 'Systems Modelling',
    summary:
      'One integrated modelling platform where the nexus, energy, agriculture, and water sectors meet, the analytical engine behind WIT’s Integrated Climate Policy Analysis (ICPA) work.',
    overview: [
      'WIT works at the intersection of data, science, and policy to build tools that help shape a sustainable, climate-resilient future for Pakistan, an integrated modelling platform connecting energy, agriculture, water, land, and climate systems for medium- and long-term, evidence-based planning. This is the WIT work published as Integrated Climate Policy Analysis (ICPA).',
      'It runs on open-source frameworks: energy-system models (MESSAGEix), agriculture and land-use models (FABLE), and hydrological and water-resource models, linked together. That lets the team trace how a technology choice, a growth target, or a policy shift in one sector plays out in the others, and find pathways that actually meet Pakistan’s climate goals.',
    ],
    whatWeDo: [
      'Nexus: Nationally Determined Contributions (NDC) analysis, fair-share emission assessments, and adaptation pathways spanning water, energy, and land together',
      'Energy sector: MESSAGEix energy-system modelling, technology uptake analysis (solar expansion, electrification, hydrogen), decarbonization pathways',
      'Agriculture sector: food and resource security projections under climate change, agriculture supply/demand modelling',
      'Water sector: water supply/demand projections and adaptation pathways integrated with the energy and land models above',
    ],
    collaboration: [
      'International Institute for Applied Systems Analysis (IIASA, Austria)',
      'PBL Netherlands Environmental Assessment Agency',
      'Potsdam Institute for Climate Impact Research (PIK, Germany)',
      'Euro-Mediterranean Center on Climate Change (CMCC, Italy)',
      'Global Change Impact Studies Centre (GCISC)',
      'Punjab Irrigation Department',
    ],
    capacityBuilding: [
      'Course: Climate Change Governance: Science, Data and Models',
      'Nexus Summit: a dialogue platform on integrated energy, water, and food management, convening government, academia, and international organizations',
    ],
    projectIds: ['p11', 'p2'],
    full: true,
  },
  {
    id: 'agriculture',
    label: 'Sustainable Agricultural Water Use',
    summary:
      'Demand-based irrigation management and low-cost sensing aimed at Pakistan’s agricultural sector, which consumes roughly 93% of the country’s water.',
    overview: [
      'Agriculture is the largest single lever on Pakistan’s water system. WIT builds low-cost sensing and decision tools sized for smallholder economics, aimed at closing the gap between water used and water actually needed.',
    ],
    whatWeDo: [
      'Alternate wetting-and-drying irrigation control for paddy fields',
      'Low-cost drone and AI-camera crop monitoring',
      'Digital plant phenotyping and smart farm management',
      'Tunnel-farm environmental management systems',
    ],
    collaboration: ["Germany's Federal Ministry of Agriculture, Food and Regional Identity (BMLEH)", 'Higher Education Commission (HEC)'],
    projectIds: ['p3', 'p8', 'p10', 'p13'],
    full: false,
  },
  {
    id: 'iot-telematics',
    label: 'Telematics & IoT for Water Systems',
    summary:
      'Field-deployable sensor networks and communication infrastructure for environmental monitoring in remote, often ungauged, regions.',
    overview: [
      'The instrumentation layer underneath every other theme here. WIT designs the sensor networks and telemetry that make systems-level analysis possible in places with no existing monitoring infrastructure.',
    ],
    whatWeDo: [
      'Low-cost floating sensor networks for lakes and large water bodies',
      'Context-aware IoT for long-term environmental monitoring',
      'Autonomous mobile sensing platforms',
    ],
    collaboration: ['Khalid and Mussarrat Aziz Research Grants for Planet Earth, LUMS'],
    projectIds: ['p6', 'p9', 'p19'],
    full: false,
  },
  {
    id: 'water-quality',
    label: 'Water Quality & Socio-Ecological Systems',
    summary:
      'Water quality sensing and the social-institutional dimensions of water conflict, allocation, and governance.',
    overview: [
      'Water systems are as much social and institutional as they are physical. This theme pairs direct water-quality sensing with research on water conflict, allocation, and governance across shared basins and lake systems.',
    ],
    whatWeDo: [
      'Floating water-quality sensor suites for lakes and ponds',
      'Conflict-prevention frameworks for small lake systems',
      'Scoping studies on water justice across river basins',
    ],
    collaboration: ['WWF-Pakistan', 'United States Institute for Peace (USIP)', 'Independent Social Research Foundation (ISRF)'],
    projectIds: ['p18', 'p12', 'p4'],
    full: false,
  },
]

export const researchThemesTotal = 15

export type TechProduct = {
  id: string
  name: string
  description: string
  project: string
  funder: string
  years: string
}

// Real products from /innovations-products-wit, each paired with the real
// project (from /projects) that deployed it — no fabricated locations or
// partner names beyond what's on the public project record.
export const techProducts: TechProduct[] = [
  {
    id: 'aws',
    name: 'IoT Automatic Weather Station',
    description: 'Collects environmental and meteorological data from field sites.',
    project: 'Context-Aware IoT for Long-Term Environmental Monitoring in Remote Regions of Pakistan',
    funder: 'LUMS Faculty Initiative Fund',
    years: '2025-26',
  },
  {
    id: 'watersense',
    name: 'WaterSense Soil Moisture Sensor',
    description: 'Measures soil water content to improve irrigation efficiency on farms.',
    project: 'Digital Soil Moisture Meters and Weather Stations Installation',
    funder: 'ALMOIZ Industries Limited',
    years: '2021',
  },
  {
    id: 'canal-gauge',
    name: 'Digital Canal Gauge',
    description: 'Monitors water levels in irrigation canals for data-driven resource management.',
    project: 'Monitoring Distributary Canal Operations in Water Deficit Environments',
    funder: 'Punjab Irrigation Department',
    years: '2025-26',
  },
  {
    id: 'forest-app',
    name: 'Forest Health Monitoring App',
    description: 'Tracks forest health conditions from field observations.',
    project: 'Deployment of Forest Health Calculator',
    funder: 'WWF-Pakistan',
    years: '2020-21',
  },
  {
    id: 'awd-tube',
    name: 'Smart AWD Tube for Paddy Fields',
    description: 'Optimises alternate wetting-and-drying irrigation in rice paddy cultivation.',
    project: 'Water-Energy-Food Nexus: Active Demand Management of Surface Water',
    funder: 'LUMS Faculty Initiative Fund',
    years: '2019-20',
  },
  {
    id: 'ai-camera',
    name: 'All Purpose AI Camera',
    description: 'Multi-purpose imaging for real-time crop and field monitoring.',
    project: 'Farm Watch: An Intelligent Low-Cost Drone Solution for Realtime Crop Monitoring',
    funder: 'LUMS Faculty Initiative Fund',
    years: '2025',
  },
  {
    id: 'water-quality',
    name: 'Floating Water Quality Sensor',
    description: 'A buoyed sensor suite measuring water quality parameters in lakes and ponds.',
    project: 'Installation of Water Quality Sensors Suite',
    funder: 'WWF-Pakistan',
    years: '2021',
  },
]

export type ImpactStory = {
  id: string
  title: string
  domain: string
  summary: string
  meta: string
}

// Real story titles from /research-stories-wit, filled in with verified
// facts from the matching /projects entries (the stories page itself has
// no body copy on the live site).
export const impactStories: ImpactStory[] = [
  {
    id: 'intelliwarn',
    title: 'IntelliWarn Grid: an early-warning mesh for glacial flood risk',
    domain: 'Cryosphere',
    summary:
      'A resilient AREDN and IoT mesh network built for GLOF (glacial lake outburst flood) disaster resilience in Chitral, designed to keep working when conventional connectivity fails.',
    meta: 'ARDC · 2026-27',
  },
  {
    id: 'snow-packed-north',
    title: 'Snow-Packed North',
    domain: 'Cryosphere',
    summary:
      'Investigating the snowpack that feeds an entire country, the observational groundwork behind Pakistan’s glacier and snowmelt hydrology research.',
    meta: 'Research story',
  },
  {
    id: 'smarter-farming',
    title: 'Smarter Farming, Lower Cost',
    domain: 'Sustainable Agriculture',
    summary:
      'Reimagining precision agriculture for Pakistan: low-cost sensing and decision support built for smallholder economics, not export-farm budgets.',
    meta: 'Research story',
  },
  {
    id: 'forest-fire-ews',
    title: 'An early-warning system for forest fires',
    domain: 'Forest Fire',
    summary:
      'IoT and AI combined for early detection and response to forest fires: lessons from building a forest fire detection early-warning system in the field.',
    meta: 'Research story',
  },
]

export type Project = {
  id: string
  name: string
  pi: string
  funder: string
  years: string
  status: 'Ongoing' | 'Completed'
}

// Full real list from /projects (fetched 2026-08-19) — shown in full
// in the filterable table below; this is the "size and scope" reference
// for institutional-capability readers.
export const projects: Project[] = [
  {
    id: 'p1',
    name: 'IntelliWarn Grid: Resilient AREDN & IoT Mesh for GLOF Disaster Resilience in Chitral',
    pi: 'Dr. Abubakr Muhammad',
    funder: 'Amateur Radio Digital Communications (ARDC)',
    years: '2026-27',
    status: 'Ongoing',
  },
  {
    id: 'p2',
    name: 'RECONNECT',
    pi: 'Dr. Talha Manzoor',
    funder: 'Directorate-General for Climate Action (DG CLIMA)',
    years: '2026-27',
    status: 'Ongoing',
  },
  {
    id: 'p3',
    name: 'Innovations for Resilient Smallholder Production Systems in Punjab, Pakistan',
    pi: 'Dr. Abubakr Muhammad',
    funder: "Germany's Federal Ministry of Agriculture, Food and Regional Identity (BMLEH)",
    years: '2025-28',
    status: 'Ongoing',
  },
  {
    id: 'p4',
    name: 'Water Justice in Muslim Societies: A Scoping Study of Three River Basins',
    pi: 'Dr. Adeel Malik',
    funder: 'Independent Social Research Foundation (ISRF)',
    years: '2025-26',
    status: 'Ongoing',
  },
  {
    id: 'p5',
    name: 'Monitoring Distributary Canal Operations in Water Deficit Environments',
    pi: 'Dr. Hassan Jaleel',
    funder: 'Punjab Irrigation Department',
    years: '2025-26',
    status: 'Ongoing',
  },
  {
    id: 'p6',
    name: 'Low-Cost Floating Sensor Network for Monitoring Large Aquatic Environments',
    pi: 'Dr. Talha Manzoor',
    funder: 'Khalid and Mussarrat Aziz Research Grants for Planet Earth, LUMS',
    years: '2025-27',
    status: 'Ongoing',
  },
  {
    id: 'p7',
    name: 'Experiential Learning to Understand Water Conflict in the Namal Valley',
    pi: 'Dr. Talha Manzoor',
    funder: 'Cornell University',
    years: '2025',
    status: 'Ongoing',
  },
  {
    id: 'p8',
    name: 'Farm Watch: An Intelligent Low-Cost Drone Solution for Realtime Crop Monitoring',
    pi: 'Dr. Hassan Jaleel',
    funder: 'LUMS Faculty Initiative Fund',
    years: '2025',
    status: 'Ongoing',
  },
  {
    id: 'p9',
    name: 'Context-Aware IoT for Long-Term Environmental Monitoring in Remote Regions of Pakistan',
    pi: 'Dr. Talha Manzoor',
    funder: 'LUMS Faculty Initiative Fund',
    years: '2025-26',
    status: 'Ongoing',
  },
  {
    id: 'p10',
    name: 'A Robotic Solution for Digital Plant Phenotyping and Smart Farm Management',
    pi: 'Dr. Hassan Jaleel',
    funder: 'Higher Education Commission (HEC)',
    years: '2023-26',
    status: 'Ongoing',
  },
  {
    id: 'p11',
    name: 'COMMITTED: Climate Policy Assessment and Mitigation Modeling',
    pi: 'Dr. Abubakr Muhammad',
    funder: "European Commission's Directorate on Climate (DG CLIMA)",
    years: '2023-26',
    status: 'Ongoing',
  },
  {
    id: 'p12',
    name: 'Preventing Water-related Conflicts in Small Lake Systems',
    pi: 'Dr. Talha Manzoor',
    funder: 'United States Institute for Peace (USIP)',
    years: '2024-25',
    status: 'Completed',
  },
  {
    id: 'p13',
    name: 'An Intelligent Tunnel Farm Management System',
    pi: 'Dr. Hassan Jaleel',
    funder: 'LUMS Faculty Initiative Fund',
    years: '2023-24',
    status: 'Completed',
  },
  {
    id: 'p14',
    name: 'Securing Data-Driven Resilience for Ungauged Namal Valley Watershed',
    pi: 'Dr. Talha Manzoor',
    funder: 'German Academic Exchange Program (DAAD)',
    years: '2022-24',
    status: 'Completed',
  },
  {
    id: 'p15',
    name: 'Off-grid Early Warning System for GLOF Risk Reduction, Gilgit-Baltistan',
    pi: 'Dr. Abubakr Muhammad',
    funder: 'APNIC Foundation',
    years: '2023-24',
    status: 'Completed',
  },
  {
    id: 'p16',
    name: 'Improving Canal Irrigation Management Through Remote Sensing',
    pi: 'Dr. Abubakr Muhammad',
    funder: 'Asian Development Bank',
    years: '2021-23',
    status: 'Completed',
  },
  {
    id: 'p17',
    name: 'Development of Agricultural Robotics Lab',
    pi: 'Dr. Abubakr Muhammad',
    funder: 'Higher Education Commission (HEC)',
    years: '2019-22',
    status: 'Completed',
  },
  {
    id: 'p18',
    name: 'Installation of Water Quality Sensors Suite',
    pi: 'Dr. Abubakr Muhammad',
    funder: 'WWF-Pakistan',
    years: '2021',
    status: 'Completed',
  },
  {
    id: 'p19',
    name: 'Autonomous Mobile Sensors for Hyper Resolution Hydrology',
    pi: 'Dr. Abubakr Muhammad',
    funder: 'DAAD · University of Kaiserslautern',
    years: '2021-22',
    status: 'Completed',
  },
  {
    id: 'p20',
    name: 'Deployment of Forest Health Calculator',
    pi: 'Dr. Mian Muhammad Awais · Dr. Abubakr Muhammad',
    funder: 'WWF-Pakistan',
    years: '2020-21',
    status: 'Completed',
  },
  {
    id: 'p21',
    name: 'Provincial Agriculture Disaster Risk Management Operational Plan (Punjab & Sindh)',
    pi: 'Dr. Abubakr Muhammad',
    funder: 'Food and Agriculture Organization of the UN (FAO)',
    years: '2018',
    status: 'Completed',
  },
]

export type Training = {
  id: string
  title: string
  format: string
  date: string
}

// Real workshops from /teaching-and-training.
export const trainings: Training[] = [
  {
    id: 't1',
    title: 'Field Methods for Environmental Research',
    format: 'Seminar',
    date: 'June 2025',
  },
  {
    id: 't2',
    title: 'Nexus Summit: Harmonizing Energy, Water and Agriculture Systems for a Low Emissions Future',
    format: 'Summit',
    date: 'March 2024',
  },
  {
    id: 't3',
    title: 'Digital Sustainable Agriculture',
    format: 'Workshop',
    date: 'July 2023',
  },
  {
    id: 't4',
    title: 'Building Resilience for Data-scarce Water Systems in Pakistan',
    format: 'Workshop',
    date: 'July 2023',
  },
  {
    id: 't5',
    title: 'Integrating Social Science into Irrigation Systems Research',
    format: 'Workshop',
    date: 'June 2023',
  },
  {
    id: 't6',
    title: 'Glacier Modelling: Practical Applications with the Open Global Glacier Model',
    format: 'Practical training',
    date: 'March 2023',
  },
  {
    id: 't7',
    title: 'Integrated Assessment Modelling for Multi-Sectoral Policy Insights',
    format: 'Workshop',
    date: 'September 2022',
  },
  {
    id: 't8',
    title: 'Computer Vision, Machine Learning, and its Applications through Edge Devices',
    format: 'Workshop',
    date: 'June 2022',
  },
]

export type Course = {
  code: string
  title: string
  term: string
  /** If set, the course has a detail page at /training/<slug>. */
  slug?: string
}

// For-credit LUMS courses taught by WIT faculty, from /teaching-and-training.
export const courses: Course[] = [
  { code: 'SCI103', title: 'Introduction to Environmental Science', term: 'Fall 2020' },
  { code: 'SCI302 / EE5612', title: 'Socio-ecological Systems and Sustainability', term: 'Spring 2021' },
  { code: 'EE100', title: 'Engineering Laboratory: Intelligent Sustainable Systems', term: 'Spring 2021' },
  { code: 'EE568', title: 'Remote Sensing of the Environment', term: 'Spring 2023' },
  { code: 'ENV244', title: 'Modelling the Environment', term: 'Spring 2024' },
  { code: 'EE200', title: 'Sophomore Design Studio', term: 'Spring 2024' },
  {
    code: 'ENGG562 / ENV462',
    title: 'Climate Change Governance: Science, Data & Models',
    term: 'Fall 2025',
    slug: 'climate-governance',
  },
]

// Four broad topic clusters used by the catalogue filter, in place of
// granular per-programme tags.
export type TrainingCategory = 'water' | 'climate' | 'ai' | 'leadership'

export const trainingCategories: { id: TrainingCategory; label: string }[] = [
  { id: 'water', label: 'Water & floods' },
  { id: 'climate', label: 'Climate & energy' },
  { id: 'ai', label: 'AI & data' },
  { id: 'leadership', label: 'Leadership & communication' },
]

export type CourseDetail = {
  slug: string
  /** Catalogue code, e.g. 'T9' — numbered in sequence with the programmes. */
  code: string
  /** University course number(s), e.g. 'ENGG 562 / ENV 462'. */
  refCode: string
  title: string
  term: string
  /** Track this course is listed under in the training catalogue. */
  track: 'executive' | 'professional' | 'technical'
  tagline: string
  category: TrainingCategory
  cadence: string
  overview: string
  modules: {
    name: string
    weeks: string
    summary: string
    objectives: string[]
    guiding: string
  }[]
  outcomes: { id: string; text: string }[]
  prerequisites: { code: string; text: string }[]
  project: string
}

// Condensed detail for courses that have a `slug`. Transcribed and
// trimmed from the course-info page — week-by-week schedule, grading
// tables and course policies are intentionally not reproduced here.
export const courseDetails: Record<string, CourseDetail> = {
  'climate-governance': {
    slug: 'climate-governance',
    code: 'T9',
    refCode: 'ENGG 562 / ENV 462',
    title: 'Climate Change Governance: Science, Data & Models',
    term: 'Fall 2025',
    track: 'technical',
    tagline:
      'A for-credit LUMS course on the science, international policy and integrated-assessment modelling of climate change.',
    category: 'climate',
    cadence: '14 weeks · 4 modules · two 75-minute lectures per week · team capstone project',
    overview:
      'A course on the science, policy and modelling of climate change, taught jointly as the graduate ENGG 562 and the undergraduate ENV 462. It moves from the physical basis of the greenhouse effect through the international policy architecture and scenario-based integrated assessment to the energy, water and agriculture nexus, and closes with a team capstone that applies the course’s modelling tools to a real nexus problem in the Indus Basin context.',
    modules: [
      {
        name: 'Climate Science Foundations',
        weeks: 'Weeks 1 to 3',
        summary:
          'The physical basis of the greenhouse effect and the history of its discovery and confirmation, from Fourier’s 1824 hypothesis through Hansen’s 1988 congressional testimony to CMIP7.',
        objectives: [
          'Explain Earth’s energy balance and the carbon cycle.',
          'Trace the development of climate science from early hypothesis to modern model intercomparison.',
          'Interpret observational climate data and distinguish forcing, feedback and noise.',
        ],
        guiding: 'What evidence distinguishes anthropogenic warming from natural climate variability?',
      },
      {
        name: 'Policy Landscape',
        weeks: 'Weeks 4 to 5',
        summary:
          'The institutional and political processes through which climate policy is formulated and implemented at the international and national levels.',
        objectives: [
          'Describe the role of energy, water and land use (AFOLU) in the structure of the modern economy.',
          'Explain the structure of the UNFCCC, the Paris Agreement and Nationally Determined Contributions.',
          'Assess the Enhanced Transparency Framework as a mechanism for holding countries to their commitments.',
        ],
        guiding:
          'Given near-universal agreement that climate change requires a response, what accounts for the persistent difficulty of coordinated international action?',
      },
      {
        name: 'Scenarios & Integrated Assessment',
        weeks: 'Weeks 6 to 8',
        summary:
          'The scenario-based tools researchers and governments use to evaluate policy before implementation, and their methodological limitations.',
        objectives: [
          'Explain the function of an SSP narrative and the rationale for scenario families rather than single forecasts.',
          'Use an integrated assessment model to trace the outcome of a mitigation pathway.',
          'Connect carbon-pricing and fiscal mechanisms to national policy case studies.',
        ],
        guiding:
          'A model’s output is only as reliable as its assumptions. Which of them warrant the greatest scrutiny?',
      },
      {
        name: 'Energy, Water and Agriculture Nexus',
        weeks: 'Weeks 9 to 13',
        summary:
          'The energy, water and agriculture sectors examined individually, then coupled to expose the trade-offs that arise when a transition in one sector propagates through the others.',
        objectives: [
          'Model energy-system trade-offs across decarbonization pathways.',
          'Quantify water stress and demand at basin scale and relate these to questions of equity.',
          'Analyze crop and land-use risk under a changing climate and its implications for food security.',
          'Couple two or more sectors and identify cases where improving one outcome imposes a cost elsewhere.',
        ],
        guiding:
          'When a transition is introduced in one sector, how does it propagate through the other two, and what does that imply for sequencing?',
      },
    ],
    outcomes: [
      {
        id: 'CLO1',
        text: 'Explain the physical drivers of climate change and key metrics such as radiative forcing and carbon budgets.',
      },
      {
        id: 'CLO2',
        text: 'Critically assess climate policy and reporting frameworks such as NDCs, carbon pricing, and mitigation and adaptation planning.',
      },
      {
        id: 'CLO3',
        text: 'Apply computational modelling and data-visualization tools to develop pathways for energy, water and agriculture systems.',
      },
      {
        id: 'CLO4',
        text: 'Interpret and communicate complex scenario results to technical and non-technical audiences.',
      },
    ],
    prerequisites: [
      {
        code: 'ENGG 562',
        text: 'Graduate standing in any major, or EE / CS / MATH / PHYS / CE undergraduates with at least junior standing, or junior standing with instructor permission. Intermediate-level experience with data analytics and visualization in a programming environment (Python, MATLAB, R or C/C++) is required.',
      },
      {
        code: 'ENV 462',
        text: 'SSE undergraduates with at least junior standing, or instructor permission. Non-SSE undergraduates require junior standing plus any ENV2xx-or-higher course, or instructor permission. Beginner-level experience with data analytics and visualization (Excel, Python or R) is sufficient.',
      },
    ],
    project:
      'Teams of three to four, formed by Week 4, investigate a falsifiable question in energy, water, agriculture or the interactions among them. The method follows from the question: integrated assessment models such as MESSAGEix or GCAM, land-use tools such as FABLE, decision-science frameworks such as Robust Decision Making, or systems mapping and comparative policy analysis. The project runs through proposal, progress and policy-brief milestones to a Week 14 capstone presentation and an individual defence. A subset of projects each year is selected for publication as short public briefs.',
  },
}

// ── Professional Training Portfolio (2026–2027) ──────────────────────
// Commissioned programmes an institution can book directly, from the
// WIT Professional Training Portfolio document. Three tracks:
//   A. Executive  B. Professional development  C. Technical modules
// Fees are handled off-site (quoted per commission) and are deliberately
// not represented in this data or surfaced on the site.

export type TrainingTrack = {
  id: 'executive' | 'professional' | 'technical'
  code: 'A' | 'B' | 'C'
  label: string
  designedFor: string
  format: string
}

export const trainingTracks: TrainingTrack[] = [
  {
    id: 'executive',
    code: 'A',
    label: 'Executive programmes',
    designedFor:
      'Secretaries, directors-general, chief executives, board members, senior policymakers and development-sector leadership',
    format: 'Two-day facilitated workshops; no technical prerequisites; cohorts of 12 to 25',
  },
  {
    id: 'professional',
    code: 'B',
    label: 'Professional development',
    designedFor:
      'Mid-career analysts, researchers, engineers and programme officers who produce and communicate technical work',
    format: "Two- to three-day workshops built around participants' own material; cohorts of 15 to 30",
  },
  {
    id: 'technical',
    code: 'C',
    label: 'Technical modules',
    designedFor:
      'Engineers, hydrologists, modellers and data specialists who build and operate models and monitoring systems',
    format: 'Three- to five-day hands-on laboratories, one workstation per participant; cohorts of 12 to 25',
  },
]

export type TrainingProgramme = {
  code: string
  track: TrainingTrack['id']
  title: string
  tagline: string
  days: number
  format: string
  audience: string
  leadFaculty: string[]
  /** Broad topic cluster used by the catalogue filter. */
  category: TrainingCategory
  overview: string
  objectives: string[]
  outline: { label: string; focus: string; content: string }[]
  takeaways: string[]
}

export const trainingProgrammes: TrainingProgramme[] = [
  {
    code: 'E1',
    track: 'executive',
    title: 'Systems Thinking for Executives',
    tagline: 'Managing water, energy, food and climate as one connected system',
    days: 2,
    format: 'Facilitated workshop, case discussion and structured exercises',
    audience:
      'Secretaries, directors-general, chief executives, board members, senior planners and development-sector leadership',
    leadFaculty: ['Dr. Abubakr Muhammad', 'Dr. Talha Manzoor', 'Dr. Muhammad Awais'],
    category: 'leadership',
    overview:
      "Resource decisions in Pakistan are still taken one sector at a time. An agricultural support price is set without asking what it does to the water table; an industrial zone is approved without accounting for its peak power draw or its place in a national emissions commitment. The system pushes back, and the intervention ends up producing the problem it was meant to solve. This programme is for leaders who must manage that complexity without being drawn into the technical detail. It replaces linear cause-and-effect reasoning with a working understanding of feedback, delay and leverage, applied throughout to the water, energy, food and climate questions senior officials in Pakistan face.",
    objectives: [
      'Recognise why certain problems persist despite repeated intervention and diagnose the structures that keep them in place.',
      'Map the links between water availability, energy security, food production and climate commitments in each decision.',
      'Anticipate where a gain in one department creates a cost in another, before the decision is taken.',
      'Use scenario thinking to reach robust decisions when the evidence is incomplete or contested.',
      'Frame a systemic argument in language that aligns ministries, agencies and partners with competing interests.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'Foundations of systems thinking',
        content:
          'Stocks, flows and feedback; the common archetypes behind failed interventions; reading a causal loop diagram; a Pakistan water-energy case worked in plenary.',
      },
      {
        label: 'Day 2',
        focus: 'Nexus decisions and leverage',
        content:
          'Scenario thinking under uncertainty; identifying leverage points in a live policy problem brought by participants; interrogating technical advice; stakeholder alignment exercise.',
      },
    ],
    takeaways: [
      "A structured way to test a consultant's or technical team's recommendation for the systemic risks it has missed.",
      'The ability to locate the small, well-placed change that produces lasting improvement across an organisation.',
      'A shift from reactive crisis management toward policies and projects that hold up under changing conditions.',
    ],
  },
  {
    code: 'E2',
    track: 'executive',
    title: 'Climate Policy and Net-Zero Strategy for Decision-Makers',
    tagline: 'What the models say, what they do not, and what to ask before committing',
    days: 2,
    format: 'Facilitated workshop with scenario walkthroughs and a live model demonstration',
    audience:
      'Federal and provincial policymakers, climate change and planning officials, utility and regulator leadership, development finance staff',
    leadFaculty: ['Dr. Muhammad Awais', 'Dr. Talha Manzoor'],
    category: 'climate',
    overview:
      "Pakistan's Nationally Determined Contribution, its long-term low-emissions strategy and a growing set of sectoral plans all rest on quantitative modelling. Most of the officials who own those commitments have never seen the inside of the models that produced them, and are poorly placed to judge which numbers are firm and which are assumptions in disguise. This programme opens the models up. Drawing on the faculty's work on national pathways for Pakistan and on global integrated assessment at IIASA, it shows how mitigation and adaptation scenarios are built, where their uncertainties come from, and how to read scenario outputs critically when they arrive on the desk.",
    objectives: [
      'Understand how national emissions pathways are constructed and what drives the differences between scenarios.',
      'Read a scenario report and identify the assumptions on demand, technology cost and climate impacts that determine the result.',
      'Weigh adaptation and mitigation choices together, including their water, land and energy consequences.',
      'Relate model outputs to NDC reporting, long-term strategies and climate finance requirements.',
      'Commission and supervise modelling work with clear terms of reference and realistic expectations.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'How pathways are made',
        content:
          'The mitigation modelling landscape; integrated assessment in plain terms; a MESSAGEix scenario for Pakistan walked through end to end; where uncertainty enters.',
      },
      {
        label: 'Day 2',
        focus: 'From pathways to policy',
        content:
          'Reading and challenging scenario outputs; adaptation-mitigation trade-offs in the Indus context; aligning modelling with NDC and finance processes; drafting terms of reference for a modelling study.',
      },
    ],
    takeaways: [
      'Confidence to question a pathway presented by a consultant, agency or international partner.',
      'A working vocabulary shared with the technical teams who produce the analysis.',
      'A checklist for scoping, procuring and reviewing climate modelling work.',
    ],
  },
  {
    code: 'E3',
    track: 'executive',
    title: 'Artificial Intelligence for Water and Climate Leadership',
    tagline: 'Large language models, agentic systems and their place in a public institution',
    days: 2,
    format: 'Briefings, guided hands-on sessions with AI tools and a governance workshop',
    audience: 'Heads of departments and agencies, senior engineers and planners, IT and data leads, programme directors',
    leadFaculty: ['Dr. Muhammad Awais', 'Ahmad Haseeb Rabbani'],
    category: 'ai',
    overview:
      'Large language models and the agentic systems built on them are already inside most water and climate organisations, whether or not leadership has decided they should be. Staff use them to draft reports, write code and summarise documents. Few institutions have a considered view on where these tools genuinely add value, where they introduce risk, and what it would take to use them well. This programme gives senior participants direct experience of the tools in the context of their own work, then steps back to the questions leadership has to answer on data governance, procurement, staff capability and accountability.',
    objectives: [
      'Distinguish what current AI systems do reliably from what they do unreliably, with examples from water, climate and infrastructure work.',
      'Use a language model to interrogate technical documents, data and model outputs, and judge the quality of what it returns.',
      'Understand what an agentic workflow is and where it fits in a modelling, monitoring or reporting process.',
      'Set institutional rules on data confidentiality, verification and disclosure for AI-assisted work.',
      'Identify the capability and infrastructure investments that make adoption worthwhile.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'The tools in practice',
        content:
          "How language models work, briefly and accurately; hands-on session on participants' own documents and datasets; agentic systems demonstrated on a water-sector task; failure modes and how to catch them.",
      },
      {
        label: 'Day 2',
        focus: 'Governance and strategy',
        content:
          "Data security and confidentiality; verification and human accountability; procurement and vendor claims; building an adoption roadmap for the participant's organisation.",
      },
    ],
    takeaways: [
      'An evidence-based position on AI adoption that can be defended to a board, ministry or funder.',
      'A draft internal policy on the use of AI tools by technical and administrative staff.',
      'A short list of high-value, low-risk applications to pilot in the first year.',
    ],
  },
  {
    code: 'P1',
    track: 'professional',
    title: 'Data-Driven Decision Making and Strategic Communication',
    tagline: 'Turning analysis into briefs that senior leadership will act on',
    days: 2,
    format: "Workshop with writing and presentation exercises on participants' own material",
    audience: 'Mid-career professionals, researchers, policy analysts, technical leads and programme officers',
    leadFaculty: ['Dr. Talha Manzoor', 'Dr. Muhammad Awais'],
    category: 'leadership',
    overview:
      'In most organisations, good data fails to become good decisions. The problem is rarely a shortage of information. It is the gap between analysis and synthesis, between a hundred pages of findings and the one page a decision-maker has time to read. Mid-career staff carry that gap: they are asked to turn complex technical work into concise, defensible recommendations for readers who have little patience for jargon. This programme concentrates on that last mile, moving beyond spreadsheets and slide templates to the craft of distilling analysis into narratives, reports and policy briefs that change what an institution does.',
    objectives: [
      'Reduce a large technical report to a one-page executive summary without losing what matters.',
      'Choose visualisations that expose trends, anomalies and leverage points rather than simply displaying data.',
      'Write in the inverted-pyramid form so the recommendation is read first.',
      'Present risks, data gaps and uncertainty without undermining the credibility of the finding.',
      'Move from academic to professional prose: readable, scannable and structured for a busy reader.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'From analysis to argument',
        content:
          "What decision-makers actually read; structuring a brief; the discipline of the one-page summary; visual design for evidence; rewriting exercise on participants' own reports.",
      },
      {
        label: 'Day 2',
        focus: 'Delivery and integrity',
        content:
          'Presenting to leadership; handling questions on uncertainty and gaps; saying what the data does not say; peer review of revised briefs and presentations.',
      },
    ],
    takeaways: [
      'Writing that connects a technical result to organisational and national objectives.',
      'Fewer revision cycles, through better structural planning before drafting begins.',
      'A repeatable framework for discussing limitations that protects both the analyst and the institution.',
    ],
  },
  {
    code: 'P2',
    track: 'professional',
    title: 'Scientific Writing and Technical Presentation',
    tagline: 'Publishing, reporting and presenting for water and environmental professionals',
    days: 3,
    format: 'Workshop with drafting, review and presentation practice',
    audience: 'Research officers, scientists and engineers in public research bodies, universities and technical agencies',
    leadFaculty: ['Dr. Talha Manzoor', 'Dr. Muhammad Awais'],
    category: 'leadership',
    overview:
      "Many technical organisations in Pakistan produce sound science that never reaches a peer-reviewed journal, and technical reports read only by the people who wrote them. The limiting factor is rarely the quality of the work; it is the writing, the figures and the ability to answer a reviewer or an audience. This programme is built around participants' own manuscripts and reports, working through structure, argument, figures, the review process and the spoken presentation of results, with faculty who publish regularly in the journals participants are targeting.",
    objectives: [
      'Structure a paper or technical report so that the contribution is clear from the abstract onward.',
      'Write a literature synthesis that positions the work rather than lists prior studies.',
      'Prepare figures and tables that carry the argument and meet journal standards.',
      'Respond to peer review constructively and select an appropriate venue for a given piece of work.',
      'Deliver a technical presentation to specialist and non-specialist audiences.',
      'Use AI writing assistants responsibly, with an understanding of what journals and institutions now expect on disclosure.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'Structure and argument',
        content:
          "Anatomy of a research paper and a technical report; framing the contribution; abstracts and introductions; drafting session on participants' own work.",
      },
      {
        label: 'Day 2',
        focus: 'Evidence and figures',
        content:
          'Methods and results sections; figure design and captioning; tables; citation practice; the review process and how to write a response to reviewers.',
      },
      {
        label: 'Day 3',
        focus: 'Presentation',
        content:
          'Building a talk from a paper; slide design; delivery and handling questions; recorded practice presentations with faculty and peer feedback.',
      },
    ],
    takeaways: [
      'A revised manuscript or report section ready for submission or internal circulation.',
      'A personal checklist for writing, figure preparation and submission.',
      "A rehearsed conference-style presentation of the participant's own work.",
    ],
  },
  {
    code: 'T1',
    track: 'technical',
    title: 'Geospatial Foundations and Flood Frequency Analysis',
    tagline: 'QGIS terrain processing and statistical design-flood estimation with HEC-SSP',
    days: 3,
    format: 'Hands-on laboratory, one workstation per participant',
    audience:
      'Engineers, hydrologists, watershed specialists and technical leads in flood, irrigation and water resources agencies',
    leadFaculty: ['Dr. Talha Manzoor', 'WIT hydrology team'],
    category: 'water',
    overview:
      'Spatial data preparation, DEM conditioning and statistical flood frequency analysis underpin every reliable hydrological or hydraulic study. Errors made at this stage propagate silently into every model built on top of them. This module gives engineers a rigorous geospatial workflow in QGIS and a defensible approach to frequency analysis in HEC-SSP, so that design floods for a range of return periods can be produced, documented and justified with statistical confidence.',
    objectives: [
      'Manage coordinate reference systems, vector and raster data for flood and watershed studies.',
      'Condition digital elevation models, extract stream networks and delineate watersheds in QGIS.',
      'Derive hydrological parameters, flow accumulation grids and basin morphometry from terrain data.',
      'Apply Log-Pearson Type III and Gumbel distributions to annual peak series with confidence limits.',
      'Compute and document design floods for 2- to 100-year return periods in HEC-SSP.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'Geospatial foundations in QGIS',
        content:
          'Spatial data structures and projections; DEM preprocessing, sink filling, stream extraction and watershed delineation using QGIS processing tools.',
      },
      {
        label: 'Day 2',
        focus: 'Terrain and parameter extraction',
        content:
          'Flow accumulation, morphometry and overlay analysis; automating feature extraction; preparing land use, soil and boundary layers for hydrological modelling.',
      },
      {
        label: 'Day 3',
        focus: 'Flood frequency analysis',
        content:
          'Distribution fitting and confidence limits; frequency analysis of annual peak streamflow; design-flood computation and reporting in HEC-SSP.',
      },
    ],
    takeaways: [
      'A complete, reproducible watershed dataset prepared from raw terrain and land-cover inputs.',
      'A documented frequency analysis for a real gauging station, ready to feed a rainfall-runoff or hydraulic model.',
    ],
  },
  {
    code: 'T2',
    track: 'technical',
    title: 'Rainfall-Runoff and Macro-Scale Watershed Modelling',
    tagline: 'HEC-HMS, SWAT+ and the Community Water Model under a changing climate',
    days: 3,
    format: 'Hands-on laboratory, one workstation per participant',
    audience: 'Engineers, hydrologists and modellers in flood, irrigation, meteorological and water resources agencies',
    leadFaculty: ['Dr. Muhammad Awais', 'Dr. Talha Manzoor'],
    category: 'water',
    overview:
      "Understanding how a watershed responds to extreme rainfall, and how that response will shift as the climate changes, requires modelling tools that span from a single sub-basin to an entire river system. This module covers lumped and semi-distributed modelling in HEC-HMS, semi-distributed catchment modelling in SWAT+, and grid-based macro-scale modelling with IIASA's Community Water Model (CWatM), which WIT applies in its own Indus Basin work. Downscaled climate projections are integrated throughout, so participants leave able to evaluate future hydrological extremes and basin water balances rather than only historical events.",
    objectives: [
      'Set up, parameterise and calibrate a HEC-HMS basin model against observed events.',
      'Apply channel and reservoir routing and generate design hyetographs.',
      'Incorporate downscaled climate projections to simulate future design storms and runoff.',
      'Configure a SWAT+ catchment model and interpret sub-basin water yields.',
      'Set up a CWatM grid-based configuration with global climate forcing data and evaluate basin-scale water balance.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'HEC-HMS fundamentals',
        content:
          'Rainfall-runoff transformation, SCS curve number losses and unit hydrographs; basin and meteorological model setup; calibration against a historical event.',
      },
      {
        label: 'Day 2',
        focus: 'Routing and climate scenarios',
        content:
          'Muskingum-Cunge and reservoir routing; design hyetographs; ingesting downscaled projections; simulating climate-driven design storms and comparing scenario outputs.',
      },
      {
        label: 'Day 3',
        focus: 'Macro-scale hydrology',
        content:
          'CWatM and SWAT+ architecture; large-scale water balances and human-water interactions; grid-based setup, climate forcing and sub-basin yield evaluation.',
      },
    ],
    takeaways: [
      'A calibrated HEC-HMS model for a Pakistani catchment with future-climate design storms.',
      'Working familiarity with two open-source basin-scale models and the data pipelines that feed them.',
    ],
  },
  {
    code: 'T3',
    track: 'technical',
    title: '1D/2D Hydrodynamic Modelling and Flood Inundation Mapping',
    tagline: 'Unsteady flow, rain-on-grid and hazard mapping in HEC-RAS, with a capstone on technical appraisal',
    days: 4,
    format: 'Hands-on laboratory, one workstation per participant',
    audience:
      'Engineers, hydrologists and technical leads responsible for river works, floodplain management and the review of third-party studies',
    leadFaculty: ['Dr. Talha Manzoor', 'WIT hydrology team'],
    category: 'water',
    overview:
      "Hydraulic modelling determines how a river behaves at a bridge, a barrage or an embankment, how a dam-break wave propagates and which land will be under water in a given flood. It is also the part of a consultant's study that agencies find hardest to check. This four-day module trains engineers in 1D and 2D unsteady modelling with HEC-RAS, from cross-section extraction to mesh generation, stability criteria and rain-on-grid inundation mapping. The final day is devoted to quality control: auditing an end-to-end model, applying appraisal criteria and reporting standards, and troubleshooting under time pressure.",
    objectives: [
      'Build a 1D steady and unsteady HEC-RAS model with bridges and culverts from DEM-derived cross-sections.',
      'Generate a 2D mesh with breaklines, set boundary conditions and run stable unsteady simulations.',
      'Simulate rain-on-grid direct runoff and dam-break scenarios.',
      'Produce inundation depth, velocity and hazard layers in RAS Mapper.',
      'Audit a third-party hydraulic study against calibration, documentation and reporting criteria.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'HEC-RAS 1D',
        content:
          'Open-channel flow equations; cross-section extraction in QGIS and RAS Mapper; steady and unsteady 1D models; bridges and culverts.',
      },
      {
        label: 'Day 2',
        focus: 'HEC-RAS 2D',
        content:
          'Shallow-water equations; mesh generation, breaklines and roughness; CFL stability; boundary conditions and unsteady runs.',
      },
      {
        label: 'Day 3',
        focus: 'Advanced 2D and inundation mapping',
        content:
          'Floodplain dynamics; dam-break principles; rain-on-grid; depth, velocity and hazard mapping under extreme events.',
      },
      {
        label: 'Day 4',
        focus: 'Review and technical appraisal',
        content:
          'Appraisal criteria for hydrological and hydraulic studies; calibration protocols; group audit of a complete model; practical troubleshooting assessment.',
      },
    ],
    takeaways: [
      'A complete 1D/2D HEC-RAS model with inundation and hazard maps for a real reach.',
      'An appraisal checklist that agency staff can apply to studies submitted by consultants.',
    ],
  },
  {
    code: 'T4',
    track: 'technical',
    title: 'Climate Policy Assessment and Mitigation Modelling',
    tagline: 'Building and applying a national integrated assessment model in MESSAGEix',
    days: 5,
    format: 'Hands-on laboratory, one workstation per participant',
    audience:
      'Analysts and modellers in climate change, planning, energy and environment ministries, research institutes and utilities',
    leadFaculty: ['Dr. Muhammad Awais', 'IIASA Energy, Climate and Environment Programme contributors'],
    category: 'climate',
    overview:
      "National greenhouse gas mitigation planning increasingly relies on integrated assessment models that link energy supply, sectoral demand, land, water and climate impacts. Pakistan has few analysts who can build and operate such a model, and depends on external partners for pathways it is then expected to defend internationally. This module transfers that capability. Using the open-source MESSAGEix framework maintained at IIASA, participants build a national-level model from a reference energy system, prepare and calibrate input data, and design scenarios aligned with NDCs and long-term strategies. It draws directly on WIT's MESSAGEix-Pakistan work and on the faculty's role in the EU COMMITTED programme.",
    objectives: [
      'Explain the structure and logic of integrated assessment and energy-system optimisation models.',
      'Install and operate MESSAGEix and construct a reference energy system for a country.',
      'Prepare sectoral demand, technology cost and availability, resource and hydro-climatic projection inputs.',
      'Design and run NDC, long-term strategy and net-zero scenarios with sensitivity analysis.',
      'Link energy pathways to water and land outcomes and translate results into a policy brief.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'Foundations',
        content:
          'National inventories and mitigation planning; the modelling landscape; integrated assessment concepts; reading published scenarios for Pakistan and the region.',
      },
      {
        label: 'Day 2',
        focus: 'MESSAGEix structure',
        content:
          'Installation and environment; sets, parameters and the reference energy system; building and solving a first model.',
      },
      {
        label: 'Day 3',
        focus: 'Input data',
        content:
          'Sectoral demand projections; technology characterisation; resource and hydro-climatic inputs; calibration to the base year.',
      },
      {
        label: 'Day 4',
        focus: 'Scenario design',
        content:
          'Policy representation: carbon budgets, targets, sectoral measures; NDC and net-zero scenarios; sensitivity and uncertainty.',
      },
      {
        label: 'Day 5',
        focus: 'Analysis and communication',
        content:
          'Post-processing and visualisation; water and land linkages; participants present a scenario and a two-page brief.',
      },
    ],
    takeaways: [
      'A working national MESSAGEix model and scenario set that participants can continue to develop.',
      'The ability to contribute to, and critically review, national pathway analysis and NDC reporting.',
    ],
  },
  {
    code: 'T5',
    track: 'technical',
    title: 'Machine Learning and Data Analytics for Water and Earth Systems',
    tagline: 'From regression to deep learning for monitoring, forecasting and earth observation',
    days: 4,
    format: 'Hands-on laboratory in Python, one workstation per participant',
    audience: 'Engineers, scientists and data analysts in water, meteorological, agricultural and environmental agencies',
    leadFaculty: ['Ahmad Haseeb Rabbani', 'Dr. Talha Manzoor'],
    category: 'ai',
    overview:
      'Water agencies now hold more data than they can analyse: gauge records, sensor telemetry, satellite imagery and model outputs accumulate faster than conventional methods can use them. Machine learning offers a way through, but only for staff who understand what the methods assume and where they fail. This module teaches machine learning and data science as applied to water resources monitoring and earth systems observation, progressing from regression and classification through time-series forecasting with recurrent and LSTM networks to learning from satellite data, with consistent attention to validation, uncertainty and operational deployment. Content is calibrated to participants’ backgrounds before delivery.',
    objectives: [
      'Handle, clean and explore hydrological and environmental datasets in Python.',
      'Apply regression, classification and tree-based methods with proper validation.',
      'Build time-series forecasting models for streamflow, groundwater and demand using RNN and LSTM architectures.',
      'Extract features from satellite imagery and train models for land cover, crop and water-extent mapping.',
      'Quantify uncertainty, avoid common pitfalls, and package a trained model for operational use.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'Data and fundamentals',
        content:
          'Python for data science; loading and cleaning gauge, sensor and gridded data; exploratory analysis; regression and model evaluation.',
      },
      {
        label: 'Day 2',
        focus: 'Supervised learning',
        content:
          'Classification and tree-based methods; cross-validation and leakage; feature engineering for hydrological problems; a case on ungauged catchments.',
      },
      {
        label: 'Day 3',
        focus: 'Time series and deep learning',
        content:
          'Sequence models; RNN and LSTM for streamflow and groundwater forecasting; handling gaps and non-stationarity.',
      },
      {
        label: 'Day 4',
        focus: 'Earth observation and deployment',
        content:
          'Satellite data access and preprocessing; ML on imagery for crops, floods and water extent; uncertainty; deploying a model as a service.',
      },
    ],
    takeaways: [
      "A forecasting model trained on the participant's own station data.",
      'A reusable Python workflow for data preparation, training and validation in a water-sector setting.',
    ],
  },
  {
    code: 'T6',
    track: 'technical',
    title: 'Large Language Models and Agentic AI for Modelling Practice',
    tagline: 'Using LLMs and autonomous agents in water, climate and systems modelling workflows',
    days: 3,
    format: 'Hands-on laboratory with AI tools and agent frameworks, one workstation per participant',
    audience: 'Modellers, analysts, researchers and engineers who build or run hydrological, climate, energy or systems models',
    leadFaculty: ['Dr. Muhammad Awais', 'Ahmad Haseeb Rabbani'],
    category: 'ai',
    overview:
      'Large language models have changed how technical work gets done. A modeller can now draft a pre-processing script in minutes, ask a model to explain an unfamiliar configuration file, or set up an agent that fetches data, runs a simulation and drafts the results section. Used carelessly, the same tools produce plausible-looking code that is wrong and reports that cite things that do not exist. This module is a practitioner’s course, teaching participants to use language models and agentic workflows effectively for the specific tasks that arise in water, climate and systems modelling, with equal weight on getting useful output and on verifying it. Examples are drawn from HEC-HMS, HEC-RAS, CWatM and MESSAGEix work at WIT.',
    objectives: [
      'Prompt language models for technical tasks: code generation, data wrangling, model configuration, debugging and documentation.',
      "Use retrieval over institutional documents, reports and datasets to ground model answers in an organisation's own material.",
      'Design and run agentic workflows that chain data acquisition, model execution and reporting.',
      'Build validation and guardrails into AI-assisted work so that outputs are checked, reproducible and auditable.',
      'Judge when an agent is the right tool and when it is not.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'Language models for technical work',
        content:
          'How LLMs work and where they fail; prompting for code, data and configuration; AI-assisted scripting for hydrological and energy model inputs; verifying generated code.',
      },
      {
        label: 'Day 2',
        focus: 'Grounding and retrieval',
        content:
          'Retrieval-augmented workflows over reports, manuals and datasets; structured extraction from documents; building a question-answering assistant on institutional material.',
      },
      {
        label: 'Day 3',
        focus: 'Agentic workflows',
        content:
          "Tool use and multi-step agents; a worked pipeline from data download to model run to draft report; testing, logging and reproducibility; participants design an agent for their own recurring task.",
      },
    ],
    takeaways: [
      "A working agentic pipeline for a recurring task in the participant's own modelling practice.",
      'A personal set of practices for verification and disclosure of AI-assisted technical work.',
    ],
  },
  {
    code: 'T7',
    track: 'technical',
    title: 'IoT-Based In-Situ Monitoring of Water Systems',
    tagline: 'Designing, deploying and maintaining low-cost sensor networks for rivers, canals and groundwater',
    days: 3,
    format: 'Laboratory and field sessions, including deployment at a WIT field site',
    audience: 'Engineers, field officers and monitoring staff in irrigation, groundwater, hydrological and environmental agencies',
    leadFaculty: ['Dr. Talha Manzoor', 'Dr. Abubakr Muhammad', 'WIT field engineering team'],
    category: 'water',
    overview:
      "Most of Pakistan's water system is unmeasured. Where measurement exists it is often manual, infrequent and unverifiable. Low-cost sensing and telemetry make continuous, quality-assured monitoring affordable, but only if the network is designed for the realities of the field: power, connectivity, siltation, tampering and maintenance. WIT operates more than a hundred field installations across Pakistan, including the hydrometeorological network of the Namal Valley and a soil-moisture network for the Indus Basin. This module draws on that experience to take participants from sensor selection through node design, telemetry, data quality assurance and dashboards, with a field deployment on the final day.",
    objectives: [
      'Select sensors and measurement approaches for water level, discharge, soil moisture, rainfall and water quality.',
      'Design low-power sensing nodes and choose appropriate telemetry for remote sites.',
      'Implement data quality assurance, gap handling and calibration procedures.',
      'Set up a data pipeline from field node to database to dashboard.',
      'Plan installation, maintenance and security for a monitoring network with a realistic budget.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'Sensing and node design',
        content:
          'Measurement principles for hydrometry and water quality; sensor selection and calibration; low-power node architecture; power and enclosure design.',
      },
      {
        label: 'Day 2',
        focus: 'Telemetry and data systems',
        content:
          'Communication options for remote sites; data ingestion, storage and quality control; building a monitoring dashboard; case studies from WIT deployments.',
      },
      {
        label: 'Day 3',
        focus: 'Field deployment',
        content:
          'Site selection and installation at a WIT field station; commissioning and data validation; maintenance planning and cost estimation.',
      },
    ],
    takeaways: [
      "A monitoring network design and cost estimate for a site of the participant's choosing.",
      'Hands-on experience installing and commissioning a working sensor node.',
    ],
  },
  {
    code: 'T8',
    track: 'technical',
    title: 'Remote Sensing and GIS for Water Resources',
    tagline: 'Satellite earth observation for floods, crops, snow and water accounting',
    days: 3,
    format: 'Hands-on laboratory using open satellite data and cloud platforms',
    audience:
      'Engineers, hydrologists, agricultural and disaster-management professionals and GIS staff in public agencies',
    leadFaculty: ['Dr. Abubakr Muhammad', 'WIT remote sensing team'],
    category: 'water',
    overview:
      "Free satellite data from the Sentinel, Landsat and MODIS programmes now provides frequent, basin-wide observation of floods, crops, snow cover and surface water. Most agencies use a fraction of it, because the workflows for accessing, processing and interpreting the data are unfamiliar. This module gives participants a practical command of optical and radar remote sensing for water applications, using open tools and cloud processing. It draws on WIT's assessments of the 2022 floods, catchment snow-depth estimation in the Upper Indus and crop mapping in Punjab.",
    objectives: [
      'Access and preprocess optical and synthetic-aperture radar imagery for a study area.',
      'Map flood extent and duration from SAR and optical data.',
      'Estimate snow cover and evapotranspiration, and classify crops using multi-temporal imagery.',
      'Combine remote sensing with in-situ data for validation and water accounting.',
      'Produce map products and time series suitable for reporting and decision support.',
    ],
    outline: [
      {
        label: 'Day 1',
        focus: 'Foundations',
        content:
          'Sensors, resolutions and data sources; cloud platforms for large-scale processing; preprocessing optical and SAR imagery; indices and composites.',
      },
      {
        label: 'Day 2',
        focus: 'Water applications',
        content:
          'Flood mapping from SAR and optical data; surface water dynamics; snow cover and evapotranspiration products; the 2022 flood as a worked case.',
      },
      {
        label: 'Day 3',
        focus: 'Agriculture and integration',
        content:
          'Crop classification with multi-temporal imagery; validation against field data; water accounting; producing map and time-series outputs for a participant-chosen area.',
      },
    ],
    takeaways: [
      "A flood or crop map product for an area of the participant's choosing, with a documented workflow.",
      'A processing pipeline that can be re-run as new imagery arrives.',
    ],
  },
]

export const trainingPortfolio = {
  period: '2026-2027',
  intro:
    'The Professional Training Portfolio draws on a decade of WIT capacity building: summer and fall schools, short courses for public agencies, and stakeholder workshops on the Indus Basin, the energy and agriculture nexus and climate policy. It sets out programmes that institutions can commission directly, individually or in combination. Every programme is delivered by LUMS faculty and WIT research staff active in the subject they teach, using the models, data and case studies applied in the Centre’s own research and advisory work.',
  terms: [
    {
      heading: 'Delivery',
      body: 'Programmes are delivered at the LUMS campus in Lahore, in the teaching laboratories and seminar facilities of the Syed Babar Ali School of Science and Engineering. Executive and professional programmes can also be delivered at a client’s premises or a chosen venue anywhere in Pakistan; technical modules can be delivered on site where suitable computing facilities are available.',
    },
    {
      heading: 'Cohorts and adaptation',
      body: 'Each programme runs for a closed institutional cohort or as part of a multi-programme package for a single organisation. Scope and duration can be adjusted to an institution’s needs, including an extended five-day treatment of a technical module where a more intensive engagement is required.',
    },
    {
      heading: 'Scheduling',
      body: 'Multi-day technical modules are most readily scheduled during the LUMS semester breaks (typically June to August and late December to January); two-day executive and professional programmes can run throughout the year. A minimum of six weeks’ notice is requested for confirmed bookings.',
    },
    {
      heading: 'Also available on request',
      body: 'Beyond the catalogue, WIT designs short courses individually on the topics below, and can structure bespoke programmes on climate mitigation, adaptation and institutional capacity building.',
    },
  ],
  additionalTopics: [
    'Water accounting',
    'Water, technology and society interactions (systems thinking for basin-scale development)',
    'Digital sustainable agriculture',
    'Water quality modelling',
    'Environmental flow assessment',
    'Groundwater modelling and management',
    'Canal operations and irrigation scheduling',
    'Negotiation and decision analysis for transboundary water',
    'Climate mitigation and adaptation capacity building',
  ],
}

export type Person = {
  id: string
  name: string
  title: string
}

// Curated to leadership + core research leads — the full team (~40 people
// across faculty, research, technical, and admin staff) is listed at
// wit.lums.edu.pk/people; linked from the People section rather than
// reproduced in full here.
export const people: Person[] = [
  { id: 'abubakr-muhammad', name: 'Dr. Abubakr Muhammad', title: 'Executive Director, WIT · Associate Professor of EE' },
  { id: 'talha-manzoor', name: 'Dr. Talha Manzoor', title: 'Director of Operations, WIT · Assistant Professor of Research' },
  { id: 'hassan-jaleel', name: 'Dr. Hassan Jaleel', title: 'Director of Research, WIT · Assistant Professor of EE' },
  { id: 'tauqeer-abbas', name: 'Dr. Tauqeer Abbas', title: 'Director of Circular Economy Technologies' },
  { id: 'muhammad-awais', name: 'Dr. Muhammad Awais', title: 'Assistant Professor of Research' },
  { id: 'zahoor-ahmad', name: 'Zahoor Ahmad', title: 'Senior Electronics Engineer' },
]

export const peopleTotal = 40

export const contact = {
  email: 'wit@lums.edu.pk',
  phone: '+92 42 3560 8000, Ext. 3763',
  hours: 'Mon to Fri, 8:30 a.m. to 5:00 p.m.',
  address: 'LUMS, DHA, Lahore, Pakistan',
}

export type NewsItem = {
  id: string
  date: string
  title: string
  description?: string
}

// Real items from /wit-news (fetched 2026-08-19), most recent first.
export const newsItems: NewsItem[] = [
  {
    id: 'n1',
    date: 'August 3, 2026',
    title: 'WIT Concludes Summer Mentorship Program 2026',
    description:
      'The centre successfully concluded its Summer Mentorship Program 2026 (SMP-26) with final presentations at the Syed Babar Ali School of Science and Engineering.',
  },
  {
    id: 'n2',
    date: 'July 9, 2026',
    title: 'Dr. Talha Manzoor Delivers Lecture on Intelligent Control of Complex Water Systems to RISE Interns',
  },
  {
    id: 'n3',
    date: 'July 1, 2026',
    title: 'SMALLPAK Summer Internship 2026 Concludes with Research Presentations',
  },
  {
    id: 'n4',
    date: 'November 17, 2025',
    title: 'WIT Develops Low-Cost Drone Solutions for Precision Agriculture in Pakistan',
  },
  {
    id: 'n5',
    date: 'July 31, 2025',
    title: 'Summer Mentorship Program 2025 Concludes with Final Presentations',
  },
  {
    id: 'n6',
    date: 'July 8, 2025',
    title: 'Seminar on Field Methods for Environmental Research',
  },
  {
    id: 'n7',
    date: 'December 25, 2023',
    title: "Water Policy in Pakistan Unveiled: WIT Hosts Insightful Book Launch Event",
  },
  {
    id: 'n8',
    date: 'August 18, 2023',
    title: 'An Insightful Workshop on Digital Sustainable Agriculture',
  },
  {
    id: 'n9',
    date: 'February 1, 2023',
    title: 'WIT Centre Collaborates with European Union for Net-Zero Strategies',
  },
]

export const stats = [
  { value: '2016', label: 'Centre established' },
  { value: '21', label: 'research projects' },
  { value: '15', label: 'active research themes' },
  { value: '40+', label: 'faculty, staff & students' },
]

export type SystemPressure = {
  sector: 'water' | 'energy' | 'agriculture' | 'climate' | 'population'
  label: string
  value: string
  note: string
  source: string
  photoCredit?: { author: string; url: string }
}

// Real, sourced national-scale figures — one per nexus sector, chosen to
// show how the four compound each other rather than as standalone shock
// stats. Verify against source before reusing; figures fetched 2026-08-19
// from World Bank, WFP, and Germanwatch/Global Climate Risk Index via
// their cited data (see SKILL.md for the fetch trail). No number here is
// invented — where a real figure was too dated to trust (e.g. Pakistan's
// energy-sector circular debt), the note states the mechanism instead of
// a stale number.
export const systemPressures: SystemPressure[] = [
  {
    sector: 'water',
    label: 'Water',
    value: '~1,000 m³',
    note: 'per person per year. That is the internationally recognized water-scarcity threshold, and roughly where Pakistan now sits, down from a comfortable surplus at independence. The receded shoreline at Tarbela reservoir below is what that looks like in practice.',
    source: 'National water resource assessments',
    photoCredit: {
      author: 'Wajihamalick',
      url: 'https://commons.wikimedia.org/wiki/File:A_view_of_Tarbela_Dam.jpg',
    },
  },
  {
    sector: 'agriculture',
    label: 'Agriculture',
    value: '93%',
    note: 'of that scarce water goes to agriculture, yet Pakistan still has one of the lowest crop yields per unit of water in the world. The water isn’t missing; the system using it is inefficient.',
    source: 'WIT, wit.lums.edu.pk',
    photoCredit: {
      author: 'Naveed Yousaf',
      url: 'https://commons.wikimedia.org/wiki/File:Wheat_thresher_charsadda.jpg',
    },
  },
  {
    sector: 'energy',
    label: 'Energy',
    value: 'Hydro-dependent',
    note: 'A large share of the grid runs on hydropower, so when rivers run low in dry years, power generation drops too. A water problem becomes an energy problem within the same season.',
    source: 'Structural link, not a single-year figure',
    photoCredit: {
      author: 'Hiàn (alt)',
      url: 'https://commons.wikimedia.org/wiki/File:Tarbela_Dam_spillway_DSC_4280_(5835435528).jpg',
    },
  },
  {
    sector: 'climate',
    label: 'Climate',
    value: '5th',
    note: 'most climate-affected country in the world (1999 to 2018) while producing under 1% of global emissions. The 2022 floods alone affected 33 million people and destroyed roughly half the crops in flooded districts: a climate event that was a water event and a food event at once.',
    source: 'Global Climate Risk Index (Germanwatch); UN flood reporting',
    photoCredit: {
      author: 'Wikimedia Commons',
      url: 'https://commons.wikimedia.org/wiki/File:Devastating_floods_in_Pakistan.jpg',
    },
  },
  {
    sector: 'population',
    label: 'Population',
    value: '251M+',
    note: 'people today, projected to reach 263 million by 2050. Roughly 22% already live below the national poverty line, with a Human Capital Index of just 0.41. Every pressure above scales with population, not against it.',
    source: 'World Bank (2024); WIT, wit.lums.edu.pk',
  },
]
