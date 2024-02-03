import React from 'react'

import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#141414] w-full h-auto  max-h-full overflow-y-scroll no-scrollbar'>
      <NavBar />
      <h1 className='m-5 text-3xl text-white text-center'>Projects</h1>
      <div className=' text-[#141414] flex  flex-wrap gap-10 p-10 relative  '>
      
        <div className="group relative flex flex-col items-center justify-center border-[4px] h-auto w-[30%] border-[#565656] rounded-md ">
          <div className="cover cursor-pointer  "><img className='overflow-auto' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
            <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={() => {
                alert("let's view code")
              }}>View Code</div>
          </div>
        </div>
        <div className="group relative flex flex-col items-center justify-center border-[4px] h-auto w-[30%] border-[#565656] rounded-md ">
          <div className="cover cursor-pointer  "><img className='overflow-auto' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
            <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={() => {
                alert("let's view code")
              }}>View Code</div>
          </div>
        </div>
        <div className="group relative flex flex-col items-center justify-center border-[4px] h-auto w-[30%] border-[#565656] rounded-md ">
          <div className="cover cursor-pointer  "><img className='overflow-auto' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
            <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={() => {
                alert("let's view code")
              }}>View Code</div>
          </div>
        </div>
        <div className="group relative flex flex-col items-center justify-center border-[4px] h-auto w-[30%] border-[#565656] rounded-md ">
          <div className="cover cursor-pointer  "><img className='overflow-auto' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
            <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={() => {
                alert("let's view code")
              }}>View Code</div>
          </div>
        </div>
        <div className="group relative flex flex-col items-center justify-center border-[4px] h-auto w-[30%] border-[#565656] rounded-md ">
          <div className="cover cursor-pointer  "><img className='overflow-auto' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
            <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={() => {
                alert("let's view code")
              }}>View Code</div>
          </div>
        </div>
        <div className="group relative flex flex-col items-center justify-center border-[4px] h-auto w-[30%] border-[#565656] rounded-md ">
          <div className="cover cursor-pointer  "><img className='overflow-auto' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
            <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={() => {
                alert("let's view code")
              }}>View Code</div>
          </div>
        </div>
        <div className="group relative flex flex-col items-center justify-center border-[4px] h-auto w-[30%] border-[#565656] rounded-md ">
          <div className="cover cursor-pointer  "><img className='overflow-auto' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
            <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={() => {
                alert("let's view code")
              }}>View Code</div>
          </div>
        </div>


        


      </div>
      <div className='flex gap-6 pt-20 sticky bottom-10 justify-center '>
          <span className='bg-[#FBA92C] separator h-1 w-96'></span>
          {/* <img width="20" src="src\assets\developer_mode_tv_FILL0_wght600_GRAD0_opsz24 1.png" alt="" /> */}
          <span className="text-[#FBA92C] material-symbols-outlined cursor-pointer animate-bounce" onClick={() => {

            navigate('/contact');

          }}>
            expand_more
          </span>
          <span className='bg-[#FBA92C] h-1 w-96'></span>
        </div>
    </div>

  )
}

export default Projects
