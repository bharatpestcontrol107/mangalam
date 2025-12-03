"use client";

import React from 'react';
import { Quote } from 'lucide-react';
import { cmdInfo } from '../data/mock';
import Image from 'next/image';

const CMDSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl transform rotate-6" />
              <Image
                src={cmdInfo.image}
                alt={cmdInfo.name}
                className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2">
            <Quote className="text-emerald-500/30 mb-6" size={60} />
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
              &ldquo;{cmdInfo.message}&rdquo;
            </p>
            <div>
              <h3 className="text-xl font-bold text-white">{cmdInfo.name}</h3>
              <p className="text-emerald-400">{cmdInfo.designation}</p>
              <p className="text-gray-400 text-sm mt-1">Mangalam Infraventures Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CMDSection;
