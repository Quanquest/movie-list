import React from 'react';

const Search = ({query}) => {
	return (
		<input placeholder="Find a film..." onChange={query => handleSearch(query.target.value)} />
	)
}


export default Search;