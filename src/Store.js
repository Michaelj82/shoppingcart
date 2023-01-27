import React, { useContext } from "react";
import Product from "./Product";
import Context from "./userContext";
import uniqid from "uniqid"
function Store(props) {
  const {cartData, setCartData} = useContext(Context)

  function addToCart(item){
    console.log(item)
    console.log(cartData)
    let newCartData = [...cartData]
    newCartData.push(item)
    setCartData(newCartData)

  }


  return (
    <div id="store">
      <Product name='Food' price='2.00' parentCallback={addToCart} id={uniqid()}></Product>
      <Product name='Chicken' price='3.50' parentCallback={addToCart} id={uniqid()}></Product>
      <Product name='PS5' price='560.00' parentCallback={addToCart} id={uniqid()}></Product>
      <Product name='Table' price='25.00' parentCallback={addToCart} id={uniqid()}></Product>

    </div>

  );
}

export default Store;
