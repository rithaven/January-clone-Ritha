import React from 'react'

function Info() {
    return (
        <div className='max-w-6xl pt-8 m-auto bg-white'>

            <div className='bg-[#004595] pb-10'>
                <div className='max-w-4xl m-auto text-white'>
                    <h2 className='py-8 text-2xl font-bold'>Information for students</h2>
                </div>
                <div className='max-w-4xl m-auto'>
                    <ul className='grid grid-cols-2 gap-4 text-white'>
                        
                    {["All study programs",
                             "Getting started with your studies",
                             "Organizing your studies",
                             "Exam organization",
                             "Digital Services",
                             "Financial aid and scholarships",
                             "International students in Stuttgart",
                             "Study abroad", "Counseling for students",
                             "Internships, mentoring and getting on ",
                             "Additional programs, support, further",
                             "Joining in student activities",
                             "University A-Z",
                             "Point of contact for questions about "
                    ].map((e, index) => {
                            return <li className='flex gap-2 text-2xl font-semibold flex-cols-2' key={index}>
                                <button className='p-10 border rounded-full hover:bg-white'>
                                    <img src="../../chevron-d.svg" alt="" />
                                </button>
                                    {e}
                                </li>;
                                
                    })
                        }

                    </ul>
                </div>
            </div>
            <div className='p-8'>
                <div className='max-w-4xl m-auto'>
                <h2 className='text-2xl font-bold'>Contact</h2>
                <div className='grid grid-cols-3 gap-6'>
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