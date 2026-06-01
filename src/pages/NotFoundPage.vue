<script setup>
import { useRoute, RouterLink } from "vue-router";
import SectionDecor from "../components/SectionDecor.vue";
import { REPO_URL } from "../data/site.js";

const route = useRoute();
</script>

<template>
    <main
        class="relative isolate flex min-h-screen items-center justify-center px-5"
    >
        <SectionDecor variant="rings" accent="#cba6f7" glow="c" :fade="false" />
        <div class="terminal-box w-full max-w-xl p-7 sm:p-10">
            <div
                class="mb-4 flex items-center gap-3 border-b border-outline pb-3"
            >
                <span class="term-dots inline-block w-10"></span>
                <span class="text-xs text-on-surface-muted"
                    >kitsudo@web: error</span
                >
            </div>

            <pre
                class="whitespace-pre-wrap break-words text-sm leading-relaxed text-on-surface-muted"
            >
<span class="text-primary">$</span> cat {{ route.fullPath }}
<span class="text-red">error:</span> 404: no such file or directory

<span class="text-on-surface">The page you asked for doesn't exist.</span>
The fox couldn't find it either. 🦊
</pre>

            <div class="mt-6 flex flex-wrap gap-4">
                <RouterLink
                    to="/"
                    class="rounded-md border border-primary bg-primary/10 px-5 py-2.5 font-semibold text-primary transition hover:bg-primary hover:text-background"
                >
                    [ cd ~/ ]
                </RouterLink>
                <a
                    :href="REPO_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rounded-md border border-outline px-5 py-2.5 font-semibold text-on-surface transition hover:border-secondary hover:text-secondary"
                >
                    [ view source ]
                </a>
            </div>
        </div>
    </main>
</template>
