import React from 'react';
import { Image } from 'semantic-ui-react';
import asparagusImg from '../photos/asparagus.jpg';
import breadImg from '../photos/bread.jpg';
import ceramicBowl from '../photos/ceramicBowl.jpg';

export default function ImgHeader() {
	return (
		<section className='imgHeader'>
			<div>
				<Image src={asparagusImg} className='header-image' />
			</div>
			<div>
				<Image src={breadImg} className='header-image' />
			</div>
			<div>
				<Image src={ceramicBowl} className='header-image' />
			</div>
		</section>
	);
}
