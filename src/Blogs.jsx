import React, {useState} from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const Blogs = () => {
  

  return (
    <div className='bg-[#141414] h-auto max-h-full overflow-y-scroll no-scrollbar w-full'>
      <NavBar />
        <h1 className='m-5 text-3xl text-white text-center'>Blogs</h1>
        <div className="cardContainer text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">

       
          <div className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px]  h-60 px-10 py-4 m-10">
            <img width="120" height="120" src="src\assets\pexels-pixabay-270404.jpg" alt="" />
            <p>Blog Heading</p>
            <p className='overflow-clip text-xs h-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis assumenda similique quod amet necessitatibus eum ducimus at, temporibus perferendis aut, error dolorem. Sit quos beatae neque consequatur temporibus nobis mollitia, totam exercitationem velit.</p>
            <button className='bg-[#565656] px-3  rounded-lg '>Read More</button>
          </div>
          <div className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px]  h-60 px-10 py-4 m-10">
            <img width="120" height="120" src="src\assets\pexels-pixabay-270404.jpg" alt="" />
            <p>Blog Heading</p>
            <p className='overflow-clip text-xs h-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis assumenda similique quod amet necessitatibus eum ducimus at, temporibus perferendis aut, error dolorem. Sit quos beatae neque consequatur temporibus nobis mollitia, totam exercitationem velit.</p>
            <button className='bg-[#565656] px-3  rounded-lg '>Read More</button>
          </div>
          <div className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px]  h-60 px-10 py-4 m-10">
            <img width="120" height="120" src="src\assets\pexels-pixabay-270404.jpg" alt="" />
            <p>Blog Heading</p>
            <p className='overflow-clip text-xs h-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis assumenda similique quod amet necessitatibus eum ducimus at, temporibus perferendis aut, error dolorem. Sit quos beatae neque consequatur temporibus nobis mollitia, totam exercitationem velit.</p>
            <button className='bg-[#565656] px-3  rounded-lg '>Read More</button>
          </div>
          <div className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px]  h-60 px-10 py-4 m-10">
            <img width="120" height="120" src="src\assets\pexels-pixabay-270404.jpg" alt="" />
            <p>Blog Heading</p>
            <p className='overflow-clip text-xs h-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis assumenda similique quod amet necessitatibus eum ducimus at, temporibus perferendis aut, error dolorem. Sit quos beatae neque consequatur temporibus nobis mollitia, totam exercitationem velit.</p>
            <button className='bg-[#565656] px-3  rounded-lg '>Read More</button>
          </div>
          <div className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px]  h-60 px-10 py-4 m-10">
            <img width="120" height="120" src="src\assets\pexels-pixabay-270404.jpg" alt="" />
            <p>Blog Heading</p>
            <p className='overflow-clip text-xs h-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis assumenda similique quod amet necessitatibus eum ducimus at, temporibus perferendis aut, error dolorem. Sit quos beatae neque consequatur temporibus nobis mollitia, totam exercitationem velit.</p>
            <button className='bg-[#565656] px-3  rounded-lg '>Read More</button>
          </div>
          <div className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px]  h-60 px-10 py-4 m-10">
            <img width="120" height="120" src="src\assets\pexels-pixabay-270404.jpg" alt="" />
            <p>Blog Heading</p>
            <p className='overflow-clip text-xs h-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis assumenda similique quod amet necessitatibus eum ducimus at, temporibus perferendis aut, error dolorem. Sit quos beatae neque consequatur temporibus nobis mollitia, totam exercitationem velit.</p>
            <button className='bg-[#565656] px-3  rounded-lg '>Read More</button>
          </div>
          <div className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px]  h-60 px-10 py-4 m-10">
            <img width="120" height="120" src="src\assets\pexels-pixabay-270404.jpg" alt="" />
            <p>Blog Heading</p>
            <p className='overflow-clip text-xs h-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis assumenda similique quod amet necessitatibus eum ducimus at, temporibus perferendis aut, error dolorem. Sit quos beatae neque consequatur temporibus nobis mollitia, totam exercitationem velit.</p>
            <button className='bg-[#565656] px-3  rounded-lg '>Read More</button>
          </div>
          <div className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px]  h-60 px-10 py-4 m-10">
            <img width="120" height="120" src="src\assets\pexels-pixabay-270404.jpg" alt="" />
            <p>Blog Heading</p>
            <p className='overflow-clip text-xs h-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis assumenda similique quod amet necessitatibus eum ducimus at, temporibus perferendis aut, error dolorem. Sit quos beatae neque consequatur temporibus nobis mollitia, totam exercitationem velit.</p>
            <button className='bg-[#565656] px-3  rounded-lg '>Read More</button>
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

  )
}

export default Blogs
