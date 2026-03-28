// src/App.jsx
import { destinos } from './data';
import DestinationCard from './components/DestinationCard';

function App() {
  return (
    <div className="app-container">
      <h1>Mundo Sin Fronteras - Galería de Destinos</h1>
      <div className="gallery">
        {destinos.map((destino) => (
          <DestinationCard key={destino.id} info={destino} />
        ))}
      </div>
    </div>
  );
}

export default App;
