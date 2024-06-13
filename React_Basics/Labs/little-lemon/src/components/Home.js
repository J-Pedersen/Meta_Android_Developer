import React from 'react';

import hero from "../assets/images/hero.png";
import book from "../assets/images/book.jpg";
import diningRoom from "../assets/images/indoorDiningRoom.jpg";
import seasonal from "../assets/images/seasonal.jpg";

const Home = () => {
  return (
    <section className="cards">
      <h1 className="hidden">Little Lemon</h1>
      <article className="hero-container">
        <h2 className="cd-bg">Authentic Mediterranean Cuisine</h2>
        <div>
          <img src={hero} alt="traditional mediterranean dishes" title="traditional Mediterranean Dishes" />
        </div>
        <div className="promo-container promo">
          <a href="book.html" className="book-event-link promo-link" title="Booking Page">Free Appetizer <span className="star">*</span></a>
        </div>
        <p className="promo-details"><strong>
          <span className="star">*</span> Get a free appetizer with the purchase of your meal when you book your table, party, or event in advance!
        </strong></p>
      </article>

      <section className="cards">
        <h2 className="hidden">Little Lemon Highlights</h2>

        <article className="card">
          <h2 className="cd-bg">Seasonal Menu</h2>
          <div className="card-img-container">
            <img src={seasonal} alt="Seasonal Dishes" title="Seasonal Dishes" />
          </div>
          <p>
            Our seasonal menu consists of 12 - 15 Mediterranean classics crafted to perfection using only the freshest of ingredients by our excellent team of chefs.
          </p>
          <p className="spacer">
            In addition, we also serve many authentic Italian, Greek, and Turkish staples, breakfast, lunch, and dinner appetizers, dishes, and desserts available year-round on our menu.
          </p>
          <div className="menu-container">
            <a href="menu.html" className="menu-link" title="Menu Page"><strong>Our Menu</strong></a>
          </div>
        </article>

        <article className="card">
          <h2 className="cd-bg">All Occasions</h2>
          <div className="card-img-container">
            <img src={book} alt="Table For Two" title="A Table Set For Two" />
          </div>
          <p>
            Indulge in exquisite Mediterranean flavors at Little Lemon, offering a versatile ambiance perfect for romantic dinners, lively celebrations, and delightful breakfast or lunch gatherings.
          </p>
          <p className="spacer">
            Immerse yourself in a culinary journey that caters to every occasion with sophistication and charm.
          </p>
          <div className="book-event-container">
            <a href="book.html" className="book-event-link" title="Booking Page"><strong>Book Your Table Today!</strong></a>
          </div>
        </article>

        <article className="card">
          <h2 className="cd-bg">Our Hours</h2>
          <div className="card-img-container">
            <img src={diningRoom} alt="Little Lemon Indoor Dining Room" title="Little Lemon Indoor Dining Room" />
          </div>
          <div>
            <ul className="hours">
              <li>Tue - Fri Open 7AM - 2PM / 4PM - 11PM</li>
              <li>Sat - Sun Open 7AM - 9PM</li>
              <li>Mon - Closed</li>
            </ul>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Home;