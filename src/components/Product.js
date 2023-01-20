import React from "react";
import { useState, useEffect } from "react";
import Cart from "../Cart";
import uniqid from 'uniqid';

function Product(props){
    const [count, setCount] = useState(0)
    const [id] = uniqid()

    function getInput(){
        let input = Number(document.getElementById(id).value)
        setCount(input)

    }

    function sendToCart(){
        
    }



    return(
        <div className="product">
            <div>{props.name}</div>
            <div>{props.price}</div>
            <form>
                <input id ={id} type='number' min='1' onChange={getInput}></input>
                <button type='submit'>Add to cart</button>
            </form>
            


        </div>

        
    )

}

export default Product;