import logo from './logo.svg';
import './App.css';
import Header from './header/header';

import { Component, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './footer/footer';
import Login from './login/login';
import Products from './products/products';
import ProductDetails from './productDetails/productDetails';
import { AuthProvider, AuthContext } from './context/authContext';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Profile from './profile/profile';
import { CartProvider } from 'react-use-cart';

function App() {
	const authContext = useContext(AuthContext);

	return (
		<>
			<Router>
				<Header />
				<Switch>
					{!authContext.user.id ? (
						<Route exact path="/login">
							<Login />
						</Route>
					) : (
						<Redirect
							from="/login"
							to="/"
						/>
					)}

					<Route exact path="/product/:id">
						<ProductDetails />
					</Route>
					<Route exact path="/">
						<Products />
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Footer nom="Mohamed" prenom="ali" />
				</Switch>
			</Router>
		</>
	);
}

function AppWithStore() {
	return (
		<AuthProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</AuthProvider>
	);
}

export default AppWithStore;
