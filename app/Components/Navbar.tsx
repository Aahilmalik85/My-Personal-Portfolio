import React from 'react';

import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="font-extrabold text-orange-700 h-20 bg-#181A2F p-5">
    <div>
        <div className='flex justify-between items-center font-extrabold'>
        <div className="hidden lg:flex justify-center items-center">
          <div className="w-20 h-20 " 
               style={{
                 backgroundImage: "url('/logo.png')",
                 backgroundSize: "cover",
                 backgroundPosition: "left"
               }}
               >
          </div>
        </div>
            <ul className='gap-10 lg:gap-16  hidden md:flex m-7'>
                <li className='menuLink'><a href="#home">Home</a></li>
                <li className='menulink'><a href="#about">About</a></li>
                <li className='menuLink'><a href="#projects">Projects</a></li>
                <li className='menuLink'><a href="#skills">Skills</a></li>
                <li className='menuLink'><a href="#contact">Contact</a></li>
            </ul>
            
            <AiOutlineMenu size={30} />
        </div>
    </div>
    </nav>
  )
}

export default Navbar;