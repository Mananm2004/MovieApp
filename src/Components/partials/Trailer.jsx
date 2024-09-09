import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Notfound from './notfound'
function Trailer({ key }) {
    const navigate=useNavigate()
    const { pathname } = useLocation()
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector(state => state[category].info.videos);
    console.log(ytvideo)

  return (
      <div className='bg-[rgba(0,0,0,.8)] absolute z-[100] top-[0] left-[0] w-screen h-screen flex items-center justify-center'>
      <Link onClick={() => navigate(-1)}><i className="absolute text-2xl  right-[2%] top-[5%] hover:text-[#6556cd] text-zinc-300 text-bold ri-close-fill"></i></Link>
      {ytvideo ? (
        <ReactPlayer controls height={700} width={1200} url={`https://www.youtube.com/watch?v=${ytvideo.key}`}></ReactPlayer>):<Notfound></Notfound>}
      </div>
  )
}

export default Trailer