import type { NavigationItem } from './types';

import {
  HomeIcon,
  UserIcon,
  CommandLineIcon,
  DocumentTextIcon,
  RectangleStackIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/solid';

export const navigationItems: NavigationItem[] = [
  { section: 'home', icon: HomeIcon },
  { section: 'about', icon: UserIcon },
  { section: 'skills', icon: CommandLineIcon },
  { section: 'resume', icon: DocumentTextIcon },
  { section: 'portfolio', icon: RectangleStackIcon },
  { section: 'contact', icon: EnvelopeIcon }
];
