import React from 'react'
import NavBar from './NavBar'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-[#141414] h-screen w-full'>
        <NavBar/>
        <div className=' text-white flex flex-col justify-center items-center gap-12 py-28 '>
        
            <div className="  first font-bold text-9xl flex items-center gap-20">
                <span>Aastha</span>
                <span><img width="100" src="src\assets\developer_mode_FILL0_wght600_GRAD0_opsz24 1.png" alt="" /></span>
            </div>

            <div className="second font-bold text-9xl flex items-center gap-20">

                <span><img width="100" src="src\assets\developer_mode_tv_FILL0_wght600_GRAD0_opsz24 1.png" alt="" /></span>
                <span>Saxena</span>

            </div>

            <div className='flex gap-6 pt-20'>
                <span className='bg-[#FBA92C] separator h-1 w-96'></span>
                {/* <img width="20" src="src\assets\developer_mode_tv_FILL0_wght600_GRAD0_opsz24 1.png" alt="" /> */}
                <span className="text-[#FBA92C] material-symbols-outlined cursor-pointer" onClick={()=>{
                  
                    navigate('/about');
                   
                }}>
                    expand_more
                </span>
                <span className='bg-[#FBA92C] h-1  w-96'></span>
            </div>



        </div>
        
        </div>
        
    )
}

export default Home
