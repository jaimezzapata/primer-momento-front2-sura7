import { movies } from './data';
import MovieCard from './components/MovieCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Cartelera Cinema City</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;