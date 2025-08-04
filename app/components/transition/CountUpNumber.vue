<script setup lang="ts">
import { ref, watch, onMounted, type Ref } from 'vue'
import { useCountUp } from '~/composables/useCountUp'

const props = defineProps<{
  target: string
  isActive: boolean
  duration?: number
}>()

const display = ref<string | number>('0')
let countUpDisplay: Ref<string | number> = ref('0')

onMounted(() => {
  watch(
    () => props.isActive,
    (active) => {
      if (active) {
        countUpDisplay = useCountUp(props.target, props.duration ?? 1500)
        watch(
          countUpDisplay,
          (val) => {
            display.value = val
          },
          { immediate: true }
        )
      } else {
        display.value = '0'
      }
    },
    { immediate: true }
  )
})
</script>

<template>
  <span>{{ display }}</span>
</template>
