import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; // Import Home component
import Book from './components/Book'; // Import Book component

import './css/normalize.css';
import './css/styles.css';
import './css/menu.css';
// import './css/book.css';
import './css/about.css';

const App = () => {
  return (
    <html lang="en">
      <head>
        {/* ... (head content) */}
      </head>
      <body>
        <Header />
        <main>
          <Home /> {/* Use Home component here */}
          <Book /> {/* Use Book component here */}
        </main>
        <Footer />
        <script src="js/scripts.js"></script>
      </body>
    </html>
  );
}

export default App;
