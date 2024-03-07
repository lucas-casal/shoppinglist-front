"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import CreatePostModal from "../components/Modal/CreateModal";
import { ModalContext, TypesOfModal } from "../contexts/ModalContext";
import UsersWindow from "../components/UsersWindow";
import { userBoxType } from "../components/UserOptionBox";
import ListWindow from "../components/LIstsWindow";
import { IoIosPerson } from "react-icons/io";

/*const userInfo = {
    id: 10, name: 'Lucas Casal', img: '', password: ''
}*/
export default function Profile() {
    const { postModalOpen, setPostModalOpen, setTypeOfModal } = ModalContext()
    const [userInfoState, setUserInfoState] = useState({
        id: 10,
        name: '',
        img: '',
        password: 0
    })
    //localStorage.setItem('userInfo', JSON.stringify(userInfo))
    const handleModalOpen = (typeOfModal: TypesOfModal): void => {
        setTypeOfModal(typeOfModal)
        setPostModalOpen(true)
    }
    useEffect(() => {
        setUserInfoState(JSON.parse(localStorage.getItem('userInfo')!))
    }, [])

    return (<>
        <Header page={"profile"} />
        <main className="flex flex-col w-screen min-h-screen justify-start items-center gap-7 overflow-y-scroll">
            {postModalOpen ? <CreatePostModal /> : <></>}

            <div className="mt-12 w-11/12 h-28 rounded-lg border-blue-500 dark:border-violet-700 border-8 flex flex-row justify-between items-center gap-2 px-2">
                <div className=" w-20 h-20 rounded-full flex items-center overflow-hidden">
                    {userInfoState.img ? <img
                        className="h-full object-cover"
                        src={userInfoState.img} />
                        :
                        <IoIosPerson className="w-full h-full" />
                    }
                </div>

                <div className="relative flex flex-col items-start 
                w-11/12 min-w-auto h-20 border-l-2 border-blue-500 dark:border-white px-2">
                    <div className="flex flex-row w-full">
                        <p className="text-blue-500 dark:text-violet-700 mr-2">Id:</p>
                        <h2 className="h-10 text-center my-auto text-blue-700 dark:text-violet-300">{"#" + (userInfoState.id + 500)}</h2>
                    </div>

                    <div className="flex flex-row w-full">
                        <p className="text-blue-500 dark:text-violet-700 mr-2">Nome:</p>
                        <h2 className="h-10 text-center my-auto">{userInfoState.name}</h2>
                    </div>
                    <svg onClick={() => handleModalOpen(TypesOfModal.EDIT_PROFILE)} className="w-6 h-6 active:text-violet-700 text-gray-800 dark:text-white absolute top-0 right-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z" />
                    </svg>
                </div>
            </div>

            <ListWindow />

            <UsersWindow boxType={userBoxType.UPDATE_RELATED} />

        </main>
    </>);
}