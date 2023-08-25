import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { game } from "../hooks/useGames";

interface Props {
  game: game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
