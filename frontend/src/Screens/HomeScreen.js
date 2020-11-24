import React from 'react'
import data from "../data";
import { Link } from "react-router-dom";
export default function HomeScreen(props) {
    return (
        <div>
              <ul class="products">
            {
              data.products.map(product =>
            <li>
                <div class="product ">
                    <Link to={"/product/" + product._id}>
                        <img class="product-image" src={product.image} alt="products" />
                    </Link>
                    <div class="product-name">
                      <Link to={"/product/" + product._id}>{ product.name}</Link>
                    </div>
                    <div class="product-author"> { product.author}</div>
                    <div class="product-price">{product.price}</div>
                    <div class="product-rating">{product.rating} Stars { product.numReview}</div>
                </div>
            </li>)
            }
          </ul>
        </div>
    )
}
