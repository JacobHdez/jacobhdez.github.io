<script setup lang="ts">
import type { Project } from '../data/projects';

defineProps<{ project: Project }>()
</script>

<template>
<div class="bg-gray-900 border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-all group">
  <div class="aspect-video bg-gray-800 overflow-hidden">
    <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
  </div>

  <div class="p-6">
    <span class="text-xs uppercase tracking-widest text-accent font-bold">
      {{ project.category }}
    </span>
    <h3 class="text-xl font-bold text-gray-200 mt-1">
      {{ project.title }}
    </h3>
    <p class="text-gray-400 text-sm mt-2 line-clamp-2">
      {{ project.description }}
    </p>

    <div class="flex flex-wrap gap-2 mt-4">
      <span
        v-for="tech in project.tech" :key="tech"
        class="text-xs bg-gray-950 text-gray-200 px-2 py-1 rounded border border-white/10"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</div>
</template>
