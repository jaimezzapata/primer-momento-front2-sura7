// src/ProductCard.jsx
import React from 'react';

const ProductCard = ({ nombreProducto, precio, categoria, imagen }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };

  const imageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '4px'
  };

  return (
    <div style={cardStyle}>
      <img src={imagen} alt={nombreProducto} style={imageStyle} />
      <h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{nombreProducto}</h3>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>{categoria}</p>
      <p style={{ fontWeight: 'bold', color: '#2c3e50', fontSize: '1.1rem' }}>
        ${precio}
      </p>
      <button style={{ 
        backgroundColor: '#007bff', 
        
        color: 'white', 
        border: 'none', 
        padding: '8px 16px', 
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;


 // Commit 2 jeje 