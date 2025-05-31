import React from 'react';
import Section from '../ui/Section';
import { Shield, Award, Users, LeafyGreen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Pestside</h2>
          <p className="text-gray-300 mb-6">
            At Pestside, we've been protecting homes and businesses from unwanted pests for over 15 years. 
            Our team of certified pest control experts is dedicated to providing safe, effective, and 
            environmentally responsible solutions for all your pest management needs.
          </p>
          <p className="text-gray-300 mb-8">
            We understand that every pest situation is unique, which is why we take a customized approach 
            to each client. Our comprehensive inspections, targeted treatments, and preventative strategies 
            ensure long-lasting results that you can trust.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Shield size={20} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Licensed & Insured</h3>
                <p className="text-gray-400 text-sm">Fully certified professionals</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Award size={20} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Guaranteed Results</h3>
                <p className="text-gray-400 text-sm">Satisfaction guaranteed</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <Users size={20} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Expert Team</h3>
                <p className="text-gray-400 text-sm">Trained pest specialists</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <LeafyGreen size={20} className="text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Eco-Friendly</h3>
                <p className="text-gray-400 text-sm">Safe for family & pets</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/8851636/pexels-photo-8851636.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Pest control professional at work" 
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="text-center px-4">
                <p className="text-4xl font-bold text-green-600">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="h-12 w-0.5 bg-gray-200 mx-2"></div>
              <div className="text-center px-4">
                <p className="text-4xl font-bold text-green-600">5K+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;