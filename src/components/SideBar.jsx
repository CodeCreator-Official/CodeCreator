
function SideBar() {
    return (
        <div className="dark:bg-slate-900 w-full max-w-[300px] border-[2px] dark:border-gray-800 duration-200 bg-gray-200 px-2 mx-5 rounded-lg h-fit hidden lg:block">
            <ul>
                <li className="flex items-center group gap-1 px-2 cursor-pointer text-gray-600 ">
                    <i className='bx bx-home-alt duration-200 group-hover:text-gray-800 dark:group-hover:text-gray-200 text-3xl dark:text-gray-400 p-2 m-2 ' ></i>
                    <h2 className="text-xl duration-200 group-hover:text-gray-800 dark:group-hover:text-gray-200 font-semibold py-2 dark:text-gray-400">Home</h2>
                </li>

                <li className="flex items-center group gap-1 px-2 cursor-pointer text-gray-600 ">
                    <i className='bx bx-code-curly duration-200 group-hover:text-gray-800 dark:group-hover:text-gray-200 text-3xl dark:text-gray-400 p-2 m-2 ' ></i>
                    <h2 className="text-xl duration-200 group-hover:text-gray-800 dark:group-hover:text-gray-200 font-semibold py-2 dark:text-gray-400">Code</h2>
                </li>
            </ul>
        </div>
    )
}

export default SideBar