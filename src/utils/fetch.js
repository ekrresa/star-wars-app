import Axios from 'axios';
import useSWR from 'swr';

export async function fetchData(url, method, data) {
	method = method || 'GET';

	try {
		const result = await Axios({ url, method, data });
		return result.data.results;
	} catch (error) {
		console.error(error);
		return error;
	}
}

export function useCancellableSWR(key, options) {
	const source = Axios.CancelToken.source();

	return [
		useSWR(key, (url) => fetchData(url), {
			revalidateOnFocus: false,
			refreshInterval: 0,
			...options,
		}),
		source,
	];
}
