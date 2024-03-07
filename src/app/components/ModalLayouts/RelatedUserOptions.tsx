import { ModalContext } from "@/app/contexts/ModalContext";
import { FormEvent, useState } from "react";
import { ToastContainer } from "react-toastify";
import UserOptionBox, { userBoxType } from "../UserOptionBox";
import UpdateNicknameRelatedUser from "./UpdateNicknameRelatedUser";

const RelatedUserOptions = () => {
    const user = JSON.parse(localStorage.getItem(`relatedInfo-${1}`)!)
    const { setPostModalOpen } = ModalContext();
    const [loading, setLoading] = useState(false)
    const [newPage, setNewPage] = useState(false)

    const handleChosenOption = (e: FormEvent) => {
        e.preventDefault();
        localStorage.setItem(`relatedInfo-${user.id}`, JSON.stringify(user))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setNewPage(true)
        }, 1000)
    }

    function closeModal() {
        setPostModalOpen(false);
    }

    function deleteUser() {
        if (confirm('Você realmente deseja excluir esse usuário?')) console.log(user)
    }

    return (<>
        {!newPage ?
            <div className="relative bg-white rounded-lg dark:bg-black">
                <ToastContainer />

                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-violet-700">
                        Configurações do seu contato
                    </h3>
                    <button onClick={() => closeModal()} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
                <div className="p-4 md:p-5">
                    <form onSubmit={(e) => { handleChosenOption(e) }} className="space-y-4  flex flex-col justify-center items-center" action="#">
                        <UserOptionBox user={user} boxType={userBoxType.USER_BASIC_INFO} />

                        <div className='w-full h-18 flex flex-row justify-evenly items-center'>
                            <button onClick={() => { deleteUser() }} type='reset' className="w-1/3 h-16 text-white bg-red-700 font-medium rounded-lg text-sm px-1 py-1 text-center dark:bg-red-600 ">
                                Excluir
                            </button>
                            <button type="submit" className="w-1/3 h-16 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-500 ">
                                Alterar apelido
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            :
            <UpdateNicknameRelatedUser />
        }
    </>)
}

export default RelatedUserOptions;