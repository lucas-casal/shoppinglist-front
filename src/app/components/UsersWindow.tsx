import { IoAddOutline } from "react-icons/io5";
import UserOptionBox, { userBoxType } from "./UserOptionBox";
import { User } from "./ModalLayouts/NewShoppingList";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";

type UsersWindowProps = {
    boxType: userBoxType,
    setOtherMembers?: (otherMembers: User[]) => void,
    otherMembers?: User[],
    setOtherAdmins?: (otherAdmins: User[]) => void,
    otherAdmins?: User[]
}

const arrayTesteUser = [{ id:0,  name: "Lucas", img:"", nickname: ""}, {id:1, name: "Amanda Alves" , img:"", nickname: "" }, {id:2, name: "Bruno Baroni" , img:"", nickname: "" }, {id:3, name: "Yasmin Ribeiro" , img:"", nickname: "" }, {id:4, name: "Thomás Goulart" , img:"", nickname: "" }, {id:5, name: "Clara Fernandes", img: "", nickname: "" }]
const UsersWindow = (props: UsersWindowProps) => {
    const {boxType, otherMembers, setOtherMembers, otherAdmins, setOtherAdmins} = props;
    const [open, setOpen] = useState(false)



    return (
        <div className={(open ? "pb-2" : "") + " relative w-11/12 h-auto max-h-80 rounded-lg overflow-hidden border-blue-500 dark:border-violet-700 border-2"}>

                <button onClick={(e) => {e.preventDefault()}} className="absolute top-1 right-1 w-10 h-10" >
                    <IoAddOutline className="w-full h-full p-2 text-gray-800 dark:text-white active:text-green-500" />
                </button>
                <p onClick={() => {open ? setOpen(false) : setOpen(true)}} className="h-12 flex items-center justify-center text-center dark:text-white w-full border-b-2 border-blue-500 dark:border-violet-700 bg-blue-200 dark:bg-violet-900">
                    Rede de Contatos
                </p>
                {
                open ? 
                <>
                <div className="w-full h-72 overflow-y-scroll pb-5">
                    {arrayTesteUser.map(user => {
                        return <UserOptionBox key={user.name} setOtherMembers={setOtherMembers} otherMembers={otherMembers} setOtherAdmins={setOtherAdmins} otherAdmins={otherAdmins} boxType={boxType} user={user} />
                    })}
                </div>
                <MdOutlineKeyboardArrowDown onClick={() => setOpen(false)} className="absolute top-1 left-1 w-10 h-10 z-10" />
                </>
                :
                <MdOutlineKeyboardArrowRight onClick={() => setOpen(true)} className="absolute top-1 left-1 w-10 h-10 z-10" />

                }
            </div>
    )
}

export default UsersWindow;