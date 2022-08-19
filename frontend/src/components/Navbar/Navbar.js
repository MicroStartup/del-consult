import React from 'react'

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="app_navbar">
       <div className="app_navbar-logo">
          <img src={images.logo} alt="Fake logo" />
          <span> Del consult</span>
       </div>
       <ul className="app_navbar-links">
       {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
          <li className="app_flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
       </ul>
    </nav>
  )
}

export default Navbar