import {combineReducers, compose, createStore} from "redux";
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";
import { applyMiddleware } from "redux"

import thunk from "redux-thunk";


const initialState =[];
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
});

const composeEnhacer = window._Redux_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;

