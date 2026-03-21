import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "~/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 border-[3px] border-border bg-background px-3 py-2 font-mono text-sm shadow-[var(--neo-shadow-offset)_var(--neo-shadow-offset)_0px_var(--neo-shadow-color)] outline-none transition-all duration-150 ease-out file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:translate-x-[var(--neo-shadow-offset)] focus-visible:translate-y-[var(--neo-shadow-offset)] focus-visible:shadow-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
