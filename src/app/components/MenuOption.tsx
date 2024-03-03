type MenuOptionProps = {
    title: string
}
const MenuOption = (props: MenuOptionProps) => {
    const {title} = props;
    return (
        <li className={(title === "Sair" ? "absolute bottom-0 bg-red-700" : "border-b-2") + " w-full py-2 active:bg-violet-700 text-white text-center border-white dark:text-black dark:border-black"}>
            {title}
        </li>
    )
}

export default MenuOption;