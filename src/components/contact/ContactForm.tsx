import React, { useState } from 'react';
import { FormValues } from '../../types';
import { SERVICE_OPTIONS } from '../../constants';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Select from '../ui/Select';
import Button from '../ui/Button';
import Section from '../ui/Section';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormValues> = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formValues.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formValues.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after showing success message
        setTimeout(() => {
          setFormValues({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <Section
      id="contact"
      title="Contact Us"
      subtitle="Get in touch with our team for a free quote or to schedule a service."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Get Your Free Quote</h3>
          <p className="text-gray-600 mb-6">
            Fill out the form below, and one of our pest control experts will get back to you
            within 24 hours to provide you with a customized solution and free quote.
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 animate-fadeIn">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-500 mr-3" size={24} />
                <h4 className="text-xl font-medium text-green-800">Thank You!</h4>
              </div>
              <p className="text-green-700">
                Your message has been sent successfully. One of our representatives will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  id="name"
                  name="name"
                  label="Full Name"
                  placeholder="John Doe"
                  value={formValues.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  value={formValues.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  placeholder="(123) 456-7890"
                  value={formValues.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  required
                />
                
                <Select
                  id="service"
                  name="service"
                  label="Service Needed"
                  options={SERVICE_OPTIONS}
                  value={formValues.service}
                  onChange={handleChange}
                  error={errors.service}
                  required
                />
              </div>
              
              <TextArea
                id="message"
                name="message"
                label="Message"
                placeholder="Tell us about your pest problem..."
                rows={5}
                value={formValues.message}
                onChange={handleChange}
                error={errors.message}
                required
              />
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="flex items-center"
                disabled={isSubmitting}
                fullWidth
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
        
        <div className="relative">
          <div className="rounded-lg overflow-hidden h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1618429402104!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="location map"
              className="absolute inset-0"
            ></iframe>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold mb-2">Our Service Area</h4>
            <p className="text-gray-600 text-sm">
              We provide pest control services throughout the New York metropolitan area, including all five boroughs and surrounding counties.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;