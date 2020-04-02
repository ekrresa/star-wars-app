import React from 'react';
import { render } from '@testing-library/react';
import { createHistory, createMemorySource, LocationProvider } from '@reach/router';

import { Jumbotron } from './index';

function renderWithRouter(
	ui,
	{ route = '/', history = createHistory(createMemorySource(route)) } = {},
) {
	return {
		...render(<LocationProvider history={history}>{ui}</LocationProvider>),
		history,
	};
}

describe('Jumbotron Component', () => {
	test('should render all images', () => {
		const { getAllByTestId } = renderWithRouter(<Jumbotron />);
		const siteLogos = getAllByTestId(/Logo/i);

		expect(siteLogos.length).toBe(2);
	});

	test('should not render search form in homepage', () => {
		const { queryByTestId } = renderWithRouter(<Jumbotron />);
		const searchForm = queryByTestId('searchForm');

		expect(searchForm).toBeNull();
	});
});
