import React from "react";
import header from "../../assets/images/header.png";
import Navbar from "../layout/Navbar";

const Landing = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${header})`,
        height: "560px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Navbar />
      <div></div>
    </section>
  );
};

export default Landing;
