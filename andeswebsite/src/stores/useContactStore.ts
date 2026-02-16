import { create } from "zustand";

interface ContactState {
  isSubmitting: boolean;
  isSuccess: boolean;
  submitContactForm: () => Promise<void>;
  resetForm: () => void;
}

export const useContactStore = create<ContactState>((set) => ({
  isSubmitting: false,
  isSuccess: false,
  submitContactForm: async () => {
    set({ isSubmitting: true });
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    set({ isSubmitting: false, isSuccess: true });
  },
  resetForm: () => set({ isSubmitting: false, isSuccess: false }),
}));
