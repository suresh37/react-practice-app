import React from 'react';

const FancyText = ({ show, title, text }) => {
	return (
		show ?
			title ? <h2>{text}</h2>
			:	<h4>{text}</h4>
		:	''
	);
};

export default FancyText;
