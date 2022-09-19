import React from 'react'
import { images } from '../constants'

const Services = () => {
  return (
    <div name='project' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className=''>
                <h2 className='text-5xl font-bold'>Our Projects!</h2>
                <p className='text-2xl py-6 text-gray-500'>
                In structural detailing, the project is initiated by the structural engineer. 
                The architectural drawings are prepared by the architect to the required scale and 
                specification given to him by the client. At Del Consult we fellow the right process during project implementation.
                </p>
            </div>
        </div>
        <div className='grid md:grid-cols-4 gap-8 px-12 text-center mt-20'>
                <div className='border py-8 rounded-xl shadow-xl hover:bg-gray-200'>
                    <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.firstp} alt="/" />
                    </div>
                    <p className='text-xl mt-2 text-left'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl hover:bg-gray-200' >
                   <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.lastp} alt="/" />
                   </div>
                   <p className='text-xl mt-2 text-left'>Phasellus faucibus scelerisque eleifend donec pretium. Lacus suspendisse faucibus interdum
                    posuere lorem. Volutpat est velit
                   </p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl hover:bg-gray-200' >
                    <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.secondp} alt="/" />
                    </div>
                    <p className='text-xl text-left mt-2'>Tellus id interdum velit laoreet. At consectetur lorem donec massa sapien.</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl hover:bg-gray-200' >
                    <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.thirdp} alt="/" />
                    </div>
                    <p className='text-xl text-left mt-2'>Pellentesque elit eget gravida cum sociis natoque penatibus et. Hendrerit dolor magna eget est lorem</p>
                </div>
            </div>
    </div>
  )
}

export default Services
