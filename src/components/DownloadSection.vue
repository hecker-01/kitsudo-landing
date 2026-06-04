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
                <!-- app icon: fox on a One UI-style squircle -->
                <div
                    class="relative h-24 w-24 drop-shadow-[0_8px_6px_rgba(0,0,0,0.35)]"
                >
                    <svg
                        viewBox="0 0 100 100"
                        class="absolute inset-0 h-full w-full"
                        aria-hidden="true"
                    >
                        <defs>
                            <filter
                                id="iconBevel"
                                x="-20%"
                                y="-20%"
                                width="140%"
                                height="140%"
                            >
                                <!-- white inner highlight along the top edge -->
                                <feOffset
                                    in="SourceAlpha"
                                    dx="0"
                                    dy="1.5"
                                    result="downA"
                                />
                                <feGaussianBlur
                                    in="downA"
                                    stdDeviation="0.8"
                                    result="downB"
                                />
                                <feComposite
                                    in="SourceAlpha"
                                    in2="downB"
                                    operator="out"
                                    result="topEdge"
                                />
                                <feFlood
                                    flood-color="#ffffff"
                                    flood-opacity="0.2"
                                />
                                <feComposite
                                    in2="topEdge"
                                    operator="in"
                                    result="topShine"
                                />
                                <!-- dark inner shadow along the bottom edge -->
                                <feOffset
                                    in="SourceAlpha"
                                    dx="0"
                                    dy="-1.5"
                                    result="upA"
                                />
                                <feGaussianBlur
                                    in="upA"
                                    stdDeviation="1.2"
                                    result="upB"
                                />
                                <feComposite
                                    in="SourceAlpha"
                                    in2="upB"
                                    operator="out"
                                    result="bottomEdge"
                                />
                                <feFlood
                                    flood-color="#000000"
                                    flood-opacity="0.35"
                                />
                                <feComposite
                                    in2="bottomEdge"
                                    operator="in"
                                    result="bottomShade"
                                />
                                <feMerge>
                                    <feMergeNode in="SourceGraphic" />
                                    <feMergeNode in="topShine" />
                                    <feMergeNode in="bottomShade" />
                                </feMerge>
                            </filter>
                        </defs>
                        <path
                            d="M50,0 C13,0 0,13 0,50 C0,87 13,100 50,100 C87,100 100,87 100,50 C100,13 87,0 50,0 Z"
                            fill="#24284b"
                            filter="url(#iconBevel)"
                        />
                    </svg>
                    <img
                        src="/logo.svg"
                        alt=""
                        class="absolute inset-[8%] h-auto w-auto object-contain"
                    />
                </div>

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
                        class="rounded-md border border-outline px-7 py-3.5 font-semibold text-on-surface transition hover:border-primary hover:text-primary"
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
