import React from './node_modules/react';

import './container.css';

function Container({ children }) {
	return <section className="container">{children}</section>;
}

export default Container;
