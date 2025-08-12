import type { ReactNode } from 'react';

export type CommandPaletteItem = {
  label: string;
  description: string;
  href: string;
  icon: ReactNode;
};
