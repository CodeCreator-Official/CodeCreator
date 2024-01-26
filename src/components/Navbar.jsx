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
                <button className="text-md border-[1px] hover:bg-gray-300 dark:bg-gray-300 text-gray-900 rounded-md py-2 px-3 font-semibold duration-200 dark:hover:bg-gray-400 my-2">About Me</button>

                {/* <button
                    onClick={() => {
                        setToggle(!toggle)
                        ToggleDarkMode()
                    }}
                    className="w-[3.6rem] ml-4 h-8 rounded-full border-[1px] bg-white flex dark:bg-slate-900 dark:border-gray-500 items-center transition duration-300 focus:outline-none"
                >
                    <div
                        id="switch-toggle"
                        className={`w-6 h-6 relative rounded-full transition duration-500 transform m-1 bg-yellow-400 ${toggle ? 'translate-x-6' : 'translate-x-0'}  p-1 text-black bg-[url('https://cdn2.iconfinder.com/data/icons/solar-energy-3/200/969-512.png')] bg-cover grayscale invert`}>
                    </div>
                </button> */}

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
                        Code
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar