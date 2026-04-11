import { useEffect, useState } from "react"; 
import TourCard from "./TourCard";
import getTours from "./getTours";

const Tour = () => {
    
    const [tours, setTours] = useState([]);
    
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getTours(); 
                setTours(data); 
            } catch (err) {
                setError(err.message);
            }
        };

        loadData();
    }, []); 

    if (error) return <p>Error: {error}</p>;

    return (
        <section className="grid grid-cols-3 gap-6 p-6 relative py-16 bg-[url('/yvette-de-wit-NYrVisodQ2M-unsplash.jpg')] bg-cover bg-center">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-[#0B0B0F]"></div>
            {tours.map((item) => (
                <TourCard
                    key={item.id}
                    ciudad={item.ciudad}
                    fecha={item.fecha}
                    recinto={item.recinto}
                    estadoBoletas={item.estadoBoletas}
                />
            ))}
        </section>
    );
};

export default Tour;