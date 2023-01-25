import React, { useContext, useEffect } from "react";
import Context from "./userContext";
function Storecart(props) {
  const {cartData} = useContext(Context)
  


  useEffect(() => {
    
  }, [cartData])

  return (
    <div id="cart">
      here:
      {cartData.map(item => (
        <div className="cartItem">
          {item.name}{'\n'}
          Price: {item.price}{'\n'}
          Quantity: {item.quantity}{'\n'}
          ------------
        </div>

      ))}
      </div>
  );
}

export default Storecart;
