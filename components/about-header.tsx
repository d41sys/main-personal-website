'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Icons } from '@/components/icons';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';

// Function to parse text and insert links
const parseText = (text: string) => {
  const linkRegex = /#Link{(https?:\/\/[^\s]+)}{([^}]+)}/g;
  return text.split(linkRegex).map((part, index) => {
    if (index % 3 === 1) {
      const url = part;
      const linkText = text.split(linkRegex)[index + 1];
      return (
        <Link
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purpleCustom from-pinkCustom to-purpleCustom hover:text-white hover:bg-gradient-135 hover:font-bold"
        >
          {linkText}
        </Link>
      );
    }
    if (index % 3 === 2) {
      return null;
    }
    return part;
  });
};

export function AboutHeader() {
  return (
    <div className="flex flex-row mt-10 selection:bg-pinkCustom selection:text-black justify-between">
      <PageHeader className="-mt-10 flex-initial">
        <PageHeaderHeading className="text-transparent bg-clip-text bg-gradient-135 from-pinkCustom to-purpleCustom">
          Explore. Exploited.
        </PageHeaderHeading>
        <Link
          href="/about"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          🇻🇳🇹🇭🇰🇷 <Separator className="mx-2 h-4" orientation="vertical" /> Tien-Dat Le
          {/* <ChevronRight className="ml-1 h-4 w-4" /> */}
        </Link>
        <div className="inline-block align-top max-w-[850px] text-base text-muted-foreground sm:text-l w-[850px] ">
          {siteConfig.bio.map((text, index) => (
            <p key={index} className="mt-2">
              {parseText(text)}
            </p>
          ))}
        </div>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/about/" className={cn(buttonVariants())}>
            More information
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.mail}
            className={cn(buttonVariants({ variant: 'shadow' }))}
          >
            <Icons.user className="mr-2 h-4 w-4" />
            Get in touch
          </Link>
        </div>
      </PageHeader>
      <Player
        autoplay
        loop
        src="https://lottie.host/74e15f43-265d-440c-91f7-981a19c57509/hKAK9Xc3mv.json"
        style={{ flex: 'auto' }}
      ></Player>
    </div>
  );
}
