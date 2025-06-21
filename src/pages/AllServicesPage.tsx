import React, { useState, useMemo } from 'react';// Ensure this path is correct
import ServiceCard from '../components/Service'; // Corrected import path for ServiceCard
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Define the interface for the Service structure within SERVICES_DATA
interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  details?: string[];
  icon?: string;
  duration?: string;
  price?: number;
}

// --- Mock Services Data ---
const SERVICES_DATA: Service[] = [
  {
    id: 's1',
    name: 'Residential Pest Control (Standard)',
    description: 'Comprehensive treatment for common household pests including ants, cockroaches, spiders, and silverfish. Enjoy a pest-free home!',
    category: 'General Pest Control',
    details: ['Eco-friendly solutions', 'Single visit or annual plans', 'Safe for children & pets', 'Guaranteed effectiveness'],
    icon: 'https://placehold.co/64x64/E0E0E0/333333?text=Home', // Light gray icon
    duration: '1 hr 30 min',
    price: 1200,
  },
  {
    id: 's2',
    name: 'Termite Control (Pre-Construction)',
    description: 'Protect your new construction from subterranean termites with our effective barrier treatment. Essential for long-term structural integrity.',
    category: 'Termite Control',
    details: ['Long-lasting protection', 'Compliant with safety standards', 'Prevents future infestations', 'Certified technicians'],
    icon: 'https://placehold.co/64x64/C0C0C0/333333?text=PreCon',
    duration: '3 hr',
    price: 8500,
  },
  {
    id: 's3',
    name: 'Termite Control (Post-Construction)',
    description: 'Eradicate existing termite colonies and prevent re-infestation in your established property. We tackle the problem head-on.',
    category: 'Termite Control',
    details: ['Drill-fill method', 'Minimal disruption to property', 'Guaranteed results', 'Post-treatment inspection'],
    icon: 'https://placehold.co/64x64/A0A0A0/333333?text=PostCon',
    duration: '2 hr 30 min',
    price: 6500,
  },
  {
    id: 's4',
    name: 'Cockroach Extermination (Residential)',
    description: 'Targeted treatments to eliminate stubborn cockroach infestations in homes, ensuring a hygienic and comfortable environment for your family.',
    category: 'General Pest Control',
    details: ['Gel baiting method', 'Spraying treatments for severe cases', 'Follow-up visits included'],
    icon: 'https://placehold.co/64x64/E8E8E8/333333?text=Roach',
    duration: '1 hr',
    price: 800,
  },
  {
    id: 's5',
    name: 'Rodent Control (Residential)',
    description: 'Integrated pest management strategies to humanely and effectively remove rats and mice from your residential premises. We seal entry points.',
    category: 'General Pest Control',
    details: ['Secure bait stations', 'Non-toxic trapping methods', 'Exclusion methods to prevent re-entry'],
    icon: 'https://placehold.co/64x64/D0D0D0/333333?text=Rodent',
    duration: '2 hr',
    price: 1500,
  },
  {
    id: 's6',
    name: 'Commercial Pest Control (Restaurants)',
    description: 'Specialized pest management programs for restaurants and food service establishments, adhering strictly to health codes and food safety regulations.',
    category: 'Commercial Pest Control',
    details: ['HACCP compliance', 'Discreet and scheduled service', 'Regular monitoring & reporting'],
    icon: 'https://placehold.co/64x64/B0B0B0/333333?text=Resto',
    duration: '1 hr 30 min',
    price: 3500,
  },
  {
    id: 's7',
    name: 'Commercial Pest Control (Offices)',
    description: 'Tailored pest control solutions for office buildings, ensuring a comfortable, hygienic, and professional environment for employees and clients.',
    category: 'Commercial Pest Control',
    details: ['Minimal disruption during work hours', 'Flexible scheduling options', 'Integrated pest management plans'],
    icon: 'https://placehold.co/64x64/909090/333333?text=Office',
    duration: '1 hr',
    price: 2500,
  },
  {
    id: 's8',
    name: 'Mosquito Control (Outdoor/Residential)',
    description: 'Larvicidal and adulticidal treatments to significantly reduce mosquito populations around residential properties, allowing you to enjoy your outdoor spaces.',
    category: 'General Pest Control',
    details: ['Targeted fogging', 'Larvicide application to breeding sites', 'Source reduction advice for homeowners'],
    icon: 'https://placehold.co/64x64/F0F0F0/333333?text=Mosq',
    duration: '1 hr 15 min',
    price: 900,
  },
  {
    id: 's9',
    name: 'Bed Bug Treatment (Intensive)',
    description: 'Intensive, multi-phase treatments to eliminate stubborn bed bugs from mattresses, furniture, and crevices in homes. We ensure complete eradication.',
    category: 'General Pest Control', 
    details: ['Advanced heat treatment methods', 'Strategic chemical application', 'Multiple follow-up sessions for assurance'],
    icon: 'https://placehold.co/64x64/C8C8C8/333333?text=BedBug',
    duration: '3 hr',
    price: 4500,
  },
  {
    id: 's10',
    name: 'Integrated Pest Management (IPM)',
    description: 'A holistic and environmentally responsible approach to pest control, focusing on long-term prevention, monitoring, and minimal pesticide use.',
    category: 'General Pest Control',
    details: ['Thorough inspection & identification', 'Biological and cultural controls', 'Habitat modification for pest prevention'],
    icon: 'https://placehold.co/64x64/E5E5E5/333333?text=IPM',
    duration: '2 hr',
    price: 1800,
  },
];

