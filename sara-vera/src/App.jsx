import { conciertos } from "./data";
import TourCard from "./components/TourCard";
import "./App.css"

function App() {
  return (
    <div>
      <h1>Gira de Conciertos</h1>

      {conciertos.map((concierto) => (
        <TourCard
          key={concierto.id}
          ciudad={concierto.ciudad}
          fecha={concierto.fecha}
          recinto={concierto.recinto}
          estadoBoletas={concierto.estadoBoletas}
        />
      ))}
    </div>
  );
}

export default App;
