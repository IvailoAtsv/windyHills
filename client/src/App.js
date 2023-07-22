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
import Menu from './components/Menu'
import DrinksMenu from './components/DrinksMenu';

function App() {
	return (
		<Router>
			<Route exact path="/">
				<GlobalStyle />
				<Hero />
				<Products />
				<Feature />
				<Reservation />
				<Footer />
			</Route>
			<Route path="/admin">
				<GlobalStyle />
				<Admin />
			</Route >
			<Route exact path="/menu">
				<GlobalStyle />
				<Menu />
			</Route>
			<Route path="/drinks">
			<GlobalStyle />
			<DrinksMenu />
			</Route>
		</Router>
	);
}

export default App;