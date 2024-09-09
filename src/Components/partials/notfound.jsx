import React from 'react'
import not_found from '/404.gif'
import { Link, useNavigate } from 'react-router-dom'
function notfound() {
    const navigate=useNavigate()
  return (
      <div className='absolute z-[100] left-0 w-screen h-screen flex top-0 justify-center items-center bg-black'>
          <Link onClick={() => navigate(-1)}><i className="absolute text-2xl  right-[2%] top-[5%] hover:text-[#6556cd] text-zinc-300 text-bold ri-close-fill"></i></Link>
    <img className='w-screen h-screen' src={not_found}></img>
    </div>
  )
}

export default notfound