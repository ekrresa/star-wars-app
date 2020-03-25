import Axios from 'axios';

export async function fetchData(url) {
	const result = Axios.get(url)
		.then((res) => res.data.results)
		.catch((err) => err);

	return result;
}
