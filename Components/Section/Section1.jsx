import React from 'react';

import Card from '../Section/Card';

const Section1 = () => {
  return (
    <div className='max-w-6xl p-4 m-auto bg-white pb-28'>
      <div className="bg-[#eeeeee] max-w-2xl m-auto grid mt-8  py-2 px-8 mb-6">
        <h3>Begriff</h3>
        <input
          className="p-4 mb-4 bg-white"
          type="text"
          placeholder="Suchen Sie nach Begriffen aus dem Uni-Glossar"
        />
        <button className="bg-[#004191] text-white w-32 p-2 text-xs font-bold">
          BEGRIFF SUCHEN
        </button>
      </div>
      <div className='grid max-w-5xl grid-cols-3 m-auto sm:grid-cols-1'>

        {
          [
            {
              image: 'https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_118.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335',
              title: 'Digital services',
              tags: [
                {
                  title: 'CMPUS  campus management and lectures',
                  link: 'cmpus'
                },
                { title: 'How to CMPUS', link: 'how' },
                { title: 'ILIAS', link: 'ilias' },
                {
                  title: 'University library',
                  link: 'university'
                },
                { title: 'Email', link: 'email' },
                {
                  title: 'Further digital services',
                  link: 'further'
                }
              ]
            },
            {
              image: 'https://www.student.uni-stuttgart.de/img/easydb-IMG_0423.jpg?__scale=w:370,h:370,cx:0,cy:250,cw:1500,ch:1500',
              title: 'Digital services',
              tags: [
                {
                  title: 'CMPUS  campus management and lectures',
                  link: 'cmpus'
                },
                { title: 'How to CMPUS', link: 'how' },
                { title: 'ILIAS', link: 'ilias' },
                {
                  title: 'University library',
                  link: 'university'
                },
                { title: 'Email', link: 'email' },
                {
                  title: 'Further digital services',
                  link: 'further'
                }
              ]
            },
            {
              image: 'https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_113.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335',
              title: 'Digital services',
              tags: [
                {
                  title: 'CMPUS  campus management and lectures',
                  link: 'cmpus'
                },
                { title: 'How to CMPUS', link: 'how' },
                { title: 'ILIAS', link: 'ilias' },
                {
                  title: 'University library',
                  link: 'university'
                },
                { title: 'Email', link: 'email' },
                {
                  title: 'Further digital services',
                  link: 'further'
                }
              ]
            },
          ].map((item, index) => <Card key={index} image={item.image} title={item.title} tags={item.tags} />)
        }
      </div>
      <button className="bg-[#004191] py-3 px-4 text-white font-bold mx-96 mt-10 text-xs">
        STUDY PROGRAMS'S WEBPAGES FOR STUDENTS
      </button>
    </div>

  )
}

export default Section1