import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  getProductById, 
  getEcosystemsContainingProduct,
  products,
  categories
} from "@/lib/data";

// Generate static params for all products
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  
  if (!product) {
    return {
      title: "Product Not Found | MagicStore",
    };
  }

  return {
    title: `${product.name} | MagicStore`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const featuredInEcosystems = getEcosystemsContainingProduct(id);
  const categoryLabel = categories.find(c => c.value === product.category)?.label || product.category;

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/#products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col">
              {/* Category & Price */}
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Badge variant="outline">{categoryLabel}</Badge>
                <Badge variant="secondary" className="text-base">
                  {product.priceEstimate}
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {product.name}
              </h1>

              {/* Description */}
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* CTA Button */}
              <div className="mt-8">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a
                    href={product.amazonAffiliateLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    View on Amazon
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <p className="mt-2 text-xs text-muted-foreground">
                  Price and availability subject to change on Amazon
                </p>
              </div>

              <Separator className="my-8" />

              {/* Pros & Cons */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Pros */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Check className="h-5 w-5 text-primary" />
                      Pros
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Cons */}
                <Card className="border-destructive/20 bg-destructive/5">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <X className="h-5 w-5 text-destructive" />
                      Cons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Ecosystems Section */}
      {featuredInEcosystems.length > 0 && (
        <section className="border-t border-border bg-card py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
              Featured In
            </h2>
            <p className="mb-8 text-muted-foreground">
              This product is part of the following curated ecosystems
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredInEcosystems.map((ecosystem) => (
                <Link
                  key={ecosystem.id}
                  href={`/ecosystem/${ecosystem.id}`}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/50 hover:bg-muted/50"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={ecosystem.heroImageUrl}
                      alt={ecosystem.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-foreground group-hover:text-primary">
                      {ecosystem.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {ecosystem.productIds.length} products
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
