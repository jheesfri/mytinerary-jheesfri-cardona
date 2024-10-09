import React from "react"
import { useNavigate } from "react-router-dom"
import { FaArrowRight,FaArrowLeft} from 'react-icons/fa'
import { FaPlaneUp } from "react-icons/fa6"

export default function Cities() {

    const navigate = useNavigate()

    function goToBack() {
        navigate(-1)
    }
    function goToNext() {
        navigate(+1)
    }
    return (
        <div
            className="h-64 flex flex-col items-center">
            <h1
            className="text-3xl">Hello I am the page cities</h1>

           <div
           className="flex justify-between items-end w-full h-full">
           <button
                className="flex items-center p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"

                onClick={() => goToNext()}>
                <FaArrowRight className="mr-2" /> {/* Flecha hacia la izquierda */}
                <FaPlaneUp /> {/* Icono de avión */}
                <span className="ml-2">Next</span> {/* Texto del botón */}
            </button>
           <button
                className="flex items-center p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"

                onClick={() => goToBack()}>
                <FaArrowLeft className="mr-2" /> {/* Flecha hacia la izquierda */}
                <FaPlaneUp /> {/* Icono de avión */}
                <span className="ml-2">Back</span> {/* Texto del botón */}
            </button>
           </div>
        </div>
    )
}