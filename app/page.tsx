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
import { ProjectHeader } from '@/components/project-header';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useLayoutEffect } from 'react';

export default function Page() {

  return (
    <section className="container relative w-full">
      <StyleSwitcher />
      <AboutHeader />
      <ProjectHeader />
      <ArticleHeader />
      <DesignHeader />
    </section>
  );
}
