import { docsConfig } from "@/config/articles"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DocsSidebarNav } from "@/components/sidebar-nav"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <>
      {/* <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
        <ScrollArea className="py-6 pr-6 lg:py-8">
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </ScrollArea>
      </aside> */}
      {children}
    </>
  )
}