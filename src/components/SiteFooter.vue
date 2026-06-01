<script setup>
import { RouterLink } from 'vue-router'
import { REPO_URL, RELEASES_URL, AUTHOR_URL, AUTHOR, APP_NAME } from '../data/site.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-outline bg-surface-highest">
    <div class="container-tight grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
      <!-- about -->
      <div>
        <div class="flex items-center gap-3">
          <img src="/logo.svg" alt="" class="h-8 w-8 object-contain" />
          <span class="font-mono text-lg font-bold text-primary">{{ APP_NAME }}</span>
        </div>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-on-surface-muted">
          A local-first task planner for Android, with a Wear OS companion. Open-source and private
          by design.
        </p>
      </div>

      <!-- links -->
      <div>
        <h4 class="cmd-heading mb-4 font-mono text-sm font-bold text-on-surface">links</h4>
        <ul class="space-y-2 text-sm text-on-surface-muted">
          <li>
            <a :href="REPO_URL" target="_blank" rel="noopener noreferrer" class="hover:text-primary">→ Source</a>
          </li>
          <li>
            <a :href="RELEASES_URL" target="_blank" rel="noopener noreferrer" class="hover:text-primary">→ Releases</a>
          </li>
          <li>
            <a :href="AUTHOR_URL" target="_blank" rel="noopener noreferrer" class="hover:text-primary">→ heckr.dev</a>
          </li>
          <li><RouterLink to="/logs" class="hover:text-primary">→ View boot logs</RouterLink></li>
          <li><RouterLink to="/privacy" class="hover:text-primary">→ Privacy</RouterLink></li>
        </ul>
      </div>

      <!-- contact -->
      <div>
        <h4 class="cmd-heading mb-4 font-mono text-sm font-bold text-on-surface">contact</h4>
        <ul class="space-y-2 text-sm text-on-surface-muted">
          <li>
            <a :href="`${REPO_URL}/issues`" target="_blank" rel="noopener noreferrer" class="hover:text-primary">
              → Report an issue
            </a>
          </li>
          <li>
            <a :href="AUTHOR_URL" target="_blank" rel="noopener noreferrer" class="hover:text-primary">→ heckr.dev</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-outline">
      <div class="container-tight flex flex-col items-center justify-between gap-2 py-5 text-xs text-on-surface-muted sm:flex-row">
        <span>© {{ year }} {{ APP_NAME }}, by {{ AUTHOR }}.</span>
        <span class="font-mono">// built local-first <span class="text-primary">▋</span></span>
      </div>
    </div>
  </footer>
</template>
