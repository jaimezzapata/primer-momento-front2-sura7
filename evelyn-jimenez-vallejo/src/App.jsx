import { destinosTuristicos } from './data';
import DestinosCard from './DestinosCard';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Agencia Mundo Sin Fronteras</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px' 
      }}>
        {destinosTuristicos.map((destino) => (
          <DestinosCard key={destino.id} viaje={destino} />
        ))}
      </div>
    </div>
  );
}

export default App;
