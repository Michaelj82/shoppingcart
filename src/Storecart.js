import React, { useContext, useEffect, useState } from "react";
import Context from "./userContext";
import uniqid from "uniqid";
import Popup from "./Popup";
function Storecart(props){
  const {cartData, setCartData} = useContext(Context)
  const [total, setTotal] = useState(0)
  const [isOpen, setisOpen] = useState(false)

<<<<<<< HEAD
  function cartItems(){
    let items = ''
    if (cartData.length > 0){
      items = <div>Do you want to confirm your order of {total}</div>
    }else{
      items = <div>You dont have anything in your cart.</div>
    }

    return items
  }

  function successfulPurchase(){
    setisOpen(!isOpen)
    alert('bruh')
  }
=======
>>>>>>> 6b6dd17004c159e456d5e49fd56868e65eeb7610
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

<<<<<<< HEAD
      {isOpen && <Popup content={<form onSubmit={successfulPurchase}>{cartItems()}
=======
      {isOpen && <Popup content={<form onSubmit={togglePopup}>Do you want to confirm your order of {total}?
>>>>>>> 6b6dd17004c159e456d5e49fd56868e65eeb7610
      <button type="submit">Yes</button></form>}
      handleClose={togglePopup}>

      </Popup>

      }
      
    </div>


  );
}

export default Storecart;
