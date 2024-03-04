import Link from "next/link";
import MenuOption from "./MenuOption";

type SideMenuProps = {

}

const SideMenu = (props: SideMenuProps) => {
    return (
        <div className="w-40 h-60 fixed top-10 right-0 rounded-bl-lg bg-blue-500 dark:bg-violet-500 overflow-y-scroll">
            <ul className="relative flex flex-col w-full h-60 justify-start">
                <Link href="/profile">
                    <MenuOption title={"Perfil"} />
                </Link>
                <MenuOption title={"Histórico"} />
                <MenuOption title={"Configurações"} />
                <MenuOption title={"Sair"} />
            </ul>
        </div>
    )
}

export default SideMenu;