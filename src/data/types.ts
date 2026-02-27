import type { Component } from 'vue';

type SectionKey = 'home' | 'about' | 'skills' | 'resume' | 'portfolio' | 'contact';

export interface NavigationItem {
  section: SectionKey;
  icon: Component;
}

export interface SocialItem {
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

export interface AboutData {
  name: string;
  portrait: string;
  hero: string;
  mainRoleKey: string;
  roleKey: string[];

  shortDescriptionKey?: string;
  descriptionKey: string;
  about: {
    city: string;
    phone: string;
    email: string;
    birthday: string;
    degree: string;
  };
}

interface Skill {
  name: string;
  datetime: string;
  level: string;
}

export interface SkillsData {
  description?: string;
  skills: Skill[];
}
