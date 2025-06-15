import { NavItem, Service, Testimonial } from "../types";

export const SITE_NAME = "Pestside";
export const SITE_DESCRIPTION = "Professional pest control services for your home and business";

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Termite Treatment",
    description: "Specialized termite inspection, prevention, and treatment to protect your property from damage.",
    icon: "bug", // Assuming 'bug' icon for termites
  },
  {
    id: 2,
    title: "Rodent Control",
    description: "Effective rodent removal and prevention strategies to keep mice and rats away from your property.",
    icon: "mouse", // 'mouse' icon for rodents
  },
  {
    id: 3,
    title: "Beehive Removal",
    description: "Safe and humane removal of beehives and nests, preventing stings and structural damage.",
    icon: "bee", // Assuming 'bee' or similar icon for beehives
  },
  {
    id: 4,
    title: "Mosquito Control",
    description: "Targeted treatments to reduce mosquito populations and create a more comfortable outdoor environment.",
    icon: "zap", // 'zap' icon for mosquitoes
  },
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Pestside completely eliminated our ant problem. The technician was professional, thorough, and explained everything clearly. Highly recommend!",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Restaurant Owner",
    content: "As a restaurant owner, pest control is critical. Pestside provides reliable, discreet service that keeps our establishment pest-free. Their preventative approach has saved us from potential issues.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 3,
    name: "Jennifer Smith",
    role: "Property Manager",
    content: "Managing multiple properties requires dependable service partners. Pestside consistently delivers excellent results across all our buildings. Their communication and scheduling are impeccable.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

export const SERVICE_OPTIONS = [
  "Residential Pest Control",
  "Commercial Pest Control",
  "Termite Treatment",
  "Rodent Control",
  "Mosquito Control",
  "Bed Bug Elimination",
  "Other",
];