import React from "react";
import CharacterItem from "./CharacterItem";
const CharacterGrid = ({ characters }) => (
  <div>
    <section className="cards">
      {characters.map((character) => (
        <CharacterItem
          key={character.char_id}
          character={character}
        ></CharacterItem>
      ))}
    </section>
  </div>
);

export default CharacterGrid;
