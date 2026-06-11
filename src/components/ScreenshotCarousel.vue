<script setup>
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import SectionHeading from "./SectionHeading.vue";
import SectionDecor from "./SectionDecor.vue";
import { SCREENSHOTS, WEAR_SHOTS } from "../data/site.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Navigation, Pagination];

// Real screenshots if provided, otherwise placeholder frames.
// Phone shots get a phone frame; Wear OS shots get a round watch frame.
const hasShots = computed(() => SCREENSHOTS.length + WEAR_SHOTS.length > 0);
const slides = computed(() =>
    hasShots.value
        ? [
              ...SCREENSHOTS.map((file) => ({
                  src: `/screenshots/${file}`,
                  label: "",
                  kind: "phone",
              })),
              ...WEAR_SHOTS.map((file) => ({
                  src: `/screenshots/${file}`,
                  label: "",
                  kind: "watch",
              })),
          ]
        : [
              { src: "", label: "Today", kind: "phone" },
              { src: "", label: "Subtasks", kind: "phone" },
              { src: "", label: "Deadlines", kind: "phone" },
              { src: "", label: "Themes", kind: "phone" },
              { src: "", label: "Wear OS", kind: "watch" },
          ],
);
</script>

<template>
    <section
        id="screenshots"
        class="relative isolate scroll-mt-24 py-20 sm:py-28"
    >
        <SectionDecor variant="diagonal" accent="#94e2d5" glow="bl" />
        <div class="container-tight">
            <SectionHeading
                cmd="cat screenshots.log"
                subtitle="A look at Kitsudo on a phone."
            />
        </div>

        <Swiper
            :modules="modules"
            :grab-cursor="true"
            :centered-slides="true"
            :slides-per-view="'auto'"
            :space-between="24"
            :navigation="true"
            :pagination="{ clickable: true }"
            class="screenshot-swiper px-4! pb-14!"
        >
            <SwiperSlide
                v-for="(s, i) in slides"
                :key="i"
                class="w-67.5! sm:w-77.5!"
            >
                <!-- watch frame (Wear OS) -->
                <div
                    v-if="s.kind === 'watch'"
                    class="flex h-full items-center justify-center"
                >
                    <div
                        class="relative aspect-square w-52.5 rounded-full border-4 border-outline bg-surface-highest p-2 shadow-2xl sm:w-58.75"
                    >
                        <!-- crown -->
                        <div
                            class="absolute -right-1.5 top-1/2 h-9 w-1.5 -translate-y-1/2 rounded-full bg-outline"
                        ></div>

                        <div
                            class="relative h-full w-full overflow-hidden rounded-full bg-surface-elevated"
                        >
                            <img
                                v-if="s.src"
                                :src="s.src"
                                :alt="`Kitsudo Wear OS screenshot ${i + 1}`"
                                class="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <!-- placeholder -->
                            <div
                                v-else
                                class="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center"
                            >
                                <img
                                    src="/logo.svg"
                                    alt=""
                                    class="h-10 w-10 object-contain opacity-60"
                                />
                                <span class="text-sm font-bold text-primary">{{
                                    s.label
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- phone frame -->
                <div
                    v-else
                    class="mx-auto w-full rounded-[2.2rem] border-[3px] border-outline bg-background p-0.75 shadow-2xl ring-1 ring-white/5"
                >
                    <div
                        class="relative overflow-hidden rounded-[1.95rem] bg-surface-elevated"
                    >
                        <!-- screenshot at native aspect ratio: no cropping -->
                        <img
                            v-if="s.src"
                            :src="s.src"
                            :alt="`Kitsudo screenshot ${i + 1}`"
                            class="block h-auto w-full"
                            loading="lazy"
                        />
                        <!-- placeholder -->
                        <div
                            v-else
                            class="flex w-full flex-col items-center justify-center gap-3 p-4 text-center"
                            style="aspect-ratio: 9 / 19.5"
                        >
                            <img
                                src="/logo.svg"
                                alt=""
                                class="h-14 w-14 object-contain opacity-60"
                            />
                            <span class="text-sm font-bold text-primary">{{
                                s.label
                            }}</span>
                            <span class="text-[0.65rem] text-on-surface-muted"
                                >screenshot placeholder</span
                            >
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

        <p
            v-if="!hasShots"
            class="container-tight mt-2 text-center text-xs text-on-surface-muted"
        >
            Drop real PNGs into
            <code class="text-primary">public/screenshots/</code> and list them
            in <code class="text-primary">src/data/site.js</code>.
        </p>
    </section>
</template>

<style scoped>
/* Centered layout: active phone in focus, neighbours dimmed and scaled back. */
.screenshot-swiper :deep(.swiper-slide) {
    height: auto;
    opacity: 0.4;
    transform: scale(0.86);
    transition:
        opacity 0.35s ease,
        transform 0.35s ease;
}
.screenshot-swiper :deep(.swiper-slide-active) {
    opacity: 1;
    transform: scale(1);
}
</style>
