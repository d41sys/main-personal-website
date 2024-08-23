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
import { FeaturedArticle } from '@/components/ui/featured-article';
import { allArticles } from 'contentlayer/generated';


export function ArticleHeader() {
  return (
    <PageHeader className="container max-w-full mb-10 selection:bg-yellowCustom selection:text-black">
      <PageHeaderHeading className="text-transparent bg-clip-text bg-gradient-135 from-yellowCustom to-pinkCustom">
        Explore. Explain.
      </PageHeaderHeading>
      <Link
        href="/portfolio"
        className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
      >
        🎉 <Separator className="mx-2 h-4" orientation="vertical" /> Discover more articles
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
      <PageHeaderDescription>
        Dive into learn, explore. Here you can find articles which I learned, researched. I`&apos;`m sharing it for you, now.
      </PageHeaderDescription>
      <div className="flex flex-row gap-10 w-full">
        {allArticles.sort((a, b) => b.id - a.id).filter((item, index) => index < 4 && item.featured == true).map((article, index) => (
          <FeaturedArticle article={article} key={index}/>
        ))}
      </div>
    </PageHeader>
  );
}
