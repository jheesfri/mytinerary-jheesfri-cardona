import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaHome, FaCity, FaBusAlt, FaBars } from "react-icons/fa";
import { IoTicketSharp, IoCarSharp } from "react-icons/io5";
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
export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  function openOrClosedMenu() {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <header
      className="w-screen p-2 fixed z-50 bg-white">
      <div
        className="w-full grid grid-cols-3 md:grid-cols-2">
        {/* MENU HAMBURGUESA */}
        <div
          className="md:hidden">
          {isOpenMenu ?
            <> 
              <div
                className="fixed top-0 left-0 z-50 bg-white w-44  border border-black rounded-lg ml-5 mt-5">
                  <div
                  className="pe-3 pt-3 flex justify-end">
                  <button
                   onClick={() => openOrClosedMenu()}><FaBars></FaBars></button>
                  </div>
                <ul className="flex flex-col justify-center items-start">
                  {routes.map((r, index) => (
                    <li key={index}
                      className="m-1 p-1 flex">
                      <NavLink to={r.to} className={({ isActive }) => isActive ? "font-serif text-gray-400 text-xl font-bold flex" : "font-bold font-serif text-lg hover:text-gray-400 flex"}>{r.text}{r.icon}  </NavLink>
                    </li>
                  ))}
                </ul>
                {/* image no logeado */}
                <div
                  className="flex justify-evenly items-center pb-4">
                  <p  className="text-sm mt-2">User Name</p>
                  <img src="public/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere.png" alt="User"
                    className="w-20" />
                </div>
              </div></>
            :
            <button onClick={() => openOrClosedMenu()}><FaBars className="w-12 h-8 ml-6 mt-6"></FaBars></button>}
          <div>
            { }

          </div>
        </div>
        <div
          className="flex justify-start items-center">
          <NavLink to="/">
            <img
              className="w-60 h-20 object-cover"
              src="public/png-transparent-airplane-icon-a5-computer-icons-flight-airplane-angle-hand-monochrome-thumbnail-removebg-preview-removebg-preview.png"
              alt="logo" />
          </NavLink>

        </div>
        <div
          className="flex justify-end items-center">
          <h5>User Name</h5>
          <img src="public/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere.png" alt="User"
            className="w-24" />
        </div>
      </div>

    </header>


  )
}
