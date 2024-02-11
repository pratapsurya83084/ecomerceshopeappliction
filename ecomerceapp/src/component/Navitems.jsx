import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.min.css";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../context/AuthProvider";

const Navitems = () => {
  const [menuTOggle, setMenutoggle] = useState(false);
  const [sociolTOggle, setsociolTOggle] = useState(false);
  const [headerFixed, setheaderFixed] = useState(false);

  //auth info
  const { user } = useContext(AuthContext);
  // console.log(user);
  window.addEventListener("scroll", () => {
    if (window.screenY > 200) {
      setheaderFixed(true);
    } else {
      setheaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeIUp" : ""
      }`}
    >
      {/* header top */}
      <div className={`header-top  d-md-none ${sociolTOggle ? "open" : " "}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3 ">
              {" "}
              <span>Create account</span>
            </Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      {/* header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuTOggle ? "active" : " "}`}>
                  <li>
                    {" "}
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contact">contact</Link>
                  </li>
                </ul>
              </div>
              {/* sign in and login  */}
              <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to="/login" className="d-none d-md-block">
                Login
              </Link>

              {/* menu toggler */}
              <div
                onClick={() => setMenutoggle(!menuTOggle)}
                className={`header-bar d-lg-none ${menuTOggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* social toggler */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setsociolTOggle(!sociolTOggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;
