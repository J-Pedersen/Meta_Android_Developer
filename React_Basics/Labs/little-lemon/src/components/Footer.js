import React from 'react';

const Footer = () => {
  return (
    <footer>
    <div className="footer-left">
      <div className="logo-small">
        <a href="index.html"><img src="images/logo-vertical-white.svg" alt="Little Lemon Vertical Logo" title="Visit Our Home Page" /></a>
      </div>
      <div className="contact">
        <h3><u><b>Contact Us</b></u></h3>
        <ul>
          <li>123 West Fake St</li>
          <li>Chicago IL 55555</li>
          <li>(789)555-5555</li>
          <li>littlelemonbigcity<br />@littlelemon.com</li>
        </ul>
      </div>
    </div>
    <div className="footer-right">
      <div className="sitemap">
        <h3><u><b>Sitemap</b></u></h3>
        <nav>
          <ul className="sitemap-left">
            <li><a href="index.html" title="Visit Our Home Page">Home</a></li>
            <li><a href="menu.html" title="View Our Menu">Our Menu</a></li>
            <li><a href="book.html" title="Book a Table">Book A Table</a></li>
            <li><a href="about.html" title="About Us">About Us</a></li>
            <li><a href="credits.html" title="Credits">Credits</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-far-right">
        <div className="social">
          <h3><u><b>Social Media</b></u></h3>
          <a href="#" target="_blank"><img src="images/facebook.svg" alt="Facebook Logo" title="Facebook" /></a>
          <a href="#" target="_blank"><img src="images/instagram.svg" alt="Instagram Logo" title="Instagram" /></a>
          <a href="#" target="_blank"><img src="images/twitter.svg" alt="Twitter/X Logo" title="Twitter/X" /></a>
        </div>
        <div className="copyright">
          <p><strong><span className="copy-tag">&copy;</span> Copyright Little Lemon</strong></p>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;