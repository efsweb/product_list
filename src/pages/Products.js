import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Thumb from './components/Thumb';
import Filter from './components/Filter';
import Loading from './components/Loading';
import Magnifier from './components/Magnifier';
import Pagination from './components/Pagination';
import ProductCard from './components/ProductCard';
import Description from './components/Description';
import { TbStar, TbShoppingCart, TbCircleCheck, TbAlignJustified } from 'react-icons/tb';

class Products extends React.Component{
	constructor(props){
		super(props);
		this.state = { products: [], categories: [], filter: 'all', page: 1, total: 0, isLoaded: false}
	}

	componentDidMount(){
		this.getCategories();
		this.getList();
	}

	getCategories = async() => {
		let cat = await axios.get('https://dummyjson.com/products/categories');
		this.setState({categories: cat.data});
	}

	getList = async() => {
		let acpg = this.state.page;
		let skip = (acpg - 1) * 10;
		let url = 'https://dummyjson.com/products?limit=10&skip=' + skip;
		let res = await axios.get(url);
		let total = Math.ceil(res.data.total / 10);
		if(total < 1){
			total = 10;
		}
		this.setState({products: res.data.products, filter: 'all', page: acpg, total: total, isLoaded: true});
	}

	filterProducts = async(category) => {
		this.setState({isLoaded: false});
		if(category === 'all'){
			if(category != this.state.filter){
				this.setState({ filter: category, page: 1}, () => {
					this.getList();
				});
			}else{
				this.getList();
			}
		}else{
			let acpg = this.state.page;
			let skip = (acpg - 1) * 10;
			if(category != this.state.filter){
				skip = 0;
				acpg = 1;
			}
			let url = 'https://dummyjson.com/products/category/' + category + '?limit=10&skip=' + skip;
			let res = await axios.get(url);
			let total = Math.ceil(res.data.total / 10);
			if(total < 1){
				total = 10;
			}
			this.setState({ products: res.data.products, filter: category, total: total, page: acpg, isLoaded: true});
		}
	}

	pageProducts = (pg) => {
		this.setState(
			{page: pg},
			() => {
				if(this.state.filter == 'all'){
					this.getList();
				}else{
					this.filterProducts(this.state.filter);
				}
			}
		);
	}

	pgDirection = (direction) => {
		let pg = this.state.page - 1;
		if(direction){
			pg = pg + 2;
		}
		if(pg > 0 && pg <= this.state.total){
			this.pageProducts(pg);
		}
	}

	render(){
		const isLoaded = this.state.isLoaded;
		let content;
		if(isLoaded){
			let list = this.state.products;
			content = (
				<>
				<div className="row">
					<div className="col-12 col-md-3 offset-md-9 text-end">
						<Filter change={this.filterProducts} selected={this.state.filter} items={this.state.categories} />
					</div>
				</div>
				<div className="row">
					{list.map((item) => {
						return(
							<ProductCard key={item.id} prd={item} />
						);
					})}
				</div>
				<Pagination key={new Date().getTime()} np={(direction) => this.pgDirection} click={this.pageProducts} active={this.state.page} pages={this.state.total} />
				</>
			);
			
		}else{
			content = <Loading />;
		}
		return(
			<>
			{content}
			</>
		)
	}
}

export default Products







