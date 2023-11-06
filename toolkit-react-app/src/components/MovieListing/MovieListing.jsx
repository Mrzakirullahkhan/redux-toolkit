import React from 'react'
import "./MovieListing.css"
import MovieCard from "../MovieCard/MovieCard"
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movie/movieslice'
function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies, renderShows = "";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index)=>{
    return  <MovieCard key={index} data={movie}/>
    })
    
  ):(
    <div className ="movie-error"><h3>{movies.Error}</h3></div>
  )

  renderShows = shows.Response === "True" ? (
    shows.Search.map((shows,index)=>{
    return  <MovieCard key={index} data={shows}/>
    })
    
  ):(
    <div className ="movie-error"><h3>{movies.Error}</h3></div>
  )
  
  return (
    <div>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            {renderMovies}
          </div>
        </div>
        <div className="movie-list">
          <h2>Shows</h2>
          <div className="movie-container">
            {renderShows}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieListing
