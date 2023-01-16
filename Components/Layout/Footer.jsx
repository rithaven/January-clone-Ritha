import React from 'react'

const Footer = () => {
    return (
        <div className='max-w-6xl m-auto bg-[#333333] p-8'>
            <div className='flex justify-between max-w-5xl p-10 m-auto leading-none flex-cols-2 '>
                <div className=''>
                    <img className='h-12' src="../../logoo.svg" alt="" />
                </div>
                <div className='flex gap-4'>
                    
                    <div className='grid text-white'>
                        <img className='h-10' src="../../facebook.png" alt="" />
                        <p>Facebook</p>
                    </div>
                    <div className='grid text-white'>
                        <img className='h-10' src="../../inst.png" alt="" />
                        <p>Instagram</p>
                    </div>
                    <div className='grid text-white'>
                        <img className='h-10' src="../twitter.png" alt="" />
                        <p>Twitter</p>
                    </div>
                    <div className='grid text-white'>
                       <img className='h-10' src="../../most.png" alt="" />
                        <p>Mastodon</p>
                    </div>
                    <div className='grid text-white'>
                        <img className='h-10' src="../../yout.png" alt="" />
                        <p>YouTube</p>
                    </div>
                    <div className='grid text-white'>
                        <img className='h-10' src="../../linkid.png" alt="" />
                        <p>LinkedIn</p>
                    </div>
                    <div className='grid text-white'>
                        <img className='h-10' src="../../usus.png" alt="" />
                        <p>USUS-Blog</p>
                    </div>
                </div>

            </div>

            <div className='grid max-w-5xl grid-cols-4 p-10 m-auto text-white sm:grid-cols-1'>
                <div className='text-white'>
                   {
                    [
                        "Audience"
                    ].map((e,index) =>{
                        return(
                            <h2 className='mb-4 text-3xl' key={index}>{e}</h2>
                        )
                    })
                   }
                    {
                    [
                        "Students",
                        "Employees",
                        "Alumni and supporters",
                        "Industry",
                    ].map((e,index) =>{
                        return(
                            <p className='underline' key={index}>{e}</p>
                        )
                    })
                   }
                </div>
                <div className='text-white'>

                {
                    [
                        "Formalities"
                    ].map((e,index) =>{
                        return(
                            <h2 className='mb-4 text-3xl' key={index}>{e}</h2>
                        )
                    })
                   }
                    {
                    [
                        "Legal notice",
                        "Privacy notic",
                        "Accessibility",
                        "Certificates",
                    ].map((e,index) =>{
                        return(
                            <p className='underline' key={index}>{e}</p>
                        )
                    })
                   }
                  
                </div>
                <div className='text-white'>

                {
                    [
                        "Services"
                    ].map((e,index) =>{
                        return(
                            <h2 className='mb-4 text-3xl' key={index}>{e}</h2>
                        )
                    })
                   }
                    {
                    [
                        "Contact",
                        "Press",
                        "Jobs",
                        "Apply for Doctorate or",
                        "Postdoc",
                        "Un-shop"
                    ].map((e,index) =>{
                        return(
                            <p className='underline' key={index}>{e}</p>
                        )
                    })
                   }
                    
                    
                </div>
                <div className='text-white'>

                    {
                    [
                        "Organization"
                    ].map((e,index) =>{
                        return(
                            <h2 className='mb-4 text-3xl' key={index}>{e}</h2>
                        )
                    })
                   }
                    {
                    [
                        "Faculties and Institutes",
                        "Facilities",
                        "Central Administration",
                       
                    ].map((e,index) =>{
                        return(
                            <p className='underline' key={index}>{e}</p>
                        )
                    })
                   }
                   
                    
                </div>
                
            </div>

        </div>
    )
}

export default Footer