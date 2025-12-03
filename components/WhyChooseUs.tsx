"use client";

import React from 'react';
import { Shield, Wallet, MapPin, Users, Building, Clock } from 'lucide-react';
import { whyChooseUs } from '../data/mock';

const iconMap = {
  Shield,
  Wallet,
  MapPin,
  Users,
  Building,
  Clock
};

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Trusted Partner in
            <span className="text-emerald-600"> Real Estate</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We bring transparency, quality, and affordability together to help you find your perfect home.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                  {IconComponent && (
                    <IconComponent className="text-emerald-600" size={28} />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
