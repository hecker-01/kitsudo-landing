<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { BOOT_LOG } from '../data/site.js'

// A fuller, looping boot log as a nod to the inspiration.
const EXTRA = [
  '> Indexing tasks … 0 overdue, 3 due today',
  '> Cascade engine … armed',
  '> Quiet hours … 22:00–07:00',
  '> Material You … dynamic color available',
  '> Watch battery … 84%',
  '> Tip: swipe a task to complete or delete',
  '> heckr.dev // open source @ github.com/hecker-01/Kitsudo',
]
const FULL = [...BOOT_LOG, ...EXTRA]

const shown = ref([])
let timer = null
let i = 0

function tick() {
  shown.value.push(FULL[i % FULL.length])
  if (shown.value.length > 200) shown.value.shift()
  i += 1
  timer = setTimeout(tick, 350 + Math.random() * 250)
}

onMounted(() => (timer = setTimeout(tick, 200)))
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <main class="min-h-screen bg-background scanlines">
    <div class="container-tight max-w-3xl py-10">
      <div class="mb-4 flex items-center justify-between">
        <RouterLink to="/" class="text-sm text-on-surface-muted hover:text-primary">← cd ~/</RouterLink>
        <span class="text-xs text-on-surface-muted">kitsudo@boot — /var/log/kitsudo</span>
      </div>

      <div class="terminal-box p-5 sm:p-7">
        <div class="mb-4 flex items-center gap-3 border-b border-outline pb-3">
          <span class="term-dots inline-block w-10"></span>
          <span class="text-xs text-on-surface-muted">tail -f boot.log</span>
        </div>
        <pre class="max-h-[70vh] overflow-y-auto whitespace-pre-wrap break-words text-sm leading-relaxed">
<template v-for="(line, idx) in shown" :key="idx"><span
  :class="line.includes('Ready') ? 'text-green text-scanline' : 'text-on-surface-muted'"
>{{ line }}</span>
</template><span class="text-primary animate-cursor-pulse">▋</span></pre>
      </div>
    </div>
  </main>
</template>
