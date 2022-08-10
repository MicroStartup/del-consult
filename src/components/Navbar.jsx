import React from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
         <div className='flex items-center'>
              <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Del Consult</h1>
         <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Project</li>
          <li>Services</li>
          <li>Contact</li>
         </ul>
         </div>
      </div>
      <div className='hidden md:flex pr-4'>
          <button className='px-8 py-3'>QUOTE</button>
        </div>
        <div className='md:hidden mr-4'>
            <MenuIcon className='w-5' />
        </div>
    </div>
  )
}

export default Navbar