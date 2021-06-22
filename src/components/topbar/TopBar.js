import React from "react";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-left">
        <i className="top-icon fab fa-facebook-square"></i>
        <i className="top-icon fab fa-twitter-square"></i>
        <i className="top-icon fab fa-instagram-square"></i>
        <i className="top-icon fab fa-pinterest-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">HOME</li>
          <li className="top-list-item">ABOUT</li>
          <li className="top-list-item">CONTACT</li>
          <li className="top-list-item">WRITE</li>
          <li className="top-list-item">LOGIN</li>
        </ul>
      </div>
      <div className="top-right">
        <img
          className="avatar"
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          alt="avatar"
        />
        <i className="top-search-icon fas fa-search"></i>
      </div>
    </div>
  );
}
