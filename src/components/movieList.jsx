import React from 'react';
// import ReactDOM from 'react-dom';

const MovieList = ({films}) => {
	return (
		

		
		<ul>
			{
				films.map(function(film) {
					return <li>{film}</li>
				})
			}
		</ul>
	)	

};

export default MovieList;

      // {
      //   this.props.items.map(function(item) {
      //     return <li>{item}</li>
      //   })
      //  }

      			// <li>{props.films[0]}</li>
			// <li>{props.films[1]}</li>
			// <li>{props.films[2]}</li>
			// <li>{props.films[3]}</li>
			// <li>{props.films[4]}</li>