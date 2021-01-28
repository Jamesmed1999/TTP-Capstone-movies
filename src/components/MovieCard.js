import React from 'react'

const imag = "https://image.tmdb.org/t/p/w1280"

const setVoteClass = (vote) => {
    if (vote >= 7) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


const MovieCard =
    ({ title, poster_path, overview, vote_average, release_date }) => (
        <div className="movie">
            <img src={imag + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>
                    {vote_average}
                </span>
            </div>

            <div className="movie-over">
                <h3>Description: </h3>
                <p className="word">{overview}</p>
                <p className="word">Releae Date: {release_date}</p>
            </div>


        </div>
    )



export default MovieCard