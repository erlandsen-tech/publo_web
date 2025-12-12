export interface WaitlistFormData {
  email: string;
  name?: string;
}

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
