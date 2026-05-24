import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Ecosystem } from "@/lib/data";

interface EcosystemCardProps {
  ecosystem: Ecosystem;
  featured?: boolean;
}

export function EcosystemCard({ ecosystem, featured = false }: EcosystemCardProps) {
  const productCount = ecosystem.productIds.length;

  if (featured) {
    return (
      <Link
        href={`/ecosystem/${ecosystem.id}`}
        className="group relative block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
      >
        {/* Large Featured Layout */}
        <div className="relative aspect-[2/1] w-full overflow-hidden bg-muted">
          <Image
            src={ecosystem.heroImageUrl}
            alt={ecosystem.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Badge variant="secondary" className="mb-3">
                {productCount} products
              </Badge>
              <h3 className="text-balance text-xl font-bold leading-tight text-foreground md:text-2xl">
                {ecosystem.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground md:text-base">
                {ecosystem.description}
              </p>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Standard Card Layout
  return (
    <Link
      href={`/ecosystem/${ecosystem.id}`}
      className="group block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
        <Image
          src={ecosystem.heroImageUrl}
          alt={ecosystem.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="secondary">{productCount} products</Badge>
        </div>
        <h3 className="text-balance text-lg font-semibold leading-tight text-foreground">
          {ecosystem.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {ecosystem.description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
          <span>View Guide</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
