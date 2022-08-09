export interface Pokemon {
  name: string;
  url: string;
}

type SortPokemonsType = {
  [x: string]: (Pokemon: any) => Pokemon[];
};

const alphabetic = (pokemons: Pokemon[]) => {
  const list = pokemons.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  return list;
};

export const sortPokemons: SortPokemonsType = {
  default: (pokemons: Pokemon[]) => pokemons,
  reverse: (pokemons: Pokemon[]) => pokemons.reverse(),
  alpha: alphabetic,
  alphaReverse: (pokemons: Pokemon[]) => alphabetic(pokemons).reverse(),
};
