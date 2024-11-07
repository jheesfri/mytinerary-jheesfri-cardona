import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { setCitySeleted } from "../store/actions/citiesAction"
import userNotLogin from "../../public/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere.png"

const CityDetail = () => {
    const dispatch = useDispatch()
    const city = useSelector((state) => state.cities.citySelect)
    const itineraries = city.itineraries
    const { id } = useParams()
    const navigate = useNavigate()
    const [showMore, setShowMore] = useState(false);

    const handleViewMoreClick = (itineraryId) => {
        setShowMore(prevId => (prevId === itineraryId ? null : itineraryId));
    };



    useEffect(() => {

        const fetchCity = async () => {

            try {
                const response = await fetch(`http://localhost:8080/mytinerary/cities/search?id=${id}`)

                const data = await response.json() // convierto respuesta en formato json() 
                console.log(data.response)


                dispatch(setCitySeleted(data.response[0])) // actualizo el estado de Ciudades
            } catch (error) {
                console.error('error fetching cities: ', error) // error si el fetch no es exitoso

            }

        }
        fetchCity() // ejecuto la funcion eso hace que cada que la dependencia cambie se ejecute d enuevo el fetch
    }, [id])
    console.log(city);

    return (
        <div className=" w-full h-full flex flex-col justify-center items-center border ">
            <h1 className="text-2xl font-bold my-3">Detail City: {city.name}</h1>
            <div className="w-full h-96 p-1 flex flex-col justify-center items-center">

                <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-none object-center"
                />

            </div>

            <div className="w-11/12">
                <h2 className="text-xl text-center font-bold my-3">Itineraries</h2>
                <div className="flex">
                    {Array.isArray(city?.itineraries) && city.itineraries.length > 0 ? (
                        city.itineraries.map((itinerary, i) => (
                            <div key={i} className="border border-gray-400 rounded-lg m-1 p-1 w-72 flex">
                                <div className="w-1/2 flex flex-col justify-between">
                                    <p>{itinerary.name}</p>
                                    <img src={itinerary.image ? itinerary.image : userNotLogin} alt={itinerary.name}
                                        className="w-12" />
                                    {/* // imagen de userItinerary */}
                                    <div className="flex justify-end items-end rounded-lg">
                                        <button className="bg-gray-300 w-24 rounded-lg" onClick={()=>handleViewMoreClick(itinerary._id)}>
                                        {showMore === itinerary._id ? "View less" : "View more"}</button>
                                        {showMore && (
                                            <div>
                                                <h3>Activities & Comments</h3>
                                                <p>Under construction</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div>

                                    <p>Price: {itinerary.price}</p>
                                    <p>Duration: {itinerary.duration}</p>
                                    <p>Likes: {itinerary.likes}</p>
                                    <p>Hashtags: {itinerary.hashtags.map((hashtag) => `${hashtag}`).join(' ')}</p>


                                </div>


                            </div>
                        ))
                    ) : (
                        <p className="text-center text-3xl">No itineraries available.</p>
                    )}
                </div>
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