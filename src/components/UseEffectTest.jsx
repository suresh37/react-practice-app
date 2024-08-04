import React, { useEffect, useState } from 'react';

const UseEffectTest = () => {
	const [std, setStd] = useState({ id: 1, name: 'Suresh' });
	const [marks, setMarks] = useState([90, 95]);

	function changeStudent() {
		console.log('changeStudent :: Clicked');
		setStd(Object.assign({}, { id: 1, name: 'Suresh' }));
		//setStd(Object.assign({}, { id: 2, name: 'Ramesh' }));
	}
	function changeMarks() {
		console.log('changeMarks :: Clicked');
		setMarks([...[90, 95]]);
	}

	useEffect(() => {
		console.log('Inside useEffect:: std');
	}, [JSON.stringify(std)]);

	useEffect(() => {
		console.log('Inside useEffect :: marks');
	}, [JSON.stringify(marks)]);

	return (
		<div>
			<h4>UseEffect Practice</h4>
			<p> {std?.id}</p>
			<p> {std?.name}</p>
			<p> {marks[0]}</p>
			<p> {marks[1]}</p>
			<button onClick={changeStudent}> Change Student</button>
			<br />
			<button onClick={changeMarks}> Change Marks</button>
		</div>
	);
};

export default UseEffectTest;
