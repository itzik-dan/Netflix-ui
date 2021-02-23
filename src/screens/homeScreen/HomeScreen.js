import React from "react";
import Banner from "../../banner/Banner";
import Nav from "../../nav/Nav";
import requests from "../../request";
import Row from "../../row/Row";
import "./homeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrendings} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
