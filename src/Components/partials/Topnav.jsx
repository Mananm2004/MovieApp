import React, { useState,useEffect } from 'react'
import axios from '../../utils/Axios'
import { Link } from 'react-router-dom'
import noimage from '/no_Image.jpeg'
function Topnav() {
    const [query, setquery] = useState("");
    const [searches, setsearches] = useState([]);
    
    const GetSearchs = async () => {
        try {
            const {data} = await axios.get(`/search/multi?query=${query}`);
            setsearches(data.results)
        } catch (e) {
           
        }
    };
    useEffect(() => {
        GetSearchs(); 
    },[query])
  return (
      <div  className='z-[100] w-full max-h-[10vh] relative flex justify-start ml-[20%] rounded p-5 '>
          <i className='text-zinc-400 text-3xl ri-search-line'></i>
          <input  onChange={(e)=>setquery(e.target.value)} value={query} type='text' className='w-[50%] mx-10  text-xl outline-none border-none bg-transparent text-white' placeholder='Search...'></input>
          {query.length>0 &&(<i onClick={()=>setquery("")} className="text-zinc-400 text-3xl ri-close-fill"></i>)}

          <div className=' absolute w-[55%] max-h-[50vh] bg-zinc-300 top-[110%] left-[5%] overflow-auto'>
              {searches &&searches.map((s,i)=>(<Link to={`/${s.media_type}/details/${s.id}`} key={i} className='text-zinc-600 hover:bg-zinc-400 font-semibold hover:text-black w-full p-10 flex justify-start border-b-2 border-zinc-100 items-center'>
                  <img className='w-[10vh] h-[10vh] rounded shadow-large object-cover mr-5' src={
                      s.backdrop_path || s.profile_path?`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`:noimage}></img>
                  <span>{s.title || s.name || s.original_title }</span>
              </Link>))}
              
             
          </div>
      </div>
  )
}

export default Topnav