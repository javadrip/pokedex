import React from "react";
import PokeThumbnail from "./PokeThumbnail";

function Pokecard(props) {
  return (
    <div>
      <PokeThumbnail paddedId={props.paddedId} />
      <p>{props.name}</p>
    </div>
  );
}

export default Pokecard;
