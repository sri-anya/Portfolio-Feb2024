import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()
  const projects = [
    {
      imageSrc: "/assets/portfolioProject.png",
      demoLink: "https://peaceful-piroshki-0b71e3.netlify.app/",
      codeLink: "https://github.com/sri-anya/Portfolio-Feb2024",
      technologies: ["React", "Vite", "Tailwind", "HTML", "CSS", "JavaScript"],
    },

    // Add more projects as needed
  ];

  return (
    <div className='bg-[#141414] w-full h-auto max-h-full overflow-y-scroll no-scrollbar'>
      <NavBar />
      <h1 className='m-5 text-3xl text-white text-center'>Key Projects</h1>
      <div className='text-[#141414] justify-center flex flex-wrap gap-5 p-5 md:p-10 relative'>

        {projects.map((project, index) => (
          <div key={index} className="group relative flex flex-col items-center justify-center border-[4px] h-auto w-full md:w-[45%] lg:w-[30%] border-[#565656] rounded-md m-5 ">
            <div className="cover cursor-pointer relative overflow-hidden">
              <img className='overflow-auto object-fill' src={project.imageSrc} alt="project image" />
              <div className="details cursor-pointer bg-[#FBA92C] w-full h-full font-black text-xl py-2 absolute bottom-0 opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80 group-hover:bottom-0 flex justify-center items-end">
                <div className="demo mx-10 hover:text-2xl"><a href={project.demoLink} target="#">View demo</a></div>
                <div className="code mx-10 hover:text-2xl"><a href={project.codeLink} target="#">View code</a></div>
              </div>
              <div className="flex flex-wrap gap-3 badge absolute top-0 right-0 m-2 p-2 text-white opacity-0 transition-all duration-500 ease-in-out invisible group-hover:visible group-hover:opacity-80">
                {project.technologies.map((tech, techIndex) => (
                  <p key={techIndex} className='border-[#141414] bg-gray-50 border-[2px] px-2 rounded-md text-[#141414] font-semibold'>{tech}</p>
                ))}
              </div>
            </div>
          </div>
        ))}










      </div>
      <div className='flex flex-col items-center gap-6 pt-20 sticky bottom-10 justify-center md:flex-row'>
        <span className='bg-[#FBA92C] separator h-1 w-96 md:w-96'></span>
        <span className='text-[#FBA92C] material-symbols-outlined cursor-pointer animate-bounce' onClick={() => navigate('/contact')}>
          expand_more
        </span>
        <span className='bg-[#FBA92C] h-1 w-96 md:w-96'></span>
      </div>
    </div>

  )
}

export default Projects
