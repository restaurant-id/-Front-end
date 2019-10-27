import React from 'react';

export default function mainBody(props) {
	const { state } = props;
	const { restaurants } = state;

	console.log(restaurants);

	return (
		<div className='main-body'>
			{restaurants
				? restaurants.map(rest => (
						<div key={rest.restID}>
							<h2>City: {rest.restName}</h2>
							<h3>Name: {} </h3>
							<p></p>
						</div>
				  ))
				: null}
		</div>
	);
}
