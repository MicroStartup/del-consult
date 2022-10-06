import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { images } from '../constants'


import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose =()=> setNav(!nav)

  return (
       <div className='w-screen h-[70px] z-10 bg-gray-200 border-b border-white-500 fixed'>
          <div className='px-2 flex justify-between items-center w-full h-full'>
             <div className='flex items-center'>
                <img className='h-10 min-h-0 px-4' src={images.logo} alt="Company Logo" />
                <h1 className='font-bold text-[20px] px-2'>Del Consult</h1>
                <ul className='hidden md:flex cursor-pointer'>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li><Link to="service" smooth={true} offset={-50} duration={500}>Services</Link></li>
                    <li><Link to="project" smooth={true} offset={-100} duration={500}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
                </ul>
             </div>
            <div className='hidden md:flex pr-4'>
              <button className='px-8 py-3'>Get Quotation</button>
            </div>
            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <Bars3Icon className='w-5' />: <XMarkIcon className='w-5' />}
            </div>
         </div>


         <ul className={!nav ? 'hidden' : 'absolute bg-gray-200 w-full px-8'}>
          <li className='border-b-2 border-gray-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-gray-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-gray-300 w-full'><Link onClick={handleClose} to="service" smooth={true} offset={-50} duration={500}>Services</Link></li>
          <li className='border-b-2 border-gray-300 w-full'><Link onClick={handleClose} to="project" smooth={true} offset={-100} duration={500}>Projects</Link></li>
          <li className='border-b-2 border-gray-300 w-full'><Link onClick={handleClose} to="contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>

          <div className='flex flex-col my-4'>
              <button className='px-8 py-3'>Quotation</button>
          </div>
        </ul>
      </div>
  )
}

export default Navbar