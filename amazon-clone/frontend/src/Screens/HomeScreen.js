import React, { useEffect} from 'react'
import { Link } from "react-router-dom";
import { listProducts } from '../actions/productAction';
import{ useDispatch, useSelector} from "react-redux";


export default function HomeScreen(props) {

  const productList = useSelector(state => state.productList);
  const { products, loading, error} = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

    return () => {

    }
  }, [])

    return loading ? <div>Loading...</div> : 
     error ? <div>{error}</div> :

    ( <ul class="products">
            {
              products.map(product =>
            <li key={product.i_d}>
                <div class="product ">
                    <Link to={"/product/" + product._id}>
                        <img class="product-image" src={product.image} alt="products" />
                    </Link>
                    <div class="product-name">
                      <Link to={"/product/" + product._id}>{product.name}</Link>
                    </div>
                    <div class="product-author"> { product.author}</div>
                    <div class="product-price">{product.price}</div>
                    <div class="product-rating">{product.rating} Stars { product.numReview}</div>
                </div>
            </li>)
            }
          </ul>
    )
}
