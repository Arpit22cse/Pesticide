import React from 'react';
import { motion } from 'framer-motion';
import TransitionText from '../components/TransitionText';
import { History, Users, ShieldCheck, Trophy, CloudOff } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      icon: <History size={28} />, // Icon for expertise
      title: 'Over Two Decades of Expertise',
      description: 'Harnessing 20+ years of industry mastery to guarantee excellence.'
    },
    {
      icon: <Users size={28} />, // Icon for skilled technicians
      title: 'Highly Skilled Technicians',
      description: 'Our professionals are committed to swift, precise, and effective solutions.'
    },
    {
      icon: <ShieldCheck size={28} />, // Icon for warranty
      title: 'Comprehensive One-Year Warranty',
      description: 'Pests return within a year? We’ll promptly retreat your space at no extra cost.'
    },
    {
      icon: <Trophy size={28} />, // Icon for proven track record
      title: 'Proven Track Record',
      description: 'Trusted by a diverse clientele for delivering consistent, superior results.'
    },
    {
      icon: <CloudOff size={28} />, // Changed icon for odorless treatments
      title: 'Odorless Treatments',
      description: 'Delivering discreet, chemical-free pest control for unparalleled comfort.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2 px-4 py-1 rounded-full bg-gray-100 text-primary text-sm font-medium"
          >
            Why Choose Us
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <TransitionText text="The Preferred Choice for Pest Control" />
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-gray-600 text-lg">
              Discover why thousands of homeowners and businesses trust us for their pest management needs.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-primary mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gray-100 p-8 rounded-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-gray-600">Schedule your free inspection today.</p>
            </div>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md"
            >
              Contact Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;