<script setup lang="ts">
import BaseLink from '../components/ui/BaseLink.vue';

import { useI18n } from 'vue-i18n';
import { useIntersection } from '../composables/useIntersection';

const { t } = useI18n()
const { target: _target, isVisible } = useIntersection(0.2, true);
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
        <span
            ref="_target"
            class="inline-block mb-6 py-1 px-3 rounded-full bg-rose-950/10 border border-rose-950/20 text-rose-950 text-xs font-bold tracking-widest uppercase transition-all duration-1000 ease-out transform"
            :class="{
                'opacity-0 translate-y-10': !isVisible,
                'opacity-100 translate-y-0': isVisible
            }"
        >
            Unreal Engine 5 &bull; C++ &bull; Python &bull; TS
        </span>

        <h1 class="text-5xl md:text-7xl font-black text-gray-200 tracking-tighter mb-6 leading-tight">
            {{ t('hero.title') }}
        </h1>

        <p class="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-tight">
            {{ t('hero.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BaseLink href="#projects" variant="primary" class="w-full sm:w-auto">
                {{ t('header.prog') }}
            </BaseLink>
            <BaseLink href="#contact" variant="secondary" class="w-full sm:w-auto">
                {{ t('header.contact') }}
            </BaseLink>
        </div>
    </div>
</section>
</template>
