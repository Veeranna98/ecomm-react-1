import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import Products from "./components/product/Products.js";
import Cart from "./components/cart/Cart.js";
import Navbar from "./components/navbar/Navbar.js";
import Login from "./components/user/Login.js";
import { AppContextProvider } from "./context/appContext.js";
import Logout from "./components/user/Logout.js";
import Footer from "./components/footer/Footer.js";
import Orders from "./components/order/Orders.js";

export const UserContext = createContext(null);
function App() {
  const PATH = process.env.REACT_APP_PATH;
  const [flag, setFlag] = useState(0);
  const [user, setUser] = useState({ name: "", email: "", pass: "" });
  const [users, setUsers] = useState([]);
  const val = { flag, setFlag, user, setUser, users, setUsers };
  return (
    <div className="App">
      <UserContext.Provider value={val}>
        {flag === 0 || flag ===3 ? (
          <Login />
        ) : (
          <AppContextProvider>
            <Router>
              <Navbar />
              <hr></hr>
              <Routes>
              <Route path={`${PATH}/cart`} index element={<Cart />} />
                <Route path={`${PATH}/products`} element={<Products />} />
                <Route path={`${PATH}/order`} element={<Orders />} />
                
              </Routes>
              <Footer />
            </Router>
          </AppContextProvider>
        )}
      </UserContext.Provider>
    </div>
  );
}
export default App;
