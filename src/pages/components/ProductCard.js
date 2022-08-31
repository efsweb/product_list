import React from 'react'
import { Link } from 'react-router-dom';
import { TbStar, TbShoppingCart, TbAlignJustified } from "react-icons/tb";

const ProductCard = (props) => {
	let thumb = 'https://dummyjson.com/image/i/products/' + props.prd.id + '/thumbnail.jpg';
	//let linkto = (location.pathname == '/') ? 'Details/' + props.prd.id : props.prd.id;
	return(
		<>
			<div className="col-12 col-md-3 pt-3" key={props.prd.id}>
				<div className="card">
					<img src={thumb} className="card-img-top" />
					<div className="card-body">
						<h6 className="card-title mb-0">{props.prd.title}</h6>
						<small className="text-muted">{props.prd.category}</small>
						<div className="row py-2">
							<div className="col-6">
								£ {props.prd.price}
							</div>
							<div className="col-6 text-end">
								<TbStar /><TbStar /><TbStar /><TbStar /><TbStar />
							</div>
						</div>
						<div className="row pt-1">
							<div className="col-7">
								<a className="btn btn-secondary"><TbShoppingCart /> <small>ADD TO CART</small></a>
							</div>
							<div className="col-5 text-end">
								<Link to={`/Details/${props.prd.id}`} reloadDocument className="btn btn-light"><TbAlignJustified /> <small>Details</small></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductCard