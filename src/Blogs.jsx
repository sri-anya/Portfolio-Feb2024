import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const Blogs = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#141414] h-auto w-full' >
      <NavBar />
      <div className=' text-white flex flex-col items-center '>
        <h1 className='m-5 text-3xl'>Blogs</h1>
        <div className="cardContainer grid grid-cols-3 gap-14 text-center">
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

        <div className='flex gap-6 pt-20  bottom-10 justify-center '>
          <span className='bg-[#FBA92C] separator h-1 w-96'></span>
          {/* <img width="20" src="src\assets\developer_mode_tv_FILL0_wght600_GRAD0_opsz24 1.png" alt="" /> */}
          <span className="text-[#FBA92C] material-symbols-outlined cursor-pointer animate-bounce" onClick={() => {

            navigate('/projects');

          }}>
            expand_more
          </span>
          <span className='bg-[#FBA92C] h-1 w-96'></span>
        </div>

      </div>

    </div>

  )
}

export default Blogs
