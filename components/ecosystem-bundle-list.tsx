"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ExternalLink, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data";

interface EcosystemBundleListProps {
  products: Product[];
  title?: string;
}

export function EcosystemBundleList({ 
  products, 
  title = "Everything You Need" 
}: EcosystemBundleListProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (productId: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }
      return next;
    });
  };

  const checkedCount = checkedItems.size;
  const totalCount = products.length;

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {checkedCount} of {totalCount} items checked off
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">
            {totalCount} items
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${(checkedCount / totalCount) * 100}%` }}
        />
      </div>

      {/* Product List */}
      <div className="space-y-3">
        {products.map((product, index) => {
          const isChecked = checkedItems.has(product.id);

          return (
            <div
              key={product.id}
              className={cn(
                "flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all",
                isChecked && "border-primary/50 bg-primary/5"
              )}
            >
              {/* Checkbox */}
              <button
                onClick={() => toggleItem(product.id)}
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
                  isChecked
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground/30 hover:border-primary"
                )}
                aria-label={isChecked ? `Uncheck ${product.name}` : `Check ${product.name}`}
              >
                {isChecked && <Check className="h-4 w-4" />}
              </button>

              {/* Number */}
              <span className="w-6 text-center text-sm font-medium text-muted-foreground">
                {index + 1}
              </span>

              {/* Product Image */}
              <Link href={`/product/${product.id}`} className="shrink-0">
                <div className="relative h-16 w-16 overflow-hidden rounded-md bg-muted">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="min-w-0 flex-1">
                <Link href={`/product/${product.id}`} className="block">
                  <h3
                    className={cn(
                      "font-medium text-foreground transition-colors hover:text-foreground/80",
                      isChecked && "line-through opacity-60"
                    )}
                  >
                    {product.name}
                  </h3>
                </Link>
                <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>

              {/* Price Badge */}
              <Badge variant="secondary" className="shrink-0">
                {product.priceEstimate}
              </Badge>

              {/* Amazon Link */}
              <Button
                asChild
                variant="outline"
                size="sm"
                className="shrink-0"
              >
                <a
                  href={product.amazonAffiliateLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <span className="hidden sm:inline">Amazon</span>
                  <ExternalLink className="h-4 w-4 sm:ml-2" />
                </a>
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
