import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
function Sidenav() {
    
    return (
        <div className='w-[20%] h-full border-r-2 border-zinc-400 p-3 '>
            <h1 className='text-2xl text-white font-bold mr-'>
                <i className='text-[#6556CD] ri-tv-fill text-2xl mr-2'></i>
                <span className='text-2xl'>Movie App</span>
            </h1>
            <nav className='flex flex-col text-zinc-400 text-xl gap-3'  >
                <h1 className='text-white font-semibold text-xl my-10 mb-5'>New feeds</h1>
                <Link to="/trending" className='hover:bg-[#6556CD] p-5 hoveer:text-white duration-300 rounded-lg'><i className="mr-2 ri-fire-fill"></i> Trending</Link>
                <Link to="/popular"className='hover:bg-[#6556CD] p-5 hoveer:text-white duration-300 rounded-lg'><i className="mr-2 ri-movie-2-line"></i>Popular</Link>
                <Link to="/movie" className='hover:bg-[#6556CD] p-5 hoveer:text-white duration-300 rounded-lg'><i className="mr-2 ri-tv-2-fill"></i> Movies</Link>
                <Link to="/people"className='hover:bg-[#6556CD] p-5 hoveer:text-white duration-300 rounded-lg'> <i className="mr-2 ri-team-fill"></i> People</Link>
                <Link to="/tv_shows" className='hover:bg-[#6556CD] p-5 hoveer:text-white duration-300 rounded-lg'><i className="mr-2 ri-bard-fill"></i>TV shows </Link>

            </nav>
            <hr className='border-none h-[1px] bg-zinc-400'></hr>
            <nav className='flex flex-col text-zinc-400 text-xl gap-3'  >
                <h1 className='text-white font-semibold text-xl my-10 mb-5'>Website Information</h1>
                <Link className='hover:bg-[#6556CD] p-5  hoveer:text-white duration-300 rounded-lg'><i className="mr-2  ri-phone-fill"></i> Contact Us</Link>
                <Link className='hover:bg-[#6556CD] p-5 hoveer:text-white duration-300 rounded-lg'><i className="mr-2 ri-information-fill"></i> About Us </Link>

            </nav>
        </div>
    )

}
export default Sidenav