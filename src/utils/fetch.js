import axios from 'axios';
import { useQuery } from 'react-query';

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

export function useCancellableQuery(query) {
	const { data, error, status } = useQuery(query, fetchResource, {
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	});

	return { data, error, status };
}
