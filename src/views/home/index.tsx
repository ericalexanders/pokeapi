import React from "react";

import {
  Container,
  Flex,
  SearchBar,
  PokemonList,
  MiniCard,
  Spinner,
} from "../../components";

import { useGetSinglePokemon } from "../../hooks";

const Home = () => {
  const [search, setSearch] = React.useState<string>("");

  const { data, isLoading, refetch } = useGetSinglePokemon(search);

  function handleClick() {
    refetch();
  }

  return (
    <Container>
      <SearchBar
        value={search}
        onClick={handleClick}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && data && (
        <Flex jc="center">
          <MiniCard
            name={data.name}
            url={process.env.REACT_APP_POKEAPI + `/${data.id}`}
          />
          {isLoading && <Spinner />}
        </Flex>
      )}
      {!search && <PokemonList />}
    </Container>
  );
};

export default Home;
