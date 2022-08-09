import axios from "axios";

const POKE_API = process.env.REACT_APP_POKEAPI;

export const getPokemon = async (name: string) => {
  const { data } = await axios.get(
    `${POKE_API}/${name.replace(`${POKE_API}/`, "")}`
  );
  return data;
};
