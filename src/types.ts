export type Language = 'en' | 'hi' | 'bn';

export interface FocusProgram {
  id: string;
  title: string;
  hindiTitle: string;
  bengaliTitle?: string;
  category: string;
  tagline: string;
  bengaliTagline?: string;
  description: string;
  bengaliDescription?: string;
  keyHighlights: string[];
  beneficiariesServed: string;
  activeVillages: number;
  imageUrl: string;
  urgencyLevel?: 'normal' | 'high' | 'critical';
  sponsorAmountMonthly: number;
  sponsorDescription: string;
}

export interface Campaign {
  id: string;
  title: string;
  category: string;
  description: string;
  targetAmount: number;
  raisedAmount: number;
  donorCount: number;
  daysRemaining: number;
  imageUrl: string;
  location: string;
  isUrgent?: boolean;
  bengaliTitle?: string;
  bengaliDescription?: string;
}

export interface ImpactStory {
  id: string;
  name: string;
  age: number;
  village: string;
  program: string;
  headline: string;
  quote: string;
  story: string;
  beforeState: string;
  afterState: string;
  imageUrl: string;
  year: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'education' | 'healthcare' | 'women' | 'wash' | 'environment' | 'relief';
  location: string;
  date: string;
  imageUrl: string;
  caption: string;
}

export interface DonationRecord {
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  donorPan: string;
  donorAddress: string;
  amount: number;
  frequency: 'once' | 'monthly';
  campaign: string;
  paymentMethod: 'upi' | 'card' | 'netbanking' | 'bank_transfer';
  date: string;
  receiptNumber: string;
  taxExemptionClaimed: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  expectedBeneficiaries: string;
  coordinator: string;
}

export interface FAQItem {
  question: string;
  hindiQuestion?: string;
  bengaliQuestion?: string;
  answer: string;
  bengaliAnswer?: string;
  category: 'donation' | 'tax80g' | 'programs' | 'volunteer';
}
