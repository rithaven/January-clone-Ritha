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

            <div className='grid max-w-5xl grid-cols-4 p-10 m-auto text-white'>
                <div className='grid gap-2'>
                    <h2 className='text-3xl '>Audience</h2>
                    <p className='underline'>Students</p>
                    <p className='underline'>Employees</p>
                    <p className='underline'>Alumni and supporters</p>
                    <p className='underline'>Industry</p>
                    
                    
                </div>
                <div className='grid gap-2'>
                    <h2 className='text-3xl'>Formalities</h2>
                    <p className='underline'>Legal notice</p>
                    <p className='underline'>Privacy notice</p>
                    <p className='underline'>Accessibility</p>
                    <p className='underline'>Certificates</p>
                    
                    
                </div>
                <div className='grid gap-2'>
                    <h2 className='mb-2 text-3xl'>Services</h2>
                    <p className='underline'>Contact</p>
                    <p className='underline'>Press</p>
                    <p className='underline'>Jobs</p>
                    <p className='underline'>Apply for Doctorate or</p>
                    <p className='underline'>Postdoc</p>
                    <p className='underline'>Un-shop</p>
                    
                    
                </div>
                <div className='grid'>
                    <h2 className='text-3xl '>Organization</h2>
                    <p className='underline'>Faculties and Institutes</p>
                    <p className='underline'>Facilities</p>
                    <p className='underline'>Central Administration</p>
                    
                    
                    
                </div>
                
            </div>

        </div>
    )
}

export default Footer