import { useState } from 'react';
import '../styles/NavBar.css';
import React from "react";

function NavBar(props){
  const [pathName, setPathName] = useState(window.location.pathname);

  window.onpopstate = function (event) {
    setPathName(window.location.pathname);
  };

  const shouldShowHello = pathName !== "/login" && pathName !== "/signup";
    return (
      <div className="NavBar">
        <div className="LogoContainer">
          <a href="/">Next2Spend</a>
        </div>
        <div className="Buttons">
          <ul className="ButtonLinks">
            <li className="ButtonLinkWrapper">
              <a href="/login" className="ButtonLink">
                Log In
              </a>
            </li>
            <li className="ButtonLinkWrapper">
              <a href="/signup" className="ButtonLink">
                Sign Up
              </a>
            </li>
            {shouldShowHello && props.data && (
              <li className="ButtonLinkWrapper">Hello {props.data.name}</li>
            )}
          </ul>
        </div>
      </div>
    );
}

export default NavBar;
