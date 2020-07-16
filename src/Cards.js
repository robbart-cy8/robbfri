import React from 'react';

const Cards = ({ id, name, email }) =>{
	return (
				<div className= 'tc grow white bg-near-black br3 pa3 ma2 dib bw2 shadow-3'>
				    <img alt='rob pic' src={`https://robohash.org/${id}?size=200x200`} />
				    <div className = 'tc'>

				    	<h2>{name}</h2>
				    	<h3>{email}</h3>
				    	
				    </div>
				</div>
		);
	
}

export default Cards;