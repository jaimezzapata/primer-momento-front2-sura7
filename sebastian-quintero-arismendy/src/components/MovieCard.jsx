const MovieCard = ({ titulo, director, genero, duracion, poster }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={titulo} />
      <h2>{titulo}</h2>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Género:</strong> {genero}</p>
      <p><strong>Duración:</strong> {duracion}</p>
    </div>
  );
};

export default MovieCard;
