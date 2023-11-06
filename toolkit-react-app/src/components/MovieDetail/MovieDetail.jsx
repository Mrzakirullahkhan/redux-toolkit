import React, { useEffect } from 'react'
import "./MovieDetail.css"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import movieslice, { fetchAsyncMovieOrShowDetail ,getSelectMovieOrShow,removeSelectMovieOrShow} from '../../features/movie/movieslice';


function MovieDetail() {
  const {imdbID}=useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectMovieOrShow)
  useEffect(()=>{
      dispatch(fetchAsyncMovieOrShowDetail(imdbID))
      return ()=>{
        dispatch(removeSelectMovieOrShow())
      }
  },[dispatch],imdbID)
  return (
    <div className='movie-section'>
      {Object.keys(data).length===0?
      (<div>...loading....</div>)
    :(
    <>
    <div className="section-left">
        <div className="movie-title">
          {data.Title}
        </div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className='fa- fa-star'>{data.imdbRating}</i>
          </span>
          <span>
            IMDB Votes <i className='fa- fa-thumbs-up'>{data.imdbVotes}</i>
          </span>
          <span>
            Runtime <i className='fa- fa-file'>{data.imdbRuntime}</i>
          </span>
          <span>
            Year <i className='fa- fa-calender'>{data.imdbYear}</i>
          </span>
        </div>
        <div className="movie-plot">
          {movieslice.plot}
        </div>
        <div className="movie-info">
          <div>
            <span >Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generus</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Language</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </>
    )}
    </div>
  )
}

export default MovieDetail
