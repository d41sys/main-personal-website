import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';

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
import { DocsPager } from '@/components/pager';
import { DashboardTableOfContents } from '@/components/toc';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import styled from 'styled-components';

const postHeaderStyle = cva(
  ' w-full flex items-center justify-center relative z-[-1] flex-col',
);
const postTitleStyle = cva(
  'text-center md:max-w-[60%] md:leading-[90px] md:text-[72px] pt-[20vh] z-[3] z-[3] h-[60vh] text-white',
);

const PostImageS = cva(
  'bg-black bg-no-repeat h-[60vh]	bg-center	bg-cover fixed	w-full top-0 left-0 z-[2] will-change-transform after:absolute after:w-full after:h-full after:bg-gradient-post after:will-change-transform after:z-[2] after:top-0 after:left-0 lg:absolute',
);

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join('/') || '';
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: absoluteUrl(doc.slug),
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
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: '@d41sy',
    },
  };
}

export async function generateStaticParams(): Promise<DocPageProps['params'][]> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <>
      <div className={cn(postHeaderStyle())}>
        <div className={cn(postTitleStyle())}>
          <h1>{doc.title}</h1>
          {doc.description && (
            <p className="text-lg">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>

        <div className={cn(PostImageS())}>
          <Image
            className="grayscale"
            style={{
              marginBottom: '10px',
              objectFit: 'cover',
              width: '100%',
              height: '60vh',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
            }}
            width={0}
            height={0}
            sizes="100vw"
            src="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
      <div className="container items-start md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">Blogs</div>
              <ChevronRight className="h-4 w-4" />
              <div className="font-medium text-foreground">{doc.title}</div>
            </div>
            <div className="space-y-2">
              <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>{doc.title}</h1>
            </div>
            {doc.radix ? (
              <div className="flex items-center space-x-2 pt-4">
                {doc.radix?.link && (
                  <Link
                    href={doc.radix.link}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(badgeVariants({ variant: 'secondary' }))}
                  >
                    <Icons.radix className="mr-1 h-3 w-3" />
                    Radix UI
                  </Link>
                )}
                {doc.radix?.api && (
                  <Link
                    href={doc.radix.api}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(badgeVariants({ variant: 'secondary' }))}
                  >
                    API Reference
                  </Link>
                )}
              </div>
            ) : null}
            <Separator className="my-4 md:my-6" />
            <Mdx code={doc.body.code} />
            <Separator className="my-4 md:my-6" />
            <DocsPager doc={doc} />
          </div>
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
              <ScrollArea className="pb-10">
                <DashboardTableOfContents toc={toc} />
              </ScrollArea>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
