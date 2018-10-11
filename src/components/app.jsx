import React from 'react';
import MovieList from './movieList.jsx';
import Search from './search.jsx';
import Title from './titleBar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // filter this movie list and pass it into movie list
      // should probably move this data to another component
      movies: [
        'Captain America: The First Avenger',
        'Inglourious Basterds',
        'Crazy Rich Asians',
        'Mission: Impossible - Fallout',
        'Star Trek'
      ],
      query: []
    };
  };

  // What does this do?  Does it invoke on initialization?
  componentDidMount() {
    this.setState({query: this.state.movies})
  }

  handleSearch(){
    // Sets new state? Bind to search input.
  };

  render() {
    return (
      <div>
        <Title />
        <Search handleSearch={this.handleSearch.bind(this)} />
        <MovieList films={this.state.query} />
      </div>
    )
  }
};

export default App;
