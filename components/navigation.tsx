'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { cva } from 'class-variance-authority';

const navigationMenuTriggerStyle = cva(
  'inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors border-transparent border focus:outline-none focus:bg-teal-400 focus:border-black focus:text-accent-foreground disabled:opacity-80 disabled:pointer-events-none bg-background ease hover:bg-teal-400  dark:hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-accent-foreground data-[state=open]:bg-teal-400 data-[active]:bg-teal-400 h-10 py-2 px-4 group w-max',
);

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex selection:bg-redCustom selection:text-black">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-4 w-4" />
        <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>
      <nav className="flex items-center space-x-3 text-sm font-medium">
        <Link
          href="/about"
          className={cn(
            navigationMenuTriggerStyle(),
            pathname?.startsWith('/about') ? 'text-foreground font-bold bg-teal-400 h-10 py-2 px-4 border-black group w-max' : 'text-foreground/60 bg-background/0',
          )}
        >
          About
        </Link>
        <Link
          href="/articles"
          className={cn(
            navigationMenuTriggerStyle(),
            pathname?.startsWith('/articles') ? 'text-foreground font-bold bg-teal-400 h-10 py-2 px-4 border-black group w-max' : 'text-foreground/60 bg-background/0',
          )}
        >
          Articles
        </Link>
        <Link
          href="/projects"
          className={cn(
            navigationMenuTriggerStyle(),
            pathname?.startsWith('/projects') ? 'text-foreground font-bold bg-teal-400 h-10 py-2 px-4 border-black group w-max' : 'text-foreground/60 bg-background/0',
          )}
        >
          Project
        </Link>
        <Link
          href="/portfolio"
          className={cn(
            navigationMenuTriggerStyle(),
            pathname?.startsWith('/portfolio') ? 'text-foreground font-bold bg-teal-400 h-10 py-2 px-4 border-black group w-max' : 'text-foreground/60 bg-background/0',
          )}
        >
          Portfolio
        </Link>
      </nav>
    </div>
  );
}
