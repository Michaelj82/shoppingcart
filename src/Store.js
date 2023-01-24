import React, { useContext } from "react";
import Product from "./Product";
import { Context } from "./RouteSwitch";
function Store(props) {
  const {setValue} = useContext(Context)

  function addToCart(item){
    setValue(item)
  }

  return (
    <div>
      <div>Hello from store</div>
      <Product name='Food' price='$2.00' parentCallback={addToCart}></Product>

    </div>

  );
}

export default Store;
