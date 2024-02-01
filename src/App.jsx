import Main from "./components/Main"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
import Social from "./components/Social"

function App() {


  return (
    <div className="w-full dark:bg-slate-950 p-2">
      <div className="w-[90%] max-w-[1300px] mx-auto relative duration-200 dark:bg-slate-950">
        <Navbar />

        <section className="flex gap-5 w-full h-full">
          <Main />
          <SideBar />
        </section>

        <Social />
      </div>
    </div>
  )
}

export default App