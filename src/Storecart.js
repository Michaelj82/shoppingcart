import React, { useContext, useEffect, useState } from "react";
import Context from "./userContext";
import uniqid from "uniqid";
import Popup from "./Popup";
function Storecart(props){
  const {cartData, setCartData} = useContext(Context)
  const [total, setTotal] = useState(0)
  const [isOpen, setisOpen] = useState(false)

  function cartItems(){
    let items = ''
    if (cartData.length > 0){
      items = <div>Do you want to confirm your order of ${total}<button type="submit">Yes</button></div>
    }else{
      items = <div>You do not have anything in your cart.</div>
    }

    return items
  }

  function successfulPurchase(){
    setCartData([])
    setisOpen(!isOpen)
    alert('Thank you for your purchase!')
  }
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
            
            <div className="cartItemProp">
            {item.name}

            </div>
            <div className="cartItemProp">
            Price: ${item.price}{'\n'}

            </div>
            <div className="cartItemProp">
            Quantity: {item.quantity}{'\n'}

            </div>
            <div className="cartItemProp">
            <button onClick={function(){
              deleteItem(item.id)
              console.log(cartData)
            }}>Delete</button>
            </div>

          </div>

        ))}
        </div>

      <div id="checkout">

            Total:${total}
          <button id='checkoutButton' onClick={togglePopup}>Checkout</button>
      </div>

      {isOpen && <Popup content={<form onSubmit={successfulPurchase}>{cartItems()}
      </form>}
      handleClose={togglePopup}>

      </Popup>

      }
      
    </div>


  );
}

export default Storecart;
