import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesLists from './components/MoviesLists'
import {MovieContext} from './components/MovieContext'
import Movie from './components/Movie';
import AddMovie from './components/AddMovie';
const App = () => {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <MovieContext.Provider value={{movies, setMovies}}>
      <Router>
        <Routes>
          <Route path="/"  element={<MoviesLists/>}/>
          <Route path="/:movieId" element={<Movie/>} />
          <Route path="/addMovie" element={<AddMovie/>} />
        </Routes>
      </Router>
      </MovieContext.Provider>
    </div>
  )
}

export default App;