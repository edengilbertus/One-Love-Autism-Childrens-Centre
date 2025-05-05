
"use client";

import * as React from "react";
import Link from "next/link";
import { HeartHandshake, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle"; // Import ThemeToggle

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/impact", label: "Our Impact" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary font-semibold text-lg" aria-label="One Love Autism Children's Centre Home"> {/* Updated aria-label */}
          {/* Using HeartHandshake as a placeholder for the logo */}
          <HeartHandshake className="h-6 w-6" />
          <span className="hidden sm:inline">One Love Autism Children’s Centre</span> {/* Updated title, hide on very small screens */}
           <span className="sm:hidden">One Love Centre</span> {/* Shorter name for mobile */}
        </Link>

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="sm" className="ml-4">
                <Link href="/get-involved#donate">Donate Now</Link>
              </Button>
            </nav>
            <ThemeToggle /> {/* Add ThemeToggle here */}
        </div>


        {/* Mobile Navigation Trigger */}
        <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle /> {/* Add ThemeToggle for mobile too */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 bg-background">
                 {/* Add a visually hidden title for accessibility */}
                 <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                 <div className="flex justify-between items-center p-4 border-b">
                   <Link href="/" className="flex items-center gap-2 text-primary font-semibold text-lg" onClick={() => setIsOpen(false)}>
                     <HeartHandshake className="h-6 w-6" />
                     <span>One Love Centre</span> {/* Shorter name */}
                   </Link>
                   <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                       <X className="h-6 w-6" />
                       <span className="sr-only">Close menu</span>
                     </Button>
                   </SheetClose>
                 </div>
                <nav className="flex flex-col space-y-4 p-4">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground",
                          pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                     </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button asChild className="mt-4 w-full">
                      <Link href="/get-involved#donate">Donate Now</Link>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
