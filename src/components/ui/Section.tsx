import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? 'bg-gray-900 text-white' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
            <div className="w-20 h-1 bg-green-500 mx-auto mt-6"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;