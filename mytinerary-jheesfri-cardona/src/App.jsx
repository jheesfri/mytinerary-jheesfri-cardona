import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import StandarLayout from "./Layouts/StandarLayout"
import Home from "./Pages/Home"
import Cities from "./Pages/Cities"

const router = createBrowserRouter([
  {
    element: <StandarLayout></StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Home", element: <Home></Home> },
      { path: "/Cities", element: <Cities></Cities> },

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
