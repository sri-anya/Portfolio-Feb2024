import React from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate();
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Node.js",
    "Express",
    "Ejs",
    "BootStrap",
    "Tailwind",
    "MongoDB",
    "SQL"
    // Add more technologies as needed
  ];

  const tools = ["Git",
    "GitHub",
    "Figma",
    "Adobe XD",
    "Python Notebooks",
    "Vite",
    "Google Colab",
    "Wordpress"]

  return (
    <div className='bg-[#141414] max-h-full h-auto w-full overflow-y-scroll no-scrollbar'>
      <NavBar />
      <div className='text-white flex flex-col items-center'>
        <h1 className='m-5 text-3xl text-white text-center'>Experience</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 m-4 md:m-20'>
          <div className="left md:col-span-2">
            <h1 className='text-center font-extrabold text-[#FBA92C]'>Some technologies I've worked On</h1>
            <div className="technologies flex flex-wrap items-center justify-center gap-5 p-4 md:p-20">
              {technologies.map((tech, index) => (
                <div key={index} className="tech hover:animate-bounce w-20 h-20 rounded-full border-solid border-[4px] border-[#565656] flex justify-center items-center font-bold">
                  {tech}
                </div>
              ))}


            </div>
            <h1 className='text-center font-extrabold text-[#FBA92C]'>Tools</h1>
            <div className="tools flex flex-wrap items-center justify-center gap-5 px-4 py-3 md:px-20 md:py-3">
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-20'>
                {tools.map((tool, index) => (<li key={index}>{tool}</li>)

                )}


              </ul>
            </div>
          </div>
          <div className="right md:col-span-1 space-y-10">
            <h1 className='text-center font-extrabold text-[#FBA92C]'>Where I've Worked</h1>
            <div className="card w-full md:w-[400px] flex flex-col gap-5 border border-solid rounded-lg bg-[#212121] border-[#FBA92C] p-3">

              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <div className="position">Instructor</div>
                  <div className="time">2022-2023</div>
                </div>

                <div className="company italic">Flatiron School</div>
                <p>Software Engineering Instructor, Collaborated with a team to develop and validate curriculum, offered technical support, and guided students in acquiring industry skills for project development, incorporating advanced technologies and ensuring system security through server-side encryption</p>
              </div>
            </div>
            <div className="card w-full md:w-[400px] flex flex-col gap-5 border border-solid rounded-lg bg-[#212121] border-[#FBA92C] p-3">

              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <div className="position">Software Engineer</div>
                  <div className="time">2014-2016</div>
                </div>
                <div className="company italic">Accenture</div>
                <p>Software Engineer at Accenture, played a key role in the entire software development lifecycle, led a successful end-to-end project delivering a customized retail website, and developed, maintained, and deployed production code for client websites</p>
              </div>
            </div>
            {/* Add more work experience cards as needed */}
          </div>
        </div>

        <div className={`flex flex-col items-center gap-6 pt-20 sticky bottom-10 justify-center md:flex-row`}>
          <span className={`bg-[#FBA92C] separator h-1 w-96 md:w-96`}></span>
          <span className={`text-[#FBA92C] material-symbols-outlined cursor-pointer animate-bounce`} onClick={() => navigate('/blogs')}>
            expand_more
          </span>
          <span className={`bg-[#FBA92C] h-1 w-96 md:w-96`}></span>
        </div>

      </div>
    </div>
  );
};

export default Experience;