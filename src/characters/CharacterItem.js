import React from "react";

const CharacterItem = ({ character }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={character.img} alt={character.name} />
      </div>
      <div className="card-infos">
        <h1>{character.name}</h1>
        <ul>
          <li>Actor name : {character.portrayed}</li>
          <li>Nickname : {character.name}</li>
          <li>Birthday : {character.birthday}</li>
          <li>Status : {character.status}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterItem;
