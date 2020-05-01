import React, { useState } from 'react';
import { useLocation, navigate } from '@reach/router';
import { PropagateLoader } from 'react-spinners';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import { AiFillCaretLeft, AiFillCaretRight, AiOutlineEllipsis } from 'react-icons/ai';
import queryString from 'query-string';

import { Jumbotron } from '../../components/Jumbotron';
import { CharacterCard } from '../../components/CharactersCard';
import { Footer } from '../../components/Footer';
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
		navigate(`${location.pathname}?filter=${selectedOption.value}`);
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
					<section className="pagination">
						{status === 'success' && (
							<ReactPaginate
								pageCount={Math.ceil(resolvedData.count / 10)}
								marginPagesDisplayed={2}
								pageRangeDisplayed={2}
								disableInitialCallback={true}
								initialPage={parseInt(page) - 1}
								containerClassName={'paginate-container'}
								pageClassName={'paginate-item'}
								previousLabel={<AiFillCaretLeft />}
								nextLabel={<AiFillCaretRight />}
								pageLinkClassName={'paginate-link'}
								breakLabel={<AiOutlineEllipsis />}
								breakClassName={'ellipsis'}
								activeClassName={'active'}
								hrefBuilder={(page) => {
									return `http://swapi.dev/api/people/?page=${page}`;
								}}
								onPageChange={handlePageClick}
								disabledClassName="disabled"
							/>
						)}
					</section>
				</section>
			</main>
			<Footer />
		</>
	);
}
