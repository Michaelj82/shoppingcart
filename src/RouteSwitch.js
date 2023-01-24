import React from "react";
import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from "./App";
import Store from "./Store";
import Storecart from "./Storecart";
import Navbar from "./Navbar"
import Context from "./userContext";
const RouteSwitch = () => {
    const [cartData, setCartData] = useState([])


    return(
        <BrowserRouter>
            <Navbar></Navbar>
            <Context.Provider value={{cartData, setCartData}}>

                <Routes>
                        <Route path="/" element={<App></App>}></Route>
                        <Route path="/store" element={<Store></Store>}></Route>
                        <Route path="/cart" element={<Storecart></Storecart>}></Route>
                </Routes>
            </Context.Provider>

        </BrowserRouter>
    )
}

export default RouteSwitch