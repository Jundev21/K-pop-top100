import { create } from "zustand";

interface bearState {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}

const useStore = create<bearState>((set) => ({
    bears: 0,
    increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}));

export default useStore;
