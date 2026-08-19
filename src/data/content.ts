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
      'WIT instruments snow and glacier systems in the north as the physical basis for downstream flood and water-supply risk — treating the cryosphere as the upstream end of a basin-wide system, not an isolated field site.',
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
      'Flood risk in Pakistan is a systems problem spanning canal operations, remote sensing, and basin hydrology — WIT builds the telemetry and models that connect those layers into usable forecasting and management tools.',
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
      'One integrated modelling platform where the nexus, energy, agriculture, and water sectors meet — the analytical engine behind WIT’s Integrated Climate Policy Analysis (ICPA) work.',
    overview: [
      'WIT works at the intersection of data, science, and policy to build tools that help shape a sustainable, climate-resilient future for Pakistan — an integrated modelling platform connecting energy, agriculture, water, land, and climate systems for medium- and long-term, evidence-based planning. This is the WIT work published as Integrated Climate Policy Analysis (ICPA).',
      'It runs on open-source frameworks — energy-system models (MESSAGEix), agriculture and land-use models (FABLE), and hydrological and water-resource models — linked together. That lets the team trace how a technology choice, a growth target, or a policy shift in one sector plays out in the others, and find pathways that actually meet Pakistan’s climate goals.',
    ],
    whatWeDo: [
      'Nexus — Nationally Determined Contributions (NDC) analysis, fair-share emission assessments, and adaptation pathways spanning water, energy, and land together',
      'Energy sector — MESSAGEix energy-system modelling, technology uptake analysis (solar expansion, electrification, hydrogen), decarbonization pathways',
      'Agriculture sector — food and resource security projections under climate change, agriculture supply/demand modelling',
      'Water sector — water supply/demand projections and adaptation pathways integrated with the energy and land models above',
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
      'Course: Climate Change Governance — Science, Data and Models',
      'Nexus Summit — a dialogue platform on integrated energy, water, and food management, convening government, academia, and international organizations',
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
      'Agriculture is the largest single lever on Pakistan’s water system — WIT builds low-cost sensing and decision tools sized for smallholder economics, aimed at closing the gap between water used and water actually needed.',
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
      'The instrumentation layer underneath every other theme here — WIT designs the sensor networks and telemetry that make systems-level analysis possible in places with no existing monitoring infrastructure.',
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
      'Water systems are as much social and institutional as they are physical — this theme pairs direct water-quality sensing with research on water conflict, allocation, and governance across shared basins and lake systems.',
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
    years: '2025–26',
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
    years: '2025–26',
  },
  {
    id: 'forest-app',
    name: 'Forest Health Monitoring App',
    description: 'Tracks forest health conditions from field observations.',
    project: 'Deployment of Forest Health Calculator',
    funder: 'WWF-Pakistan',
    years: '2020–21',
  },
  {
    id: 'awd-tube',
    name: 'Smart AWD Tube for Paddy Fields',
    description: 'Optimises alternate wetting-and-drying irrigation in rice paddy cultivation.',
    project: 'Water-Energy-Food Nexus: Active Demand Management of Surface Water',
    funder: 'LUMS Faculty Initiative Fund',
    years: '2019–20',
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
      'A resilient AREDN and IoT mesh network built for GLOF (glacial lake outburst flood) disaster resilience in Chitral — designed to keep working when conventional connectivity fails.',
    meta: 'ARDC · 2026–27',
  },
  {
    id: 'snow-packed-north',
    title: 'Snow-Packed North',
    domain: 'Cryosphere',
    summary:
      'Investigating the snowpack that feeds an entire country — the observational groundwork behind Pakistan’s glacier and snowmelt hydrology research.',
    meta: 'Research story',
  },
  {
    id: 'smarter-farming',
    title: 'Smarter Farming, Lower Cost',
    domain: 'Sustainable Agriculture',
    summary:
      'Reimagining precision agriculture for Pakistan — low-cost sensing and decision support built for smallholder economics, not export-farm budgets.',
    meta: 'Research story',
  },
  {
    id: 'forest-fire-ews',
    title: 'An early-warning system for forest fires',
    domain: 'Forest Fire',
    summary:
      'IoT and AI combined for early detection and response to forest fires — lessons from building a forest fire detection early-warning system in the field.',
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
    years: '2026–27',
    status: 'Ongoing',
  },
  {
    id: 'p2',
    name: 'RECONNECT',
    pi: 'Dr. Talha Manzoor',
    funder: 'Directorate-General for Climate Action (DG CLIMA)',
    years: '2026–27',
    status: 'Ongoing',
  },
  {
    id: 'p3',
    name: 'Innovations for Resilient Smallholder Production Systems in Punjab, Pakistan',
    pi: 'Dr. Abubakr Muhammad',
    funder: "Germany's Federal Ministry of Agriculture, Food and Regional Identity (BMLEH)",
    years: '2025–28',
    status: 'Ongoing',
  },
  {
    id: 'p4',
    name: 'Water Justice in Muslim Societies: A Scoping Study of Three River Basins',
    pi: 'Dr. Adeel Malik',
    funder: 'Independent Social Research Foundation (ISRF)',
    years: '2025–26',
    status: 'Ongoing',
  },
  {
    id: 'p5',
    name: 'Monitoring Distributary Canal Operations in Water Deficit Environments',
    pi: 'Dr. Hassan Jaleel',
    funder: 'Punjab Irrigation Department',
    years: '2025–26',
    status: 'Ongoing',
  },
  {
    id: 'p6',
    name: 'Low-Cost Floating Sensor Network for Monitoring Large Aquatic Environments',
    pi: 'Dr. Talha Manzoor',
    funder: 'Khalid and Mussarrat Aziz Research Grants for Planet Earth, LUMS',
    years: '2025–27',
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
    years: '2025–26',
    status: 'Ongoing',
  },
  {
    id: 'p10',
    name: 'A Robotic Solution for Digital Plant Phenotyping and Smart Farm Management',
    pi: 'Dr. Hassan Jaleel',
    funder: 'Higher Education Commission (HEC)',
    years: '2023–26',
    status: 'Ongoing',
  },
  {
    id: 'p11',
    name: 'COMMITTED: Climate Policy Assessment and Mitigation Modeling',
    pi: 'Dr. Abubakr Muhammad',
    funder: "European Commission's Directorate on Climate (DG CLIMA)",
    years: '2023–26',
    status: 'Ongoing',
  },
  {
    id: 'p12',
    name: 'Preventing Water-related Conflicts in Small Lake Systems',
    pi: 'Dr. Talha Manzoor',
    funder: 'United States Institute for Peace (USIP)',
    years: '2024–25',
    status: 'Completed',
  },
  {
    id: 'p13',
    name: 'An Intelligent Tunnel Farm Management System',
    pi: 'Dr. Hassan Jaleel',
    funder: 'LUMS Faculty Initiative Fund',
    years: '2023–24',
    status: 'Completed',
  },
  {
    id: 'p14',
    name: 'Securing Data-Driven Resilience for Ungauged Namal Valley Watershed',
    pi: 'Dr. Talha Manzoor',
    funder: 'German Academic Exchange Program (DAAD)',
    years: '2022–24',
    status: 'Completed',
  },
  {
    id: 'p15',
    name: 'Off-grid Early Warning System for GLOF Risk Reduction, Gilgit-Baltistan',
    pi: 'Dr. Abubakr Muhammad',
    funder: 'APNIC Foundation',
    years: '2023–24',
    status: 'Completed',
  },
  {
    id: 'p16',
    name: 'Improving Canal Irrigation Management Through Remote Sensing',
    pi: 'Dr. Abubakr Muhammad',
    funder: 'Asian Development Bank',
    years: '2021–23',
    status: 'Completed',
  },
  {
    id: 'p17',
    name: 'Development of Agricultural Robotics Lab',
    pi: 'Dr. Abubakr Muhammad',
    funder: 'Higher Education Commission (HEC)',
    years: '2019–22',
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
    years: '2021–22',
    status: 'Completed',
  },
  {
    id: 'p20',
    name: 'Deployment of Forest Health Calculator',
    pi: 'Dr. Mian Muhammad Awais · Dr. Abubakr Muhammad',
    funder: 'WWF-Pakistan',
    years: '2020–21',
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
}

