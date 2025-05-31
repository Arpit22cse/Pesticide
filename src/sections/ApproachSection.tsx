import React from 'react';
import { motion } from 'framer-motion';
import TransitionText from '../components/TransitionText';

const ApproachSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Inspection',
      description: 'We conduct a thorough inspection of your property to identify pest problems and potential entry points.'
    },
    {
      number: '02',
      title: 'Customized Plan',
      description: 'Based on our findings, we develop a tailored treatment plan specific to your property and pest situation.'
    },
    {
      number: '03',
      title: 'Treatment',
      description: 'Our technicians implement the treatment plan using the most effective and environmentally responsible methods.'
    },
    {
      number: '04',
      title: 'Prevention',
      description: 'We provide ongoing prevention strategies and recommendations to keep pests from returning.'
    },
    {
      number: '05',
      title: 'Follow-Up',
      description: 'Regular follow-up visits ensure long-term protection and address any new concerns that may arise.'
    }
  ];

  return (
    <section id="approach" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2 px-4 py-1 rounded-full bg-gray-200 text-primary text-sm font-medium"
          >
            Our Approach
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <TransitionText text="Systematic Pest Management Process" />
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-gray-600 text-lg">
              Our proven 5-step approach ensures effective pest control with long-lasting results for your home or business.
            </p>
          </motion.div>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`w-full md:w-1/2 flex ${index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-md">
                  <div className="text-3xl font-bold text-gray-200 mb-2">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg border-4 border-white">
                {index + 1}
              </div>
              
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;