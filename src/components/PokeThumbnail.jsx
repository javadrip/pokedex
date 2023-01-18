import React from "react";

function PokeThumbnail(props) {
  return (
    <>
      <h1>{props.paddedId}</h1>
      <img
        src={
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
          props.paddedId +
          ".png"
        }
        alt=""
      ></img>
    </>
  );
}

export default PokeThumbnail;
