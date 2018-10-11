import React from 'react';
import MovieList from './movieList.jsx';
import Search from './search.jsx';
import Title from './titleBar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        'Captain America: The First Avenger',
        'Inglourious Basterds',
        'Crazy Rich Asians',
        'Mission: Impossible - Fallout',
        'Star Trek'
      ],
      query: ''
    };
  };
  handleSearch(query) {
    this.setState({query});
  }

  render() {
    return (
      <div>
        <Title />
        <Search handleSearch={this.handleSearch.bind(this)} />
        <MovieList films={this.state.movies} />
      </div>
    )
  }
};

export default App;




