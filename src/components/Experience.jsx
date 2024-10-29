import React from 'react'
import exp from "../assets/exp.png"
import exp2 from "../assets/exp2.png"
import { FaArrowRight } from 'react-icons/fa'
const Experience = () => {
  return (
    <div id="experience" className='bg-white py-16 px-8'>
      <div className='container mx-auto px-16 lg:px-24 text-center'>
        <div className='mb-12'>
        <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-2'>Experience</h3>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>My experience</h2>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-20 justifyContent'>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center text-center'>
            <img src={exp} alt="Full Time" className='w-full h-48 object-cover rounded-lg mb-4'/>
            <h3 className='text-2xl font-semibold text-green-800 mb-2'>Product Engineer</h3>
            <p className='text-gray-600 mb-2'>Full-Time</p>
            <p className='text-gray-600 mb-2'>From October 2023 to Present</p>
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center'>
        <img src={exp} alt="Internship" className='w-full h-48 object-cover rounded-lg mb-4'/>
            <h3 className='text-2xl font-semibold text-green-800 mb-2'>DevOps Enginner</h3>
            <p className='text-gray-600 mb-2'>Internship</p>
            <p className='text-gray-600 mb-2'>From Feburary 2023 to July 2023</p>
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center'>
        <img src={exp2} alt="Virtual-Internship" className='w-full h-48 object-cover rounded-lg mb-4'/>
            <h3 className='text-2xl font-semibold text-green-800 mb-2'>ML with PYTHON</h3>
            <p className='text-gray-600 mb-2'>Virtual Internship</p>
            <p className='text-gray-600 mb-2'>From March 2022 to April 2022</p>
        </div>
      </div>
      <div className='mt-8 text-right'>
        <a href='https://www.linkedin.com/in/ram-goutham-1a754223b' target="_blank" rel="noopener noreferrer" className='flex items-center justify-end text-yellow-500 font-semibold hover:text-yellow-500'>
            More About me <FaArrowRight className='ml-2'/>

        </a>
      </div>
    </div>
  )
}

export default Experience
