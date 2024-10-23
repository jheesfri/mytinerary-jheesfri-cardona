import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import StandarLayout from "./Layouts/StandarLayout"
import Home from "./Pages/Home"
import Cities from "./Pages/Cities"
import NoFound from "./Pages/NoFound"
import CityDetail from "./Pages/CityDetail"

const router = createBrowserRouter([
  {
    element: <StandarLayout></StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Home", element: <Home></Home> },
      { path: "/Cities", element: <Cities></Cities> },
      { path: "/CityDetail/:id", element: <CityDetail></CityDetail> },
      { path: "/NoFound", element: <NoFound></NoFound> },

    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
