import { ModalContext } from "@/app/contexts/ModalContext";
import { FormEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { IoMdPersonAdd } from "react-icons/io";
import UserOptionContainer, { userBoxType } from "../UserOptionBox";
import UsersWindow from "../UsersWindow";

export type User = {
    id: number,
    name: string,
    img: string,
    nickname: string
}

const NewShoppingList = () => {
    const { setPostModalOpen } = ModalContext();
    const [relatedOpen, setRelatedOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [otherMembers, setOtherMembers] = useState<User[]>([])
    const [otherAdmins, setOtherAdmins] = useState<User[]>([])

    function closeModal() {
        setPostModalOpen(false);
    }

    const createNewList = (e: FormEvent) => {
        e.preventDefault();
        console.log({
            title,
            otherAdmins,
            otherMembers
        })
    }
    

    return (
        <div className="relative bg-white rounded-lg shadow dark:bg-black">
            <ToastContainer />

            <div className="flex items-center  justify-between p-4 md:p-5 border-b rounded-t border-blue-700 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-blue-700 dark:text-violet-700">
                    Lista de compras nova
                </h3>
                <button onClick={() => closeModal()} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
            <div className="p-4 md:p-5">
                <form onSubmit={(e) => { createNewList(e) }} className="space-y-4 flex flex-col justify-center items-center" action="#">
                    <label
                        htmlFor="title"
                        className="w-full text-blue-700 dark:text-violet-500"
                    >
                        Título da lista
                    </label>
                    <input
                        id='title'
                        type='text'
                        onChange={e => setTitle(e.target.value)}
                        className="w-full h-14 rounded-2xl bg-blue-400 placeholder:italic placeholder:text-white dark:bg-violet-600 p-2"
                        placeholder="Ex: comprinhas do mês"
                    />

                    

                    {
                    relatedOpen ? 
                    <UsersWindow otherMembers={otherMembers} setOtherMembers={setOtherMembers} setOtherAdmins={setOtherAdmins} otherAdmins={otherAdmins} boxType={userBoxType.ADD_MEMBER}/>
                    : 
                    <div onClick={() => setRelatedOpen(true)}
                        className='w-9 h-9 flex justify-center items-center rounded-full bg-blue-500 dark:bg-violet-700 text-white active:bg-violet-100 active:text-blue-700 active:dark:text-violet-700'
                    >

                        <IoMdPersonAdd className="w-6 h-6" />

                    </div>
                    }

                    <div className='w-full h-18 flex flex-row justify-evenly items-center'>
                        <button onClick={() => { closeModal() }} type='reset' className="w-1/5 h-8 text-white bg-red-700 font-medium rounded-lg text-sm px-1 py-1 text-center dark:bg-red-600 ">
                            Cancelar
                        </button>
                        <button type="submit" className="w-1/3 h-16 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-500 ">
                            Criar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewShoppingList;