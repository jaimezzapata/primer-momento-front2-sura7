import { destinos } from './data';
import DestinationCard from './DestinationCard';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Mundo Sin Fronteras - Galería de Viajes</h1>
      <div className="gallery">
        {destinos.map((viaje) => (
          <DestinationCard 
            key={viaje.id} 
            {...viaje} // Esto pasa todas las propiedades como props
          />
        ))}
      </div>
    </div>
  );
}

export default App;