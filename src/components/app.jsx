import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movieList.jsx';
import Search from './search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { title: 'Captain America: The First Avenger' },
        { title: 'Inglourious Basterds' },
        { title: 'Crazy Rich Asians' },
        { title: 'Mission: Impossible - Fallout' },
        { title: 'Star Trek' }
      ]
    };
  };


  render() {
    return (
      <div>
        <Search />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
};

export default App;




