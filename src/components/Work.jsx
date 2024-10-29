import React from 'react'
import workImg1 from "../assets/workImg1.png"
import workImg2 from "../assets/workImg2.png"
import workImg3 from "../assets/workImg3.png"

const Work = () => {
    const Overview=[
        {
            id:1,
            title:"Centralized End User Support System using Rapid API and Firebase with BOT Framework",
            description:"Major Project in B.Tech",
            workImg:workImg1,
            details:"https://foxsa.netlify.app"
        },
        // {
        //     id:2,
        //     title:"",
        //     description:"Work Images",
        //     workImg:workImg2,
        //     details:""
        // },
        {
            id:3,
            title:"Covid-19 prediction through AI & ML",
            description:"Virtual Internship project",
            workImg:workImg3,
            details:""
        }
    ]
  return (
    <div id="projects" className='container mx-auto px-4 py-12'>
      <h3 className='text-yellow-500 font-semibold text-center uppercase mb-2'>Projects</h3>
      <h2 className='text-4xl font-bold text-center mb-12'>About my Projects</h2>
      {Overview.map((study,index) => (
        <div key={study.id} className={`flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 ${index % 2 ===0 ? "lg:flex-row-reverse" : "" }`}>
            <div className='w-full lg:w-1/3 p-4'> 
                <img src = {study.workImg}
                className='w-full h-full object-cover rounded-lg shadow-lg'/>
            </div>
            <div className='w-full lg:w-1/2 p-4'>
                <div className='flex items-center mb-4'> 
                    <span className='text-3xl font-bold text-yellow-500 mr-2'>{`0${index + 1}`}</span>
                    <h3 className='text-2xl font-semibold'>{study.title}</h3>
                </div>
                <p className='text-gray-600 mb-4'>{study.description}</p>
                {/* <a>
                <button className='border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white'>Details</button>
                </a> */}
                {study.details && (
                <a href={study.details} target="_blank" rel="noopener noreferrer">
                <button className='border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-white'>
                 Details
                </button>
                </a>
                )}
            </div>
        </div>
      ))}
    </div>
  )
}

export default Work
