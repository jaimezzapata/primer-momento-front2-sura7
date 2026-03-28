import { cartelera } from './data.js';
import MovieCard from './MovieCard.jsx';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Cartelera de Cinema City</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cartelera.map((peli) => (
          <MovieCard key={peli.id} pelicula={peli} />
        ))}
      </div>
    </div>
  );
}

export default App;