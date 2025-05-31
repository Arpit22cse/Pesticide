import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import BlogSection from '../sections/BlogSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import ApproachSection from '../sections/ApproachSection';
import ContactSection from '../sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BlogSection
        id="blog-termites"
        title="The Silent Destroyers"
        subtitle="Everything You Need to Know About Termites"
        category="Termites"
        imageSrc="https://images.pexels.com/photos/8539548/pexels-photo-8539548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <WhyChooseUsSection />
      <BlogSection
        id="blog-mosquitoes"
        title="Mosquito Control Solutions"
        subtitle="Protect Your Family from Disease-Carrying Pests"
        category="Mosquitoes"
        imageSrc="https://images.pexels.com/photos/721166/pexels-photo-721166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        reverse={true}
      />
      <ApproachSection />
      <BlogSection
        id="blog-cockroaches"
        title="Eliminate Cockroach Infestations"
        subtitle="Modern Solutions for Stubborn Pests"
        category="Cockroaches"
        imageSrc="https://images.pexels.com/photos/8001065/pexels-photo-8001065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <ContactSection />
    </main>
  );
};

export default HomePage;