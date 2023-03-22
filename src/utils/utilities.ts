// utilities.ts

// prevent user scrolling
export const onPageLoad = () => {
  const scrollable = document.getElementById("scrollable")
  // prevent wheel scrolling
  document.addEventListener("wheel", (e: WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }, {passive: false})
  // prevent keyboard scrolling
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (["ArrowLeft", "ArrowRight", "Tab"].includes(e.code)) {
      e.preventDefault();
      return false
    }
  })
  // prevent touch scrolling
  scrollable?.addEventListener('touchmove', (e: TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }, {passive: false})
}