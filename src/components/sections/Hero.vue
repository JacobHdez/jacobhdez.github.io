<script setup lang="ts">
import { personalData } from '@/data/personal';
</script>

<template>
  <div class="relative h-screen w-full">
    <div class="absolute inset-0 aspect-video h-screen w-full overflow-hidden">
      <img :src="personalData.hero" :alt="personalData.name" class="h-full w-full object-cover" />

      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <section class="relative flex h-3/4 w-full flex-col items-start justify-center gap-y-4 pl-8">
      <h1 class="text-6xl font-bold text-neutral-100">
        {{ personalData.name }}
      </h1>
      <p class="text-2xl text-neutral-200">I'm a Full Stack Developer</p>
    </section>
  </div>
</template>
