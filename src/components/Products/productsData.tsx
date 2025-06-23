import { Feature } from "@/types/feature";

const productsData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="40" height="40" rx="8" fill="#2C3E91" fillOpacity="0.1"/>
        <path d="M20 13V27M13 20H27" stroke="#2C3E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Grain-Oriented Electrical Steel (CRGO)",
    paragraph:
      "Available in coil, strip, and sheet form. Suitable for transformers and power equipment. Includes laser domain refined and high-induction grades. Popular Grades: 23Q110, 27Q120, 30GK100.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="40" height="40" rx="8" fill="#2C3E91" fillOpacity="0.1"/>
        <path d="M20 13V27M13 20H27" stroke="#2C3E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Non-Grain-Oriented Electrical Steel (CRNGO)",
    paragraph:
      "Ideal for motors, compressors, and appliances. Offers low iron loss and high magnetic permeability. Excellent mechanical tolerance. Popular Grades: 50W600, 35W270, 25WP1500.",
  },
];

export default productsData; 