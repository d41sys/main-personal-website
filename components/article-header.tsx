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

const articles = [
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '1 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "1 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '2 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "2 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '3 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "3 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '4 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "4 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
  },
];

export function ArticleHeader() {
  return (
    <PageHeader className="mt-10 max-w-full">
      <PageHeaderHeading className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Featured Articles</PageHeaderHeading>
      <Link
          href="/portfolio"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          🎉 <Separator className="mx-2 h-4" orientation="vertical" /> Discover more posts
          <ChevronRight className="ml-1 h-4 w-4" />
    </Link>
      <PageHeaderDescription>
        Beautifully designed components that you can copy and paste into your apps. Accessible.
        Customizable. Open Source.
      </PageHeaderDescription>
      <div className="flex flex-row gap-10 w-full">
        {articles.map((article) => (
          <FeaturedArticle article={article} />
        ))}
      </div>
    </PageHeader>
  );
}
