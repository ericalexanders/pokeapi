import React from "react";

import { Flex } from "..";
import { CardSt, Name, Img, Hr } from "./card.styled";

interface Pokemon {
  name: string;
  order: number;
  height: number;
  base_experience: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

interface PokemonProps {
  pokemon: Pokemon;
}

const Card = ({ pokemon }: PokemonProps) => {
  return (
    <CardSt>
      <Flex direction="column" jc="center" ai="center">
        <Img
          src={pokemon.sprites.other.dream_world.front_default}
          alt="pokeImg"
        />
        <Name>{pokemon.name}</Name>
        <Hr />
      </Flex>
      <br />
      <br />
      <Flex jc="center">
        <p>Order: {pokemon.order}</p>
        <p>Height: {pokemon.height}</p>
        <p>Base experience: {pokemon.base_experience}</p>
      </Flex>
    </CardSt>
  );
};

export { Card };
