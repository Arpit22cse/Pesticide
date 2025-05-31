import React from 'react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  date: string;
  delay?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt, 
  category, 
  imageUrl, 
  date,
  delay = 0 
}) => {
  return (
    <motion.div 
      className="blog-card overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;