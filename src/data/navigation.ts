import type { NavigationItem } from './types';

import {
  HomeIcon,
  UserIcon
  // DocumentTextIcon,
  // RectangleGroupIcon,
  // EnvelopeIcon
} from '@heroicons/vue/24/solid';

export const navigationItems: NavigationItem[] = [
  { section: 'home', icon: HomeIcon },
  { section: 'about', icon: UserIcon }
  // { section: 'resume', icon: DocumentTextIcon },
  // { section: 'portfolio', icon: RectangleGroupIcon },
  // { section: 'contact', icon: EnvelopeIcon }
];
