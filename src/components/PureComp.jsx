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

const PureComp = () => {
	let nums = [1, 2, 3];
	return (
		<div>
			{(() => {
                const guests = [];
                for(let n of nums){
                    guests.push(<Guest num ={n}></Guest>);
                }
                return guests;
			})()}
			{/* <Guest num={1} />
			<Guest num={2} />
			<Guest num={3} /> */}
		</div>
	);
};

export default PureComp;
