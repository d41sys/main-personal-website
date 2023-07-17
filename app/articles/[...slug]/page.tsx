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

const postHeaderStyle = cva(' w-full flex items-center justify-center relative z-[-1] flex-col');
const postTitleStyle = cva(
  'text-center md:max-w-[60%] md:leading-[90px] md:text-[72px] pt-[20vh] z-[3] z-[3] h-[60vh] text-white',
);

const PostImageS = cva(
  'bg-black bg-no-repeat h-[60vh]	bg-center	bg-cover fixed	w-full top-0 left-0 z-[2] will-change-transform after:absolute after:w-full after:h-full after:bg-gradient-post after:will-change-transform after:z-[2] after:top-0 after:left-0 lg:absolute',
);

interface ArticlePageProps {
  params: {
    slug: string[];
  };
}

async function getArticleFromParams({ params }: ArticlePageProps) {
  const slug = params.slug?.join('/') || '';
  const article = allArticles.find((article) => article.slugAsParams === slug);

  if (!article) {
    {};
  }

  return article;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleFromParams({ params });

  console.log(!article)
  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: absoluteUrl(article.slug),
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
      title: article.title,
      description: article.description,
      images: [siteConfig.ogImage],
      creator: '@d41sy',
    },
  };
}

export async function generateStaticParams(): Promise<ArticlePageProps['params'][]> {
  return allArticles.map((article) => ({
    slug: article.slugAsParams.split('/'),
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleFromParams({ params });

  if (!article) {
    notFound();
  }

  const toc = await getTableOfContents(article.body.raw);
  return (
    <>
      <div className={cn(postHeaderStyle())}>
        <div className={cn(postTitleStyle())}>
          <h1>{article.title}</h1>
          {article.description && (
            <p className="text-lg">
              <Balancer>{article.description}</Balancer>
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
            src={article.img}
            alt=""
          />
        </div>
      </div>
      <div className="container items-start md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">Articles</div>
              <ChevronRight className="h-4 w-4" />
              <div className="font-medium text-foreground">{article.title}</div>
            </div>
            <div className="space-y-2">
              <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
                {article.title}
              </h1>
            </div>
            {article.radix ? (
              <div className="flex items-center space-x-2 pt-4">
                {article.radix?.link && (
                  <Link
                    href={article.radix.link}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(badgeVariants({ variant: 'secondary' }))}
                  >
                    <Icons.radix className="mr-1 h-3 w-3" />
                    Radix UI
                  </Link>
                )}
                {article.radix?.api && (
                  <Link
                    href={article.radix.api}
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
            <Mdx code={article.body.code} />
            <Separator className="my-4 md:my-6" />
            <ArticlesPager article={article} />
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
