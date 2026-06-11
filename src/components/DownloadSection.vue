<script setup>
import { ref } from "vue";
import SectionHeading from "./SectionHeading.vue";
import SectionDecor from "./SectionDecor.vue";
import { RELEASES_URL, REPO_URL, PLAY_URL, PLAY_AVAILABLE } from "../data/site.js";

// While the app is in closed testing, the Play badge is disabled and flashes
// a "coming soon" note on click for a few seconds instead of navigating.
const showSoon = ref(false);
function flashSoon() {
    showSoon.value = true;
    setTimeout(() => {
        showSoon.value = false;
    }, 2000);
}
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
                    <!-- Play Store badge: live link once available, otherwise a
                         disabled button that reveals "coming soon" on click. -->
                    <a
                        v-if="PLAY_AVAILABLE"
                        :href="PLAY_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-3 rounded-md border border-primary bg-primary/10 px-7 py-3 text-primary transition hover:bg-primary hover:text-background hover:shadow-[0_0_28px_-4px_rgba(203,166,247,0.7)]"
                    >
                        <svg
                            viewBox="0 0 640 640"
                            class="h-5 w-5 shrink-0 fill-current"
                            aria-hidden="true"
                        >
                            <path
                                d="M389.6 298.3L168.9 77L449.7 238.2L389.6 298.3zM111.3 64C98.3 70.8 89.6 83.2 89.6 99.3L89.6 540.6C89.6 556.7 98.3 569.1 111.3 575.9L367.9 319.9L111.3 64zM536.5 289.6L477.6 255.5L411.9 320L477.6 384.5L537.7 350.4C555.7 336.1 555.7 303.9 536.5 289.6zM168.9 563L449.7 401.8L389.6 341.7L168.9 563z"
                            />
                        </svg>
                        <span class="text-left leading-tight">
                            <span
                                class="block text-[0.6rem] uppercase tracking-wider opacity-80"
                                >Get it on</span
                            >
                            <span class="block font-semibold">Google Play</span>
                        </span>
                    </a>
                    <button
                        v-else
                        type="button"
                        :aria-disabled="true"
                        @click="flashSoon"
                        class="inline-flex cursor-not-allowed items-center gap-3 rounded-md border border-outline bg-surface-highest px-7 py-3 text-on-surface-muted transition"
                    >
                        <svg
                            viewBox="0 0 640 640"
                            class="h-5 w-5 shrink-0 fill-current"
                            aria-hidden="true"
                        >
                            <path
                                d="M389.6 298.3L168.9 77L449.7 238.2L389.6 298.3zM111.3 64C98.3 70.8 89.6 83.2 89.6 99.3L89.6 540.6C89.6 556.7 98.3 569.1 111.3 575.9L367.9 319.9L111.3 64zM536.5 289.6L477.6 255.5L411.9 320L477.6 384.5L537.7 350.4C555.7 336.1 555.7 303.9 536.5 289.6zM168.9 563L449.7 401.8L389.6 341.7L168.9 563z"
                            />
                        </svg>
                        <span class="text-left leading-tight">
                            <span
                                class="block text-[0.6rem] uppercase tracking-wider opacity-80"
                                >Get it on</span
                            >
                            <span class="block font-semibold">{{
                                showSoon ? "Coming soon" : "Google Play"
                            }}</span>
                        </span>
                    </button>

                    <a
                        href="https://github.com/hecker-01/Kitsudo/releases/latest"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-md border border-outline px-7 py-3.5 font-semibold text-on-surface transition hover:border-primary hover:text-primary"
                    >
                        [ Download APK ]
                    </a>

                    <a
                        :href="REPO_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-md border border-outline px-7 py-3.5 font-semibold text-on-surface transition hover:border-primary hover:text-primary"
                    >
                        [ Build from source ]
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
