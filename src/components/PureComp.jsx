let guest = 0;

const Guest = ({ num }) => {
	//guest = guest + 1;
	return (
		<>
			Guest # {num}
			<br />
		</>
	);
};
/**
 * Pure Comp and iterating List
 */
const PureComp = ({ show }) => {
	let nums = [1, 2, 3];
	let guestsNew = [7, 9].map((n) => <Guest num={n}></Guest>);
	return show ?
			<div>
				{(() => {
					const guests = [];
					for (let n of nums) {
						guests.push(<Guest num={n}></Guest>);
					}
					return guests;
				})()}
				<br />
				{guestsNew}
				{/* <Guest num={1} />
			<Guest num={2} />
			<Guest num={3} /> */}
				<hr />
			</div>
		:	'';
};

export default PureComp;
