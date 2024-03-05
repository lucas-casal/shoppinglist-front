import { ModalContext } from "@/app/contexts/ModalContext";
import { FormEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const EditProfile = () => {
    const { setPostModalOpen } = ModalContext();
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(JSON.parse(localStorage.getItem('userInfo')!).img)
    const [typedPassword, setTypedPassword] = useState('')
    const [userPhoto, setUserPhoto] = useState('')
    const [username, setUsername] = useState('')


    const saveNewUserInfo = (e: FormEvent) => {
        e.preventDefault();
        const {password} = JSON.parse(localStorage.getItem('userInfo')!);
        console.log(typedPassword.toString())
        console.log(password)
        if (typedPassword.toString() === password.toString()){
           const userInfo = {name: username, img: preview, password}
           localStorage.setItem('userInfo', JSON.stringify(userInfo));
           toast('Usuário alterado com sucesso!')
           setTimeout(() => window.location.reload(), 2000)

        }

    }

    useEffect(() => {
        const {name, img, password} = JSON.parse(localStorage.getItem('userInfo')!);

        console.log(JSON.parse(localStorage.getItem('userInfo')!))
        setUserPhoto(img)
        setUsername(name)
    }, [])

    function previewImage(e: File | '') {

        // Verifica se um arquivo foi selecionado
        if (e) {
            const reader = new FileReader();

            reader.onload = function (event) {
                setPreview(event.target!.result);
            };

            // Lê o conteúdo do arquivo como um URL de dados
            reader.readAsDataURL(e);
        } else {
            setPreview(userPhoto)
        }
    }

    function closeModal() {
        setPostModalOpen(false);
    }
    return (
        <div className="relative bg-white rounded-lg shadow dark:bg-black">
            <ToastContainer />

            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-violet-700">
                    Alteração de dados do usuário
                </h3>
                <button onClick={() => closeModal()} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
            <div className="p-4 md:p-5">
                <form onSubmit={(e) => { saveNewUserInfo(e) }} className="space-y-4  flex flex-col justify-center items-center" action="#">
                    <input id='ImageFileInput' className='hidden' onChange={(e) => previewImage(e.target.files ? e.target.files[0] : '')} type="file" name="file" accept="image/*"></input>
                    <label htmlFor='ImageFileInput'>
                        <div className=" w-20 h-20 rounded-full flex justify-center items-center overflow-hidden">

                            <img
                                alt={'ImageFileInput'}
                                className="h-full object-cover"
                                src={preview?.toString()} />
                        </div>
                    </label>

                    <div className='w-full'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-violet-700">Novo nome</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-violet-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ex: José da Silva" required />
                    </div>
                    <div className='w-full'>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-violet-700">Digite sua senha para confirmar as alterações</label>
                        <input onChange={e => setTypedPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-violet-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className='w-full h-18 flex flex-row justify-evenly'>
                        <button onClick={() => { closeModal() }} type='reset' className="w-1/3 h-16 text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 ">
                            Cancelar
                        </button>
                        <button type="submit" className="w-1/3 h-16 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-500 ">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile;