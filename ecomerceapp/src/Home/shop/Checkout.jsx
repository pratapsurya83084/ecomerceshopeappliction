import { Button } from "react-bootstrap"; //npm install bootstrap
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../../component/modal.css";
import { useLocation, useNavigate } from "react-router-dom";
const Checkout = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");
  //handelchange Tab cahnge
  const handelchange = (tabId) => {
    setActiveTab(tabId);
  };

  const handelShow = () => setShow(true);
  const handelClose = () => setShow(false);
  

//direct to homepage  using "/"
const location=useLocation();
const navigate=useNavigate();
const from=location.state ?.from ?.pathname ||"/";


//handelOrderConfirm add paypal and order now button event
  const handelOrderConfirm=()=>{
alert("your order is placed successfully ");
localStorage.removeItem("cart");
navigate(from,{replace:true});
  }
  return (
    <div className="modelCard">
      {/* bootstrap Button */}
      <Button
        variant="primary"
        className="py-2 bg-primary rounded text-white"
        onClick={handelShow}
      >
        Proceed to checkout
      </Button>
      {/* bootstrap modal */}
      <Modal
        show={show}
        onHide={handelShow}
        animation={false}
        className="p-3"
        // centered
      >
        <div className="model-dialog">
          <h5 className="px-3 mb-3">select your payment mathod</h5>
          <div className="modal-content">
            <div className="p-1">
              <div className="modal-tabs mt-2 flex">
                <ul className="nav p-2" id="mayTab" role="tablist">
                  {/* visa payment */}
                  <li className="nav-item mt-2" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handelchange("visa")}
                      href="#visa"
                    >
                      <img
                        src="https://static.seekingalpha.com/uploads/2017/6/28/44583886-14986589045573394_origin.png"
                        alt=""
                        width="150"
                      />
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handelchange("paypal")}
                      href="#paypal"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png"
                        alt=""
                        width="150"
                        className="mt-4 "
                      />
                    </a>
                  </li>
                </ul>
                {/* content */}
                <div className="tab-content" id="myTabContent">
                  {/* Visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    {/* visa tab content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        {/* input 1 */}
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Cardholder Name</span>
                        </div>

                        {/* input 2 */}
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                          />
                          <span>Card Number</span> <i className="fa fa-eye"></i>
                        </div>

                        <div className="d-flex flex-row">
                          {/* input 3 */}
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                            />
                            <span>Expiration Date</span>{" "}
                            <i className="fa fa-eye"></i>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                            />
                            <span>CVV</span> <i className="fa fa-eye"></i>
                          </div>
                        </div>

                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block" onClick={handelOrderConfirm}>
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* paypal content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal" ? "show active" : ""
                    }`}
                    id="paypal"
                    role="tabpanel"
                    aria-labelledby="paypal-tab"
                  >
                    {/* paypal tab-content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal Account info</h5>
                      </div>
                      <div className="form mt-3">
                        {/* input 1 */}
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Enter your Email</span>
                        </div>

                        {/* input 2 */}
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                          />
                          <span>Your Name</span> <i className="fa fa-eye"></i>
                        </div>

                        {/* <div className="d-flex flex-row"> */}
                          {/* input 3 */}

                          <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="number"
                              id="number"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                            />
                            <span></span>
                         
                          </div>
                          </div>
                      
                        {/* </div> */}

                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block"onClick={handelOrderConfirm}>
                            Add Paypal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* payment desclaimer  */}
               <p className="mt-3 px-4 p-Disclaimer"> <em>  Payment Disclaimer: </em>  In no event shall payment by owner for any material or services.</p>

              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Checkout;
