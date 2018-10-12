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
        'Black Panther',
        'Inglourious Basterds',
        'Crazy Rich Asians',
        'Zoolander',
        'Tombstone'
      ],
      select: [],
      query: ''
    };
  };

  componentDidMount() {
    this.setState({select: this.state.movies})
  }

  handleSearch(event){
    this.setState({query: event.target.value})
    var filtMovies = this.state.movies.filter(film => film.toLowerCase().includes(this.state.query/**/));
    this.setState({select: filtMovies})

  };

  render() {
    return (
      <div>
        <Title />
        <Search handleSearch={this.handleSearch.bind(this)} />
        <MovieList films={this.state.select} />
      </div>
    )
  }
};

export default App;