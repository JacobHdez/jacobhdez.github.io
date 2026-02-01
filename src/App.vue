<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Hero from './views/Hero.vue';
import ProjectCard from './components/ProjectCard.vue';
import Skills from './components/Skills.vue';
import AboutMe from './components/AboutMe.vue';
import Contact from './components/Contact.vue';

import { projects } from './data/projects';

const { locale, t } = useI18n();

const filter = ref('All');
const filteredProjects = computed( () => {
  if ( filter.value === 'All' ) return projects;
  return projects.filter( p => p.category === filter.value );
} );
</script>

<template>
<div class="min-h-screen bg-gray-950 text-gray-200 font-sans antialiased selection:bg-rose-950/30">
  <Header />

  <Hero />
  
  <main id="projects" class="max-w-6xl mx-auto pt-28 px-4 pb-20">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
      <div>
        <h2 class="text-3xl font-black uppercase tracking-tighter italic">
          {{ t('header.prog') }} & <span class="text-rose-950">{{ t('header.games') }}</span>
        </h2>
        <div class="h-1 w-20 bg-rose-950 mt-2"></div>
      </div>

      <div class="inline-flex p-1 bg-gray-900 border border-white/10 rounded-xl shadow-2xl">
        <button
          v-for="cat in ['All', 'Programming', 'Games']"
          :key="cat"
          @click="filter = cat"
          :class="[
            'px-6 py-2 rounded-lg text-xs font-bold transition-all duration-300 uppercase tracking-widest',
            filter === cat ?
              'bg-rose-950 text-white shadow-lg' :
              'text-gray-400 hover:text-gray-200 hover:bg-white/5'
          ]"
        >
          {{ cat === 'All' ? (locale === 'es' ? 'Todos' : 'All') : (cat === 'Programming' ? t('header.prog') : t('header.games')) }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </main>

  <Skills />

  <AboutMe />

  <Contact />

  <Footer />
</div>
</template>
