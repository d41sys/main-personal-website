'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { cva } from 'class-variance-authority';

const navigationMenuTriggerStyle = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-teal-400 focus:text-accent-foreground disabled:opacity-80 disabled:pointer-events-none bg-background hover:bg-teal-400 hover:text-accent-foreground data-[state=open]:bg-teal-400 data-[active]:bg-teal-400 h-10 py-2 px-4 group w-max',
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
            pathname === '/about' ? 'text-foreground font-bold bg-teal-400 h-10 py-2 px-4 group w-max' : 'text-foreground/60 bg-background/0',
          )}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={cn(
            navigationMenuTriggerStyle(),
            pathname?.startsWith('/blog') ? 'text-foreground font-bold bg-teal-400 h-10 py-2 px-4 group w-max' : 'text-foreground/60 bg-background/0',
          )}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={cn(
            navigationMenuTriggerStyle(),
            pathname?.startsWith('/contact') ? 'text-foreground font-bold bg-teal-400 h-10 py-2 px-4 group w-max' : 'text-foreground/60 bg-background/0',
          )}
        >
          Contact
        </Link>
        <Link
          href="/portfolio"
          className={cn(
            navigationMenuTriggerStyle(),
            pathname?.startsWith('/portfolio') ? 'text-foreground font-bold bg-teal-400 h-10 py-2 px-4 group w-max' : 'text-foreground/60 bg-background/0',
          )}
        >
          Portfolio
        </Link>
      </nav>
    </div>
  );
}
