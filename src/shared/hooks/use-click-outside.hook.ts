import type { RefObject } from "react"
import { useEffect } from "react"

/**
 * A custom React hook that adds an event listener to detect clicks outside a specified element.
 *
 * @template T - The type of the element, which must extend HTMLElement.
 * @param ref - A reference to the element to listen for clicks outside.
 * @param handler - A callback function to be executed when a click outside the element occurs.
 * @returns {void}
 */
export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event)
      }
    }

    window.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("touchstart", handleClickOutside)

    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("touchstart", handleClickOutside)
    }
  }, [ref, handler])
}
