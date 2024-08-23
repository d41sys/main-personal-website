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
import { DesignPost } from '@/components/ui/design-post';
import { FeaturedArticle } from '@/components/ui/featured-article';
import { allDesigns } from '@/config/portfolio';

export function DesignHeader() {
  return (
    <PageHeader className="container max-w-full mb-10 selection:bg-purpleCustom selection:text-black">
      <PageHeaderHeading className="text-transparent bg-clip-text bg-gradient-135 from-purpleCustom to-cyanCustom">
        Explore. Exhibition.
      </PageHeaderHeading>
      <Link
        href="/portfolio"
        className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
      >
        🎉 <Separator className="mx-2 h-4" orientation="vertical" /> Discover more posts
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
      <PageHeaderDescription>
        Dive into creative with art, music, photograph. Here you can find arts which I created by all of creative.
      </PageHeaderDescription>
      <div className="flex flex-row gap-20 w-full">
        {allDesigns
          .filter((item, index) => index < 3)
          .map((design, index) => (
            <DesignPost design={design} key={index} />
          ))}
      </div>
    </PageHeader>
  );
}
