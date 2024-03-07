import { useState } from "react"
import { ModalContext, TypesOfModal } from "../contexts/ModalContext"
import ListOptionBox from "./ListOptionBox"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md"

const arrayTesteList = [{ name: "Churras 26/04", id: 0, users: 20 }, { name: "Aniversário", id: 1, users: 3 }, { name: "Compras do mês", id: 2, users: 2 }, { name: "Cineminha", id: 4, users: 1 }, { name: "Viagem Disney", id: 5, users: 2 }]

const ListWindow = () => {
    const { postModalOpen, setPostModalOpen, setTypeOfModal } = ModalContext()
    const [open, setOpen] = useState(false)
    const handleModalOpen = (typeOfModal: TypesOfModal): void => {
        setTypeOfModal(typeOfModal)
        setPostModalOpen(true)
    }
    return(
        <div className={(open ? "pb-2" : "") + " relative w-11/12 h-auto max-h-80 rounded-lg overflow-hidden border-blue-500 dark:border-violet-700 border-2"}>
                <button onClick={() => handleModalOpen(TypesOfModal.ADD_SHOPPINGLIST)} className="absolute top-1 right-1 w-10 h-10" >
                    <svg className="w-full h-full p-2 text-gray-800 dark:text-white active:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v6.4A7.5 7.5 0 1 0 10.5 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M9 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-3c.6 0 1 .4 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1c0-.6.4-1 1-1Z" clipRule="evenodd" />
                    </svg>
                </button>
                <p onClick={() => {open ? setOpen(false) : setOpen(true)}} className="h-12 flex items-center justify-center text-center dark:text-white w-full border-b-2 border-blue-500 dark:border-violet-700 bg-blue-200 dark:bg-violet-900">
                    Minhas listas de compras
                </p>
                
                {
                open ?
                <>
                <div className="w-full h-72 overflow-y-scroll pb-5">
                    {arrayTesteList.map(list => {
                        return <ListOptionBox key={list.id} myShoppingList={list} />
                    })}
                </div>
                <MdOutlineKeyboardArrowDown onClick={() => setOpen(false)} className="absolute top-1 left-1 w-10 h-10" />
                </>
                : 
                <>
                <MdOutlineKeyboardArrowRight onClick={() => setOpen(true)} className="absolute top-1 left-1 w-10 h-10" />
                </>
                }
            </div>
    )
}

export default ListWindow;