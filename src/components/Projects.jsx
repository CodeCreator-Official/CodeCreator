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
                                    <li key={project[0]} className="w-1/5 min-w-[300px] rounded-md hover:-translate-y-2 cursor-pointer dark:border-gray-800 border-[2px] duration-200">
                                        <a href={project[1].link}>
                                            <div className="w-full rounded-md ">
                                                <img className="w-full dark:border-none border-b-[1px] h-[200px] rounded-t" src={project[1].url} alt="" />

                                                <div className="w-full p-3">
                                                    <h1 className="text-2xl p-1 font-semibold text-gray-700 dark:text-gray-200">
                                                        {project[1].title}
                                                    </h1>
                                                    <p className="p-1 text-gray-600 dark:text-gray-400">
                                                        {project[1].techStack}
                                                    </p>
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