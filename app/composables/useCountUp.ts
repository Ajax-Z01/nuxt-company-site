import { ref } from 'vue'

export function useCountUp(targetValue: string, duration = 1500) {
  const display = ref('0')

  const normalized = targetValue
    .replace(/\./g, '')
    .replace(/,/g, '.')
    .replace(/[^\d\.]/g, '')

  const numericValue = parseFloat(normalized) || 0
  const isPercent = targetValue.includes('%')
  const isPlus = targetValue.includes('+')

  let startTime: number | null = null

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp
    const progress = timestamp - startTime
    const progressRatio = Math.min(progress / duration, 1)
    const currentValue = Math.floor(progressRatio * numericValue)
    display.value = currentValue.toString() + (isPercent ? '%' : isPlus ? '+' : '')
    if (progress < duration) {
      requestAnimationFrame(step)
    } else {
      display.value = targetValue
    }
  }

  if (numericValue > 0) {
    requestAnimationFrame(step)
  } else {
    display.value = targetValue
  }

  return display
}
