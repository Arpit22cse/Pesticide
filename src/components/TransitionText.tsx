import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

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

  // Variants for the container
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

  // Variants for each word
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

export default TransitionText;