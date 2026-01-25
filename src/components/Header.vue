<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
<header class="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
  <nav class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <a href="/" class="text-xl font-bold text-gray-200 hover:text-rose-950 transition-colors">
        Mi Portafolio
      </a>

      <div class="hidden md:flex space-x-8 items-center text-sm font-medium text-gray-400">
        <a href="/" class="hover:text-gray-200 transition-colors">Programación</a>
        <a href="/" class="hover:text-gray-200 transition-colors">Videojuegos</a>
        <a href="/" class="hover:text-gray-200 transition-colors">Sobre Mí</a>

        <a href="/" class="bg-rose-950 hover:opacity-90 text-gray-200 px-5 py-2 rounded-full transition-all">Contacto</a>
      </div>

      <button
        @click="toggleMenu"
        class="md:hidden text-gray-400 p-2 hover:text-gray-200 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </nav>

  <nav
    v-show="isMenuOpen"
    class="md:hidden bg-gray-950 border-b border-white/10 px-4 pt-2 pb-6 space-y-1 text-gray-400"
  >
    <a href="/" @click="isMenuOpen = false" class="block hover:text-gray-200 transition-colors">Programación</a>
    <a href="/" @click="isMenuOpen = false" class="block hover:text-gray-200 transition-colors">Videojuegos</a>
    <a href="/" @click="isMenuOpen = false" class="block hover:text-gray-200 transition-colors">Sobre Mí</a>
    
    <a href="/" @click="isMenuOpen = false" class="block bg-rose-950 hover:opacity-90 text-gray-200 text-center py-2 rounded-full transition-all">Contacto</a>
  </nav>
</header>
</template>
