import React, { useState } from 'react';
import { useLocation, navigate } from '@reach/router';
import { PropagateLoader } from 'react-spinners';
import Select from 'react-select';
import queryString from 'query-string';

import { Jumbotron } from '../../components/Jumbotron';
import { CharacterCard } from '../../components/CharactersCard';
import { Footer } from '../../components/Footer';
import { BackToHome } from '../../components/BackToHome';
import { Pagination } from '../../components/Pagination';
import { usePagesQuery } from '../../utils/fetch';
import '../index.css';
import './people.css';

const genderOptions = [
	{ value: 'all', label: 'All' },
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
	{ value: 'robot', label: 'Robot' },
];

export default function People() {
	const location = useLocation();

	const [page, setPage] = useState(() => {
		const parsed = queryString.parse(location.search);
		return parsed.page || 1;
	});
	const { status, resolvedData } = usePagesQuery(['peoplePages', 'people', page]);

	const handleFilter = (selectedOption) => {
		const parsed = queryString.parse(location.search);
		parsed.filter = selectedOption.value;
		const parsedUrl = queryString.stringify(parsed);

		navigate(`${location.pathname}?${parsedUrl}`);
	};

	const handlePageClick = (page) => {
		const newPage = page.selected + 1;
		setPage(newPage);

		const parsed = queryString.parse(location.search);
		parsed.page = newPage;
		const parsedUrl = queryString.stringify(parsed);

		navigate(`${location.pathname}?${parsedUrl}`);
	};

	return (
		<>
			<main className="page">
				<Jumbotron title={location.pathname.substring(1)} />
				<section className="container" style={{ marginTop: '4em' }}>
					<BackToHome />
					<section className="select">
						<Select
							onChange={handleFilter}
							options={genderOptions}
							placeholder="Select Gender..."
						/>
					</section>
					<section className="page-grid">
						{status === 'success' ? (
							resolvedData.results.map((item, index) => {
								return <CharacterCard data={item} key={item.name} index={index} />;
							})
						) : (
							<PropagateLoader />
						)}
					</section>
					{status === 'success' && (
						<Pagination
							page={page}
							pageUrl="http://swapi.dev/api/people/?page="
							onPageChange={handlePageClick}
							count={resolvedData.count}
						/>
					)}
				</section>
			</main>
			<Footer />
		</>
	);
}
