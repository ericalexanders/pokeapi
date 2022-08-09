import React from "react";
import { useParams } from "react-router-dom";

import { useGetSinglePokemon } from "../../hooks";
import { Spinner, Container, Flex, Card } from "../../components";

const Details = () => {
  const { pokemonName } = useParams();

  const { data, isLoading } = useGetSinglePokemon(pokemonName || "ditto", true);

  return (
    <Container>
      <br />
      <br />
      <br />
      <Flex jc="center" ai="center">
        {isLoading && <Spinner />}
        {data && <Card pokemon={data} />}
      </Flex>
    </Container>
  );
};

export default Details;
