// Placeholder content. Every figure, name, and story here is a stand-in —
// swap for verified WIT numbers before this goes anywhere near a donor.

export type ResearchDomain = {
  id: string
  label: string
  eyebrow: string
  summary: string
  metric: string
  metricLabel: string
}

export const researchDomains: ResearchDomain[] = [
  {
    id: 'cryosphere',
    label: 'Cryosphere & Glacial Hydrology',
    eyebrow: 'Karakoram · Hindu Kush',
    summary:
      'Automated weather and ablation stations on debris-covered glaciers, feeding melt models that downstream irrigation planning depends on.',
    metric: '12',
    metricLabel: 'glacier & AWS sites',
  },
  {
    id: 'floods',
    label: 'Floods & Food Security',
    eyebrow: 'Indus Basin',
    summary:
      'River-stage and rainfall telemetry driving a flood early-warning pipeline, paired with crop-loss modelling for food-security response.',
    metric: '48hr',
    metricLabel: 'lead time, flagship EWS',
  },
  {
    id: 'climate-analytics',
    label: 'Climate Analytics',
    eyebrow: 'National coverage',
    summary:
      'Downscaled climate projections and reanalysis pipelines that translate global model output into district-level decision support.',
    metric: '30yr',
    metricLabel: 'reanalysis archive',
  },
  {
    id: 'agriculture',
    label: 'Sustainable Agriculture',
    eyebrow: 'Punjab · Sindh',
    summary:
      'Soil-moisture and micro-climate sensing on smallholder plots, closing the loop between field data and irrigation advisory tools.',
    metric: '9',
    metricLabel: 'partner farms instrumented',
  },
  {
    id: 'forest-fire',
    label: 'Forest Fire Risk',
    eyebrow: 'Margalla · Northern forests',
    summary:
      'Fuel-moisture and thermal sensing combined with satellite hotspot feeds to flag fire risk before it becomes a burn scar.',
    metric: '3',
    metricLabel: 'watch stations live',
  },
  {
    id: 'digital-divide',
    label: 'Digital Divide',
    eyebrow: 'Rural connectivity',
    summary:
      'Low-bandwidth, solar-powered telemetry designed for the field conditions where most environmental data actually needs collecting.',
    metric: 'LoRa',
    metricLabel: 'primary transport layer',
  },
]

export type SensorSite = {
  id: string
  name: string
  domain: string
  x: number // position on stylised basin map, 0-100
  y: number
  parameters: string[]
  partner: string
}

export const sensorSites: SensorSite[] = [
  {
    id: 'site-hunza',
    name: 'Hunza AWS & Ablation Stake Array',
    domain: 'Cryosphere',
    x: 62,
    y: 8,
    parameters: ['Air temp', 'Snow depth', 'Ablation', 'Solar radiation'],
    partner: 'WAPDA · Local irrigation dept.',
  },
  {
    id: 'site-chitral',
    name: 'Chitral River Stage Gauge',
    domain: 'Floods',
    x: 38,
    y: 14,
    parameters: ['River stage', 'Turbidity', 'Rainfall'],
    partner: 'PDMA KP',
  },
  {
    id: 'site-indus-multan',
    name: 'Indus Mainstem — Multan Reach',
    domain: 'Floods',
    x: 46,
    y: 52,
    parameters: ['Discharge', 'River stage', 'Rainfall'],
    partner: 'Flood Forecasting Division',
  },
  {
    id: 'site-margalla',
    name: 'Margalla Hills Fire Watch',
    domain: 'Forest fire',
    x: 55,
    y: 26,
    parameters: ['Fuel moisture', 'Canopy temp', 'Wind'],
    partner: 'Islamabad Wildlife Mgmt Board',
  },
  {
    id: 'site-vehari',
    name: 'Vehari Smallholder Plots',
    domain: 'Agriculture',
    x: 44,
    y: 62,
    parameters: ['Soil moisture', 'Soil temp', 'Micro-climate'],
    partner: 'On-Farm Water Mgmt, Punjab',
  },
  {
    id: 'site-thar',
    name: 'Tharparkar Drought Monitor',
    domain: 'Climate analytics',
    x: 58,
    y: 82,
    parameters: ['Rainfall', 'Soil moisture', 'Air temp'],
    partner: 'Sindh Agriculture Dept.',
  },
]

export type ImpactStory = {
  id: string
  title: string
  domain: string
  summary: string
  stat: string
  statLabel: string
}

export const impactStories: ImpactStory[] = [
  {
    id: 'flood-ews',
    title: 'A flood early-warning chain for the Indus',
    domain: 'Floods & Food Security',
    summary:
      'Telemetered gauges upstream feed a forecasting model that pushes district-level alerts ahead of peak flow — built after the 2022 monsoon floods exposed how thin the existing gauge network was.',
    stat: '48hr',
    statLabel: 'average warning lead time',
  },
  {
    id: 'glacier-network',
    title: 'Instrumenting glaciers no one else was watching',
    domain: 'Cryosphere',
    summary:
      'Solar-powered AWS units on debris-covered ice in the Karakoram, built to survive winters that destroy conventional field equipment, now feeding melt-runoff estimates into irrigation planning.',
    stat: '12',
    statLabel: 'stations across 3 valleys',
  },
  {
    id: 'farm-sensing',
    title: 'Sensor networks smallholders can actually use',
    domain: 'Sustainable Agriculture',
    summary:
      'Low-cost soil-moisture arrays paired with an SMS advisory layer, co-designed with farmers rather than dropped onto their fields.',
    stat: '9',
    statLabel: 'partner farms, 3 growing seasons',
  },
]

