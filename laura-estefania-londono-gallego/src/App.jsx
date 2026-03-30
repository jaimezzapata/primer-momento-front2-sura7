import { useState } from 'react'
import reactLogo from './assets/react.svg'
// src/App.jsx
import { productosTecnologicos } from './data';
import ProductCard from './ProductCard';
import './App.css';

function App() {
  return (
    <main className="shop-container">
      <header className="header">
        <h1>TechStore</h1>
        <p>Ofertas exclusivas en tecnología</p>
      </header>

      <section className="product-grid">
        {productosTecnologicos.map((producto) => (
          <ProductCard 
            key={producto.id}
            nombre={producto.nombreProducto}
            precio={producto.precio}
            categoria={producto.categoria}
            imagen={producto.imagen}
          />
        ))}
      </section>
    </main>
  );
}

export default App;