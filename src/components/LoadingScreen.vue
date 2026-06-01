<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { BOOT_LOG } from "../data/site.js";

const emit = defineEmits(["done"]);

const lines = ref([]);
const finished = ref(false);
let timers = [];
let i = 0;

function finish() {
    if (finished.value) return;
    finished.value = true;
    timers.forEach(clearTimeout);
    // brief fade then notify parent
    setTimeout(() => emit("done"), 450);
}

function next() {
    if (i >= BOOT_LOG.length) {
        timers.push(setTimeout(finish, 500));
        return;
    }
    lines.value.push(BOOT_LOG[i]);
    i += 1;
    const delay = 180 + Math.random() * 220;
    timers.push(setTimeout(next, delay));
}

onMounted(() => {
    timers.push(setTimeout(next, 300));
});

onUnmounted(() => timers.forEach(clearTimeout));
</script>

<template>
    <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 scanlines"
        :class="finished ? 'pointer-events-none opacity-0' : 'opacity-100'"
        role="status"
        aria-label="Loading Kitsudo"
    >
        <div class="container-tight max-w-2xl">
            <div class="terminal-box pixel-corners p-5 sm:p-7">
                <div
                    class="mb-4 flex items-center gap-3 border-b border-outline pb-3"
                >
                    <span class="term-dots inline-block w-10"></span>
                    <span class="text-xs text-on-surface-muted"
                        >kitsudo@boot:/dev/tty0</span
                    >
                </div>

                <pre
                    class="min-h-[12rem] whitespace-pre-wrap break-words text-sm leading-relaxed sm:text-base"
                >
<template v-for="(line, idx) in lines" :key="idx"><span
  :class="line.includes('Ready') ? 'text-green text-scanline' : 'text-on-surface'"
>{{ line }}</span>
</template><span v-if="!finished" class="text-primary animate-cursor-pulse">▋</span></pre>
            </div>

            <button
                v-if="!finished"
                class="mt-4 text-xs text-on-surface-muted underline-offset-4 transition hover:text-primary hover:underline"
                @click="finish"
            >
                [ skip ]
            </button>
        </div>
    </div>
</template>
