import { create } from "zustand";

export const useSocket = create((set) => ({
    socket: null,
    ambulanceList: [],
    ambulanceLocation: [],
    setSocket: (socket) => set({ socket }),
    setAmbulanceList: (ambulanceList) => set({ambulanceList}),
    setAmbulanceLocation: (ambulanceLocation) => set({ambulanceLocation}),
}));
