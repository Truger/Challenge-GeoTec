import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import data from "./Data.json";
import "./SearchResult.css";

const filterItems = (items, query) => {
    if (!query) {
        return items;
    }

    return items.filter((item) => {
        const itemName = item.name.toLowerCase();
        const itemSize = item.size.toLowerCase();
        const itemDesc = item.description.toLowerCase();
        const itemPrice = item.price.toString();
        return itemName.includes(query.toLowerCase()) || itemSize.includes(query.toLowerCase()) || itemDesc.includes(query.toLowerCase()) || itemPrice.includes(query);
    });
};
function SearchResult() {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('search');
    const filteredItems = filterItems(data.data, query);
    return (
        <div>
            <SearchBar />
            <div className="CardMargin">
                {filteredItems.map((item, i) => (
                    <div key={i}>
                        <div className="ProdCard">
                            <div className="ProdHead">
                                <div className="NameCont">
                                    <p className="ProdName">{item.name}</p>
                                    <div className="ProdValues">
                                        <p className="ProdSize">Talle: {item.size} -</p>
                                        <p className="ProdPrice">Precio: ${item.price}</p>
                                    </div>
                                </div>
                                <img className="ProdImg" src={item.file} alt="" />
                            </div>
                            <p className="ProdDesc" >{item.description}</p>
                            <Link to={'/items/' + item.id} className="DetailButton" >Ver detalle</Link>
                        </div>
                    </div>
                ))}
                {
                    filteredItems < [1] && <p className="BadSearch">No hay elementos para mostrar</p>
                }
            </div>
        </div>
    );
}

export default SearchResult;