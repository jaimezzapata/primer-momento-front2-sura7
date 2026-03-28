
import './App.css'

import { destinos } from './data';
import DestinationCard from './components/DestinationCard';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mundo Sin Fronteras - Paquetes Turísticos</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {destinos.map((viaje) => (
          <DestinationCard key={viaje.id} info={viaje} />
        ))}
      </div>
    </div>
  );
}

export default App;
