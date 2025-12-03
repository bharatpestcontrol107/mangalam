"use client";

import React from 'react';
import { ArrowRight, MapPin, Home, IndianRupee } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo, stats } from '../data/mock';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1476385822777-70eabacbd41f?w=1920&h=1080&fit=crop"
          alt="Residential Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <MapPin size={16} className="text-emerald-400" />
            <span className="text-white/90 text-sm">{companyInfo.location}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {companyInfo.tagline}
            <span className="block text-emerald-400 mt-2">in Lucknow</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
            {companyInfo.description}
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Home size={16} className="text-emerald-400" />
              <span className="text-white text-sm">Residential Plots</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Home size={16} className="text-emerald-400" />
              <span className="text-white text-sm">Row Houses</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <IndianRupee size={16} className="text-amber-400" />
              <span className="text-white text-sm">Easy EMI Options</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('#projects')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-lg group"
            >
              Explore Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg"
            >
              Book Free Site Visit
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
