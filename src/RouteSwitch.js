import React from "react";
import { ReactDOM } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Store from "./Store";
import Cart from "./Cart";

const RouteSwitch = () => {

    return(
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<App></App>}></Route>
                <Route path="/store" element={<Store></Store>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>


            </Routes>
        
        </BrowserRouter>
    );
};

export default RouteSwitch;