export type Project = {
  id: string
  name: string
  domain: string
  donor: string
  years: string
  scope: string
  status: 'Active' | 'Completed'
}

export const projects: Project[] = [
  {
    id: 'p1',
    name: 'Indus Flood Early Warning System',
    domain: 'Floods & Food Security',
    donor: 'World Bank',
    years: '2023–2026',
    scope: 'National',
    status: 'Active',
  },
  {
    id: 'p2',
    name: 'Karakoram Glacier Mass Balance Network',
    domain: 'Cryosphere',
    donor: 'HEC / ICIMOD',
    years: '2021–2025',
    scope: 'Regional (GB)',
    status: 'Active',
  },
  {
    id: 'p3',
    name: 'Smallholder Irrigation Advisory Pilot',
    domain: 'Sustainable Agriculture',
    donor: 'USAID',
    years: '2022–2024',
    scope: 'District (Vehari)',
    status: 'Completed',
  },
  {
    id: 'p4',
    name: 'Downscaled Climate Projections for Punjab',
    domain: 'Climate Analytics',
    donor: 'Punjab P&D Dept.',
    years: '2020–2022',
    scope: 'Provincial',
    status: 'Completed',
  },
  {
    id: 'p5',
    name: 'Margalla Forest Fire Risk Sensing',
    domain: 'Forest Fire',
    donor: 'GIZ',
    years: '2024–present',
    scope: 'Site (Islamabad)',
    status: 'Active',
  },
  {
    id: 'p6',
    name: 'Low-Bandwidth Telemetry for Rural Sensing',
    domain: 'Digital Divide',
    donor: 'IDRC',
    years: '2023–2025',
    scope: 'Multi-site',
    status: 'Active',
  },
]

export type Training = {
  id: string
  title: string
  format: string
  audience: string
  summary: string
}

export const trainings: Training[] = [
  {
    id: 't1',
    title: 'Flood Forecasting with Open Hydrological Models',
    format: '5-day workshop',
    audience: 'Government hydrologists, PDMAs',
    summary:
      'Hands-on with HEC-HMS/RAS and telemetry data pipelines, using real Indus tributary datasets from WIT deployments.',
  },
  {
    id: 't2',
    title: 'Field Sensor Deployment & Maintenance',
    format: '3-day field course',
    audience: 'Technicians, field staff',
    summary:
      'Installing, calibrating, and troubleshooting AWS, river-stage, and soil-moisture instruments in the field — not the classroom.',
  },
  {
    id: 't3',
    title: 'Remote Sensing for Water Resource Managers',
    format: '2-day course',
    audience: 'Irrigation & agriculture depts.',
    summary:
      'Satellite-derived soil moisture, snow cover, and evapotranspiration products applied to real basin management questions.',
  },
  {
    id: 't4',
    title: 'Data Pipelines for Environmental Telemetry',
    format: 'Custom, 2–10 days',
    audience: 'Partner research teams',
    summary:
      'Ingesting, QA/QC-ing, and serving sensor data at scale — the plumbing behind every WIT dashboard, taught so partners can run their own.',
  },
]

export type Person = {
  id: string
  name: string
  title: string
  focus: string
  fieldId: string
}

export const people: Person[] = [
  {
    id: 'pe1',
    name: 'Dr. [Director Name]',
    title: 'Director, WIT Lab',
    focus: 'Hydrology · water resource policy',
    fieldId: 'PI-01',
  },
  {
    id: 'pe2',
    name: '[Name]',
    title: 'Lead, Cryosphere Research',
    focus: 'Glacial mass balance, remote sensing',
    fieldId: 'PI-02',
  },
  {
    id: 'pe3',
    name: '[Name]',
    title: 'Lead, Flood Systems',
    focus: 'Hydrological modelling, early warning',
    fieldId: 'PI-03',
  },
  {
    id: 'pe4',
    name: '[Name]',
    title: 'Lead, Field Instrumentation',
    focus: 'Sensor networks, embedded systems',
    fieldId: 'PI-04',
  },
  {
    id: 'pe5',
    name: '[Name]',
    title: 'Lead, Agriculture & Digital Divide',
    focus: 'Smallholder tech, low-bandwidth telemetry',
    fieldId: 'PI-05',
  },
  {
    id: 'pe6',
    name: '[Name]',
    title: 'Research Associate',
    focus: 'Climate analytics, data pipelines',
    fieldId: 'RA-06',
  },
]

export const partners: string[] = [
  'WAPDA',
  'PDMA KP',
  'Flood Forecasting Division',
  'ICIMOD',
  'USAID',
  'World Bank',
  'GIZ',
  'IDRC',
  'Punjab P&D Dept.',
  'Sindh Agriculture Dept.',
]
