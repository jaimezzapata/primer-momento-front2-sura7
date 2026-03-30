import { movies } from './data/data';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>🎬 Cinema City - Cartelera</h1>
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
