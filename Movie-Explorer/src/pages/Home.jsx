import { useState, useEffect, useRef } from "react";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, SetMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const inputRef = useRef();

  const fetchMovies = async (query) => {
    setLoading(true);
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
    );
    const data = await res.json();
    console.log(data);
    SetMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) fetchMovies(query);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className="searchInput"
          placeholder="Search for a movie..."
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
