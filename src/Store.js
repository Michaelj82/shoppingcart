import React from "react";
import Product from "./components/Product";


function Store() {
  return (
    <div>
      <div>Hello from store</div>
      <Product name='Food' price='$2.00'></Product>

    </div>

  );
}

export default Store;
