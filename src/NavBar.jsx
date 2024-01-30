import React from 'react'


const NavBar = () => {
  return (
    <div>
      <nav className='bg-black  font-semibold flex justify-between'>
        <ul className='flex gap-5 text-white '>
            <li className='bg-white text-black mx-3 my-3 flex justify-center items-center px-5'><img src="src\assets\favicon-32x32.png" className="invert" alt="logo" /></li>
            <li className='px-5 py-10'>About</li>
            <li className='px-5 py-10'>Work</li>
            <li className='px-5 py-10'>Blogs</li>
            <li className='px-5 py-10'>Projects</li>
        </ul>
        <div className="mode"><img className='invert px-5 py-10' src="src\assets\light_mode_FILL0_wght400_GRAD0_opsz24.svg" alt="mode" /></div>
      </nav>
      <hr />
    </div>
  )
}

export default NavBar
