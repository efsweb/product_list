import React, {useState} from 'react';

import Thumb from './Thumb';
import Magnifier from './Magnifier';
import { TbStar, TbShoppingCart, TbCircleCheck } from 'react-icons/tb';

const Description = (props) => {
	const [prd_qtd, setPrd_qtd] = useState(1);
	const [highlight, setHighlight] = useState(props.highlight);

	let info = props.product;
	let stars = [];
	for(let i = 0; i < Math.round(info.rating); i++){
		stars.push(i);
	}

	const handleQuantity = (e) => {
		let i = e.target.value;
		this.setPrd_qtd(i);
	}

	const productQuantity = (add) => {
		let i = prd_qtd;
		if(add){
			i++;
			setPrd_qtd(i);
		}else{
			if(i > 1){
				i--;
				setPrd_qtd(i);
			}
		}
	}

	const changeHighlight = (img) => {
		setHighlight(img);
	}

	return (
		<>
			<div className="row">
				<div className="col-12 col-md-4">
					<div className="row">
						<div className="col-12">
							<Magnifier path={highlight} />
						</div>
					</div>
					<div className="row">
						<div className="col-12 pt-2">
							<div className="thumbs-holder">
								{info.images.map((img, index) => {
									return(
										<Thumb key={index} img={img} click={() => changeHighlight(img)} />
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-8 pl-4">
					<div className="row">
						<div className="col-12">
							<h3 className="text-black-50">{info.title}</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h5><small>£ {info.price}</small></h5>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<TbCircleCheck className="text-success" /> <small>{info.stock} Units in Stock</small>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							{stars.map((index) => {
								return(<TbStar key={index} className="text-warning" />)
							})}
						</div>
					</div>
					<div className="row mt-2">
						<div className="col-12">
							<p><small>{info.description}</small></p>
						</div>
					</div>
					<div className="row">
						<div className="col-6 col-md-3">
							<div className="qty_box numbers-row">
								<input type="number" name="cart_quantity" value={prd_qtd} onChange={handleQuantity} size="3" inputMode="numeric" min="1" step="1" pattern="{0-9}" className="quantity-input form-control" />
								<div onClick={() => productQuantity(1)} className="inc ibtn"> + </div>
								<div onClick={() => productQuantity(0)} className="dec ibtn"> - </div>
							</div>
						</div>
						<div className="col-6 col-md-9 text-end text-sm-start">
							<button type="button" className="btn btn-outline-danger"><TbShoppingCart /> <small>Add to Cart</small></button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Description;










