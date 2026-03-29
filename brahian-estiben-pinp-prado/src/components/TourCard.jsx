import React from "react";

const TourCard = ({ city, venue, date, onClick }) => {
  return (
    <div className="tour-card" onClick={onClick}>
      
      <h2 className="city">{city}</h2>
      <p className="venue">{venue}</p>
      <span className="date">{date}</span>

      <div className="hover-info">
        Ver información de la gira
      </div>

    </div>
  );
};

export default TourCard;