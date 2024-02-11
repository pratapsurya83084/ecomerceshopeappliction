import React from "react";
import { Link } from "react-router-dom";
const btnText = "Sign up for free";
const title = "Shop anytime anywhere";
const desc =
  "Take shop on your any device with our app and learn all time what you want.just download & install a start to learn";
const Appsection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title"> {title}</h2>
          <p>{desc}</p>
        </div>
        <div className="section-wrapper">
            <ul className="lab-ul">
                <li><a href="#"> <img src="/src/assets/images/app/01.jpg" alt="" /> </a>  </li>
                <li><a href="#"> <img src="/src/assets/images/app/02.jpg" alt="" /> </a>  </li>
                

            </ul>
        </div>
      </div>
    </div>
  );
};

export default Appsection;
