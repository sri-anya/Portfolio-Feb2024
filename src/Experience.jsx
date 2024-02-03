import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const Experience = () => {
  const navigate = useNavigate()
  return (

    <div className='bg-[#141414] h-screen w-full'>
      <NavBar />
      <div className=' text-white flex flex-col items-center'>
        <div className='grid grid-cols-3 m-20'>
          <div className="left col-span-2">Left</div>
          <div className="right col-span-1 space-y-5">
            <h1>Where I've Worked</h1>
            <div className="card w-[300px] flex gap-5 border border-solid rounded-lg bg-[#212121] border-red-600">
              <div className="time">2014-2016</div>
              <div className='flex flex-col gap-2'>
                <div className="position">Software Engineer</div>
                <div className="company">Accenture</div>
                <p className="w-2/3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum in consequuntur dolor.</p>
              </div>

            </div>

            <div className="card w-auto flex gap-5 border border-solid border-red-600">
              <div className="time">2014-2016</div>
              <div className='flex flex-col gap-2'>
                <div className="position">Software Engineer</div>
                <div className="company">Accenture</div>
                <p className="w-2/3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum in consequuntur dolor.</p>
              </div>

            </div>
            <div className="card w-auto flex gap-5 border border-solid border-red-600">
              <div className="time">2014-2016</div>
              <div className='flex flex-col gap-2'>
                <div className="position">Software Engineer</div>
                <div className="company">Accenture</div>
                <p className="w-2/3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum in consequuntur dolor.</p>
              </div>

            </div>
          </div>
        </div>

        <div className='flex gap-6 pt-20 absolute bottom-10 justify-center '>
          <span className='bg-[#FBA92C] separator h-1 w-96'></span>
          <span className="text-[#FBA92C] material-symbols-outlined cursor-pointer animate-bounce" onClick={() => {

            navigate('/blogs');

          }}>
            expand_more
          </span>
          <span className='bg-[#FBA92C] h-1 w-96'></span>
        </div>
      </div>
    </div>

  )
}

export default Experience
