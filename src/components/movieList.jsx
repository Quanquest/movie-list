import React from 'react';
// import ReactDOM from 'react-dom';

const MovieList = (props) => {
	return (
		<ul>
			<li>{props.movies[0].title}</li>
			<li>{props.movies[1].title}</li>
			<li>{props.movies[2].title}</li>
			<li>{props.movies[3].title}</li>
			<li>{props.movies[4].title}</li>
		</ul>

	)	

};

export default MovieList;