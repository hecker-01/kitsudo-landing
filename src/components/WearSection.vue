<script setup>
import SectionHeading from './SectionHeading.vue'
import SectionDecor from './SectionDecor.vue'
</script>

<template>
  <section id="wear" class="relative isolate scroll-mt-24 py-20 sm:py-28">
    <SectionDecor variant="rings" accent="#a6e3a1" glow="br" />
    <div class="container-tight">
    <SectionHeading cmd="ping wear-os" subtitle="Your tasks on your wrist, in sync." />

    <div class="terminal-box grid items-center gap-10 p-6 sm:p-10 md:grid-cols-2">
      <div>
        <h3 class="font-mono text-2xl font-bold text-primary text-scanline">Wear OS companion</h3>
        <p class="mt-4 leading-relaxed text-on-surface-muted">
          Check today's tasks, tick things off, and snooze reminders straight from your watch.
          Kitsudo keeps phone and watch in sync so your list is always the same on both.
        </p>
        <ul class="mt-6 space-y-2 text-sm">
          <li class="flex gap-3"><span class="text-green">✓</span> View &amp; complete tasks on the watch</li>
          <li class="flex gap-3"><span class="text-green">✓</span> Phone ↔ watch sync, no account needed</li>
          <li class="flex gap-3"><span class="text-green">✓</span> Reminders &amp; snooze from your wrist</li>
        </ul>
      </div>

      <!-- phone + watch glyph -->
      <div class="flex items-center justify-center gap-6">
        <div class="h-44 w-24 rounded-[1.4rem] border-4 border-outline bg-surface-highest p-1.5 sm:h-52 sm:w-28">
          <div class="flex h-full w-full flex-col gap-1.5 rounded-[1rem] bg-surface-elevated p-2">
            <div class="h-2 w-2/3 rounded bg-primary/70"></div>
            <div class="h-1.5 w-full rounded bg-outline"></div>
            <div class="h-1.5 w-5/6 rounded bg-outline"></div>
            <div class="mt-auto h-1.5 w-1/2 rounded bg-secondary/60"></div>
          </div>
        </div>

        <div class="flex flex-col items-center gap-1 text-primary">
          <span class="animate-cursor-pulse text-xl">⇄</span>
          <span class="text-[0.6rem] text-on-surface-muted">sync</span>
        </div>

        <div class="relative h-24 w-24 animate-float sm:h-28 sm:w-28">
          <div class="absolute inset-0 rounded-[1.6rem] border-4 border-outline bg-surface-highest p-1.5">
            <div class="flex h-full w-full flex-col items-center justify-center gap-1 rounded-[1.1rem] bg-surface-elevated">
              <span class="text-green">☑</span>
              <div class="h-1.5 w-2/3 rounded bg-primary/70"></div>
              <div class="h-1.5 w-1/2 rounded bg-outline"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
