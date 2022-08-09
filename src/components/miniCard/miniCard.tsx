import React from "react";
import { Link } from "react-router-dom";

import { SmallCard, Picture } from "./miniCard.styled";

type Props = {
  name: string;
  url: string;
};

const MiniCard = ({ name, url }: Props) => {
  const [image, setImage] = React.useState<string>();

  React.useEffect(() => {
    const fetchImg = () => {
      fetch(url)
        .then((res) => res.json())
        .then((pokeData) => {
          const img = pokeData.sprites.other.dream_world.front_default;
          setImage(img);
        });
    };
    fetchImg();
  }, [url]);

  return (
    <Link to={`/details/${name}`} style={{ textDecoration: "none" }}>
      <SmallCard>
        <p>{name}</p>
        <Picture>{image && <img src={image} alt="avatar" />}</Picture>
      </SmallCard>
    </Link>
  );
};

export { MiniCard };
