import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: "/", text: "Home" },
  { to: "/Cities", text: "Cities" },

]

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-5 flex rounded">
      <div className="container mx-auto px-4 md:flex md:justify-around md:flex-wrap grid grid-cols-3">
        {/* Información del sitio */}
        <div className="mb-2">
          <h2 className="text-2xl text-center mb-4 font-base md:text-bold">MyTinerary</h2>
          <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
        </div>

        {/* Menú de navegación */}
        <div className="mb-2">
          <h3 className="text-xl text-center font-semibold mb-4">Menu</h3>
          <ul className="flex flex-col justify-center items-center">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/Cities" className="hover:underline">Cities</NavLink></li>
          </ul>
        </div>

        {/* Información adicional */}
        <div className="mb-2">
          <h3 className="text-xl text-center fo nt-semibold mb-4">Follow us</h3>
          <div className="flex flex-col justify-center items-center">
            <NavLink to="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={24} className="hover:text-blue-500" />
            </NavLink>
            <NavLink to="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter size={24} className="hover:text-blue-400" />
            </NavLink>
            <NavLink to="#" target="_blank" rel="noreferrer">
              <FaInstagram size={24} className="hover:text-pink-500" />
            </NavLink>
          </div>
        </div>

        {/* Dirección o mapa */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Contact</h3>
          <p>123 MyTinerary Ave, Travel City, World</p>
        </div>
        <div className="bg-gray-900 text-center py-4">
          <p>&copy; 2024 MyTinerary. All rights reserved.</p>
        </div>
      </div>

      {/* Footer final */}

    </footer>
  )
}
