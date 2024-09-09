import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import Loading from './Components/partials/Loading'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movie from './Components/Movie'
import TV_SHOWS from './Components/TV_SHOWS'
import People from './Components/people'
import Moviedetalis from './Components/Moviedetails'
import Tvdetails from './Components/Tvdetails'
import Persondetails from './Components/Persondetails'
import Trailer from './Components/partials/Trailer'
function App() {
  return (
    <div className=' bg-[#1F1E24] w-screen h-screen  flex'>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/trending" element={<Trending></Trending>}></Route>
        <Route path="/popular" element={<Popular></Popular>}></Route>
        <Route path="/movie" element={<Movie></Movie>}></Route>
        <Route path="/movie/details/:id" element={<Moviedetalis></Moviedetalis>}>
          <Route path='/movie/details/:id/trailer' element={<Trailer></Trailer>}></Route>
        </Route>
        <Route path="/tv_shows" element={<TV_SHOWS></TV_SHOWS>}></Route>
        <Route path='/tv/details/:id' element={<Tvdetails></Tvdetails>}>
        <Route path='/tv/details/:id/trailer' element={<Trailer></Trailer>}></Route>
        </Route>
        <Route path="/people" element={<People></People>}></Route>
        <Route path="/person/details/:id" element={<Persondetails></Persondetails>}></Route>




    </Routes>
    </div>
  )
}

export default App