import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/Axios';
import Cards from './partials/cards';
import Loading from './partials/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function Popular() {
    document.title = 'Movie App || Trending';

    const navigate = useNavigate();
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1)
    const [hasmore, sethasmore] = useState(true)
    const GetPopular=async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);  
           
            if (data.results.length > 0) {
                setpopular((prevState) => [...prevState, ...data.results]);
                setpage(page+1);
            } else {
                sethasmore(false);
            }
            
            
            
        } catch (e) {
            console.error("Error",e);
        }
    };
    const refreshhandler =  () => {
        if (popular.length === 0) {
            GetPopular();
        } else {
            setpage(1);
            setpopular([]);
            GetPopular();
        }
    }
    useEffect(() => {
        refreshhandler();
    },[category])

  return popular.length>0 ? (
      <div className='  w-screen h-screen '>
          <div className='w-full px-[5%] py-[2%]   flex items-center  '>
              <Link onClick={()=>navigate(-1)}><i className="hover:text-[#6556cd] text-zinc-300 text-bold ri-arrow-left-line"></i></Link>
              <h1 className='text-2xl text-zinc-400 font-semibold'>Popular</h1>
              <Topnav></Topnav>
              <Dropdown func={(e)=>setcategory(e.target.value)} title="Category" options={["movie", "tv"]}></Dropdown>
              <div className='w-[2%]'></div>

          </div>
          <InfiniteScroll
              loader={<h1 className='text-white'>Loading...</h1>}
              next={GetPopular}
              hasMore={true}
              dataLength={popular.length}  >
              <Cards data={popular} title={category}></Cards>
            </InfiniteScroll>
      </div>) : <Loading></Loading>
  
}

export default Popular