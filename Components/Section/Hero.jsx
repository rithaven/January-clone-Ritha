import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#00beff] max-w-6xl m-auto '>
        <div className='flex max-w-4xl gap-4 m-auto justify-etween flex-cols-2'>
            <div className='grid gap-1 mt-20 '>
                
                <p><span className='mt-20 text-3xl font-bold'>Students</span>  <br /><br />
                    Important news, links, documents, and tips for students of the University of Stuttgart:
                   This page offers information on your studies.</p>
                
            </div>
            <div className='bg-[#333333] grid rounded-full px-16 pt-16 mt-20 gap-16 justify-center hover:bg-yellow-50 hover:text-black'>
                <h3 className='text-xs font-bold text-white hover:text-black'>INFORMATION FRO <br /> PROSPECTIVE STUDENTS</h3>
                <img className='ml-8' src='../../chevron-d.svg'/>
            </div>

        </div>
    </div>
   
  )
}

export default Hero