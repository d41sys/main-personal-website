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
      <PageHeader className="max-w-full">
        <PageHeaderHeading className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Featured Articles
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
        <div className="flex flex-row gap-10 w-full">
          {articles.filter((item, index) => index < 4).map((article) => (
            <FeaturedArticle article={article} />
          ))}
        </div>
      </PageHeader>
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
