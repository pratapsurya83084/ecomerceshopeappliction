import React, { useEffect, useState } from "react";
import Pageheader from "../../component/Pageheader";
import { Link } from "react-router-dom";
import delImgUrl from "../../assets/images/shop/del.png";
import Checkout from "./Checkout";

const Cartpage = () => {
  const [cartitem, setcartitem] = useState([]);
  // console.log(cartitem);
  useEffect(() => {
    //fetch cart data from local storage
    const storedcartitem = JSON.parse(localStorage.getItem("cart")) || [];
    setcartitem(storedcartitem); //get date from local storage and stored in useState array
  }, []);

  //calculate price
  const claculateTotalprice = (item) => {
    return (item.price = item.quantity);
  };

  //handel qunatity increase
  const handelIncrease = (item) => {
    item.quantity += 1;
    setcartitem([...cartitem]); //if click the quantity increase the quantity and also update local storagee

    //update local storage with new cartitem
    localStorage.setItem("cart", JSON.stringify(cartitem)); //we pass catiitem price to localstorage
  };

  //handel qunatity increase
  const handelDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setcartitem([...cartitem]); //if click the quantity increase the quantity and also update local storagee

      //update local storage with new cartitem
      localStorage.setItem("cart", JSON.stringify(cartitem)); //we pass catiitem price to localstorage
    }
  };
  //handel item remove
  const handelRemoveItem = (item) => {
    const updatedcart = cartitem.filter((cartitem) => cartitem.id !== item.id); //if not match id

    //update new cart
    setcartitem(updatedcart);

    updateLocalstorage(updatedcart); //call below function with updatecart arggument
  };

  const updateLocalstorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  //cart subtotal
  const cartSubtotal = cartitem.reduce((total, item) => {
    return (total = claculateTotalprice(item));
  }, 0);
  //order total
  const orderTotal = cartSubtotal;
  // console.log(orderTotal);
  return (
    <div>
      <Pageheader title={"Shop Cart"} curpage={"Cart Page"} />
      <div className="shop-cart padding-tb ">
        <div className="conatainer">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cart-product">Product</th>
                    <th className="cart-Price">Price</th>
                    <th className="cart-Quantity">Quantity</th>
                    <th className="cart-Total">Total</th>
                    <th className="cart-Edit">Edit</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                  {/* cartitem is hooks variable all localstorage getitem stored in this */}
                  {cartitem.map((item, index) => (
                    // first row
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        {/* table data  name  */}
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      {/* table data  price  */}
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handelDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handelIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${claculateTotalprice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handelRemoveItem(item)}>
                          <img src={delImgUrl} />{" "}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Cart top */}

            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupen">
                  <input
                    type="text"
                    className="cart-page-input-text"
                    name="coupen"
                    id="coupen"
                    placeholder="coupen code...."
                  />
                  <input type="submit" value={"Apply Coupen"} />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  {/* checkout */}
                  <div>

                    <Checkout/>
                  </div>
                </form>
              </div>

              {/* Checkout box and */}
              {/* shopping box */}
              <div className="shipping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shipping cols">
                      <h3 className="m-2">Calculate Shipping</h3>
                      <div className="outline-select m-3">
                        <select>
                          <option value="uk" className="">
                            United kingdom
                          </option>
                          <option value="us" className="">
                            unites stats
                          </option>
                          <option value="bd" className="">
                            bangladesh
                          </option>
                          <option value="pak" className="">
                            pakistan
                          </option>
                          <option value="ind" className="">
                            india
                          </option>
                          <option value="np" className="">
                            nepal
                          </option>
                        </select>
                        {/* <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span> */}
                      </div>
                      <div className="outline-select shipping-select m-3 d-flex gap-3 flex-column">
                        <select>
                          <option value="uk" className="">
                            New York
                          </option>
                          <option value="us" className="">
                            London
                          </option>
                          <option value="bd" className="">
                            dhaka
                          </option>
                          <option value="pak" className="">
                            karachi
                          </option>
                          <option value="New delhi" className="">
                            New delhi
                          </option>
                        </select>
                        {/* <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span> */}
                        <input
                          type="text"
                          name="postalcode"
                          id="postalcode"
                          className="cart-page-input-text"
                          placeholder="enter pin code/ZIP"
                        />
                        <button type="submit">update Address</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3 className="m-5">Cart Totals</h3>
                      <ul className="m-4">
                        <li className="d-flex gap-5 bg-light p-1 mt-2">
                          <span className="pull-left mb-2 ">Cart Subtotal</span>
                          <p className="pull-right mx-auto text-warning">
                            ${cartSubtotal}
                          </p>
                        </li>

                        <li className="d-flex gap-5 bg-light p-1 mt-2">
                          <span className="pull-left mb-2 ">
                            shipping and Handling
                          </span>
                          <p className="pull-right mx-auto text-warning">
                            Free Shipping
                          </p>
                        </li>

                        <li className="d-flex gap-5 bg-light p-1 mt-2">
                          <span className="pull-left mb-2 ">order total</span>
                          <p className="pull-right mx-auto text-warning">
                            ${orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
