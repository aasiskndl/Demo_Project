import React from 'react'
import { FaLightbulb, FaDesktop, FaBriefcase, FaUserTie } from 'react-icons/fa'

const contactDetails = [
  {
    icon: <FaLightbulb className="text-green-500 text-3xl"/>,
    title: "New Business",
    phone: "980000000",
    email: "info@matrikatec.com.np",
  },
  {
    icon: <FaDesktop  className="text-yellow-500 text-3xl" />,
    title: "Project Consultation",
    phone: "98000000",
    email: "info@matrikatec.com.np"
  },
  {
    icon: <FaBriefcase  className="text-purple-500 text-3xl" />,
    title: "Technical Spport",
    phone: "9800000",
    email: "info@matrikatec.com.np",
  },
  {
    icon: <FaUserTie className="text-rose-400 text-3xl"/>,
    title: "Join Our Team",
    phone: "98000000",
    email: "info@matrikatec.com.np",
  },
];


const SecondaryFooter = () => {
  return (
    <section
      className='px-4 md:px-10 lg:px-20 py-16 rounded-t-xl border-green-200 border-b-2 text-center text-gray-300 bg-slate-800'
      // style={{ background: 'linear-gradient(to bottom, #cffafe, #1A4849)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center space-y-2'
          >
            {item.icon}
            <h3 className='font-bold text-lg'>{item.title}</h3>
            <p className='text-sm'>{item.phone}</p>
            <p className='text-sm'>{item.email}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SecondaryFooter
