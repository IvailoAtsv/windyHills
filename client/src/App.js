import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <GlobalStyle />
        <Hero />
        <Products heading='Предложения от нашата кухня' data={productData} />
        <Feature />
      <Reservation />
      <Footer />
      </Route>
      <Route path="/admin">
      <GlobalStyle />
        <Admin />
      </Route>
    </Router>
  );
}

export default App;