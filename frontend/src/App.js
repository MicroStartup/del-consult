import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"


export const App = () => {
  return (
    <>
       <Navbar/>
       <Home />
       <About />
       <Contact />
    </>
  )
}

export default App