import axios from 'axios';
import { useQuery, usePaginatedQuery } from 'react-query';

export async function fetchMovie(key, resource) {
	const { REACT_APP_BASE_URL, REACT_APP_MOVIE_TOKEN } = process.env;

	const { data } = await axios({
		method: 'GET',
		url: `${REACT_APP_BASE_URL}${resource}`,
		headers: {
			Authorization: `Bearer ${REACT_APP_MOVIE_TOKEN}`,
		},
	});

	return data;
}

async function fetchResource(key, resource) {
	const { REACT_APP_STAR_WARS_URL } = process.env;
	const source = axios.CancelToken.source();

	const { data } = await axios({
		method: 'GET',
		url: `${REACT_APP_STAR_WARS_URL}${resource}`,
		cancelToken: source.token,
	});

	data.results.cancel = () => {
		source.cancel('Request was cancelled');
	};

	return data.results;
}

async function fetchPages(key, resource, page) {
	const source = axios.CancelToken.source();

	const { data } = await axios({
		method: 'GET',
		url: `http://swapi.dev/api/${resource}/?page=${page}`,
		cancelToken: source.token,
	});

	data.cancel = () => {
		source.cancel('Request was cancelled');
	};

	return data;
}

export function useCancellableQuery(query) {
	const { data, error, status } = useQuery(query, fetchResource, {
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	});

	return { data, error, status };
}

export function usePagesQuery(query) {
	const { resolvedData, error, status } = usePaginatedQuery(query, fetchPages, {
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	});

	return { resolvedData, error, status };
}
