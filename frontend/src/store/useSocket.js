import { create } from "zustand";

export const useSocket = create((set) => ({
    socker: null,
    setSocket: (socket) => set({ socket }),
}));
