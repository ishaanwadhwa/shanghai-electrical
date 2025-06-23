import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="40" height="40" rx="8" fill="#2C3E91" fillOpacity="0.1"/>
        <path d="M20 13V27M13 20H27" stroke="#2C3E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "In-House Quality Control",
    paragraph:
      "Direct manufacturer with in-house quality control and advanced processing technologies.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="40" height="40" rx="8" fill="#2C3E91" fillOpacity="0.1"/>
        <path d="M20 13V27M13 20H27" stroke="#2C3E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Strategic Alliances",
    paragraph:
      "Strategic alliances with world-class steel mills like Baosteel, Shougang Group, and TISCO.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="40" height="40" rx="8" fill="#2C3E91" fillOpacity="0.1"/>
        <path d="M20 13V27M13 20H27" stroke="#2C3E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Large Production Capacity",
    paragraph:
      "Large production capacity with fast turnaround, competitive pricing, and flexible MOQs.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="40" height="40" rx="8" fill="#2C3E91" fillOpacity="0.1"/>
        <path d="M20 13V27M13 20H27" stroke="#2C3E91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Global Logistics",
    paragraph:
      "Export-friendly packaging, reliable logistics, and responsive pre- and post-sales support.",
  },
];

export default featuresData;
