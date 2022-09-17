import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Projects from "./components/Projects"


export const App = () => {
  return (
    <>
       <Navbar/>
       <Home />
       <About />
       <Services />
       <Projects />
       <Contact />
    </>
  )
}

export default App