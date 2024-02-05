import React from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  let navigate = useNavigate();

  return (
    <div className='bg-[#141414] h-screen max-h-full overflow-y-scroll no-scrollbar w-full'>
      <NavBar />
      <div className='text-white flex flex-col items-center gap-10'>

        <div className="h-36 w-[90%] md:w-[70%] m-4 md:m-20 rounded-lg bg-gradient-to-r from-[#FB982C] to-[#565656] flex justify-center flex-col items-center gap-5">
          <h1 className='text-2xl font-bold'>Resume</h1>
          <button className='px-6 py-2 rounded-lg bg-[#565656] hover:bg-[#141414] font-medium'>
            GRAB A COPY!
          </button>
        </div>

        <div className="waysToContact flex flex-col items-center md:flex-row w-[90%] md:w-[70%] justify-around gap-5">
          <div className="getInTouch space-y-3 flex flex-col items-center">
            <img width="50" height="50" className="invert" src="src\assets\telegram.png" alt="" />
            <h1 className='text-2xl font-medium'>Get In Touch!</h1>
            <p className='text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, possimus.</p>
            <button className='px-6 py-2 rounded-lg bg-[#565656] font-medium hover:animate-bounce'>
              <a href="mailto:aasthasaxena100@gmail.com">SAY HELLO!</a>

            </button>
          </div>
          <div className="icons ">
            <ul className='flex gap-4'>
              <li><img src="src\assets\linkedin-02.svg" alt="LinkedIn" /></li>
              <li><img width="24" height="24" src="src\assets\codepen (1).svg" alt="CodePen" /></li>
              <li><img src="src\assets\github-01.svg" alt="GitHub" /></li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col items-center gap-6 pt-10 sticky bottom-10 justify-center md:flex-row backdrop-blur-sm'>
          <span className='bg-[#FBA92C] separator h-1 w-96'></span>
          <span className="text-[#FBA92C] material-symbols-outlined cursor-pointer animate-bounce" onClick={() => navigate('/')}>
            rocket
          </span>
          <span className='bg-[#FBA92C] h-1 w-96'></span>
        </div>

        <div className='text-[#9E9E9E]'>
          &copy;Aastha Saxena 2024
        </div>

      </div>
    </div>
  );
};

export default Contact;
