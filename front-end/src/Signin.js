import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import ggl from "./assets/google.png";
import fb from "./assets/facebook.png";
import apple from "./assets/apple.png";
import { useAuth } from "../src/store/Store";
import { login } from "./Helper/Helper";
import toast,{ Toaster } from 'react-hot-toast'
import { validateLogin } from './Helper/Validate'

export default function Signin() {


  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };
  const validateForm = () => {
    const validationErrors = validateLogin(formData);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleLoginClick = async () => {
    // Replace the URL with your API endpoint
    if (!validateForm()) {
      return;
    }
  
    try {
      console.log({
        username: formData.username,
        password: formData.password,
      });
  
      // const loginResponse = await login({
      //   username: formData.username,
      //   password: formData.password,
      // });
      const loginResponse = await login({values:{username:formData.username,password:formData.password}});
      
      console.log(loginResponse);
      dispatch({ type: "LOGIN", payload: loginResponse });
      navigate("/");
      // Dispatch and navigate
    } catch (error) {
      toast.error(error?.response?.data?.error || 'An error occurred during login');
      console.error("An error occurred during login", error);
    }
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={false}/>
      <Header  />
      <div className="signinmain">
        <div className="signin-container">
          <h1>Log in</h1>
          <div className="quicklogin">
            <button className="quickbtn">
              <img src={ggl} alt="404" />
              Continue with google
            </button>
            <button className="quickbtn">
              <img src={fb} alt="404" />
              Continue with Facebook
            </button>
            <button className="quickbtn">
              <img src={apple} alt="404" />
              Continue with apple
            </button>
            <button className="quickbtn">Continue with phone number</button>
          </div>
          <hr className="hline" />
          <div className="signin-form">
            <form className="" action="">
              <label className="txtlbl" htmlFor="username">
                Email or Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Email or Username"
                autoComplete="current-password"
                value={formData.username}
                onChange={handleInputChange}
              />
              <label className="txtlbl" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="remember">
                <label className="switch">
                  <input type="checkbox" name="rememberme" />
                  <span className="slider round"></span>
                </label>
                <label htmlFor="rememberme">Remember me</label>
              </div>
              <input
                type="button"
                defaultValue="Log In"
                onClick={handleLoginClick}
              />
              <p className="Uline">Forgot your password?</p>
            </form>
          </div>
          <hr className="hline" />
          <div className="Signuplink">
            <p>
              Don't have an account?
              <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
