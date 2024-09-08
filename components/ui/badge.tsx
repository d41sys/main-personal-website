import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
        uidesign:
          "max-w-[90px] bg-gradient-to-r from-rose-400 to-orange-300 hover:bg-gradient-to-r from-rose-400 to-orange-300/80 border-black",
        code:
          "max-w-[60px] bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
        illus:
          "max-w-[120px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 hover:bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400/80 border-black text-primary-foreground",
        secondary:
          "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive:
          "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
        article:
          "max-w-[100px] bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
        sideTitle: "bg-primary border-transparent text-primary-foreground",
        sideTitleRe: "border border-black text-black bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }