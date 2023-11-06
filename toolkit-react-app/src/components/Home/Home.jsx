import React, { useEffect } from 'react'
import "./home.css"
import MovieListing from "../MovieListing/MovieListing"

import { useDispatch } from 'react-redux'
import { fetchAsyncMovies ,fetchAsyncShows} from '../../features/movie/movieslice'
// import axios from 'axios'


function Home() {
  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  },[dispatch])
  return (
    <div className='home'>
      <div className="banner-img">

      </div>
      <MovieListing/>
    </div>
  )
}

export default Home
