"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const eventImages = [
  { id: 1, src: "/events/event1.webp", alt: "Mangalam Infraventures Logo" },
  { id: 2, src: "/events/event2.webp", alt: "Group Celebration Event" },
  { id: 3, src: "/events/event3.webp", alt: "Cake Cutting Ceremony" },
  { id: 4, src: "/events/event4.webp", alt: "Anniversary Celebration" },
  { id: 5, src: "/events/event5.webp", alt: "Award Ceremony" },
  { id: 6, src: "/events/event6.webp", alt: "Team Achievement" },
  { id: 7, src: "/events/event7.webp", alt: "Team Group Photo" },
  { id: 8, src: "/events/event8.webp", alt: "Award Recognition" },
  { id: 9, src: "/events/event9.webp", alt: "CMD Portrait" },
  { id: 10, src: "/events/event10.webp", alt: "Guest Speaker Event" },
  { id: 11, src: "/events/event11.webp", alt: "Grand Entry" },
];

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * currentIndex;
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? eventImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
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
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {eventImages.map((image, index) => (
              <div 
                key={image.id}
                className="min-w-full relative h-[400px] md:h-[500px] lg:h-[600px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            {eventImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "bg-white w-8 h-2"
                    : "bg-white/50 hover:bg-white/75 w-2 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats or Info below carousel */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-600">Successful Events</div>
          </div>
        </div>
      </div>
    </section>
  );
}
