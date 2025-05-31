import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import TransitionText from '../components/TransitionText';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 lg:pt-24 min-h-screen flex items-center">
      {/* Background overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      {/* Hero content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-2 px-4 py-1 rounded-full bg-gray-100 text-primary text-sm font-medium"
            >
              Professional Pest Control Services
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <TransitionText
                text="Effective Pest Control"
                delay={0.2}
                className="block mb-2"
              />
              <TransitionText
                text="For Your"
                delay={0.5}
                className="block mb-2"
              />
              <TransitionText
                text="Peace of Mind"
                delay={0.8}
                className="text-gradient"
              />
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-lg mb-8 text-gray-700 max-w-xl mx-auto lg:mx-0"
            >
              Protecting your home and business from unwanted pests with environmentally responsible solutions and guaranteed results.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="#contact" 
                className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md"
              >
                Get Free Inspection
              </a>
              <a 
                href="#services" 
                className="px-8 py-3 border border-gray-300 text-primary rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Explore Services
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start text-sm"
            >
              <div className="flex items-center">
                <ShieldCheck className="mr-2 text-green-600" size={20} />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="mr-2 text-green-600" size={20} />
                <span>Eco-Friendly Solutions</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="mr-2 text-green-600" size={20} />
                <span>Licensed Professionals</span>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/5749143/pexels-photo-5749143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional pest control service" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img 
                        key={i}
                        src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`} 
                        alt="Customer" 
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium">Trusted by 10,000+</div>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="ml-1 text-sm">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;