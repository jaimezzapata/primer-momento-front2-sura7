function MovieCard({ titulo, director, genero, duracion, poster }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", width: "200px" }}>
      <img src={poster} alt={titulo} width="100%" />
      <h3>{titulo}</h3>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Género:</strong> {genero}</p>
      <p><strong>Duración:</strong> {duracion}</p>
    </div>
  );
}
