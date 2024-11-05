import React from 'react';
import { Link } from 'react-router-dom';
import { Radio } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Radio className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">MINY</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('featured-podcasters')} 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Featured Podcasters
            </button>
            <button 
              onClick={() => scrollToSection('top-podcasts')} 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Top Podcasts
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Pricing
            </button>
          </div>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;