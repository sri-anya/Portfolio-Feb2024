import React from 'react'
import NavBar from './NavBar'

const Blogs = () => {
  return (
    <div className='bg-[#141414] h-screen w-full' >
      <NavBar/>
      <div className=' text-white '>
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

      </div>
    </div>

  )
}

export default Blogs
