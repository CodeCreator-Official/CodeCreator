
function Skills() {

    return (
        <>
            <div className="my-2 py-5 w-full">
                <h1 className="text-sky-400 text-center sm:text-start font-bold text-xl font-mono">My SkillSet</h1>

                <ul className="my-3 py-5 flex flex-wrap gap-6 max-w-[70rem] justify-center sm:justify-start">

                    <li className="w-[300px] min-h-[100px] max-h-[300px] rounded-md cursor-pointer dark:border-gray-800 border-[2px] duration-200">
                        <h1 className="text-yellow-400 text-xl font-mono p-2 mx-2">FrontEnd</h1>

                        <div className="m-4">
                            <ul className="font-mono flex flex-wrap gap-2">
                                <li className="text-red-500 py-1 px-2 border-[2px] rounded-md dark:border-gray-700 w-fit">
                                    Html
                                </li>

                                <li className="text-sky-500 py-1 px-2 border-[2px] rounded-md dark:border-gray-700 w-fit">
                                    CSS
                                </li>

                                <li className="text-yellow-500 py-1 px-2 border-[2px] rounded-md dark:border-gray-700 w-fit">
                                    Javascript
                                </li>

                                <li className="text-sky-500 py-1 px-2 border-[2px] rounded-md dark:border-gray-700 w-fit">
                                    TailWindCSS
                                </li>

                                <li className="text-pink-500 py-1 px-2 border-[2px] rounded-md dark:border-gray-700 w-fit">
                                    BootStrap
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="w-[300px] min-h-[160px] max-h-[300px] rounded-md cursor-pointer dark:border-gray-800 border-[2px] duration-200">
                        <h1 className="text-green-500 text-xl font-mono p-2 mx-2">BackEnd</h1>

                        <div className="m-4">
                            <ul className="font-mono flex flex-wrap gap-2">
                                <li className="text-green-500 py-1 px-2 border-[2px] rounded-md dark:border-gray-700 w-fit">
                                    NodeJS
                                </li>

                                <li className="dark:text-white text-gray-900 py-1 px-2 border-[2px] rounded-md dark:border-gray-700 w-fit">
                                    ExpressJS
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="w-[300px] min-h-[160px] max-h-[300px] rounded-md cursor-pointer dark:border-gray-800 border-[2px] duration-200">
                        <h1 className="text-sky-500 text-xl font-mono p-2 mx-2">DataBase</h1>

                        <div className="m-4">
                            <ul className="font-mono flex flex-wrap gap-2">
                                <li className="text-green-500 py-1 px-2 border-[2px] rounded-md dark:border-gray-700 w-fit">
                                    MongoDB
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Skills