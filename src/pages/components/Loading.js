import React from 'react';

const Loading = () => {
	return (
		<>
			<div className="container text-center">
				<div className="col text-center align-items-center">
					<div className="spinner-border ms-auto text-danger" role="status" aria-hidden="true"></div>
					<div><strong className="text-black-50">Loading</strong></div>
				</div>
			</div>
		</>
	)
}

export default Loading;