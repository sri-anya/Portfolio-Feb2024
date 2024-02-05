import React, { useRef } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';

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
              <img className='rounded-full' src='src\assets\favicon-32x32.png' alt='' />
              <p>I’m a front-end developer from Vietnam. My coding journey began early this year when I started learning to code with Scrimba. So far I've learned and coded several projects with HTML/CSS3, JavaScript, ReactJS, and TailwindCSS. I’m eager for an opportunity to kickstart my front-end career while making a positive contribution to the world of tech.</p>
            </div>
            <div id='2' ref={div2Ref} className='2 w-full p-5 hover:bg-[#6c6c6c] rounded-lg space-y-10'>
              <h2 className='font-extrabold text-center text-[#FBA92C]'>Education and Certifications</h2>
              <div className="eduCard   space-y-4">
                <div>
                  <h3 className='py-2'>Georgia Intitute of Technology, Atlanta</h3>
                  <p>MS in Computer Science</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis a eligendi.</p>
                </div>

                <hr />
              </div>
              <div className="eduCard   space-y-4">
                <div>
                  <h3 className='py-2'>Georgia Intitute of Technology, Atlanta</h3>
                  <p>MS in Computer Science</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis a eligendi.</p>
                </div>
                <hr />
              </div>
              <div className="eduCard  space-y-4 ">
                <div>
                  <h3 className='py-2'>Georgia Intitute of Technology, Atlanta</h3>
                  <p>MS in Computer Science</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis omnis a eligendi.</p>

                </div>
                <hr />
              </div>
            </div>
            <div id='3' ref={div3Ref} className='3 hover:bg-[#6c6c6c] rounded-lg p-5 space-y-10'>
              <h2 className='font-extrabold text-center text-[#FBA92C]'>Passion</h2>
              <div className='flex gap-10'>
                <div className="passionCard flex flex-col justify-center items-center gap-5">
                  <img width="50" height="50" className="invert" src="src\assets\code_12619984.png" alt="developement" />
                  <h3>Development</h3>
                  <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque aut voluptates non dignissimos unde voluptatibus eligendi perferendis, voluptatum cupiditate ut vel ex harum.</p>

                </div>
                <div className="passionCard flex flex-col justify-center items-center gap-5">
                  <img width="50" height="50" className="invert" src="src\assets\interface_2462837.png" alt="designing" />
                  <h3>Design</h3>
                  <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque aut voluptates non dignissimos unde voluptatibus eligendi perferendis, voluptatum cupiditate ut vel ex harum.</p>

                </div>
                <div className="passionCard flex flex-col justify-center items-center gap-5">
                  <img width="50" height="50" className="invert" src="src\assets\code_12619984.png" alt="Education" />
                  <h3>Education</h3>
                  <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque aut voluptates non dignissimos unde voluptatibus eligendi perferendis, voluptatum cupiditate ut vel ex harum.</p>

                </div>
              </div>



            </div>
          </div>
        </div>

        <div className={`flex flex-col items-center gap-6 pt-20 sticky bottom-10 justify-center md:flex-row`}>
          <span className={`bg-[#FBA92C] separator h-1 w-96 md:w-96`}></span>
          <span className={`text-[#FBA92C] material-symbols-outlined cursor-pointer animate-bounce`} onClick={() => navigate('/projects')}>
            expand_more
          </span>
          <span className={`bg-[#FBA92C] h-1 w-96 md:w-96`}></span>
        </div>
      </div>



    </div>


  )
}

export default About

