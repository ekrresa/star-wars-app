import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const ImageConfigContext = createContext(null);

export function useImageConfigContext() {
	return useContext(ImageConfigContext);
}

export function ImageConfigProvider({ children }) {
	const imageConfigData = useProvideImageData();

	return (
		<ImageConfigContext.Provider value={imageConfigData}>
			{children}
		</ImageConfigContext.Provider>
	);
}

function useProvideImageData() {
	const { data, status } = useQuery('imageConfig', fetchImageConfig, {
		refetchOnWindowFocus: false,
	});

	return { data, status };
}

async function fetchImageConfig() {
	const { REACT_APP_MOVIE_APIKEY } = process.env;
	const source = axios.CancelToken.source();

	const { data } = await axios({
		method: 'GET',
		url: `https://api.themoviedb.org/3/configuration?api_key=${REACT_APP_MOVIE_APIKEY}`,
		cancelToken: source.token,
	});

	data.cancel = () => {
		source.cancel('Request was cancelled');
	};

	return data;
}
