import React, {useState, useEffect} from 'react';

import Logo from './Logo';

const Header = () => {
	return(
		<div className="row pt-3 pb-5 stick-top">
			<div className="col-12 col-md-2">
				<Logo />
			</div>
			<div className="col-12 col-md-10">
				<h6 className="pt-3 text-black-50 d-none d-sm-block">Callashock Store</h6>
				<h6 className="d-block d-sm-none text-end text-black-50">Callashock Store</h6>
				<hr className="py-0 my-0" />
			</div>
		</div>
	);
}

export default Header;
