import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import MenuBar from "./components/MenuBar";
import MovieCard from './components/MovieCard'
import Mystery from './genres/Mystery'
import Comedy from './genres/Comedy'
import Horror from './genres/Horror'
import Mail from './components/Mail'

const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a65f9b291a589567b929f15ba75cf51a&query=";
const search = "https://api.themoviedb.org/3/search/movie?api_key=a65f9b291a589567b929f15ba75cf51a&query="


function App() {
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
    <Router>
      <Route>
        <MenuBar />
      </Route>
      <Route exact path="/mystery" component={Mystery} />
      <Route exact path="/comedy" component={Comedy} />
      <Route exact path="/horror" component={Horror} />
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
    </Router>
  );
}
export default App;

