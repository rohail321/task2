import React from "react";
import dogs from "../assets/images/dogs.png";
import dog2 from "../assets/images/dog2.png";
import Background from "../assets/images/bg-image.jpg";

const Footer = () => {
  return (
    <div style={container}>
      <div style={saleleft}>
        <div className='left'>
          <h3 style={leftH3}>IT'S TIME TO SHOP</h3>
          <h1
            style={{ letterSpacing: "1px", olor: "#313131", fontSize: "48px" }}
          >
            PET PRODUCTS
          </h1>
          <div style={{ display: "flex" }}>
            <div>
              <h1 style={{ color: "#ff5920", fontSize: "70px" }}>SALE</h1>
            </div>
            <div style={circle}>
              <h2 style={circleH2}>UP TO</h2>
              <h2
                style={{
                  fontSize: "larger",
                  color: "#ff5920",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                20%
              </h2>

              <h2 style={circleH2}>off</h2>
            </div>
          </div>
        </div>
        <div className='right-side'>
          <img src={dogs} alt='' />
        </div>
      </div>
      <div style={secondBox}>
        <div>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              textAlign: "center",
              padding: "10px",
              letterSpacing: "3px"
            }}
          >
            PET <br /> APPAREL
          </h1>
          <h2
            style={{
              fontSize: "large",
              fontFamily: "Josefin Sans",
              textAlign: "center"
            }}
          >
            OUT NOW <br /> FOR A LIMITED TIME
          </h2>
          <h2
            style={{
              fontSize: "medium",
              fontWeight: "bold",
              textAlign: "center",
              color: "#ff5920",
              textDecoration: "underline dotted #000"
            }}
          >
            FIND OUT MORE
          </h2>
        </div>
        <div>
          <img src={dog2} alt='' style={{ height: "290px" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
const saleleft = {
  fontFamily: "Roboto",
  display: "flex",
  FlexDirection: "row",
  justifyContent: "space-around",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  borderRadius: "20px",
  flex: "2",
  flexWrap: "wrap",
  margin: "20px",
  padding: "10px"
};
const container = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "20px"
};

const leftH3 = { color: "#ff5920", marginBottom: "5px" };
const circle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: " center",
  borderRadius: "50%",
  background: "white",
  marginLeft: "20px",
  padding: "15px",
  width: "110px",
  boxShadow: "1px 1px 8px 6px #d3d3d3"
};
const circleH2 = {
  fontWeight: "bold",
  textAlign: "center",
  fontFamily: "Franklin Gothic Medium",
  fontSize: "large"
};
const secondBox = {
  fontFamily: "Pacifico",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
  alignItems: "center",
  flex: "1",
  backgroundColor: " #fbe338",
  backgroundSize: "cover",
  borderRadius: "20px",
  padding: "20px",
  backgroundSize: "cover"
};
