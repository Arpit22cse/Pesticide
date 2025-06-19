import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import BlogSection from '../sections/BlogSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import ApproachSection from '../sections/ApproachSection';
import ContactSection from '../sections/ContactSection';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <BlogSection
      id="blog-termites"
      title="The Silent Destroyers"
      subtitle="Everything You Need to Know About Termites"
      paragraph="Termites are silent destroyers — devouring walls, furniture, and foundations before you're even aware.
          Their hidden havoc doesn't stop at damage — it can ignite asthma, allergies, and serious respiratory infections."
      category="Termites"
      imageSrc="https://images.pexels.com/photos/8539548/pexels-photo-8539548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <WhyChooseUsSection />
      <BlogSection
      id="blog-bedbugs"
      title="BedBugs Control Solutions"
      subtitle="Protect Your Family from Disease-Carrying Pests"
      category="BedBugs"
      paragraph="Bedbugs leave painful, itchy bites that cause sleepless nights and allergic reactions.
             They multiply rapidly, turning your sanctuary into a breeding ground of torment.
             Don’t let these pests steal your peace and health."
      imageSrc="https://imgs.search.brave.com/o6XM0DuuAmGqK0Dc2b46jF1Y9SJWIxlKFRVok_xXSX0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzg2LzE4LzMz/LzM2MF9GXzExODYx/ODMzODdfZHVDZ2FF/cmptVUpMUHBHaGN5/R2xIamZtMkIyMlRm/WXouanBn"
      reverse={false}
      />
      <ApproachSection />
      <BlogSection  
      id="blog-cockroaches"
      title="Eliminate Cockroach Infestations"
      subtitle="Modern Solutions for Stubborn Pests"
      category="Cockroaches"
      paragraph="cockroaches carry deadly bacteria and diseases like salmonella, E. coli, and dysentery.
            They contaminate every surface, spreading filth and infection relentlessly.
            Ignoring them invites sickness into your life and home."
      imageSrc="https://imgs.search.brave.com/SDJabqiScK5VKUuN3Mvoq-aNM7cPT6Ax2SfZ4S0a-zA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/MTA5MzcyL3Bob3Rv/L2NvY2tyb2FjaC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WTNRUFdxRGVadC1f/NTdwbGdEaXJoR0tf/dHNVMFZqd1l0Y203/TVJUQzliQT0"
      reverse={true}
      />
      <ContactSection />
       <BlogSection
      id="blog-mosquitoes"
      title="Mosquito Control Solutions"
      subtitle="Protect Your Family from Disease-Carrying Pests"
      category="Mosquitoes"
      paragraph="mosquitoes inject deadly diseases like malaria, dengue, and chikungunya with every bite.
            They feed on your blood, spreading pain, infection, and life-threatening illness.
            Ignoring them is risking your health — and your life."
      imageSrc="https://imgs.search.brave.com/DYfWQcdx9-JeMTgm2tsZ7rVIwoxNevDLqsMKdI3uQMU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/NDA2MDk2NS9waG90/by9tYW4taXRjaGlu/Zy1hbmQtc2NyYXRj/aGluZy1vbi1hcm0t/ZnJvbS1hbGxlcmd5/LXNraW4tcmFzaC1j/YXVzZS1ieS1tb3Nx/dWl0b2VzLWJpdGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTU1QnNXSzM0YUlL/bnViNlVMbG5tY08w/dzFlTDg5VzM3ZGNI/d1NDXzBuQkE9"
      reverse={false}
      />
    </main>
  );
};

export default HomePage;