import * as React from "react"

const LAPTOP_BREAKPOINT = 1280

// xl	1280px	@media (min-width: 1280px) { ... }
export function useIsLaptop() {
  const [isLaptop, setIsLaptop] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${LAPTOP_BREAKPOINT - 1}px)`)
    const onChange = () => {
        setIsLaptop(window.innerWidth < LAPTOP_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsLaptop(window.innerWidth < LAPTOP_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isLaptop
}
