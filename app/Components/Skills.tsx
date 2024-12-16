import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-22'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <div className='grid grid-cols-2 text-[#F0F0F0] text-2xl sm:text-4xl m-0 p-10 text-left'>
                    <div className='space-y-3 font-bold p-30px m-0'>
                            <h2 data-aos="zoom-in-left">TypeScript</h2>
                            <h2 data-aos="zoom-in-left">React.js</h2>
                            <h2 data-aos="zoom-in-left">Next.js</h2>
                            <h2 data-aos="zoom-in-left">Node.js</h2>
                            <h2 data-aos="zoom-in-left">Html</h2>
                    </div>
                    <div className='space-y-3 font-bold p-30px m-0'>
                            <h2 data-aos="zoom-in-left">Tailwind CSS</h2>
                            <h2 data-aos="zoom-in-left">CSS</h2>
                            <h2 data-aos="zoom-in-left">Ms Office</h2>
                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Skills;