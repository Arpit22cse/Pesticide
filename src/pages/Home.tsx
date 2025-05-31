import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import ContactForm from '../components/contact/ContactForm';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Home;