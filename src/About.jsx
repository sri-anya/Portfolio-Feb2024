import React, { useRef } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'


const About = () => {
  const navigate = useNavigate();
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  const scrollToDiv1 = () => {
    div1Ref.current.scrollIntoView({ behavior: 'smooth', block: "start" });

  };
  const hoverStart1 = () => {

    div1Ref.current.style.backgroundColor = "#6C6C6C";
  };
  const hoverOver1 = () => {

    div1Ref.current.style.backgroundColor = "#141414"
  };
  const hoverStart2 = () => {

    div2Ref.current.style.backgroundColor = "#6C6C6C";
  };
  const hoverOver2 = () => {

    div2Ref.current.style.backgroundColor = "#141414"
  };
  const hoverStart3 = () => {

    div3Ref.current.style.backgroundColor = "#6C6C6C";
  };
  const hoverOver3 = () => {

    div3Ref.current.style.backgroundColor = "#141414"
  };

  const scrollToDiv2 = () => {
    div2Ref.current.scrollIntoView({ behavior: 'smooth', block: "start" });
  };

  const scrollToDiv3 = () => {
    div3Ref.current.scrollIntoView({ behavior: 'smooth', block: "start" });

  };

  return (

    <div className='bg-[#141414] max-h-full h-auto w-full overflow-y-scroll no-scrollbar'>
      <NavBar />
      <div className='text-white flex flex-col'>

        <div className='about grid grid-cols-1 md:grid-cols-3 gap-10 m-4 md:m-10'>
          <div id='menu' className='menu md:col-span-1 flex justify-center items-center h-full'>
            <ul className='flex flex-col gap-5 items-center'>
              <li onClick={scrollToDiv1} onMouseEnter={hoverStart1} onMouseOut={hoverOver1} className='cursor-pointer hover:underline'>Who I am</li>
              <li onClick={scrollToDiv2} onMouseEnter={hoverStart2} onMouseOut={hoverOver2} className='cursor-pointer hover:underline'>Educational Achievements</li>
              <li onClick={scrollToDiv3} onMouseEnter={hoverStart3} onMouseOut={hoverOver3} className='cursor-pointer hover:underline'>Passion</li>
            </ul>
          </div>
          <div className='content md:col-span-2 h-[99%] overflow-y-auto no-scrollbar flex flex-col justify-center items-center gap-4 p-5'>
            <div id='1' ref={div1Ref} className='1 flex flex-col gap-2 items-center p-5 hover:bg-[#6c6c6c] rounded-lg'>
              <h2 className='font-extrabold text-[#FBA92C]'>A little about Me!</h2>
              <img className='rounded-full' src='/assets/favicon-32x32.png' alt='' />
              <p>Hi, I'm <b className='text-rose-800'>Aastha</b>, an aspiring web developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Express, Node.js, and Flask. From front-end finesse to robust back-end solutions, I bring a versatile skill set to the table. My passion lies in making a positive impact in the tech world. Eager to kickstart my web developer career, I thrive on transforming ideas into captivating digital experiences. Let's connect and explore the endless possibilities together!</p>
            </div>
            <div id='2' ref={div2Ref} className='2 w-full p-5 hover:bg-[#6c6c6c] rounded-lg space-y-10'>
              <h2 className='font-extrabold text-center text-[#FBA92C]'>Education and Certifications</h2>
              <div className="eduCard   space-y-4">
                <div>
                  <h3 className='py-2'>Georgia Intitute of Technology, Atlanta</h3>
                  <p className='italic'>MS in Computer Science</p>
                  <p>Specialization in Computing Systems, with a strong foundation in
                    computer science concepts and practical experience in designing.</p>
                </div>

                <hr />
              </div>
              <div className="eduCard   space-y-4">
                <div>
                  <h3 className='py-2'>Google Certifications</h3>
                  <p className='italic'>Google UX Design with Professional Certificate</p>
                  <p>Learned basics of UX research, like planning research studies,
                    and synthesizing research results.</p>
                </div>
                <hr />
              </div>
              <div className="eduCard  space-y-4 ">
                <div>
                  <h3 className='py-2'>Google Certifications</h3>
                  <p className='italic'>Google IT Automation with Python Specialization</p>
                  <p>Worked on troubleshooting, customer support, system
                    administration,Python, Linux, Domain Name Systems.</p>

                </div>
                <hr />
              </div>
            </div>
            <div id='3' ref={div3Ref} className='3 hover:bg-[#6c6c6c] rounded-lg p-5 space-y-10'>
              <h2 className='font-extrabold text-center text-[#FBA92C]'>Passion</h2>
              <div className='flex gap-10'>
                <div className="passionCard flex flex-col justify-center items-center gap-5">
                  <img width="50" height="50" className="invert" src="/assets/code_12619984.png" alt="developement" />
                  <h3 className='font-semibold'>Development</h3>
                  <p className='text-center'>Passionate about crafting robust and efficient code using languages like HTML, CSS, JavaScript, React, and Node.js, with a focus on creating scalable and user-friendly applications. </p>

                </div>
                <div className="passionCard flex flex-col justify-center items-center gap-5">
                  <img width="50" height="50" className="invert" src="/assets/interface_2462837.png" alt="designing" />
                  <h3 className='font-semibold'>Design</h3>
                  <p className='text-center'>Driven by the art of creating visually compelling and user-centric designs that enhance user experiences.</p>

                </div>
                <div className="passionCard flex flex-col justify-center items-center gap-5">
                  <img width="50" height="50" className="invert" src="assets/code_12619984.png" alt="Education" />
                  <h3 className='font-semibold'>Innovation</h3>
                  <p className='text-center'>Fueled by a relentless pursuit of new ideas, solutions, and technologies to push the boundaries of what's possible in the world of tech.</p>

                </div>
              </div>



            </div>
          </div>
        </div>

        <div className={`flex flex-col items-center gap-6 pt-20 sticky bottom-10 justify-center md:flex-row`}>
          <span className={`bg-[#FBA92C] separator h-1 w-96 md:w-96`}></span>
          <span className={`text-[#FBA92C] material-symbols-outlined cursor-pointer animate-bounce`} onClick={() => navigate('/experience')}>
            expand_more
          </span>
          <span className={`bg-[#FBA92C] h-1 w-96 md:w-96`}></span>
        </div>
      </div>



    </div>


  )
}

export default About

