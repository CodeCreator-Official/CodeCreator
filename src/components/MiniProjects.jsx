/* eslint-disable no-unused-vars */
import { getMiniProjects } from '../Firebase/functions.js'
import { useState, useEffect } from 'react'

function MiniProjects() {

    const [data, setdata] = useState([])


    useEffect(() => {
        getMiniProjects()
            .then((item) => {
                setdata(
                    [...item]
                )
            })
    }, [])

    return (
        <div className="my-2 w-full">
            <h1 className="text-purple-500 text-center sm:text-start font-bold text-xl font-mono">Mini Projects</h1>

            <ul className="my-3 py-5 flex flex-wrap gap-5 w-full max-w-[70rem] justify-center sm:justify-start">
                {
                    data.length > 0 ?
                        (<>
                            {
                                data.map((project) => (
                                    <li key={project[0]} className="w-1/4 min-w-[300px] h-1/5 rounded-md group hover:-translate-y-2 cursor-pointer dark:border-gray-800 border-[2px] duration-500">
                                        <h1 className="text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 font-bold text-xl p-2 mx-2 duration-500">{project[1].title}</h1>
                                        <p className="text-gray-400 mx-2 px-2 font-medium">{project[1].TechStack}</p>

                                        <p className="text-gray-500 p-2 mx-2 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 duration-500">Published At: {project[1].publishOn}</p>
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

export default MiniProjects