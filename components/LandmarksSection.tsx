"use client";

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { landmarks } from '../data/mock';

const LandmarksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Location Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nearby
            <span className="text-emerald-600"> Landmarks</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our projects are strategically located near key landmarks for excellent connectivity.
          </p>
        </div>

        {/* Landmarks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {landmarks.map((landmark, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-5 text-center hover:bg-emerald-50 transition-colors group border border-gray-100 hover:border-emerald-200"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-3 group-hover:bg-emerald-200 transition-colors">
                {index === 5 ? (
                  <Navigation className="text-emerald-600" size={20} />
                ) : (
                  <MapPin className="text-emerald-600" size={20} />
                )}
              </div>
              <h3 className="font-medium text-gray-900 text-sm mb-1 leading-tight">
                {landmark.name}
              </h3>
              <p className="text-emerald-600 text-xs font-semibold">
                {landmark.distance}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandmarksSection;
