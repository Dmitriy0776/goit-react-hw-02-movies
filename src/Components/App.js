import React, { Component } from 'react';
import moviesJson from './moviesJson/movies.json';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';

const filterMovies = (items, input) => {
  return items.filter(item =>
    item.title.toLowerCase().includes(input.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    input: '',
  };

  handleInputSearch = e => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    const { input } = this.state;
    const filteredMovies = filterMovies(moviesJson, input);

    return (
      <>
        <SearchBar value={input} onCangeFilter={this.handleInputSearch} />

        <MovieGrid items={filteredMovies} />
      </>
    );
  }
}
