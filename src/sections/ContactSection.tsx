import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import TransitionText from '../components/TransitionText';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2 px-4 py-1 rounded-full bg-gray-100 text-primary text-sm font-medium"
          >
            Contact Us
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <TransitionText text="Get in Touch for Pest-Free Living" />
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-gray-600 text-lg">
              Reach out today for a free inspection and consultation. Our team is ready to help you achieve a pest-free environment.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Pest Control</option>
                    <option value="termite">Termite Control</option>
                    <option value="rodent">Rodent Control</option>
                    <option value="mosquito">Mosquito Control</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Tell us about your pest problem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary text-white rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">info@pestguard.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-300">123 Pest Control Ave, Bugville, PC 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="mr-3 mt-1" size={20} />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-300">Mon-Fri: 8am - 6pm</p>
                  <p className="text-gray-300">Sat: 9am - 2pm</p>
                  <p className="text-gray-300">Sun: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="font-medium mb-3">Emergency Service</h4>
              <p className="text-gray-300 mb-3">24/7 emergency service available for urgent pest situations.</p>
              <a href="tel:+1-800-123-4567" className="inline-block px-5 py-2 bg-white text-primary rounded-md font-medium hover:bg-gray-200 transition-colors">
                Call Emergency Line
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;