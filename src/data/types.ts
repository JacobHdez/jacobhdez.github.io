import type { Component } from 'vue';

export interface NavigationItem {
  section: string;
  labelKey: 'home' | 'about' | 'resume' | 'portfolio' | 'contact';
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
