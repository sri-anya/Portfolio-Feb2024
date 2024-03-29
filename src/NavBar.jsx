import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
 

  

  return (
    <div className={`sticky top-0 z-10 bg-[#9E9E9E] `}>
      <nav className={`bg-[#565656] dark:bg-white w-full font-bold text-lg flex flex-col md:flex-row items-center md:justify-between transition-colors duration-300 ease-in-out`}>

        <div className='flex items-center '>
          <Link to="/" className='bg-white mx-3 my-3 flex justify-center items-center px-5 cursor-pointer rounded-2xl hover:bg-[#FBA92C]'>
            <img src="assets/favicon-32x32.png" className={` invert hover:animate-spin rounded-full`} alt="logo" />
          </Link>
        </div>

        <ul className='flex flex-col md:flex-row gap-5 text-[#141414] '>
          <Link className='px-5 py-3 m-auto cursor-pointer hover:bg-[#6c6c6c]' to="/about">About</Link>
          <Link className='px-5 py-3 m-auto cursor-pointer hover:bg-[#6c6c6c]' to="/experience">Experience</Link>
          <Link className='px-5 py-3 m-auto cursor-pointer hover:bg-[#6c6c6c]' to="/blogs" >Blogs</Link>
          <Link className='px-5 py-3 m-auto cursor-pointer hover:bg-[#6c6c6c]' to="/projects" >Projects</Link>
          <Link className='px-5 py-3 m-auto cursor-pointer hover:bg-[#6c6c6c]' to="/contact">Contact</Link>
        </ul>

        {/* <div className="mode cursor-pointer hidden md:block" >
          <img className={`  invert px-5 py-3 ${darkMode ? 'dark:invert' : ''}`} src="src\assets\light_mode_FILL0_wght400_GRAD0_opsz24.svg" alt="mode" />
        </div>
         */}
        
      </nav >

  <div className={`bg-[#9E9E9E] separator h-1 w-full dark:bg-gray-700 `}></div>
      </div >
  );
};

export default NavBar;

