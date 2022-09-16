import React from 'react'
import { ClockIcon, ChatBubbleLeftRightIcon, BanknotesIcon,  LockClosedIcon} from '@heroicons/react/24/solid'

import { images } from '../constants'

const Services = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className=''>
                <h2 className='text-5xl font-bold'>What we provide!</h2>
                <p className='text-2xl py-6 text-gray-500'>
                At Del Consult , Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Morbi tincidunt augue interdum velit euismod in.
                Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Viverra tellus in hac habitasse platea dictumst.
                </p>
            </div>
        </div>
        <div className='grid md:grid-cols-4 gap-8 px-12 text-center mt-20'>
                <div className='border py-8 rounded-xl shadow-xl hover:bg-gray-200'>
                    <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.architecture} alt="/" />
                    </div>
                    <p className='text-xl mt-2'>Structural Designs</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl hover:bg-gray-200' >
                   <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.estimation} alt="/" />
                   </div>
                   <p className='text-xl mt-2'>Quantity Estimations</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl hover:bg-gray-200' >
                    <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.archi_design} alt="/" />
                    </div>
                    <p className='text-xl mt-2'>Architectural Designs</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl hover:bg-gray-200' >
                    <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.building} alt="/" />
                    </div>
                    <p className='text-xl mt-2'>Construction Supervision</p>
                </div>
            </div>
    </div>
  )
}

export default Services
