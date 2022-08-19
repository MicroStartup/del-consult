import React from 'react'

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>Navbar
       <div>
          <img src={images.logo} alt="Fake logo" />
       </div>
    </nav>
  )
}

export default Navbar