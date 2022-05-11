import { useState } from "react";
import moviesArr from "./data/movies.json";

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [movies, setMovies] = useState(moviesArr);

  const filterTopRatedOnly = () => {

    // option 1: we pass the new value
    // setMovies(newListOfMovies);

    // option 2: we pass a function (functional update)
    setMovies((prevValue) => {
      const newListOfMovies = prevValue.filter((movie) => {
        return movie.rating > 8;
      });
      return newListOfMovies;
    });

  }

  return (
    <div className="App">
      <Header numberOfMovies={movies.length} />

      <div className="controls">
        <button onClick={filterTopRatedOnly}>Display Top Rated Only</button>
      </div>

      <Main listOfMovies={movies} />
      <Footer />
    </div>
  );
}

export default App;
