import {create} from "zustand"
interface ModalState {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

const useListModal = create<ModalState>(set => ({
    isOpen: false,
    onOpen: () => set({isOpen: true,}),
    onClose: () => set({isOpen: false}),
}))
export default useListModal