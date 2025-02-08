"use client"

import { useEffect, useState } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Set initial value
    onChange()

    // Add event listener
    window.addEventListener("resize", onChange)

    // Clean up
    return () => window.removeEventListener("resize", onChange)
  }, []) // Empty dependency array means this effect runs once on mount

  return isMobile
}
