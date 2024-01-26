/* eslint-disable react/jsx-no-target-blank */

function Social() {
    return (
        <div className="py-5 flex flex-col items-center justify-center">
            <h1 className="dark:text-white text-gray-700 font-bold font-mono text-center text-xl">Connect With Me</h1>

            <div className="my-5">
                <ul className="text-4xl flex gap-1">
                    <li className="group border-gray-500 cursor-pointer hover:border-pink-500 rounded-full duration-200">
                        <a href="https://www.instagram.com/the.codecreator/" target="_blank">
                            <i className='bx bxl-instagram text-gray-500 group-hover:text-pink-500 p-2 duration-200'></i>
                        </a>
                    </li>
                    <li className=" group border-gray-500 cursor-pointer hover:border-red-500 rounded-full duration-200">
                        <i className='bx bxl-youtube text-gray-500 group-hover:text-red-500 p-2 duration-200'></i>
                    </li>
                    <li className=" group border-gray-500 cursor-pointer hover:border-white rounded-full duration-200">
                        <a href="https://github.com/CodeCreator-Official" target="_blank">
                            <i className='bx bxl-github text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-300 p-2 duration-200'></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Social