"use client";

import { useState, useEffect } from "react";

const rotatingWords = [
  "Green Space",
  "Working Desk", 
  "Reading Nook",
  "Kitchen Garden",
  "Balcony Oasis",
  "Cozy Corner",
  "Home Office",
  "Living Room",
];

export function AnimatedHeroText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
      Build Your Perfect{" "}
      <span
        className={`inline-block text-primary transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {rotatingWords[currentIndex]}
      </span>
    </h1>
  );
}
