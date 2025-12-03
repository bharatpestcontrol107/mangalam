"use client";

import React from 'react';
import { Car, Zap, Droplets, TreePine, ShieldCheck, Lamp, Fence, Building2 } from 'lucide-react';
import { amenities } from '../data/mock';

const iconMap = {
  Car,
  Zap,
  Droplets,
  TreePine,
  ShieldCheck,
  Lamp,
  Fence,
  Building2
};

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-20 bg-emerald-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-300 font-semibold text-sm tracking-wider uppercase mb-3">
            Amenities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            World-Class
            <span className="text-emerald-400"> Facilities</span>
          </h2>
          <p className="text-emerald-100/70 max-w-2xl mx-auto">
            Every project comes with thoughtfully designed amenities for comfortable living.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  {IconComponent && (
                    <IconComponent className="text-emerald-400" size={32} />
                  )}
                </div>
                <h3 className="text-white font-medium">{amenity.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
