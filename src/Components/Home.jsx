import React, { useEffect,useState } from 'react'
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/Axios'
import Header from './partials/Header';
import Horizontalcards from './partials/Horizontalcards';
import Dropdown from './partials/Dropdown';
import Loading from './partials/Loading';
function Home() {
    document.title = 'Movie App';
    const [wallpaper, setwallpaper] = useState(null)
    const GetHeaderWallpaper=async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            
            let randomdata=data.results[(Math.random()*data.results.length).toFixed()]
            setwallpaper(randomdata);
            
        } catch (e) {
            console.error("Error",e);
        }
    };

    const [trending, settrending] = useState(null)
    const [category, setcategory] = useState("all");
    const GetTrending=async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);  
            settrending(data.results);
            
        } catch (e) {
            console.error("Error",e);
        }
    };
    useEffect(() => {
        !wallpaper && GetHeaderWallpaper();
        GetTrending();
    }, [category]) 
    //console.log(trending)
    return wallpaper && trending? (
        <>
        <Sidenav></Sidenav>
            <div className='w-[80%] h-full bg-zinc-900 overflow-auto overflow-x-hidden'>
                <Topnav></Topnav>
                <Header data={wallpaper}></Header>
                <div className='mb-5 mt-5 p-5 flex justify-between'>
              <h1 className=' text-3xl font-semibold text-zinc-400'>Trending</h1>
              <Dropdown title={"Filter"} options={["tv","movie","all"]} func={(e)=>setcategory(e.target.value)}  ></Dropdown>
            </div>
                <Horizontalcards data={trending} ></Horizontalcards>
            </div>
        </>
  ):<Loading></Loading>
}

export default Home