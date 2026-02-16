import { create } from "zustand";

interface NavigationState {
  currentSection: string;
  isMobileMenuOpen: boolean;
  setCurrentSection: (section: string) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentSection: "hero",
  isMobileMenuOpen: false,
  setCurrentSection: (section) => set({ currentSection: section }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));
