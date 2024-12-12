import { create } from "zustand";


export const useLocation = create((set) => ({
    hospoitalPosition: { lat:  26.782, lng: 87.291 },
    setHospitalPosition: (hospoitalPosition) => set({ hospoitalPosition }),
}));
