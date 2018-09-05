import React from 'react';

const Search = props => {
	return (
		<div>
			<input type="text" placeholder="Enter a Location" />
			<button type="submit" value="Submit" onClick={props.handleSubmit}>
				Submit
			</button>
		</div>
	);
};

export default Search;
