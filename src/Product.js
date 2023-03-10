import React from "react";
import { useState, useEffect } from "react";
import Cart from "./Storecart";
import uniqid from 'uniqid';

function Product(props){
    const [count, setCount] = useState(0)

    function getInput(){
        let input = Number(document.getElementById(props.id).value)
        setCount(input)

    }

    function sendToCart(event){
        event.preventDefault()
        props.parentCallback({name: props.name, price: props.price, quantity: count, id: props.id})
    }



    return(
        <div className="product">
            <div>{props.name}</div>
            <div>{props.price}</div>
            <form onSubmit={sendToCart}>
                <input id ={props.id} type='number' min='1' onChange={getInput} placeholder={1} required></input>
                <button type='submit'>Add to cart</button>
            </form>
            


        </div>

        
    )

}

export default Product;