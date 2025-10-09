import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  // Close user menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4 px-2 sm:px-0">
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
            <Link to="/my-learning" className="text-gray-700 hover:text-orange-500 font-medium">
              My Learning
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="relative user-menu-container">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 font-medium"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full border-2 border-orange-200"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=f97316&color=fff&size=32`;
                    }}
                  />
                  <span className="hidden sm:block">{user.name}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-gray-500 truncate">{user.email}</div>
                      {user.provider === 'google' && (
                        <div className="text-xs text-blue-500 mt-1">Google Account</div>
                      )}
                    </div>
                    <Link
                      to="/my-learning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      My Learning
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-orange-500 font-medium">
                  Login
                </Link>
                <Link to="/signup" className="btn-primary">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 -mr-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <Link 
                to="/courses" 
                className="text-gray-700 hover:text-orange-500 font-medium py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/bootcamp" 
                className="text-gray-700 hover:text-orange-500 font-medium py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Job Bootcamp
              </Link>
              <Link 
                to="/certifications" 
                className="text-gray-700 hover:text-orange-500 font-medium py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </Link>
              <Link 
                to="/reviews" 
                className="text-gray-700 hover:text-orange-500 font-medium py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-orange-500 font-medium py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                to="/my-learning" 
                className="text-gray-700 hover:text-orange-500 font-medium py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                My Learning
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                {user ? (
                  <>
                    <div className="flex items-center space-x-2 py-2">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                    <Link 
                      to="/my-learning" 
                      className="text-gray-700 hover:text-orange-500 font-medium py-2 px-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Learning
                    </Link>
                    <Link 
                      to="/profile" 
                      className="text-gray-700 hover:text-orange-500 font-medium py-2 px-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="text-left text-gray-700 hover:text-orange-500 font-medium py-2 px-1"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      className="text-gray-700 hover:text-orange-500 font-medium py-2 px-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link 
                      to="/signup" 
                      className="btn-primary text-center py-2 px-4 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
