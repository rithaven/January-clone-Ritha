import React from 'react'

function Header() {
  return (
    <div className='max-w-6xl p-5 m-auto bg-white '>
        <div className='flex justify-between max-w-5xl px-12 py-10 m-auto'>
            <div>
                <img className='h-11' src='../../logo.svg'/>
            </div>
            <div className='flex gap-4 flex-cols-2'>
                <div className='grid'>
                    <img className='h-8' src='../../language.svg'/>
                    <img className='h-4' src='../../chevron-down.svg'/>
                </div>
                <img className='h-8' src='../../search.svg'/>
                <img className='h-8' src='../../menu.svg'/>
               
            </div>
            
        </div>
    </div>
  )
}

export default Header