import React from 'react'

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="app__navbar">
       <div className="app__navbar-logo">
          <img src={images.logo} alt="Fake logo" />
          <span> Del consult</span>
       </div>
       <ul className="app__navbar-links">
       {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
       </ul>
       <div className="app__navbar-menu">
        
       </div>
    </nav>
  )
}

export default Navbar