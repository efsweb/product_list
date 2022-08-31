import React, {useState, useEffect} from 'react';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Layout from './index';
import Header from './pages/components/Header';
import Products from './pages/Products';
import Details from './pages/Details';

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<>
			<Header/>
			<React.StrictMode>
				<BrowserRouter basename="/">
					<Routes>
						<Route exact path="/" element={<Products />} />
						<Route path="/Details/:id" element={<Details />} />
					</Routes>
				</BrowserRouter>
			</React.StrictMode>
			</>
		);
	}
}

export default App;