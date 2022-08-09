import React from "react";

import { useGetAllPokemons } from "../../hooks";

import { Spinner, MiniCard, Flex } from "..";

import { sortPokemons } from "../../utils";

const options = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Mayor number",
    value: "reverse",
  },
  {
    label: "A-Z",
    value: "alpha",
  },
  {
    label: "Z-A",
    value: "alphaReverse",
  },
];

const PokemonList = () => {
  const [orderBy, setOrderBy] = React.useState("reverse");
  const { pokemons, isLoading, isFetching, fetchNextPage } =
    useGetAllPokemons();

  const handleScroll = React.useCallback(
    (e: any): void => {
      if (
        window.innerHeight + e.target.documentElement.scrollTop + 2 >=
        e.target.documentElement.scrollHeight
      ) {
        fetchNextPage();
      }
    },
    [fetchNextPage]
  );

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const pokemonsOrdered = sortPokemons[orderBy];

  return (
    <>
      <Flex jc="center" ai="center">
        <p>Order: -</p>
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Flex>
      <Flex>
        {pokemonsOrdered(pokemons).map((item: any) => (
          <MiniCard
            name={item.name}
            url={item.url}
            key={item.name + item.url}
          />
        ))}
      </Flex>
      {isLoading ||
        (isFetching && (
          <Flex jc="center" ai="center">
            <Spinner />
          </Flex>
        ))}
    </>
  );
};

export { PokemonList };
