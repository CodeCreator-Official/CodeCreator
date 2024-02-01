/* eslint-disable no-unused-vars */
import { useState } from "react"

function Navbar() {

    const [menu, setMenu] = useState(false)

    const [toggle, setToggle] = useState(true)

    function ToggleDarkMode() {

        const html = document.querySelector('html')
        if (toggle) {
            html.classList.replace('dark', 'light')
        }
        else {
            html.classList.replace('light', 'dark')
        }
    }

    return (
        <div className="w-full flex items-center justify-between py-2 px-5">
            <h1 className="font-semibold text-xl text-gray-700 dark:text-gray-200">CodeCreator</h1>

            <div className="flex items-center">
                <button className="text-md border-[1px] hover:bg-gray-200 dark:bg-gray-200 text-gray-900 rounded-md py-2 px-3 font-semibold duration-200 dark:hover:bg-gray-300 my-2">About</button>


                <button className="text-3xl pl-3" onClick={() => {
                    setToggle(!toggle)
                    ToggleDarkMode()
                }}>
                    {
                        toggle ?
                            (<i className='bx bxs-sun text-gray-300 duration-500'></i>)
                            :
                            (<i className='bx bxs-moon text-gray-500 duration-500' ></i>)
                    }
                </button>

                <i className='bx bx-menu dark:text-gray-200 text-3xl block lg:hidden pl-3 z-50' onClick={() => setMenu(!menu)}></i>
            </div>

            <div className={`w-full text-white h-screen absolute bg-[#000000ae] left-0 top-0 ${menu ? 'block' : 'hidden'} lg:hidden`}>
                <ul className="w-full h-full flex gap-3 flex-col items-center justify-center">
                    <li className="text-3xl p-2 text-gray-300 font-semibold hover:text-red-500 duration-200 cursor-pointer">
                        Home
                    </li>
                    <li className="text-3xl p-2 text-gray-300 font-semibold hover:text-yellow-400 duration-200 cursor-pointer">
                        <a href="https://github.com/CodeCreator-Official">Code</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar