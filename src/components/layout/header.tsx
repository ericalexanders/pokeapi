import React from "react";

import { Flex, Container } from "..";

const Header = () => {
  return (
    <Container>
      <Flex jc="center" ai="center">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="img"
        />
      </Flex>
    </Container>
  );
};

export { Header };
