import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './carousel.css';

import planet1 from '../../assets/planet-1.jpg';
import planet2 from '../../assets/planet-2.jpg';
import planet3 from '../../assets/planet-3.jpg';
import { Link } from '@reach/router';

export function Slider({ data }) {
	return (
		<Carousel
			slidesPerPage={3}
			arrows
			infinite
			dots
			breakpoints={{
				640: {
					slidesPerPage: 1,
					arrows: false,
				},
				900: {
					slidesPerPage: 2,
					arrows: true,
				},
			}}
		>
			{data.slice(0, 3).map((item) => {
				return (
					<Link to="#" key={item.name}>
						<div className="carousel-image">
							<img src={planet1} alt="planet1" />
							<div className="carousel-planet">{item.name}</div>
						</div>
					</Link>
				);
			})}
		</Carousel>
	);
}
