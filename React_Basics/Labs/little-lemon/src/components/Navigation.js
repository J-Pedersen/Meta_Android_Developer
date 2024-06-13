import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="index.html" title="Visit Our Home Page">
            Home
          </a>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li className="nav-item">
          <a href="menu.html" title="View Our Menu">
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a href="book.html" title="Book a Table">
            Book
          </a>
        </li>
        <li className="nav-item">
          <a href="about.html" title="About Little Lemon">
            About
          </a>
        </li>
      </ul>
      <div className="burger-menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navigation;