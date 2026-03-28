import ProductCard from './components/ProductCard'
import './App.css'
import { products } from './data';

function App() {
return (

    <section className="app-container">
      <h1>Catálogo de Productos</h1>
      <section className="product-list">
        {products.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </section>
    </section>
);
}

export default App
