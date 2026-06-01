<script setup>
import SectionHeading from "./SectionHeading.vue";
import SectionDecor from "./SectionDecor.vue";
import { FEATURES } from "../data/features.js";

const pad = (n) => String(n + 1).padStart(2, "0");
</script>

<template>
    <section id="features" class="relative isolate scroll-mt-24 py-20 sm:py-28">
        <SectionDecor variant="grid" accent="#89b4fa" glow="tl" />
        <div class="container-tight">
            <SectionHeading
                cmd="ls -la /features"
                subtitle="What Kitsudo does, on phone and watch."
            />

            <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <article
                    v-for="(f, i) in FEATURES"
                    :key="f.title"
                    class="terminal-box group flex flex-col p-5 transition-transform duration-200 hover:-translate-y-1"
                >
                    <div class="mb-3 flex items-center justify-between">
                        <span class="text-xs text-on-surface-muted"
                            >[{{ pad(i) }}]</span
                        >
                        <span class="text-2xl" aria-hidden="true">{{
                            f.icon
                        }}</span>
                    </div>
                    <h3
                        class="font-mono text-lg font-bold text-primary transition group-hover:text-scanline"
                    >
                        {{ f.title }}
                    </h3>
                    <p
                        class="mt-2 text-sm leading-relaxed text-on-surface-muted"
                    >
                        {{ f.details }}
                    </p>
                </article>
            </div>
        </div>
    </section>
</template>
