import React from "react";

const Popup = props => {
    return(
        <div className="popup">
            <button onClick={props.handleClose}>Close</button>
            {props.content}
        </div>
    )
};

export default Popup;