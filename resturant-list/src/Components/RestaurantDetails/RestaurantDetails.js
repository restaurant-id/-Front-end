import React, { useState, useEffect } from 'react';
import ImgHeader from './ImgHeader';
import LeftBody from './leftBody';
import RightBody from './rightBody';
import axiosWithAuth from '../../utils/axiosWithAuth';

export default function RestaurantDetails() {
	const [state, setState] = useState('');

	useEffect(() => {
		axiosWithAuth()
			.get('/cities')
			.then(res => {
				return setState(res);
			})
			.catch(err => console.log(err));
	}, []);

	console.log(state);

	return (
		<div className='restaurant-details'>
			<ImgHeader />
			<LeftBody />
			<RightBody />
		</div>
	);
}
