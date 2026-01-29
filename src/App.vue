<script setup lang="ts">
import Header from './components/Header.vue';
import ProjectCard from './components/ProjectCard.vue';
import { projects } from './data/projects';
</script>

<template>
<div class="min-h-screen bg-gray-950 text-gray-200 font-sans antialiased">
  <Header />
  
  <main class="max-w-6xl mx-auto pt-28 px-4 pb-20">
    <header class="mb-12">
      <h2>
        Trabajos <span class="text-accents">Recientes</span>
      </h2>
      <div class="h-1 w-20 bg-rose-950 mt-2"></div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </main>
</div>
</template>
