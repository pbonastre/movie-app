import React, {Component} from 'react';
import './App.css';
import "bulma/css/bulma.css";
import {Title} from  './components/Title';
import SearchForm from './components/SearchForm'

class App extends Component{
  state= {
    moviesResults:[],
  }

  handleMovieResults=(moviesResults) => 
  {
    this.setState({moviesResults,
    })
  }
  renderMoviesResults = () => {
    const {moviesResults} = this.state
    return moviesResults.map(movie => { 
      return <h2 key={movie.imdbID}>{movie.Title}</h2>
    })
  }

  render(){
    return (
      <div className="App">
          <Title>Search for movies</Title>
          <div className="SearchForm-wrapper">
            <SearchForm onMoviesResults={this.handleMovieResults} />
          </div>
          { this.state.moviesResults.length === 0 
          ? <p>No movies</p>
          :this.renderMoviesResults()
          }
      </div>
    );
  }
}

export default App;
