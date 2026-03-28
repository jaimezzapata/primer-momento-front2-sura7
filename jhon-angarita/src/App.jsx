import ProductCard from './components/ProductCard'
import './App.css'
import { products } from './data';

function App() {
return (
 <section>
    <h1>Productos Disponibles</h1>
  <section>
     {
         products.map((producto) => (
          <ProductCard producto={producto} />
        ))
      }
  </section>
     
    </section>
);
}

export default App
