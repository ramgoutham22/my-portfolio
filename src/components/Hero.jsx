import React from 'react';
import {BsDownload} from "react-icons/bs"
import techie from "../assets/techie.jpg"
import Goutham_CV from "../assets/Goutham_CV.pdf"
const Hero = () => {
  return (
    <div className='text-black flex flex-col-reverse md:flex-row justify-content items-center py-10 px-5 sm:px-10 lg:px-40 bg-gradient-to-t from-white to-yellow-50'>
      <div className='w-full md:w-1/2 mb-10 text-center md:text-left'>
        <h3 className='text-base md:text-lg lg:text-xl mb-0 md:-mb-2 text-yellow-500'>Hello, I am </h3>
        <h1 className='text-2xl md:text-4xl lg:text-6xl my-0 md:-ml-1 font bold py-2 md:py:2'>Ram Goutham</h1>
        <h3 className='text-base md:text-xl lg:text-2xl text-green-600'>Product Engineer & Web developer</h3>
        <p className='text-sm md:text-xl lg:text-lg tracking-tighter'>Experienced Product Engineer working at Tata Consultancy Services having industrial hands on work experience with Java, JavaScript and also has a college level experience in Python. Able to debug and fix the issue. Uses Eclipse as an IDE. Currently working on the project "Transform Plus Reverse Engieering".
        </p>
        <div className='flex items-center justify-content md:justify-start gap-4 mt-5'> 
          <a href="https://api.whatsapp.com/send?phone=919848759689"> 
            <button className='bg-yellow-500 px-10 py-1 rounded-large mr-4 hover:bg-yellow-400 duration-200'>Hire Me</button>
            </a>
            <a className='flex items-center text-yellow-500 font-semibold' href={Goutham_CV} download="Goutham_CV.pdf"> 
                Download CV <BsDownload className='ml-2 text-lg'/> 

            </a>
        </div>
      </div>
      <div className='w-half md:w-1/2 px-10 md:px-0 flex justify-center md:justify-end mb-20 md:mb-0'> 
        <img className='max-w-full' src={techie} style={{width:'500px',height:'300px'}} alt='Image'/>
      </div>
    </div>
  )
}

export default Hero
