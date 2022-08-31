import React, {useEffect, useRef, useState} from 'react';

const Magnifier = (props) => {
	let path = props.path;
	const [[x,y], setXY] = useState([0,0]);
	const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
	const [showMagnifier, setShowMagnifier] = useState(false);
	const magHeight = 100;
	const magWidth  = 100;
	const magZoom   = 2;

	const handleShow = () => {
		setShowMagnifier(!showMagnifier);
	}

	const startMagnifier = (e) => {
		const { width, height } = e.currentTarget.getBoundingClientRect();
		setSize([width, height]);
		setShowMagnifier(true);
	}

	const udpatePostion = (e) => {
		const { top, left } = e.currentTarget.getBoundingClientRect();
		let x = e.pageX - left - window.pageXOffset;
		let y = e.pageY - top - window.pageYOffset;
		setXY([x,y]);
	}

	return(
		<div className="mag-container">
			<img className="img-fluid" onMouseEnter={startMagnifier} onMouseMove={udpatePostion} onMouseLeave={() => {setShowMagnifier(false)}} src={path} />
			<div className={showMagnifier ? 'mag-zoom d-block' : 'mag-zoom d-none'} style={{
				backgroundImage: `url('${path}')`,
				top: `${y - magHeight / 2}px`,
				left: `${x - magWidth / 2}px`,
				backgroundSize: `${imgWidth * magZoom}px ${imgHeight * magZoom}px`,
				backgroundPositionY: `${-y * magZoom + magHeight / 2}px`,
				backgroundPositionX: `${-x * magZoom + magWidth / 2}px`
			}}></div>
		</div>
	);
}
export default Magnifier;