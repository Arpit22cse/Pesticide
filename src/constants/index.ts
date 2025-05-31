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
    title: "Residential Pest Control",
    description: "Comprehensive pest management solutions to keep your home pest-free and your family safe.",
    icon: "home",
  },
  {
    id: 2,
    title: "Commercial Pest Control",
    description: "Tailored pest control programs for businesses, ensuring compliance and protecting your reputation.",
    icon: "building-2",
  },
  {
    id: 3,
    title: "Termite Treatment",
    description: "Specialized termite inspection, prevention, and treatment to protect your property from damage.",
    icon: "bug",
  },
  {
    id: 4,
    title: "Rodent Control",
    description: "Effective rodent removal and prevention strategies to keep mice and rats away from your property.",
    icon: "mouse",
  },
  {
    id: 5,
    title: "Mosquito Control",
    description: "Targeted treatments to reduce mosquito populations and create a more comfortable outdoor environment.",
    icon: "zap",
  },
  {
    id: 6,
    title: "Bed Bug Elimination",
    description: "Comprehensive bed bug detection and elimination services using the latest techniques.",
    icon: "bed",
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