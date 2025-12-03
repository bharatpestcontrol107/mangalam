"use client";

import React from 'react';
import { MapPin, Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { projects } from '../data/mock';

const ProjectsSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Properties in
            <span className="text-emerald-600"> Prime Locations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully planned residential projects designed for modern living with excellent connectivity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-600 text-white">
                  {project.type}
                </Badge>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>

                {/* Price & EMI */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-bold text-emerald-600">
                    {project.price}
                  </span>
                </div>
                <p className="text-sm text-amber-600 font-medium mb-4">
                  {project.emiOption}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check size={14} className="text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-gray-900 hover:bg-emerald-600 text-white transition-colors group/btn"
                >
                  Enquire Now
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
