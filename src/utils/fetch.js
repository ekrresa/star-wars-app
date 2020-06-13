import axios from 'axios';
import { useQuery, usePaginatedQuery } from 'react-query';

export async function fetchMovies(key, resource) {
	const { REACT_APP_MOVIE_APIKEY } = process.env;
	const source = axios.CancelToken.source();

	const { data } = await axios({
		method: 'GET',
		url: `https://api.themoviedb.org/3${resource}?api_key=${REACT_APP_MOVIE_APIKEY}`,
		cancelToken: source.token,
	});

	data.cancel = () => {
		source.cancel('Request was cancelled');
	};

	return data;
}

async function fetchPages(key, resource, page) {
	const source = axios.CancelToken.source();

	const { data } = await axios({
		method: 'GET',
		url: `https://swapi.dev/api/${resource}/?page=${page}`,
		cancelToken: source.token,
	});

	data.cancel = () => {
		source.cancel('Request was cancelled');
	};

	return data;
}

export function useCancellableQuery(query) {
	const { data, error, status } = useQuery(query, fetchMovies, {
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
