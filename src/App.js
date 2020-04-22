import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import Routes from './routes';

function App() {
	return (
		<>
			<Routes />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}

export default App;
