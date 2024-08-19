import React from 'react';
import quotes from './quotes';
import FancyText from './FancyText';

const InspirationQuotes = ({ children }) => {
	const [index, setIndex] = React.useState(0);
	const quote = quotes[index];
	return (
		<>
			<FancyText text={quote} />
			<button onClick={() => setIndex(Math.floor(Math.random() * 10))}>
				Randomize
			</button>
			{children}
			<hr />
		</>
	);
};

export default InspirationQuotes;
