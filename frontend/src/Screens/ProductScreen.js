import React from 'react';
import { Link } from "react-router-dom";
import data from "../data";

export default function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(val => val._id === props.match.params.id);
    return (
        <div>
            <div className="bact-to-result">
                <Link to="/">Back to result</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product" />
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            Price: <b>{product.price}</b>
                        </li>
                        <li>
                            {product.rating} Stars ({product.numReview} Reviews)
                        </li>
                        <li>
                            Description:
                             <div>
                                {product.description}
                             </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: {product.price}
                        </li>
                         <li>
                            Status: {product.status}
                        </li>
                         <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <li>
                            <button className="button">Add to cart</button>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}
