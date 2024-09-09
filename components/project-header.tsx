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
import { FeaturedProject } from './ui/featured-project';
import { allProject } from '@/config/projects';


export function ProjectHeader() {
  return (
    <PageHeader className="max-w-full mb-10 selection:bg-cyanCustom selection:text-black">
      <PageHeaderHeading className="text-transparent bg-clip-text bg-gradient-135 from-cyanCustom to-redCustom">
        Explore. Exported.
      </PageHeaderHeading>
      <Link
        href="/projects"
        className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
      >
        🎉 <Separator className="mx-2 h-4" orientation="vertical" /> Discover more projects
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
      <PageHeaderDescription>
        Dive into develope websites, applications, tools. Here you can find projects which I built for work, for learn and for fun.
      </PageHeaderDescription>
      <div className="flex flex-row gap-4 w-full">
        {allProject.filter((item, index) => index < 4 && item.featured == true).map((project, index) => (
          <FeaturedProject project={project} key={index}/>
        ))}
      </div>
    </PageHeader>
  );
}
