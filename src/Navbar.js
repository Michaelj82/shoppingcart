import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const Navbar = () => {

    return(
        <div id="nav">
                <Link to={'/'} id='title'>General Store</Link> 
            <ul className="links">
                <li>
                   <Link to={'/cart'}><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"/></svg></Link> 
                </li>

                <li>
                    <Link to={'/store'}><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M42 22.05V39q0 1.2-.9 2.1-.9.9-2.1.9H8.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V22.05q-1.4-1.2-1.85-2.95-.45-1.75.1-3.5l2.15-6.75q.4-1.35 1.4-2.1 1-.75 2.3-.75H37.7q1.4 0 2.45.775 1.05.775 1.45 2.075l2.2 6.75q.55 1.75.075 3.5Q43.4 20.85 42 22.05ZM28.5 20.5q1.45 0 2.45-.95 1-.95.8-2.3L30.5 9h-5v8.25q0 1.3.85 2.275.85.975 2.15.975Zm-9.35 0q1.4 0 2.375-.95.975-.95.975-2.3V9h-5l-1.25 8.25q-.2 1.3.7 2.275.9.975 2.2.975Zm-9.1 0q1.2 0 2.075-.825.875-.825 1.025-2.025L14.45 9h-5l-2.3 7.3q-.5 1.55.4 2.875t2.5 1.325Zm27.85 0q1.6 0 2.525-1.3.925-1.3.425-2.9L38.55 9h-5l1.3 8.65q.15 1.2 1.025 2.025.875.825 2.025.825ZM8.95 39H39V23.45q.05.05-.325.05H37.9q-1.25 0-2.375-.525T33.3 21.35q-.8 1-2 1.575t-2.65.575q-1.5 0-2.575-.425Q25 22.65 24 21.65q-.75.9-1.9 1.375t-2.6.475q-1.55 0-2.75-.55t-2.05-1.6q-1.2 1.05-2.35 1.6-1.15.55-2.3.55h-.675q-.325 0-.425-.05V39ZM39 39H8.95 39Z"/></svg></Link> 
                </li>

                <li>
                <Link to={'/'}><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z"/></svg></Link> 
                </li>
            </ul>
        </div>

    );
};

export default Navbar;