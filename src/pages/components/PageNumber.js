import React, {useEffect, useState} from 'react'

const Pagination = (props) => {	
	const [activePage, setActivePage] = useState(props.active);
	const [number, setNumber] = useState(props.number);
	const [goToPage, setGoToPage] = useState(props.goToPage);
	
	let kli = 'li-' + number;
	let kdv = 'dv-' + number;
	
	return (
		<li key={kli} onClick={() => goToPage(number)} className={(activePage == number) ? 'page-item active' : 'page-item'}>
			<div key={kdv} className="page-link">{number}</div>
		</li>
	)
}

export default Pagination