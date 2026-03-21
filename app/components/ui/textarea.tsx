import * as React from "react"

import { cn } from "~/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-20 w-full border-[3px] border-border bg-background px-3 py-2 font-mono text-sm shadow-[var(--neo-shadow-offset)_var(--neo-shadow-offset)_0px_var(--neo-shadow-color)] outline-none transition-all duration-150 ease-out placeholder:text-muted-foreground focus-visible:translate-x-[var(--neo-shadow-offset)] focus-visible:translate-y-[var(--neo-shadow-offset)] focus-visible:shadow-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
