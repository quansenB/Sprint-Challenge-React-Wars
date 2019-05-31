import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  renderCharacters() {
    return this.state.starwarsChars.map(character => {
      return (
        <div className="character">
          <div className="characterName">Name: {character.name}</div>
          <div>Birth Year: {character.birth_year}</div>
          {/* <div>Species: {character.species[0].name}</div> */}
          {/* <div>Species: {JSON.parse(character.species[0]).name}</div> */}
          <div>Height: {character.height}</div>
          <div>Weight: {character.mass}</div>
          <div>Eyecolor: {character.eye_color}</div>
          <div>Skincolor: {character.skin_color}</div>
          <div>Appearances: {character.films.length}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="charactersContainer">{this.renderCharacters()}</div>
      </div>
    );
  }
}

export default App;
