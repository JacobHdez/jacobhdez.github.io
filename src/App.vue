<script setup lang="ts">
import Header from './components/Header.vue';
import Hero from './views/Hero.vue';
import Footer from './components/Footer.vue';
import ProjectCard from './components/ProjectCard.vue';
import { projects } from './data/projects';
</script>

<template>
<div class="min-h-screen bg-gray-950 text-gray-200 font-sans antialiased selection:bg-rose-950/30">
  <Header />

  <Hero />
  
  <main id="projects" class="max-w-6xl mx-auto pt-28 px-4 pb-20">
    <header class="mb-12">
      <h2 class="text-3xl font-black uppercase -tracking-tighter italic">
        {{ $t('header.prog') }} & <span class="text-rose-950">{{ $t('header.games') }}</span>
      </h2>
      <div class="h-1 w-20 bg-rose-950 mt-2"></div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </main>

  <Footer />
</div>
</template>
