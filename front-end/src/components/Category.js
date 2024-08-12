import React from "react";
import { useState,useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Category.css";
import { callCategory } from "../Helper/Helper";

export default function Category(props) {
  const [category, setCategory] = useState();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await callCategory();
      setCategory(response);
      console.log(response);
    };
    fetchDetails();
  }, []);

  // let showProducts = useNavigate(); 
  const navigate = useNavigate();
  const location = useLocation();


  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  const routeChangeProducts = (id) =>{ 
    props.setNav("none")
    props.setfilter(id)
    let path = `/products`; 
    handleNavigation(path);
  }

  return (
    <div className="category-container">
      <div className="main">
        <button className="category-close" onClick={() => props.setNav("none")}>
          X
        </button>
        <ul className="category-list">
          {category?.map((category, index) => {
            return (
              <li key={category.id} className="category-item">
                {category.categoryname}
                <button id={category.id} onClick={() => {routeChangeProducts(category.id)} } >
                  <svg
                    role="presentation"
                    focusable="false"
                    width="5"
                    height="8"
                    class="icon icon-chevron-right-small reverse-icon"
                    viewBox="0 0 5 8"
                  >
                    <path
                      d="m.75 7 3-3-3-3"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
