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
                        <div>
                            <div className='w-20 h-20 text-center border rounded-full'>
                               <img className='h-10 mt-4 ml-4 mr-4' src="../../facebook.svg" alt="" />
                            </div>
                        </div>
                        <p>Facebook</p>
                    </div>
                    <div className='grid text-white'>
                        <div>
                            <div className='w-20 h-20 text-center border rounded-full'>
                            <img className='h-10 mt-4 ml-4 mr-2' src="../../instagram.svg" alt="" />
                            </div>
                        </div>
                        <p>Instagram</p>
                    </div>
                    <div className='grid text-white'>
                        <div>
                            <div className='w-20 h-20 text-center border rounded-full'>
                            <img src="../../twitter1.svg" alt="" />
                            </div>
                        </div>
                        <p>Twitter</p>
                    </div>
                    <div className='grid text-white'>
                        <div>
                            <div className='w-20 h-20 text-center border rounded-full'>
                            <img className='h-12 mt-4 ml-4 mr-0' src="../../mastodon.svg" alt="" />
                            </div>
                        </div>
                        <p>Mastodon</p>
                    </div>
                    <div className='grid text-white'>
                        <div>
                            <div className='w-20 h-20 text-center border rounded-full'>
                            <img className='h-10 mt-4 ml-4 mr-0' src="../../youtube.svg" alt="" />
                            </div>
                        </div>
                        <p>YouTube</p>
                    </div>
                    <div className='grid text-white'>
                        <div>
                            <div className='w-20 h-20 text-center border rounded-full'>
                            <img className='h-8 mt-6 ml-6 mr-1' src="../../linkedin.svg" alt="" />
                            </div>
                        </div>
                        <p>LinkedIn</p>
                    </div>
                    <div className='grid text-white'>
                        <div>
                            <div className='w-20 h-20 text-center border rounded-full'>
                                <h2 className='mt-6 mb-1 text-2xl'> UƧUS</h2>
                            </div>
                        </div>
                        <p>USUS-Blog</p>
                    </div>
                </div>

            </div>

            <div className='grid max-w-5xl grid-cols-4 p-10 m-auto text-white sm:grid-cols-1'>
                <div className='text-white'>
                    {
                        [
                            "Audience"
                        ].map((e, index) => {
                            return (
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
                        ].map((e, index) => {
                            return (
                                <p className='underline' key={index}>{e}</p>
                            )
                        })
                    }
                </div>
                <div className='text-white'>

                    {
                        [
                            "Formalities"
                        ].map((e, index) => {
                            return (
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
                        ].map((e, index) => {
                            return (
                                <p className='underline' key={index}>{e}</p>
                            )
                        })
                    }

                </div>
                <div className='text-white'>

                    {
                        [
                            "Services"
                        ].map((e, index) => {
                            return (
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
                        ].map((e, index) => {
                            return (
                                <p className='underline' key={index}>{e}</p>
                            )
                        })
                    }


                </div>
                <div className='text-white'>

                    {
                        [
                            "Organization"
                        ].map((e, index) => {
                            return (
                                <h2 className='mb-4 text-3xl' key={index}>{e}</h2>
                            )
                        })
                    }
                    {
                        [
                            "Faculties and Institutes",
                            "Facilities",
                            "Central Administration",

                        ].map((e, index) => {
                            return (
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