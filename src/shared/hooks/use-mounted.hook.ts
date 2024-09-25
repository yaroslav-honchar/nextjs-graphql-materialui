import { useEffect, useState } from "react"

/**
 * A custom React hook that returns a boolean indicating whether the component is currently mounted.
 *
 * @returns A boolean indicating whether the component is currently mounted.
 *
 * @example
 * const isComponentMounted = useMounted();
 * console.log(isComponentMounted); // true when component is mounted, false otherwise
 */
export const useMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect((): void => {
    setIsMounted(true)
  }, [])

  return isMounted
}
