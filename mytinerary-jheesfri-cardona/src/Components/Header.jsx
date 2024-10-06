import React from "react"
import { NavLink } from "react-router-dom"

const routes = [
  { to: "/", text: "Home" },
  { to: "/Cities", text: "Cities" },

]
export default function Header() {

  return (
    <header
      className="w-screen  p-2 fixed mb-20 bg-white">
      <div
        className="w-full grid grid-cols-2">
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
