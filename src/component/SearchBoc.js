import React from "react";


const SearchBox = (props) => {
    return(
        <div className="searchbox">
            <input className="form-control" placeholder="Search your movie"
            onChange={(e) => props.setSearchValue(e.target.value)} autoFocus
            ></input>
        </div>
    )
};

export default SearchBox;