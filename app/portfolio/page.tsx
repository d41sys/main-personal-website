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
import { DesignPostSmall } from '@/components/ui/design-post-small';
import { allDesigns } from '@/config/portfolio';

const animationFiles = [
  import('@/public/icons/Backward_lottie.json')
];


export default function Page() {
  return (
    <div className="container relative pb-10 selection:bg-purpleCustom selection:text-black">
      <DesignHeader />
      <PageHeader className="max-w-full">
        <PageHeaderHeading className="md:text-3xl">All Designs</PageHeaderHeading>
        <div className="flex flex-col w-full relative">
          {allDesigns.map((design, index) => (
            <DesignPostSmall design={design} key={index} />
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
