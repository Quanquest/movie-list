import React from 'react';

const Add = ({handleAdd, handleChange}) => {
	// Misnomer.  Should be filter.
	return (
		<form onSubmit={handleAdd} >
			<input type='text' placeholder="Add film..." onChange={handleChange} />
			<input type='submit' value='Add' />
		</form>
		// Needs handleSearch function.
		// Live filter means on change.
	)
}



export default Add;

// <input type='text' placeholder="Find film..." onChange/>