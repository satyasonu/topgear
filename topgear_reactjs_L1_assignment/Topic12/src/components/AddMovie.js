import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";
// import axios from "axios";

const AddMovie = () => {
  const [movieName, setmovieName] = useState("");
  const [leadActor, setLeadActor] = useState("");
  const [leadActree, setLeadActree] = useState("");
  const [yearOfRelease, setYearOfRelease] = useState("");
  const [language, setLanguage] = useState("");
  const [collections, setCollections] = useState("");
  const [movieId, setMovieId] = useState("");
  function addMovie(e) {
    let items = {
      movieId,
      movieName,
      leadActor,
      leadActree,
      yearOfRelease,
      language,
      collections,
    };
    // console.log(items);
    e.preventDefault();
    axios
      .post("http://localhost:3333/movielists", items)
      .then((res) => console.log(res));
  }

  return (
    <div className="addmovie">
      <h1>Add Movie Form</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>
                  Movie Id: <span aria-label="required">*</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Movie ID"
                  value={movieId}
                  onChange={(e) => {
                    setMovieId(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  Movie Name: <span aria-label="required">*</span>
                </label>
              </td>
              <td>
                <input
                  id="moviename"
                  type="text"
                  name="moviename"
                  placeholder="Movie Name"
                  value={movieName}
                  onChange={(e) => {
                    setmovieName(e.target.value);
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>
                  Lead Actor: <span aria-label="required">*</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Lead Actor"
                  value={leadActor}
                  onChange={(e) => {
                    setLeadActor(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Lead Actress</label>
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Lead Actress"
                  value={leadActree}
                  onChange={(e) => {
                    setLeadActree(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Year of Release</label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  placeholder="Year of Release"
                  value={yearOfRelease}
                  onChange={(e) => {
                    setYearOfRelease(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Language</label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  placeholder="Language"
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>Collections</label>
              </td>
              <td>
                <input
                  type="tetx"
                  placeholder="Collections"
                  value={collections}
                  onChange={(e) => {
                    setCollections(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="Submit" onClick={addMovie}>
          Add Movie
        </button>
      </form>
      <div className="link">
        <Link to="/" id="back">
          Back
        </Link>
      </div>
    </div>
  );
};

export default AddMovie;
