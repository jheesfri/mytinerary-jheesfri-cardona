import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { FaPlaneUp } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import { setCities, setSearch } from "../store/actions/citiesAction"



export default function Cities() {
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const cities = useSelector((state) => state.cities.cities)
    const search = useSelector((state) => state.cities.search)

    const navigate = useNavigate()

    useEffect(() => {

        const fetchCities = async () => {

            try {
                const response = await fetch(`http://localhost:8080/mytinerary/cities/search?name=${search}`)

                if (!response.ok) { // si el servidor no responde se muestra error
                    throw new error('Network error')
                }

                const data = await response.json() // convierto respuesta en formato json() 
                console.log(data.response)
                if (data.message) {
                    setMessage(data.message)
                  dispatch(setCities([]))
                } else {
                    dispatch (setCities(data.response))
                    setMessage('')
                }

            } catch (error) {
                console.error('error fetching cities: ', error) // error si el fetch no es exitoso

            }

        }
        fetchCities() // ejecuto la funcion eso hace que cada que la dependencia cambie se ejecute d enuevo el fetch
    }, [search]) // dependencia 


    function goToBack() {
        navigate(-1)
    }
    function goToNext() {
        navigate(+1)
    }
    function detailCity(id) {
        navigate(`/CityDetail/${id}`)
    }

    return (
        <div className="h-auto flex flex-col items-center my-3">
            <h1 className="text-3xl m-3">you find the best deals in your favorite city</h1>
            <div>
                <div className="m-3 flex justify-center">
                    {/* barra de busquedad */}
                    <input
                    type="text" 
                    value={search} 
                    onChange={(e) => dispatch(setSearch(e.target.value))} placeholder="Search" className="w-11/12 p-2 rounded-lg bg-white bg-opacity-70 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {cities.length === 0 ?
                    <div>
                        <h2 className="text-lg font-semibold my-10">No cities found matching your search.</h2>
                    </div> :
                    <div className="flex flex-wrap" >
                        {/* contenedor ciudades */}
                        {cities.map((city, index) => (
                            <button
                                key={index}
                                onClick={() => detailCity(city.id)}>
                                <div className="w-32h-32 m-3  bg-black bg-opacity-95 shadow-md rounded-xl overflow-hidden">
                                    <div className="rounded-xl">
                                        <img className="w-60 h-52 object-cover rounded-xl" src={city.image} alt={city.name} />
                                    </div>

                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold text-white">{city.name}</h2>
                                    </div>
                                </div>
                            </button>
                        ))}


                    </div>}
            </div>

            <div
                className="flex justify-between items-end w-full h-full">
                <button
                    className="flex items-center p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"

                    onClick={() => goToNext()}>
                    <FaArrowRight className="mr-2" /> {/* flecha hacia la izquierda */}
                    <FaPlaneUp /> {/* icono de avion */}
                    <span className="ml-2">Next</span> {/* texto del boton */}
                </button>
                <button
                    className="flex items-center p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"

                    onClick={() => goToBack()}>
                    <FaArrowLeft className="mr-2" /> {/* Flecha hacia la izquierda */}
                    <FaPlaneUp /> {/* Icono de avión */}
                    <span className="ml-2">Back</span> {/* Texto del botón */}
                </button>
            </div>
        </div >
    )
}