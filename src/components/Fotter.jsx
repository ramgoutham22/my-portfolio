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
                <h3 className='font-mediumtext-gray-700'>My Work</h3>
                <ul className='text-gray-500 space-y-2'>
                   <li><a href='https://github.com/ramgoutham22' target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>
            <div className='space-y-4'>
            <h3 className='font-mediumtext-gray-700'>Connect & Collaborate</h3>
                <ul className='text-gray-500 space-y-2'>
                    <li><a href='https://www.linkedin.com/in/ram-goutham-1a754223b' target="_blank" rel="noopener noreferrer">Linked In</a></li>
                </ul>
            </div>
            <div>
            <h3 className='font-mediumtext-gray-700'>Social</h3>
                <ul className='text-gray-500 space-y-2'>
                    <li><a href='https://x.com/ram__goutham' target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href='https://www.instagram.com/ram__goutham/' target="_blank" rel="noopener noreferrer">Instagram</a></li>
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
