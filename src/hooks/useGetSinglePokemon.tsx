import { useQuery } from "@tanstack/react-query";

import { getPokemon } from "../services";

const useGetSinglePokemon = (pokemonName: string, enabled = false) => {
  return useQuery(
    ["singlePokemon", pokemonName],
    () => getPokemon(pokemonName),
    {
      refetchOnWindowFocus: false,
      enabled, // disable this query from automatically running
    }
  );
};

export { useGetSinglePokemon };
