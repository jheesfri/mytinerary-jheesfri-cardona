import React from "react";

export default function Home() {

    return (
        <div
            className="h-scree px-9">
            <div // Call to Action
                className="ml-72 h-80 bg-[url('https://www.walkonplanet.com/wp-content/uploads/2018/12/cropped-australia-1281935_1920-4.webp')] bg-cover bg-center">
                <div 
                    className=" bg-black bg-opacity-50 p-5 w-full h-full text-serif text-white font-bold flex flex-col gap-5 justify-center items-center">
                        <h1 
                        className="text-2xl">MyTinerary</h1>
                        <p 
                        className="text-lg">Find your perfect trip, designed by insiders who know and love their cities!</p>
                        <button
                        className="bg-yellow-500">SUSCRIBETE</button>
                </div>
            </div>
            <div // Carrusel 
                className="ml-72">
                Hello I am the page home
            </div>
        </div>
    )
}