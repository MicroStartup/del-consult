import './App.css';

import { About, Footer, Header, Contact, Projects, Services, Testamonial } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
       <Header />
       <About />
       <Services/>
       <Projects/>
       <Testamonial/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
