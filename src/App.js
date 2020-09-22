import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import CharacterGrid from "./characters/CharacterGrid";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(result.data);
      setCharacters(result.data);
    };
    fetchItems();
  }, []);
  return (
    <div className="container">
      <Header />
      <CharacterGrid characters={characters} />
    </div>
  );
};
export default App;
