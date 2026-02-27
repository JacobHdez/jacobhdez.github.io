import type { Component } from 'vue';

type SectionKey = 'home' | 'about' | 'skills' | 'resume' | 'portfolio' | 'contact';

export interface NavigationItem {
  section: SectionKey;
  icon: Component;
}
