<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { aboutData } from '@/data/about';
import { useTypewriterLoop } from '@/composables/useTypewriter';

const { t } = useI18n();

const texts = computed(() => aboutData.roleKey.map((key) => t(`data.home.roles.${key}`)));

const isClient = ref(false);
const { output, state, start } = useTypewriterLoop(texts, 128, 64, 4096);

onMounted(() => {
  isClient.value = true;
  start();
});
</script>

<template>
  <div id="home" class="relative h-screen w-full">
    <div class="absolute inset-0 aspect-video h-screen w-full overflow-hidden">
      <img :src="aboutData.hero" :alt="aboutData.name" class="h-full w-full object-cover" />

      <div class="absolute inset-0 bg-black/30 transition-all duration-1000 dark:bg-black/60"></div>
    </div>

    <section class="relative mx-auto flex h-3/4 max-w-7xl flex-col items-start justify-center gap-y-4 px-8">
      <h1 class="text-4xl font-bold text-neutral-200 sm:text-6xl">
        {{ aboutData.name }}
      </h1>

      <div class="flex flex-row font-mono text-lg text-neutral-400 sm:text-xl">
        <p>{{ t('home.iam') }}&nbsp;</p>

        <p v-if="!isClient" class="underline underline-offset-2">{{ texts[0] }}</p>
        <p v-else class="underline underline-offset-2">
          {{ output }}
          <span
            :class="[
              'border-r-2 border-current',
              state === 'waiting' && 'animate-[blinkFade_1.2s_ease-in-out_infinite]',
              state === 'typing' && 'opacity-100',
              state === 'deleting' && 'opacity-70'
            ]"
          ></span>
        </p>
      </div>
    </section>
  </div>
</template>

<style>
@keyframes blinkFade {
  0%,
  40% {
    opacity: 1;
    transform: scaleY(1);
  }
  50%,
  90% {
    opacity: 0;
    transform: scaleY(0.8);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
