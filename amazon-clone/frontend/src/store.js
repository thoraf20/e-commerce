import {combineReducers, compose, createStore} from "redux";
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";
import { applyMiddleware } from "redux"
import {cartReducer} from "./reducers/CartReducers";
import {userRegisterReducer, userSigninReducer} from "./reducers/userReducers";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || []


const initialState ={cart: {cartItems}, userSign: {userInfo} };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer

});

const composeEnhacer = window._Redux_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
export default store;

