import Main from "./components/Main"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
import Social from "./components/Social"

function App() {


  return (
    <div className="w-full relative duration-200 dark:bg-slate-950">
      <Navbar />

      <section className="flex gap-5 w-full h-full">
        <Main />
        <SideBar />
      </section>

      <Social />
    </div>
  )
}

export default App