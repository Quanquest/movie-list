import React from 'react';
import MovieList from './movieList.jsx';
import Search from './search.jsx';
import Title from './titleBar.jsx';
// import AddList from './addList.jsx';
import Add from './add.jsx';
import PhaseOne from './mcu.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // filter this movie list and pass it into movie list
      // should probably move this data to another component

      movies: [
        // {title: 'Black Panther'},
        // {title: 'Pulp Fiction'},
        // {title: 'Crazy Rich Asians'},
        // {title: 'Zoolander'},
        // {title: 'Tombstone'}
      ],
      value: '',
      select: [],
      query: ''
    };
  };

  componentDidMount() {
    this.setState({select: this.state.movies})
  }

  handleSearch(event) {
    var filtMovies = this.state.movies.filter(film => film.title.toLowerCase().includes(event.target.value));
    this.setState({query: event.target.value, select: filtMovies})
  };

  handleChange(event) {
    this.setState({value: event.target.value});
    // console.log('Hail Satan')
  }

  handleAdd(event) {
    // console.log('Hail Satan')
    // this.setState({movies: this.state.movies.push(event.target.value)})
    event.preventDefault();
    var newFilm = {title: this.state.value}
    this.setState({movies: [...this.state.movies, newFilm], select: [...this.state.select, newFilm], value: ''})
  }

  marvel(event) {
    event.preventDefault();
    var phaseOneTitles = [{title: 'Iron Man'}, {title: 'The Incredible Hulk'}, {title: 'Iron Man 2'}, {title: 'Thor'}, {title: 'Captain America: The First Avenger'}, {title: 'The Avengers'}]
    this.setState({movies: [...this.state.movies, ...phaseOneTitles], select: [...this.state.select, ...phaseOneTitles]})
  }

  render() {
    return (
      <div>
        <Title />
        <Search handleSearch={this.handleSearch.bind(this)} />
        <Add handleAdd={this.handleAdd.bind(this)} handleChange={this.handleChange.bind(this)} />
        <PhaseOne marvel={this.marvel.bind(this)} />
        <MovieList films={this.state.select} />

      </div>
    )
  }
};

export default App;