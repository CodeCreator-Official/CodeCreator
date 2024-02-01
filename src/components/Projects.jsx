/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { getProjects } from '../Firebase/functions.js'

function Projects() {

    const [data, setdata] = useState([])


    useEffect(() => {
        getProjects()
            .then((item) => {
                setdata(
                    [...item]
                )
            })
    }, [])

    return (
        <div className="my-2">
            <h1 className="text-green-400 text-center sm:text-start w-full font-bold text-xl font-mono">My Projects</h1>

            <ul className="my-3 flex flex-wrap w-full gap-5 py-5 max-w-[70rem] justify-center sm:justify-start">
                {
                    data.length > 0 ?
                        (<>
                            {
                                data.map((project) => (
                                    <li key={project[0]} className="w-1/5 min-w-[300px] rounded-md hover:scale-105 cursor-pointer dark:border-gray-800 border-[2px] duration-500">
                                        <a href={project[1].link}>
                                            <div className="w-full rounded-md ">
                                                <img className="w-full dark:border-none p-2 rounded-xl border-b-[1px] h-[200px]" src={project[1].url} alt="" />

                                                <div className="w-full p-3">
                                                    <h1 className="text-2xl p-1 font-semibold text-gray-700 dark:text-gray-200">
                                                        {project[1].title}
                                                    </h1>
                                                    <p className="p-1 text-gray-600 dark:text-gray-400">
                                                        {project[1].desc}
                                                    </p>

                                                    <div className='flex items-center justify-around py-2 gap-2 px-2'>
                                                        <a href={project[1].link} className='text-gray-400 active:text-gray-200 hover:text-gray-200 justify-center flex gap-1 py-1 px-2 font-mono border-[2px] rounded hover:border-gray-400 
                                                        bg-slate-900 w-1/2 active:border-gray-400 border-gray-600 duration-200'>
                                                            <span className="material-symbols-outlined ">
                                                                visibility
                                                            </span>
                                                            View
                                                        </a>

                                                        <a href={project[1].code} target='_blank' className='text-gray-400 active:text-gray-200
                                                        hover:text-gray-200 flex justify-center items-center gap-1 py-1 px-2 font-mono border-[2px] w-1/2 rounded border-gray-600 hover:border-gray-400 active:border-gray-400 duration-200'>
                                                            <i class='bx bxl-github'></i>
                                                            Code
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </>) :
                        (<div className='w-1/5 min-w-[300px] h-[200px] rounded-md hover:-translate-y-2 cursor-pointer dark:border-gray-800 border-[2px] duration-200 flex items-center justify-center'>
                            <h1 className='text-gray-700 text-2xl font-semibold'>Coming Soon ...</h1>
                        </div>)
                }
            </ul>
        </div>
    )
}

export default Projects