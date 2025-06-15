import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import useInView for TransitionText mock

// Mock TransitionText component, now included directly in this file
// This ensures the component is self-contained and avoids resolution errors.
interface TransitionTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  variant?: 'slide-up' | 'slide-down' | 'fade';
  animateOnce?: boolean;
}

const TransitionText: React.FC<TransitionTextProps> = ({
  text,
  className = '',
  delay = 0,
  staggerChildren = 0.03,
  variant = 'slide-up',
  animateOnce = true,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: animateOnce,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
      },
    },
  };

  const wordVariants = {
    'slide-up': {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.99] },
      },
    },
    'slide-down': {
      hidden: { y: -20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.99] },
      },
    },
    'fade': {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.99] },
      },
    },
  };

  const words = text.split(' ');

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={wordVariants[variant]}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface BlogSectionProps {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  paragraph: string;
  imageSrc: string;
  reverse?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  id,
  title,
  subtitle,
  category,
  paragraph,
  imageSrc,
  reverse = false
}) => {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          {/* Image Column with improved animation */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img
                src={imageSrc}
                alt={title}
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Unavailable'; }}
              />
              {/* Category badge with new animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full"
              >
                {category}
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            {/* "Blog" badge animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-2 px-4 py-1 rounded-full bg-gray-200 text-primary text-sm font-medium"
            >
              Blog
            </motion.div>

            {/* Title and Subtitle already use TransitionText */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <TransitionText text={title} />
            </h2>

            <h3 className="text-xl text-gray-600 mb-6">
              <TransitionText text={subtitle} delay={0.2} />
            </h3>

            {/* Main content block animation (paragraph and list) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-600 mb-6 leading-relaxed">
                {paragraph}
              </p>

              <ul className="mb-8 space-y-2">
                {[
                  'Early detection and prevention',
                  'Professional treatment methods',
                  'Long-term protection strategies',
                  'Environmentally conscious solutions'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    className="flex items-center text-gray-700"
                  >
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;