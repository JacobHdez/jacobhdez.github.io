<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { personalData } from '@/data/personal';
import { useTypewriterLoop } from '@/composables/useTypewriter';

const { t } = useI18n();

const texts = computed(() => personalData.roleKey.map((key) => t(`personal.roles.${key}`)));

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
      <img :src="personalData.hero" :alt="personalData.name" class="h-full w-full object-cover" />

      <div class="absolute inset-0 bg-black/30 transition-all duration-1000 dark:bg-black/60"></div>
    </div>

    <section class="relative flex h-3/4 w-full flex-col items-start justify-center gap-y-4 pl-8">
      <h1 class="text-6xl font-bold text-neutral-100">
        {{ personalData.name }}
      </h1>

      <div class="flex flex-row text-lg text-neutral-100">
        <p>{{ t('hero.iam') }}&nbsp;</p>

        <p v-if="!isClient" class="border-b border-current">{{ texts[0] }}</p>
        <p v-else class="border-b border-current">{{ output }}</p>

        <span
          :class="[
            'border-r-2 border-current',
            state === 'waiting' && 'animate-[blinkFade_1.2s_ease-in-out_infinite]',
            state === 'typing' && 'opacity-100',
            state === 'deleting' && 'opacity-70'
          ]"
        ></span>
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
