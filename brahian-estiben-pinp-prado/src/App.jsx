import React, { useState, useEffect } from "react";
import "./App.css";
import TourCard from "./components/TourCard";
import { tourData } from "./data";

function App() {
  const [current, setCurrent] = useState(0);
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % tourData.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="app">

      <header className="header">
        <h1>LOS PINOS POP</h1>

        <p className="band-description">
          LOS PINOS POP es una banda de pop latino que fusiona ritmos modernos
          con sonidos electrónicos, creando experiencias musicales únicas en
          cada escenario del país.
        </p>
      </header>

      <div className="slider">
        {tourData.map((tour, index) => (
          <div
            key={tour.id}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <TourCard
                city={tour.city}
                venue={tour.venue}
                date={tour.date}
                onClick={() => setSelectedTour(tour)}
              />
            )}
          </div>
        ))}
      </div>

      {/* MODAL PROFESIONAL */}
      {selectedTour && (
        <div className="modal">

          <div className="modal-content">

            <div className="modal-image">
              <img src={selectedTour.image} alt={selectedTour.venue} />
            </div>

            <div className="modal-info">

              <h2>{selectedTour.venue}</h2>
              <h3>{selectedTour.city}</h3>

              <p className="modal-description">
                {selectedTour.description}
              </p>

              <div className="modal-details">

                <div className="detail">
                  <span>Fecha</span>
                  <p>{selectedTour.date}</p>
                </div>

                <div className="detail">
                  <span>Horario</span>
                  <p>{selectedTour.schedule}</p>
                </div>

                <div className="detail">
                  <span>Capacidad</span>
                  <p>{selectedTour.capacity}</p>
                </div>

                <div className="detail">
                  <span>Precio</span>
                  <p>{selectedTour.price}</p>
                </div>

                <div className="detail">
                  <span>Dirección</span>
                  <p>{selectedTour.address}</p>
                </div>

                <div className="detail">
                  <span>Escenario</span>
                  <p>{selectedTour.stageType}</p>
                </div>

              </div>

              <div className="modal-buttons">

                <a
                  href={selectedTour.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="map-btn"
                >
                  Ver ubicación
                </a>

                <button
                  className="close-btn"
                  onClick={() => setSelectedTour(null)}
                >
                  Cerrar
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

      <footer className="footer">
        <h3>Conéctate con la banda</h3>

        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
          <a href="#">Spotify</a>
        </div>

        <p className="copy">© 2026 LOS PINOS POP - Gira Nacional</p>
      </footer>

    </div>
  );
}

export default App;