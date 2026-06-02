<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const NAV = [
    { id: "features", label: "features" },
    { id: "themes", label: "themes" },
    { id: "screenshots", label: "screenshots" },
    { id: "wear", label: "wear" },
    { id: "faq", label: "faq" },
];

const scrolled = ref(false);
const menuOpen = ref(false);

function onScroll() {
    scrolled.value = window.scrollY > 16;
}

function go(id) {
    menuOpen.value = false;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

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
            scrolled
                ? 'border-b border-outline bg-background/80 backdrop-blur-md'
                : 'border-b border-transparent'
        "
    >
        <nav class="container-tight flex h-16 items-center justify-between">
            <!-- brand -->
            <button
                class="group flex items-center gap-2.5 font-mono font-bold"
                @click="go('top')"
            >
                <img
                    src="/logo.svg"
                    alt="Kitsudo"
                    class="h-8 w-8 object-contain transition group-hover:rotate-6"
                />
                <span class="text-on-surface">
                    <span class="text-primary">~/</span>kitsudo
                </span>
            </button>

            <!-- desktop links -->
            <ul class="hidden items-center gap-1 md:flex">
                <li v-for="item in NAV" :key="item.id">
                    <button
                        class="rounded-md px-3 py-2 font-mono text-sm text-on-surface-muted transition hover:bg-primary/10 hover:text-primary"
                        @click="go(item.id)"
                    >
                        {{ item.label }}
                    </button>
                </li>
            </ul>

            <div class="flex items-center gap-2">
                <button
                    class="hidden rounded-md border border-primary bg-primary/10 px-4 py-2 font-mono text-sm font-semibold text-primary transition hover:bg-primary hover:text-background sm:inline-block"
                    @click="go('download')"
                >
                    [ download ]
                </button>

                <!-- mobile toggle -->
                <button
                    class="flex h-9 w-9 items-center justify-center rounded-md border border-outline text-on-surface transition hover:border-primary hover:text-primary md:hidden"
                    :aria-expanded="menuOpen"
                    aria-label="Toggle menu"
                    @click="menuOpen = !menuOpen"
                >
                    <span class="font-mono text-lg leading-none">{{
                        menuOpen ? "✕" : "≡"
                    }}</span>
                </button>
            </div>
        </nav>

        <!-- mobile menu -->
        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="-translate-y-2 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-2 opacity-0"
        >
            <div
                v-show="menuOpen"
                class="border-b border-outline bg-background/95 backdrop-blur-md md:hidden"
            >
                <ul class="container-tight flex flex-col py-3">
                    <li v-for="item in NAV" :key="item.id">
                        <button
                            class="w-full rounded-md px-3 py-2.5 text-left font-mono text-sm text-on-surface-muted transition hover:bg-primary/10 hover:text-primary"
                            @click="go(item.id)"
                        >
                            <span class="text-primary">$</span> {{ item.label }}
                        </button>
                    </li>
                    <li>
                        <button
                            class="mt-1 w-full rounded-md border border-primary bg-primary/10 px-3 py-2.5 text-left font-mono text-sm font-semibold text-primary transition hover:bg-primary hover:text-background"
                            @click="go('download')"
                        >
                            [ download ]
                        </button>
                    </li>
                </ul>
            </div>
        </transition>
    </header>
</template>
