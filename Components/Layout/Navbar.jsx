import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#004191] max-w-6xl m-auto py-1'>
        <div className='flex justify-end max-w-4xl gap-4 m-auto text-white'>
            <Link href="school" className='mt-1 text-sm'>University of Stuttgart</Link>
            <img className='h-6 mt-1' src='../../chevron-circle.svg' />
        </div>
    </div>
  )
}

export default Navbar