import React from "react";
import img18 from "../assets/images/18.png";
import img19 from "../assets/images/19.png";
import img20 from "../assets/images/20.png";
import img21 from "../assets/images/21.png";
import img22 from "../assets/images/22.png";
import img23 from "../assets/images/23.png";
import img24 from "../assets/images/24.png";
import img25 from "../assets/images/25.png";
import img26 from "../assets/images/26.png";
import img27 from "../assets/images/27.png";
import img28 from "../assets/images/28.png";

const Brands = () => {
  return (
    <div>
      <div style={{ background: "#f3f3f5", marginTop: "30px" }}>
        <h2
          style={{
            fontFamily: "Pacifico",
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          Brands
        </h2>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          You Love
        </h1>
        <div style={sponserItems}>
          <div style={pormotion}>
            <div style={Items}>
              <img style={itemsImg} src={img18} />
            </div>
            <div style={Items}>
              <img style={itemsImg} src={img19} />
            </div>
            <div style={Items}>
              <img style={itemsImg} src={img21} />
            </div>
            <div style={Items}>
              <img style={itemsImg} src={img22} />
            </div>
            <div style={Items}>
              <img
                style={itemsImg}
                src={img23}
                style={{ height: "80px", width: "100px" }}
              />
            </div>
            <div style={Items}>
              <img style={itemsImg} src={img24} />
            </div>
            <div style={Items}>
              <img style={itemsImg} src={img25} />
            </div>
            <div style={Items}>
              <img style={itemsImg} src={img26} />
            </div>
            <div style={Items}>
              <img style={itemsImg} src={img27} />
            </div>
            <div style={Items}>
              <img style={itemsImg} src={img28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
const pormotion = {
  display: "flex",
  paddingLeft: "200px",
  paddingRight: "200px",

  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  flexDirection: " row",
  width: "80%",
  height: "50%",
  flex: "1 0 calc(33.333% - 20px)"
};
const Items = {
  width: " 200px",
  paddingLeft: "25px"
};

const itemsImg = {
  width: "150px",

  padding: "20px"
};
const sponserItems = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
};
