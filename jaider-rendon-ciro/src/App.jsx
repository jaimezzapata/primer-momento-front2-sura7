import './App.css'
import ProductsCard from './Component/card'
import { products } from './data'


function App() {

  return (
    <section>
      {
        users.map((products)=> (
          <Card info={products} />
        ))
      }
    </section>
  )
}

export default App
