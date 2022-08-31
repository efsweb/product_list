import React from 'react';

const Thumb = (props) => {
	let img = props.img;
	let clk = props.click;
	return (
		<>
			<div className="thumbs-item" onClick={clk}>
				<img src={img} className="img-fluid" />
			</div>
		</>
	)
}

export default Thumb;