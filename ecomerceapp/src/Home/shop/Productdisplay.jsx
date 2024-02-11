import React, { useState } from "react";
import {Link} from 'react-router-dom'
const desc =
  "Energists an deliver atactice matrcs after avsionary Apropria transition enterpris an source application emerging p$d template. ";
const Productdisplay = ({ item }) => {
  // console.log(item);
  const { name, id, price, seller, ratingCount,img, quantity } = item;  //all json format data load in item keyword and we can access name,id,img,.....
  const [prequantity, setquantity] = useState(quantity);
  const [coupen, setCoupen] = useState("");
  const [size, setsize] = useState("select size");
  const [color, setcolor] = useState("select color");
    
  const handelsizeChange = (e) => {
    setsize(e.target.value);
  };
  const handelColorChange = (e) => {
    setsize(e.target.value);
  };
  const handelDecrease = () => {
   
    if (prequantity > 1) {
      setquantity(prequantity - 1);
    }
  };
  const handIncrease = () => {
    setquantity(prequantity + 1);
  };
  function handelSubmut(e) {
    e.preventDefault();
  
   // Fix the typo here
  const product = {
    id: id,
    img: img,
    name: name,
    price: price,
    quantity: prequantity,
    color: color,
    size:size,
    coupen:coupen,
  };
  //console.log(product);
  
  const existingCard = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = existingCard.findIndex(
    (item) => item.id === id
);

  if (existingProductIndex !== -1) {
    existingCard[existingProductIndex].quantity += prequantity;
  } else {
    existingCard.push(product);
  }

  // Update local storage
  localStorage.setItem("cart", JSON.stringify(existingCard));

  // Reset form fields
  setquantity(1);
  setsize("select size");
  setcolor("select color");
  setCoupen(' ');

  }
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingCount}</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      {/* card component select 1 */}
      <div>
        <form>
          <div className="select-product size">
            <select value={size} onChange={handelsizeChange}>
              <option>select size </option>
              <option value="SM">SM</option>
              <option value="MG">MG</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
        </form>
      </div>
      {/* card component select 2 */}
      <div>
        <form onSubmit={handelSubmut}>
          <div className="select-product color ">
            <select value={size} onChange={handelColorChange} >
              <option>select color </option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>White</option>
              <option>Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* cart plus minus */}
          <div className="cart-plus-minus ">
            <div className="dec qtybutton" onClick={handelDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="quantity"
              id=""
              value={prequantity}
              onChange={(e) => setquantity(parsInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handIncrease}>
              +
            </div>
          </div>
          {/* coupen field */}
     <div className="discount-code mb-2">
      <input type="text"placeholder="enter discount code"onChange={(e)=>setCoupen(e.target.value)} name="" id="" />
     </div>
     {/* btn section */}
     <button type="submit" className="lab-btn">
      <span>Add to cart</span>
     </button>
     <Link to='/cart-page' type="submit" className="lab-btn bg-primary">
      <span>Check Out</span>
     </Link>
     
        </form>
      </div>
    </div>
  );
};

export default Productdisplay;
