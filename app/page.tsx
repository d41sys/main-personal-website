'use client';

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { StyleSwitcher } from "@/components/style-switcher"

export default function Page() {
  return (
    <div className="container relative pb-10">
      <StyleSwitcher />
      <PageHeader>
        <Link
          href="/docs/forms/react-hook-form"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          🎉 <Separator className="mx-2 h-4" orientation="vertical" /> Building
          forms with React Hook Form and Zod
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
        <PageHeaderHeading>Build your component library.</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </PageHeader>
    </div>
  );
}
