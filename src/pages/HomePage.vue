<script setup>
import { ref } from "vue";
import LoadingScreen from "../components/LoadingScreen.vue";
import HeroSection from "../components/HeroSection.vue";
import FeaturesGrid from "../components/FeaturesGrid.vue";
import ThemeShowcase from "../components/ThemeShowcase.vue";
import ScreenshotCarousel from "../components/ScreenshotCarousel.vue";
import WearSection from "../components/WearSection.vue";
import DownloadSection from "../components/DownloadSection.vue";
import FaqSection from "../components/FaqSection.vue";
import SiteFooter from "../components/SiteFooter.vue";

// Show the boot-log loader only once per browser session.
const seen =
    typeof sessionStorage !== "undefined" &&
    sessionStorage.getItem("kitsudo:booted");
const loading = ref(!seen);

function onDone() {
    loading.value = false;
    try {
        sessionStorage.setItem("kitsudo:booted", "1");
    } catch {
        /* sessionStorage unavailable, ignore */
    }
}
</script>

<template>
    <LoadingScreen v-if="loading" @done="onDone" />

    <main>
        <HeroSection />
        <FeaturesGrid />
        <ThemeShowcase />
        <ScreenshotCarousel />
        <WearSection />
        <DownloadSection />
        <FaqSection />
    </main>

    <SiteFooter />
</template>
