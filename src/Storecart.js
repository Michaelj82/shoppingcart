import React, { useContext, useEffect } from "react";
import Context from "./userContext";
import uniqid from "uniqid";
function Storecart(props){
  const {cartData, setCartData} = useContext(Context)

  function deleteItem(key){
    // let cart = document.getElementById('cart')
    // let item = document.getElementById(key)

    // cart.removeChild(item)

    let newData = [...cartData];
    for (let i = 0; i < newData.length; i++){
      if (newData[i].id == key){
        newData.splice(i, 1)
        setCartData(newData)
      }
    }
  }

  useEffect(() => {
    console.log('cart data')
    console.log(cartData)

  }, [cartData])

  return (

    <div id="cartAlignment">
      <div id="cart">
        {cartData.map(item => (
          <div key={uniqid()} id = {item.id} className="cartItem">
            {item.name}{'\n'}
            Price: {item.price}{'\n'}
            Quantity: {item.quantity}{'\n'}
            ------------{'\n'}
            <button onClick={function(){
              deleteItem(item.id)
              console.log(cartData)
            }}>Delete</button>
          </div>

        ))}
        </div>

      <div id="checkout">

      </div>

    </div>


  );
}

export default Storecart;
