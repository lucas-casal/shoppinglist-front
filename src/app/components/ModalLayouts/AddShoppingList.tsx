import { ModalContext } from "@/app/contexts/ModalContext";
import { FormEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NewShoppingList from "./NewShoppingList";

export enum AddingListOptions {
    'NEW_LIST',
    'JOIN_LIST'
}
const AddShoppingList = () => {
    const { setPostModalOpen } = ModalContext();
    const [choseOption, setChoseOption] = useState<null | AddingListOptions>(null)
    const [loading, setLoading] = useState(false)
    const [newPage, setNewPage] = useState(false)


    const saveChosenOption = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true)    
        setTimeout(() => {
            setLoading(false)
            setNewPage(true)
        }, 1000)    
    }

    useEffect(() => {

    }, [choseOption] )

    function closeModal() {
        setPostModalOpen(false);
    }

    return (<>
        {!newPage ? 
            <div className="relative bg-white rounded-lg shadow dark:bg-black">
            <ToastContainer />

            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-violet-700">
                   Adicionar lista de compras
                </h3>
                <button onClick={() => closeModal()} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
            <div className="p-4 md:p-5">
                <form onSubmit={(e) => { saveChosenOption(e) }} className="space-y-4  flex flex-col justify-center items-center" action="#">
                    <button disabled={loading} onClick={e => setChoseOption(AddingListOptions.NEW_LIST)} id={(AddingListOptions.NEW_LIST).toString()} type='button' 
                    className={(choseOption?.toString() === AddingListOptions.NEW_LIST.toString() ? ' bg-gradient-to-t text-white from-blue-800 to-blue-300 shadow-blue-200 dark:from-violet-950 dark:to-violet-400 shadow-md dark:shadow-violet-300' : '')+ ' border-4 border-blue-500 dark:border-violet-700 w-full h-10 rounded-full'}>
                        Criar nova lista
                    </button>
                    
                    <button disabled={loading} onClick={e => setChoseOption(AddingListOptions.JOIN_LIST)} id={(AddingListOptions.JOIN_LIST).toString()} type='button' 
                    className={(choseOption?.toString() === AddingListOptions.JOIN_LIST.toString() ? ' bg-gradient-to-t text-white from-blue-800 to-blue-300 shadow-blue-200 dark:from-violet-950 dark:to-violet-400 shadow-md dark:shadow-violet-300' : '')+ ' border-4 border-blue-500 dark:border-violet-700 w-full h-10 rounded-full'}>
                        Entrar em uma lista existente
                    </button>
                   
                    <div className='w-full h-18 flex flex-row justify-evenly items-center'>
                        <button onClick={() => { closeModal() }} type='reset' className="w-1/5 h-8 text-white bg-red-700 font-medium rounded-lg text-sm px-1 py-1 text-center dark:bg-red-600 ">
                            Cancelar
                        </button>
                        <button type="submit" className="w-1/3 h-16 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-500 ">
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </div>
        :
    <NewShoppingList />
    }
    </>)
}

export default AddShoppingList;