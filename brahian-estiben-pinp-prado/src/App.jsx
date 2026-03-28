import "./App.css"
import TourCard from "./components/TourCard"
import { concerts } from "./data"

function App() {
  return (
    <div className="container">
      <h1>🎤 Pop Band Tour 2026</h1>

      {concerts.map(concert => (
        <TourCard
          key={concert.id}
          city={concert.city}
          date={concert.date}
          venue={concert.venue}
        />
      ))}
    </div>
  )
}

export default App