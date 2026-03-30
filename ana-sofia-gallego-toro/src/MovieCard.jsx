function MovieCard({ titulo, director, genero, duracion, poster }) {
  return (
    <div className="card">
      <img src={poster} alt={titulo} />
      <h3>{titulo}</h3>
      <p>🎬 {director}</p>
      <p>🎀 {genero}</p>
      <p>⏰ {duracion}</p>
    </div>
  );
}

export default MovieCard;