import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removemovie,asyncloadmovie } from '../store/actions/movieactions';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from './partials/Loading';
import Horizontalcards from './partials/horizontalcards';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Moviedetails() {
  const {pathname}=useLocation();
  const navigate = useNavigate();
  const { id } = useParams()
  const {info}=useSelector(state=>state.movie)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    }
  }, [id]);
  console.log(info)
  return info ?(

    <div style={{
      background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
      backgroundPosition: 'center',
      backgroundsize: "cover",
      backgroundRepeat: "no-repeat"
    }} className='w-screen relative h-[160vh] px-[10%] '>
      {/* Part1 navigation */}
      <nav className='w-full h-[10vh] items-center text-zinc-100 flex gap-10 text-xl'>
        <Link onClick={() => navigate(-1)}><i className="hover:text-[#6556cd] text-zinc-300 text-bold ri-arrow-left-line"></i></Link>
        <a  href={info.detail.homepage} target='_blank'><i className="ri-external-link-line"></i></a>
        <a href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} target='_blank'><i className=" ri-earth-fill"></i></a>
        <a href={`https://www.imdb.com/title/${info.detail.imdb_id}/`} target="_blank" >IMDB</a>
       

      </nav>
      {/* Part2 Poster  */}
     
      <div className='w-full flex '>
      <img src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} className='shadow-[8px_17px_38px_rgba(0,0,0,.5)] h-[55vh] object-cover '></img>
        
        <div className='content ml-[7%] text-white'>
          <h1 className='text-white font-black text-5xl '>{info.detail.title || info.detail.name || info.detail.original_title || info.original_name}
            <small className='text-zince-400 font-black text-xl'>({info.detail.release_date.split("-")[0]})</small> </h1>
          <div className='flex mb-4 text-white items-center gap-x-3 mt-10'>
            <span className='w-[5vh] text-xl text-white rounded-full bg-yellow-600 h-[5vh] flex justify-center items-center'>{(info.detail.vote_average * 10).toFixed()}<sup>%</sup></span>
            <h1 className=' w-[50px] leading-4 font-semibold font-2xl'>User score</h1>
            <h1>{info.detail.genres.map(a => a.name).join(",")}</h1>
            <h1>{info.detail.runtime} min</h1>
          </div>
          <h1 className='text-2xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>
          <h1 className='mt-5  mb-2 text-xl'>Overview:</h1>
          <h1 className='mb-10 text-white'>{info.detail.overview}</h1>
          <Link className=' px-8 py-5 rounded bg-[#6556cd]' to={`${pathname}/trailer`}><i className="text-xl mr-3 ri-play-fill"></i>Play trailer</Link>

         
          </div>
      </div>
      {/* Part3  AvailablePlatforms */}
      <div className='w-[80%] '>
        
      <div className='mt-5 mb-10 text-white gap-y-5'>
          {info.watchproviders && info.watchproviders.rent && <div className='flex gap-10 mt-10'>
            <h1>Available on rent</h1>{
            info.watchproviders.rent.map((w,i)=> <img key={i} className='w-[5vh] h-[5vh] object-fit rounded-md' title={w.provider_name} src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}></img>
            )}</div>}
          {info.watchproviders && info.watchproviders.buy && <div className='flex gap-10 mt-10'>
            <h1>Available to buy</h1>{
            info.watchproviders.buy.map((w,i)=> <img key={i} className='w-[5vh] h-[5vh] object-fit rounded-md'  title={w.provider_name} src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}></img>
            )}</div>}
          {info.watchproviders && info.watchproviders.flatrate && <div className='flex gap-10 mt-10'>
            <h1>Available on platforms</h1>{
            info.watchproviders.flatrate.map((w,i)=> <img key={i} className='w-[5vh] h-[5vh] object-fit rounded-md'  title={w.provider_name} src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}></img>
            )}</div>}
          
        </div>

        </div>
      {/* Part4  Recommendations */}
      <hr className='mb-5  border-none h-[2px] bg-zinc-400'></hr>
      <h1 className=' mb-3 text-3xl font-semibold text-white'>Recommendations</h1>
      <Horizontalcards className="mt-10" data={info.recommendations.length>0 ? info.recommendations : info.similar}></Horizontalcards>
      <Outlet></Outlet>

    </div>
  ):<Loading></Loading>
}

export default Moviedetails
