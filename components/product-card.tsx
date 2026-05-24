"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

const priceLabels: Record<Product["priceEstimate"], string> = {
  "$": "Budget-Friendly",
  "$$": "Mid-Range",
  "$$$": "Premium",
  "$$$$": "Luxury"
};

export function ProductCard({ product, showCategory = false }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border border-border bg-card transition-shadow hover:shadow-md">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <Link href={`/product/${product.id}`} className="block flex-1">
            <h3 className="text-balance font-semibold leading-tight text-foreground transition-colors hover:text-foreground/80">
              {product.name}
            </h3>
          </Link>
          <Badge variant="secondary" className="shrink-0 text-xs font-medium">
            {product.priceEstimate}
          </Badge>
        </div>
        
        {showCategory && (
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {product.category.replace("-", " ")}
          </p>
        )}
        
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        
        <Button
          asChild
          className="w-full"
          size="sm"
        >
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            View on Amazon
            <ExternalLink className="ml-2 h-3.5 w-3.5" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
