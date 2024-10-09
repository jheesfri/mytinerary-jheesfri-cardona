//                 IMPORTS
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

//       COMPONENTE 

function StandarLayout() {
    return (
        <>
            <Header>
            </Header>
            <main className="pt-20"><Sidebar></Sidebar>
                <div className="md:ml-52 pt-5 px-9"><Outlet></Outlet></div>
            </main>
            <footer className="md:ml-52 px-9"><Footer></Footer></footer>
        </>
    )
} export default StandarLayout