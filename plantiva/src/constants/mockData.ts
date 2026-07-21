import { C } from './designSystem';

export interface ServiceItem {
  id: number;
  name: string;
  desc: string;
  price: number;
  duration: string;
  icon: string;
  includes: string[];
}

export interface PlantItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  category: string;
  light: string;
  tags: string[];
  rating: number;
  reviews: number;
  stock: boolean;
}

export interface PlanItem {
  id: number;
  name: string;
  price: number;
  visits: number;
  features: string[];
  popular: boolean;
  color: string;
}

export const SERVICES: ServiceItem[] = [
  { id: 1, name: "Plant Wellness Visit", desc: "Comprehensive health check & personalized care plan", price: 299, duration: "45–60 mins", icon: "🌿", includes: ["Plant health check", "Soil condition check", "Watering & nutrition advice", "Pest & disease inspection", "Placement guidance"] },
  { id: 2, name: "Plant Spa", desc: "Deep cleaning, pruning, pot cleaning & grooming", price: 399, duration: "60–90 mins", icon: "🪴", includes: ["Full plant cleaning", "Leaf shine treatment", "Pot & soil refresh", "Pruning & shaping"] },
  { id: 3, name: "Leaf Cleaning", desc: "Remove dust, clean leaves and improve photosynthesis", price: 199, duration: "30–45 mins", icon: "🍃", includes: ["Leaf dusting", "Leaf shine spray", "Basic health check"] },
  { id: 4, name: "Holiday Care", desc: "We take care of your plants while you're away", price: 499, duration: "Per visit", icon: "✈️", includes: ["Watering schedule", "Health monitoring", "Emergency care", "Photo updates"] },
  { id: 5, name: "Plant Revival", desc: "Special care for sick or nearly dead plants", price: 599, duration: "90–120 mins", icon: "💚", includes: ["Root inspection", "Soil replacement", "Nutrient treatment", "Recovery plan"] },
  { id: 6, name: "Consultation", desc: "Expert advice for your indoor garden", price: 149, duration: "30 mins", icon: "💬", includes: ["Expert Q&A", "Plant recommendations", "Care calendar", "Written tips"] },
];

export const PLANTS: PlantItem[] = [
  { id: 1, name: "Areca Palm", price: 499, originalPrice: 699, category: "Indoor Plants", light: "Bright Light", tags: ["Air Purifying", "Low Maintenance", "Pet Friendly"], rating: 4.7, reviews: 59, stock: true },
  { id: 2, name: "Snake Plant", price: 399, originalPrice: 499, category: "Indoor Plants", light: "Low Light", tags: ["Air Purifying", "Low Maintenance"], rating: 4.5, reviews: 112, stock: true },
  { id: 3, name: "Peace Lily", price: 499, originalPrice: 599, category: "Indoor Plants", light: "Low Light", tags: ["Air Purifying", "Flowering"], rating: 4.3, reviews: 78, stock: true },
  { id: 4, name: "ZZ Plant", price: 449, originalPrice: 549, category: "Indoor Plants", light: "Low Light", tags: ["Low Maintenance", "Succulent"], rating: 4.6, reviews: 45, stock: true },
  { id: 5, name: "Rubber Plant", price: 599, originalPrice: 799, category: "Balcony Plants", light: "Bright Light", tags: ["Air Purifying", "Large"], rating: 4.4, reviews: 33, stock: false },
  { id: 6, name: "Money Plant", price: 109, originalPrice: 149, category: "Indoor Plants", light: "Medium Light", tags: ["Easy Care", "Trailing"], rating: 4.8, reviews: 200, stock: true },
];

export const PLANS: PlanItem[] = [
  { id: 1, name: "Green Basic", price: 599, visits: 2, features: ["2 Visits / Month", "Basic Benefits", "Email Support"], popular: false, color: C.accentPale },
  { id: 2, name: "Green Plus", price: 999, visits: 4, features: ["4 Visits / Month", "All Basic Benefits", "Leaf Cleaning", "10% Off on Store", "WhatsApp Support"], popular: true, color: C.primary },
  { id: 3, name: "Green Premium", price: 1499, visits: 4, features: ["4 Visits / Month", "All Premium Benefits", "Priority Support", "Advanced Care", "Free Plant Monthly"], popular: false, color: C.accentPale },
];
