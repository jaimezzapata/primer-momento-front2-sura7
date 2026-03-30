import './MovieCard.css'; 

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img 
        src={movie.poster} 
        alt={`Póster de ${movie.titulo}`}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.titulo}</h3>
        <p className="movie-director">🎬 Director: {movie.director}</p>
        <p className="movie-genre">🎭 Género: {movie.genero}</p>
        <p className="movie-duration">⏱️ Duración: {movie.duracion}</p>
      </div>
    </div>
  );
};

export default MovieCard;