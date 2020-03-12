import React from "react";
import "./Navbar";
import logo from "../../assets/images/icon.png";

const Navbar = () => {
  return (
    <nav
      className='mb-4 navbar navbar-expand-lg navbar-light pink lighten-4  '
      style={{
        background: "#f3f3f5",
        marginBottom: "0 !important",
        border: "0 !important"
      }}
    >
      <a className='navbar-brand font-bold' href='#'>
        <img src={logo} style={{ width: "75px", marginLeft: "50px" }} />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto' style={{ marginRight: "150px" }}>
          <li className='nav-item active'>
            <a className='nav-link font-bold' href='#' style={nav}>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link font-bold' href='#' style={nav}>
              Shop
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link font-bold' href='#' style={nav}>
              Blog
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link font-bold' href='#' style={nav}>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link font-bold' href='#' style={nav}>
              Contact
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link font-bold' href='#' style={nav}>
              <i class='fas fa-search'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link font-bold' href='#' style={nav}>
              <i class='fas fa-user'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link font-bold' href='#' style={nav}>
              <i class='fas fa-shopping-cart'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
const nav = {
  fontFamily: "Josefin Sans",
  fontSize: "16px",
  color: "#664321",
  marginLeft: "10px"
};
