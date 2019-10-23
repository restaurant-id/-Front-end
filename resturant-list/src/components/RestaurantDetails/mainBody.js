import React from 'react';
import LeftBody from './leftBody';
import RightBody from './rightBody';

export default function mainBody() {
	return (
		<section className='main-body'>
			<LeftBody />
			<RightBody />
		</section>
	);
}
