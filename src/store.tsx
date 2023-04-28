import { create } from "zustand";

interface clickState {
    isClicked: boolean;
    handleClicked: () => void;
}

const useStore = create<clickState>((set) => ({
    isClicked: false,
    handleClicked: () => set((state) => ({ isClicked: !state.isClicked })),
}));

export default useStore;
