import TourCard from './assets/components/TourCard.jsx'
import { conciertos } from './seed.js'
import './App.css'

function App() {
  

  return (
   <section>
    {
      conciertos.map((concierto)=>(
        <TourCard key={concierto.id} info={concierto} />
      ))
    }
   </section>
  )
}

export default App