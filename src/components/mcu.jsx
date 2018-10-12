import React from 'react';

const PhaseOne = ({marvel}) => {
	// Misnomer.  Should be filter.
	return (
		<form onSubmit={marvel} >
			<input type='submit' value='Marvel Cinematic Universe' />
		</form>
		// Needs handleSearch function.
		// Live filter means on change.
	)
}



export default PhaseOne;

// <input type='text' placeholder="Find film..." onChange/>