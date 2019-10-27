import React, { useState, useEffect } from 'react';
import ImgHeader from './ImgHeader';
import MainBody from './mainBody';
import axiosWithAuth from '../../utils/axiosWithAuth';

export default function RestaurantDetails() {
	const [state, setState] = useState('');

	useEffect(() => {
		axiosWithAuth()
			.get(`/cities/1/restaurants`)
			.then(res => {
				setState(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className='restaurant-details'>
			<ImgHeader />
			<MainBody state={state} />
		</div>
	);
}
