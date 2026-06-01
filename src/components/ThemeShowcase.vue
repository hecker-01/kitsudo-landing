<script setup>
import SectionHeading from "./SectionHeading.vue";
import SectionDecor from "./SectionDecor.vue";

// The five selectable themes in the app.
const FLAVORS = [
    {
        name: "Material You",
        base: "#1b1b1f",
        text: "#e6e1e5",
        accent: "#d0bcff",
        note: "dynamic",
    },
    {
        name: "Latte",
        base: "#eff1f5",
        text: "#4c4f69",
        accent: "#8839ef",
        note: "light",
    },
    {
        name: "Frappé",
        base: "#303446",
        text: "#c6d0f5",
        accent: "#ca9ee6",
        note: "dark",
    },
    {
        name: "Macchiato",
        base: "#24273a",
        text: "#cad3f5",
        accent: "#c6a0f6",
        note: "dark",
    },
    {
        name: "Mocha",
        base: "#1e1e2e",
        text: "#cdd6f4",
        accent: "#cba6f7",
        note: "default",
    },
];

// The 14 Catppuccin accent swatches (Mocha values), as in strings.xml.
const ACCENTS = [
    { name: "Rosewater", hex: "#f5e0dc" },
    { name: "Flamingo", hex: "#f2cdcd" },
    { name: "Pink", hex: "#f5c2e7" },
    { name: "Mauve", hex: "#cba6f7" },
    { name: "Red", hex: "#f38ba8" },
    { name: "Maroon", hex: "#eba0ac" },
    { name: "Peach", hex: "#fab387" },
    { name: "Yellow", hex: "#f9e2af" },
    { name: "Green", hex: "#a6e3a1" },
    { name: "Teal", hex: "#94e2d5" },
    { name: "Sky", hex: "#89dceb" },
    { name: "Sapphire", hex: "#74c7ec" },
    { name: "Blue", hex: "#89b4fa" },
    { name: "Lavender", hex: "#b4befe" },
];
</script>

<template>
    <section id="themes" class="relative isolate scroll-mt-24 py-20 sm:py-28">
        <SectionDecor variant="dots" accent="#f5c2e7" glow="tr" />
        <div class="container-tight">
            <SectionHeading
                cmd="cat themes.log"
                subtitle="Five palettes and 14 accent colors, plus dynamic Material You."
            />

            <!-- flavors -->
            <div class="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <div
                    v-for="f in FLAVORS"
                    :key="f.name"
                    class="overflow-hidden rounded-lg border border-outline transition hover:-translate-y-1"
                    :style="{ backgroundColor: f.base, color: f.text }"
                >
                    <div class="p-4">
                        <div class="flex items-center justify-between">
                            <span class="font-bold">{{ f.name }}</span>
                            <span class="text-[0.65rem] opacity-70">{{
                                f.note
                            }}</span>
                        </div>
                        <div class="mt-4 flex items-center gap-2">
                            <span
                                class="h-6 w-6 rounded-full"
                                :style="{ backgroundColor: f.accent }"
                            ></span>
                            <div class="flex-1">
                                <div
                                    class="h-2 w-full rounded-full"
                                    :style="{
                                        backgroundColor: f.accent,
                                        opacity: 0.6,
                                    }"
                                ></div>
                                <div
                                    class="mt-1.5 h-2 w-2/3 rounded-full"
                                    :style="{
                                        backgroundColor: f.text,
                                        opacity: 0.25,
                                    }"
                                ></div>
                            </div>
                        </div>
                        <p class="mt-3 text-xs opacity-70">▢ Buy groceries</p>
                        <p class="text-xs opacity-50">☑ Ship release</p>
                    </div>
                </div>
            </div>

            <!-- accents -->
            <div class="terminal-box p-5">
                <p class="mb-4 text-sm text-on-surface-muted">
                    <span class="text-primary">$</span> ls accents/
                    <span class="opacity-60">(14 swatches)</span>
                </p>
                <div
                    class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7"
                >
                    <div
                        v-for="a in ACCENTS"
                        :key="a.name"
                        class="flex items-center gap-2"
                    >
                        <span
                            class="h-5 w-5 flex-shrink-0 rounded-full ring-1 ring-white/10"
                            :style="{
                                backgroundColor: a.hex,
                                boxShadow: `0 0 12px -2px ${a.hex}`,
                            }"
                        ></span>
                        <span class="truncate text-xs text-on-surface-muted">{{
                            a.name
                        }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
