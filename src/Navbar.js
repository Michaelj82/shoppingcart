import React from "react";
import './style.css'

const Navbar = () => {

    return(
        <div id="nav">
            <a href='/' className="title">Odin Shop!</a>
            <ul className="links">
                <li>
                   <a href='/cart'>Shopping Cart</a> 
                </li>

                <li>
                    <a href='/store'>Store</a> 
                </li>

                <li>
                    <a href='/'>Home</a> 
                </li>
            </ul>
        </div>

    );
};

export default Navbar;