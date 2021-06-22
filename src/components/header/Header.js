import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-title-sm">React & Node</span>
        <span className="header-title-lg">Blog</span>
      </div>
      <img
        className="header-img"
        alt="header"
        src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"
      />
    </div>
  );
}
