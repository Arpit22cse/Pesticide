import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations

// Define the interface for the 'service' prop
interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  details?: string[]; // Optional array of strings
  icon?: string;      // Optional icon URL
  duration?: string;  // Optional duration string (e.g., "1 hr", "3 hr")
  price?: number;     // Optional price number
}

// Define the props interface for the ServiceCard component
interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }} // Starts slightly below and invisible
      animate={{ y: 0, opacity: 1 }}  // Slides up and fades in
      transition={{ type: "spring", stiffness: 100, damping: 12 }} // A spring-like bouncy animation
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)" }} // Subtle lift and shadow on hover
      whileTap={{ scale: 0.98 }} // Slight shrink on click/tap for feedback
      className="bg-white rounded-xl shadow-lg border border-gray-300 p-6 flex flex-col items-center text-center space-y-4 cursor-pointer"
    >
      {/* Placeholder for service icon or image. */}
      {/* Example: <img src={service.icon} alt={service.name} className="w-16 h-16 mb-4" /> */}
      
      <h3 className="text-gray-900 text-xl font-bold">{service.name}</h3>
      <p className="text-gray-700 text-sm flex-grow">{service.description}</p>
      
      {service.details && service.details.length > 0 && (
        <div className="text-gray-600 text-xs mt-auto">
          <ul className="list-disc list-inside text-left">
            {service.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display Duration and Price, matching the image layout */}
      <div className="flex justify-between items-center w-full mt-4 pt-4 border-t border-gray-200">
        {service.duration && (
          <span className="text-gray-700 text-sm font-medium">
            {service.duration}
          </span>
        )}
        {service.price && (
          <span className="text-gray-900 text-lg font-bold flex items-center">
            ₹{service.price.toLocaleString('en-IN')} {/* Format price with Indian Rupee style */}
          </span>
        )}
      </div>

      {service.category && (
        <span className="text-gray-700 bg-gray-200 px-3 py-1 rounded-full text-xs font-semibold mt-4">
          {service.category}
        </span>
      )}

      {/* Book Now Button with subtle hover effect */}
      <motion.button
        className="mt-6 w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform"
        whileHover={{ backgroundColor: "#333", scale: 1.02 }} // Darker background and slight scale on hover
        whileTap={{ scale: 0.98 }} // Slight shrink on tap
        onClick={() => alert(`Booking for "${service.name}"!`)} // Replace with actual booking logic/navigation
        aria-label={`Book ${service.name} now`} // Accessibility improvement
      >
        Book Now
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
