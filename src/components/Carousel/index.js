import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import BeatLoader from 'react-spinners/BeatLoader';
import { Link } from '@reach/router';

import { starPlanets } from '../../utils/images';
import '@brainhubeu/react-carousel/lib/style.css';
import './carousel.css';

export function Slider({ data }) {
	if (!data) {
		return <BeatLoader />;
	}

	const getRandomPlanetImage = () => {
		const randomIndex = Math.floor(Math.random() * starPlanets.length);
		return starPlanets[randomIndex];
	};

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
							<img src={getRandomPlanetImage()} alt="planet1" />
							<div className="carousel-planet">{item.name}</div>
						</div>
					</Link>
				);
			})}
		</Carousel>
	);
}
