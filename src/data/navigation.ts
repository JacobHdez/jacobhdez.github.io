import type { NavigationItem } from './types';

import {
  HomeIcon,
  UserIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/solid';

export const navigationItems: NavigationItem[] = [
  { section: '#', labelKey: 'home', icon: HomeIcon },
  { section: '#', labelKey: 'about', icon: UserIcon },
  { section: '#', labelKey: 'resume', icon: DocumentTextIcon },
  { section: '#', labelKey: 'portfolio', icon: RectangleGroupIcon },
  { section: '#', labelKey: 'contact', icon: EnvelopeIcon }
];
