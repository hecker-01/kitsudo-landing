<script setup>
import SectionHeading from "./SectionHeading.vue";
import SectionDecor from "./SectionDecor.vue";
import { Play } from "lucide-vue-next";
import { RELEASES_URL, REPO_URL, PLAY_URL } from "../data/site.js";
</script>

<template>
    <section id="download" class="relative isolate scroll-mt-24 py-20 sm:py-28">
        <SectionDecor variant="glow" accent="#cba6f7" glow="c" />
        <div class="container-tight">
            <SectionHeading
                cmd="wget kitsudo.apk"
                subtitle="Free, open-source, and ready to install."
            />

            <div
                class="terminal-box flex flex-col items-center gap-6 p-8 text-center sm:p-12"
            >
                <img
                    src="/logo.svg"
                    alt=""
                    class="h-20 w-20 object-contain"
                    style="
                        filter: drop-shadow(0 0 20px rgba(203, 166, 247, 0.45));
                    "
                />

                <div class="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="https://github.com/hecker-01/Kitsudo/releases/latest"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-md border border-primary bg-primary/10 px-7 py-3.5 font-semibold text-primary transition hover:bg-primary hover:text-background hover:shadow-[0_0_28px_-4px_rgba(203,166,247,0.7)]"
                    >
                        [ Download APK ]
                    </a>

                    <!-- Play Store badge: only shown once a listing URL is set. -->
                    <a
                        v-if="PLAY_URL"
                        :href="PLAY_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-3 rounded-md border border-outline bg-surface px-5 py-3 transition hover:border-secondary"
                    >
                        <Play :size="22" class="fill-current" />
                        <span class="text-left leading-tight">
                            <span
                                class="block text-[0.6rem] uppercase tracking-wider text-on-surface-muted"
                                >Get it on</span
                            >
                            <span class="block font-semibold">Google Play</span>
                        </span>
                    </a>

                    <a
                        :href="REPO_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-md border border-outline px-7 py-3.5 font-semibold text-on-surface transition hover:border-secondary hover:text-secondary"
                    >
                        [ View source ]
                    </a>
                </div>

                <p
                    class="max-w-md text-xs leading-relaxed text-on-surface-muted"
                >
                    Installing the APK? You may need to enable
                    <span class="text-on-surface"
                        >"install from unknown sources"</span
                    >
                    for your browser or file manager in Android settings. The
                    APK is built straight from the open-source releases.
                </p>
            </div>
        </div>
    </section>
</template>
