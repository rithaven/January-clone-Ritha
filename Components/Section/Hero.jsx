import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#00beff] max-w-6xl m-auto h-80 '>
      <div className='flex max-w-5xl gap-4 m-auto justify-etween flex-cols-2'>
        <div className='mt-28 '>

          <h2 className='mb-4 text-3xl font-bold '>Students</h2>
           <p className='text-lg'> Important news, links, documents, and tips for students of the University of Stuttgart:
            This page offers information on your studies.</p>

        </div>
        <div className=''>
          <div className='bg-[#333333] rounded-full w-72 h-72   hover:bg-yellow-50 hover:text-black'>
            <div className='grid ml-12 mt-14'>
              <h3 className='mt-32 font-bold text-white mb-14 text-md hover:text-black '>INFORMATION FRO <br /> PROSPECTIVE STUDENTS</h3>
              <img className='ml-28' src='../../chevron-d.svg' />
            </div>

          </div>

        </div>

      </div>
    </div>

  )
}

export default Hero