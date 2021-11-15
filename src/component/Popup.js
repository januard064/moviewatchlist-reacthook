import React from "react";

const Popup = ({ selected, closeDetail }) => {
    return(
        <div className="detail">
            <h2>{selected.Title}</h2>
            <button onClick={closeDetail}>Close</button>
        </div>
    )
}

export default Popup;