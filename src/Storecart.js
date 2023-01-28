import React, { useContext, useEffect, useState } from "react";
import Context from "./userContext";
import uniqid from "uniqid";
import Popup from "./Popup";
function Storecart(props){
  const {cartData, setCartData} = useContext(Context)
  const [total, setTotal] = useState(0)
  const [isOpen, setisOpen] = useState(false)

  function togglePopup(){
    setisOpen(!isOpen)
  }

  function deleteItem(key){

    let newData = [...cartData];
    for (let i = 0; i < newData.length; i++){
      if (newData[i].id == key){
        newData.splice(i, 1)
        setCartData(newData)
      }
    }
  }
  useEffect(() => {
    let newCartData = [...cartData];
    let sum = 0
    for (let i = 0; i < newCartData.length; i++){
      let item = newCartData[i];
      let price = item['price'];
      let quantity = item['quantity'];

      let priceQuantity = price * quantity

      sum += priceQuantity
    }
    setTotal(sum)

  }, [cartData])

  return (

    <div id="cartAlignment">
      <div id="cart">
        {cartData.map(item => (
          <div key={uniqid()} id = {item.id} className="cartItem">
            {item.name}{'\n'}
            Price: ${item.price}{'\n'}
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

            total:${total}
          <button id='checkoutButton' onClick={togglePopup}>Checkout</button>
      </div>

      {isOpen && <Popup content={<>Bruh hi</>}
      handleClose={togglePopup}>

      </Popup>

      }
      
    </div>


  );
}

export default Storecart;
