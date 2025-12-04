"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import events1 from "@/public/events/events1.webp";
import events2 from "@/public/events/events2.webp";
import events3 from "@/public/events/events3.webp";
import events4 from "@/public/events/events4.webp";
import events5 from "@/public/events/events5.webp";
import events6 from "@/public/events/events6.webp";
import events7 from "@/public/events/events7.webp";
import events8 from "@/public/events/events8.webp";
import events9 from "@/public/events/events9.webp";
import events10 from "@/public/events/events10.webp";
import events11 from "@/public/events/events11.webp";
const eventImages = [
  { id: 1, src: events1 },
  { id: 2, src: events2 },
  { id: 3, src: events3 },
  { id: 4, src: events4 },
  { id: 5, src: events5 },
  { id: 6, src: events6 },
  { id: 7, src: events7 },
  { id: 8, src: events8 },
  { id: 9, src: events9 },
  { id: 10, src: events10 },
  { id: 11, src: events11 },
];

export default function EventsSection() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 1; // pixels per frame

    const scroll = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset to beginning when reaching the end for infinite loop
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  const goToPrevious = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 344; // width + gap
    }
  };

  const goToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 344; // width + gap
    }
  };

  return (
    <section className="py-16 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Events & Celebrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating milestones and achievements together with our team and valued customers
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* First set of images */}
            {eventImages.map((image, index) => (
              <div 
                key={`first-${image.id}`}
                className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] relative h-[200px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt="Event image"
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
            {/* Duplicate set for infinite loop */}
            {eventImages.map((image) => (
              <div 
                key={`second-${image.id}`}
                className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] relative h-[200px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt="Event image"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
