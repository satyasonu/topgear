import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
//https://www.reddit.com/r/reactjs/comments/r1onuc/passing_objects_through_usenavigate/
//This site helped me to navigate
const Movie = () => {
  const { state } = useLocation();
//   console.log(state.mov);
  return (
    <div className="movie">
      <h1>Movie Details</h1>
      <table>
        <tr>
          <td>MovieName :</td>
          <td>{state.mov.movieName}</td>
        </tr>
        <tr>
          <td>Lead Actor :</td>
          <td>{state.mov.leadActor}</td>
        </tr>
        <tr>
          <td>Lead Actress :</td>
          <td>{state.mov.leadActree}</td>
        </tr>
        <tr>
          <td>Year of Release :</td>
          <td>{state.mov.yearOfRelease}</td>
        </tr>
        <tr>
          <td>Language :</td>
          <td>{state.mov.language}</td>
        </tr>
        <tr>
          <td>Collections :</td>
          <td>{state.mov.collections}</td>
        </tr>
      </table>
      <Link to="/">Back</Link>      
    </div>
  );
};

export default Movie;
