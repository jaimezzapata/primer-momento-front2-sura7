const TourCard = ({ ciudad, fecha, recinto, estadoBoletas}) => {

    const getStatusStyle = () => {
        if (estadoBoletas === "Disponible") {
            return "bg-green-500/20 text-green-400";
        }
        if (estadoBoletas === "Últimas entradas") {
            return "bg-yellow-500/20 text-yellow-400";
        }
        return "bg-red-500/20 text-red-400";
    };

    return (
        <div className="bg-[#15151D] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-cyan-50">{ciudad}</h3>

                <p className="text-gray-400 text-sm mb-1">📅 {fecha}</p>
                <p className="text-gray-400 text-sm mb-4">🏟️ {recinto}</p>

                <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyle()}`}
                >
                    {estadoBoletas}
                </span>
            </div>
        </div>
    );
};

export default TourCard;