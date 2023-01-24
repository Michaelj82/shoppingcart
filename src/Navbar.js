import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Navbar = () => {

    return(
        <div id="nav">
                <Link to={'/'}>Odin Shop!</Link> 
            <ul className="links">
                <li>
                   <Link to={'/cart'}>Cart</Link> 
                </li>

                <li>
                    <Link to={'/store'}>Store</Link> 
                </li>

                <li>
                <Link to={'/'}>Home</Link> 
                </li>
            </ul>
        </div>

    );
};

export default Navbar;