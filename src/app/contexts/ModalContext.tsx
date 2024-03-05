import { createContext, useContext } from "react";
export const MyGlobalContext = createContext<{
    postModalOpen: boolean | null,
    setPostModalOpen: (postModalOpen: boolean) => void,
    typeOfModal: TypesOfModal | null,
    setTypeOfModal: (typeOfModal: TypesOfModal | null) => void
}>({
    postModalOpen: null,
    setPostModalOpen: () => undefined,
    typeOfModal: null,
    setTypeOfModal: () => undefined
})
export const ModalContext = () => useContext(MyGlobalContext)

export enum TypesOfModal  {
    'EDIT_PROFILE',
    'ADD_RELATED_USER',
    'EDIT_RELATED_USER',
    'ADD_SHOPPINGLIST',
    'EDIT_SHOPPINGLIST'
}