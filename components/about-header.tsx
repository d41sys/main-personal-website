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

export function AboutHeader() {
  return (
    <div className="flex flex-row mt-10 selection:bg-pinkCustom selection:text-black justify-between">
      <PageHeader className="-mt-10 flex-initial">
        <PageHeaderHeading className="text-transparent bg-clip-text bg-gradient-135 from-pinkCustom to-purpleCustom">
          Welcome to my home
        </PageHeaderHeading>
        <Link
          href="/about"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          🎉 <Separator className="mx-2 h-4" orientation="vertical" /> Building forms with React
          Hook Form and Zod
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your apps. Accessible.
          Customizable. Open Source.
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'shadow' }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </PageHeader>
      <Player
        autoplay
        loop
        src="https://lottie.host/74e15f43-265d-440c-91f7-981a19c57509/hKAK9Xc3mv.json"
        style={{ height: '300px', width: '700px' , flex: 'auto'}}
      ></Player>
    </div>
  );
}
