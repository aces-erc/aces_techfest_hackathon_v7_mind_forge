import { create } from "zustand";

export const useSocket = create((set) => ({
    socket: null,
    ambulanceList: [],
    ambulanceLocation: [],
    patientDetail: null,
    patientDisease: "",
    setSocket: (socket) => set({ socket }),
    setAmbulanceList: (ambulanceList) => set({ambulanceList}),
    setAmbulanceLocation: (ambulanceLocation) => set({ambulanceLocation}),
    setPatientDetail: (patientDetail)=> set({patientDetail}),
    setPatientDisease: (patientDisease)=> set({patientDisease})
}));