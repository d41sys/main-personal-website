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


const articles = [
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title:
      '1 Lessons learned from growing a 6,338 people waitlist in 7 weeks 1 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "1 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '2 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "2 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '3 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "3 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '4 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "4 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '5 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "5 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '6 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "6 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '7 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "7 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
  },
];

export default function Page() {
  return (
    <div className="container relative pb-10">
      <ArticleHeader />
      <PageHeader className="max-w-full">
        <PageHeaderHeading className="md:text-3xl">All Ariticles</PageHeaderHeading>
        <div className="flex flex-col w-full">
          {articles.map((article) => (
            <ListItem article={article} />
          ))}
        </div>
      </PageHeader>
    </div>
  );
}
