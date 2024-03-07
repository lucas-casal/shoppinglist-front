import { useEffect, useRef, useState } from "react"
import { IoIosPerson, IoMdCheckmarkCircle } from "react-icons/io"
import { assertIsNode } from "./Modal/assertIsNode"
import { GrUserAdmin } from "react-icons/gr"
import { ModalContext, TypesOfModal } from "../contexts/ModalContext"
import { User } from "./ModalLayouts/NewShoppingList"

type UserOptionBoxProps = {
    boxType: userBoxType,
    user: {
        id: number,
        name: string,
        img: string,
        nickname: string
    },
    otherMembers?: User[],
    setOtherMembers?: (otherMembers: User[]) => void,
    otherAdmins?: User[],
    setOtherAdmins?: (otherAdmins: User[]) => void
}

export enum userBoxType {
    'ADD_RELATED',
    'UPDATE_RELATED',
    'ADD_MEMBER',
    'UPDATE_MEMBER',
    'USER_BASIC_INFO'
}

export enum userRole {
    'ADMIN',
    'MEMBER'
}

const UserOptionBox = (props: UserOptionBoxProps) => {
    const { postModalOpen, setPostModalOpen, setTypeOfModal } = ModalContext()
    const { otherAdmins, setOtherAdmins, otherMembers, setOtherMembers, boxType, user } = props
    const { id, name, img, nickname } = user
    const [role, setRole] = useState<userRole>()
    const ref = useRef<HTMLDivElement>(null);

    const handleModalOpen = (typeOfModal: TypesOfModal): void => {
        setTypeOfModal(typeOfModal)
        setPostModalOpen(true)
    }

    function handleClickOutsideToggle(e: React.MouseEvent<HTMLDivElement>) {
        assertIsNode(e.target);
        const membersArray = otherMembers!;
        const adminsArray = otherAdmins!;
        if (role === undefined) {
            membersArray!.push(user)
            setOtherMembers ? setOtherMembers(membersArray) : ''
            setRole(userRole.MEMBER)
        }
        if (ref.current && !ref.current.contains(e.target)) {
            setRole(undefined);
            membersArray.splice(membersArray.indexOf(user), 1)
            adminsArray.splice(adminsArray.indexOf(user), 1)
            setOtherMembers ? setOtherMembers(membersArray) : ''
        } else {

            if (role === userRole.MEMBER) {
                adminsArray.push(user)
                setOtherAdmins ? setOtherAdmins(adminsArray) : ''
                setRole(userRole.ADMIN)
            }
            if (role === userRole.ADMIN) {
                adminsArray.splice(adminsArray.indexOf(user), 1)
                setRole(userRole.MEMBER)
            }
        }
    }

    const handleClickOnBox = (e: React.MouseEvent<HTMLDivElement>) => {
        if (boxType === userBoxType.ADD_MEMBER) { handleClickOutsideToggle(e) }
        if (boxType === userBoxType.UPDATE_RELATED) { localStorage.setItem(`relatedInfo-${id}`, JSON.stringify(user)); handleModalOpen(TypesOfModal.EDIT_RELATED_USER) }
    }

    return (
        <div onClick={handleClickOnBox}
            className={(role !== undefined ? "bg-blue-500 dark:bg-violet-950 " : "") +
                " w-full min-h-min flex flex-row justify-start items-start my-2 gap-2 p-2 border-y-2 border-blue-200 dark:border-violet-700"}>

            <div className=" w-20 h-20 rounded-full flex items-center overflow-hidden">
                {img ? <img
                    className="h-full object-cover"
                    src={img} />
                    :
                    <IoIosPerson className="w-full h-full" />
                }
            </div>

            <div className="relative flex flex-col items-start w-11/12 min-w-auto h-20 border-l-2 border-blue-200 dark:border-white px-2">
                <div className="flex flex-row w-full">
                    <p className="text-blue-500 dark:text-violet-700 mr-2">Id:</p>
                    <h2 className="h-10 text-center my-auto text-blue-700 dark:text-violet-300">{"#" + (id + 500)}</h2>
                </div>
                <div className="flex flex-row w-full">
                    <p className="text-blue-500 dark:text-violet-700">Nome:</p>
                    <h2 className="w-full h-10 text-start my-auto">{name + (nickname ? " (" + nickname + ")" : "")}</h2>
                </div>


                {boxType === userBoxType.UPDATE_RELATED ?
                    <svg className="w-6 h-6 text-gray-800 dark:text-white absolute top-2 right-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z" />
                    </svg>
                    : <></>}

                {boxType === userBoxType.ADD_MEMBER ?
                    <>
                        <IoMdCheckmarkCircle className={(role !== undefined ? "text-white dark:text-green-500" : "") + " w-6 h-6 absolute top-2 right-0"} />
                        {role !== undefined ?
                            <div ref={ref} className="w-10 h-10 flex justify-end items-end absolute bottom-2 right-0">
                                <GrUserAdmin className={(role === userRole.ADMIN ? 'text-green-500' : 'text-white') + " w-6 h-6 text-end "} />
                            </div>
                            : <></>}
                    </>
                    : <></>}


            </div>

        </div>

    )
}

export default UserOptionBox;