import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import Register from "./Register";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import { useState } from "react";
import Cart from "../cart/Cart";
import Products from "../product/Products";
export default function Login() {
  const { flag, setFlag, user, setUser, users, setUsers } =
    useContext(UserContext);
  const [visible, setvisible] = useState(false);
  const [msg, setMsg] = useState();
  const validateUser = () => {
    const found = users.find(
      (elem) => elem.email === user.email && elem.pass === user.pass
    );
    if (found) {
      setUser((prev) => ({ ...prev, name: found.name }));
      setFlag(() => 2);
    } else setMsg(() => "Invalid email or password");
  };
  return (
    <>
      {flag === 1 && <Register />}
      <div className="container">
        <div className="leftBox">
          <div className="title">Irish Cafe</div>
          <br></br>{" "}
          <div className="tagLine">
            Brewed with elegance, served with grace.
          </div>
        </div>
        <div className="rightBox">
          <div className="Login-msg">{msg}</div>
          <div className="txtBox">
            <input
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter Email"
              autoFocus
            ></input>
          </div>
          <div className="pwdEye">
            <input
              onChange={(e) =>
                setUser((prev) => ({ ...prev, pass: e.target.value }))
              }
              type={visible ? "text" : "password"}
              placeholder="Enter Passcode"
            ></input>
            <span onClick={() => setvisible(() => !visible)}>
              {visible ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </span>
          </div>
          <div>
            <button onClick={validateUser}>Log in</button>
          </div>
          <br></br>
          <div>Forgot Password?</div>
          <br></br>
          <div>
            <button onClick={() => setFlag(() => 1)} className="newAccBtn">
              Create new account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
