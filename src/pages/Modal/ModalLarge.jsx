import React from 'react';

export const ModalLarge = ({ show, setShow }) => {
	return (
		<div
			className="modal-bg bg-color-8"
			style={{ display: show ? 'flex' : 'none' }}
		>
			<div className="modal modal-large pos-rel p-4 box-shadow">
				<h2>Here! Need your attention!</h2>

				<button
					className="btn bg-inherit pos-abs top-right m-3"
					onClick={() => setShow(false)}
				>
					<i className="far fa-times-circle font-4"></i>
				</button>
			</div>
		</div>
	);
};
