import React from "react";
import icon from "../../assets/images/icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div style={footer}>
        <div style={footerItem}>
          <ul>
            <li style={li}>
              <div class='icon'>
                <img src={icon} alt='' />
              </div>
            </li>
            <li style={li}>
              Bowwow.com is India's first and largest online pet store catering
              from 2002 to dogs ,cats ,birds, fishes and all your small
              companions.
            </li>
            <li style={li}>Get weekly dose of exciting news & products</li>
            <li style={li} style={li}>
              <input
                type='text'
                id='email'
                placeholder='Enter Your Email Address'
              />
            </li>
          </ul>
        </div>
        <div style={(footerItem, li, { flex: "1.5" })}>
          <ul style={{ listStyle: "none" }}>
            <li style={heading}>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
          </ul>
        </div>
        <div style={footerItem}>
          <ul style={{ listStyle: "none" }}>
            <li style={heading}>Usefull links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
        <div style={(footerItem, { flex: "2" })}>
          <ul style={{ listStyle: "none" }}>
            <li style={heading}>Contact</li>
            <li>
              Lorem ipsum dolor sit amet, co adipisi elit, sed eiusmod tempor
              incididunt ut labore et dolore
            </li>
            <li>+91-1234567890</li>
            <li>info@bowwow.com</li>
          </ul>
        </div>
      </div>
      <p style={{ fontFamily: "Josefin Sans", textAlign: "center" }}>
        © 2019 bowWow. All Rights Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
const footer = {
  marginTop: " 50px",
  borderTop: "1px solid #664321",
  display: "flex",
  flexDirection: " row",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "0px 100px"
};
const footerItem = {
  fontFamily: "Josefin Sans",
  padding: "0px 20px",
  flex: "2"
};
const li = { listStyle: "none", margin: "15px 0px" };
const heading = {
  color: "#664321",
  fontWeight: "bold",
  fontSize: "20px",
  borderBottom: "2px solid #664321",
  paddingBottom: "5px",
  width: "max-content"
};
