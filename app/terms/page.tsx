import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Terms of Service | MagicStore",
  description: "Terms of service for MagicStore",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" , year: "numeric" })}
          </p>

          <div className="mt-10 space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-semibold">Acceptance of Terms</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Use of Content</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                The content on this website, including text, images, and guides, is provided 
                for informational purposes only. While we strive to provide accurate and helpful 
                information, we make no warranties about the completeness, reliability, or 
                accuracy of this information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Affiliate Disclosure</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                This website participates in the Amazon Services LLC Associates Program, an 
                affiliate advertising program designed to provide a means for sites to earn 
                advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, 
                we earn from qualifying purchases.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Product Information</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Product prices, availability, and descriptions are subject to change without 
                notice. We do not guarantee that product information on our site is accurate, 
                complete, or current. The price and availability information displayed on 
                Amazon at the time of purchase will apply to your purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Limitation of Liability</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We shall not be liable for any damages arising from the use of this website 
                or any products purchased through our affiliate links. Your use of any 
                information or materials on this website is entirely at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Changes to Terms</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be 
                effective immediately upon posting to the website. Your continued use of 
                the website constitutes acceptance of the modified terms.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
