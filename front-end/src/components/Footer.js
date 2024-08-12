import React from "react";
import "./Footer.css";
import logo from "../assets/ecommerce.png";
import fb from "../assets/img/facebook.png"
import inst from "../assets/img/instagram.png"
import twitter from "../assets/img/twitter.png"
import linkd from "../assets/img/linkedin.png"

export default function Footer() {
  return (
    <footer>
      <div className="social-box">
        <div className="logoset">
          <img className="logo list-item" src={logo} alt="logo404" />
          <h2>E Commerce</h2>
        </div>
        <p>
          We offer the best online E-commerce Services in the world.
        </p>
        <div className="social-logo">
          <span>
            <img className="SL" src={fb} alt="404"/>
          </span>
          <span>
            <img className="SL" src={inst} alt="404"/>
          </span>
          <span>
            <img className="SL" src={twitter} alt="404"/>
          </span>
          <span>
            <img className="SL" src={linkd} alt="404"/>
          </span>
        </div>
      </div>
      <div className="list-box">
        <div className="list1">
          <h4>Company</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="list2">
          <h4>Our Services</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="barw">
        <p>Terms and services</p>
        <p>Privacy policy</p>
        <p>Copyright © E Commerce, All rights are reserved</p>
        {/* <form>
          <select id="lang" name="lang">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Malayalam">Malayalam</option>
          </select>
        </form> */}
      </div>
      </div>
    </footer>
  );
}
