import React from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-[#141414] h-screen w-full max-h-full overflow-y-scroll'>
            <NavBar />
            <div className='text-white flex flex-col justify-center items-center gap-12 py-16 md:py-28'>

                <div className='first font-bold text-4xl md:text-9xl flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-20'>
                    <span className='animate-pulse'>Aastha</span>
                    <span className='hidden md:block'><img width='100' src='/assets/developer_mode_FILL0_wght600_GRAD0_opsz24 1.png' alt='' /></span>
                </div>

                <div className='second font-bold text-4xl md:text-9xl flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-20'>
                    <span className='hidden md:block'><img width='100' src='/assets/developer_mode_tv_FILL0_wght600_GRAD0_opsz24 1.png' alt='' /></span>
                    <span className='animate-pulse'>Saxena</span>
                </div>

                <div className={`flex flex-col items-center gap-6 pt-10 md:pt-20 sticky bottom-10 justify-center md:flex-row`}>
                    <span className={`bg-[#FBA92C] separator h-1 w-20 md:w-96`}></span>
                    <span className={`text-[#FBA92C] material-symbols-outlined cursor-pointer animate-bounce`} onClick={() => navigate('/about')}>
                        expand_more
                    </span>
                    <span className={`bg-[#FBA92C] h-1 w-20 md:w-96`}></span>
                </div>

            </div>
        </div>
    );
}

export default Home;

