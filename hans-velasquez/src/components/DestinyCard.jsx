import React from "react";
import data from "../data";

function DestinyCard() {
    return (
        <div>
            {data.destinos.map((destino) => (
                <div className="tarjeta" key={destino.id}>
                    <img src={destino.imagen} alt={destino.ciudad} />
                    <h2>{destino.ciudad}, {destino.pais}</h2>
                    <p>Precio: ${destino.precio}</p>
                    <p>Duración: {destino.duracionDias} días</p>
                </div>
            ))}
        </div>
    );
}

export default DestinyCard;