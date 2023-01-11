import React from 'react'

function Info() {
    return (
        <div className='max-w-6xl pt-8 m-auto bg-white'>

            <div className='bg-[#004595]'>
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
                                return <li className='flex gap-2 font-semibold flex-cols-2' key={index}>
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
        </div>
    )
}

export default Info