import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const CityDetail = () => {
    const [city, setCity] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()



    useEffect(() => {

        const fetchCity = async () => {

            try {
                const response = await fetch(`http://localhost:8080/mytinerary/cities/search?id=${id}`)

                const data = await response.json() // convierto respuesta en formato json() 
                console.log(data.response)


                setCity(data.response) // actualizo el estado de Ciudades
            } catch (error) {
                console.error('error fetching cities: ', error) // error si el fetch no es exitoso

            }

        }
        fetchCity() // ejecuto la funcion eso hace que cada que la dependencia cambie se ejecute d enuevo el fetch
    }, [id])

    return (
        <div className="p-4 w-full h-64 flex flex-col justify-center items-center">
            <div>
                {city.map((c,index) => (
                    <div key={index}>
                        <img
                            src={c.image}
                            alt={c.name}
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <h1 className="text-2xl font-bold my-3">Detail City: {c.name}</h1>
                    </div>
                ))}

                <p className="text-center">Under construction...</p>
            </div>
            <button
                onClick={() => navigate('/Cities')} // Redirigir a la lista de ciudades
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
                Back to cities
            </button>
        </div>
    )
}
export default CityDetail