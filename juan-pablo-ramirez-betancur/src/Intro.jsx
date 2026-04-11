import React from 'react'

const Intro = () => {
    return (
        <section className="h-[80vh] flex items-center justify-center text-center relative h-[80vh] bg-[url('/vishnu-r-nair-m1WZS5ye404-unsplash.jpg')] bg-cover bg-center px-6">
        
            <div className="max-w-3xl">
            
            
                <h1 className="text-[800px] md:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
                GIRA 2026
                </h1>

            
                <p className="text-[#000000] text-7xl text-lg md:text-xl mb-8">
                Vive la experiencia en vivo. Descubre todas las fechas de nuestra gira nacional.
                </p>

            
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                Explorar Fechas
                </button>

            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0B0B0F]"></div>
        </section>
    );
}

export default Intro
