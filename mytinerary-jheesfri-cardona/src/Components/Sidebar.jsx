import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Sidebar.css';
import { FaHome } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { IoCarSharp } from "react-icons/io5";
import { FaHotel } from "react-icons/fa6";
import { CiBookmarkCheck } from "react-icons/ci"
import { FaBusAlt } from "react-icons/fa";
const routes = [
  { to: "/", text: "Home", icon: <FaHome className="ml-3 mt-1"></FaHome> },
  { to: "/Cities", text: "Cities", icon: <FaCity className="ml-3 mt-1"></FaCity> },
  { to: "/", text: "Tickets", icon: <IoTicketSharp className="ml-3 mt-1"></IoTicketSharp> },
  { to: "/", text: "Cars", icon: <IoCarSharp className="ml-3 mt-1"></IoCarSharp> },
  { to: "/", text: "Hotels", icon: <FaHotel className="ml-3 mt-1"></FaHotel> },
  { to: "/", text: "Activities", icon: <CiBookmarkCheck className="ml-3 mt-1"></CiBookmarkCheck> },
  { to: "/", text: "Bus", icon: <FaBusAlt className="ml-3 mt-1"></FaBusAlt> },

]


export default function Sidebar() {
  return (
    <div
      className="sidebar ml-8 mt-5 m-1 border-black border rounded-xl flex
       flex-col justify-evenly items-star">
      <div>
        <ul className="flex flex-col justify-center items-start">
          {routes.map((r, index) => (
            <li key={index}
              className="m-1 p-1 flex">
              <NavLink to={r.to} className={({ isActive }) => isActive ? "font-serif text-gray-400 text-xl font-bold flex" : "font-bold font-serif text-lg hover:text-gray-400 flex"}>{r.text}{r.icon}  </NavLink>
            </li>
          ))}



        </ul>
      </div>
      <div
        className="flex fle-col  justify-center items-end h-full">
        <p
        className="mb-3">User Name</p>
        <img src="public/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere.png" alt="User"
            className="w-24" />
      </div>
    </div>
  )
}