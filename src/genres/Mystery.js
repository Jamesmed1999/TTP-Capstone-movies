import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Mail from '../components/Mail'
import MenuBar from "../components/MenuBar"
import MovieCard from "../components/MovieCard"

const url = "https://api.themoviedb.org/3/discover/movie?api_key=a65f9b291a589567b929f15ba75cf51a&with_genres=9648"
const search = "https://api.themoviedb.org/3/search/movie?api_key=a65f9b291a589567b929f15ba75cf51a&query="

export default function Action() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearch] = useState('')

    useEffect(() => {
        getMovies(url)
    }, [])

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
            })
    }


    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (searchTerm) {
            getMovies(search + searchTerm)
            setSearch('')
        }
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <Router>
                <Route>
                    <MenuBar />
                </Route>
            </Router>
            <Mail/>
            <header>
                <form onSubmit={handleOnSubmit}>
                    <input
                        className="search"
                        type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleOnChange}
                    />

                </form>
            </header>

            <div className="movie-container">
                {movies.length > 0 &&
                    movies.map((movie) => <MovieCard key={movie.id}
                        {...movie} />)}
            </div>
        </>
    )
}