import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 border-[3px] border-border bg-clip-padding font-heading text-sm font-bold uppercase tracking-wider whitespace-nowrap outline-none select-none transition-all duration-150 ease-out focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98] active:translate-x-[var(--neo-shadow-offset)] active:translate-y-[var(--neo-shadow-offset)] active:shadow-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-accent-foreground shadow-[var(--neo-shadow-offset)_var(--neo-shadow-offset)_0px_var(--neo-shadow-color)] hover:translate-x-[var(--neo-shadow-offset)] hover:translate-y-[var(--neo-shadow-offset)] hover:shadow-none",
        outline:
          "bg-background text-foreground shadow-[var(--neo-shadow-offset)_var(--neo-shadow-offset)_0px_var(--neo-shadow-color)] hover:translate-x-[var(--neo-shadow-offset)] hover:translate-y-[var(--neo-shadow-offset)] hover:shadow-none",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[var(--neo-shadow-offset)_var(--neo-shadow-offset)_0px_var(--neo-shadow-color)] hover:translate-x-[var(--neo-shadow-offset)] hover:translate-y-[var(--neo-shadow-offset)] hover:shadow-none",
        ghost:
          "border-transparent shadow-none hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive text-white shadow-[var(--neo-shadow-offset)_var(--neo-shadow-offset)_0px_var(--neo-shadow-color)] hover:translate-x-[var(--neo-shadow-offset)] hover:translate-y-[var(--neo-shadow-offset)] hover:shadow-none",
        link: "border-transparent text-foreground underline-offset-4 shadow-none hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        xs: "h-7 gap-1 px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 text-xs",
        lg: "h-12 gap-2 px-6 text-base",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
