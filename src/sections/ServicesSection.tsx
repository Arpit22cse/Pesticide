import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Bug, Rat, SprayCan as Spray, Fish, Bird, BedDouble as Needle, ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import TransitionText from '../components/TransitionText';

const ServicesSection: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const services = [
    {
      icon: <Bug size={24} />,
      title: 'General Pest Control',
      description: 'Comprehensive solutions for common household pests including ants, spiders, roaches, and more.'
    },
    {
      icon: <Rat size={24} />,
      title: 'Rodent Control',
      description: 'Effective elimination and prevention strategies for mice, rats, and other rodents.'
    },
    {
      icon: <Spray size={24} />,
      title: 'Termite Treatment',
      description: 'Protect your property from costly termite damage with our advanced treatment methods.'
    },
    {
      icon: <Needle size={24} />,
      title: 'Mosquito Control',
      description: 'Reduce mosquito populations and create a more comfortable outdoor environment.'
    },
    {
      icon: <Bird size={24} />,
      title: 'Bird Control',
      description: 'Humane solutions to prevent birds from damaging your property.'
    },
    {
      icon: <Fish size={24} />,
      title: 'Wildlife Removal',
      description: 'Safe and humane removal of unwanted wildlife from your property.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2 px-4 py-1 rounded-full bg-gray-100 text-primary text-sm font-medium"
          >
            Our Services
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <TransitionText text="Comprehensive Pest Management Solutions" />
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-gray-600 text-lg">
              We offer tailored pest control services to address your specific needs, ensuring a pest-free environment for your home or business.
            </p>
          </motion.div>
        </div>
        
        <div className="relative px-4">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="services-slider"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  delay={index * 0.1}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-primary hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-primary hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View All Services
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;