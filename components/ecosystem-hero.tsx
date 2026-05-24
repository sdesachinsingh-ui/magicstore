"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Ecosystem, Product } from "@/lib/data";
import { getProductById } from "@/lib/data";

interface EcosystemHeroProps {
  ecosystem: Ecosystem;
  className?: string;
}

interface HotspotTooltipProps {
  product: Product;
  isVisible: boolean;
  position: { x: number; y: number };
}

function HotspotTooltip({ product, isVisible, position }: HotspotTooltipProps) {
  // Determine tooltip position to keep it on screen
  const tooltipPosition = position.x > 60 ? "right" : "left";
  
  return (
    <div
      className={cn(
        "absolute z-20 w-48 rounded-lg border border-border bg-card p-3 shadow-lg transition-all duration-200",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
        tooltipPosition === "right" ? "-translate-x-full -ml-4" : "ml-4"
      )}
      style={{
        top: `${position.y}%`,
        left: tooltipPosition === "right" ? `${position.x}%` : `${position.x}%`,
        transform: `translateY(-50%) ${tooltipPosition === "right" ? "translateX(-100%)" : ""}`,
      }}
    >
      <p className="mb-1 text-sm font-semibold text-foreground">{product.name}</p>
      <p className="mb-2 text-xs text-muted-foreground line-clamp-2">{product.description}</p>
      <Link
        href={`/product/${product.id}`}
        className="text-xs font-medium text-primary hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}

export function EcosystemHero({ ecosystem, className }: EcosystemHeroProps) {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className={cn("relative w-full", className)}>
      {/* Hero Image Container */}
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-muted">
        <Image
          src={ecosystem.heroImageUrl}
          alt={ecosystem.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
        />
        
        {/* Gradient overlay for better hotspot visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

        {/* Interactive Hotspots */}
        {ecosystem.hotspots.map((hotspot) => {
          const product = getProductById(hotspot.productId);
          if (!product) return null;

          const isActive = activeHotspot === hotspot.id;

          return (
            <div
              key={hotspot.id}
              className="absolute"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            >
              {/* Hotspot Dot */}
              <button
                className={cn(
                  "relative flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center",
                  "rounded-full border-2 border-background bg-primary shadow-lg",
                  "transition-all duration-200 hover:scale-110",
                  isActive && "scale-110 ring-4 ring-primary/30"
                )}
                onMouseEnter={() => setActiveHotspot(hotspot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                onClick={() => setActiveHotspot(isActive ? null : hotspot.id)}
                aria-label={`View ${hotspot.label}`}
              >
                <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                
                {/* Pulse animation */}
                <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-40" />
              </button>

              {/* Tooltip */}
              <HotspotTooltip
                product={product}
                isVisible={isActive}
                position={{ x: hotspot.x, y: hotspot.y }}
              />
            </div>
          );
        })}
      </div>

      {/* Hotspot Legend (Mobile) */}
      <div className="mt-4 flex flex-wrap gap-2 md:hidden">
        {ecosystem.hotspots.map((hotspot) => {
          const product = getProductById(hotspot.productId);
          if (!product) return null;

          return (
            <Link
              key={hotspot.id}
              href={`/product/${product.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              {hotspot.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
