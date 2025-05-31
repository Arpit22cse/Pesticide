import React from 'react';
import { Bug, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { NAV_ITEMS, SITE_NAME } from '../../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Bug size={32} className="text-green-500" />
              <span className="ml-2 text-xl font-bold">{SITE_NAME}</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional pest control services for your home and business. We're committed to keeping your spaces pest-free with eco-friendly solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-green-500 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>contact@pestside.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>123 Pest Control St, City, State 12345</span>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
              <li className="mt-4 text-green-500 font-medium">
                24/7 Emergency Services Available
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;