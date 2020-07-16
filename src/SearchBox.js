import React from 'react';

const SearchBox = ({SearchChange}) => {
return( 
		<div className='pa2' > 
			<input 
			className='pa3 ba b--black br2 bg-moon-gray' 
			type='search' 
			placeholder='Search Robots' 
			onChange={SearchChange}
			/>
		</div>
	);	
}

export default SearchBox;