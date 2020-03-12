import React from "react";
import dog3 from "../assets/images/dog3.png";
import dog4 from "../assets/images/dog4.png";
import Background from "../assets/images/bg-image.jpg";
const Order = () => {
  return (
    <div>
      <div style={circleContainer}>
        <div>
          <div style={circle}>
            <h1 style={h1}>Personalize Collar</h1>
            <div>
              <img src={dog3} style={{ height: "130px" }} />
            </div>
            <div style={border}></div>
          </div>
        </div>
        <div>
          <div style={circle}>
            <h1 style={h1}>Personalize Bed</h1>
            <div>
              <img src={dog4} style={{ width: "200px", padding: "28px" }} />
            </div>
            <div style={border}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
const circleContainer = {
  fontFamily: "Josefin Sans",
  display: "flex",
  justifyContent: "space-around",
  alignItems: " center",
  flexWrap: "wrap",
  color: "S",
  color: "#664321"
};

const circle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${Background})`,
  backgroundSize: " cover",
  borderRadius: "50%",
  height: "300px",
  width: "300px",
  margin: "10px",
  boxShadow: "1px 1px 8px 6px #d3d3d3"
};
const border = {
  position: "absolute",
  height: "290px",
  width: "290px",
  borderRadius: "50%",
  border: "3px solid #664321",
  zIndex: "-1",
  margin: "21px 0px 0px -18px",
  boxhadow: " 1px 1px 8px 6px #d3d3d3"
};
const h1 = {
  fontFamily: "Fredoka One",
  textAlign: "center",
  fontSize: "24px",
  marginTop: "10px",
  padding: "25px"
};
