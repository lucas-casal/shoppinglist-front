"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import CreatePostModal from "../components/Modal/CreateModal";
import MyShoppingListOption from "../components/MyShoppingListOption";
import RelatedUser from "../components/RelatedUser";
import { ModalContext, TypesOfModal } from "../contexts/ModalContext";

const arrayTesteUser = [{ name: "Lucas" }, { name: "Amanda Alves" }, { name: "Bruno Baroni" }, { name: "Yasmin Ribeiro" }, { name: "Thomás Goulart" }, { name: "Clara Fernandes" }]
const arrayTesteList = [{ name: "Churras 26/04", id: 0, users: 20 }, { name: "Aniversário", id: 1, users: 3 }, { name: "Compras do mês", id: 2, users: 2 }, { name: "Cineminha", id: 4, users: 1 }, { name: "Viagem Disney", id: 5, users: 2 }]
const userInfo = {img: "https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1-768x512.png", name: "Lucas Casal", password: 123456 }
export default function Profile() {
    const { postModalOpen, setPostModalOpen, setTypeOfModal } = ModalContext()
    const [userInfoState, setUserInfoState] = useState({
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
        <main className="flex flex-col w-screen h-screen justify-start items-center gap-7 overflow-y-scroll">
            {postModalOpen ? <CreatePostModal /> : <></>}
            
            <div className="mt-12 w-11/12 h-28 rounded-lg border-blue-500 dark:border-violet-700 border-2 flex flex-row justify-between items-center gap-2 px-2">
                <div className=" w-20 h-20 rounded-full flex items-center overflow-hidden">
                    <img
                        className="h-full object-cover"
                        src={userInfoState.img} />
                </div>

                <div onClick={() => handleModalOpen(TypesOfModal.EDIT_PROFILE)} className="relative flex flex-col items-start 380:w-4/5 600:w-11/12 min-w-auto h-20 border-l-2 border-blue-500 dark:border-white px-2">
                    <p className="text-blue-500 dark:text-violet-700">Nome:</p>
                    <h2 className="w-full h-10 text-center my-auto">{userInfoState.name}</h2>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white absolute top-0 right-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z" />
                    </svg>
                </div>

            </div>
            <div className="relative w-11/12 min-h-40 h-80 rounded-lg overflow-hidden border-blue-500 dark:border-violet-700 border-2 p-2">
                <button className="absolute top-1 right-1 w-10 h-10 z-10" >
                    <svg className="w-full h-full p-2 text-gray-800 dark:text-white active:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v6.4A7.5 7.5 0 1 0 10.5 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M9 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-3c.6 0 1 .4 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1c0-.6.4-1 1-1Z" clipRule="evenodd" />
                    </svg>


                </button>
                <p className="absolute top-0 left-0 h-12 flex items-center justify-center text-center dark:text-white w-full border-b-2 border-blue-500 dark:border-violet-700 bg-blue-200 dark:bg-violet-900">
                    Minhas listas de compras
                </p>
                <div className="absolute top-12 left-0 w-full h-72 overflow-y-scroll pb-5">
                    {arrayTesteList.map(list => {
                        return <MyShoppingListOption key={list.id} myShoppingList={list} />
                    })}
                </div>
            </div>

            <div className="relative w-11/12 min-h-40 h-80 rounded-lg overflow-hidden border-blue-500 dark:border-violet-700 border-2 p-2">
                <button className="absolute top-1 right-1 w-10 h-10 z-10" >
                    <svg className="w-full h-full p-2 text-gray-800 dark:text-white active:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1c0-.6.4-1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                    </svg>

                </button>
                <p className="absolute top-0 left-0 h-12 flex items-center justify-center text-center dark:text-white w-full border-b-2 border-blue-500 dark:border-violet-700 bg-blue-200 dark:bg-violet-900">
                    Rede de Contatos
                </p>
                <div className="absolute top-12 left-0 w-full h-72 overflow-y-scroll pb-5">
                    {arrayTesteUser.map(user => {
                        return <RelatedUser key={user.name} user={user} />
                    })}
                </div>
            </div>
        </main>
    </>);
}