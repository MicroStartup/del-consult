import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Services from "./components/Services"


export const App = () => {
  return (
    <>
       <Navbar/>
       <Home />
       <About />
       <Services />
       <Contact />
    </>
  )
}

export default App