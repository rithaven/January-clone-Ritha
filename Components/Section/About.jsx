import React from 'react'

const About = () => {
  return (
    <div className='max-w-6xl p-4 m-auto bg-white pb-28'>
        <div className='bg-[#eeeeee] max-w-2xl m-auto grid mt-8  py-2 px-8 mb-6'>
            <h3>Begriff</h3>
            <input className='p-4 mb-4 bg-white' type="text" placeholder='Suchen Sie nach Begriffen aus dem Uni-Glossar' />
            <button className='bg-[#004191] text-white w-32 p-2 text-xs font-bold'>
              BEGRIFF SUCHEN
            </button>
        </div>
        <div className='grid max-w-4xl grid-cols-3 gap-8 m-auto'>
          
          {
            ["https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_118.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335","https://www.student.uni-stuttgart.de/img/easydb-IMG_0423.jpg?__scale=w:370,h:370,cx:0,cy:250,cw:1500,ch:1500","https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_113.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335",].map((e)=>{
              return(
                <img className='' src={e} alt="" />
              )
            })
            
          }
        
          {
            ["Digital Services","Organizing your students","University Life",].map((e)=>{
              return(
                <h3 className='font-bold'>{e}</h3>
              )
            })
          }
           {
            ["C@MPUS - campus management and lectures","Getting started","stuvus - the Student Union of the University of Stuttgart [de]",].map((e)=>{
              return(
                <p className='flex font-bold text-blue-900'><img className='h-6' src='../../chevron-right.svg'/>{e}</p>
              )
            })
            
          }
          {
            ["How to C@MPUS","Getting started","Studierendenwerk Stuttgart (Student Services)",].map((e)=>{
              return(
                <p className='flex font-bold text-blue-900'><img className='h-6' src='../../chevron-right.svg'/>{e}</p>
              )
            })
            
          }
          {
            ["How to C@MPUS","Getting started","Studierendenwerk Stuttgart (Student Services)",].map((e)=>{
              return(
                <p className='flex font-bold text-blue-900'><img className='h-6' src='../../chevron-right.svg'/>{e}</p>
              )
            })
            
          }
          {
            ["How to C@MPUS","Getting started","Studierendenwerk Stuttgart (Student Services)",].map((e)=>{
              return(
                <p className='flex font-bold text-blue-900'><img className='h-6' src='../../chevron-right.svg'/>{e}</p>
              )
            })
            
          }
          {
            ["How to C@MPUS","Getting started","Studierendenwerk Stuttgart (Student Services)",].map((e)=>{
              return(
                <p className='flex font-bold text-blue-900'><img className='h-6' src='../../chevron-right.svg'/>{e}</p>
              )
            })
            
          }
          
          
          
        </div>
         <button className='bg-[#004191] py-3 px-4 text-white font-bold mx-96 mt-10 text-xs'>STUDY PROGRAMS'S WEBPAGES FOR STUDENTS</button>
  </div>
  )
}

export default About