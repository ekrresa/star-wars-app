import React from 'react';

import { SectionHeader } from '../../../components/SectionHeader';
import { ViewMoreButton } from './ViewButton';

export function HomeSection({ title, children, pageTo }) {
	return (
		<section>
			<SectionHeader title={title} />
			{children}
			<ViewMoreButton name={pageTo} />
		</section>
	);
}
