import React, { useEffect, useState } from "react";
import { axios, requests } from "../../API";
import { movieType } from "../../Types/types";
import "./banner.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState<movieType>();

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results },
      } = await axios.get(requests.fetchNetFlixOriginal);
      setMovie(results[Math.floor(Math.random() * results.length - 1)]);
      return results;
    };
    fetchData();
  }, []);

  function truncate(str: any, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "${baseURL}${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;
