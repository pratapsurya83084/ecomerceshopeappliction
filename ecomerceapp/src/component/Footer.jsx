import React from "react";

import { Link } from "react";
const title = "About ShopCart";
const desc =
  "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  { iconName: "icofont-google-map", text: "New York, USA." },
  { iconName: "icofont-phone", text: "+880 123 456 789" },
  { iconName: "icofont-envelope", text: "info@shopcart.com" },
];

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const ItemList = [
  { text: "All Products", link: "/shop" },
  { text: "Shop", link: "/shop" },
  { text: "Blog", link: "/blog" },
  { text: "About", link: "/about" },
  { text: "Policy", link: "#" },
  { text: "FAQs", link: "/about" },
];

const quickList = [
  { text: "Summer Sessions", link: "#" },
  { text: "Events", link: "#" },
  { text: "Gallery", link: "#" },
  { text: "Forums", link: "#" },
  { text: "Privacy Policy", link: "#" },
  { text: "Terms of Use", link: "#" },
];

const tweetList = [
  {
    iconName: "icofont-twitter",
    desc: "Aminur islam @ShopCart Greetings! #HTML_Template Grab your item, 50% Big Sale Offer !",
  },
  {
    iconName: "icofont-twitter",
    desc: "Somrat islam @ShopCart Hey! #HTML_Template Grab your item, 50% Big Sale Offer !",
  },
];
const footerbottomList = [
  { text: "Faculty", link: "#" },
  { text: "Staff", link: "#" },
  { text: "Students", link: "#" },
  { text: "Alumni", link: "#" },
];

const Footer = () => {
  return (
    
   
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
         {/* parrent of all columns */}
          <div className="row g-4 r-w-cols-xl-4 row-cols-1 justify-content-center  row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4 className="fs-2">{title}</h4>
                    </div>

                    <p>{desc}</p>
                    <ul className="lab-ul office-address">
                      {addressList.map((val, i) => (
                        <li key={i} className="client-list">
                          <i className={val.iconName}>{val.text}</i>
                        </li>
                      ))}
                    </ul>

                    <ul className="lab-ul social-icons ">
                      {socialList.map((val, i) => (
                        <li key={i} className="client-list p-2">
                          <a href="#" className={val.iconName}>
                            {" "}
                            <i className={val.className}>{val.text}</i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* second column of footer */}
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4 className="title fs-2">{quickTitle}</h4>
                    </div>

                    <ul className="lab-ul office-address m-2">
                      {quickList.map((val, i) => (
                        <li key={i} className="client-list p-2">
                          <a href="#">{val.text}</a>{" "}
                          <i className={val.iconName}>{val.text}</i>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/*    third column */}

            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4 className="title fs-2">{ItemTitle}</h4>
                    </div>

                    <ul className="lab-ul office-address m-2">
                      {ItemList.map((val, i) => (
                        <li key={i} className="client-list p-2">
                          <a href="#">{val.text}</a>{" "}
                          <i className={val.iconName}>{val.text}</i>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
{

/*             fourth column of footer */}
          <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4 className="title fs-2">{tweetTitle}</h4>
                    </div>
                    <div className="content">
              
                    <ul className="lab-ul office-address m-2">
                      {tweetList.map((val, i) => (
                        <li key={i} className="client-list p-2">
                          <a href="#">{val.text}</a>{" "}
                          <i className={val.iconName}></i>
                          {val.desc}
                        </li>
                      ))}
                    </ul>
                              
                    </div>
                  </div>
                </div>
              </div>
            </div>
     
          </div>
          <p  className="text-center mt-5">       &Copy;2024 Shop Cart Created by Pratap</p>
        </div>
      </div>
   

    </footer>
  );
};

export default Footer;
