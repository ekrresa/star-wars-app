import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { Jumbotron } from '../../components/Jumbotron';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { StarshipCard } from '../../components/StarshipsCard';
import { CharacterCard } from '../../components/CharactersCard';
import { Slider } from '../../components/Carousel';
import { HomeSection } from './components/HomeSection';
import { useCancellableQuery } from '../../utils/fetch';

import './home.css';

export default function Home() {
	const { data: starships } = useCancellableQuery(['starships', '/starships/']);
	const { data: planets } = useCancellableQuery(['planets', '/planets/']);
	const { data: people } = useCancellableQuery(['people', '/people/']);

	return (
		<>
			<section className="home">
				<Jumbotron />
				<Container>
					<HomeSection title="popular starships" pageTo="starships">
						<section className="starship-grid">
							{starships ? (
								starships.slice(0, 6).map((item, index) => {
									return <StarshipCard data={item} key={item.name} index={index} />;
								})
							) : (
								<BeatLoader />
							)}
						</section>
					</HomeSection>
					<HomeSection title="popular planets" pageTo="planets">
						<section className="carousel-grid">
							<Slider data={planets} />
						</section>
					</HomeSection>
					<HomeSection title="popular people" pageTo="people">
						<section className="character-grid">
							{people ? (
								people.slice(0, 4).map((item, index) => {
									return <CharacterCard data={item} key={item.name} index={index} />;
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