// For-credit LUMS courses taught by WIT faculty, from /teaching-and-training.
export const courses: Course[] = [
  { code: 'SCI103', title: 'Introduction to Environmental Science', term: 'Fall 2020' },
  { code: 'SCI302 / EE5612', title: 'Socio-ecological Systems and Sustainability', term: 'Spring 2021' },
  { code: 'EE100', title: 'Engineering Laboratory — Intelligent Sustainable Systems', term: 'Spring 2021' },
  { code: 'EE568', title: 'Remote Sensing of the Environment', term: 'Spring 2023' },
  { code: 'ENV244', title: 'Modelling the Environment', term: 'Spring 2024' },
  { code: 'EE200', title: 'Sophomore Design Studio', term: 'Spring 2024' },
  { code: 'ENGG562 / ENV462', title: 'Climate Change Governance: Science, Data & Models', term: 'Fall 2025' },
]

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
  hours: 'Mon–Fri, 8:30 a.m. to 5:00 p.m.',
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
    note: 'per person per year — the internationally recognized water-scarcity threshold, and roughly where Pakistan now sits, down from a comfortable surplus at independence. The receded shoreline at Tarbela reservoir below is what that looks like in practice.',
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
    note: 'of that scarce water goes to agriculture — yet Pakistan still has one of the lowest crop yields per unit of water in the world. The water isn’t missing; the system using it is inefficient.',
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
    note: 'A large share of the grid runs on hydropower, so when rivers run low in dry years, power generation drops too — a water problem becomes an energy problem within the same season.',
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
    note: 'most climate-affected country in the world (1999–2018) while producing under 1% of global emissions. The 2022 floods alone affected 33 million people and destroyed roughly half the crops in flooded districts — a climate event that was a water event and a food event at once.',
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
    note: 'people today, projected to reach 263 million by 2050 — and roughly 22% already live below the national poverty line, with a Human Capital Index of just 0.41. Every pressure above scales with population, not against it.',
    source: 'World Bank (2024); WIT, wit.lums.edu.pk',
  },
]
