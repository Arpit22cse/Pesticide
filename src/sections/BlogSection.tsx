import React from 'react';
import { motion } from 'framer-motion';
import TransitionText from '../components/TransitionText';

interface BlogSectionProps {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageSrc: string;
  reverse?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  category, 
  imageSrc, 
  reverse = false 
}) => {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img 
                src={imageSrc} 
                alt={title} 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-3 py-1 rounded">
                {category}
              </div>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-2 px-4 py-1 rounded-full bg-gray-200 text-primary text-sm font-medium"
            >
              Blog
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <TransitionText text={title} />
            </h2>
            
            <h3 className="text-xl text-gray-600 mb-6">
              <TransitionText text={subtitle} delay={0.2} />
            </h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, velit vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              
              <ul className="mb-8 space-y-2">
                {[
                  'Early detection and prevention',
                  'Professional treatment methods',
                  'Long-term protection strategies',
                  'Environmental considerations'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                    className="flex items-center"
                  >
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read Full Article
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;