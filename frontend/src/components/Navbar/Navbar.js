import React from 'react'

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
       <div>
          <img src={images.logo} alt="Fake logo" />
          <span> Del consult</span>
       </div>
    </nav>
  )
}

export default Navbar