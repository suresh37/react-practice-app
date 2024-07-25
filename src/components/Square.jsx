import React, { useState } from 'react';

const GameButton = ({ value, onSquareClick }) => {
	const handleClick = () => {
		console.log('Square:: Clicked value', value);
	};
	return (
		<>
			<button
				className='square'
				onClick={onSquareClick}
			>
				{value}
			</button>
		</>
	);
};

export default GameButton;
