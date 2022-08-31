import React from 'react';
import axios from 'axios';
import withRouter from '../withRouter';
import { Link } from 'react-router-dom';

import Loading from './components/Loading';
import ProductCard from './components/ProductCard';
import Description from './components/Description';
import TbArrowBackUp from 'react-icons/tb';
class Details extends React.Component{
	constructor(props){
		super(props);
		this.state = { product: [], recomendations: [], highlight: '', isLoaded: false}
	}

	componentDidMount(){
		this.getDetails();
	}

	getDetails = async() => {
		let id = this.props.params.id;
		let ct = 'smartphones';
		let url = 'https://dummyjson.com/products/' + id;
		let res = await axios.get(url);
		this.setState({ product: res.data, highlight: res.data.images[0], prd_qtd: 1});

		let prl = 'https://dummyjson.com/products/category/' + ct;
		let ans = await axios.get(prl);
		this.setState({ recomendations: ans.data.products, isLoaded: true });
	}

	render(){
		const isLoaded = this.state.isLoaded;
		let content;
		if(isLoaded){
			let info = this.state.product;
			let others = this.state.recomendations;
			let stars = [];
			for(let i = 0; i < Math.round(info.rating); i++){
				stars.push(i);
			}
			content = (
				<>
				<div className="row mb-3">
					<div className="col-12 col-md-3 offset-md-9 text-end">
						<Link className="text-danger" to="/">
							<button type="button" className="btn btn-outline-danger">Back</button>
						</Link>
					</div>
				</div>
				<Description product={info} highlight={info.images[0]} />
				<div className="row mt-5">
					<div className="col-12">
						<h3>Others from this category</h3>
					</div>
				</div>
				<div className="row mt-1 pb-5">
					{others.map((item) => {
						return(
							<ProductCard key={item.id} prd={item} />
						)
					})}
				</div>
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

export default withRouter(Details);