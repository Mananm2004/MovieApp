import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/Axios';
import Cards from './partials/cards';
import Loading from './partials/loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
    
    const navigate = useNavigate();
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
    document.title = 'Movie App || Trending ' + category;
    const GetTrending=async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);  
            
            console.log(data);
            if (data.results.length > 0) {
                settrending((prevState) => [...prevState, ...data.results]);
                setpage(prevPage => prevPage + 1);
            } else {
                sethasmore(false);
            }
            
             
        } catch (e) {
            console.error("Error",e);
        }
    };
    const refreshhandler = () => {
        if (trending.length === 0) {
            GetTrending();
        } else {
            setpage(1);
            settrending([]);
            GetTrending();
        }
    }
    useEffect(() => {
        refreshhandler();
    },[category,duration])

  return trending.length>0 ? (
      <div className='  w-screen h-screen '>
          <div className='w-full  px-[2%] py-[2%]  flex items-center  '>
              <Link onClick={()=>navigate(-1)}><i className="hover:text-[#6556cd] text-zinc-300 text-bold ri-arrow-left-line"></i></Link>
              <h1 className='text-2xl text-zinc-400 font-semibold'>Trending</h1>
              
              <Topnav ></Topnav>
              <Dropdown func={(e)=>setcategory(e.target.value)} title="Category" options={["movie", "tv", "all"]}></Dropdown>
              <div className='w-[2%]'></div>
              <Dropdown func={(e)=>setduration(e.target.value)} title="Duration" options={["week","day"]}></Dropdown>

          </div>
          <InfiniteScroll
              loader={<h1 className='text-white'>Loading...</h1>}
              next={GetTrending}
              hasMore={hasmore}
              dataLength={trending.length}  >
              <Cards data={trending} title={category}></Cards>
            </InfiniteScroll>
      </div>) : <Loading></Loading>
  
}

export default Trending