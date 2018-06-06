import React from 'react';

const Card = (props) => {
	const {id,name,email} = props;
	return (
		<div className="dib grow br3 ma3 pa3 bg-light-green bw2 shadow-5 tc">
			<img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;