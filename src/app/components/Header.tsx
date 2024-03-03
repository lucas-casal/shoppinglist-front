"use client"
import Link from "next/link";
import SideMenu from "./SideMenu";
import { useState } from "react";

type HeaderProps = {
    page: string;
}

const Header = (props: HeaderProps) => {
    const [menuOpened, setMenuOpened] = useState(false)
    const cartIcon = props.page === "current-list" ? (
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4 4c0-.6.4-1 1-1h1.5c.5 0 .9.3 1 .8L7.9 6H19a1 1 0 0 1 1 1.2l-1.3 6a1 1 0 0 1-1 .8h-8l.2 1H17a3 3 0 1 1-2.8 2h-2.4a3 3 0 1 1-4-1.8L5.7 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
        </svg>

    ) : (
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3" />
        </svg>
    )

    return (
        <header className="z-10 max-w-5xl w-full h-10 bg-blue-300 dark:bg-violet-900 fixed top-0 items-center justify-center flex">
            <Link href="/current-list">
                <button className="fixed top-0 left-0 w-10 h-10 flex items-center justify-center active:bg-blue-500 dark:active:bg-violet-500">
                    {cartIcon}
                </button>
            </Link>
            <Link href="/">
                <h1 className="font-slackside text-2xl text-center font-bold">Shopping Lister</h1>
            </Link>
            <button onClick={() => menuOpened ? setMenuOpened(false) : setMenuOpened(true)} className={(menuOpened ? 'bg-blue-500 dark:bg-violet-500' : '') + " fixed w-10 h-10 right-0 top-0 flex items-center justify-center"}>
                <svg className="relative w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                </svg>
                
            </button>
            {menuOpened ?
                    <SideMenu />
                    :
                    <></>}
        </header>
    )
}

export default Header;