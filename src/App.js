import React from 'react';
import { SWRConfig } from 'swr';
import { fetchData } from './utils/fetch';
import Routes from './routes';

function App() {
	return (
		<SWRConfig
			value={{
				refreshInterval: 0,
				fetcher: (...args) => fetchData(...args),
				revalidateOnFocus: false,
			}}
		>
			<Routes />
		</SWRConfig>
	);
}

export default App;
