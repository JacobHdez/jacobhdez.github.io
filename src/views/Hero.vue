<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<template>
<section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-28">
    <div
        class="absolute inset-0 z-0 opacity-20"
        style="background-image: radial-gradient(#4C0519 0.5px, transparent 0.5px); background-size: 24px 24px;"
    ></div>

    <div class="absolute top-1/4 -left-20 w-72 h-72 bg-rose-950/20 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-900/20 rounded-full blur-[120px]"></div>

    <div class="relative z-10 text-center px-4 max-w-4xl">
        <span class="inline-block py-1 px-3 rounded-full bg-rose-950/10 border border-rose-950/20 text-rose-950 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in">
            Unreal Engine 5 &bull; C++ &bull; Python &bull; TS
        </span>

        <h1 class="text-5xl md:text-7xl font-black text-gray-200 tracking-tighter mb-6 leading-tight">
            {{ t('hero.title') }}
        </h1>

        <p class="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-tight">
            {{ t('hero.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
                href="#projects"
                class="w-full sm:w-auto px-8 py-4 bg-rose-950 text-gray-200 font-bold rounded-xl hover:scale-105 transition-transform shadow-lg shadow-rose-950/20"
            >
                {{ t('header.prog') }}
            </a>
            <a
                href="#contact"
                class="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-gray-200 font-bold rounded-xl hover:bg-white/5 transition-colors"
            >
                {{ t('header.contact') }}
            </a>
        </div>
    </div>
</section>
</template>

<style scoped>
@keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fade-in 1s ease-out;
}
</style>
