import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./SearchBar.css"

function SearchBar() {

    return (
        <div className="SearchBar">
            <form className="FormsBar" action="/items" method="get" autoComplete="off" >
                <div className="ImputContainer">
                    <input className="ImputBar"
                        type="text"
                        id="header-search"
                        placeholder="Buscar un producto"
                        name="search"
                    />
                    <button className="SearchButton" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;