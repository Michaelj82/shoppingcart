import React, { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Context from "./userContext";

function Storecart(props) {
  const {cartData} = useContext(Context)
  
  // function useData (item){

  //   let name = item['name']
  //   let price = item['price']
  //   let quantity = item['quantity']

  //   let itemDiv = document.createElement('div')
  //   itemDiv.classList.add('cartItem')
  //   itemDiv.textContent = `name: ${name}, price: ${price}, quantity: ${quantity}`

  //   let newDiv = document.getElementById('cart')
  //   newDiv.appendChild(itemDiv)
  // }
  

  useEffect(() => {
    const newDiv = document.getElementById('cart')

    try{
      let item = cartData.pop()

      let name = item['name']
      let price = item['price']
      let quantity = item['quantity']
  
      let itemDiv = document.createElement('div')
      itemDiv.classList.add('cartItem')
      itemDiv.textContent = `name: ${name}, price: ${price}, quantity: ${quantity}`

      newDiv.append(itemDiv)

    }catch(TypeError){

    }
    


  }, [cartData])

  return (
    <div id="cart">
      here:
      </div>
  );
}

export default Storecart;
