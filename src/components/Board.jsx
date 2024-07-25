import React, { useState } from 'react';
import Square from './Square';

const GameButton = () => {
	let [squares, setSquares] = useState(Array(9).fill(null));
	let [symbol, setSymbol] = useState('X');
	let status = '';

	const handleClick = (i) => {
		console.log('clicked :: Board', squares, symbol);
		if (squares[i] || decideWinner(squares)) {
			return;
		}
		const squaresTemp = squares.slice();
		squaresTemp[i] = symbol;
		setSymbol(symbol == 'X' ? 'O' : 'X');
		setSquares(squaresTemp);
		decideWinner();
	};
	const resetGame = () => {
		setSymbol('X');
		setSquares(Array(9).fill(null));
	};

	const decideWinner = (squares) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			let [a, b, c] = lines[i];
			if (
				squares &&
				squares[a] &&
				squares[b] &&
				squares[c] &&
				squares[a] == squares[b] &&
				squares[b] == squares[c]
			) {
				status = 'Winner is ' + squares[a];
				return squares[a];
			}
		}
		return null;
	};
	let winner = decideWinner(squares);
	if (winner) {
		status = `Winner is ${winner}`;
	}

	return (
		<>
			<p>Next Player: {symbol}</p>
			<p>{status != null ? status : ''}</p>
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
			<br />
			<br />
			<button onClick={resetGame}>Reset Game</button>
		</>
	);
};

export default GameButton;
