import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoPath from "@assets/ChatGPT Image May 28, 2025, 01_33_21 AM_1752661190416.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-lg border-b border-gold border-opacity-20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img src={logoPath} alt="Fame & Style Logo" className="w-8 h-8" />
              <span className="text-2xl font-montserrat font-bold text-gradient">Fame & Style</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-gold transition-colors duration-200 font-medium">
                Home
              </Link>
              {location === '/' ? (
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:text-gold transition-colors duration-200 font-medium"
                >
                  Services
                </button>
              ) : (
                <Link href="/" className="text-white hover:text-gold transition-colors duration-200 font-medium">
                  Services
                </Link>
              )}
              <Link href="/portfolio" className="text-white hover:text-gold transition-colors duration-200 font-medium">
                Portfolio
              </Link>
              {location === '/' ? (
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-white hover:text-gold transition-colors duration-200 font-medium"
                >
                  Team
                </button>
              ) : (
                <Link href="/" className="text-white hover:text-gold transition-colors duration-200 font-medium">
                  Team
                </Link>
              )}
              <Link href="/contact" className="bg-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-gold-light transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-95">
              <Link href="/" className="block text-white hover:text-gold transition-colors duration-200 font-medium py-2">
                Home
              </Link>
              {location === '/' ? (
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-white hover:text-gold transition-colors duration-200 font-medium py-2"
                >
                  Services
                </button>
              ) : (
                <Link href="/" className="block text-white hover:text-gold transition-colors duration-200 font-medium py-2">
                  Services
                </Link>
              )}
              <Link href="/portfolio" className="block text-white hover:text-gold transition-colors duration-200 font-medium py-2">
                Portfolio
              </Link>
              {location === '/' ? (
                <button 
                  onClick={() => scrollToSection('team')}
                  className="block text-white hover:text-gold transition-colors duration-200 font-medium py-2"
                >
                  Team
                </button>
              ) : (
                <Link href="/" className="block text-white hover:text-gold transition-colors duration-200 font-medium py-2">
                  Team
                </Link>
              )}
              <Link href="/contact" className="block bg-gold text-black px-6 py-2 rounded-lg font-semibold hover:bg-gold-light transition-colors duration-200 mt-4">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
