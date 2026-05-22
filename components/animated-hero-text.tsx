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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
      Build Your Perfect{" "}
      <span className="relative inline-flex h-[1.2em] min-w-[280px] overflow-hidden align-bottom md:min-w-[320px]">
        {rotatingWords.map((word, index) => (
          <span
            key={word}
            className="absolute left-0 top-0 inline-block text-primary transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateY(${(index - currentIndex) * 100}%)`,
            }}
          >
            {word}
          </span>
        ))}
      </span>
    </h1>
  );
}
