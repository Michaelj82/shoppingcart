import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Store from "./Store";
import Cart from "./Cart";
import Navbar from "./Navbar";
const RouteSwitch = () => {

    return(
        <BrowserRouter>
            <Navbar></Navbar>

                <Routes>
                    <Route path="/" element={<App></App>}></Route>
                    <Route path="/store" element={<Store></Store>}></Route>
                    <Route path="/cart" element={<Cart></Cart>}></Route>


                </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;