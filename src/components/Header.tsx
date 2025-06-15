import React, { useState, useEffect } from 'react';
import { Menu, X, Bug, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary text-secondary py-3 shadow-md' : 'bg-transparent text-primary py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Bug size={28} className={isScrolled ? 'text-secondary' : 'text-primary'} />
          <span className="text-xl font-heading font-bold">PestPros</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Services', 'Blogs', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-colors duration-200 hover:opacity-80 ${
                isScrolled ? 'text-secondary' : 'text-primary'
              }`}
            >
              {item}
            </a>
          ))}
          <button 
            className={`px-5 py-2 rounded-md transition-colors duration-200 ${
              isScrolled 
                ? 'bg-secondary text-primary hover:bg-gray-200' 
                : 'bg-primary text-secondary hover:bg-gray-800'
            }`}
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className={isScrolled ? 'text-secondary' : 'text-primary'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-secondary' : 'text-primary'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            {['Home', 'About', 'Services', 'Blogs', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-primary font-medium px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mx-4 px-5 py-2 bg-primary text-secondary rounded-md hover:bg-gray-800 transition-colors duration-200">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;