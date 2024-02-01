import React from 'react'
import "./Projects.css"
import NavBar from './NavBar'

const Projects = () => {
  return (
    <div className='bg-[#141414] h-screen w-full '>
    <NavBar/>
    <div className='w-full   text-[#141414] grid grid-cols-3 gap-10 p-10'>
      <div className="group relative flex flex-col items-center justify-center border-[4px] border-[#565656] rounded-md ">
        <div className="cover cursor-pointer  "><img className='overflow-hidden' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
        <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={()=>{
          alert("let's view code")
        }}>View Code</div>
        </div>
      </div>
      <div className="group relative flex flex-col items-center justify-center border-[4px] border-[#565656] rounded-md">
        <div className="cover cursor-pointer  rounded-s-sm"><img className='overflow-auto' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
        <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={()=>{
          alert("let's view code")
        }}>View Code</div>
        </div>
      </div>
      <div className="group relative flex flex-col items-center justify-center border-[4px] border-[#565656] rounded-md">
        <div className="cover cursor-pointer  rounded-s-sm"><img className='overflow-auto' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
        <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={()=>{
          alert("let's view code")
        }}>View Code</div>
        </div>
      </div>
      <div className="group relative flex flex-col items-center justify-center border-[4px] border-[#565656] rounded-md">
        <div className="cover cursor-pointer  rounded-s-sm"><img className='overflow-auto' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
        <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={()=>{
          alert("let's view code")
        }}>View Code</div>
        </div>
      </div>
      <div className="group relative flex flex-col items-center justify-center border-[4px] border-[#565656] rounded-md">
        <div className="cover cursor-pointer  rounded-s-sm"><img className='overflow-auto' src="src\assets\pexels-pixabay-270404.jpg" alt="project image" />
        <div className="details cursor-pointer bg-[#FBA92C]  w-full h-full font-black text-3xl py-2
        absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-center" onClick={()=>{
          alert("let's view code")
        }}>View Code</div>
        </div>
      </div>

  
    </div>
    </div>
    
  )
}

export default Projects
