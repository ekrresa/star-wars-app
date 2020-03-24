import React from 'react';

import './section-header.css';

export function SectionHeader({ title }) {
	return (
		<div className="section-header">
			<h2>{title}</h2>
			<hr className="section-linebreak" />
		</div>
	);
}
