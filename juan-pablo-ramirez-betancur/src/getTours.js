const getTours = async () => {
    const response = await fetch("/data.json");

    if (!response.ok) {
        throw new Error("Error al obtener los datos");
    }
    
    const data = await response.json();
    return data;

};

export default getTours;