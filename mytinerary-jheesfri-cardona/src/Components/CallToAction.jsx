import React from "react";
import { MdOutlineLocalAirport } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
    const navigate = useNavigate()
    
    function goToDetails() {
        navigate ("/Cities")
    }
    return (
        <div
            className="h-60 bg-[url('https://www.walkonplanet.com/wp-content/uploads/2018/12/cropped-australia-1281935_1920-4.webp')] bg-cover bg-center">
            <div
                className="bg-black bg-opacity-30 w-full h-full text-serif text-white font-bold flex flex-col justify-center items-center">
                <h1
                    className="text-2xl font-bold mb-4">MyTinerary</h1>
                <p
                    className="text-lg text-center mb-6">Find your perfect trip, designed by insiders who know and love their cities!</p>
                <button
                    onClick={() => goToDetails()}
                    className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 w-48">
                    Explore Cities <MdOutlineLocalAirport className="ml-4" size={24} />
                </button>
            </div>
        </div>
    )
}