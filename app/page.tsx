'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Icons } from '@/components/icons';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { StyleSwitcher } from '@/components/style-switcher';
import { AboutHeader } from '@/components/about-header';
import { ArticleHeader } from '@/components/article-header';
import { DesignHeader } from '@/components/design-header';


export default function Page() {
  return (
    <div className="container relative pb-10">
      <StyleSwitcher />
      <AboutHeader />
      <ArticleHeader />  
      <DesignHeader />
    </div>
  );
}
