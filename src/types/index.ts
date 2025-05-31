// Define types for our application

export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}