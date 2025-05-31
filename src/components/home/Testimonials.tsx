import React from 'react';
import { TESTIMONIALS } from '../../constants';
import Section from '../ui/Section';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section
      id="testimonials"
      title="What Our Clients Say"
      subtitle="Don't just take our word for it. Here's what our satisfied customers have to say about our services."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative"
          >
            <Quote size={40} className="absolute top-4 right-4 text-gray-100" />
            <p className="text-gray-600 mb-6 relative z-10">{testimonial.content}</p>
            <div className="flex items-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;