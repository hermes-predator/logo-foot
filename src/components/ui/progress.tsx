
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  orientation?: "horizontal" | "vertical"
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, orientation = "horizontal", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative overflow-hidden bg-secondary",
      orientation === "horizontal" 
        ? "h-4 w-full rounded-full" 
        : "w-1 h-full rounded-full",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "flex-1 transition-all",
        orientation === "horizontal" 
          ? "h-full w-full bg-primary" 
          : "w-full bg-gradient-to-t from-purple-300 via-purple-500 to-purple-700"
      )}
      style={{ 
        transform: orientation === "horizontal" 
          ? `translateX(-${100 - (value || 0)}%)` 
          : `translateY(${100 - (value || 0)}%)` 
      }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
