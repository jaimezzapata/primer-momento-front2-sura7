import './App.css'
import ProductsCard from './Components/ProductsCard.jsx'
import { products } from './data.js'


function App() {

  return (
    <section>
      {
        products.map((info)=> (
          <ProductsCard info={info} />
        ))
      }
    </section>
  )
}

export default App
