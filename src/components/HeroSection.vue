<script setup>
import SectionDecor from "./SectionDecor.vue";
import { useTypewriter } from "../composables/useTypewriter.js";
import { TAGLINE, REPO_URL } from "../data/site.js";

const { output: title, isComplete } = useTypewriter("KITSUDO", {
    delay: 110,
    startDelay: 250,
});

function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
    <section
        class="relative isolate flex min-h-[92vh] items-center pt-24 pb-28 md:pb-0"
        id="top"
    >
        <SectionDecor variant="rings" accent="#cba6f7" glow="c" :fade="false" />
        <div class="container-tight grid items-center gap-12 md:grid-cols-2">
            <div class="animate-fade-in">
                <h1
                    class="font-mono text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
                >
                    <span class="text-on-surface-muted">&gt; </span
                    ><span class="text-primary text-scanline">{{ title }}</span
                    ><span
                        v-if="!isComplete"
                        class="text-primary animate-cursor-pulse"
                        >▋</span
                    >
                </h1>

                <p
                    class="mt-6 max-w-md text-base leading-relaxed text-on-surface-muted sm:text-lg"
                >
                    {{ TAGLINE }}
                </p>

                <div class="mt-8 flex flex-wrap gap-4">
                    <button
                        type="button"
                        class="group rounded-md border border-primary bg-primary/10 px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-background hover:shadow-[0_0_28px_-4px_rgba(203,166,247,0.7)]"
                        @click="scrollTo('download')"
                    >
                        [ Download Kitsudo ]
                    </button>
                    <a
                        :href="REPO_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-md border border-outline px-6 py-3 font-semibold text-on-surface transition hover:border-primary hover:text-primary"
                    >
                        [ Build from source ]
                    </a>
                </div>
            </div>

            <!-- fox -->
            <div class="flex justify-center md:justify-end">
                <img
                    src="/logo.svg"
                    alt="Kitsudo fox mascot"
                    class="h-48 w-48 object-contain sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                />
            </div>
        </div>

        <!-- scroll cue -->
        <button
            class="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-on-surface-muted transition hover:text-primary"
            @click="scrollTo('features')"
        >
            ▼ scroll
        </button>
    </section>
</template>
