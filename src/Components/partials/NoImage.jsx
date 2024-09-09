import React from 'react'
import wavy from '/no_Image.jpeg'
function Loading() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
    <img className='w-1/2' src={wavy}></img>
    </div>
  )
}

export default Loading