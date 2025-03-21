import React from 'react'
import image from '/images/mobile.jpg'

const MobileBanner = () => {
  return (
    <section
      className='px-4 md:px-10 lg:px-20 py-16 rounded-t-xl border-green-200 border-b-2'
      style={{ background: 'linear-gradient(to bottom, #cffafe, #1A4849)' }}
    >
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* image */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt='Mobile Image'
            className='w-full max-w-md mx-auto rounded-lg shadow-xl'
          />
        </div>

        {/* text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">Lorem Ipsum Dorem</h2>
          <p className='text-slate-700 mb-6 leading-relaxed'>
            Lorem ipsum dolor sit Eos explicabo dolorem hic, voluptas distinctio vitae, modi velit veritatis, esse exercitationem
            libero quia iste. Illum quidem rem perferendis amet!
          </p>
          <button className='bg-gray-700 text-white px-6 py-2 rounded hover:bg-yellow-500 transition duration-300 transform hover:scale-[1.02]'>
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}

export default MobileBanner
