import React from 'react';

import { Footer } from '../../components/Footer';
import { MovieCard } from '../../components/MovieCard';
import { BackToHome } from '../../components/BackToHome';
import { useImageConfigContext } from '../../context/ImageConfiguration';

import { useCancellableQuery } from '../../utils/fetch';
import '../index.css';
import './films.css';

export default function Films() {
	const { data: movies, status: moviesStatus } = useCancellableQuery([
		'movies',
		'/collection/10',
	]);

	const { data: imageData, status } = useImageConfigContext();

	const BASE_URL = status === 'success' && imageData.images.secure_base_url;

	return (
		<>
			<main className="page background">
				<div className="container">
					<div className="title">
						<h1 className="title-text">The Star Wars Collection</h1>
						<BackToHome />
					</div>
					{moviesStatus === 'success' ? (
						<section className="film-grid">
							{movies.parts.map((item) => (
								<MovieCard key={item.id} img={`${BASE_URL}/w500/${item.poster_path}`} />
							))}
						</section>
					) : (
						<div>loading...</div>
					)}
				</div>
			</main>
			<Footer />
		</>
	);
}
