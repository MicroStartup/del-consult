import React from 'react'
import { images } from '../constants'

const Services = () => {
  return (
    <div name='service' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className=''>
                <h2 className='text-5xl font-bold'>What we provide!</h2>
                <p className='text-2xl py-6 text-gray-500'>
                At Del Consult , we provide our Clients with timeless and modern designs to meet their needs 
                while ensuring that Net zero carbon is achieved as we ought to combat climate change. Our engineering 
                services include; Structural designs, retrofitting design of an existing structure, Renovations, Structural 
                integrity Assessment, underpinning of existing foundation and others
                </p>
            </div>
        </div>
        <div className='grid md:grid-cols-4 gap-8 px-12 text-center mt-20'>
                <div className='border py-8 rounded-xl shadow-xl hover:bg-gray-200'>
                    <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.architecture} alt="/" />
                    </div>
                    <p className='text-xl mt-2'>Structural Designs And Retrofitting Design</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl hover:bg-gray-200' >
                   <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.estimations} alt="/" />
                   </div>
                   <p className='text-xl mt-2'>Structural Integrity <br></br>Assessment</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl hover:bg-gray-200' >
                    <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.archi_design} alt="/" />
                    </div>
                    <p className='text-xl mt-2'>Renovations</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl hover:bg-gray-200' >
                    <div className='text-gray-500 flex justify-center'> 
                      <img className='h-48 min-h-0 rounded-md' src={images.fifthp} alt="/" />
                    </div>
                    <p className='text-xl mt-2'>Underpinning of Existing Foundation and Others</p>
                </div>
            </div>
    </div>
  )
}

export default Services
