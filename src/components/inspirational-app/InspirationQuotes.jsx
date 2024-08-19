import React from 'react';
import quotes from './quotes';
import FancyText from './FancyText';

const InspirationQuotes = ({ show, children }) => {
	const [index, setIndex] = React.useState(0);
	const quote = quotes[index];
	return show ?
			<>
				<FancyText
					show={true}
					title
					text='Inspiration App'
				/>
				<button
					onClick={() => setIndex(Math.floor(Math.random() * 10))}
				>
					Randomize
				</button>
				<FancyText
					show={true}
					text={quote}
				/>
				{children}
				<hr />
			</>
		:	'';
};

export default InspirationQuotes;
