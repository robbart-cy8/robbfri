import React from 'react';
import Cards from './Cards';


const CardList = ({robs})=>{
	return(
		<div>
			{
				robs.map((item, i) => { 
					return(
							<Cards
							key = {i}
							id = { robs[i].id }
							name = { robs[i].name }
							email = { robs[i].email}
							/>
					);

				})


			}
		</div>
	);

}

export default CardList;