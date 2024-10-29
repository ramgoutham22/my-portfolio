import React from 'react'

const Fotter = () => {
  return (
    <div className='bg-white mt-12 flex flex-col items-center'>
      <div className='container flex flex-col md:flex-row justify-between px-5'>
        <div className='mb-8 md:mb-0 md:w-1/4 mr-6 text-center md:text-start'>
            <h2 className='text-3xl font-semibold text-yellow-500'>Ram Goutham</h2>
            <p className='mt-1 text-gray-500 md:pr-5'></p>
        </div>
        <div className='flex justify-between md:w-3/4'>
            <div className='space-y-4'>
                <h3 className='font-mediumtext-gray-700'>Explore</h3>
                <ul className='text-gray-500 space-y-2'>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>About me</a></li>
                    <li><a href='#'>Blog</a></li>
                </ul>
            </div>
            <div className='space-y-4'>
            <h3 className='font-mediumtext-gray-700'>Legal</h3>
                <ul className='text-gray-500 space-y-2'>
                    <li><a href='#'>Terms of Use</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                </ul>
            </div>
            <div>
            <h3 className='font-mediumtext-gray-700'>Social</h3>
                <ul className='text-gray-500 space-y-2'>
                    <li><a href='#'>Twitter</a></li>
                    <li><a href='#'>Linked In</a></li>
                    <li><a href='#'>Instagram</a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className='mt-8 bg-yellow-500 h-2 w-full'> 

      </div>
    </div>
  )
}

export default Fotter
