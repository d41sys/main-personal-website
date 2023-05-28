'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { cva } from 'class-variance-authority';

const navigationMenuTriggerStyle = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-80 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/80 data-[active]:bg-accent/80 h-10 py-2 px-4 group w-max',
);

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-4 w-4" />
        <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>
      <nav className="flex items-center space-x-3 text-sm font-medium">
        <Link
          href="/about"
          className={cn(
            navigationMenuTriggerStyle(),
            pathname === '/about' ? 'text-foreground font-bold' : 'text-foreground/60',
          )}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={cn(
            navigationMenuTriggerStyle(),
            pathname?.startsWith('/blog') ? 'text-foreground font-bold' : 'text-foreground/60',
          )}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={cn(
            navigationMenuTriggerStyle(),
            pathname?.startsWith('/contact') ? 'text-foreground font-bold' : 'text-foreground/60',
          )}
        >
          Contact
        </Link>
        <Link
          href="/contact"
          className={cn(
            navigationMenuTriggerStyle(),
            pathname?.startsWith('/contact') ? 'text-foreground font-bold' : 'text-foreground/60',
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
