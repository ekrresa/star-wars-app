import React from 'react';
import useSWR from 'swr';
import BeatLoader from 'react-spinners/BeatLoader';

import { Jumbotron } from '../../components/Jumbotron';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { StarshipCard } from '../../components/StarshipsCard';
import { CharacterCard } from '../../components/CharactersCard';
import { Slider } from '../../components/Carousel';
import { HomeSection } from './HomeSection';

import './home.css';

export default function Home() {
	const { data: starships } = useSWR('/starships/');
	const { data: characters } = useSWR('/people/');
	const { data: planets } = useSWR('/planets/');

	return (
		<>
			<section className="home">
				<Jumbotron />
				<Container>
					<HomeSection title="popular starships">
						<section className="starship-grid">
							{starships ? (
								starships.slice(0, 6).map((item) => {
									return <StarshipCard data={item} key={item.name} />;
								})
							) : (
								<BeatLoader />
							)}
						</section>
					</HomeSection>
					<HomeSection title="popular planets">
						<section className="carousel-grid">
							<Slider data={planets} />
						</section>
					</HomeSection>
					<HomeSection title="popular characters">
						<section className="character-grid">
							{characters ? (
								characters.slice(0, 4).map((item) => {
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
