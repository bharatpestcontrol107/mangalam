"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className={`hidden md:block border-b transition-all duration-300 ${
        isScrolled ? 'border-emerald-100 bg-emerald-50/50' : 'border-white/20 bg-black/20'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className={`flex items-center gap-6 ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
              <Mail size={14} />
              {companyInfo.email}
            </a>
          </div>
          <div className={`flex items-center gap-4 ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
            <a href={`tel:${companyInfo.phones[0]}`} className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
              <Phone size={14} />
              {companyInfo.phones[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl ${
              isScrolled ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-600'
            }`}>
              M
            </div>
            <div>
              <span className={`font-bold text-lg block leading-tight ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Mangalam
              </span>
              <span className={`text-xs tracking-wider ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                INFRAVENTURES
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6"
            >
              Book Site Visit
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200/20 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`text-sm font-medium py-2 transition-colors ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white mt-2"
              >
                Book Site Visit
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
