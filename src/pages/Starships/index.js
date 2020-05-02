import React from 'react';
import { useLocation } from '@reach/router';
import { PropagateLoader } from 'react-spinners';
import { navigate } from '@reach/router';
import queryString from 'query-string';

import { Jumbotron } from '../../components/Jumbotron';
import { StarshipCard } from '../../components/StarshipsCard';
import { BackToHome } from '../../components/BackToHome';
import { Footer } from '../../components/Footer';
import { Pagination } from '../../components/Pagination';
import { usePagesQuery } from '../../utils/fetch';
import '../index.css';
import './starships.css';

export default function Starships() {
	const location = useLocation();

	const [page, setPage] = React.useState(() => {
		const parsed = queryString.parse(location.search);
		return parsed.page || 1;
	});
	const { status, resolvedData } = usePagesQuery(['starshipPages', 'starships', page]);

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
					<section className="page-grid">
						{status === 'success' ? (
							resolvedData.results.map((item, index) => {
								return <StarshipCard data={item} key={item.name} index={index} />;
							})
						) : (
							<PropagateLoader />
						)}
					</section>
					{status === 'success' && (
						<Pagination
							count={resolvedData.count}
							onPageChange={handlePageClick}
							pageUrl="http://swapi.dev/api/starships/?page="
							page={page}
						/>
					)}
				</section>
			</main>
			<Footer />
		</>
	);
}
