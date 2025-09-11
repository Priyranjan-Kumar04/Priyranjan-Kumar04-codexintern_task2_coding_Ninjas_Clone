import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CN</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">Coding Ninjas</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-orange-500 font-medium">
              Courses
            </Link>
            
            <Link to="/bootcamp" className="text-gray-700 hover:text-orange-500 font-medium">
              Job Bootcamp
            </Link>
            
            <Link to="/certifications" className="text-gray-700 hover:text-orange-500 font-medium">
              Certifications
            </Link>
            
            <Link to="/reviews" className="text-gray-700 hover:text-orange-500 font-medium">
              Success Stories
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 font-medium">
              Contact Us
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-orange-500 font-medium">
              Login
            </Link>
            <Link to="/signup" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/courses" className="text-gray-700 hover:text-orange-500 font-medium">
                Courses
              </Link>
              <Link to="/bootcamp" className="text-gray-700 hover:text-orange-500 font-medium">
                Job Bootcamp
              </Link>
              <Link to="/certifications" className="text-gray-700 hover:text-orange-500 font-medium">
                Certifications
              </Link>
              <Link to="/reviews" className="text-gray-700 hover:text-orange-500 font-medium">
                Success Stories
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 font-medium">
                Contact Us
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login" className="text-gray-700 hover:text-orange-500 font-medium">
                  Login
                </Link>
                <Link to="/signup" className="btn-primary text-center">
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
