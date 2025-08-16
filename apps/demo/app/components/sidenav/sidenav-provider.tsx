import useBoolean from '@/core/hooks/use-boolean.js';
import { createContext, use } from 'react';

type Sidenav = {
  open: boolean;
  setOpenFalse: () => void;
  toggleOpen: () => void;
};

/**
 * Context for managing the state of the sidenav.
 * Provides methods to toggle the open/closed state of the sidenav.
 */
const SidenavContext = createContext<Sidenav | undefined>(undefined);

/**
 * SidenavProvider component that provides the state of the sidenav
 * and a method to toggle its open/closed state.
 */
export function SidenavProvider({ children }: { children: React.ReactNode }) {
  'use memo';

  const { value: open, setFalse: setOpenFalse, toggle: toggleOpen } = useBoolean(false);

  return (
    <SidenavContext.Provider value={{ open, setOpenFalse, toggleOpen }}>
      {children}
    </SidenavContext.Provider>
  );
}

export function useSidenav() {
  'use memo';

  const context = use(SidenavContext);

  if (!context) {
    throw new Error('useSidenavContext must be used within a SidenavProvider');
  }
  return context;
}
