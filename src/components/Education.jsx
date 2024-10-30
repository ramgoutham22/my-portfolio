import React, { useState } from 'react'
import btech from "../assets/btech.png"
import inter from "../assets/inter.png"
import school from "../assets/school.png"
import java from "../assets/java.png"
import javascript from "../assets/javascript.png"
import python from "../assets/python.png"
import sql from "../assets/sql.png"
import { FaArrowLeft,FaArrowRight} from 'react-icons/fa'
const education=[
    {
        name:"Raghu Institute of Technology",
        position:"Bachelor of Technology",
        image:btech,
        fieldOfStudy:"Computer Science and Engineering",
        cgpa:"8.74"
    },
    {
        name:"Sri Gayatri Junior College",
        position:"Intermediate",
        image:inter,
        fieldOfStudy:"MPC",
        cgpa:"9.06"
    },
    {
        name:"Narayana EM High School",
        position:"10th",
        image:school,
        fieldOfStudy:"SSC",
        cgpa:"9.0",
    }
]

const Education = () => {
    const[current,setCurrent] = useState(0);
    const educationCount =education.length;
    const nextEducation=() =>{
        setCurrent(current === educationCount-1 ? 0:current+1)

    }
    const preEducation=() =>{
        setCurrent(current === 0 ? educationCount-1 : current-1)
    }
  return (
    <div id="education" className='=py-16 bg-white'>
      <div className='container mx-auto px-6 lg:px-24 text-center'>
        <div className='mb-12'>
            <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-2'>Education</h3>
            <h2 className='text-4xl font-bold text-gray mb-4'>About my education</h2>

        </div>
        <div className='relative max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6'>
            <div className='flex justify-center items-center mb-4'>
                <img src={education[current].image}
                className='w-500 h-500 object-cover'/>
            </div>
            <p className='text-4xl text-gray-600 italic mb-6 px-14'>{education[current].name}</p>
            <h3 className='font-semibold text-lg'>{education[current].position}</h3>
            <p className='text-gray-400'>{education[current].fieldOfStudy}</p>
            <h3 className='font-semibold text-lg'>CGPA:{education[current].cgpa}</h3>
            <div className='absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4'>
                <button className='bg-red-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-300' onClick={preEducation}><FaArrowLeft/></button>
                <button className='bg-red-500 text-white p-2 rounded-full hover:bg-yellow-600 transition duration-300' onClick={preEducation}><FaArrowRight/></button>
            </div>
        </div>
        <div className='mt-16'>
            <h4 className='text-xl font-semibold mb-14'>My Skills</h4>
            <div className='flex justify-center  gap-4 md:gap-16 lg:gap-27 items-center flex-wrap'>
                <img src={java} alt="java" className='h-20 ad:h-20 object-cover'/>
                <img src={javascript} alt="javascript" className='h-20 ad:h-20 object-cover'/>
                <img src={python} alt="python" className='h-20 ad:h-20 object-cover'/>
                <img src={sql} alt="sql" className='h-20 ad:h-20 object-cover'/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Education
