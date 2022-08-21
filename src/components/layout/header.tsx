import React from "react";
import { Link } from "react-router-dom";

import { Flex, Container } from "..";

const Header = () => {
  return (
    <Container>
      <Flex jc="center" ai="center">
        <Link to={"/"}>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="img"
          />
        </Link>
      </Flex>
    </Container>
  );
};

export { Header };
