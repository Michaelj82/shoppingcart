import React from "react";
import Product from "./Product";

function Store(props) {

  function addToCart(item){
    props.parentCallback(`${item}`)
  }

  return (
    <div>
      <div>Hello from store</div>
      <Product name='Food' price='$2.00' parentCallback={addToCart}></Product>

    </div>

  );
}

export default Store;
