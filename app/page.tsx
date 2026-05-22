"use client";

import { useState } from "react";
import { Sparkles, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EcosystemCard } from "@/components/ecosystem-card";
import { ProductCard } from "@/components/product-card";
import { AnimatedHeroText } from "@/components/animated-hero-text";
import { 
  ecosystems, 
  products, 
  categories, 
  getFeaturedEcosystems,
  type Product 
} from "@/lib/data";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<Product["category"] | "all">("all");
  
  const featuredEcosystems = getFeaturedEcosystems();
  const otherEcosystems = ecosystems.filter(e => !e.featured);
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border bg-card py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="mr-1.5 h-3 w-3" />
              Curated Ecosystems
            </Badge>
            <AnimatedHeroText />
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Stop buying random products. Start building intentional ecosystems. We curate 
              compatible products so you can recreate the exact look and functionality 
              you see in our guides.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#ecosystems">
                  <Store className="mr-2 h-5 w-5" />
                  Explore Ecosystems
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#products">Browse All Products</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ecosystems Section */}
      <section id="ecosystems" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Featured Ecosystems
            </h2>
            <p className="mt-2 text-muted-foreground">
              Complete guides with everything you need to build the perfect setup
            </p>
          </div>

          {/* Featured Ecosystem Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {featuredEcosystems.map((ecosystem) => (
              <EcosystemCard
                key={ecosystem.id}
                ecosystem={ecosystem}
                featured
              />
            ))}
          </div>

          {/* Other Ecosystems */}
          {otherEcosystems.length > 0 && (
            <div className="mt-10">
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                More Ecosystems
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {otherEcosystems.map((ecosystem) => (
                  <EcosystemCard key={ecosystem.id} ecosystem={ecosystem} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="border-t border-border bg-card py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Browse Products
            </h2>
            <p className="mt-2 text-muted-foreground">
              Find individual products or complete your ecosystem
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showCategory={selectedCategory === "all"}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
