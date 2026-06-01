<script setup>
import { computed } from 'vue'

// Per-section decorative backdrop. Drop inside a `relative isolate` section.
// Cohesive terminal motifs, each tinted with a Catppuccin accent.
const props = defineProps({
  // dots | grid | diagonal | rings | code | glow
  variant: { type: String, default: 'dots' },
  // 6-digit hex accent (no alpha)
  accent: { type: String, default: '#cba6f7' },
  // glow position: c | tl | tr | bl | br
  glow: { type: String, default: 'c' },
  // fade neighbouring section edges into the background
  fade: { type: Boolean, default: true },
})

const a = (alpha) => `${props.accent}${alpha}`

const patternStyle = computed(() => {
  switch (props.variant) {
    case 'grid':
      return {
        backgroundImage: `linear-gradient(${a('14')} 1px, transparent 1px), linear-gradient(90deg, ${a('14')} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }
    case 'diagonal':
      return {
        backgroundImage: `repeating-linear-gradient(45deg, ${a('12')} 0, ${a('12')} 1px, transparent 1px, transparent 15px)`,
      }
    case 'rings':
      return {
        backgroundImage: `repeating-radial-gradient(circle at 50% -10%, transparent 0, transparent 58px, ${a('10')} 59px, ${a('10')} 60px)`,
      }
    case 'dots':
      return {
        backgroundImage: `radial-gradient(${a('22')} 1px, transparent 1.6px)`,
        backgroundSize: '22px 22px',
      }
    default:
      return {}
  }
})

const glowPos = computed(
  () =>
    ({
      c: 'left-1/2 -top-48 -translate-x-1/2',
      tl: '-left-40 -top-40',
      tr: '-right-40 -top-40',
      bl: '-left-40 -bottom-40',
      br: '-right-40 -bottom-40',
    })[props.glow] || 'left-1/2 -top-48 -translate-x-1/2',
)

// A faint command-log watermark for the `code` variant.
const CODE_LINES = [
  '$ task add "ship release" --due fri',
  '> created #42 · subtasks: 3',
  '$ task ls --filter today --sort deadline',
  '> 2 due · 1 overdue · cascade: on',
  '$ task done #41 && task snooze #39 1h',
  '> ✓ completed · reminder rescheduled',
  '$ sync --wear  // phone ↔ watch',
  '> paired · local-first · no account',
]
</script>

<template>
  <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <!-- accent glow -->
    <div
      v-if="variant !== 'code'"
      class="absolute h-[34rem] w-[34rem] rounded-full blur-3xl"
      :class="glowPos"
      :style="{ background: a('1f') }"
    />

    <!-- pattern layer (radially masked so it fades toward the edges) -->
    <div
      v-if="variant !== 'glow' && variant !== 'code'"
      class="absolute inset-0"
      :style="{
        ...patternStyle,
        maskImage: 'radial-gradient(120% 80% at 50% 30%, black 35%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(120% 80% at 50% 30%, black 35%, transparent 80%)',
      }"
    />

    <!-- command-log watermark -->
    <pre
      v-if="variant === 'code'"
      class="absolute -right-6 top-6 select-none whitespace-pre text-right text-xs leading-7 opacity-[0.05] sm:text-sm"
      :style="{ color: accent }"
    >{{ CODE_LINES.join('\n') }}</pre>

    <!-- blend edges into neighbouring sections -->
    <template v-if="fade">
      <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </template>
  </div>
</template>
