import { notFound } from 'next/navigation';
import { allArticles } from 'contentlayer/generated';

import '@/styles/mdx.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Balancer from 'react-wrap-balancer';

import { siteConfig } from '@/config/site';
import { getTableOfContents } from '@/lib/toc';
import { absoluteUrl, cn } from '@/lib/utils';
import { badgeVariants } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Icons } from '@/components/icons';
import { Mdx } from '@/components/mdx-components';
import { ArticlesPager } from '@/components/pager';
import { DashboardTableOfContents } from '@/components/toc';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { allDesigns } from '@/config/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import React, { useState } from 'react';
import { GalleryMotion } from '@/components/gallery-motion';
import { Gallery } from '@/components/gallery';

const postHeaderStyle = cva(' w-full flex items-center justify-center relative z-[-1] flex-col');
const postTitleStyle = cva(
  'text-center md:max-w-[60%] md:leading-[90px] md:text-[72px] z-[3] z-[3] text-black',
);

const PostImageS = cva('bg-center	bg-cover fixed	w-full top-0 left-0 ');

interface DesignPageProps {
  params: {
    slug: string[];
  };
}

async function getDesignFromParams({ params }: DesignPageProps) {
  const slug = params.slug?.join('/') || '';
  const design = allDesigns.find((article) => article.slugAsParams === slug);

  if (!design) {
    null;
  }

  return design;
}

export async function generateMetadata({ params }: DesignPageProps): Promise<Metadata> {
  const design = await getDesignFromParams({ params });

  if (!design) {
    return {};
  }

  return {
    title: design.title,
    description: design.desc,
    openGraph: {
      title: design.title,
      description: design.desc,
      type: 'article',
      url: absoluteUrl(design.slug),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: design.title,
      description: design.desc,
      images: [siteConfig.ogImage],
      creator: '@d41sy',
    },
  };
}

export async function generateStaticParams(): Promise<DesignPageProps['params'][]> {
  return allDesigns.map((design) => ({
    slug: design.slugAsParams.split('/'),
  }));
}

export default async function DesignPage({ params }: DesignPageProps) {
  const design = await getDesignFromParams({ params });

  if (!design) {
    notFound();
  }

  return (
    <>
      <div className="bg-yellow-300 text-black text-center py-2">
        This page is currently under maintenance. Some features may not be available.
      </div>
      <div className="container items-start selection:bg-purpleCustom selection:text-black">
        <main className="relative py-6">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">Portfolio</div>
              <ChevronRight className="h-4 w-4" />
              <div className="font-medium text-foreground">{design.title}</div>
            </div>
            <div className="space-y-2">
              <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
                {design.fullTitle}
              </h1>
              <h3 className="">{design.desc}</h3>
            </div>
            <div className="flex flex-row mt-10 gap-12">
              <div className="w-[70vw] whitespace-normal">
                What is Art? <br />
                For as long as humanity has existed, art has been part of our lives. For many years,
                people have been creating and enjoying art. It expresses emotions or expression of
                life. It is one such creation that enables interpretation of any kind. It is a skill
                that applies to music, painting, poetry, dance and more. Moreover, nature is no less
                than art. <br /> For instance, if nature creates something unique, it is also art.
                Artists use their artwork for passing along their feelings.
              </div>
              <div className="border border-black ">
                <Image
                  className=""
                  style={{
                    marginBottom: '10px',
                    objectFit: 'cover',
                    width: '100vw',
                    height: 'auto',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                  }}
                  width={0}
                  height={0}
                  sizes="100vw"
                  src={design.imgLink}
                  alt=""
                />
              </div>
            </div>
            {/* <Gallery /> */}
          </div>
        </main>
      </div>
    </>
  );
}
