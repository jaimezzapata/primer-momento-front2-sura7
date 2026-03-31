import React from 'react'

const Intro = () => {
    return (
        <section className="h-[80vh] flex items-center justify-center text-center bg-gradient-to-b from-black via-[#0B0B0F] to-black px-6">
        
            <div className="max-w-3xl">
            
            
                <h1 className="text-[800px] md:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
                GIRA 2026
                </h1>

            
                <p className="text-gray-300 text-lg md:text-xl mb-8">
                Vive la experiencia en vivo. Descubre todas las fechas de nuestra gira nacional.
                </p>

            
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                Explorar Fechas
                </button>

            </div>

        </section>
    );
}

export default Intro
