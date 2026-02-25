import type { Component } from 'vue';

type SectionKey = 'home' | 'about' | 'resume' | 'portfolio' | 'contact';

export interface NavigationItem {
  section: SectionKey;
  icon: Component;
}

export interface SocialLink {
  platform:
    | 'linkedin'
    | 'github'
    | 'linktree'
    | 'facebook'
    | 'instagram'
    | 'x'
    | 'tiktok'
    | 'youtube'
    | 'reddit'
    | 'web';
  url: string;
  icon: string;
}

export interface PersonalData {
  name: string;
  portrait: string;
  hero: string;
  roleKey: string[];
}
