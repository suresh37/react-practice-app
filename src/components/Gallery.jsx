import React from 'react';

const Profile = () => {
	return (
		<div>
			<img
				style={{ paddingRight: 10 }}
				src='https://picsum.photos/seed/picsum/200/300'
				alt='https://picsum.photos/200/300'
			/>
			<p>Name</p>
		</div>
	);
};

const Gallery = ({ show }) => {
	return show ?
			<>
				<section>
					<h1>Profiles</h1>
					<Profile />
					<Profile />
					<Profile />
				</section>
				<hr />
			</>
		:	'';
};

export default Gallery;
