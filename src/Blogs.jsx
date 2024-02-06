import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const Blogs = () => {
  const blogPosts = [
    {
      imageSrc: "/assets/webhostmostblog.png",
      title: "Host your website for free using webhostmost.com",
      summary: "Hosting for free might boost your confidence when you are still learning and exploring hosting your websites. Checkout webhostmost.com which helps in doing free hosting.",
      readMoreLink: "https://medium.com/@aasthasaxena100/how-to-host-your-website-for-free-on-webhostmost-com-b6486d35f0e3",
    },
    // Add more blog posts as needed
  ];

  const navigate = useNavigate();
  return (
    <div className='bg-[#141414] h-auto max-h-full overflow-y-scroll no-scrollbar w-full'>
      <NavBar />
      <h1 className='m-5 text-3xl text-white text-center'>Blogs</h1>
      <div className="cardContainer text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">


      {blogPosts.map((post, index) => (
  <div key={index} className="card flex flex-col justify-center items-center gap-5 border-solid border-[2px]  h-60 px-10 py-4 m-10">
    <img className='rounded-md' width="101" height="101" src={post.imageSrc} alt={post.title} />
    <p className='text-balance'>{post.title}</p>
    <p className='overflow-clip text-xs h-12'>{post.summary}</p>
    <button className='bg-[#565656] px-3 rounded-lg'><a href={post.readMoreLink} target='#'>Read More</a></button>
  </div>
))}
        





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
