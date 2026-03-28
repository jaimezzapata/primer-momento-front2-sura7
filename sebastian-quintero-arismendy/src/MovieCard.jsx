import React from 'react';

const MovieCard = ({ pelicula }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '10px', textAlign: 'center' }}>
      <img src={pelicula.poster} alt={pelicula.titulo} style={{ width: '100%', borderRadius: '4px' }} />
      <h2>{pelicula.titulo}</h2>
      <p><strong>Director:</strong> {pelicula.director}</p>
      <p><strong>Género:</strong> {pelicula.genero}</p>
      <p><strong>Duración:</strong> {pelicula.duracion}</p>
    </div>
  );
};

export default MovieCard;
