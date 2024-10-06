import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function StandarLayout() {

    return (
        <>
            <Header>

            </Header>

            <main 
            className="pt-20">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </main>
            <footer className="ml-72 px-9">
                <h2>
                    <footer>Hello I am footer</footer>
                </h2>
            </footer>
        </>
    )
} export default StandarLayout