import React from 'react'
import { Link } from 'react-router-dom'

function cards({ data, title }) {
    console.log(title);
  return (
      <div className='bg-[#1F1E24] flex flex-wrap w-full p-[3%]'>
          {data.map((c, i) =>
              <Link to={`/${c.media_type || title}/details/${c.id}`} className=' relative w-[25vh] mr-[5%] mb-[5%]' key={i}>
                  <img src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`} className='shadow-[8px_17px_38px_rgba(0,0,0,.5)] h-[40vh] object-cover '></img>
                  <h1 className='text-2xl text-zinc-200 mt-3 font-semibold'>
                      {c.title || c.name || c.original_title || c.original_name}
                  </h1>
                  {c.vote_average &&
                    <div className='absolute right-[-10%] bottom-[25%] text-xl text-white rounded-full bg-yellow-600 h-[5vh] flex justify-center items-center'>{ (c.vote_average*10).toFixed()}<sup>%</sup></div>}
                  
              </Link>
          )}
      </div>
  )
}

export default cards