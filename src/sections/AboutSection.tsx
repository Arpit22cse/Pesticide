import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle } from 'lucide-react';
import TransitionText from '../components/TransitionText';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2 px-4 py-1 rounded-full bg-gray-200 text-primary text-sm font-medium"
          >
            About Us
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <TransitionText text="Your Trusted Partner in Pest Management" />
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-gray-600 text-lg mb-6">
              At PestPros, we redefine pest control with precision, professionalism, and performance. 
              We take pride in being the only service provider offering odorless treatments, 
              ensuring complete comfort with zero disruption. Whether it's termites, rodents, 
              or concealed infestations — we don’t just treat, we transform your space. 
            </p>

            <p className="text-gray-600 text-2xl font-semibold">
              Trusted across sectors and driven by a commitment to excellence, PestPros isn’t just a service — it’s a new industry standard.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield size={36} />,
              title: "Guaranteed Protection",
              description: "We stand behind our services with a 100% satisfaction guarantee. If pests return, so do we – at no additional cost."
            },
            {
              icon: <Award size={36} />,
              title: "Certified Professionals",
              description: "Our technicians are licensed, insured, and undergo continuous training to stay at the forefront of pest control techniques."
            },
            {
              icon: <CheckCircle size={36} />,
              title: "Eco-Friendly Solutions",
              description: "We use environmentally responsible products and techniques that are tough on pests but safe for your family, pets, and the planet."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md"
          >
            Schedule a Free Inspection
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;