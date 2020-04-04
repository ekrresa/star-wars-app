import Axios from 'axios';
import useSWR from 'swr';

export async function fetchData(url, token) {
	try {
		const result = await Axios({ url, cancelToken: token });
		return result.data.results;
	} catch (error) {
		console.error(error);
		return error;
	}
}

export function useCancellableSWR(key, swrOptions) {
	const source = Axios.CancelToken.source();
	const token = source.token;

	return [
		useSWR(key, (url) => fetchData(url, token), {
			revalidateOnFocus: false,
			refreshInterval: 0,
			...swrOptions,
		}),
		source,
	];
}
