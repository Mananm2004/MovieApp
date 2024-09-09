import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeperson,asyncloadperson } from '../store/actions/personactions';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from './partials/loading';
import Horizontalcards from './partials/horizontalcards';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Persondetails() {
 
  const {pathname}=useLocation();
  const navigate = useNavigate();
  const { id } = useParams()
  const {info}=useSelector(state=>state.person)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    }
  }, [id]);
  console.log(info)
  return info ? (
    <div className='px-[15%] w-screen h-[130vh] bg-black'>
       {/* Part1 navigation */}
       <nav className='w-full h-[10vh]  items-center text-zinc-100 flex gap-10 text-xl'>
        <Link onClick={() => navigate(-1)}><i className="hover:text-[#6556cd] text-zinc-300 text-bold ri-arrow-left-line"></i></Link>
      </nav>
      
      <div className='w-full flex flex-col'>
        {/* part2 left poster and details */}
        <div className='w-full flex'>
        <div className='w-[20%] '>
          <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[35vh] object-cover'
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path || info.detail.backdrop_path}`}>
          </img>
          <hr className='mb-5 mt-4 border-none h-[2px] bg-zinc-400'></hr>
          {/* Show social media links */}
          <div className='text-white flex gap-8'>
           
        <a className='text-xl ' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} target='_blank'><i className=" ri-earth-fill"></i></a>
            <a className='text-xl ' href={`https://www.facebook.com/${info.externalid.facebook_id}/`} target='_blank'><i className=" ri-facebook-box-fill"></i></a>
            <a className='text-xl ' href={`https://www.instagram.com/${info.externalid.instagram_id}`} target='_blank'><i className=" ri-instagram-fill"></i></a>
            <a className='text-xl ' href={`https://x.com/${info.externalid.twitter_id}`} target='_blank'><i className=" ri-twitter-fill"></i></a>
          </div>
        </div>
        {/* Part 3 right details and information */}
        <div className=' ml-10 w-[80%]'>
            <h1 className='text-6xl text-zinc-400 my-5 font-bold'>{info.detail.name}</h1>
            <h1 className='text-xl text-zinc-400 my-5 font-bold'>Biography</h1>
            <p className='text-zinc-500'>{info.detail.biography.slice(0, 400)}  more...</p>
            <h1 className='text-lg text-zinc-400 my-5 font-bold'>Movies & TV shows</h1>
            <Horizontalcards className="mt-10" data={info.combinedcredits.cast}></Horizontalcards>

          </div>
          </div>
        {/* Personal information */}
        <div className='absolute top-[55%]'>
        <h1 className='text-2xl text-zinc-400 my-5 font-semibold'>Personal Info</h1>
        <h1 className='text-xl text-zinc-400 my-5 font-semibold'>Known for</h1>
        <h1 className='text-lg text-zinc-400 '>{info.detail.known_for_department
        }</h1>
        <h1 className='text-xl mt-3 text-zinc-400 my-5 font-semibold'>Gender</h1>
        <h1 className='text-lg text-zinc-400 '>{info.detail.gender===2?"Male":"Female"
        }</h1>
        <h1 className='text-xl mt-3 text-zinc-400 my-5 font-semibold'>Birthday</h1>
        <h1 className='text-lg text-zinc-400 '>{info.detail.birthday
        }</h1>
        <h1 className='text-xl mt-3 text-zinc-400 my-5 font-semibold'>Deathday</h1>
        <h1 className='text-lg text-zinc-400 '>{info.detail.deathday && info.detail.deathday
          }</h1>
          </div>
      </div>
       
    </div>
  ):<Loading></Loading>
}

export default Persondetails