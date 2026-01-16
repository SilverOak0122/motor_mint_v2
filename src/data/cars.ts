import carTeslaS from "@/assets/car-tesla-s.jpg";
import carPorscheGt3 from "@/assets/car-porsche-gt3.jpg";
import carPorscheTaycan from "@/assets/car-porsche-taycan.jpg";
import carRollsCullinan from "@/assets/car-rolls-cullinan.jpg";
import carFerrariSf90 from "@/assets/car-ferrari-sf90.jpg";
import carTeslaX from "@/assets/car-tesla-x.jpg";

export interface Car {
  id: string;
  name: string;
  brand: string;
  year: number;
  priceUSD: number;
  priceMOTO: number;
  type: 'EV' | 'Sport' | 'Luxury' | 'SUV';
  image: string;
  healthScore: number;
  mileage: number;
  horsepower: number;
  range?: number;
  drivetrain: string;
  color: string;
  ownersCount: number;
  lastMaintenance: string;
  isFraudulent: boolean;
  maintenanceHistory: {
    date: string;
    type: string;
    description: string;
    verified: boolean;
  }[];
  ownershipHistory: {
    date: string;
    owner: string;
    txHash: string;
  }[];
  aiPredictions: {
    type: string;
    probability: number;
    timeframe: string;
    description: string;
  }[];
}

