import React from "react";
import { useParams, Link, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import data from "./Data.json";
import "./ProductDetail.css";


function ProductDetail() {
    const { id } = useParams();
    let product = data.data.find(oneProduct => oneProduct.id.toString() === id);

    return (
        <div className="DetailContainer">
            <span>
                <Link to={(-1)} className="BackButton" ><FontAwesomeIcon icon={faArrowLeft} /></Link>
            </span>
            {
                product &&
                <>
                    <div className="NameSize">
                        <p className="DetailName" >{product.name}</p>
                        <p className="DetailSize" >Talle: {product.size}</p>
                    </div>
                    <div className="DescImg">
                        <div className="DescContainer">
                            <p className="DetailDesc">Descripcion</p>
                            <p className="ProductDetail" >{product.description}</p>
                            <p className="DetailPrice" >Precio: ${product.price}</p>
                            <button className="BuyButton"><FontAwesomeIcon icon={faCartShopping} /> Comprar</button>
                        </div>
                        <img className="DetailImage" src={product.file} alt="" />

                    </div>
                </>
            }
            {
                !product && <p>No hay productos con este ID</p>



            }
        </div>
    )
}


export default ProductDetail;