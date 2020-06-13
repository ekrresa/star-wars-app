import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import BeatLoader from 'react-spinners/BeatLoader';
import { Link } from '@reach/router';

import { MovieCard } from '../MovieCard';
import { useImageConfigContext } from '../../context/ImageConfiguration';

import '@brainhubeu/react-carousel/lib/style.css';
import './carousel.css';

export function Slider({ data }) {
	const { data: imageData, status } = useImageConfigContext();

	const BASE_URL = status === 'success' && imageData.images.secure_base_url;

	if (!data) {
		return <BeatLoader />;
	}

	return (
		<Carousel
			slidesPerPage={4}
			arrows
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
			{data.map((item) => {
				return (
					<Link to="#" key={item.id}>
						<MovieCard img={`${BASE_URL}/w500/${item.poster_path}`} name={item.title} />
					</Link>
				);
			})}
		</Carousel>
	);
}
