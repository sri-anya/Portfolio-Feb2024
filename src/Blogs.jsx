import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const Blogs = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#141414] h-screen w-full' >
      <NavBar/>
      <div className=' text-white flex flex-col items-center '>
        <div className="cardContainer grid grid-cols-3 gap-20 text-center">
          <div className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px] h-90 w-60 p-10 m-10">
            <img width="120" height="120" src="src\assets\pexels-pixabay-270404.jpg" alt="" />
            <p>Blog Heading</p>
            <p className='overflow-clip text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis assumenda similique quod amet necessitatibus eum ducimus at, temporibus perferendis aut, error dolorem. Sit quos beatae neque consequatur temporibus nobis mollitia, totam exercitationem velit.</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px] h-90 w-60 p-10 m-10">
            <img width="120" height="120" src="src\assets\pexels-pixabay-270404.jpg" alt="" />
            <p>Blog Heading</p>
            <p className='overflow-clip text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis assumenda similique quod amet necessitatibus eum ducimus at, temporibus perferendis aut, error dolorem. Sit quos beatae neque consequatur temporibus nobis mollitia, totam exercitationem velit.</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px] h-90 w-60 p-10 m-10">
            <img width="120" height="120" src="src\assets\pexels-pixabay-270404.jpg" alt="" />
            <p>Blog Heading</p>
            <p className='overflow-clip text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis assumenda similique quod amet necessitatibus eum ducimus at, temporibus perferendis aut, error dolorem. Sit quos beatae neque consequatur temporibus nobis mollitia, totam exercitationem velit.</p>
          </div>

        </div>

        <div className='flex gap-6 pt-20 absolute bottom-10 justify-center '>
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
