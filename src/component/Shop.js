import React from "react";
import "./Shop.css";
import pet from "../assets/images/3.png";
import food from "../assets/images/1.png";
import collors from "../assets/images/2.png";
import Toys from "../assets/images/5.png";
import Bowl from "../assets/images/5.png";
import Grooming from "../assets/images/6.png";
import Bed from "../assets/images/7.png";

const Shop = () => {
  return (
    <div className='shop' style={{ textAlign: "center" }}>
      <h2 style={{ fontFamily: "Pacifico", marginBottom: "15px" }}>shop by</h2>
      <h1 className='heading-style'>Category</h1>
      <div className='shop-box'>
        <div className='Categories'>
          <img src={pet} />
          <h2>Pet</h2>
        </div>
        <div className='Categories'>
          <img src={food} />
          <h2>Food</h2>
        </div>
        <div className='Categories'>
          <img src={collors} />
          <h2>Collors</h2>
        </div>
        <div className='Categories'>
          <img src={Bowl} />
          <h2>Bowl</h2>
        </div>
        <div className='Categories'>
          <img src={Toys} />
          <h2>Toys</h2>
        </div>
        <div className='Categories'>
          <img src={Grooming} />
          <h2>Grooming</h2>
        </div>
        <div className='Categories'>
          <img src={Bed} />
          <h2>Bed</h2>
        </div>
      </div>
      <div className='arrow-icons'>
        <i className='fas fa-caret-left'></i>
        <div className='vl'></div>
        <i className='fas fa-caret-right'></i>
      </div>
    </div>
  );
};

export default Shop;
const shop_box = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  height: "30%",
  padding: "10px",
  marginTop: "500px"
};
