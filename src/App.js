import React, { useState } from "react";
import "./App.css";
import bb from "./utils/bb.png";
import axios from "axios";
import request from "./utils/request";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((response) => {
        const data = response.data;
        this.setState(() => (this.state.characters = data));
        console.log(this.state.characters);
      });
  }
  render() {
    return (
      <div className="App">
        <img src={bb} />
        <div className="container">
          {this.state.characters.map((character) => (
            <div key={character.char_id}>
              <img className="img-character" src={character.img} />
              <h2>{character.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
