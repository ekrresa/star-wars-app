import React from 'react';
import { render, screen } from '@testing-library/react';

import { Jumbotron } from './index';

describe('Jumbotron Component', () => {
	beforeEach(() => {
		render(<Jumbotron />);
	});

	test('should render all images', () => {
		const siteLogos = screen.getAllByTestId(/Logo/i);
		expect(siteLogos.length).toBe(2);
	});

	test('should render search form', () => {
		const searchForm = screen.getByTestId('searchForm');
		const searchInput = screen.getByTestId('searchInput');
		const searchInputIcon = screen.getByTestId('searchInputIcon');

		expect(searchForm).toBeInTheDocument();
		expect(searchForm.contains(searchInput)).toBeTruthy();
		expect(searchForm.contains(searchInputIcon)).toBeTruthy();
	});
});
