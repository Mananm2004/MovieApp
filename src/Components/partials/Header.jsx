import React from 'react'
import { Link } from 'react-router-dom';
function Header({ data }) {
    
    return (
      
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
            backgroundPosition: 'center',
            backgroundsize: "cover",
            backgroundRepeat: "no-repeat"
        }}
            className=' w-full h-[50vh] flex flex-col justify-end p-[5%] items-start'>
    
            <h1 className='text-5xl  w-[70%] font-bold text-white'>{data.title || data.name || data.original_title || data.original_name}</h1>
            <p className='w-[70%] mt-3 text-white'>{data.overview.slice(0, 200)}
                <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-300">...more</Link>
            </p>
            <p className='text-white '>
                <i className="text-yellow-500 ri-megaphone-fill"></i>
                {data.release_date || "No information"}
                <i className="ml-5 text-yellow-500 ri-album-fill"></i>
                {data.media_type.toUpperCase()}
            </p>
            <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='text-white p-4 mt-5 rounded  bg-[#6556cd]'>Watch trailer</Link>
        </div>
  )
}

export default Header