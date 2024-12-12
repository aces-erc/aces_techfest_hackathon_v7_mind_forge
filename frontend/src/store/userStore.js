import { create } from "zustand";

export const useUserStore = create((set) => ({
    user: null,
    role: null,
    setUserRole: (role) => set({ role }),
    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),
}));
