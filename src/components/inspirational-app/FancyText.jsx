import React from 'react';

const FancyText = ({ title, text }) => {
	return title ? <h2>{text}</h2> : <h4>{text}</h4>;
};

export default FancyText;
