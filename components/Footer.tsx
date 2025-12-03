"use client";

import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { companyInfo, projects } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-xl">
                M
              </div>
              <div>
                <span className="font-bold text-lg block leading-tight">Mangalam</span>
                <span className="text-xs tracking-wider text-gray-400">INFRAVENTURES</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for affordable residential plots and row houses in Lucknow. 
              Building dreams with transparency and quality since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Projects</h4>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href="#projects"
                    onClick={(e) => { e.preventDefault(); scrollToSection('#projects'); }}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-400">{companyInfo.phones[0]}</p>
                  <p className="text-gray-400">{companyInfo.phones[1]}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{companyInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mangalam Infraventures Pvt. Ltd. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors text-sm"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
