import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()
  const projects = [
    {
      imageSrc: "/assets/taskManager.png",
      demoLink: "https://task-manager-create.glitch.me/",
      codeLink: "https://github.com/sri-anya/TaskManagerUsingExpress",
      technologies: ["ExpressJS", "JavaScript", "Ejs", "Bootstrap", "Responsive", "Vite"],
    },
    {
      imageSrc: "/assets/portfolioProject.png",
      demoLink: "https://aasthasaxena.netlify.app/",
      codeLink: "https://github.com/sri-anya/Portfolio-Feb2024",
      technologies: ["React", "Vite", "Tailwind", "HTML", "CSS", "JavaScript", "Figma"],
    },
    {
      imageSrc: "https://raw.githubusercontent.com/sri-anya/SpotifyClone/main/assets/images/demoScreenshot.png",
      demoLink: "http://spotifybyaastha.freewebhostmost.com/",
      codeLink: "https://github.com/sri-anya/SpotifyClone",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
    },
    {
      imageSrc: "/assets/goalgrid.png",
      demoLink: "https://goalgrid-todolist.netlify.app/",
      codeLink: "https://github.com/sri-anya/todoList",
      technologies: ["React", "Vite", "Tailwind", "HTML", "CSS", "JavaScript","react-router-dom"],
    },
    {
      imageSrc: "/assets/shoppingListReact.png",
      demoLink: "https://basicshoppinglistreact.netlify.app/",
      codeLink: "https://github.com/sri-anya/ShoppingList",
      technologies: ["React", "Vite", "Tailwind", "HTML", "CSS", "JavaScript"],
    },
    {
      imageSrc: "https://github.com/sri-anya/NetflixHomePageClone/blob/main/assets/images/Screenshot%202024-01-10%20000309.png?raw=true",
      demoLink: "https://famous-griffin-8f3c3b.netlify.app/",
      codeLink: "https://github.com/sri-anya/NetflixHomePageClone",
      technologies: ["HTML", "CSS", " VS Code", "Responsive"],
    },
    {
      imageSrc: "/assets/twitterCLone.png",
      demoLink: "https://xclonebyaastha.netlify.app/",
      codeLink: "https://github.com/sri-anya/TwitterLandingPageClone",
      technologies: ["HTML", "CSS", " Tailwind", "Responsive"],
    },
    {
      imageSrc: "/assets/snakkz.png",
      demoLink: "https://www.figma.com/proto/5GizRgOskbO2ZfCko4jrxx/Wireframes_project1?page-id=109%3A4&node-id=111-9&viewport=241%2C48%2C0.66&scaling=scale-down&starting-point-node-id=110%3A5",
      codeLink: "https://www.aasthasaxena.com/snakkz",
      technologies: ["Figma", "Prototyping", "Wireframing", "User Research", "Responsive", "UX/UI"],
    },
    {
      imageSrc: "/assets/mLookUp.png",
      demoLink: "",
      codeLink: "https://www.aasthasaxena.com/mlookup",
      technologies: ["Adobe XD", "Prototyping", "Wireframing", "User Research", "Responsive", "UX/UI"],
    },
    {
      imageSrc: "/assets/donateToShape.png",
      demoLink: "https://www.figma.com/proto/5GizRgOskbO2ZfCko4jrxx/Wireframes_project1?page-id=109%3A4&node-id=111-9&viewport=241%2C48%2C0.66&scaling=scale-down&starting-point-node-id=110%3A5",
      codeLink: "https://www.aasthasaxena.com/donatetoshape",
      technologies: ["Figma", "Prototyping", "Wireframing", "User Research", "Responsive", "UX/UI"],
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
                {project.demoLink ? <div className="demo mx-10 hover:text-2xl"><a href={project.demoLink} target="#">View demo</a></div>:""}
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
