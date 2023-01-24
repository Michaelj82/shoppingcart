import React, { useContext } from "react";
import { Context } from "./RouteSwitch";
function Storecart(props) {
  const {value} = useContext(Context)
  

  return (
    <div>
      {value}
      </div>
  );
}

export default Storecart;
