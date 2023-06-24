import Link from "next/link"
import { Articles } from "contentlayer/generated"
import { NavItem, NavItemWithChildren } from "types/nav"

import { docsConfig } from "@/config/articles"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from '@/lib/utils';

interface ArticlesPagerProps {
  article: Articles
}

export function ArticlesPager({ article }: ArticlesPagerProps) {
  const pager = getPagerForDoc(article)

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "shadow" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "shadow" }))}
        >
          {pager.next.title}
          <Icons.chevronRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

export function getPagerForDoc(article: Articles) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null]
  const activeIndex = flattenedLinks.findIndex(
    (link) => article.slug === link?.href
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}

export function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link)
    }, [])
    .filter((link) => !link?.disabled)
}