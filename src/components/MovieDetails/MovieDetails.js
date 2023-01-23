import React from 'react'
import './MovieDetails.css'

const IMG_PATH = "https://image.tmdb.org/t/p/original"


const MovieDetails = ({ data }) => {
  return (
    <div className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
          <img src={IMG_PATH + data.poster_path} alt={data.title} />
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            {data.title ? (
              <>
                <h4>{data.title}</h4>
                <p>{data.release_date}</p>
              </>
            ) : (
              <>
                <h4>{data.name}</h4>
                <h4>{data.first_air_date}</h4>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails