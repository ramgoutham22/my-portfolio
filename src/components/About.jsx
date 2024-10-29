import React from 'react'
import me from "../assets/me.png"
import Goutham_CV from "../assets/Goutham_CV.pdf"
// import me from "../assets/me.png"
import {FaRegHandshake, FaRegFolderOpen} from "react-icons/fa"
import {MdSupportAgent} from "react-icons/md"
import { BsDownload } from 'react-icons/bs'
const About = () => {
  return (
    <div id="about" className='py-16 bg-gray-50'>
    <div className='containner mx:auto px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between'>
      <div className='w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30'>
        <img  src={me} style={{width:'500px',height:'500px'}}
        alt='My Photo'
        className='w-full h-auto object-cover'/>
      </div>
    {/*Right Section*/}
      <div className='w-full md:w-1/16 md:pl-12'>
        {/* <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-4'>A Bit</h3> */}
        <h2 className='text-4xl md:text-6xl font-bold text-gray-800 mb-6'>About Me</h2>
        <p className='text-gray-600 mb-6'>
        Results-driven Product Engineer with 1 year of experience at TCS, specializing in product development and engineering solutions. Skilled in collaborating with cross-functional teams to enhance product performance and ensure quality standards. Proficient in utilizing engineering principles and tools to deliver innovative solutions that meet customer requirements.
        </p>

        <div className='flex flex-wrap mb-6'>
            <div className='flex items-center w-1/2 mb-4'>
            <FaRegHandshake className='text-yellow-500 text-5xl mr-4'/>
            <div>
                <h4 className='text-gray-700 font-smibold'>1 years+</h4>
                <p className='text-gray-700'>Experience</p>
            </div>
            </div>
            
        </div>
        <div className='flex flex-wrap mb-6'>
            <div className='flex items-center w-1/2 mb-4'>
            <MdSupportAgent className='text-yellow-500 text-5xl mr-4'/>
            <div>
                <h4 className='text-gray-700 font-smibold'>Availablity</h4>
                <p className='text-gray-700'>Flexible with time zones and open to collaborating with global teams</p>
            </div>
            </div>
            </div>
            <div className='flex items-center'>
                <button className='bg-yellow-500 px-8 py-3 rounded-lg mr-4 hover:bg-yellow-400'>Hire Me</button>
                <a className='flex items-center text-yellow-500 font-semibold' href={Goutham_CV} download='Goutham_CV.pdf'>Download CV <BsDownload className='ml-2 text-lg'/></a>
            </div>
      </div>
    </div>
    </div>
  )
}

export default About
