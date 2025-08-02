import { ref, onBeforeUnmount } from 'vue'

export function useScrollReveal() {
  const revealedItems = ref(new Set<number>())
  let observer: IntersectionObserver | null = null

  const observe = (elements: HTMLElement[]) => {
    if (observer) observer.disconnect()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute('data-index')
            if (indexAttr !== null) {
              const index = Number(indexAttr)
              if (!revealedItems.value.has(index)) {
                revealedItems.value.add(index)
                observer?.unobserve(entry.target)
              }
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer?.observe(el))
  }

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return {
    revealedItems,
    observe,
  }
}
