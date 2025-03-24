import React from 'react'
import { MdAssignment } from 'react-icons/md';
import { FaProjectDiagram, FaCode } from 'react-icons/fa';
import { MdBugReport } from 'react-icons/md';

const DevelopmentStrategy = () => {
  const data = [
    {
      icon: <MdAssignment className='text-green-500 text-2xl' />,
      title: "Requirement Specification",
      desc: "We engage with stakeholders to gather and document their key needs. This helps define a clear vision and align expectations before moving forward.",
    },
    {
      icon: <FaProjectDiagram className="text-yellow-500 text-2xl" />,
      title: "System Design & Architecture Planning",
      desc: "We plan the system’s structure, create data models, and define technical components to ensure scalability and smooth integration.",
    },
    {
      icon: <FaCode className="text-purple-500 text-2xl" />,
      title: "Coding & Implementation",
      desc: "Our developers convert the designs into working code, building features step-by-step with clean structure and modular practices.",
    },
    {
      icon: <MdBugReport className="text-red-600 text-2xl" />,
      title: "Testing & Deployment",
      desc: "We test all parts of the system to ensure quality, then deploy the application for users in a secure and stable environment.",
    },
  ];

  return (
    <div className='bg-white py-12 px-4 sm:px-6 lg:px-20'>
      <h2 className='text-4xl font-bold text-center text-slate-700 mb-10'>Our Development Strategy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div 
            key={index}
            className='bg-white shadow rounded-lg p-5 text-center transition duration-300 ease-in-out hover:shadow-md'
          >
            <div className="flex justify-center mb-3">
              <div className="bg-gray-100 rounded-full p-3">
                {item.icon}
              </div>
            </div>
            <h3 className='text-md font-semibold text-slate-700 mb-2'>{item.title}</h3>
            <p className='text-sm text-slate-600 leading-relaxed'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DevelopmentStrategy
