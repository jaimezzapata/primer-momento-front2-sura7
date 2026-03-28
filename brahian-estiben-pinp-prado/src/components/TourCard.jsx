function TourCard({ city, date, venue }) {
  return (
    <div className="card">
      <h2>{city}</h2>
      <p>📅 {date}</p>
      <p>📍 {venue}</p>
    </div>
  )
}

export default TourCard