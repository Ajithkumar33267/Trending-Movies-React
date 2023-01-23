import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieList from '../MovieList/MovieList'
import { fetchAsyncMovies } from '../../features/movies/movieSlice'
import { fetchAsyncShows } from '../../features/movies/movieSlice'

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())

  }, [dispatch])

  return (
    <>
      <div className='banner-img'>
        <MovieList />
      </div>
    </>
  )
}

export default Home