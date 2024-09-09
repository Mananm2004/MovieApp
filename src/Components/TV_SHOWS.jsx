import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/Axios';
import Cards from './partials/cards';
import Loading from './partials/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function TV_SHOWS() {
    document.title = 'Movie App || Popular';

    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
    const GetTV=async () => {
        try {
            const { data } = await axios.get(`tv/${category}?page=${page}`);  
            if (data.results.length > 0) {
                settv((prevState) => [...prevState, ...data.results]);
                setpage(page+1);
            } else {
                sethasmore(false);
            }
        } catch (e) {
            console.error("Error",e);
        }
    };
    const refreshhandler =  () => {
        if (tv.length === 0) {
            GetTV();
        } else {
            setpage(1);
            settv([]);
            GetTV();
        }
    }
    useEffect(() => {
        refreshhandler();
    },[category])

  return tv.length>0 ? (
      <div className='  w-screen h-screen  '>
          <div className='w-full px-[5%] py-[2%]   flex items-center  '>
              <Link onClick={()=>navigate(-1)}><i className="hover:text-[#6556cd] text-zinc-300 text-bold ri-arrow-left-line"></i></Link>
              <h1 className='text-2xl text-zinc-400  font-semibold'>TV Shows<small>({category})</small></h1>
              <Topnav></Topnav>
              <Dropdown func={(e)=>setcategory(e.target.value)} title="Category" options={["airing_today", "on_the_air","top_rated","popular"]}></Dropdown>
              <div className='w-[2%]'></div>

          </div>
          <InfiniteScroll
              loader={<h1 className='text-white'>Loading...</h1>}
              next={GetTV}
              hasMore={hasmore}
              dataLength={tv.length}  >
              <Cards data={tv} title="tv"></Cards>
            </InfiniteScroll>
      </div>) : <Loading></Loading>
  
}

export default TV_SHOWS