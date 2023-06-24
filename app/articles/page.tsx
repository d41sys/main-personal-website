import '../globals.css';
import { Timeline } from '@/components/timeline';
import Link from 'next/link';
import { Gallery } from '@/components/gallery';
import { GallerySlider } from '@/components/gallery-slider';
import { FeaturedArticle } from '@/components/ui/featured-article';
import { Separator } from '@/components/ui/separator';
import { ChevronRight } from 'lucide-react';
import { ListItem } from '@/components/list-item';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { ArticleHeader } from '@/components/article-header';
import { articles, articless } from '@/config/articles';
import { allArticles } from 'contentlayer/generated';

export default function Page() {
  return (
    <div className="container relative pb-10">
      <ArticleHeader />
      <PageHeader className="max-w-full">
        <PageHeaderHeading className="md:text-3xl">All Ariticles</PageHeaderHeading>
        <div className="flex flex-col w-full">
          {allArticles.sort((a, b) => b.id - a.id).map((article) => (
            <ListItem article={article} key={article.id}/>
          ))}
        </div>
      </PageHeader>
    </div>
  );
}
