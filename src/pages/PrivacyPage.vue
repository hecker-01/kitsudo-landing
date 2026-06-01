<script setup>
import { RouterLink } from 'vue-router'
import SectionDecor from '../components/SectionDecor.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { APP_NAME, AUTHOR } from '../data/site.js'
</script>

<template>
  <main class="relative isolate min-h-screen pt-28 pb-20">
    <SectionDecor variant="grid" accent="#cba6f7" glow="tr" :fade="false" />
    <div class="container-tight">
    <RouterLink to="/" class="text-sm text-on-surface-muted hover:text-primary">← cd ~/</RouterLink>

    <h1 class="mt-6 font-mono text-3xl font-bold sm:text-4xl">
      <span class="text-primary">$ </span>cat privacy.txt
    </h1>

    <div class="terminal-box mt-8 space-y-6 p-6 text-sm leading-relaxed text-on-surface-muted sm:p-9 sm:text-base">
      <p>
        <span class="text-green">&gt;</span> {{ APP_NAME }} is <span class="text-primary">local-first</span>.
        Your tasks, subtasks, deadlines, and settings live on your device. They are not uploaded to
        any server we run.
      </p>

      <div>
        <h2 class="mb-2 font-mono font-bold text-on-surface">No account</h2>
        <p>You don't sign up or log in. There is no user account, ever.</p>
      </div>

      <div>
        <h2 class="mb-2 font-mono font-bold text-on-surface">No tracking, no analytics</h2>
        <p>
          {{ APP_NAME }} does not include third-party analytics, advertising, or tracking SDKs. We do
          not collect usage data or build a profile of you.
        </p>
      </div>

      <div>
        <h2 class="mb-2 font-mono font-bold text-on-surface">Wear OS sync</h2>
        <p>
          Sync between your phone and watch happens directly between your own paired devices via the
          platform's data layer. It does not pass through our servers.
        </p>
      </div>

      <div>
        <h2 class="mb-2 font-mono font-bold text-on-surface">Permissions &amp; reminders</h2>
        <p>
          Notification permissions are used solely to deliver the deadline reminders you schedule.
          Nothing is sent off-device to make that happen.
        </p>
      </div>

      <div>
        <h2 class="mb-2 font-mono font-bold text-on-surface">Open source</h2>
        <p>
          Because {{ APP_NAME }} is open-source, you can verify all of the above by reading the code.
        </p>
      </div>

      <p class="border-t border-outline pt-5 text-xs">
        This page describes the app's design intent and is not a substitute for legal advice. © {{ AUTHOR }}.
      </p>
    </div>
    </div>
  </main>
  <SiteFooter />
</template>
