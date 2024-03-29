type ListOptionBoxProps = {
    myShoppingList: {
        name: string,
        users: number,
        id: number
    }
}
const ListOptionBox = (props: ListOptionBoxProps) => {
    const {name, users, id} = props.myShoppingList
    return (
        <div id={id.toString()} className="flex flex-row justify-start items-start gap-2 p-2 border-b-2 border-blue-500 dark:border-violet-700">
            <div className="w-24 h-20">
            <p className="text-blue-500 dark:text-violet-700">Integrantes:</p>

            <div className=" w-24 h-11 rounded-full bg-blue-500 dark:bg-violet-700 text-white font-bold flex items-center justify-center text-xl overflow-hidden">
                {users}
            </div>
            </div>
            <div className="relative flex flex-col items-start w-11/12 min-w-auto h-20 border-l-2 border-blue-500 dark:border-white px-2">
                <p className="text-blue-500 dark:text-violet-700">Nome:</p>
                <h2 className="w-full h-10 text-center my-auto">{name}</h2>
                <svg className="w-6 h-6 text-gray-800 dark:text-white active:text-blue-500 active:dark:text-violet-700 absolute top-0 right-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z" />
                </svg>
            </div>
        </div>
    )
}

export default ListOptionBox;