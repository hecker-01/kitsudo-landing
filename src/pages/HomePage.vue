<script setup>
import HeroSection from "../components/HeroSection.vue";
import FeaturesGrid from "../components/FeaturesGrid.vue";
import ThemeShowcase from "../components/ThemeShowcase.vue";
import ScreenshotCarousel from "../components/ScreenshotCarousel.vue";
import WearSection from "../components/WearSection.vue";
import DownloadSection from "../components/DownloadSection.vue";
import FaqSection from "../components/FaqSection.vue";
import SiteFooter from "../components/SiteFooter.vue";
</script>

<template>
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
