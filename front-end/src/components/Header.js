import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/ecommerce.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Store";
import toast from "react-hot-toast";

export default function Header(props) {
  let navigate = useNavigate();
  const { state } = useAuth()
  const token = state?.isAuthenticated;

  const routeChangeUser = () => {
    if(!token) {
      navigate('/');
      let path = `signin`;
      navigate(path);
      toast.error('Please Login to View Profile')
    }
  else{  
    navigate('/');
    let path = `profile`;
    navigate(path);
  }
  };
  const routeChangeCart = () => {
    navigate('/');
    let path = `Cart`;
    navigate(path);
  };
  const onProducts = () => {
    props.setMain("Products")
    props.setfilter()
  };

  return (
    <div className="headermain">
      <div className="header-brand">
        <button
          className="list-item"
          onClick={() => {
            if(props.showNav==="show"){
              props.setNav("none");
              props.setMain("Hero");
            }
          }}
        >
          <Link to="/">
            <img src={logo} alt="404" />
          </Link>
          <h1 className="hname">E-Commerce</h1>
        </button>
      </div>
      {props.showNav === "show" && (
        <>
          {" "}
          <div className="header-navigate">
            <ul className="nav-items list-items">
              <li key={1}>
                <button
                  className="list-item"
                  onClick={() => props.setNav("Category")}
                >
                  Categories
                  <svg
                    role="presentation"
                    focusable="false"
                    width="20"
                    height="10"
                    class="icon icon-chevron-bottom"
                    viewBox="0 0 10 7"
                  >
                    <path
                      d="m1 1 4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                </button>
              </li>
              <li key={2}>
                <button
                  className="list-item"
                  onClick={onProducts}
                >
                  Products
                  <svg
                    role="presentation"
                    focusable="false"
                    width="20"
                    height="10"
                    class="icon icon-chevron-bottom"
                    viewBox="0 0 10 7"
                  >
                    <path
                      d="m1 1 4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                </button>
              </li>
              <li key={3}>
                <button
                  className="list-item"
                  onClick={() => props.setNav("Info")}
                >
                  Info
                  <svg
                    role="presentation"
                    focusable="false"
                    width="20"
                    height="10"
                    class="icon icon-chevron-bottom"
                    viewBox="0 0 10 7"
                  >
                    <path
                      d="m1 1 4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                </button>
              </li>
              <li key={4}>
                <button
                  className="list-item"
                  onClick={() => props.setNav("Help Center")}
                >
                  Help Center
                  <svg
                    role="presentation"
                    focusable="false"
                    width="20"
                    height="10"
                    class="icon icon-chevron-bottom"
                    viewBox="0 0 10 7"
                  >
                    <path
                      d="m1 1 4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="header-user">
            <ul className="nav-items user-items">
              <li>
                <button
                  className="user-btn list-item"
                  onClick={routeChangeUser}
                >
                  <svg
                    role="presentation"
                    stroke-width="1.5"
                    focusable="false"
                    width="22"
                    height="22"
                    class="icon icon-account"
                    viewBox="0 0 22 22"
                  >
                    <circle
                      cx="11"
                      cy="7"
                      r="4"
                      fill="none"
                      stroke="currentColor"
                    ></circle>
                    <path
                      d="M3.5 19c1.421-2.974 4.247-5 7.5-5s6.079 2.026 7.5 5"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </button>
              </li>
              <li>
                <button
                  className="user-btn list-item"
                  onClick={routeChangeCart}
                >
                  <svg
                    role="presentation"
                    stroke-width="1.5"
                    focusable="false"
                    width="22"
                    height="22"
                    class="icon icon-cart"
                    viewBox="0 0 22 22"
                  >
                    <path
                      d="M11 7H3.577A2 2 0 0 0 1.64 9.497l2.051 8A2 2 0 0 0 5.63 19H16.37a2 2 0 0 0 1.937-1.503l2.052-8A2 2 0 0 0 18.422 7H11Zm0 0V1"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
