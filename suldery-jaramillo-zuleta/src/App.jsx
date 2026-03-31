// src/App.jsx
import { destinos } from './data';
import DestinationCard from './components/DestinationCard';
import './App.css';

function App() {
  return (
    <div className="main-wrapper">

      <nav className="navbar">
        <div className="logo">Mundo Sin Fronteras</div>
        <div className="nav-links">
          <span>Vuelos</span> <span>Alojamientos</span> <span>Ofertas</span>
        </div>
      </nav>

  
      <header className="hero">
        <div className="hero-content">
         
<h1 style={{ fontSize: '4rem', fontWeight: '500', color: '#f0d32d', textTransform: 'uppercase', textShadow: '3px 3px 15px rgba(0,0,0,0.7)', margin: '0' }}>
  Viaja más, paga menos.
</h1>

          <p>Aprovecha nuestras ofertas y aventúrate a descubrir nuevos lugares.</p>
          
   
          <div className="search-bar">
            <input type="text" placeholder="Origen" />
            <input type="text" placeholder="Destino" />
            <button className="btn-search">Buscar</button>
          </div>
        </div>
      </header>

      <section className="app-container">
        <h2>Paquetes Turísticos de Temporada</h2>
        <div className="gallery">
          {destinos.map((destino) => (
            <DestinationCard key={destino.id} info={destino} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;