import React from 'react'
import { TbFilter } from "react-icons/tb";

const Filter = (props) => {
	let options = [];
	props.items.forEach((item, index) => {
		options.push(<option key={index} value={item}>{item}</option>);
	})

	const handleChange = (e) => {
		let category = e.currentTarget.value;
		props.change(category);
	}

	return(
		<div className="input-group">
			<select value={props.selected == null ? 'all' : props.selected} onChange={handleChange} className="form-control form-select form-select-sm">
				<option value="all">All</option>
				{options}
			</select>
			<span className="input-group-text" id="basic-addon2"><TbFilter />Category</span>
		</div>
	)
}

export default Filter