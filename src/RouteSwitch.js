import React from "react";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Store from "./Store";
import Storecart from "./Storecart";
import Navbar from "./Navbar";

const RouteSwitch = () => {
    const [cartData, setCartData] = useState(['adsf'])
    
    function toCart(item){
        console.log(item)
        setCartData(cartData.push(item))
    }

    return(
        <BrowserRouter>
            <Navbar></Navbar>

                <Routes>
                    <Route path="/" element={<App></App>}></Route>
                    <Route path="/store" element={<Store parentCallback={toCart}></Store>}></Route>
                    <Route path="/cart" element={<Storecart data={cartData}></Storecart>}></Route>


                </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;