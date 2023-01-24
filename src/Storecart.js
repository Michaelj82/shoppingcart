import React, { useContext, useEffect } from "react";
import Context from "./userContext";
function Storecart(props) {
  const {cartData} = useContext(Context)
  
  useEffect(() => {
    console.log(cartData)

  })

  return (
    <div>
      here:{cartData}
      </div>
  );
}

export default Storecart;
