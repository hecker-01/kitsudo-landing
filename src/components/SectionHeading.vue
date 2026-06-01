<script setup>
import { watch } from 'vue'
import { useInView } from '../composables/useInView.js'
import { useTypewriter } from '../composables/useTypewriter.js'

const props = defineProps({
  // The command text WITHOUT the leading "$ " (added by styling).
  cmd: { type: String, required: true },
  subtitle: { type: String, default: '' },
})

const { target, isInView } = useInView()
const { output, isComplete, run } = useTypewriter(props.cmd, { delay: 55, start: false })

watch(isInView, (v) => v && run())
</script>

<template>
  <div ref="target" class="mb-10">
    <h2 class="font-mono text-2xl font-bold sm:text-3xl">
      <span class="text-primary">$ </span><span class="text-on-surface">{{ output }}</span><span
        v-if="isInView && !isComplete"
        class="text-primary animate-cursor-pulse"
        >▋</span
      >
    </h2>
    <p v-if="subtitle" class="mt-2 max-w-2xl text-sm text-on-surface-muted sm:text-base">
      {{ subtitle }}
    </p>
  </div>
</template>
