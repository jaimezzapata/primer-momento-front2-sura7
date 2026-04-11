import { useState } from 'react';
import ProductCard from './components/ProductCard'
import './App.css'
import { products } from './data';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.nombreProducto.toLowerCase().includes(searchTerm.toLowerCase())
  );
return (
  <><div className="app-main-wrapper">

    <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    <main className="app-container">
      <h1>Productos Disponibles</h1>

      <section className="product-list">
        {filteredProducts.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </section>

      {filteredProducts.length === 0 && (
        <p className="no-results">No se encontraron productos</p>
      )}
    </main>
  </div>
  <div className="app-main-wrapper">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="app-container">
        
      </main>

      <Footer /> 
    </div>
  
  
  </>
);
}

export default App
