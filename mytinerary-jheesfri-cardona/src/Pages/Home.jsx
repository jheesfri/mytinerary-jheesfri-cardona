import React from "react";
import CallToAction from "../Components/CallToAction";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
    const cities = [
        { name: 'New York', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cUuNTp1SUCUPxNIUO4nT5ja_BIhcdwY9WQ&s' },
        { name: 'Paris', img: 'https://a.eu.mktgcdn.com/f/100004519/N2BB4ohwclor2uLoZ7XMHgJmxOZaMOokMdQqqXQAq3s.jpg' },
        { name: 'London', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLhqqEOOBzvZ44xKRuDR_bVEtpsMLWGh78Q&s' },
        { name: 'Tokyo', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxZklIzCzQxU31wVWpd3QAUPkQmPxv8EFqQ&s' },
        { name: 'Sydney', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rFqD9WZutvjfKICbRYMMQbcspEsui54K3g&s' },
        { name: 'Rome', img: 'https://cdn2.civitatis.com/italia/roma/galeria/colosseum-aerial-view.jpg' },
        { name: 'Berlin', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwMwNolrRnxwTC1R84Q7G8GzsUtA7uwn_oA&s' },
        { name: 'Dubai', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NLSCiy64lvxZqXCwVjUHfoE_APJw2tWAfw&s' },
        { name: 'Los Angeles', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oeGWzGPjeJqj-dhJMZRTW7C5IE-KbKUG_A&s' },
        { name: 'Hong Kong', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSy3reEn_d9l1NNXk8W44uW_tn-rGrDAFaw&s' },
        { name: 'Barcelona', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkIEdnS0Ouk8ajir-ZQk3NrTHhpa_X9StZw&s' },
        { name: 'Toronto', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-MRuvXfzeh57x0oub9Yq-JIrOLG7qjVCKA&s' },
    ]

    const groupedCities = [];
    for (let i = 0; i < cities.length; i += 4) {
        groupedCities.push(cities.slice(i, i + 4));
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
                                    <img src={city.img} alt={city.name} className="rounded-lg h-full w-full object-cover" />
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