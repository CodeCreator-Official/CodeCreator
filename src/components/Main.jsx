import MiniProjects from "./MiniProjects"
import Projects from "./Projects"
import Skills from "./Skills"

function Main() {
    return (
        <div className="rounded-lg px-5 w-full h-full">
            <div className="flex border-[2px] dark:border-gray-800 dark:bg-slate-900 lg:w-full rounded duration-200 p-3 my-2 items-center">
                <img className="w-14 rounded-full h-14" src="https://th.bing.com/th/id/OIP.WB62eaUDV-0wrQ11RAgexgHaJQ?w=145&h=181&c=7&r=0&o=5&pid=1.7" alt="" />

                <div className="pl-3">
                    <h1 className="text-xl font-bold text-gray-700 dark:text-gray-200">Sankalp Pimpalkar</h1>
                    <p className="text-gray-500 font-medium dark:text-gray-400 text-sm">@codecreator</p>
                </div>
            </div>

            <Skills/>
            <Projects/>
            <MiniProjects/>
        </div>
    )
}

export default Main