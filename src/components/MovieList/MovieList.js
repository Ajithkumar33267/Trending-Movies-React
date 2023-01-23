import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import { getAllShows } from '../../features/movies/movieSlice'
import MovieDetails from '../MovieDetails/MovieDetails'
import './MovieList.css'

const MovieList = () => {

    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {movies && movies.length && movies.map(movie => <MovieDetails key={movie.id} data={movie} />)}
                </div>
            </div>
            <div className='show-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    {shows && shows.length && shows.map(show => <MovieDetails key={show.id} data={show} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList