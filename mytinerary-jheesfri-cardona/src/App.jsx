import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import StandarLayout from "./Layouts/StandarLayout"
import Home from "./Pages/Home"
import Cities from "./Pages/Cities"
import NoFound from "./Pages/NoFound"
import CityDetail from "./Pages/CityDetail"
import SignUp from "./Pages/SignUp"
import SignIn from "./Pages/SignIn"
import PrivateRoute from "./Components/privateRoute"
import  SignRoute  from "./Components/SignRoute"
import { useDispatch } from "react-redux"
import {setUser} from "./store/actions/authAction.js"


const router = createBrowserRouter([
  {
    element: <StandarLayout></StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/Home", element: <Home></Home> },
      { path: "/Cities", element: <PrivateRoute><Cities></Cities></PrivateRoute> },
      { path: "/SignUp", element: <SignUp></SignUp> },
      { path: "/SignIn", element: <SignRoute><SignIn></SignIn></SignRoute> },
      { path: "/CityDetail/:id", element: <CityDetail></CityDetail> },
      { path: "/NoFound", element: <NoFound></NoFound> },

    ]
  }
])



const loginWithToken = async (token) => {
  console.log('se monto app')
  try {
    console.log("Se ejecuto Login With Token");

    const response = await axios.get(
      "http://localhost:8080/mytinerary/auth/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.response;
  } catch (error) {
    console.log("error", error);
  }
};


function App() {
 

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  if(token){
    loginWithToken(token).then((user)=>{
      dispatch(setUser({user, token}));
    })
  } 

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
