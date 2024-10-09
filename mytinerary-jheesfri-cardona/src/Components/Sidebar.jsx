import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome,FaCity,FaBusAlt } from "react-icons/fa";
import { IoTicketSharp,IoCarSharp } from "react-icons/io5";
import { FaHotel } from "react-icons/fa6";
import { CiBookmarkCheck } from "react-icons/ci";


const routes = [
  { to: "/", text: "Home", icon: <FaHome className="ml-3 mt-1"></FaHome> },
  { to: "/Cities", text: "Cities", icon: <FaCity className="ml-3 mt-1"></FaCity> },
  { to: "/NoFound", text: "Tickets", icon: <IoTicketSharp className="ml-3 mt-1"></IoTicketSharp> },
  { to: "/NoFound", text: "Cars", icon: <IoCarSharp className="ml-3 mt-1"></IoCarSharp> },
  { to: "/NoFound", text: "Hotels", icon: <FaHotel className="ml-3 mt-1"></FaHotel> },
  { to: "/NoFound", text: "Activities", icon: <CiBookmarkCheck className="ml-3 mt-1"></CiBookmarkCheck> },
  { to: "/NoFound", text: "Bus", icon: <FaBusAlt className="ml-3 mt-1"></FaBusAlt> },

]


export default function Sidebar() {
  return (
    <div
      className="hidden z-50 fixed p-3 w-44 h-4/5 ml-8 mt-5 m-1 border-black border rounded-xl md:flex
       flex-col justify-evenly items-star">
      <div>
        <ul className="flex flex-col justify-center items-start">
          {routes.map((r, index) => (
            <li key={index}
              className="m-1 p-1 flex">
              <NavLink to={r.to} className={({ isActive }) => isActive ? "font-serif text-gray-400 text-lg font-bold flex" : "font-bold font-serif text-base hover:text-gray-400 flex"}>{r.text}{r.icon}  </NavLink>
            </li>
          ))}



        </ul>
      </div>
      {/* image no logeado */}
      <div
        className="flex justify-evenly items-end h-full pb-2">
        <p
        className="text-sm mt-4">User Name</p>
        <img src="public/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere.png" alt="User"
            className="w-20" />
      </div>
    </div>
  )
}