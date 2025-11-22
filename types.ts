import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isRecommended: boolean;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}