// Framer Motion variants for staggered appearance of service cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child (ServiceCard) animation
    },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } }, // Fade out container on exit
};

// Framer Motion variants for individual service cards
const itemVariants = {
  hidden: { y: 30, opacity: 0 }, // Start slightly below and invisible
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }, // Spring animation for bounce effect
};

const AllServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Services');

  // Use useMemo to filter services, re-calculating only when selectedCategory changes
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'All Services' || selectedCategory === 'Our Services') {
      return SERVICES_DATA;
    }
    return SERVICES_DATA.filter(service => service.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-200 text-gray-900 font-inter antialiased flex flex-col">
      

      <main className="flex-grow max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 w-full" id="all-services-main-content">
        {/* Animated Page Title */}
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-6 mt-4 sm:mt-8
                     text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 tracking-tight leading-tight select-none">
          Our Comprehensive Services
        </motion.h1>
        
        {/* Animated Subtitle Paragraph */}
        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
          Explore the full range of professional pest management solutions we offer to ensure your peace of mind and a pest-free environment.
        </motion.p>

        {/* Category Navigation/Filter Buttons with Hover & Tap Animations */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All Services', 'Our Services', 'Termite Control', 'General Pest Control', 'Commercial Pest Control'].map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ scale: 1.07, boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)" }} // Subtle shadow glow on hover
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out
                          ${selectedCategory === category
                            ? 'bg-gray-800 text-white shadow-xl transform scale-105 border border-gray-700' // Selected button style
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900 border border-gray-300' // Unselected button style
                          } focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100`}
              aria-pressed={selectedCategory === category} // Accessibility
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Services Grid with AnimatePresence for smooth transitions between categories */}
        <AnimatePresence mode="wait">
          {filteredServices.length > 0 ? (
            <motion.div
              key={selectedCategory} // Key changes to re-trigger animations on category change
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            >
              {filteredServices.map(service => (
                <motion.div key={service.id} variants={itemVariants}>
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Message when no services are found for the selected category
            <motion.div
              key="no-services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-gray-700 text-xl py-12"
            >
              No services found for "{selectedCategory}". Please select another category.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-gray-800 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 transform hover:scale-105"
            aria-label="Back to Home Page"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <footer className="text-center py-6 text-gray-600 select-none mt-auto">
        &copy; {new Date().getFullYear()} PestPro Solutions. All rights reserved.
      </footer>
    </div>
  );
};

export default AllServicesPage;