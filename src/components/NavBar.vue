<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { REPO_URL, APP_NAME } from "../data/site.js";

const LINKS = [
    { label: "Features", hash: "#features" },
    { label: "Themes", hash: "#themes" },
    { label: "Wear OS", hash: "#wear" },
    { label: "FAQ", hash: "#faq" },
];

const scrolled = ref(false);
const open = ref(false);

const onScroll = () => (scrolled.value = window.scrollY > 12);
onMounted(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
    <header
        class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
        :class="
            scrolled || open
                ? 'border-b border-outline/60 bg-background/80 backdrop-blur-xl'
                : 'border-b border-transparent'
        "
    >
        <nav class="container-tight flex h-16 items-center justify-between">
            <!-- brand -->
            <RouterLink
                to="/"
                class="flex items-center gap-2.5"
                @click="open = false"
            >
                <img src="/logo.svg" alt="" class="h-7 w-7 object-contain" />
                <span class="text-base font-semibold tracking-tight">{{
                    APP_NAME
                }}</span>
            </RouterLink>

            <!-- desktop links -->
            <div class="hidden items-center gap-1 md:flex">
                <RouterLink
                    v-for="l in LINKS"
                    :key="l.hash"
                    :to="{ path: '/', hash: l.hash }"
                    class="rounded-lg px-3 py-2 text-sm text-on-surface-muted transition hover:text-on-surface"
                >
                    {{ l.label }}
                </RouterLink>
            </div>

            <!-- desktop actions -->
            <div class="hidden items-center gap-3 md:flex">
                <a
                    :href="REPO_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-on-surface-muted transition hover:text-on-surface"
                    >Source</a
                >
                <a
                    href="https://github.com/hecker-01/Kitsudo/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-background transition hover:bg-primary-hover"
                    >Download</a
                >
            </div>

            <!-- mobile toggle -->
            <button
                class="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-muted transition hover:bg-surface-elevated/60 hover:text-on-surface md:hidden"
                :aria-expanded="open"
                aria-label="Toggle menu"
                @click="open = !open"
            >
                <span class="text-lg leading-none">{{ open ? "✕" : "☰" }}</span>
            </button>
        </nav>

        <!-- mobile menu -->
        <div
            v-show="open"
            class="border-t border-outline/60 bg-background/95 backdrop-blur-xl md:hidden"
        >
            <div class="container-tight flex flex-col gap-1 py-4">
                <RouterLink
                    v-for="l in LINKS"
                    :key="l.hash"
                    :to="{ path: '/', hash: l.hash }"
                    class="rounded-lg px-3 py-2.5 text-sm text-on-surface-muted transition hover:bg-surface-elevated/60 hover:text-on-surface"
                    @click="open = false"
                    >{{ l.label }}</RouterLink
                >
                <a
                    :href="REPO_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rounded-lg px-3 py-2.5 text-sm text-on-surface-muted transition hover:bg-surface-elevated/60 hover:text-on-surface"
                    @click="open = false"
                    >Source</a
                >
                <a
                    href="https://github.com/hecker-01/Kitsudo/releases/latest"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-1 rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-semibold text-background"
                    @click="open = false"
                    >Download</a
                >
            </div>
        </div>
    </header>
</template>
