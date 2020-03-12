import React from "react";
import img28 from "../assets/images/28.png";
import img29 from "../assets/images/29.png";
import img30 from "../assets/images/30.png";

const CustomerService = () => {
  return (
    <div>
      <div style={bulletsPoint}>
        <div>
          <i className='fas fa-circle' style={circle}></i>
        </div>
        <div>
          <i className='far fa-circle' style={circle}></i>
        </div>
        <div>
          <i className='far fa-circle' style={circle}></i>
        </div>
        <div>
          <i className='far fa-circle' style={circle}></i>
        </div>
        <div>
          <i className='far fa-circle' style={circle}></i>
        </div>
        <div>
          <i className='far fa-circle' style={circle}></i>
        </div>
        <div>
          <i className='far fa-circle' style={circle}></i>
        </div>
      </div>
      <div style={service}>
        <div style={serviceBlock}>
          <div style={img}>
            <img src={img28} alt='' />
          </div>
          <h2 style={h2}>Free Shipping</h2>
          <p style={p}>Free shipping on all order</p>
        </div>
        <div style={serviceBlock}>
          <div style={img}>
            <img src={img29} alt='' />
          </div>
          <h2 style={h2}>Online Support</h2>
          <p style={p}>Online support 24 hours a day</p>
        </div>
        <div style={serviceBlock}>
          <div style={img}>
            <img src={img30} alt='' />
          </div>
          <h2 style={h2}>Easy Return</h2>
          <p style={p}>Back guarantee under 5 days</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CustomerService;
const bulletsPoint = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
};
const circle = {
  color: "#664321",
  margin: "40px 0px",
  paddingLeft: "10px"
};
const service = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap"
};
const serviceBlock = {
  border: "2px solid #664321",
  borderRadius: "20px",
  padding: "10px",
  marginLeft: "10px",
  flexBasis: "250px",
  marginTop: "10px"
};
const img = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "5px"
};
const h2 = {
  fontFamily: "Fredoka One",
  fontSize: "24px",
  color: "#664321",
  margin: "0",
  textAlign: "center"
};
const p = {
  fontFamily: "Fredoka One",
  textAlign: "center",
  color: "#664321",
  margin: "1px",
  fontSize: "10px"
};
