import React from 'react'
import { ClockIcon, ChatBubbleLeftRightIcon, BanknotesIcon,  LockClosedIcon} from '@heroicons/react/24/solid'

const Services = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className=''>
                <h2 className='text-5xl font-bold'>We provide!</h2>
                <p className='text-2xl py-6 text-gray-500'>
                At Del Consult , Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Morbi tincidunt augue interdum velit euismod in.
                Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Viverra tellus in hac habitasse platea dictumst.
                </p>
            </div>
        </div>
        <div className='grid md:grid-cols-4 gap-8 px-12 text-center mt-20'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <div className='text-gray-500 flex justify-center'> <ClockIcon className='w-[100px]' /></div>
                    <p className='text-xl mt-2'>Structural Designs</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                   <div className='text-gray-500 flex justify-center'> <ChatBubbleLeftRightIcon className='w-[100px]' /></div>
                   <p className='text-xl mt-2'>Quantity Estimations</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                <div className='text-gray-500 flex justify-center'> <LockClosedIcon className='w-[100px]' /></div>
                    <p className='text-xl mt-2'>Architectural Designs</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                <div className='text-gray-500 flex justify-center'> <BanknotesIcon className='w-[100px]' /></div>
                    <p className='text-xl mt-2'>Construction Supervision</p>
                </div>
            </div>
    </div>
  )
}

export default Services
