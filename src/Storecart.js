import React, { useContext, useEffect } from "react";
import Context from "./userContext";
import uniqid from "uniqid";
function Storecart(props){
  const {cartData, setCartData} = useContext(Context)

  function deleteItem(key){
    let item = document.getElementById(key)

    item.innerHTML = ''

  }

  // useEffect(() => {
    
  // }, [cartData])

  return (

    <div id="cartAlignment">
      <div id="cart">
        {cartData.map(item => (
          <div key={uniqid()} id = {item.id} className="cartItem">
            {item.name}{'\n'}
            Price: {item.price}{'\n'}
            Quantity: {item.quantity}{'\n'}
            ------------{'\n'}
            <button onClick={deleteItem(item.id)}>Delete</button>
          </div>

        ))}
        </div>

      <div id="checkout">

      </div>

    </div>


  );
}

export default Storecart;
