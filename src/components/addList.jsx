import React from 'react';

const AddList = ({handleAdd}) => {
	return (
		<ul>

			{
				films.map(function(film) {
					return <li>{film.title}</li>
				})
			}

		</ul>

	)

}

export default AddList;