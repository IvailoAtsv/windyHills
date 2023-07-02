import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Reservation from './components/Reservation';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Най-популярни' data={productData} />
      <Feature />
      {/* <Products heading='Вино от нашата винарна' data={productDataTwo} /> */}
      <Reservation />
      <Footer />
    </Router>
  );
}

export default App;