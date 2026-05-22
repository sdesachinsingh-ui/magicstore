import Link from "next/link";
import { Leaf } from "lucide-react";

export function GlobalFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">MagicStore</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Curated ecosystems for modern plant enthusiasts. We help you build the perfect green space with expertly selected, compatible products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  All Ecosystems
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Browse Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            <strong>Affiliate Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. 
            Product prices and availability are subject to change. Any price and availability information 
            displayed on Amazon at the time of purchase will apply to the purchase of the product.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} MagicStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
