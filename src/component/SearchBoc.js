import React from "react";


const SearchBox = (props) => {
    return(
        <div className="col-12">
            <input className="form-control" placeholder="type to search"
            onChange={(e) => props.setSearchValue(e.target.value)}
            ></input>
        </div>
    )
};

export default SearchBox;