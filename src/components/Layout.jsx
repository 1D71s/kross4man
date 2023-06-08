import {  Outlet } from "react-router-dom";
import NavBar from "./NavBar/navbar";
import Footer from "./Foother/Footer";

const Layout = () => {
    return (
        <>
            <NavBar/>

            <Outlet/>

            <Footer/>
        </>    
    )
}

export {Layout}