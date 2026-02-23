import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">INFNOVA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">
              Courses
            </Link>
            <a href="#about" className="text-gray-700 hover:text-primary transition">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition">
              Contact
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary transition">
              Sign In
            </button>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <a
              href="#about"
              className="block text-gray-700 hover:text-primary transition py-2"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-primary transition py-2"
            >
              Contact
            </a>
            <button className="w-full text-left text-gray-700 hover:text-primary transition py-2">
              Sign In
            </button>
            <button className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
