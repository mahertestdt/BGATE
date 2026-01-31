
import { Service, DivisionType, Project, Partner } from './types';

export const DIVISIONS: { type: DivisionType; description: string; icon: string; tech: string }[] = [
  {
    type: DivisionType.CONTROL_AUTOMATION,
    description: 'BMS, DDC Panels, and Energy Management systems.',
    icon: 'fa-microchip',
    tech: 'SAUTER, SIEMENS'
  },
  {
    type: DivisionType.FIRE_SAFETY,
    description: 'UL/FM Approved Suppression, Detection, and Maintenance.',
    icon: 'fa-fire-extinguisher',
    tech: 'FSD, UL/FM Standards'
  },
  {
    type: DivisionType.SAFETY_PPE,
    description: 'Head-to-toe HSE standard gear and environmental safety.',
    icon: 'fa-helmet-safety',
    tech: 'HSE Standards'
  },
  {
    type: DivisionType.INDUSTRIAL_SERVICES,
    description: 'Cladding, Thermal Insulation, and Scaffolding.',
    icon: 'fa-industry',
    tech: 'Custom Blankets'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'bms',
    title: 'Building Automation',
    description: 'Design and assembly of DDC, PLC, and VSD panels for smart infrastructure.',
    icon: 'fa-gears',
    division: DivisionType.CONTROL_AUTOMATION,
    tech: ['Sauter', 'Siemens']
  },
  {
    id: 'fire-supp',
    title: 'Fire Suppression',
    description: 'FM200, CO2 systems, and Room Integrity Testing for high-value assets.',
    icon: 'fa-droplet',
    division: DivisionType.FIRE_SAFETY
  },
  {
    id: 'ppe-gear',
    title: 'HSE Safety Gear',
    description: 'Comprehensive personal protective equipment from head to toe.',
    icon: 'fa-vest',
    division: DivisionType.SAFETY_PPE
  },
  {
    id: 'insulation',
    title: 'Thermal Insulation',
    description: 'Specialized industrial cladding and custom insulation blankets.',
    icon: 'fa-blanket',
    division: DivisionType.INDUSTRIAL_SERVICES
  }
];

export const PROJECTS: Project[] = [
  { client: 'Saudi Aramco', title: 'Jazan Refinery Material Supply', category: 'Industrial', location: 'Jazan' },
  { client: 'SABIC', title: 'IBN ZAHR & YANPET Shutdown Support', category: 'Maintenance', location: 'Jubail/Yanbu' },
  { client: 'Makkah Reservoir', title: 'Strategic Reservoir Phase II', category: 'Infrastructure', location: 'Makkah' },
  { client: 'Riyadh City', title: 'New Feeder Pipelines Valves & Flanges', category: 'Infrastructure', location: 'Riyadh' }
];

export const PARTNERS: Partner[] = [
  { name: 'Sauter', logo: 'https://picsum.photos/seed/sauter/200/100' },
  { name: 'Siemens', logo: 'https://picsum.photos/seed/siemens/200/100' },
  { name: 'Honeywell', logo: 'https://picsum.photos/seed/honeywell/200/100' },
  { name: 'Fortinet', logo: 'https://picsum.photos/seed/forti/200/100' }
];

export const NAVIGATION = [
  { name: 'Home', href: '#' },
  { name: 'Divisions', href: '#divisions' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];
