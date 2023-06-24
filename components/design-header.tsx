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

const designs = [
  {
    imgLink:
      'https://cdn.dribbble.com/userupload/7418620/file/original-a59bcb6db067ff8599cf31af756eba7a.png?compress=1&resize=1504x1128',
    title: '1 Lessons learned',
    desc: "1 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink:
      'https://cdn.dribbble.com/userupload/2922074/file/original-ac96fdca5173952de0a4d50a0d06e431.jpg?compress=1&resize=1504x1128',
    title: '2 Lessons learned',
    desc: "2 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink:
      'https://cdn.dribbble.com/userupload/6404270/file/original-14a38d9f6104bb3c0eb3e859e2e4ede1.jpg?compress=1&resize=1504x1128',
    title: '3 Lessons learned',
    desc: "3 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '4 Lessons learned',
    desc: "4 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '5 Lessons learned',
    desc: "5 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '6 Lessons learned',
    desc: "6 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '7 Lessons learned',
    desc: "7 I'm writing this post to document what went well and what went wrong.",
    time: 'Released on January 13th, 2022',
  },
];

export function DesignHeader() {
  return (
    <PageHeader className="max-w-full mb-10 selection:bg-purpleCustom selection:text-black">
      <PageHeaderHeading className="text-transparent bg-clip-text bg-gradient-135 from-purpleCustom to-cyanCustom">
        Design Projects
      </PageHeaderHeading>
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
      <div className="flex flex-row gap-20 w-full">
        {designs
          .filter((item, index) => index < 3)
          .map((design, index) => (
            <DesignPost design={design} key={index} />
          ))}
      </div>
    </PageHeader>
  );
}