export const cars: Car[] = [
  {
    id: "car-001",
    name: "Model S Plaid",
    brand: "Tesla",
    year: 2024,
    priceUSD: 89990,
    priceMOTO: 4500,
    type: "EV",
    image: carTeslaS,
    healthScore: 98,
    mileage: 12500,
    horsepower: 1020,
    range: 396,
    drivetrain: "AWD",
    color: "Pearl White",
    ownersCount: 1,
    lastMaintenance: "2024-11-15",
    isFraudulent: false,
    maintenanceHistory: [
      { date: "2024-11-15", type: "Tire Rotation", description: "All-season tire rotation and alignment check", verified: true },
      { date: "2024-08-20", type: "Software Update", description: "FSD Beta v12.5 installed", verified: true },
      { date: "2024-05-10", type: "Brake Inspection", description: "Brake pads at 85% life remaining", verified: true },
    ],
    ownershipHistory: [
      { date: "2024-01-15", owner: "0x7a2F...9c4D", txHash: "0xabc...123" },
    ],
    aiPredictions: [
      { type: "Battery Health", probability: 95, timeframe: "12 months", description: "Battery expected to retain 95%+ capacity" },
      { type: "Tire Replacement", probability: 40, timeframe: "6 months", description: "Consider tire replacement based on current wear" },
    ],
  },
  {
    id: "car-002",
    name: "911 GT3 RS",
    brand: "Porsche",
    year: 2024,
    priceUSD: 241300,
    priceMOTO: 12065,
    type: "Sport",
    image: carPorscheGt3,
    healthScore: 94,
    mileage: 3200,
    horsepower: 518,
    drivetrain: "RWD",
    color: "GT Silver",
    ownersCount: 2,
    lastMaintenance: "2024-10-28",
    isFraudulent: false,
    maintenanceHistory: [
      { date: "2024-10-28", type: "Track Prep", description: "Full track preparation service", verified: true },
      { date: "2024-07-15", type: "Oil Change", description: "Synthetic oil change with filter", verified: true },
    ],
    ownershipHistory: [
      { date: "2024-06-01", owner: "0x3bE1...7f2A", txHash: "0xdef...456" },
      { date: "2023-09-20", owner: "0x9cD4...2e8B", txHash: "0xghi...789" },
    ],
    aiPredictions: [
      { type: "Engine Health", probability: 92, timeframe: "24 months", description: "Flat-6 engine in excellent condition" },
      { type: "Clutch Wear", probability: 25, timeframe: "18 months", description: "Clutch showing normal wear patterns" },
    ],
  },
  {
    id: "car-003",
    name: "Taycan Turbo S",
    brand: "Porsche",
    year: 2024,
    priceUSD: 187400,
    priceMOTO: 9370,
    type: "EV",
    image: carPorscheTaycan,
    healthScore: 96,
    mileage: 8900,
    horsepower: 750,
    range: 280,
    drivetrain: "AWD",
    color: "Frozen Blue",
    ownersCount: 1,
    lastMaintenance: "2024-12-01",
    isFraudulent: false,
    maintenanceHistory: [
      { date: "2024-12-01", type: "Annual Service", description: "Complete annual inspection", verified: true },
      { date: "2024-06-15", type: "Brake Fluid", description: "Brake fluid flush", verified: true },
    ],
    ownershipHistory: [
      { date: "2024-02-10", owner: "0x5eF2...1a9C", txHash: "0xjkl...012" },
    ],
    aiPredictions: [
      { type: "Battery Degradation", probability: 98, timeframe: "36 months", description: "Minimal degradation expected" },
    ],
  },
  {
    id: "car-004",
    name: "Cullinan",
    brand: "Rolls-Royce",
    year: 2023,
    priceUSD: 348500,
    priceMOTO: 17425,
    type: "Luxury",
    image: carRollsCullinan,
    healthScore: 99,
    mileage: 4500,
    horsepower: 563,
    drivetrain: "AWD",
    color: "Black Diamond",
    ownersCount: 1,
    lastMaintenance: "2024-09-20",
    isFraudulent: false,
    maintenanceHistory: [
      { date: "2024-09-20", type: "Full Detail", description: "Complete interior and exterior detailing", verified: true },
      { date: "2024-03-10", type: "Oil Service", description: "Synthetic oil change", verified: true },
    ],
    ownershipHistory: [
      { date: "2023-05-15", owner: "0x8aB3...4d5E", txHash: "0xmno...345" },
    ],
    aiPredictions: [
      { type: "Air Suspension", probability: 88, timeframe: "48 months", description: "Air suspension system healthy" },
    ],
  },
  {
    id: "car-005",
    name: "SF90 Stradale",
    brand: "Ferrari",
    year: 2024,
    priceUSD: 524815,
    priceMOTO: 26241,
    type: "Sport",
    image: carFerrariSf90,
    healthScore: 97,
    mileage: 1800,
    horsepower: 986,
    range: 16,
    drivetrain: "AWD",
    color: "Rosso Corsa",
    ownersCount: 1,
    lastMaintenance: "2024-11-01",
    isFraudulent: false,
    maintenanceHistory: [
      { date: "2024-11-01", type: "7-Year Service", description: "Comprehensive 7-year maintenance package", verified: true },
    ],
    ownershipHistory: [
      { date: "2024-03-01", owner: "0x2fC7...8b1D", txHash: "0xpqr...678" },
    ],
    aiPredictions: [
      { type: "Hybrid System", probability: 96, timeframe: "60 months", description: "Hybrid powertrain performing optimally" },
    ],
  },
  {
    id: "car-006",
    name: "Model X Plaid",
    brand: "Tesla",
    year: 2024,
    priceUSD: 94990,
    priceMOTO: 4750,
    type: "SUV",
    image: carTeslaX,
    healthScore: 91,
    mileage: 28000,
    horsepower: 1020,
    range: 348,
    drivetrain: "AWD",
    color: "Midnight Silver",
    ownersCount: 2,
    lastMaintenance: "2024-10-05",
    isFraudulent: false,
    maintenanceHistory: [
      { date: "2024-10-05", type: "Suspension Check", description: "Adaptive air suspension inspection", verified: true },
      { date: "2024-04-20", type: "Tire Replacement", description: "New all-season tires installed", verified: true },
    ],
    ownershipHistory: [
      { date: "2024-08-15", owner: "0x6dA9...3c2F", txHash: "0xstu...901" },
      { date: "2024-01-10", owner: "0x4bE6...9a7C", txHash: "0xvwx...234" },
    ],
    aiPredictions: [
      { type: "Falcon Wing Doors", probability: 85, timeframe: "24 months", description: "Door mechanisms functioning well" },
      { type: "Battery Range", probability: 89, timeframe: "12 months", description: "Range may decrease 3-5% with usage" },
    ],
  },
];
