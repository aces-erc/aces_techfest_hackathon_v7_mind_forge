import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(persist((set) => ({
    user: null,
    role: null,
    setUserRole: (role) => set({ role }),
    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),
})));
