import { peliculas } from "./data";
import MovieCard from "./MovieCard";

function App() {
  return (
    <div className="app">
      <h1 className="titulo">🎀 Cinema City 🎬</h1>

      <div className="contenedor">
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