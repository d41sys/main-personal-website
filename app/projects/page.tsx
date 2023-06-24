'use client';

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
import { DesignPost } from '@/components/ui/design-post';
import { DesignHeader } from '@/components/design-header';
import { Player } from '@lottiefiles/react-lottie-player';
import Backward_lottie from "@/public/icons/Folder-Add_lottie.json";
import { Icons } from '@/components/icons';

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
  }
];

const animationFiles = [
  import('@/public/icons/Backward_lottie.json')
];


export default function Page() {
  return (
    <div className="container relative pb-10">
      <DesignHeader />
      <PageHeader className="max-w-full">
        <PageHeaderHeading className="md:text-3xl">All Ariticles</PageHeaderHeading>
        <div className="flex flex-col w-full">
          {designs.map((article) => (
            <ListItem article={article} />
          ))}
        </div>
      </PageHeader>
      {/* {animationFiles.map((icon) => <Player
        hover
        src={Icons.moonIcon}
        style={{ height: '300px', width: '700px' , flex: 'auto'}}
      ></Player>)} */}
    </div>
  );
}
