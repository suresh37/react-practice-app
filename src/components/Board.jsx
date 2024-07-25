import React from 'react';
import Square from './Square';

const GameButton = () => {
	return (
		<div>
        <div className='board-row'>
        <Square></Square>
        <Square></Square>
        <Square></Square>
       </div>

       <div className='board-row'>
	   <Square></Square>
        <Square></Square>
        <Square></Square>
       </div>

       <div className='board-row'>
	   <Square></Square>
        <Square></Square>
        <Square></Square>
       </div>
       </div>
	);
};

export default GameButton;
