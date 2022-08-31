import React, {useEffect, useState} from 'react';

import PageNumber from './PageNumber';

const Pagination = (props) => {	
	const [np, setNP] = useState(props.np);
	const pageNumber = [];
	for (let i = 1; i <= props.pages; i++) {
		pageNumber.push(i);
	}
	
	const goToPage = (number) => {
		props.click(number);
	}

	return (
		<div className="row py-5">
			<div className="col-12 text-end">
				<nav>
					<ul className="pagination pagination-sm justify-content-end">
						<li key="lip-0" className="page-item"><a onClick={() => np(0)} className="page-link link-danger">Previous</a></li>
						{pageNumber.map((item) => {
							return(
								<PageNumber key={item + new Date().getTime()} goToPage={() => goToPage} active={props.active} number={item} />
							)
						})}
						<li key="lin-0" className="page-item"><a onClick={() => np(1)} className="page-link link-danger">Next</a></li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Pagination