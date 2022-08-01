import React, { useContext, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { MovieContext } from "./MovieContext";
import { Link, useNavigate } from "react-router-dom";
import Note from "./Note";

const MoviesLists = () => {
  const { movies, setMovies } = useContext(MovieContext);
  let navigate = useNavigate();
  // var mov = [];
  useEffect(() => {
    axios.get("http://localhost:3333/movielists").then((res) => {
      const mvs = res.data;
      setMovies(mvs);
    });
  }, []);

  return (
    <div className="movieLists">
      <table>
        <thead>
          <tr>
            <th>Movie Id</th>
            <th>MovieName</th>
            <th>Lead Actor</th>
            <th>Lead Actress</th>
            <th>Year of Release</th>
            <th>Language</th>
            <th>Collections</th>
            <th>Delete Movie</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((mv) => (
            <tr key={mv.id}>
              <td>{mv.movieId}</td>
              <td
                onClick={() => {
                  navigate(`/${mv.movieId}`, { state: { mov: mv } });
                }}
              >
                {mv.movieName}
              </td>
              <td>{mv.leadActor}</td>
              <td>{mv.leadActree}</td>
              <td>{mv.yearOfRelease}</td>
              <td>{mv.language}</td>
              <td>{mv.collections}</td>
              <td onClick={() => {axios.delete(`http://localhost:3333/movielists/${mv.id}`).then(res => console.log(res))}}>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="link">
      <Link to="/addMovie" id="back">Add Movie Here</Link>
      </div>
      <div className="note">
        <h3>Note:-</h3>
        <Note />
      </div>
    </div>
  );
};

export default MoviesLists;
