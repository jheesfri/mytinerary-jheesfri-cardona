import React, { useEffect } from "react";
import CallToAction from "../Components/CallToAction";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useSelector, useDispatch } from "react-redux";
import { setCities } from "../store/actions/citiesAction";

export default function Home() {

    const cities = useSelector((state) => state.cities.cities)
    console.log(cities);
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchCities = async () => {

            try {
                const response = await fetch('http://localhost:8080/mytinerary/cities/all')

                if (!response.ok) { // si el servidor no responde se muestra error
                    throw new error('Network error')
                }

                const data = await response.json() // convierto respuesta en formato json() 
                console.log(data.response)
                if (data.message) {
                    dispatch(setCities([]))
                } else {
                    dispatch(setCities(data.response))
                }

            } catch (error) {
                console.error("Fetch error:", error);
            }
        }
        fetchCities()
    }, [])
   

    const groupedCities = []

    for (let i = 0; i < cities.length; i += 4) {
        groupedCities.push(cities.slice(i, i + 4));
        //funcion para poner de a 4 ciudades en cada carrusel 
    }
    

    return (
        <div>
            <CallToAction></CallToAction>
            {/* carrusel */}
            <div className="h-96">
                <h2 className="text-center text-3xl font-bold my-4">Popular MyTineraries</h2>
                <Carousel
                    autoPlay
                    interval={3000}
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                >

                    {groupedCities.map((group, index) => (
                        <div key={index} className="flex justify-center space-x-4 ">
                            {group.map((city, i) => (
                                <div key={i} className="w-1/4 relative h-72">
                                    <img src={city.image} alt={city.name} className="rounded-lg h-full w-full object-cover" />
                                    <p className="legend text-center text-lg font-semibold">{city.name}</p>
                                </div>
                            ))}
                        </div>
                    ))}

                </Carousel>
            </div>
        </div>
    )
}