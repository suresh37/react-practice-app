import React, { useState } from 'react';
import Square from './Square';

const GameButton = () => {
	let [squares, setSquares] = useState(Array(9).fill(null));
	let [symbol, setSymbol] = useState('X');
	const handleClick = (i) => {
		console.log('clicked :: Board', squares, symbol);
		const squaresTemp = squares.slice();
		squaresTemp[i] = symbol;
		setSymbol(symbol == 'X' ? '0' : 'X');
		setSquares(squaresTemp);
		decideWinner();
	};

	const decideWinner = () => {};

	return (
		<div className='board'>
			<div className='board-row'>
				<Square
					value={squares[0]}
					onSquareClick={() => handleClick(0)}
				></Square>
				<Square
					value={squares[1]}
					onSquareClick={() => handleClick(1)}
				></Square>
				<Square
					value={squares[2]}
					onSquareClick={() => handleClick(2)}
				></Square>
			</div>

			<div className='board-row'>
				<Square
					value={squares[3]}
					onSquareClick={() => handleClick(3)}
				></Square>
				<Square
					value={squares[4]}
					onSquareClick={() => handleClick(4)}
				></Square>
				<Square
					value={squares[5]}
					onSquareClick={() => handleClick(5)}
				></Square>
			</div>

			<div className='board-row'>
				<Square
					value={squares[6]}
					onSquareClick={() => handleClick(6)}
				></Square>
				<Square
					value={squares[7]}
					onSquareClick={() => handleClick(7)}
				></Square>
				<Square
					value={squares[8]}
					onSquareClick={() => handleClick(8)}
				></Square>
			</div>
		</div>
	);
};

export default GameButton;
