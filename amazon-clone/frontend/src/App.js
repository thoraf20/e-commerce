import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SignInScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
   const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div class="grid-container">
        <header class="header">
            <div class="brand">
                <button onClick={openMenu}>
                     &#9776;
                </button>
                <Link to="/">BookShop</Link>
            </div>
            <div class="header-links">
                <a href="cart.html">Cart</a>
                <Link to="/signin">Sign In</Link>
            </div>
        </header>
        <aside class="sidebar">
            <h3>Book Categories</h3>
        <button class="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
                <li>
                    <a href="index.html">Fiction</a>
                </li>
                  <li>
                    <a href="index.html">Non-Fiction</a>
                </li>
            </ul>
        </aside>
        <main class="main">
          <div class="content">
            <Route path="/signin" component={SigninScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

         </div> 
        </main>
        <footer class="footer">
            All right reserved.
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App;
