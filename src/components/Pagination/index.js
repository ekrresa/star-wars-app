import React from 'react';
import ReactPaginate from 'react-paginate';
import { AiFillCaretLeft, AiFillCaretRight, AiOutlineEllipsis } from 'react-icons/ai';

import './paginate.css';

export function Pagination({ page, count, onPageChange, pageUrl }) {
	return (
		<section className="pagination">
			<ReactPaginate
				pageCount={Math.ceil(count / 10)}
				marginPagesDisplayed={2}
				pageRangeDisplayed={2}
				disableInitialCallback={true}
				initialPage={parseInt(page) - 1}
				containerClassName={'paginate-container'}
				pageClassName={'paginate-item'}
				previousLabel={<AiFillCaretLeft />}
				nextLabel={<AiFillCaretRight />}
				pageLinkClassName={'paginate-link'}
				breakLabel={<AiOutlineEllipsis />}
				breakClassName={'ellipsis'}
				activeClassName={'active'}
				hrefBuilder={(page) => {
					return `${pageUrl}${page}`;
				}}
				onPageChange={onPageChange}
				disabledClassName="disabled"
			/>
		</section>
	);
}
