import React from 'react';
import { products } from './data';
import ProductCard from './ProductCard';

function App() {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        TechStore - Ofertas Exclusivas
      </h1>
      <div style={containerStyle}>
        {products.map((producto) => (
          <ProductCard 
            key={producto.id}
            nombreProducto={producto.nombreProducto}
            precio={producto.precio}
            categoria={producto.categoria}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;