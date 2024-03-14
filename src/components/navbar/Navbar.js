import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import App, { UserContext } from "../../App";
import { AppContext } from "../../context/appContext";
import { FaCartArrowDown } from "react-icons/fa";
import { FcCamcorder } from "react-icons/fc";
import { FaFirstOrderAlt } from "react-icons/fa";
export default function Navbar() {
  const { flag, setFlag, user, setUser } = useContext(UserContext);
  const { cartItems,orders } = useContext(AppContext);
  const PATH = process.env.REACT_APP_PATH;
  const values = Object.values(cartItems);
  const total = values.length;
  
 
  return (
    <div className="navbar">
      <div className="title">Irish Cafe</div>
      <div><h3>Hi {user.name}!</h3></div>
      <div className="links">
        <Link to={`${PATH}/products`}>  <FaFirstOrderAlt /> Products </Link>
        <Link to={`${PATH}/order`}> <FcCamcorder />Orders({orders.length}) </Link>
        
        {total > 0 && (
          <Link to= { `${PATH}/cart`}> Cart({total}`) </Link>
        )};
        <Link to={`${PATH}/`} onClick={() => setFlag((prev) => 0)}>
          Logout
        </Link>
      </div>
    </div>
  );
}
