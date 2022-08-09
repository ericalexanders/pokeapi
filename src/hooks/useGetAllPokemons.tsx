import { useInfiniteQuery } from "@tanstack/react-query";

import { getPokemon } from "../services";

import { AllPokemonResponse } from "../models";

export const useGetAllPokemons = () => {
  const { data, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery(
      ["allPokemons"],
      ({ pageParam = "?limit=24offset=0" }) => {
        return getPokemon(pageParam);
      },
      {
        getNextPageParam: (lastPage: AllPokemonResponse) => {
          return lastPage.next;
        },
      }
    );

  const pokemons =
    data?.pages.reduce((previous, page) => previous.concat(page.results), []) ??
    [];

  return {
    pokemons,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
  };
};
