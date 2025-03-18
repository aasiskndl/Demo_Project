import React from 'react'
import image from '/images/mobile.jpg'

{/*Constants on the webpage */ }
const features = [
  {
    title: "Hello Hi",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero saepe soluta at? Libero eaque tenetur iste enim autem! Omnis, sint totam. Nulla exercitationem veniam vero saepe optio cum illo!"
  },
  {
    title: "Hello Hi",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero saepe soluta at? Libero eaque tenetur iste enim autem! Omnis, sint totam. Nulla exercitationem veniam vero saepe optio cum illo!"
  },
  {
    title: "Hello Hi",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero saepe soluta at? Libero eaque tenetur iste enim autem! Omnis, sint totam. Nulla exercitationem veniam vero saepe optio cum illo!"
  },
  {
    title: "Hello Hi",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero saepe soluta at? Libero eaque tenetur iste enim autem! Omnis, sint totam. Nulla exercitationem veniam vero saepe optio cum illo!"
  },
  {
    title: "Hello Hi",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero saepe soluta at? Libero eaque tenetur iste enim autem! Omnis, sint totam. Nulla exercitationem veniam vero saepe optio cum illo!"
  },
  {
    title: "Hello Hi",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero saepe soluta at? Libero eaque tenetur iste enim autem! Omnis, sint totam. Nulla exercitationem veniam vero saepe optio cum illo!"
  },
];

const MtechBillingHero = () => {
  return (
    <div className='bg-secondary '>
      <section className='text-center px-6 py-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-slate-700 leading-tight'>
          Lorem Ipsum Dorem <br /> Hiojd Kiewf Bfeif
        </h1>
        <p className='mt-6 max-w-7xl mx-auto text-lg text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorum magnam quas voluptas iure tenetur. Nostrum magnam aspernatur quis nulla numquam expedita consequatur saepe, dignissimos molestias recusandae, totam repudiandae rerum.</p>
        <div className="mt-8 flex justify-center gap-4">
          <button className='bg-gray-700 hover:bg-yellow-500 py-2 px-6 rounded-md shadow text-white font-semibold transition-colors duration-300 transform hover:scale-[1.02]'>
            Get A Free Demo
          </button>
          <button className='bg-gray-700 hover:bg-yellow-500 text-white py-2 px-6 rounded-md shadow font-semibold transition-colors duration-300 transform hover:scale-[1.02]'>
            Demo Video
          </button>

        </div>
      </section>

      {/* Image section */}
      <section className='flex justify-center px-4 sm:px-8 md:px-12 py-10'>
  <div className="relative w-full max-w-7xl">
    <img
      src={image}
      alt="Image"
      className='w-full rounded-lg shadow-xl object-cover'
    />
  </div>
</section>


      {/*Features Section */}
      <section className='bg-secondary py-16 px-6 flex flex-col'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-slate-700'>Our Features </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) =>(
            <div
              key = {index}
              className='bg-answer p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300'
            >
              <h3 className='text-xl mb-4  text-slate-700'>{feature.title}</h3>
              <p className='text-slate-600 text-sm leading-relaxed'>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default MtechBillingHero
