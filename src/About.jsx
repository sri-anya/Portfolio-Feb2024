import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#141414] h-screen w-full'>
      <NavBar />
      <div className=' text-white flex flex-col items-center '>
        I'm a About Page
        <div className='flex gap-6 pt-20  absolute bottom-10 justify-center '>
          <span className='bg-[#FBA92C] separator h-1 w-96'></span>
          {/* <img width="20" src="src\assets\developer_mode_tv_FILL0_wght600_GRAD0_opsz24 1.png" alt="" /> */}
          <span className="text-[#FBA92C] material-symbols-outlined cursor-pointer animate-bounce" onClick={() => {

            navigate('/experience');

          }}>
            expand_more
          </span>
          <span className='bg-[#FBA92C] h-1 w-96'></span>
        </div>
      </div>


    </div>

  )
}

export default About
