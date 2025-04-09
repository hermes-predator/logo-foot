
import * as React from "react"

// Breakpoints constants
export const MOBILE_BREAKPOINT = 768
export const SMALL_MOBILE_BREAKPOINT = 360

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Function to determine if device is mobile based on screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initialize on mount
    checkMobile()
    
    // Create media query listeners for responsiveness
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Modern event listener
    const onChange = () => checkMobile()
    mql.addEventListener("change", onChange)
    
    // Additional resize listener to catch all possible resize scenarios
    window.addEventListener("resize", checkMobile)
    
    // Cleanup
    return () => {
      mql.removeEventListener("change", onChange)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return !!isMobile
}

export function useIsSmallMobile() {
  const [isSmallMobile, setIsSmallMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Function to determine if device is a very small mobile device
    const checkSmallMobile = () => {
      setIsSmallMobile(window.innerWidth < SMALL_MOBILE_BREAKPOINT)
    }
    
    // Initialize on mount
    checkSmallMobile()
    
    // Create media query listeners for responsiveness
    const mql = window.matchMedia(`(max-width: ${SMALL_MOBILE_BREAKPOINT - 1}px)`)
    
    // Modern event listener
    const onChange = () => checkSmallMobile()
    mql.addEventListener("change", onChange)
    
    // Additional resize listener to catch all possible resize scenarios
    window.addEventListener("resize", checkSmallMobile)
    
    // Cleanup
    return () => {
      mql.removeEventListener("change", onChange)
      window.removeEventListener("resize", checkSmallMobile)
    }
  }, [])

  return !!isSmallMobile
}
