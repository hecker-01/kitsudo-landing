<script setup>
import SectionDecor from "./SectionDecor.vue";
import { useTypewriter } from "../composables/useTypewriter.js";
import { TAGLINE, RELEASES_URL } from "../data/site.js";

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
        class="relative isolate flex min-h-[92vh] items-center pt-24"
        id="top"
    >
        <SectionDecor variant="rings" accent="#cba6f7" glow="c" :fade="false" />
        <div class="container-tight grid items-center gap-12 md:grid-cols-2">
            <!-- copy -->
            <div class="animate-fade-in">
                <p class="mb-4 text-sm text-on-surface-muted">
                    <span class="text-primary">~/heckr.dev</span> $ ./kitsudo
                    --start
                </p>

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
                        class="group rounded-md border border-primary bg-primary/10 px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-background hover:shadow-[0_0_28px_-4px_rgba(203,166,247,0.7)]"
                        @click="scrollTo('download')"
                    >
                        [ Download APK ]
                    </button>
                    <a
                        :href="RELEASES_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-md border border-outline px-6 py-3 font-semibold text-on-surface transition hover:border-secondary hover:text-secondary"
                    >
                        [ View releases ]
                    </a>
                </div>
            </div>

            <!-- fox -->
            <div class="flex justify-center md:justify-end">
                <div class="relative">
                    <div
                        class="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl"
                    ></div>
                    <img
                        src="/logo.svg"
                        alt="Kitsudo fox mascot"
                        class="h-56 w-56 animate-float object-contain sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                        style="
                            filter: drop-shadow(
                                0 0 28px rgba(203, 166, 247, 0.45)
                            );
                        "
                    />
                </div>
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
