import React from 'react';
import Navigation from './Navigation'; // Adjust the path based on your project structure

const Header = () => {
  return (
    <header>
      <a href="index.html">
        <img
          src="images/logo-horizontal-white.svg"
          alt="Little Lemon Horizontal Logo"
          title="Visit Our Home Page"
        />
      </a>
      <Navigation />
    </header>
  );
}

export default Header;