import React from "react";
import "./App.css";
import { Row, Banner, Nav } from "./Components";
import { requests } from "./API/index";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetFlixOriginal}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchURL={requests.fetchTrending}
        isLargeRow={false}
      />
      <Row
        title="Top Rated"
        fetchURL={requests.fetchTopRated}
        isLargeRow={false}
      />
      <Row
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow={false}
      />
      <Row
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        isLargeRow={false}
      />
      <Row
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title="Documentaries Movies"
        fetchURL={requests.fetchDocumentaries}
        isLargeRow={false}
      />
    </div>
  );
};

export default App;
