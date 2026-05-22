import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EcosystemHero } from "@/components/ecosystem-hero";
import { EcosystemBundleList } from "@/components/ecosystem-bundle-list";
import { 
  getEcosystemById, 
  getProductsForEcosystem,
  ecosystems 
} from "@/lib/data";

// Generate static params for all ecosystems
export function generateStaticParams() {
  return ecosystems.map((ecosystem) => ({
    id: ecosystem.id,
  }));
}

// Generate metadata for each ecosystem page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ecosystem = getEcosystemById(id);
  
  if (!ecosystem) {
    return {
      title: "Ecosystem Not Found | MagicStore",
    };
  }

  return {
    title: `${ecosystem.title} | MagicStore`,
    description: ecosystem.description,
    openGraph: {
      title: ecosystem.title,
      description: ecosystem.description,
      images: [ecosystem.heroImageUrl],
    },
  };
}

export default async function EcosystemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ecosystem = getEcosystemById(id);

  if (!ecosystem) {
    notFound();
  }

  const products = getProductsForEcosystem(id);
  const estimatedTime = ecosystem.stepsToBuild.length * 10; // Rough estimate: 10 min per step

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Ecosystems
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge variant="secondary">
                <ShoppingBag className="mr-1.5 h-3 w-3" />
                {products.length} products
              </Badge>
              <Badge variant="outline">
                <Clock className="mr-1.5 h-3 w-3" />
                ~{estimatedTime} min setup
              </Badge>
            </div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {ecosystem.title}
            </h1>
            <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {ecosystem.description}
            </p>
          </div>

          {/* Interactive Hero Image */}
          <EcosystemHero ecosystem={ecosystem} />

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Click or hover on the dots to see product details
          </p>
        </div>
      </section>

      {/* How to Build It Section */}
      <section className="border-t border-border bg-card py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            How to Build It
          </h2>

          <ol className="space-y-4">
            {ecosystem.stepsToBuild.map((step, index) => (
              <li
                key={index}
                className="flex gap-4 rounded-lg border border-border bg-background p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <p className="pt-1 leading-relaxed text-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Shopping List Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EcosystemBundleList products={products} />
        </div>
      </section>
    </div>
  );
}
