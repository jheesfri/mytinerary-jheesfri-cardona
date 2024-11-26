import React, { useEffect } from "react";
import CallToAction from "../Components/CallToAction";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

export default function Home() {
    const token = localStorage.getItem('token')
    const {cities, loading, error} = useSelector((state) => state.cities)
    console.log(cities);
    const dispatch = useDispatch()

   if(loading){
    return <h1>Loading...</h1>}

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