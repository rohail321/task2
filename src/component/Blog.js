import React from "react";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.jpg";

const Blog = () => {
  return (
    <div>
      <h2
        style={{
          fontFamily: "Pacifico",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center"
        }}
      >
        latest news
      </h2>
      <h1
        style={{
          fontFamily: "Pacifico",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center"
        }}
      >
        From Our Blogs
      </h1>
      <div style={blogItems}>
        <div style={blogContainer}>
          <div>
            <img src={img1} style={blogImg} />
          </div>
          <h3>Electric Fence For Dogs</h3>
          <p>
            Is your dog easily distracted? Does he spend your entire walk
            lunging at...
          </p>
          <span style={(blogText, { color: "#664321" })}>Full Article ></span>
        </div>
        <div style={blogContainer}>
          <div>
            <img src={img2} style={blogImg} />
          </div>
          <h3>Care For Your Dogs</h3>
          <p>
            Is your dog easily distracted? Does he spend your entire walk
            lunging at...
          </p>
          <span style={(blogText, { color: "#664321" })}>Full Article ></span>
        </div>
        <div style={blogContainer}>
          <div>
            <img src={img3} style={blogImg} />
          </div>
          <h3>Electric Fence For Dogs</h3>
          <p>
            Is your dog easily distracted? Does he spend your entire walk
            lunging at...
          </p>
          <span style={(blogText, { color: "#664321" })}>Full Article ></span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
const blogItems = {
  display: "flex",
  flexDirection: " row",
  justifyContent: " center",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "10px"
};

const blogImg = {
  width: "350px",
  padding: " 15px",
  bordeRadius: "20px"
};

const blogContainer = {
  width: "400px",
  fontFamily: "Josefin Sans"
};

const blogText = {
  paddingLeft: "20px",
  textAlign: "left"
};
