<script setup>
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import SectionHeading from "./SectionHeading.vue";
import SectionDecor from "./SectionDecor.vue";
import { SCREENSHOTS } from "../data/site.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Navigation, Pagination];

// Real screenshots if provided, otherwise placeholder frames.
const hasShots = computed(() => SCREENSHOTS.length > 0);
const slides = computed(() =>
    hasShots.value
        ? SCREENSHOTS.map((file) => ({
              src: `/screenshots/${file}`,
              label: "",
          }))
        : [
              { src: "", label: "Today" },
              { src: "", label: "Subtasks" },
              { src: "", label: "Deadlines" },
              { src: "", label: "Themes" },
              { src: "", label: "Wear OS" },
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
            class="screenshot-swiper !px-4 !pb-14"
        >
            <SwiperSlide
                v-for="(s, i) in slides"
                :key="i"
                class="!w-[220px] sm:!w-[250px]"
            >
                <!-- phone frame -->
                <div
                    class="mx-auto w-full rounded-[2rem] border-4 border-outline bg-surface-highest p-2 shadow-2xl"
                >
                    <div
                        class="relative overflow-hidden rounded-[1.5rem] bg-surface-elevated"
                        style="aspect-ratio: 9 / 19.5"
                    >
                        <!-- notch -->
                        <div
                            class="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-background/80"
                        ></div>

                        <img
                            v-if="s.src"
                            :src="s.src"
                            :alt="`Kitsudo screenshot ${i + 1}`"
                            class="h-full w-full object-cover"
                            loading="lazy"
                        />
                        <!-- placeholder -->
                        <div
                            v-else
                            class="flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center"
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
