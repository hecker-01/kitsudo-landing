<script setup>
import { ref } from "vue";
import SectionHeading from "./SectionHeading.vue";
import SectionDecor from "./SectionDecor.vue";
import { RELEASES_URL } from "../data/site.js";

const FAQS = [
    {
        q: "Is Kitsudo free?",
        a: "Yes, completely free. No ads, no subscriptions, no in-app purchases.",
    },
    {
        q: "Is it open source?",
        a: "Yes. The full source is on GitHub at hecker-01/Kitsudo, by heckr.dev.",
    },
    {
        q: "How do I install it?",
        a: 'Download the latest APK from GitHub Releases and open it on your Android device. You may need to allow "install from unknown sources" for your browser or file manager.',
    },
    {
        q: "Does Kitsudo track me?",
        a: "No. Kitsudo is local, so your tasks stay on your device. There is no account, no cloud sync, and no analytics or tracking.",
    },
    {
        q: "Does it need an internet connection?",
        a: "No. Everything works fully offline. Phone and Wear OS sync happens directly between your devices.",
    },
];

const open = ref(0);
const toggle = (i) => (open.value = open.value === i ? -1 : i);
</script>

<template>
    <section id="faq" class="relative isolate scroll-mt-24 py-20 sm:py-28">
        <SectionDecor variant="code" accent="#b4befe" />
        <div class="container-tight">
            <SectionHeading cmd="man kitsudo" subtitle="Common questions." />

            <div class="space-y-3">
                <div
                    v-for="(f, i) in FAQS"
                    :key="f.q"
                    class="terminal-box overflow-hidden"
                >
                    <button
                        class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        :aria-expanded="open === i"
                        @click="toggle(i)"
                    >
                        <span class="font-mono font-semibold text-on-surface">
                            <span class="text-primary">?</span> {{ f.q }}
                        </span>
                        <span
                            class="text-primary transition-transform duration-300"
                            :class="open === i ? 'rotate-45' : ''"
                            >+</span
                        >
                    </button>
                    <div
                        class="grid transition-[grid-template-rows] duration-300 ease-out"
                        :class="open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                    >
                        <div class="overflow-hidden">
                            <p
                                class="px-5 pb-5 text-sm leading-relaxed text-on-surface-muted transition-opacity duration-300"
                                :class="open === i ? 'opacity-100' : 'opacity-0'"
                            >
                                <span class="text-green">&gt;</span> {{ f.a }}
                                <a
                                    v-if="f.q.startsWith('How')"
                                    :href="RELEASES_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-primary underline-offset-4 hover:underline"
                                    >Get the APK →</a
                                >
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
