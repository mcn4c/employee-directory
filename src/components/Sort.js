import React from 'react';

function Sort(props) {
	return (
		<div className="sort-button">
			<button onClick={props.handleButtonSubmit} className="btn btn-primary">
				Sort by age
			</button>
		</div>
	);
}

export default Sort;
