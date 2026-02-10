
export type Page = 'home' | 'services' | 'marketplace' | 'about' | 'contact';

export interface NavItem {
  label: string;
  id: Page;
}

export interface ServiceDetail {
  id: string;
  title: string;
  problem: string;
  approach: string;
  outcome: string;
  icon: string;
}

export interface AutomationProduct {
  id: string;
  name: string;
  description: string;
  features: string[];
  techStack: string[];
  pricing: {
    tier: string;
    price: string;
    billing: string;
  };
}
