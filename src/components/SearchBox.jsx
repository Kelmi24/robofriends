import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
        <input
            className="pa2 ba b--dark-blue bg-lightest-blue br2"
            type="search"
            placeholder="Search Robot"
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;