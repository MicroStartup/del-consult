import React from 'react'
import { ClockIcon, ChatBubbleLeftRightIcon, BanknotesIcon,  LockClosedIcon} from '@heroicons/react/24/solid'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className=''>
                <h2 className='text-5xl font-bold'>Site and Civil Engineering Services</h2>
                <p className='text-2xl py-6 text-gray-500'>
                <strike>At Del Consult , we provide our Clients with timeless and modern designs to meet their needs while ensuring that Net zero carbon is achieved as we ought to combat climate change. Our engineering services include; Structural designs, retrofitting design of an existing structure, Renovations, Structural integrity Assessment,
                 underpinning of existing foundation and others.</strike>
                </p>
            </div>
        </div>
        <div className='grid md:grid-cols-4 gap-8 px-12 text-center mt-20'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <div className='text-gray-500 flex justify-center'> <ClockIcon className='w-[100px]' /></div>
                    <p className='text-xl mt-2'>Save time</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                   <div className='text-gray-500 flex justify-center'> <ChatBubbleLeftRightIcon className='w-[100px]' /></div>
                   <p className='text-xl mt-2'>Support</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                <div className='text-gray-500 flex justify-center'> <LockClosedIcon className='w-[100px]' /></div>
                    <p className='text-xl mt-2'>Transactions</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                <div className='text-gray-500 flex justify-center'> <BanknotesIcon className='w-[100px]' /></div>
                    <p className='text-xl mt-2'>Trust</p>
                </div>
            </div>
    </div>
  )
}

export default About