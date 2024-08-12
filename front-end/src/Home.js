import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from './store/Store';
import { UserDetails } from './Helper/Helper';

export default function Home(props) {
  const {dispatch} = useAuth();
  const [nav,setNav] = useState("none")
  const [main,setMain] = useState("Hero")
  const [filter,setfilter] = useState();

  const location = useLocation();

  useEffect(() => {
    setMain(props.Main)
  }, [location]);

  const fetchuser = ()=>{
    UserDetails().then((user)=>{
      dispatch({type:'USER',payload:{user:user.Userdetails}});

    })
  }
  useEffect(() =>{
    fetchuser()
  },[])
  
  return (
    <>
      {nav==="Category" && <Category setNav={setNav} setfilter={setfilter}/>}
      <Header showNav={"show"} setNav={setNav} setMain={setMain} setfilter={setfilter} />
      {main==="Hero" && <Hero setMain={setMain}/>}
      {main==="Products" && <Products setMain={setMain} filter={filter}/>}
      <Footer/>
    </>
  );
}
