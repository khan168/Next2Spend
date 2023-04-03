import { useState } from 'react';
import '../styles/NavBar.css';
import React from "react";

function NavBar(props){
  const [pathName, setPathName] = useState(window.location.pathname);

  window.onpopstate = function (event) {
    setPathName(window.location.pathname);
  };

  const user = localStorage.getItem("token");
  console.log(user);
  const shouldShowHello = pathName !== "/login" && pathName !== "/signup";
  const shouldShowLoginSignup = pathName ==="/login" || pathName==="/signup" || (pathName==="/" && user===null);
    return (
      <div className="NavBar">
        <div className="LogoContainer">
          <a href="/">Next2Spend</a>
        </div>
        <div className="Buttons">
          <ul className="ButtonLinks">
            {shouldShowLoginSignup && <li className="ButtonLinkWrapper">
              <a href="/login" className="ButtonLink">
                Log In
              </a>
            </li>}
            {shouldShowLoginSignup && <li className="ButtonLinkWrapper">
              <a href="/signup" className="ButtonLink">
                Sign Up
              </a>
            </li>}
            {shouldShowHello && props.data && (
              <li className="ButtonLinkWrapper">Hello {props.data.name}</li>
            )}
          </ul>
        </div>
      </div>
    );
}

export default NavBar;
