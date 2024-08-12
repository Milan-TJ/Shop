import React from "react";
import Header from "./components/Header";
import Signupmain from "./components/Signupmain";
import "./Signup.css";
import Footer from "./components/Footer";

export default function Signup() {


  return (
    <>
      <Header />
      <Signupmain/>
      {/* {active === "signup" && <Signupmain setActive={setActive} />}
      {active === "signup1" && <Signupstep1 setActive={setActive} />}
      {active === "signup2" && <Signupstep2 setActive={setActive} />}
      {active === "signup3" && <Signupstep3 setActive={setActive} />} */}
      <Footer/>
    </>
  );
}
