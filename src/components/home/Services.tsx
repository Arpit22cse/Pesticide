import React from 'react';
import { SERVICES } from '../../constants';
import Section from '../ui/Section';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  // Dynamic icon rendering based on icon name from constants
  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return Icon ? <Icon size={24} className="text-green-500" /> : null;
  };

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="We offer comprehensive pest control solutions tailored to your specific needs."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div 
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;