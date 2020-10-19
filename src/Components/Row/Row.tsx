import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { axios } from "../../API";
import { Props, movieType } from "../../Types/types";
import "./Row.css";

const movieTrailer = require("movie-trailer");

const baseURL = "https://image.tmdb.org/t/p/original/";

const Row: React.FC<Props> = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    const getData = async () => {
      const {
        data: { results },
      } = await axios.get(fetchURL);
      setMovies(results);
      return results;
    };
    getData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie: movieType) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(`${movie?.name || "any"}`)
        .then((url: any) => {
          const urlParams: any = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error: any) =>
          alert("Sorry there is no trailer Available for this movie")
        );
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie: movieType) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
