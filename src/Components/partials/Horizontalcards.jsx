import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
function Horizontalcards({data,func}) {
  return (
     
         
          <div className='w-full  flex overflow-y-hidden   p-5'>
              
              {data.length>0 ? (data.map((e, i) =>
                  <Link to={`/${e.media_type}/details/${e.id}`} key={i} className='min-w-[15%] h-[40vh] mr-5 bg-zinc-900 mb-5 '>
                  {<img className='w-full h-[55%] object-cover' src={`https://image.tmdb.org/t/p/original/${e.backdrop_path || e.poster_path}`}></img>}
                      <div className='text-white p-3 h-[45%] overflow-y-auto'>
                      <h1 className='text-xl   font-semibold '>{e.title || e.name || e.original_title || e.original_name}</h1>
                     <p className=' mt-3 mb-3 text-white'>{e.overview.slice(0, 50)}
                     <Link className="text-zinc-400">...more</Link>
                     </p>
                     </div>
                </Link>)):<h1 className='text-3xl text-white font-black text-center mt-5'>Nothing to show</h1>}
          </div>
      
  )
}

export default Horizontalcards