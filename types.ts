
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  division: DivisionType;
  tech?: string[];
}

export enum DivisionType {
  CONTROL_AUTOMATION = 'Control & Automation',
  FIRE_SAFETY = 'Fire Safety (FSD)',
  SAFETY_PPE = 'Safety (PPE)',
  INDUSTRIAL_SERVICES = 'Industrial Services'
}

export interface Project {
  client: string;
  title: string;
  category: string;
  location: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
