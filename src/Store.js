import React, { useContext } from "react";
import Product from "./Product";
import Context from "./userContext";
function Store(props) {
  const {cartData, setCartData} = useContext(Context)

  function addToCart(item){
    console.log(item)
    console.log(cartData)
    setCartData(cartData.push(item))
    console.log(cartData)

  }

  return (
    <div>
      <div>Hello from store</div>
      <Product name='Food' price='$2.00' parentCallback={addToCart}></Product>

    </div>

  );
}

export default Store;
