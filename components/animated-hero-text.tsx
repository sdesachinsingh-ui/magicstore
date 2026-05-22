"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
      Build Your Perfect{" "}
      <span className="relative inline-block">
        <span
          className={cn(
            "inline-block text-primary transition-all duration-300",
            isAnimating 
              ? "translate-y-4 opacity-0" 
              : "translate-y-0 opacity-100"
          )}
        >
          {rotatingWords[currentIndex]}
        </span>
        <span 
          className="absolute bottom-0 left-0 h-1 w-full bg-primary/30 rounded-full"
          aria-hidden="true"
        />
      </span>
    </h1>
  );
}
