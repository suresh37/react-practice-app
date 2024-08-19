import React, { useCallback, useState } from 'react';
import Animal from './Animal';
import UseEffectTest from './UseEffectTest';

const HookPractice = ({ show }) => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('Dog');
	const [color, setColor] = useState('White');

	// Re-renders animal since nameHandler is not in useCallback
	const nameHandler = () => {
		console.log('nameHandler');
		setName(name == 'Dog' ? 'Cat' : 'Dog');
	};

	const colorHandler = useCallback(() => {
		console.log('colorHandler');
		setColor(color == 'White' ? 'Black' : 'White');
	}, [color]);

	return show ?
			<div>
				<h4>UseCallback Practice</h4>
				<p>counter: {count}</p>
				<button onClick={() => setCount(count + 1)}>count++</button>
				<br />
				<br />
				<Animal
					name={name}
					color={color}
					nameHandler={nameHandler}
					colorHandler={colorHandler}
				/>
				<hr />
				<UseEffectTest />
				<hr />
			</div>
		:	'';
};

export default HookPractice;
