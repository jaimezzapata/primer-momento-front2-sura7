import { peliculas } from "./data";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div>
      <h1>🎬 Cartelera Cinema City</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {peliculas.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            titulo={pelicula.titulo}
            director={pelicula.director}
            genero={pelicula.genero}
            duracion={pelicula.duracion}
            poster={pelicula.poster}
          />
        ))}
      </div>
    </div>
  );
}

export default App;