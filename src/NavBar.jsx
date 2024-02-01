import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='sticky top-0'>
      <nav className='bg-[#565656] w-full font-bold text-lg flex justify-between '>

        <ul className='flex gap-5 text-[#141414] '>
          <Link to="http://localhost:5173/" className='bg-white mx-3 my-3 flex justify-center items-center px-5 cursor-pointer '><img src="src\assets\favicon-32x32.png" className="invert" alt="logo" /></Link>
          <Link className='px-5 py-8 cursor-pointer' to="/about">About</Link>
          <Link className='px-5 py-8 cursor-pointer' to="/experience">Experience</Link>
          <Link className='px-5 py-8 cursor-pointer' to="/blogs" >Blogs</Link>
          <Link className='px-5 py-8 cursor-pointer' to="/projects" >Projects</Link>
          <Link className='px-5 py-8 cursor-pointer' to="/contact">Contact</Link>


        </ul>
        <div className="mode"><img className='invert px-5 py-10' src="src\assets\light_mode_FILL0_wght400_GRAD0_opsz24.svg" alt="mode" /></div>
      </nav>

      <div className='bg-[#9E9E9E] separator h-1 w-full'></div>
    </div>
  )
}

export default NavBar
