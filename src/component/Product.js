import React from "react";
import "./Product.css";
import food from "../assets/images/12.png";
import tag from "../assets/images/price-tag.png";
import drops from "../assets/images/13.png";
import collar from "../assets/images/15.png";
import shirt from "../assets/images/14.png";
import Background from "../assets/images/bg-img.jpg";

const Product = () => {
  return (
    <section
      className=''
      style={{
        backgroundImage: `url(${Background})`
      }}
    >
      <div
        style={{
          textAlign: "center",
          paddingTop: "20px"
        }}
      >
        {" "}
        <h2 style={h2}>Most popular</h2>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "10px"
        }}
      >
        {" "}
        <h1 style={h1}>Featured Product</h1>
      </div>

      <div>
        <div
          className='d-flex justify-content-center text-white '
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <div>
            <div>
              <div style={productItems}>
                <img
                  src={food}
                  className='img-product'
                  alt=''
                  style={{ width: "100px", height: "100px", padding: "5px" }}
                />
              </div>
              <div style={pTag}>
                <h2 style={{ fontSize: "medium" }}>Dog Food</h2>
                <p>
                  <img src={tag} alt='' />
                  <br />
                  $305
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className='img-product' style={productItems}>
                <img
                  src={drops}
                  alt=''
                  style={{ width: "120px", height: "120px", padding: "5px" }}
                />
              </div>
              <div style={pTag}>
                <h2 style={{ fontSize: "medium" }}>Dog Breath Drops</h2>
                <p>
                  <img src={tag} alt='' />
                  <br />
                  $305
                </p>
              </div>
            </div>
          </div>
          <div className='img-product'>
            <div>
              <div style={productItems}>
                <img
                  src={shirt}
                  alt=''
                  style={{ width: "120px", height: "120px", padding: "5px" }}
                />
              </div>
              <div style={pTag}>
                {" "}
                <h2 style={{ fontSize: "medium" }}>Dog T-Shirt</h2>
                <p style={pTag}>
                  <img src={tag} alt='' />
                  <br />
                  $305
                </p>
              </div>
            </div>
          </div>
          <div className='img-product'>
            <div>
              <div style={productItems}>
                <img
                  src={collar}
                  alt=''
                  style={{ width: "120px", height: "120px", padding: "5px" }}
                />
              </div>
              <div style={pTag}>
                <h2 style={{ fontSize: "medium" }}>Dog Collars</h2>
                <p>
                  <img src={tag} alt='' />
                  <br />
                  $305
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='arrow-icons2'>
        <i class='fas fa-caret-left'></i>
        <div class='vl2'></div>
        <i class='fas fa-caret-right '></i>
      </div>
    </section>
  );
};

export default Product;
const h1 = {
  fontWeight: "bold",
  color: "#fafafa"
};
const h2 = {
  fontFamily: "Pacifico",
  color: "#fafafa"
};
const productItems = {
  alignItems: "center",
  width: "150px",
  height: "150px",
  background: "white",
  margin: "10px",
  borderRadius: "20px",
  padding: "10px",
  alignItems: "center"
};
const pTag = { textAlign: "center", fontWeight: "bold" };
