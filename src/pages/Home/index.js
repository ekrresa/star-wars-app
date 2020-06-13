import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { Jumbotron } from '../../components/Jumbotron';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { StarshipCard } from '../../components/StarshipsCard';
import { CharacterCard } from '../../components/CharactersCard';
import { Slider } from '../../components/Carousel';
import { HomeSection } from './components/HomeSection';
import { useCancellableQuery, usePagesQuery } from '../../utils/fetch';

import './home.css';

export default function Home() {
	const { status: starshipsStatus, resolvedData: starships } = usePagesQuery([
		'starshipPages',
		'starships',
		1,
	]);
	const { data: movies, status: moviesStatus } = useCancellableQuery([
		'movies',
		'/collection/10',
	]);
	const { status: peopleStatus, resolvedData: people } = usePagesQuery([
		'peoplePages',
		'people',
		1,
	]);

	return (
		<>
			<section className="home">
				<Jumbotron />
				<Container>
					<HomeSection title="popular starships" pageTo="starships">
						<section className="starship-grid">
							{starshipsStatus === 'success' ? (
								starships.results.slice(0, 6).map((item, index) => {
									return <StarshipCard data={item} key={item.name} index={index} />;
								})
							) : (
								<BeatLoader />
							)}
						</section>
					</HomeSection>
					<HomeSection
						title="the star wars collection"
						pageTo="films"
						viewText="view gallery"
					>
						<section className="carousel-grid">
							{moviesStatus === 'success' ? (
								<Slider data={movies.parts} />
							) : (
								<BeatLoader />
							)}
						</section>
					</HomeSection>
					<HomeSection title="popular people" pageTo="people">
						<section className="character-grid">
							{peopleStatus === 'success' ? (
								people.results.slice(0, 4).map((item) => {
									return <CharacterCard data={item} key={item.name} />;
								})
							) : (
								<BeatLoader />
							)}
						</section>
					</HomeSection>
				</Container>
			</section>
			<Footer />
		</>
	);
}
