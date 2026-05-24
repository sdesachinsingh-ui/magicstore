"use client";

import Link from "next/link";
import { Store, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Store className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold tracking-tight text-foreground">
              Magicstore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Ecosystems
            </Link>
            <Link
              href="/#products"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Products
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-200 md:hidden",
            isMenuOpen ? "max-h-40 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Ecosystems
            </Link>
            <Link
              href="/#products"
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
