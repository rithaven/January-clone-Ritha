import React from 'react'

function Info() {
    return (
        <div className='max-w-6xl pt-8 m-auto bg-white'>

            <div className='bg-[#004595] pb-10'>
                <div className='max-w-5xl m-auto text-white'>
                    <h2 className='py-8 text-2xl font-bold'>Information for students</h2>
                </div>
                <div className='max-w-4xl m-auto'>


                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-1'>

                        <div className='mb-4 text-white'>
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "All study programs",
                                        paragraph: "On the webpages of your degree program you will find information on the study program structure"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-6'>
                                            <div>
                                                <div className='w-32 h-32 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>

                                            <div className='gap-2'>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "Organizing your studies",
                                        paragraph: "Assembled here for your ready reference are pointers on how to keep track of it all – studies"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-6'>
                                            <div>
                                                <div className='w-32 h-32 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>

                                            <div className='gap-2'>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "Digital Services",
                                        paragraph: "From C@MPUS to E-Mail, VPN and WLAN: Varied digital offerings help you organize your student life."
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-6'>
                                            <div>
                                                <div className='w-32 h-32 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>

                                            <div className='gap-2'>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "International students in Stuttgart",
                                        paragraph: "Through us, you will receive student support, practical advice for your daily life and information"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-6'>
                                            <div>
                                                <div className='w-32 h-32 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>

                                            <div className='gap-2'>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "Counseling for students",
                                        paragraph: "How do I organize my studies? Is my study program right for me? Where can I turn to if I have"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-6'>
                                            <div>
                                                <div className='w-32 h-32 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>

                                            <div className='gap-2'>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "Additional programs, support, further",
                                        paragraph: "Tips for efficient studies, specific help concerning your study program, language courses"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-6'>
                                            <div>
                                                <div className='w-32 h-32 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>

                                            <div className='gap-2'>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "University A-Z",
                                        paragraph: "This list contains all study-related terms, counseling and information services in alphabetic order."
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-6'>
                                            <div>
                                                <div className='w-32 h-32 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>
                                            <div className='gap-2'>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>

                        <div className='mb-4 text-white'>
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "Getting started with your studies",
                                        paragraph: "Enrollment formalities, orientation events and dates: you will be faced with many new impressions"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-6'>
                                            <div> 
                                                 <div className='w-32 h-32 border rounded-full '>
                                                <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                            </div>
                                            </div>
                                           
                                            <div className='gap-2 '>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "Exam organization",
                                        paragraph: "Get basic information here about exams - registration, regulations, illness notices. But the"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-6'>
                                            <div>
                                                    <div className='w-32 h-32 border rounded-full '>
                                                <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                            </div>
                                            </div>
                                           
                                            <div className='gap-2 '>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "Financial aid and scholarships",
                                        paragraph: "Coming up short in financing your studies? Look here for information on financial aid options such"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-6'>
                                            <div>
                                                <div className='w-32 h-32 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>

                                            <div className='gap-2 '>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "Study abroad",
                                        paragraph: "You are interested in spending time abroad during your studies? Then you’ve come to the right place!"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2'>
                                            <div>
                                                <div className='w-32 h-32 mb-6 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>

                                            <div className='gap-2 '>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "Internships, mentoring and getting on",
                                        paragraph: "Studying for a degree opens up a wide range of career opportunities to you. The University of"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-4'>

                                            <div>
                                                <div className='w-32 h-32 mb-6 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>

                                            <div className='gap-2 '>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                            {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "Joining in student activities",
                                        paragraph: "There is more to the student life than classes and exams. The Uni has many groups and initiatives in"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2 mb-6'>
                                            <div>
                                                <div className='w-32 h-32 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>

                                            <div className='gap-2'>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                             {
                                [
                                    {
                                        image: "../../chevron-d.svg",
                                        title: "Point of contact for questions about",
                                        paragraph: " Do you have questions about your application, your studies, or your exams? Do you need to submit a"
                                    }
                                ].map((e, index) => {
                                    return (
                                        <div className='flex gap-2'>
                                            <div>
                                                <div className='w-32 h-32 border rounded-full '>
                                                    <img className='mt-14 ml-14' src={e.image} alt="" key={index} />
                                                </div>
                                            </div>

                                            <div className='gap-2 '>
                                                <h2 className='mb-4 text-3xl' key={index}>{e.title}</h2>
                                                <p className='text-md'>{e.paragraph}</p>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>


                    </div>

                </div>
            </div>
            <div className='p-8'>
                <div className='max-w-4xl m-auto'>
                    <h2 className='mb-4 text-2xl font-bold'>Contact</h2>
                    <div className='grid grid-cols-3 gap-6 sm:grid-cols-1'>
                        <div className='p-5 border-2 border-current'>
                            <img className='p-4 rounded-full' src="https://www.beschaeftigte.uni-stuttgart.de/img-beschaeftigte/iz_mitarbeiter/Dezernat-Internationales-IZ.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:2000,ch:2000" alt="" />
                            <h2 className='mt-8 mb-4 text-2xl font-semibold'>Dezernat Internationales</h2>
                            <div className='flex gap-1'>
                                <img className='h-6 mt-1' src="../../profile.svg" alt="" />
                                <p className='text-gray-500 underline'>Profile page</p>
                            </div>
                            <div className='flex gap-1'>
                                <img className='h-6 mt-1' src="../../phone.svg" alt="" />
                                <p className='text-gray-500 underline'>+49 711 685 68566</p>
                            </div>
                            <div className='flex gap-1'>
                                <img className='h-6 mt-1' src="../../mail.svg" alt="" />
                                <p className='text-gray-500 underline'>Write e-mail</p>
                            </div>
                            <div className='flex gap-1'>
                                <img className='h-6 mt-1' src="../../info.svg" alt="" />
                                <p className='text-sm'> <span className='underline'> Office hours (online)</span> Office hours (online):Mon & Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon</p>
                            </div>
                        </div>
                        <div className='p-5 border-2 border-current'>
                            <img className='p-4 rounded-full' src="https://www.uni-stuttgart.de/studium/beratung/img-fachstudienberater/zsb_employee.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:620,ch:620" alt="" />
                            <h2 className='mt-8 mb-4 text-2xl font-semibold'>Student Counseling Center</h2>
                            <div className='flex gap-1'>
                                <img className='h-6 mt-1' src="../../profile.svg" alt="" />
                                <p className='text-gray-500 underline'>Profile page</p>
                            </div>
                            <div className='flex gap-1'>
                                <img className='h-6 mt-1' src="../../phone.svg" alt="" />
                                <p className='text-gray-500 underline'>	+49 711 685 82133</p>
                            </div>
                        </div>
                        <div className='px-2 py-2 border-2 border-current'>
                            <button class="w-32 h-32 rounded-full  bg-[#e8e8e8] m-10">
                                <img className='h-8 ml-10' src="../../map-marker.svg" alt="" />
                            </button>
                            <h2 className='px-4 mt-8 text-2xl font-semibold'>Student Service and Examination Office</h2>
                            <p className='px-4 text-gray-400'>Pfaffenwaldring 5 c, 70569 Stuttgart, House of students</p>
                            <div className='flex gap-1 mt-5'>
                                <img className='h-6 mt-1' src="../../profile.svg" alt="" />
                                <p className='text-gray-500 underline '>	Further information</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info